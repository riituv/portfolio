import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // 1. Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "long",
    });

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = "rituvyas141@gmail.com";

    // 2. Fallback for Local Development if API key is not configured or invalid (placeholder)
    if (!apiKey || !apiKey.startsWith("re_")) {
      console.log("=== NEW CONTACT FORM MESSAGE (Local Dev Mode) ===");
      console.log(`Sent At: ${timestamp}`);
      console.log(`Name:    ${name}`);
      console.log(`Email:   ${email}`);
      console.log(`Message: ${message}`);
      console.log("==================================================");
      
      return NextResponse.json(
        { 
          success: true, 
          message: "Message received locally! Configure RESEND_API_KEY in .env to send actual emails." 
        },
        { status: 200 }
      );
    }

    // 3. Send via Resend REST API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [recipientEmail],
        reply_to: email,
        subject: `New Portfolio Message from ${name}`,
        html: `
          <div style="font-family: sans-serif; padding: 24px; line-height: 1.6; max-width: 600px; border: 1px solid #eaeaea; border-radius: 12px; color: #1f2937;">
            <h2 style="color: #4f46e5; border-bottom: 2px solid #f3f4f6; padding-bottom: 12px; margin-top: 0;">New Contact Form Submission</h2>
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></p>
            <p style="margin: 8px 0; color: #6b7280; font-size: 14px;"><strong>Sent At:</strong> ${timestamp}</p>
            <div style="margin-top: 24px; padding: 16px; background-color: #f9fafb; border-left: 4px solid #4f46e5; border-radius: 4px; font-style: italic; white-space: pre-wrap;">${message}</div>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || "Failed to send email via Resend API." },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
