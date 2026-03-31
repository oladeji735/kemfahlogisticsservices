import { Text, Section, Hr, Heading } from "@react-email/components";
import { EmailLayout } from "./components/EmailLayout";

interface ThankYouEmailProps {
  name: string;
  formType: "contact" | "quote";
  // Contact form fields
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  // Quote form fields
  serviceType?: string;
  pickupLocation?: string;
  deliveryLocation?: string;
  cargoType?: string;
  estimatedWeight?: string;
  preferredDate?: string;
  briefDescription?: string;
  timeline?: string;
  location?: string;
  companyName?: string;
}

const brandColors = {
  navy: "#1B3A6B",
  amber: "#E8891A",
  charcoal: "#1A1A2E",
  charcoalMuted: "#4A4A5E",
  sky: "#EDF3FA",
};

export function ThankYouEmail({
  name,
  formType,
  email,
  phone,
  service,
  message,
  serviceType,
  pickupLocation,
  deliveryLocation,
  cargoType,
  estimatedWeight,
  preferredDate,
  briefDescription,
  timeline,
  location,
  companyName,
}: ThankYouEmailProps) {
  const isQuote = formType === "quote";
  const serviceDisplay = serviceType || service || "General Inquiry";

  const formatServiceType = (type: string | undefined) => {
    if (!type) return "General Inquiry";
    return type
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <EmailLayout previewText={`Thank you for contacting Kemfah Logistics, ${name}!`}>
      <Heading as="h1" style={{
        color: brandColors.navy,
        fontSize: "24px",
        fontWeight: "700",
        margin: "0 0 20px 0",
        textAlign: "center",
      }}>
        Thank You for Reaching Out!
      </Heading>

      <Text style={{
        color: brandColors.charcoal,
        fontSize: "16px",
        lineHeight: "1.6",
        margin: "0 0 20px 0",
      }}>
        Dear {name},
      </Text>

      <Text style={{
        color: brandColors.charcoal,
        fontSize: "16px",
        lineHeight: "1.6",
        margin: "0 0 20px 0",
      }}>
        We have received your {isQuote ? "quote request" : "message"} regarding{" "}
        <strong style={{ color: brandColors.navy }}>
          {formatServiceType(serviceDisplay)}
        </strong>
        . Our team will review your inquiry and get back to you within <strong>24 hours</strong>.
      </Text>

      <Section style={{
        backgroundColor: brandColors.sky,
        borderRadius: "8px",
        padding: "20px",
        margin: "24px 0",
      }}>
        <Heading as="h2" style={{
          color: brandColors.navy,
          fontSize: "16px",
          fontWeight: "600",
          margin: "0 0 16px 0",
        }}>
          What You Submitted:
        </Heading>

        {/* Common fields */}
        <Text style={{ margin: "0 0 8px 0", fontSize: "14px", color: brandColors.charcoalMuted }}>
          <strong>Name:</strong> {name}
        </Text>
        {email && (
          <Text style={{ margin: "0 0 8px 0", fontSize: "14px", color: brandColors.charcoalMuted }}>
            <strong>Email:</strong> {email}
          </Text>
        )}
        {phone && (
          <Text style={{ margin: "0 0 8px 0", fontSize: "14px", color: brandColors.charcoalMuted }}>
            <strong>Phone:</strong> {phone}
          </Text>
        )}
        {companyName && (
          <Text style={{ margin: "0 0 8px 0", fontSize: "14px", color: brandColors.charcoalMuted }}>
            <strong>Company:</strong> {companyName}
          </Text>
        )}

        <Hr style={{
          border: "none",
          borderTop: `1px solid ${brandColors.amber}`,
          margin: "12px 0",
        }} />

        {/* Contact form specific */}
        {service && !isQuote && (
          <Text style={{ margin: "0 0 8px 0", fontSize: "14px", color: brandColors.charcoalMuted }}>
            <strong>Service Interest:</strong> {service}
          </Text>
        )}
        {message && !isQuote && (
          <Text style={{ margin: "8px 0 0 0", fontSize: "14px", color: brandColors.charcoal }}>
            <strong>Your Message:</strong>
            <br />
            <span style={{ whiteSpace: "pre-wrap" }}>{message}</span>
          </Text>
        )}

        {/* Quote form specific - Logistics */}
        {isQuote && (pickupLocation || deliveryLocation) && (
          <>
            {pickupLocation && (
              <Text style={{ margin: "0 0 8px 0", fontSize: "14px", color: brandColors.charcoalMuted }}>
                <strong>Pickup Location:</strong> {pickupLocation}
              </Text>
            )}
            {deliveryLocation && (
              <Text style={{ margin: "0 0 8px 0", fontSize: "14px", color: brandColors.charcoalMuted }}>
                <strong>Delivery Location:</strong> {deliveryLocation}
              </Text>
            )}
            {cargoType && (
              <Text style={{ margin: "0 0 8px 0", fontSize: "14px", color: brandColors.charcoalMuted }}>
                <strong>Cargo Type:</strong> {cargoType}
              </Text>
            )}
            {estimatedWeight && (
              <Text style={{ margin: "0 0 8px 0", fontSize: "14px", color: brandColors.charcoalMuted }}>
                <strong>Estimated Weight/Volume:</strong> {estimatedWeight}
              </Text>
            )}
            {preferredDate && (
              <Text style={{ margin: "0 0 8px 0", fontSize: "14px", color: brandColors.charcoalMuted }}>
                <strong>Preferred Date:</strong> {preferredDate}
              </Text>
            )}
          </>
        )}

        {/* Quote form specific - Other services */}
        {isQuote && briefDescription && (
          <>
            {briefDescription && (
              <Text style={{ margin: "8px 0 0 0", fontSize: "14px", color: brandColors.charcoal }}>
                <strong>Description:</strong>
                <br />
                <span style={{ whiteSpace: "pre-wrap" }}>{briefDescription}</span>
              </Text>
            )}
            {timeline && (
              <Text style={{ margin: "12px 0 0 0", fontSize: "14px", color: brandColors.charcoalMuted }}>
                <strong>Timeline:</strong> {timeline}
              </Text>
            )}
            {location && (
              <Text style={{ margin: "4px 0 0 0", fontSize: "14px", color: brandColors.charcoalMuted }}>
                <strong>Location:</strong> {location}
              </Text>
            )}
          </>
        )}
      </Section>

      <Text style={{
        color: brandColors.charcoal,
        fontSize: "16px",
        lineHeight: "1.6",
        margin: "24px 0 12px 0",
        textAlign: "center",
      }}>
        Need urgent assistance?
      </Text>

      <Text style={{
        color: brandColors.navy,
        fontSize: "14px",
        fontWeight: "600",
        margin: "0",
        textAlign: "center",
      }}>
        WhatsApp: +234 903 642 0991
      </Text>
    </EmailLayout>
  );
}

export default ThankYouEmail;
