import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { GoogleMapEmbed } from "@/components/sections/GoogleMapEmbed";
import { ContactForm } from "@/components/sections/ContactForm";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { contactData } from "@/lib/data/contact";

export const metadata: Metadata = {
    title: "Contact Kemfah Logistics | Get a Free Freight Quote in 24 Hours",
    description:
        "Request a personalised freight or logistics quote from Kemfah Logistics. Road haulage, air cargo, marine, and clearing services. Response within 24 hours.",
    keywords: [
        "logistics services Nigeria quote",
        "freight company Abuja Lagos",
        "cargo shipping Nigeria",
    ],
    openGraph: {
        title: "Contact Kemfah Logistics | Get a Free Freight Quote in 24 Hours",
        description:
            "Request a personalised freight or logistics quote. Response within 24 hours.",
        url: "/contact",
    },
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main>
                <PageHero
                    headline={contactData.hero.headline}
                    subheadline={contactData.hero.subheadline}
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Contact & Quote", href: "/contact" },
                    ]}
                />
                <ContactDetails />
                <GoogleMapEmbed />

                {/* Forms Section */}
                <section className="bg-white py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">
                                    Send Us a Message
                                </h2>
                                <ContactForm submitLabel={contactData.forms.contact.submitLabel} />
                            </div>

                            {/* Quote Form */}
                            <div id="quote-section" className="scroll-mt-24">
                                <QuoteForm
                                    headline={contactData.forms.quote.headline}
                                    confirmationMessage={contactData.forms.quote.confirmationMessage}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
