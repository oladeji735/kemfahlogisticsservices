"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

type ServiceType =
    | "road_freight"
    | "international_air_cargo"
    | "marine"
    | "clearing_forwarding"
    | "general_supply"
    | "other"
    | "";

interface QuoteFormProps {
    headline?: string;
    confirmationMessage?: string;
}

const serviceOptions: { value: ServiceType; label: string; icon: React.ReactNode }[] = [
    {
        value: "road_freight",
        label: "Road Freight / Haulage",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
            </svg>
        ),
    },
    {
        value: "international_air_cargo",
        label: "International Air Cargo",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
        ),
    },
    {
        value: "marine",
        label: "Marine Logistics",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
        ),
    },
    {
        value: "clearing_forwarding",
        label: "Clearing & Forwarding",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        value: "general_supply",
        label: "General Supply",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
    },
    {
        value: "other",
        label: "Other",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

function isLogisticsService(service: ServiceType): boolean {
    return ["road_freight", "international_air_cargo", "marine", "clearing_forwarding", "general_supply"].includes(service);
}

export function QuoteForm({
    headline = "Request a Free Quote — No Obligation",
    confirmationMessage = "Thank you! A member of our team will contact you within 24 hours with your personalised quote.",
}: QuoteFormProps) {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState<ServiceType>("");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        if (localStorage.getItem('kemfah_quote_submitted') === 'true') {
            setStep(4);
        }
    }, []);

    // Step 2 fields — logistics
    const [pickupLocation, setPickupLocation] = useState("");
    const [deliveryLocation, setDeliveryLocation] = useState("");
    const [cargoType, setCargoType] = useState("");
    const [estimatedWeight, setEstimatedWeight] = useState("");
    const [preferredDate, setPreferredDate] = useState("");

    // Step 2 fields — other
    const [briefDescription, setBriefDescription] = useState("");
    const [timeline, setTimeline] = useState("");
    const [location, setLocation] = useState("");

    // Step 3 fields
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [companyName, setCompanyName] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stepErrors, setStepErrors] = useState<Record<string, string>>({});
    const [submitError, setSubmitError] = useState<string | null>(null);

    function validateStep2(): Record<string, string> {
        const errors: Record<string, string> = {};
        if (isLogisticsService(selectedService)) {
            if (!pickupLocation.trim()) errors.pickupLocation = "Required";
            if (!deliveryLocation.trim()) errors.deliveryLocation = "Required";
            if (!cargoType.trim()) errors.cargoType = "Required";
        } else {
            if (!briefDescription.trim()) errors.briefDescription = "Required";
        }
        return errors;
    }

    function validateStep3(): Record<string, string> {
        const errors: Record<string, string> = {};
        if (!fullName.trim()) errors.fullName = "Required";
        if (!phone.trim()) errors.phone = "Required";
        if (!email.trim()) errors.email = "Required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Invalid email";
        return errors;
    }

    function handleNext() {
        if (step === 1 && !selectedService) return;
        if (step === 2) {
            const errors = validateStep2();
            setStepErrors(errors);
            if (Object.keys(errors).length > 0) return;
        }
        setStepErrors({});
        setStep(step + 1);
    }

    async function handleSubmit() {
        const errors = validateStep3();
        setStepErrors(errors);
        if (Object.keys(errors).length > 0) return;

        setSubmitError(null);
        setIsSubmitting(true);

        try {
            const isLogistics = isLogisticsService(selectedService);
            const payload = isLogistics
                ? {
                    formType: "logistics" as const,
                    serviceType: selectedService,
                    pickupLocation,
                    deliveryLocation,
                    cargoType,
                    estimatedWeight,
                    preferredDate,
                    fullName,
                    phone,
                    email,
                    companyName,
                }
                : {
                    formType: "other" as const,
                    serviceType: selectedService,
                    briefDescription,
                    timeline,
                    location,
                    fullName,
                    phone,
                    email,
                    companyName,
                };

            const response = await fetch("/api/quote", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                localStorage.setItem('kemfah_quote_submitted', 'true');
                setStep(4);
            } else {
                setSubmitError(data.error || "Failed to submit quote request. Please try again.");
            }
        } catch (error) {
            setSubmitError("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    const totalSteps = 3;

    return (
        <div className="transition-opacity duration-300 min-h-[400px]">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">{headline}</h2>

            {!isMounted ? (
                <div className="flex justify-center items-center py-24">
                    <div className="animate-spin w-8 h-8 rounded-full border-4 border-gray-100 border-t-amber"></div>
                </div>
            ) : (
                <>
                {/* Progress bar */}
                {step < 4 && (
                    <div className="flex items-center gap-2 mb-8">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex items-center gap-2 flex-1">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${s <= step ? "bg-amber text-white" : "bg-gray-light text-charcoal-muted"
                                    }`}
                            >
                                {s < step ? (
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    s
                                )}
                            </div>
                            {s < totalSteps && (
                                <div className={`flex-1 h-0.5 ${s < step ? "bg-amber" : "bg-gray-light"}`} />
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Step 1 — Service selection */}
            {step === 1 && (
                <div>
                    <p className="text-charcoal mb-6">Select the service you need a quote for:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                        {serviceOptions.map((opt) => (
                            <button
                                key={opt.value}
                                type="button"
                                onClick={() => setSelectedService(opt.value)}
                                className={`p-4 rounded-xl border-2 text-center transition-all hover:shadow-md ${selectedService === opt.value
                                    ? "border-amber bg-amber/5 shadow-md"
                                    : "border-gray-light hover:border-amber/50"
                                    }`}
                            >
                                <div className={`mx-auto mb-2 ${selectedService === opt.value ? "text-amber" : "text-navy"}`}>
                                    {opt.icon}
                                </div>
                                <span className={`text-sm font-medium ${selectedService === opt.value ? "text-amber" : "text-charcoal"}`}>
                                    {opt.label}
                                </span>
                            </button>
                        ))}
                    </div>
                    <Button
                        variant="primary"
                        size="lg"
                        className="w-full"
                        onClick={handleNext}
                    >
                        Next →
                    </Button>
                </div>
            )}

            {/* Step 2 — Service details */}
            {step === 2 && (
                <div className="space-y-5">
                    {isLogisticsService(selectedService) ? (
                        <>
                            <div>
                                <label className="block text-sm font-medium text-charcoal mb-1">Pickup Location *</label>
                                <input type="text" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-colors text-charcoal" placeholder="e.g. Lagos, Nigeria" />
                                {stepErrors.pickupLocation && <p className="mt-1 text-sm text-red-500">{stepErrors.pickupLocation}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-charcoal mb-1">Delivery Location *</label>
                                <input type="text" value={deliveryLocation} onChange={(e) => setDeliveryLocation(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-colors text-charcoal" placeholder="e.g. Abuja, Nigeria" />
                                {stepErrors.deliveryLocation && <p className="mt-1 text-sm text-red-500">{stepErrors.deliveryLocation}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-charcoal mb-1">Cargo Type *</label>
                                <input type="text" value={cargoType} onChange={(e) => setCargoType(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-colors text-charcoal" placeholder="e.g. Building materials, electronics" />
                                {stepErrors.cargoType && <p className="mt-1 text-sm text-red-500">{stepErrors.cargoType}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-charcoal mb-1">Estimated Weight (in KG) or Volume</label>
                                <input type="text" value={estimatedWeight} onChange={(e) => setEstimatedWeight(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-colors text-charcoal" placeholder="e.g. 500 KG, 5 tonnes, 20 CBM" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-charcoal mb-1">Preferred Date</label>
                                <input type="date" value={preferredDate} onChange={(e) => setPreferredDate(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-colors text-charcoal" />
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <label className="block text-sm font-medium text-charcoal mb-1">Brief Description *</label>
                                <textarea rows={4} value={briefDescription} onChange={(e) => setBriefDescription(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-colors text-charcoal resize-none" placeholder="Describe your requirement..." />
                                {stepErrors.briefDescription && <p className="mt-1 text-sm text-red-500">{stepErrors.briefDescription}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-charcoal mb-1">Timeline</label>
                                <input type="text" value={timeline} onChange={(e) => setTimeline(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-colors text-charcoal" placeholder="e.g. Within 2 weeks" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-charcoal mb-1">Location</label>
                                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-colors text-charcoal" placeholder="e.g. Lagos, Nigeria" />
                            </div>
                        </>
                    )}

                    <div className="flex gap-4">
                        <Button variant="ghost" size="lg" className="flex-1" onClick={() => { setStep(1); setStepErrors({}); }}>
                            ← Back
                        </Button>
                        <Button variant="primary" size="lg" className="flex-1" onClick={handleNext}>
                            Next →
                        </Button>
                    </div>
                </div>
            )}

            {/* Step 3 — Contact details */}
            {step === 3 && (
                <div className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-charcoal mb-1">Full Name *</label>
                        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-colors text-charcoal" placeholder="Your full name" />
                        {stepErrors.fullName && <p className="mt-1 text-sm text-red-500">{stepErrors.fullName}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-charcoal mb-1">Phone Number *</label>
                        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-colors text-charcoal" placeholder="08160047436" />
                        {stepErrors.phone && <p className="mt-1 text-sm text-red-500">{stepErrors.phone}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-charcoal mb-1">Email Address *</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-colors text-charcoal" placeholder="you@example.com" />
                        {stepErrors.email && <p className="mt-1 text-sm text-red-500">{stepErrors.email}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-charcoal mb-1">Company Name (optional)</label>
                        <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-colors text-charcoal" placeholder="Your company" />
                    </div>

                    {/* Submit Error */}
                    {submitError && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-sm font-medium text-red-800">Error submitting quote</p>
                                    <p className="text-sm text-red-600 mt-1">{submitError}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="flex gap-4">
                        <Button variant="ghost" size="lg" className="flex-1" onClick={() => { setStep(2); setStepErrors({}); }}>
                            ← Back
                        </Button>
                        <Button variant="primary" size="lg" className="flex-1" onClick={handleSubmit}>
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Submitting...
                                </span>
                            ) : (
                                "Submit Quote Request"
                            )}
                        </Button>
                    </div>
                </div>
            )}

            {/* Step 4 — Confirmation */}
            {step === 4 && (
                <div className="bg-sky rounded-xl p-8 text-center border-2 border-[#EDF3FA]">
                    <div className="w-16 h-16 bg-amber/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-amber" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-navy mb-2">Quote Request Submitted!</h3>
                    <p className="text-charcoal mb-8 text-lg max-w-lg mx-auto">{confirmationMessage}</p>
                    
                    <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                        <Button 
                            variant="outlineSecondary" 
                            type="button"
                            onClick={() => {
                                localStorage.removeItem('kemfah_quote_submitted');
                                setStep(1);
                                setSelectedService("");
                                setPickupLocation("");
                                setDeliveryLocation("");
                                setCargoType("");
                                setEstimatedWeight("");
                                setPreferredDate("");
                                setBriefDescription("");
                                setTimeline("");
                                setLocation("");
                                setFullName("");
                                setPhone("");
                                setEmail("");
                                setCompanyName("");
                                setStepErrors({});
                                setSubmitError(null);
                            }}
                        >
                            Request Another Quote
                        </Button>
                        <Link href="/payment-proof">
                            <Button variant="primary" className="shadow-md hover:-translate-y-0.5 transition-transform">
                                Submit Payment Proof
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
            </>
            )}
        </div>
    );
}
