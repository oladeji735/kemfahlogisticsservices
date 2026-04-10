import { Html, Head, Font, Preview, Body, Container, Section, Text, Link, Hr, Img } from "@react-email/components";

interface EmailLayoutProps {
  children: React.ReactNode;
  previewText: string;
}

const brandColors = {
  navy: "#1B3A6B",
  amber: "#E8891A",
  charcoal: "#1A1A2E",
  charcoalMuted: "#4A4A5E",
  sky: "#EDF3FA",
  white: "#FFFFFF",
};

const LOGO_URL = process.env.NEXT_PUBLIC_EMAIL_LOGO_URL || "https://kemfahlogistics.com/images/logos/kemfah-logo-v1-footer.png";

export function EmailLayout({ children, previewText }: EmailLayoutProps) {
  return (
    <Html lang="en">
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYAZ9hjp-Ek-_EeA.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>{previewText}</Preview>
      <Body style={{
        backgroundColor: brandColors.sky,
        margin: "0",
        padding: "0",
        fontFamily: "Inter, Arial, sans-serif",
      }}>
        <Container style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: brandColors.white,
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        }}>
          {/* Header */}
          <Section style={{
            backgroundColor: brandColors.navy,
            padding: "24px 32px",
            textAlign: "center",
          }}>
            <Img
              src={LOGO_URL}
              alt="Kemfah Logistics"
              width="160"
              height="44"
              style={{
                margin: "0 auto",
              }}
            />
            <Text style={{
              color: brandColors.white,
              fontSize: "18px",
              fontWeight: "600",
              margin: "12px 0 0 0",
              letterSpacing: "0.5px",
            }}>
              KEMFAH LOGISTICS
            </Text>
          </Section>

          {/* Content */}
          <Section style={{ padding: "32px" }}>
            {children}
          </Section>

          {/* Footer */}
          <Section style={{
            backgroundColor: brandColors.sky,
            padding: "24px 32px",
            textAlign: "center",
          }}>
            <Hr style={{
              border: "none",
              borderTop: `2px solid ${brandColors.amber}`,
              margin: "0 0 20px 0",
            }} />
            <Text style={{
              color: brandColors.navy,
              fontSize: "14px",
              fontWeight: "600",
              margin: "0 0 8px 0",
            }}>
              Kemfah Logistics Services Limited
            </Text>
            <Text style={{
              color: brandColors.amber,
              fontSize: "12px",
              fontStyle: "italic",
              margin: "0 0 16px 0",
            }}>
              Your Cargo Moves. Globally. Reliably.
            </Text>
 <Text style={{
 color: brandColors.charcoalMuted,
 fontSize: "12px",
 margin: "0 0 8px 0",
 }}>
 Lagos: 08160047436 | Ibadan: 09063515584
 </Text>
 <Link
 href="https://www.kemfahlogistics.com"
 style={{
 color: brandColors.navy,
 fontSize: "12px",
 textDecoration: "none",
 display: "block",
 margin: "8px 0",
 }}
 >
 www.kemfahlogistics.com
 </Link>
            <Link
              href="mailto:info@kemfahlogistics.com"
              style={{
                color: brandColors.navy,
                fontSize: "12px",
                textDecoration: "none",
              }}
            >
              info@kemfahlogistics.com
            </Link>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
