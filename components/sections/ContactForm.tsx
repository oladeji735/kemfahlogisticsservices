"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface ContactFormProps {
    submitLabel?: string;
}

interface FormState {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    honeypot: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    service?: string;
    message?: string;
}

const serviceOptions = [
    "Road Freight",
    "International Air Cargo",
    "Marine",
    "Clearing & Forwarding",
    "General Supplies",
    "Other",
];

function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactForm({ submitLabel = "Send Message" }: ContactFormProps) {
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        honeypot: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    function validate(): FormErrors {
        const newErrors: FormErrors = {};
        if (!form.name.trim()) newErrors.name = "Full name is required.";
        if (!form.email.trim()) newErrors.email = "Email address is required.";
        else if (!validateEmail(form.email)) newErrors.email = "Please enter a valid email address.";
        if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
        if (!form.service) newErrors.service = "Please select a service.";
        if (!form.message.trim()) newErrors.message = "Message is required.";
        else if (form.message.trim().length < 20) newErrors.message = "Message must be at least 20 characters.";
        return newErrors;
    }

    function handleBlur(field: keyof FormErrors) {
        const validationErrors = validate();
        setErrors((prev) => ({ ...prev, [field]: validationErrors[field] }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        // Honeypot check
        if (form.honeypot) return;

        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setIsSubmitting(true);
        // TODO: Replace with actual form submission (Formspree, Resend, or server action)
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    }

    if (isSubmitted) {
        return (
            <div className="bg-sky rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-amber/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-amber" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Message Sent!</h3>
                <p className="text-charcoal">We&apos;ll get back to you within 24 hours.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Honeypot */}
            <div className="hidden" aria-hidden="true">
                <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.honeypot}
                    onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
                />
            </div>

            {/* Full Name */}
            <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-charcoal mb-1">
                    Full Name <span className="text-red-500">*</span>
                </label>
                <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onBlur={() => handleBlur("name")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-colors text-charcoal"
                    placeholder="Your full name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-charcoal mb-1">
                    Email Address <span className="text-red-500">*</span>
                </label>
                <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onBlur={() => handleBlur("email")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-colors text-charcoal"
                    placeholder="you@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-charcoal mb-1">
                    Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    onBlur={() => handleBlur("phone")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-colors text-charcoal"
                    placeholder="+234 903 642 0991"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>

            {/* Service */}
            <div>
                <label htmlFor="contact-service" className="block text-sm font-medium text-charcoal mb-1">
                    Service Needed <span className="text-red-500">*</span>
                </label>
                <select
                    id="contact-service"
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    onBlur={() => handleBlur("service")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-colors text-charcoal bg-white"
                >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
                {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service}</p>}
            </div>

            {/* Message */}
            <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-charcoal mb-1">
                    Message <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onBlur={() => handleBlur("message")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-colors text-charcoal resize-none"
                    placeholder="Tell us about your logistics needs (min. 20 characters)..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>

            {/* Submit */}
            <Button type="submit" variant="primary" size="lg" className="w-full">
                {isSubmitting ? (
                    <span className="flex items-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                    </span>
                ) : (
                    submitLabel
                )}
            </Button>
        </form>
    );
}
