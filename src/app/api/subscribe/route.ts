import { NextResponse } from "next/server";

/**
 * PLACEHOLDER newsletter subscription endpoint.
 * Replace this with a real integration (Mailchimp, ConvertKit, Klaviyo,
 * Beehiiv, etc.) before launch. Currently logs the submission and
 * returns success so the front-end UX can be fully tested.
 */
export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }
    console.log("[Flourish] Newsletter signup (placeholder):", email);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
