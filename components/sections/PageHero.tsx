import Link from "next/link";

interface PageHeroProps {
    headline: string;
    subheadline?: string;
    breadcrumbs?: { label: string; href: string }[];
}

export function PageHero({ headline, subheadline, breadcrumbs }: PageHeroProps) {
    return (
        <section className="bg-navy pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    {headline}
                </h1>

                {subheadline && (
                    <p className="mt-4 text-lg md:text-xl text-white/65 max-w-3xl">
                        {subheadline}
                    </p>
                )}
            </div>
        </section>
    );
}
