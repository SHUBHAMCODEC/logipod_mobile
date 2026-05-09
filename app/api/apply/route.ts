import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const experience = formData.get("experience") as string;
    const portfolio = formData.get("portfolio") as string;
    const motivation = formData.get("motivation") as string;
    const jobTitle = formData.get("jobTitle") as string;
    const resume = formData.get("resume") as File;

    if (!fullName || !email || !resume) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure Nodemailer with Support Mail Credentials
    // Replace these with your actual SMTP settings or use environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail", // e.g., 'gmail', 'outlook', or your custom SMTP
      auth: {
        user: process.env.SUPPORT_EMAIL || "support@logipod.com",
        pass: process.env.SUPPORT_EMAIL_PASS || "your-app-password",
      },
    });

    // Prepare attachments
    const arrayBuffer = await resume.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const mailOptions = {
      from: process.env.SUPPORT_EMAIL || "support@logipod.com",
      to: "support@logipod.com", // Destination mail
      subject: `New Job Application: ${jobTitle} - ${fullName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #F26341;">New Job Application</h2>
          <p><strong>Position:</strong> ${jobTitle}</p>
          <hr />
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Experience:</strong> ${experience} Years</p>
          <p><strong>Portfolio/LinkedIn:</strong> ${portfolio || "Not provided"}</p>
          <p><strong>Motivation:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 8px;">
            ${motivation}
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #777;">
            Sent via Logipod Careers Portal
          </p>
        </div>
      `,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Application sent successfully!" });
  } catch (error) {
    console.error("Mail Error:", error);
    return NextResponse.json(
      { error: "Failed to send application. Please try again later." },
      { status: 500 }
    );
  }
}
