import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { AboutMandate } from "@/components/sections/AboutMandate";
import { MissionValues } from "@/components/sections/MissionValues";
import { CredentialsBlock } from "@/components/sections/CredentialsBlock";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { aboutData } from "@/lib/data/about";

export const metadata: Metadata = {
    title: "About Kemfah Logistics | Built on a Mandate, Delivered Through Action",
    description:
        "Learn about Kemfah Logistics Services Limited — a CAC-licensed Nigerian freight and logistics company operating across road, sea, and international air cargo.",
    openGraph: {
        title: "About Kemfah Logistics | Built on a Mandate, Delivered Through Action",
        description:
            "Learn about Kemfah Logistics Services Limited — a CAC-licensed Nigerian freight and logistics company.",
        url: "/about",
    },
    alternates: {
        canonical: "/about",
    },
};

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main>
                <PageHero
                    headline={aboutData.hero.headline}
                    subheadline={aboutData.hero.subheadline}
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "About Us", href: "/about" },
                    ]}
                />
                <AboutMandate
                    paragraphs={aboutData.mandate.paragraphs}
                    imageSrc={aboutData.mandate.imageSrc}
                />
                <MissionValues
                    mission={aboutData.mission}
                    values={aboutData.values}
                />
                <CredentialsBlock
                    statement={aboutData.credentials.statement}
                    cacNumber={aboutData.credentials.cacNumber}
                    sealImageSrc={aboutData.credentials.sealImageSrc}
                />
                <CTAStrip
                    headline={aboutData.ctaStrip.headline}
                    buttonLabel={aboutData.ctaStrip.buttonLabel}
                />
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
