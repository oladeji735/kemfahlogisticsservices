interface MissionValuesProps {
    mission: string;
    values: string[];
}

export function MissionValues({ mission, values }: MissionValuesProps) {
    const valueIcons = [
        // Accountability
        <svg key="accountability" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>,
        // Reliability
        <svg key="reliability" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>,
        // Global Thinking
        <svg key="global" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>,
    ];

    return (
        <section className="bg-white py-16 md:py-24 relative overflow-hidden">
            {/* Subtle background pattern for premium feel */}
            <div className="absolute inset-0 bg-sky/30" aria-hidden="true" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber/5 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-navy/5 rounded-full blur-3xl" aria-hidden="true" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">

                    {/* Left Column: Mission Statement */}
                    <div className="col-span-1 lg:col-span-5 h-full">
                        <div className="bg-navy rounded-3xl p-8 md:p-12 h-full flex flex-col justify-center relative overflow-hidden shadow-2xl">
                            {/* Decorative element inside navy card */}
                            <svg className="absolute top-0 right-0 text-white/5 w-64 h-64 -mt-16 -mr-16 transform rotate-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 2L2 22h20L12 2zm0 3.83L18.17 19H5.83L12 5.83z" />
                            </svg>

                            <div className="relative z-10">
                                <span className="inline-block py-1 px-3 rounded-full bg-amber/20 text-amber font-semibold text-sm mb-6 tracking-wide uppercase">
                                    Our Mission
                                </span>

                                <svg className="w-10 h-10 text-amber mb-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>

                                <p className="text-xl md:text-2xl text-white leading-relaxed font-light">
                                    {mission}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Core Values */}
                    <div className="col-span-1 lg:col-span-7 flex flex-col justify-center py-6">
                        <div className="mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                                Driven by Core Values
                            </h2>
                            <p className="text-charcoal-muted text-lg max-w-2xl">
                                Our operations are guided by principles that ensure your cargo is handled with the utmost professionalism.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {values.map((value, index) => (
                                <div
                                    key={value}
                                    className="group relative bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-6 overflow-hidden"
                                >
                                    {/* Subtle hover accent bar */}
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom" />

                                    <div className="w-16 h-16 rounded-xl bg-sky flex-shrink-0 flex items-center justify-center text-navy group-hover:text-amber group-hover:bg-amber/10 transition-colors">
                                        {valueIcons[index] || valueIcons[0]}
                                    </div>

                                    <div className="flex-grow">
                                        <div className="text-sm font-bold text-gray-300 tracking-widest mb-1">
                                            0{index + 1}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-navy">
                                            {value}
                                        </h3>
                                    </div>

                                    {/* Arrow icon that translates on hover */}
                                    <div className="text-gray-300 group-hover:text-amber transform group-hover:translate-x-2 transition-all">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
