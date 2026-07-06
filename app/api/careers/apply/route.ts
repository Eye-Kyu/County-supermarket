import { NextResponse } from "next/server";
import { DEFAULT_CAREERS_EMAIL } from "../../../utils/constants";
import { buildApplicantConfirmationEmail, buildHrApplicationEmail } from "../../../utils/emailTemplates";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

type Attachment = {
  filename: string;
  content: string;
};

async function fileToAttachment(file: File | null): Promise<Attachment | null> {
  if (!file || file.size === 0) return null;

  const buffer = Buffer.from(await file.arrayBuffer());
  return {
    filename: file.name,
    content: buffer.toString("base64"),
  };
}

function readString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

async function sendResendEmail(apiKey: string, payload: unknown): Promise<Response> {
  return fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const apiKey = process.env.RESEND_API_KEY;
    const careersEmail = process.env.CAREERS_EMAIL ?? DEFAULT_CAREERS_EMAIL;

    const applicant = {
      fullName: readString(formData, "fullName"),
      email: readString(formData, "email"),
      phone: readString(formData, "phone"),
      currentLocation: readString(formData, "currentLocation"),
      linkedIn: readString(formData, "linkedIn"),
      portfolio: readString(formData, "portfolio"),
      coverLetter: readString(formData, "coverLetter"),
    };

    const job = {
      id: readString(formData, "jobId"),
      title: readString(formData, "jobTitle"),
      department: readString(formData, "department"),
      location: readString(formData, "location"),
      employmentType: readString(formData, "employmentType"),
      experience: readString(formData, "experience"),
      closingDate: readString(formData, "closingDate"),
    };

    const cv = formData.get("cv") instanceof File ? (formData.get("cv") as File) : null;
    const certificates = formData.get("certificates") instanceof File ? (formData.get("certificates") as File) : null;
    const attachments = (await Promise.all([fileToAttachment(cv), fileToAttachment(certificates)])).filter(
      (attachment): attachment is Attachment => Boolean(attachment),
    );

    if (!applicant.fullName || !applicant.email || !applicant.phone || !cv) {
      return NextResponse.json({ message: "Required application details are missing." }, { status: 400 });
    }

    const timestamp = new Date().toISOString();
    const hrSubject = `Application - ${job.title || "General Employment Application"} - ${applicant.fullName}`;

    if (!apiKey) {
      return NextResponse.json({
        message: "Application received. Email delivery is not configured in this environment.",
      });
    }

    const hrResponse = await sendResendEmail(apiKey, {
      from: "County Supermarket Careers <careers@countysupermarkets.co.ke>",
      to: [careersEmail],
      subject: hrSubject,
      html: buildHrApplicationEmail(job, applicant, timestamp),
      attachments,
    });

    if (!hrResponse.ok) {
      return NextResponse.json({ message: "Unable to submit your application. Please try again later." }, { status: 502 });
    }

    await sendResendEmail(apiKey, {
      from: "County Supermarket HR <careers@countysupermarkets.co.ke>",
      to: [applicant.email],
      subject: "We've received your application",
      html: buildApplicantConfirmationEmail(applicant.fullName),
    });

    return NextResponse.json({ message: "Application submitted successfully." });
  } catch {
    return NextResponse.json({ message: "Unable to submit your application. Please try again later." }, { status: 500 });
  }
}

