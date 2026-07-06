import { NextResponse } from "next/server";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function read(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 500 }
      );
    }

    const formData = await request.formData();

    const firstName = read(formData, "firstName");
    const lastName = read(formData, "lastName");
    const email = read(formData, "email");
    const subject =
      read(formData, "subject") || "Website Contact Form";
    const message = read(formData, "message");

    if (!email || !message) {
      return NextResponse.json(
        { message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          "County Supermarket Website <info@countysupermarkets.co.ke>",
        to: ["info@countysupermarkets.co.ke"],
        reply_to: email,
        subject,
        html: `
          <h2>New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${firstName} ${lastName}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Subject:</strong> ${subject}</p>

          <hr>

          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.text();

      console.error(error);

      return NextResponse.json(
        { message: "Unable to send your message." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Thank you. Your message has been sent.",
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}