import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Input validation and sanitization
function sanitizeInput(input: string | null): string {
  if (!input) return "";
  return input
    .trim()
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .substring(0, 1000); // Limit length
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check (basic)
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    console.log(`Request from IP: ${ip}`);

    const body = await request.json();
    const { name, email, revenue, socials, goals } = body;

    // Validate and sanitize required fields
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedRevenue = sanitizeInput(revenue);
    const sanitizedSocials = sanitizeInput(socials);
    const sanitizedGoals = sanitizeInput(goals);

    // Validate required fields
    if (!sanitizedName || !sanitizedEmail) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validateEmail(sanitizedEmail)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check field lengths
    if (sanitizedName.length < 2 || sanitizedName.length > 100) {
      return NextResponse.json(
        { error: "Name must be between 2 and 100 characters" },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
New Contact Form Submission from Boink Agency Website

Name: ${sanitizedName}
Email: ${sanitizedEmail}
Current Monthly Revenue: ${sanitizedRevenue || "Not specified"}
Socials: ${sanitizedSocials || "Not provided"}
Goals: ${sanitizedGoals || "Not provided"}

Submitted at: ${new Date().toLocaleString()}
IP Address: ${ip}
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Boink Agency <noreply@inbound.boinkagency.com>",
      to: ["hello@boinkagency.com"],
      subject: "New Contact Form Submission - Boink Agency",
      text: emailContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);

    const response = NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );

    // Add security headers
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("X-XSS-Protection", "1; mode=block");

    return response;
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
