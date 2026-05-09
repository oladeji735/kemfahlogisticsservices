import { Text, Section, Hr, Heading, Link } from "@react-email/components";
import { EmailLayout } from "./components/EmailLayout";

interface ContactNotificationProps {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  submittedAt: string;
}

const brandColors = {
  navy: "#1B3A6B",
  amber: "#E8891A",
  charcoal: "#1A1A2E",
  charcoalMuted: "#4A4A5E",
  sky: "#EDF3FA",
  white: "#FFFFFF",
  red: "#DC2626",
};

export function ContactNotification({
  name,
  email,
  phone,
  service,
  message,
  submittedAt,
}: ContactNotificationProps) {
  return (
    <EmailLayout previewText={`New contact form submission from ${name}`}>
      {/* Alert Banner */}
      <Section style={{
        backgroundColor: brandColors.amber,
        borderRadius: "6px",
        padding: "12px 16px",
        margin: "0 0 24px 0",
        textAlign: "center",
      }}>
        <Text style={{
          color: brandColors.white,
          fontSize: "14px",
          fontWeight: "700",
          margin: "0",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}>
          New Contact Form Submission
        </Text>
      </Section>

      <Heading as="h1" style={{
        color: brandColors.navy,
        fontSize: "22px",
        fontWeight: "700",
        margin: "0 0 8px 0",
      }}>
        {name}
      </Heading>

      <Text style={{
        color: brandColors.charcoalMuted,
        fontSize: "14px",
        margin: "0 0 24px 0",
      }}>
        Submitted: {submittedAt}
      </Text>

      {/* Customer Details */}
      <Section style={{
        backgroundColor: brandColors.sky,
        borderRadius: "8px",
        padding: "20px",
        margin: "0 0 20px 0",
      }}>
        <Heading as="h2" style={{
          color: brandColors.navy,
          fontSize: "14px",
          fontWeight: "600",
          margin: "0 0 16px 0",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}>
          Contact Information
        </Heading>

        <Text style={{ margin: "0 0 8px 0", fontSize: "14px", color: brandColors.charcoal }}>
          <strong style={{ color: brandColors.navy }}>Name:</strong> {name}
        </Text>

        <Text style={{ margin: "0 0 8px 0", fontSize: "14px", color: brandColors.charcoal }}>
          <strong style={{ color: brandColors.navy }}>Email:</strong>{" "}
          <Link
            href={`mailto:${email}`}
            style={{
              color: brandColors.amber,
              textDecoration: "none",
            }}
          >
            {email}
          </Link>
        </Text>

        <Text style={{ margin: "0 0 8px 0", fontSize: "14px", color: brandColors.charcoal }}>
          <strong style={{ color: brandColors.navy }}>Phone:</strong>{" "}
          <Link
            href={`tel:${phone.replace(/[-\s]/g, "")}`}
            style={{
              color: brandColors.amber,
              textDecoration: "none",
            }}
          >
            {phone}
          </Link>
        </Text>

        <Text style={{ margin: "0", fontSize: "14px", color: brandColors.charcoal }}>
          <strong style={{ color: brandColors.navy }}>Service Interest:</strong>{" "}
          <span style={{
            backgroundColor: brandColors.amber,
            color: brandColors.white,
            padding: "2px 8px",
            borderRadius: "4px",
            fontSize: "12px",
            fontWeight: "600",
          }}>
            {service}
          </span>
        </Text>
      </Section>

      {/* Message */}
      <Section>
        <Heading as="h2" style={{
          color: brandColors.navy,
          fontSize: "14px",
          fontWeight: "600",
          margin: "0 0 12px 0",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}>
          Message
        </Heading>

        <Section style={{
          backgroundColor: brandColors.white,
          border: `1px solid ${brandColors.sky}`,
          borderRadius: "8px",
          padding: "16px",
        }}>
          <Text style={{
            margin: "0",
            fontSize: "14px",
            lineHeight: "1.6",
            color: brandColors.charcoal,
            whiteSpace: "pre-wrap",
          }}>
            {message}
          </Text>
        </Section>
      </Section>

      <Hr style={{
        border: "none",
        borderTop: `2px solid ${brandColors.amber}`,
        margin: "24px 0",
      }} />

      {/* Reply Action */}
      <Section style={{
        textAlign: "center",
      }}>
        <Text style={{
          color: brandColors.charcoalMuted,
          fontSize: "14px",
          margin: "0 0 12px 0",
        }}>
          Reply to this inquiry:
        </Text>

        <Link
          href={`mailto:${email}?subject=Re: Your inquiry to Kemfah Logistics&body=Dear ${name},%0A%0AThank you for contacting Kemfah Logistics.%0A%0A`}
          style={{
            display: "inline-block",
            backgroundColor: brandColors.navy,
            color: brandColors.white,
            padding: "12px 24px",
            borderRadius: "6px",
            fontSize: "14px",
            fontWeight: "600",
            textDecoration: "none",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          Reply to {name}
        </Link>
      </Section>
    </EmailLayout>
  );
}

export default ContactNotification;
