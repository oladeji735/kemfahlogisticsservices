import { siteConfig } from "@/lib/data/site";

export function ContactDetails() {
    const { contact } = siteConfig;

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Address */}
                    <div className="bg-sky rounded-xl p-6">
                        <div className="w-12 h-12 bg-amber/10 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-navy mb-2">Our Offices</h3>
                        <div className="space-y-4">
                            {contact.offices.map((office) => (
                                <div key={office.city}>
                                    <h4 className="font-semibold text-charcoal">{office.city} Office:</h4>
                                    <p className="text-charcoal text-sm">{office.address}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="bg-sky rounded-xl p-6">
                        <div className="w-12 h-12 bg-amber/10 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-navy mb-2">Phone</h3>
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-semibold text-charcoal text-sm">Lagos Office:</h4>
                                <a href={`tel:${contact.phone.lagos.replace(/[-\s]/g, "")}`} className="block text-charcoal text-sm hover:text-amber transition-colors">
                                    {contact.phone.lagos}
                                </a>
                            </div>
                            <div>
                                <h4 className="font-semibold text-charcoal text-sm">Ibadan Office:</h4>
                                <a href={`tel:${contact.phone.ibadan.replace(/[-\s]/g, "")}`} className="block text-charcoal text-sm hover:text-amber transition-colors">
                                    {contact.phone.ibadan}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Email & Hours */}
                    <div className="bg-sky rounded-xl p-6">
                        <div className="w-12 h-12 bg-amber/10 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-navy mb-2">Email &amp; Hours</h3>
                        <a href={`mailto:${contact.email}`} className="block text-charcoal text-sm hover:text-amber transition-colors mb-3">
                            {contact.email}
                        </a>
                        <div className="text-xs text-charcoal-muted space-y-0.5">
                            <p>{contact.hours.weekday}</p>
                            <p>{contact.hours.saturday}</p>
                            <p>{contact.hours.sunday}</p>
                        </div>
                    </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="text-center">
                    <a
                        href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}?text=Hello%20Kemfah%20Logistics%2C%20I%20have%20an%20inquiry.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#20bd5a] transition-colors shadow-lg shadow-[#25D366]/30"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Prefer WhatsApp? Chat with us directly →
                    </a>
                </div>
            </div>
        </section>
    );
}
