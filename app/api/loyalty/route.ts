import { NextResponse } from "next/server";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          message: "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    const { fullName, phone, email } = await request.json();

    if (!fullName || !phone || !email) {
      return NextResponse.json(
        {
          message: "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    //
    // Notify Loyalty Team
    //
    const adminResponse = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "County Loyalty <loyalty@countysupermarkets.co.ke>",
        to: ["loyalty@countysupermarkets.co.ke"],
        reply_to: email,
        subject: `New Loyalty Registration - ${fullName}`,
        html: `
          <h2>New County Loyalty Registration</h2>

          <table cellpadding="8" cellspacing="0" border="0">
            <tr>
              <td><strong>Full Name</strong></td>
              <td>${fullName}</td>
            </tr>

            <tr>
              <td><strong>Phone Number</strong></td>
              <td>${phone}</td>
            </tr>

            <tr>
              <td><strong>Email Address</strong></td>
              <td>${email}</td>
            </tr>

            <tr>
              <td><strong>Registration Date</strong></td>
              <td>${new Date().toLocaleString()}</td>
            </tr>
          </table>

          <hr>

          <p>
            A new customer has registered for the County Supermarket Loyalty Programme.
          </p>
        `,
      }),
    });

    if (!adminResponse.ok) {
      const error = await adminResponse.text();

      console.error("Admin Email Error:", error);

      return NextResponse.json(
        {
          message:
            "Unable to process your registration. Please try again later.",
        },
        {
          status: 500,
        }
      );
    }

    //
    // Welcome Email
    //
    const customerResponse = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "County Loyalty <loyalty@countysupermarkets.co.ke>",
        to: [email],
        subject: "Welcome to the County Loyalty Programme!",
        html: `
          <h2>Welcome to County Rewards, ${fullName}!</h2>

          <p>
            Thank you for joining the <strong>County Supermarket Loyalty Programme.</strong>
          </p>

          <p>
            Your registration has been received successfully.
          </p>

          <h3>What happens next?</h3>

          <ol>
            <li>Visit any County Supermarket branch.</li>
            <li>Proceed to the Customer Service Desk.</li>
            <li>Provide the phone number you registered with.</li>
            <li>Collect your Loyalty Card.</li>
            <li>Start earning rewards immediately.</li>
          </ol>

          <h3>Your Membership Benefits</h3>

          <ul>
            <li>Earn 1 point for every KES 100 spent.</li>
            <li>Exclusive member-only discounts.</li>
            <li>Birthday rewards.</li>
            <li>Priority access to promotions.</li>
            <li>Special seasonal offers.</li>
          </ul>

          <p>
            We look forward to rewarding your loyalty.
          </p>

          <br>

          <p>
            <strong>County Loyalty Team</strong><br>
            County Supermarket<br>
            Shop More. Save More. Live Better.
          </p>
        `,
      }),
    });

    if (!customerResponse.ok) {
      const error = await customerResponse.text();

      console.error("Customer Email Error:", error);
    }

    return NextResponse.json({
      message:
        "Registration successful! Please visit any County Supermarket branch with your phone number to collect your Loyalty Card.",
    });
  } catch (error) {
    console.error("Loyalty Registration Error:", error);

    return NextResponse.json(
      {
        message:
          "An unexpected error occurred. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}