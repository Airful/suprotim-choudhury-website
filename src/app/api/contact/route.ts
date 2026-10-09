import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "suprodhury@gmail.com";

// Resend's shared address — works without a verified domain, since no
// domain has been verified for suprotim.com in Resend yet.
const FROM_EMAIL = "Suprotim Choudhury Website <onboarding@resend.dev>";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json(
      { error: "Name, email, and message are all required." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "Email is not configured on the server." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `New enquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });

  if (error) {
    console.error("Resend send failed:", error);
    return NextResponse.json(
      { error: "Could not send the message. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
