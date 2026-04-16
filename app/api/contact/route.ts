import { Resend } from "resend";
import { NextResponse } from "next/server";
import { ThankYouEmail } from "@/src/emails/ThankYouEmail";
import { ContactNotification } from "@/src/emails/ContactNotification";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_FROM = process.env.EMAIL_FROM || "";
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "";

// Validate email format
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Parse comma-separated notification emails into an array
function getNotificationEmails(): string[] {
  if (!NOTIFICATION_EMAIL) return [];
  return NOTIFICATION_EMAIL
    .split(",")
    .map((e) => e.trim())
    .filter((e) => {
      if (!e) return false;
      if (!isValidEmail(e)) {
        console.warn(`Invalid email in NOTIFICATION_EMAIL: ${e}`);
        return false;
      }
      return true;
    });
}

// Format sender with business name
const formatSender = (email: string) => {
  return `"Kemfah Logistics" <${email}>`;
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateFormData(data: Partial<ContactFormData>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name?.trim()) {
    errors.push("Name is required");
  }

  if (!data.email?.trim()) {
    errors.push("Email is required");
  } else if (!validateEmail(data.email)) {
    errors.push("Invalid email format");
  }

  if (!data.phone?.trim()) {
    errors.push("Phone is required");
  }

  if (!data.service?.trim()) {
    errors.push("Service is required");
  }

  if (!data.message?.trim()) {
    errors.push("Message is required");
  } else if (data.message.trim().length < 20) {
    errors.push("Message must be at least 20 characters");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

export async function POST(request: Request) {
  try {
    // Parse and validate notification emails
    const notificationEmails = getNotificationEmails();

    // Check environment variables
    if (!EMAIL_FROM || notificationEmails.length === 0) {
      console.error("Missing required environment variables: EMAIL_FROM or NOTIFICATION_EMAIL");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate form data
    const { valid, errors } = validateFormData(body);
    if (!valid) {
      return NextResponse.json(
        { success: false, error: "Validation failed", details: errors },
        { status: 400 }
      );
    }

    const { name, email, phone, service, message } = body as ContactFormData;
    const submittedAt = new Date().toLocaleString("en-NG", {
      timeZone: "Africa/Lagos",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Send both emails concurrently
    const [ownerEmail, customerEmail] = await Promise.all([
      // Notification email to owner
      resend.emails.send({
        from: formatSender(EMAIL_FROM),
        to: notificationEmails,
        subject: `New Contact Form: ${service} inquiry from ${name}`,
        react: ContactNotification({
          name,
          email,
          phone,
          service,
          message,
          submittedAt,
        }),
      }),

      // Thank you email to customer
      resend.emails.send({
        from: formatSender(EMAIL_FROM),
        to: [email],
        subject: "Thank you for contacting Kemfah Logistics",
        react: ThankYouEmail({
          name,
          formType: "contact",
          email,
          phone,
          service,
          message,
        }),
      }),
    ]);

    // Check for errors
    if (ownerEmail.error || customerEmail.error) {
      console.error("Email send error:", ownerEmail.error || customerEmail.error);
      return NextResponse.json(
        { success: false, error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact form API error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
