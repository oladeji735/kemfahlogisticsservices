import Image from "next/image";

interface AboutMandateProps {
    paragraphs: string[];
    imageSrc: string;
}

export function AboutMandate({ paragraphs, imageSrc }: AboutMandateProps) {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber/10 rounded-full mb-6">
                            <span className="w-2 h-2 bg-amber rounded-full" aria-hidden="true" />
                            <span className="text-sm font-medium text-amber">Our Mandate</span>
                        </div>

                        <div className="space-y-6">
                            {paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-charcoal leading-relaxed text-base md:text-lg"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src={imageSrc}
                            alt="Kemfah Logistics office and team"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Subtle navy overlay at bottom for depth */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-navy/30 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
}
