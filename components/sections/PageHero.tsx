import Link from "next/link";
import Image from "next/image";

interface PageHeroProps {
    headline: string;
    subheadline?: string;
    breadcrumbs?: { label: string; href: string }[];
    imageSrc?: string;
    badge?: string;
}

export function PageHero({ headline, subheadline, breadcrumbs, imageSrc, badge }: PageHeroProps) {
    return (
        <section className="relative bg-navy pt-24 pb-20 overflow-hidden">
            {/* Background image (optional) */}
            {imageSrc && (
                <>
                    <Image
                        src={imageSrc}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                        aria-hidden="true"
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/50" />
                </>
            )}

            {/* Dot grid overlay (always present) */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                    backgroundSize: "28px 28px",
                }}
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <nav aria-label="Breadcrumb" className="mb-6">
                        <ol className="flex items-center gap-2 text-sm text-white/50">
                            {breadcrumbs.map((crumb, index) => (
                                <li key={crumb.href} className="flex items-center gap-2">
                                    {index > 0 && (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    )}
                                    {index < breadcrumbs.length - 1 ? (
                                        <Link href={crumb.href} className="hover:text-white transition-colors">
                                            {crumb.label}
                                        </Link>
                                    ) : (
                                        <span className="text-white/80">{crumb.label}</span>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                )}

                {/* Optional badge */}
                {badge && (
                    <div className="inline-flex items-center gap-2 bg-amber/15 border border-amber/30 rounded-full px-4 py-1.5 mb-5">
                        <span className="w-1.5 h-1.5 bg-amber rounded-full" />
                        <span className="text-amber text-xs font-bold uppercase tracking-widest">{badge}</span>
                    </div>
                )}

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
                    {headline}
                </h1>

                {subheadline && (
                    <p className="mt-5 text-lg md:text-xl text-white/65 max-w-2xl leading-relaxed">
                        {subheadline}
                    </p>
                )}
            </div>
        </section>
    );
}
