import { NextRequest, NextResponse } from "next/server";

// TODO: Add email integration before launch.
// Install: npm install nodemailer  OR  npm install resend
// Send to: plushagrisolutions@gmail.com
// Use env vars: SMTP_HOST, SMTP_USER, SMTP_PASS  OR  RESEND_API_KEY

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    console.log("General inquiry received:", {
      name,
      email,
      phone: phone || "not provided",
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Send email to plushagrisolutions@gmail.com

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission." },
      { status: 500 }
    );
  }
}
