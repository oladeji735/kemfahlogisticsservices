import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface AirCargoFeatureProps {
    headline: string;
    description: string;
    routes: string[];
}

export function AirCargoFeature({ headline, description, routes }: AirCargoFeatureProps) {
    return (
        <section className="bg-sky py-16 md:py-24" id="air-cargo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text content */}
                    <div>
                        {/* IATA Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber/10 rounded-full mb-6 border border-amber/20">
                            <svg className="w-5 h-5 text-amber" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm font-semibold text-amber uppercase tracking-wide">IATA-Aligned</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                            {headline}
                        </h2>

                        <p className="text-charcoal leading-relaxed text-base md:text-lg mb-8">
                            {description}
                        </p>

                        {/* Route pills */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            {routes.map((route) => (
                                <span
                                    key={route}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-full text-sm font-medium"
                                >
                                    <svg className="w-4 h-4 text-amber" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                    </svg>
                                    {route}
                                </span>
                            ))}
                        </div>

                        <Button variant="primary" size="lg" href="/contact">
                            Get an Air Cargo Quote
                        </Button>
                    </div>

                    {/* Visual — air cargo image */}
                    <div className="relative h-[350px] lg:h-[450px] rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/stock/service-air.jpg"
                            alt="International air cargo plane for IATA-aligned freight"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
}
