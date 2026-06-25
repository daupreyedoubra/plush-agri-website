import { NextRequest, NextResponse } from "next/server";

// TODO: Add email integration before launch.
// Install: npm install nodemailer  OR  npm install resend
// Credentials: plushagrisolutions@gmail.com / +234 803 367 0509
// Use environment variables: SMTP_HOST, SMTP_USER, SMTP_PASS, or RESEND_API_KEY

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, organisation, partnershipType, message } = body;

    if (!name || !organisation || !partnershipType || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Log submission server-side (replace with email send when credentials are added)
    console.log("Partnership inquiry received:", {
      name,
      organisation,
      partnershipType,
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
