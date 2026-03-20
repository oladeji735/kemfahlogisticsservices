import Image from "next/image";

interface CoverageMapProps {
    nigeria: {
        label: string;
        note: string;
        imageSrc: string;
    };
    internationalCorridors: string[];
}

export function CoverageMap({ nigeria, internationalCorridors }: CoverageMapProps) {
    return (
        <section className="bg-navy-midnight py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Where We Operate
                    </h2>
                    <p className="mt-4 text-lg text-white/65 max-w-2xl mx-auto">
                        Connecting Nigeria to the world — by road, sea, and air.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Nigeria coverage */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-amber/20 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white">{nigeria.label}</h3>
                        </div>

                        {/* Map image */}
                        <div className="relative h-[250px] rounded-lg overflow-hidden mb-6 bg-white/5">
                            <Image
                                src={nigeria.imageSrc}
                                alt="Nigeria coverage map showing 36 states"
                                fill
                                className="object-contain"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                        <p className="text-white/65 text-sm leading-relaxed">
                            {nigeria.note}
                        </p>
                    </div>

                    {/* International corridors */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-amber/20 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white">International Corridors</h3>
                        </div>

                        <p className="text-white/65 text-sm mb-8 leading-relaxed">
                            Through our IATA-aligned partnerships, we facilitate air cargo routes to major international destinations.
                        </p>

                        <div className="space-y-3">
                            {internationalCorridors.map((city) => (
                                <div
                                    key={city}
                                    className="flex items-center gap-4 bg-white/5 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors"
                                >
                                    <svg className="w-5 h-5 text-amber flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                    </svg>
                                    <span className="text-white font-medium">Nigeria → {city}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
