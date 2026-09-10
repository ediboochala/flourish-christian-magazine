import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Contact form endpoint — delivers submissions straight to the Flourish
 * inbox by email via Resend (https://resend.com).
 *
 * Required environment variables (set them in Vercel → Project → Settings
 * → Environment Variables, and in `.env.local` for local dev):
 *
 *   RESEND_API_KEY      API key from the Resend dashboard.
 *   CONTACT_TO_EMAIL    Where submissions are delivered.
 *                       Defaults to oureditorialboard@gmail.com.
 *   CONTACT_FROM_EMAIL  The "from" address. Until the sending domain is
 *                       verified in Resend, use "onboarding@resend.dev"
 *                       (Resend's shared test sender). After verifying
 *                       flourishchristianmagazine.org, switch this to
 *                       e.g. "Flourish <contact@flourishchristianmagazine.org>".
 */

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "oureditorialboard@gmail.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Flourish Contact Form <onboarding@resend.dev>";

const INQUIRY_LABELS: Record<string, string> = {
  general: "General Inquiry",
  contributor: "Contributor Inquiry",
  event: "Event Inquiry",
  press: "Press / Media",
  other: "Other",
};

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const clean = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const subject = clean(body.subject);
  const message = clean(body.message);
  const inquiryType = clean(body.inquiryType);
  // Honeypot: real users never fill a hidden field.
  const trap = clean(body.company);

  if (trap) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (message.length > 5000 || subject.length > 200 || name.length > 200) {
    return NextResponse.json({ error: "That message is a little too long." }, { status: 400 });
  }

  const inquiryLabel = INQUIRY_LABELS[inquiryType] || "General Inquiry";

  if (!process.env.RESEND_API_KEY) {
    console.error(
      "[Flourish] Contact form is not configured: RESEND_API_KEY is missing. Submission was not delivered:",
      { name, email, subject, inquiryLabel }
    );
    return NextResponse.json(
      { error: "The contact form isn't set up yet. Please email us directly for now." },
      { status: 503 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Flourish Contact] ${inquiryLabel}: ${subject}`,
      text: [
        `Inquiry type: ${inquiryLabel}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;font-size:14px;color:#241f21;line-height:1.6">
          <p style="margin:0 0 4px"><strong>Inquiry type:</strong> ${escapeHtml(inquiryLabel)}</p>
          <p style="margin:0 0 4px"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin:0 0 4px"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p style="margin:0 0 12px"><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <hr style="border:none;border-top:1px solid #e5e0e2;margin:12px 0" />
          <p style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("[Flourish] Resend error:", error);
      return NextResponse.json(
        { error: "We couldn't send your message right now. Please try again shortly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Flourish] Contact send failed:", err);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again shortly." },
      { status: 502 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
