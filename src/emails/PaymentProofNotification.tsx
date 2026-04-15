import { Text, Section, Hr, Heading } from "@react-email/components";
import { EmailLayout } from "./components/EmailLayout";

interface PaymentProofNotificationProps {
  fullName: string;
  goodsDescription: string;
  weight?: string;
  amountPaid: string;
  submittedAt: string;
  hasAttachment: boolean;
}

const brandColors = {
  navy: "#1B3A6B",
  amber: "#E8891A",
  charcoal: "#1A1A2E",
  charcoalMuted: "#4A4A5E",
  sky: "#EDF3FA",
  white: "#FFFFFF",
};

export function PaymentProofNotification({
  fullName,
  goodsDescription,
  weight,
  amountPaid,
  submittedAt,
  hasAttachment,
}: PaymentProofNotificationProps) {
  return (
    <EmailLayout previewText={`Payment Confirmation from ${fullName}`}>
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
          NEW PAYMENT PROOF SUBMITTED
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

        <Text style={{ margin: "0", fontSize: "14px", color: brandColors.charcoal }}>
          <strong style={{ color: brandColors.navy }}>Name:</strong> {fullName}
        </Text>
      </Section>

      {/* Transaction Details */}
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
          Transaction Details
        </Heading>

        <Text style={{ margin: "0 0 8px 0", fontSize: "14px", color: brandColors.charcoal }}>
          <strong style={{ color: brandColors.navy }}>Amount Paid:</strong>{" "}
          <span style={{
            backgroundColor: brandColors.sky,
            padding: "2px 6px",
            borderRadius: "4px",
            fontWeight: "600",
          }}>
            {amountPaid}
          </span>
        </Text>
        
        <Text style={{ margin: "16px 0 12px 0", fontSize: "14px", color: brandColors.navy, fontWeight: "600" }}>
          Goods Description:
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
            {goodsDescription}
          </Text>
        </Section>

        {weight && (
          <Text style={{ margin: "0", fontSize: "14px", color: brandColors.charcoal }}>
            <strong style={{ color: brandColors.navy }}>Weight/KG:</strong> {weight}
          </Text>
        )}
      </Section>

      {/* Attachment Notice */}
      <Section style={{
        backgroundColor: brandColors.sky,
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
      }}>
        {hasAttachment ? (
          <Text style={{ margin: "0", fontSize: "14px", color: brandColors.charcoal, fontWeight: "500" }}>
            📎 A payment receipt file has been attached to this email.
          </Text>
        ) : (
          <Text style={{ margin: "0", fontSize: "14px", color: brandColors.charcoalMuted, fontStyle: "italic" }}>
            No receipt file was attached.
          </Text>
        )}
      </Section>

      <Hr style={{
        border: "none",
        borderTop: `2px solid ${brandColors.amber}`,
        margin: "24px 0",
      }} />
      
      <Section style={{ textAlign: "center" }}>
        <Text style={{
          color: brandColors.charcoalMuted,
          fontSize: "12px",
          margin: "0",
        }}>
          This is an internal unmonitored notification. Please do not reply directly to this email.
        </Text>
      </Section>
    </EmailLayout>
  );
}

export default PaymentProofNotification;
