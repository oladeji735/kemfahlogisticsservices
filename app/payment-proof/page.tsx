import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { PaymentProofForm } from "@/components/sections/PaymentProofForm";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
    title: "Secure Payment Confirmation | Kemfah Logistics",
    description: "Submit your payment confirmation and receipt to Kemfah Logistics.",
    // Disallow indexing of this hidden page
    robots: "noindex, nofollow",
};

export default function PaymentProofPage() {
    return (
        <>
            <Navbar />
            <main>
                <PageHero
                    headline="Secure Payment Confirmation"
                    subheadline="Please provide your transaction details and upload your payment receipt to securely confirm your booking with Kemfah Logistics."
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Payment Confirmation", href: "/payment-proof" },
                    ]}
                />
                
                <section className="bg-white py-16 md:py-24">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center p-3 bg-amber/10 rounded-full mb-4">
                                <svg className="w-8 h-8 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                                Upload Receipt Details
                            </h2>
                            <p className="text-charcoal md:text-lg">
                                Your payment details are sent securely directly to our operations team.
                            </p>
                        </div>

                        <PaymentProofForm />
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
