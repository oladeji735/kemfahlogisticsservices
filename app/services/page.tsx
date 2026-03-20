import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { AirCargoFeature } from "@/components/sections/AirCargoFeature";
import { ServiceDetailCards } from "@/components/sections/ServiceDetailCards";
import { CoverageMap } from "@/components/sections/CoverageMap";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { servicesData } from "@/lib/data/services";

export const metadata: Metadata = {
    title: "Logistics Services Nigeria | Road, Marine, Air Cargo & Clearing",
    description:
        "Kemfah Logistics offers road freight, marine transport, IATA-aligned international air cargo, and clearing & forwarding across Nigeria and global corridors.",
    keywords: [
        "freight haulage Nigeria",
        "international air cargo Nigeria",
        "IATA cargo agent Nigeria",
        "clearing and forwarding agent Nigeria",
        "cargo shipping Nigeria",
        "marine logistics Nigeria",
    ],
    openGraph: {
        title: "Logistics Services Nigeria | Road, Marine, Air Cargo & Clearing",
        description:
            "Kemfah Logistics offers road freight, marine transport, IATA-aligned international air cargo, and clearing & forwarding.",
        url: "/services",
    },
    alternates: {
        canonical: "/services",
    },
};

/* Expanded service descriptions from PRD Section 4.3 */
const serviceDescriptions: Record<string, string> = {
    road_freight:
        "From Lagos to Kano, Port Harcourt to Abuja — our fleet handles your cargo with care and precision. Full-load and part-load haulage available, with updates every step of the way.",
    marine_transport:
        "For bulk cargo that moves by sea, Kemfah connects you to Nigeria's ports. Barges, tugs, and lighter services — managed from origin to berth.",
    clearing_forwarding:
        "Import and export made stress-free. Our agents handle customs documentation, port clearance, and last-mile delivery so your goods arrive on time without surprises.",
    general_supplies:
        "We source, supply, and distribute general goods, safety equipment, and commodities to businesses across Nigeria. Bulk supply pricing available on request.",
};

export default function ServicesPage() {
    return (
        <>
            <Navbar />
            <main>
                <PageHero
                    headline={servicesData.hero.headline}
                    subheadline={servicesData.hero.subheadline}
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Logistics Services", href: "/services" },
                    ]}
                />
                <AirCargoFeature
                    headline={servicesData.internationalAirCargo.headline}
                    description={servicesData.internationalAirCargo.description}
                    routes={servicesData.internationalAirCargo.routes}
                />
                <ServiceDetailCards
                    services={servicesData.serviceCards}
                    descriptions={serviceDescriptions}
                />
                <CoverageMap
                    nigeria={servicesData.coverage.nigeria}
                    internationalCorridors={servicesData.coverage.internationalCorridors}
                />
                <HowItWorks steps={servicesData.howItWorks} />
                <CTAStrip
                    headline={servicesData.ctaStrip.headline}
                    buttonLabel={servicesData.ctaStrip.buttonLabel}
                />
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
