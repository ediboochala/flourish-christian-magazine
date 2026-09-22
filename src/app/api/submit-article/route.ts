import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Article/testimony submission endpoint — delivers submissions by email
 * via Resend (https://resend.com), the same service and account the
 * contact form uses (see `src/app/api/contact/route.ts`).
 *
 * Required environment variables (Vercel → Project → Settings →
 * Environment Variables, and `.env.local` for local dev):
 *
 *   RESEND_API_KEY           API key from the Resend dashboard.
 *   SUBMIT_ARTICLE_TO_EMAIL  Where submissions are delivered. Defaults to
 *                            oureditorialboard@gmail.com (see note below —
 *                            NOT writeforflourishmagazine@gmail.com yet).
 *   CONTACT_FROM_EMAIL       The "from" address (shared with the contact
 *                            form). Until the sending domain is verified
 *                            in Resend, this stays Resend's shared test
 *                            sender.
 *
 * IMPORTANT: this Resend account's sending domain isn't verified yet, so
 * it's restricted to Resend's sandbox mode — it can only deliver to the
 * account's own signup address (oureditorialboard@gmail.com), confirmed
 * live: sending to writeforflourishmagazine@gmail.com is rejected with
 * "You can only send testing emails to your own email address." Defaulting
 * here to the address that actually works rather than silently breaking
 * every real submission. Once flourishchristianmagazine.org is verified in
 * Resend (Dashboard → Domains), set SUBMIT_ARTICLE_TO_EMAIL to
 * writeforflourishmagazine@gmail.com to route submissions there instead.
 */

const TO_EMAIL = process.env.SUBMIT_ARTICLE_TO_EMAIL || "oureditorialboard@gmail.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Flourish Article Submissions <onboarding@resend.dev>";

// Resend's request body cap is 40MB; stay comfortably under it since the
// submission text is also part of the same payload.
const MAX_ATTACHMENT_BYTES = 15 * 1024 * 1024;

const clean = (value: FormDataEntryValue | null) => (typeof value === "string" ? value.trim() : "");
const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const fullName = clean(formData.get("fullName"));
  const email = clean(formData.get("email"));
  const articleTitle = clean(formData.get("articleTitle"));
  const category = clean(formData.get("category"));
  const articleContent = clean(formData.get("articleContent"));
  const authorBio = clean(formData.get("authorBio"));
  const consent = formData.get("consent");

  if (!fullName || !email || !articleTitle || !category || !articleContent || !authorBio || !consent) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const attachments: { filename: string; content: Buffer }[] = [];
  for (const field of ["profilePhoto", "supportingImage"] as const) {
    const file = formData.get(field);
    if (file instanceof File && file.size > 0) {
      if (file.size > MAX_ATTACHMENT_BYTES) {
        return NextResponse.json(
          { error: `${field === "profilePhoto" ? "Profile photo" : "Supporting image"} is too large (15MB max).` },
          { status: 400 }
        );
      }
      attachments.push({
        filename: file.name || field,
        content: Buffer.from(await file.arrayBuffer()),
      });
    }
  }

  if (!process.env.RESEND_API_KEY) {
    console.error(
      "[Flourish] Article submissions aren't configured: RESEND_API_KEY is missing. Submission was not delivered:",
      { fullName, email, articleTitle, category }
    );
    return NextResponse.json(
      { error: "Submissions aren't set up yet. Please email your story to us directly for now." },
      { status: 503 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Flourish Submission] ${category}: ${articleTitle}`,
      text: [
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Category: ${category}`,
        `Article title: ${articleTitle}`,
        "",
        "--- Article content ---",
        articleContent,
        "",
        "--- Author biography ---",
        authorBio,
      ].join("\n"),
      html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;font-size:14px;color:#241f21;line-height:1.6">
          <p style="margin:0 0 4px"><strong>Name:</strong> ${escapeHtml(fullName)}</p>
          <p style="margin:0 0 4px"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p style="margin:0 0 4px"><strong>Category:</strong> ${escapeHtml(category)}</p>
          <p style="margin:0 0 12px"><strong>Article title:</strong> ${escapeHtml(articleTitle)}</p>
          <hr style="border:none;border-top:1px solid #e5e0e2;margin:12px 0" />
          <p style="margin:0 0 4px"><strong>Article content</strong></p>
          <p style="white-space:pre-wrap;margin:0 0 16px">${escapeHtml(articleContent)}</p>
          <hr style="border:none;border-top:1px solid #e5e0e2;margin:12px 0" />
          <p style="margin:0 0 4px"><strong>Author biography</strong></p>
          <p style="white-space:pre-wrap;margin:0">${escapeHtml(authorBio)}</p>
        </div>
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error("[Flourish] Resend error (article submission):", error);
      return NextResponse.json(
        { error: "We couldn't send your submission right now. Please try again shortly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Flourish] Article submission send failed:", err);
    return NextResponse.json(
      { error: "We couldn't send your submission right now. Please try again shortly." },
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
