import { Text, Section, Hr, Heading, Link } from "@react-email/components";
import { EmailLayout } from "./components/EmailLayout";

interface QuoteNotificationProps {
  // Customer details
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  // Service details
  serviceType: string;
  formType: "logistics" | "other";
  // Logistics fields
  pickupLocation?: string;
  deliveryLocation?: string;
  cargoType?: string;
  estimatedWeight?: string;
  preferredDate?: string;
  // Other service fields
  briefDescription?: string;
  timeline?: string;
  location?: string;
  // Metadata
  submittedAt: string;
}

const brandColors = {
  navy: "#1B3A6B",
  amber: "#E8891A",
  charcoal: "#1A1A2E",
  charcoalMuted: "#4A4A5E",
  sky: "#EDF3FA",
  white: "#FFFFFF",
};

export function QuoteNotification({
  fullName,
  email,
  phone,
  companyName,
  serviceType,
  formType,
  pickupLocation,
  deliveryLocation,
  cargoType,
  estimatedWeight,
  preferredDate,
  briefDescription,
  timeline,
  location,
  submittedAt,
}: QuoteNotificationProps) {
  const isLogistics = formType === "logistics";

  const formatServiceType = (type: string) => {
    return type
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <EmailLayout previewText={`New quote request from ${fullName} - ${formatServiceType(serviceType)}`}>
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
          New Quote Request
        </Text>
      </Section>

      {/* Service Type Badge */}
      <Section style={{ textAlign: "center", margin: "0 0 24px 0" }}>
        <Text style={{
          display: "inline-block",
          backgroundColor: brandColors.navy,
          color: brandColors.white,
          padding: "8px 16px",
          borderRadius: "6px",
          fontSize: "14px",
          fontWeight: "600",
          margin: "0",
        }}>
          {formatServiceType(serviceType)}
        </Text>
      </Section>

      <Heading as="h1" style={{
        color: brandColors.navy,
        fontSize: "22px",
        fontWeight: "700",
        margin: "0 0 8px 0",
      }}>
        {fullName}
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
          Customer Information
        </Heading>

        <Text style={{ margin: "0 0 8px 0", fontSize: "14px", color: brandColors.charcoal }}>
          <strong style={{ color: brandColors.navy }}>Name:</strong> {fullName}
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
            href={`tel:${phone.replace(/\s/g, "")}`}
            style={{
              color: brandColors.amber,
              textDecoration: "none",
            }}
          >
            {phone}
          </Link>
        </Text>

        {companyName && (
          <Text style={{ margin: "0", fontSize: "14px", color: brandColors.charcoal }}>
            <strong style={{ color: brandColors.navy }}>Company:</strong> {companyName}
          </Text>
        )}
      </Section>

      {/* Job Details */}
      <Section style={{
        backgroundColor: brandColors.white,
        border: `2px solid ${brandColors.sky}`,
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
          {isLogistics ? "Shipment Details" : "Project Details"}
        </Heading>

        {isLogistics ? (
          // Logistics fields
          <>
            {pickupLocation && (
              <Text style={{ margin: "0 0 8px 0", fontSize: "14px", color: brandColors.charcoal }}>
                <strong style={{ color: brandColors.navy }}>Pickup Location:</strong> {pickupLocation}
              </Text>
            )}

            {deliveryLocation && (
              <Text style={{ margin: "0 0 8px 0", fontSize: "14px", color: brandColors.charcoal }}>
                <strong style={{ color: brandColors.navy }}>Delivery Location:</strong> {deliveryLocation}
              </Text>
            )}

            {cargoType && (
              <Text style={{ margin: "0 0 8px 0", fontSize: "14px", color: brandColors.charcoal }}>
                <strong style={{ color: brandColors.navy }}>Cargo Type:</strong> {cargoType}
              </Text>
            )}

            {estimatedWeight && (
              <Text style={{ margin: "0 0 8px 0", fontSize: "14px", color: brandColors.charcoal }}>
                <strong style={{ color: brandColors.navy }}>Estimated Weight (KG) / Volume:</strong> {estimatedWeight}
              </Text>
            )}

            {preferredDate && (
              <Text style={{ margin: "0", fontSize: "14px", color: brandColors.charcoal }}>
                <strong style={{ color: brandColors.navy }}>Preferred Date:</strong> {preferredDate}
              </Text>
            )}
          </>
        ) : (
          // Other service fields
          <>
            {briefDescription && (
              <>
                <Text style={{ margin: "0 0 12px 0", fontSize: "14px", color: brandColors.navy, fontWeight: "600" }}>
                  Description:
                </Text>
                <Section style={{
                  backgroundColor: brandColors.sky,
                  borderRadius: "6px",
                  padding: "12px",
                  margin: "0 0 16px 0",
                }}>
                  <Text style={{
                    margin: "0",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: brandColors.charcoal,
                    whiteSpace: "pre-wrap",
                  }}>
                    {briefDescription}
                  </Text>
                </Section>
              </>
            )}

            {timeline && (
              <Text style={{ margin: "0 0 8px 0", fontSize: "14px", color: brandColors.charcoal }}>
                <strong style={{ color: brandColors.navy }}>Timeline:</strong> {timeline}
              </Text>
            )}

            {location && (
              <Text style={{ margin: "0", fontSize: "14px", color: brandColors.charcoal }}>
                <strong style={{ color: brandColors.navy }}>Location:</strong> {location}
              </Text>
            )}
          </>
        )}
      </Section>

      <Hr style={{
        border: "none",
        borderTop: `2px solid ${brandColors.amber}`,
        margin: "24px 0",
      }} />

      {/* Action Section */}
      <Section style={{
        textAlign: "center",
      }}>
        <Text style={{
          color: brandColors.charcoalMuted,
          fontSize: "14px",
          margin: "0 0 12px 0",
        }}>
          Follow up on this quote request:
        </Text>

        <Link
          href={`mailto:${email}?subject=Re: Your Quote Request - ${formatServiceType(serviceType)}&body=Dear ${fullName},%0A%0AThank you for your quote request for ${formatServiceType(serviceType)}.%0A%0AWe are reviewing your requirements and will provide your personalized quote shortly.%0A%0ABest regards,%0AKemfah Logistics Team`}
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
          Reply to {fullName}
        </Link>
      </Section>
    </EmailLayout>
  );
}

export default QuoteNotification;
