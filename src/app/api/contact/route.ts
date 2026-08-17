import { NextResponse } from "next/server";

/**
 * PLACEHOLDER contact form endpoint. Replace with a real email delivery
 * service (Resend, SendGrid, Postmark, etc.) or CRM integration before
 * launch. Currently logs the submission and returns success.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, inquiryType } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    console.log("[Flourish] Contact submission (placeholder):", {
      name,
      email,
      subject,
      inquiryType,
      message,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
