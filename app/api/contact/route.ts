import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "UsefulMall Contact <onboarding@resend.dev>",
      to: "boss@usefulmall.com",
      reply_to: email,
      subject: `UsefulMall Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0e2145; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #F0BE35; margin: 0; font-size: 20px;">New Message via UsefulMall</h2>
          </div>
          <div style="background: #f5f8fb; padding: 24px; border: 1px solid #dddddd; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #5a5a5a; font-size: 14px; font-weight: bold; width: 100px;">Name:</td>
                <td style="padding: 8px 0; color: #0e2145; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #5a5a5a; font-size: 14px; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0; color: #0e2145; font-size: 14px;">
                  <a href="mailto:${email}" style="color: #1e4285;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #5a5a5a; font-size: 14px; font-weight: bold;">Subject:</td>
                <td style="padding: 8px 0; color: #0e2145; font-size: 14px;">${subject}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #dddddd; margin: 16px 0;" />
            <h3 style="color: #0e2145; font-size: 14px; margin: 0 0 8px;">Message:</h3>
            <p style="color: #5a5a5a; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #aaaaaa; font-size: 12px; text-align: center; margin-top: 16px;">
            Sent via usefulmall.com
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
