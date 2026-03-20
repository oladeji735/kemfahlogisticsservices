import Image from "next/image";

interface CredentialsBlockProps {
    statement: string;
    cacNumber: string;
    sealImageSrc: string;
}

export function CredentialsBlock({ statement, cacNumber, sealImageSrc }: CredentialsBlockProps) {
    return (
        <section className="bg-navy py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* CAC Seal Image */}
                    <div className="relative h-[300px] lg:h-[360px] rounded-xl overflow-hidden shadow-lg bg-white/5 flex items-center justify-center order-2 lg:order-1">
                        <Image
                            src={sealImageSrc}
                            alt="Corporate Affairs Commission certification seal"
                            fill
                            className="object-contain p-4"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    {/* Text content */}
                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber/20 rounded-full mb-6">
                            <svg className="w-4 h-4 text-amber" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium text-amber">Verified &amp; Licensed</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Credentials &amp; Registration
                        </h2>

                        <p className="text-white/75 text-base md:text-lg leading-relaxed mb-6">
                            {statement}
                        </p>

                        <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3 w-fit">
                            <svg className="w-5 h-5 text-amber" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-white/90 text-sm font-medium">CAC Registration: {cacNumber}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
