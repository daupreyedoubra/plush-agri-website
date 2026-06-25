import { NextRequest, NextResponse } from "next/server";

// EMERGENCY ROUTE — flag submissions as high priority in email subject line.
// TODO: Add email integration before launch.
// Subject line should be: "🚨 EMERGENCY VET INQUIRY — [name] — [animalType]"
// Send to: plushagrisolutions@gmail.com AND trigger SMS if possible.

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, farmLocation, animalType, description } = body;

    if (!name || !phone || !farmLocation || !animalType || !description) {
      return NextResponse.json(
        { error: "All emergency fields are required." },
        { status: 400 }
      );
    }

    console.log("🚨 EMERGENCY VETERINARY INQUIRY:", {
      name,
      phone,
      farmLocation,
      animalType,
      description,
      timestamp: new Date().toISOString(),
    });

    // TODO: Send HIGH PRIORITY email to plushagrisolutions@gmail.com
    // Consider adding SMS notification via Termii or Africa's Talking

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process emergency submission." },
      { status: 500 }
    );
  }
}
