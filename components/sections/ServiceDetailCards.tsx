import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import type { ServiceCard } from "@/types";

// Lookup map — slug per service key
const ANCHOR_IDS: Record<string, string> = {
    road_freight: "logistics",
    marine_transport: "marine",
    clearing_forwarding: "clearing",
};

interface ServiceDetailCardsProps {
    heading?: string;
    services: ServiceCard[];
    descriptions: Record<string, string>;
}

export function ServiceDetailCards({
    heading = "Our Core Services",
    services,
    descriptions,
}: ServiceDetailCardsProps) {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy">{heading}</h2>
                    <p className="mt-3 text-charcoal/70 max-w-xl mx-auto">
                        From road haulage to port clearing — we handle every stage of your supply chain.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service) => (
                        /*
                         * scroll-mt-28 lives on this outer wrapper, NOT on the
                         * overflow-hidden card below — this prevents cross-browser
                         * scroll-margin issues caused by the clipping context.
                         */
                        <div
                            key={service.key}
                            id={ANCHOR_IDS[service.key]}
                            className="scroll-mt-28"
                        >
                            <article className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
                                {/* Image header */}
                                <div className="h-56 relative overflow-hidden shrink-0">
                                    <Image
                                        src={service.imageSrc}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
                                    {/* Title overlay on image */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="border-t-2 border-amber w-10 mb-4" aria-hidden="true" />
                                    <p className="text-charcoal leading-relaxed mb-6 flex-1">
                                        {descriptions[service.key] || service.description}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-3 mt-auto">
                                        {service.slug && (
                                            <Link
                                                href={`/services/${service.slug}`}
                                                className="inline-flex items-center gap-1.5 text-navy font-semibold text-sm hover:text-amber transition-colors group/link"
                                            >
                                                Learn More
                                                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </Link>
                                        )}
                                        <Button variant="ghost" size="sm" href="/contact">
                                            Get a Quote →
                                        </Button>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
