import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { servicesData } from "@/lib/data/services";

// ── Static params for pre-rendering all service pages ──────────────────────
export function generateStaticParams() {
    return servicesData.serviceDetails.map((svc) => ({ slug: svc.slug }));
}

// ── Dynamic metadata per service ───────────────────────────────────────────
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const svc = servicesData.serviceDetails.find((s) => s.slug === slug);
    if (!svc) return {};

    return {
        title: `${svc.title} | Kemfah Logistics Services`,
        description: svc.description,
        openGraph: {
            title: `${svc.title} | Kemfah Logistics`,
            description: svc.description,
            url: `/services/${svc.slug}`,
        },
        alternates: { canonical: `/services/${svc.slug}` },
    };
}

// ── Page Component ─────────────────────────────────────────────────────────
export default async function ServiceDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const svc = servicesData.serviceDetails.find((s) => s.slug === slug);

    if (!svc) notFound();

    return (
        <>
            <Navbar />
            <main>
                {/* ── Full-bleed Hero ─────────────────────────────────── */}
                <section className="relative bg-navy pt-24 pb-24 overflow-hidden">
                    {/* Hero image */}
                    <Image
                        src={svc.heroImage}
                        alt={svc.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/40" />

                    {/* Dot grid */}
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                            backgroundSize: "28px 28px",
                        }}
                        aria-hidden="true"
                    />

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Breadcrumbs */}
                        <nav aria-label="Breadcrumb" className="mb-8">
                            <ol className="flex items-center gap-2 text-sm text-white/50">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    <span className="text-white/80">{svc.title}</span>
                                </li>
                            </ol>
                        </nav>

                        {/* Badge */}
                        {svc.badge && (
                            <div className="inline-flex items-center gap-2 bg-amber/15 border border-amber/30 rounded-full px-4 py-1.5 mb-5">
                                <span className="w-1.5 h-1.5 bg-amber rounded-full" />
                                <span className="text-amber text-xs font-bold uppercase tracking-widest">{svc.badge}</span>
                            </div>
                        )}

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-2xl mb-4">
                            {svc.title}
                        </h1>
                        <p className="text-lg text-white/70 max-w-xl leading-relaxed mb-10">
                            {svc.tagline}
                        </p>

                        {/* Route pills (air cargo only) */}
                        {svc.routes && svc.routes.length > 0 && (
                            <div className="flex flex-wrap gap-3 mb-10">
                                {svc.routes.map((route) => (
                                    <span key={route} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium">
                                        <svg className="w-4 h-4 text-amber shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                        </svg>
                                        {route}
                                    </span>
                                ))}
                            </div>
                        )}

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-amber hover:bg-amber-hover text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-xl shadow-amber/30 hover:shadow-amber/50 hover:-translate-y-0.5"
                        >
                            {svc.cta}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </section>

                {/* ── Stats Strip ──────────────────────────────────────── */}
                <section className="bg-white border-b border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-3 divide-x divide-gray-100">
                            {svc.stats.map((stat) => (
                                <div key={stat.label} className="py-8 px-6 text-center">
                                    <p className="text-2xl sm:text-3xl font-bold text-navy">{stat.value}</p>
                                    <p className="text-xs text-gray-500 mt-1 font-medium uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Feature Detail Section ───────────────────────────── */}
                <section className="bg-[#F0F4F9] py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Text */}
                            <div>
                                <div className="inline-block bg-amber/10 border border-amber/20 rounded-full px-4 py-1 mb-6">
                                    <span className="text-amber text-xs font-bold uppercase tracking-widest">What We Offer</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                                    Everything You Need, <br />Handled End to End
                                </h2>
                                <p className="text-charcoal leading-relaxed mb-8 text-base md:text-lg">
                                    {svc.description}
                                </p>

                                {/* Feature list */}
                                <ul className="space-y-3">
                                    {svc.features.map((feat) => (
                                        <li key={feat} className="flex items-start gap-3">
                                            <div className="w-5 h-5 bg-amber/15 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                                <svg className="w-3 h-3 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-charcoal text-sm leading-relaxed">{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-10">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 bg-navy hover:bg-navy-hover text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-navy/20"
                                    >
                                        {svc.cta}
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="relative h-[380px] lg:h-[480px] rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src={svc.heroImage}
                                    alt={svc.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── More Services ─────────────────────────────────────── */}
                <section className="bg-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-navy mb-8 text-center">Explore Our Other Services</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {servicesData.serviceDetails
                                .filter((s) => s.slug !== svc.slug)
                                .map((other) => (
                                    <Link
                                        key={other.slug}
                                        href={`/services/${other.slug}`}
                                        className="group flex flex-col gap-3 bg-[#F0F4F9] hover:bg-navy rounded-xl p-5 border border-gray-100 hover:border-transparent transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                                    >
                                        <span className="text-sm font-bold text-navy group-hover:text-white transition-colors leading-tight">{other.title}</span>
                                        <span className="text-xs text-gray-400 group-hover:text-white/60 transition-colors">{other.tagline}</span>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </section>

                <CTAStrip
                    headline="Ready to move your cargo?"
                    buttonLabel="Request a Quote"
                />
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
