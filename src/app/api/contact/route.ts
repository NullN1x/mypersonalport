import { NextResponse } from "next/server";
import { Resend } from "resend";
import { env } from "@/env.js"; // <--- Import env from t3-env

// Initialize Resend with your API key using env.RESEND_API_KEY
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const resend = new Resend(env.RESEND_API_KEY); // <--- Use env.RESEND_API_KEY

export async function POST(request: Request) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { name, email, message } = await request.json();

    // Validate inputs (optional, but good practice)
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    // Send the email using Resend
    const data = await resend.emails.send({
      from: "Resend Job Contact <onboarding@resend.dev>", // IMPORTANT: Use a verified domain or 'onboarding@resend.dev' for testing
      to: "n84035143@gmail.com", // This is for testing only! Or use your actual recipient email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("Email sent successfully:", data); // Log success

    return NextResponse.json(
      { message: "Email sent successfully!", data },
      { status: 200 },
    );
  } catch (error) {
    console.error("Failed to send email:", error); // Log the actual error for debugging

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 },
    );
  }
}
