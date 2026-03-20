import Image from "next/image";
import { Button } from "@/components/ui/Button";
import type { ServiceCard } from "@/types";

interface ServiceDetailCardsProps {
    heading?: string;
    services: ServiceCard[];
    descriptions: Record<string, string>;
}

export function ServiceDetailCards({
    heading = "All Our Services",
    services,
    descriptions,
}: ServiceDetailCardsProps) {
    return (
        <section className="bg-white py-16 md:py-24" id="logistics">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy">{heading}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service) => (
                        <article
                            key={service.key}
                            id={service.key === "clearing_forwarding" ? "clearing" : service.key === "marine_transport" ? "marine" : service.key === "general_supplies" ? "import-export" : undefined}
                            className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
                        >
                            {/* Image header */}
                            <div className="h-52 relative overflow-hidden">
                                <Image
                                    src={service.imageSrc}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                                {/* Title overlay on image */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="border-t-2 border-amber w-12 mb-4" />
                                <p className="text-charcoal leading-relaxed mb-6">
                                    {descriptions[service.key] || service.description}
                                </p>
                                <Button variant="ghost" size="sm" href="/contact">
                                    Get a Quote →
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
