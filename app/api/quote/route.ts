import { Resend } from "resend";
import { NextResponse } from "next/server";
import { ThankYouEmail } from "@/src/emails/ThankYouEmail";
import { QuoteNotification } from "@/src/emails/QuoteNotification";

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

type ServiceType =
  | "road_freight"
  | "international_air_cargo"
  | "marine"
  | "clearing_forwarding"
  | "general_supply"
  | "other";

interface LogisticsFormData {
  formType: "logistics";
  serviceType: ServiceType;
  pickupLocation: string;
  deliveryLocation: string;
  cargoType: string;
  estimatedWeight?: string;
  preferredDate?: string;
  fullName: string;
  phone: string;
  email: string;
  companyName?: string;
}

interface OtherFormData {
  formType: "other";
  serviceType: ServiceType;
  briefDescription: string;
  timeline?: string;
  location?: string;
  fullName: string;
  phone: string;
  email: string;
  companyName?: string;
}

type QuoteFormData = LogisticsFormData | OtherFormData;

const logisticsServices = [
  "road_freight",
  "international_air_cargo",
  "marine",
  "clearing_forwarding",
  "general_supply",
];

function isLogisticsService(service: string): boolean {
  return logisticsServices.includes(service);
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateFormData(data: Partial<QuoteFormData>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Common validations
  if (!data.fullName?.trim()) {
    errors.push("Full name is required");
  }

  if (!data.email?.trim()) {
    errors.push("Email is required");
  } else if (!validateEmail(data.email)) {
    errors.push("Invalid email format");
  }

  if (!data.phone?.trim()) {
    errors.push("Phone is required");
  }

  if (!data.serviceType?.trim()) {
    errors.push("Service type is required");
  }

  // Type-specific validations
  if (data.formType === "logistics") {
    const logisticsData = data as Partial<LogisticsFormData>;
    if (!logisticsData.pickupLocation?.trim()) {
      errors.push("Pickup location is required");
    }
    if (!logisticsData.deliveryLocation?.trim()) {
      errors.push("Delivery location is required");
    }
    if (!logisticsData.cargoType?.trim()) {
      errors.push("Cargo type is required");
    }
  } else if (data.formType === "other") {
    const otherData = data as Partial<OtherFormData>;
    if (!otherData.briefDescription?.trim()) {
      errors.push("Description is required");
    }
  } else {
    errors.push("Form type must be specified");
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

    const data = body as QuoteFormData;
    const isLogistics = data.formType === "logistics";
    const submittedAt = new Date().toLocaleString("en-NG", {
      timeZone: "Africa/Lagos",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Prepare notification data
    const notificationData = {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      companyName: data.companyName,
      serviceType: data.serviceType,
      formType: data.formType,
      submittedAt,
      ...(isLogistics
        ? {
            pickupLocation: (data as LogisticsFormData).pickupLocation,
            deliveryLocation: (data as LogisticsFormData).deliveryLocation,
            cargoType: (data as LogisticsFormData).cargoType,
            estimatedWeight: (data as LogisticsFormData).estimatedWeight,
            preferredDate: (data as LogisticsFormData).preferredDate,
          }
        : {
            briefDescription: (data as OtherFormData).briefDescription,
            timeline: (data as OtherFormData).timeline,
            location: (data as OtherFormData).location,
          }),
    };

    // Prepare customer thank you data
    const thankYouData = {
      name: data.fullName,
      formType: "quote" as const,
      email: data.email,
      phone: data.phone,
      companyName: data.companyName,
      serviceType: data.serviceType,
      ...(isLogistics
        ? {
            pickupLocation: (data as LogisticsFormData).pickupLocation,
            deliveryLocation: (data as LogisticsFormData).deliveryLocation,
            cargoType: (data as LogisticsFormData).cargoType,
            estimatedWeight: (data as LogisticsFormData).estimatedWeight,
            preferredDate: (data as LogisticsFormData).preferredDate,
          }
        : {
            briefDescription: (data as OtherFormData).briefDescription,
            timeline: (data as OtherFormData).timeline,
            location: (data as OtherFormData).location,
          }),
    };

    // Send both emails concurrently
    const [ownerEmail, customerEmail] = await Promise.all([
      // Notification email to owner
      resend.emails.send({
        from: formatSender(EMAIL_FROM),
        to: notificationEmails,
        subject: `New Quote Request: ${data.serviceType} from ${data.fullName}`,
        react: QuoteNotification(notificationData),
      }),

      // Thank you email to customer
      resend.emails.send({
        from: formatSender(EMAIL_FROM),
        to: [data.email],
        subject: "Thank you for your quote request - Kemfah Logistics",
        react: ThankYouEmail(thankYouData),
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
      { success: true, message: "Quote request submitted successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Quote form API error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
