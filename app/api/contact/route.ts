import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const DOWN_MESSAGE =
  "Form is temporarily down — email us at plushagrisolutions@gmail.com or WhatsApp 08087702906.";

// Basic in-memory rate limit. Resets on cold start and isn't shared across
// serverless instances, but stops the obvious repeat-submit / script case.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count += 1;
  return false;
}

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later, or email plushagrisolutions@gmail.com directly." },
      { status: 429 }
    );
  }

  let body: { name?: string; email?: string; phone?: string; message?: string; company?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, phone, message, company } = body;

  // Honeypot: real visitors never fill this hidden field. Bots that
  // autofill every input do. Pretend success so they don't adapt.
  if (company) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    console.error("/api/contact: GMAIL_USER or GMAIL_APP_PASSWORD is not set");
    return NextResponse.json({ error: DOWN_MESSAGE }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailAppPassword },
  });

  try {
    await transporter.sendMail({
      from: gmailUser,
      to: gmailUser,
      replyTo: email,
      subject: `Website inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "not provided"}\n\n${message}`,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("/api/contact: failed to send email", err);
    return NextResponse.json({ error: DOWN_MESSAGE }, { status: 500 });
  }
}
