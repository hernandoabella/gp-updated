// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, vessel, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "Info@gpshippingcm.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #0b1e3e; color: #f7f6f2; padding: 20px; text-align: center; }
            .content { background: #f7f6f2; padding: 20px; border: 1px solid #c1a45f; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #0b1e3e; }
            .value { margin-top: 5px; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>G&amp;P Ship Agency &amp; Co.</h2>
              <p>New Contact Form Submission</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              ${phone ? `
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone}</div>
              </div>
              ` : ""}
              ${vessel ? `
              <div class="field">
                <div class="label">Vessel Name:</div>
                <div class="value">${vessel}</div>
              </div>
              ` : ""}
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div class="footer">
              <p>This message was sent from your website contact form.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Vessel: ${vessel || "Not provided"}
        
        Message:
        ${message}
        
        ---
        This message was sent from your website contact form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Send auto-reply to the user
    const autoReplyOptions = {
      from: `"G&P Ship Agency & Co." <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting G&P Ship Agency & Co.",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #0b1e3e; color: #f7f6f2; padding: 20px; text-align: center; }
            .content { background: #f7f6f2; padding: 20px; border: 1px solid #c1a45f; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>G&amp;P Ship Agency &amp; Co.</h2>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              <p>Thank you for contacting G&amp;P Ship Agency &amp; Co. We have received your message and will get back to you within 24 hours.</p>
              <p>For urgent matters, please call us at <strong>+57 3116406379</strong>.</p>
              <p>Best regards,<br>
              <strong>G&amp;P Ship Agency Team</strong></p>
            </div>
            <div class="footer">
              <p>Barranquilla, Atlántico - Colombia</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}