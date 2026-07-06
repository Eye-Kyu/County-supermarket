import type { ApplicationResult, ApplicationValues, JobRole } from "../types/careers";
import { CAREERS_ENDPOINT } from "./constants";

export async function submitCareerApplication(
  values: ApplicationValues,
  job: JobRole | null,
): Promise<ApplicationResult> {
  const formData = new FormData();

  formData.append("jobId", job?.id ?? "general");
  formData.append("jobTitle", job?.title ?? "General Employment Application");
  formData.append("department", job?.department ?? "General Employment");
  formData.append("location", job?.location ?? "Any Branch");
  formData.append("employmentType", job?.employmentType ?? "Open Application");
  formData.append("experience", job?.experience ?? "Not specified");
  formData.append("closingDate", job?.closingDate ?? "Open");

  formData.append("fullName", values.fullName);
  formData.append("email", values.email);
  formData.append("phone", values.phone);
  formData.append("currentLocation", values.currentLocation);
  formData.append("linkedIn", values.linkedIn);
  formData.append("portfolio", values.portfolio);
  formData.append("coverLetter", values.coverLetter);

  if (values.cv) formData.append("cv", values.cv);
  if (values.certificates) formData.append("certificates", values.certificates);

  const response = await fetch(CAREERS_ENDPOINT, {
    method: "POST",
    body: formData,
  });

  const payload = (await response.json().catch(() => null)) as { message?: string } | null;

  if (!response.ok) {
    return {
      ok: false,
      message: payload?.message ?? "Unable to submit your application. Please try again later.",
    };
  }

  return {
    ok: true,
    message: payload?.message ?? "Application submitted successfully.",
  };
}
