import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kemfah Logistics Services Limited | Your Cargo Moves. Globally. Reliably.",
  description: "Professional logistics and freight services in Nigeria — road haulage, marine transport, international air cargo, and clearing & forwarding. CAC Licensed. IATA-Aligned.",
  keywords: ["logistics company Nigeria", "freight haulage Nigeria", "international air cargo Nigeria", "clearing and forwarding agent Nigeria", "cargo shipping Nigeria", "IATA cargo agent Nigeria", "marine logistics Nigeria", "import export logistics Nigeria"],
  authors: [{ name: "Kemfah Logistics Services Limited" }],
  creator: "Kemfah Logistics Services Limited",
  publisher: "Kemfah Logistics Services Limited",
  robots: "index, follow",
  openGraph: {
    title: "Kemfah Logistics Services Limited",
    description: "Your Cargo Moves. Globally. Reliably. Professional logistics and freight services in Nigeria.",
    type: "website",
    locale: "en_NG",
    siteName: "Kemfah Logistics Services Limited",
    images: [{
      url: "/images/logos/kemfah-logo-v1-og-image.png",
      width: 1200,
      height: 630,
      alt: "Kemfah Logistics Services Limited Logo",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kemfah Logistics Services Limited",
    description: "Your Cargo Moves. Globally. Reliably.",
    images: ["/images/logos/kemfah-logo-v1-og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "manifest", url: "/favicon/site.webmanifest" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
