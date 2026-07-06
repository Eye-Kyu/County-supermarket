import { NextResponse } from "next/server";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 500 }
      );
    }

    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required." },
        { status: 400 }
      );
    }

    // Notify County Supermarket
    const adminResponse = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "County Supermarket <info@countysupermarkets.co.ke>",
        to: ["info@countysupermarkets.co.ke"],
        subject: "New Newsletter Subscriber",
        html: `
          <h2>New Newsletter Subscription</h2>

          <p>A visitor subscribed to the newsletter.</p>

          <p><strong>Email:</strong> ${email}</p>
        `,
      }),
    });

    if (!adminResponse.ok) {
      return NextResponse.json(
        { message: "Unable to subscribe." },
        { status: 500 }
      );
    }

    // Welcome email
    await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "County Supermarket <info@countysupermarkets.co.ke>",
        to: [email],
        subject: "Welcome to the County Family!",
        html: `
          <h2>Welcome!</h2>

          <p>Thank you for subscribing to the County Supermarket newsletter.</p>

          <p>
            You'll be among the first to hear about:
          </p>

          <ul>
            <li>Weekly specials</li>
            <li>New branch openings</li>
            <li>Exclusive promotions</li>
            <li>Loyalty rewards</li>
          </ul>

          <p>We're glad to have you with us!</p>

          <p><strong>County Supermarket</strong></p>
        `,
      }),
    });

    return NextResponse.json({
      message: "Successfully subscribed.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}