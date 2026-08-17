import { NextResponse } from "next/server";

/**
 * PLACEHOLDER article/testimony submission endpoint.
 * Replace with a real CMS write (Sanity, Contentful, Payload, custom
 * database) plus file storage (S3, Cloudinary, etc.) for uploaded
 * images before launch. Currently logs field names and returns success
 * so the front-end submission UX can be fully tested end-to-end.
 */
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const articleTitle = formData.get("articleTitle");
    const category = formData.get("category");

    if (!fullName || !email || !articleTitle || !category) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    console.log("[Flourish] Article submission (placeholder):", {
      fullName,
      email,
      articleTitle,
      category,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }
}
