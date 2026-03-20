export function GoogleMapEmbed() {
    return (
        <section className="bg-sky py-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="rounded-xl overflow-hidden shadow-md">
                    <iframe
                        src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=5,%20Limpson%20Street%20off%20River%20Valley%20Extension,%20Ojodu%20Berger,%20Lagos,%20Nigeria+(Kemfah%20Logistics)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Kemfah Logistics office location on Google Maps"
                        className="w-full"
                    />
                </div>
                <p className="text-center text-xs text-charcoal-muted mt-3">
                    Lagos Office Location
                </p>
            </div>
        </section>
    );
}
