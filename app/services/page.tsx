import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceDetailCards } from "@/components/sections/ServiceDetailCards";
import { CoverageMap } from "@/components/sections/CoverageMap";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { servicesData } from "@/lib/data/services";
import Link from "next/link";
import Image from "next/image";

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

// Icons per service for the feature strip
const serviceIcons: Record<string, React.ReactNode> = {
    "air-cargo": (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
    ),
    "road-freight": (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
    ),
    "marine": (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 17l9-13 9 13H3zm0 0l3 3m15-3l-3 3M12 4v2" />
        </svg>
    ),
    "clearing": (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
    ),
};

const serviceDescriptions: Record<string, string> = {
    road_freight:
        "From Lagos to Kano, Port Harcourt to Abuja — our fleet handles your cargo with care and precision. Full-load and part-load haulage available, with updates every step of the way.",
    marine_transport:
        "For bulk cargo that moves by sea, Kemfah connects you to Nigeria's ports. Barges, tugs, and lighter services — managed from origin to berth.",
    clearing_forwarding:
        "Import and export made stress-free. Our agents handle customs documentation, port clearance, and last-mile delivery so your goods arrive on time without surprises.",
};

export default function ServicesPage() {
    return (
        <>
            <Navbar />
            <main>
                {/* Upgraded Hero with background image */}
                <PageHero
                    headline={servicesData.hero.headline}
                    subheadline={servicesData.hero.subheadline}
                    imageSrc={servicesData.hero.imageSrc}
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Services", href: "/services" },
                    ]}
                />

                {/* Service Quick-Nav Strip */}
                <section className="bg-[#F0F4F9] py-12 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
                            Our Services
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                            {servicesData.serviceDetails.map((svc) => (
                                <Link
                                    key={svc.slug}
                                    href={`/services/${svc.slug}`}
                                    className="group flex flex-col items-center gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-amber/30 hover:-translate-y-0.5 transition-all duration-200 text-center"
                                >
                                    <div className="w-12 h-12 bg-navy/5 group-hover:bg-amber/10 rounded-xl flex items-center justify-center text-navy group-hover:text-amber transition-colors">
                                        {serviceIcons[svc.slug]}
                                    </div>
                                    <span className="text-xs font-bold text-navy group-hover:text-amber transition-colors leading-tight">
                                        {svc.title}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Air Cargo Feature Callout */}
                <section className="bg-sky py-16 md:py-20" id="air-cargo">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber/10 rounded-full mb-6 border border-amber/20">
                                    <svg className="w-5 h-5 text-amber" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm font-semibold text-amber uppercase tracking-wide">IATA-Aligned</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                                    International Air Cargo
                                </h2>
                                <p className="text-charcoal leading-relaxed text-base md:text-lg mb-8">
                                    As an IATA-aligned logistics partner, Kemfah facilitates international air cargo bookings across major global corridors. Lagos to London, USA, Canada — handled end to end.
                                </p>
                                <div className="flex flex-wrap gap-3 mb-8">
                                    {["Lagos → London", "Nigeria → USA", "Nigeria → Canada"].map((route) => (
                                        <span key={route} className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-full text-sm font-medium">
                                            <svg className="w-4 h-4 text-amber" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                            </svg>
                                            {route}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/services/air-cargo" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-amber transition-colors">
                                        Learn More
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </Link>
                                    <Link href="/contact" className="inline-flex items-center gap-2 bg-amber text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-amber-hover transition-colors shadow-md shadow-amber/25">
                                        Get a Quote
                                    </Link>
                                </div>
                            </div>
                            <div className="relative h-[350px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/stock/service-air.jpg"
                                    alt="International air cargo plane"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service Cards */}
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
