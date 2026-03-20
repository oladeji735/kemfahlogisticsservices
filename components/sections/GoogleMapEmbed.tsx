export function GoogleMapEmbed() {
    return (
        <section className="bg-sky py-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="rounded-xl overflow-hidden shadow-md">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.6296663!2d3.1438711!3d6.5480559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng"
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
                    Map shows Lagos area. Exact office location will be updated with confirmed address.
                </p>
            </div>
        </section>
    );
}
