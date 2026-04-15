import { Resend } from "resend";
import { NextResponse } from "next/server";
import { PaymentProofNotification } from "@/src/emails/PaymentProofNotification";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_FROM = process.env.EMAIL_FROM || "";
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "";

// Format sender with business name
const formatSender = (email: string) => {
  return `"Kemfah Logistics" <${email}>`;
};

export async function POST(request: Request) {
  try {
    // Check environment variables
    if (!EMAIL_FROM || !NOTIFICATION_EMAIL) {
      console.error("Missing required environment variables: EMAIL_FROM or NOTIFICATION_EMAIL");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Parse the multipart/form-data
    const formData = await request.formData();
    
    // Extract fields
    const fullName = formData.get("fullName") as string;
    const goodsDescription = formData.get("goodsDescription") as string;
    const amountPaid = formData.get("amountPaid") as string;
    const weight = formData.get("weight") as string | null;
    const receiptFile = formData.get("receipt") as File | null;

    // Validate fields
    const errors: string[] = [];
    if (!fullName?.trim()) errors.push("Full name is required");
    if (!goodsDescription?.trim()) errors.push("Goods description is required");
    if (!amountPaid?.trim()) errors.push("Amount paid is required");
    
    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, error: "Validation failed", details: errors },
        { status: 400 }
      );
    }

    // Format submission time
    const submittedAt = new Date().toLocaleString("en-NG", {
      timeZone: "Africa/Lagos",
      dateStyle: "full",
      timeStyle: "short",
    });

    const emailAttachments: { filename: string; content: Buffer }[] = [];

    // Process file if present
    if (receiptFile && receiptFile.size > 0) {
      const buffer = Buffer.from(await receiptFile.arrayBuffer());
      emailAttachments.push({
        filename: receiptFile.name,
        content: buffer,
      });
    }

    // Send the notification email to the owner
    const response = await resend.emails.send({
      from: formatSender(EMAIL_FROM),
      to: [NOTIFICATION_EMAIL],
      subject: `Payment Confirmation Received: ${fullName}`,
      react: PaymentProofNotification({
        fullName,
        goodsDescription,
        weight: weight || undefined,
        amountPaid,
        submittedAt,
        hasAttachment: emailAttachments.length > 0,
      }),
      attachments: emailAttachments.length > 0 ? emailAttachments : undefined,
    });

    if (response.error) {
      console.error("Email send error:", response.error);
      return NextResponse.json(
        { success: false, error: "Failed to send notification email." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Payment confirmation submitted successfully." },
      { status: 200 }
    );

  } catch (error) {
    console.error("Payment proof API error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
