"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/Button";

interface FormState {
    fullName: string;
    goodsDescription: string;
    weight: string;
    amountPaid: string;
    receipt: File | null;
}

interface FormErrors {
    fullName?: string;
    goodsDescription?: string;
    weight?: string;
    amountPaid?: string;
    receipt?: string;
}

export function PaymentProofForm() {
    const [form, setForm] = useState<FormState>({
        fullName: "",
        goodsDescription: "",
        weight: "",
        amountPaid: "",
        receipt: null,
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    // Using a ref for the file input to clear it later if needed
    const fileInputRef = useRef<HTMLInputElement>(null);

    function validate(): FormErrors {
        const newErrors: FormErrors = {};
        if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";
        if (!form.goodsDescription.trim()) newErrors.goodsDescription = "Please describe the goods.";
        if (!form.amountPaid.trim()) newErrors.amountPaid = "Amount paid is required.";
        if (!form.receipt) newErrors.receipt = "Payment receipt image is required.";
        else if (form.receipt.size > 10 * 1024 * 1024) { // 10MB limit
            newErrors.receipt = "File size must be under 10MB.";
        }
        return newErrors;
    }

    function handleBlur(field: keyof FormErrors) {
        const validationErrors = validate();
        setErrors((prev) => ({ ...prev, [field]: validationErrors[field] }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitError(null);

        const validationErrors = validate();
        setErrors(validationErrors);
        
        if (Object.keys(validationErrors).length > 0) return;

        setIsSubmitting(true);

        try {
            // Using FormData because we're sending a file
            const formData = new FormData();
            formData.append("fullName", form.fullName);
            formData.append("goodsDescription", form.goodsDescription);
            formData.append("amountPaid", form.amountPaid);
            if (form.weight) formData.append("weight", form.weight);
            if (form.receipt) formData.append("receipt", form.receipt);

            const response = await fetch("/api/payment-proof", {
                method: "POST",
                body: formData, // the browser will set the correct multipart/form-data headers automatically
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setIsSubmitted(true);
            } else {
                setSubmitError(data.error || "Failed to submit payment details. Please try again.");
            }
        } catch (error) {
            setSubmitError("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    if (isSubmitted) {
        return (
            <div className="bg-sky rounded-xl p-8 text-center border-2 border-[#EDF3FA]">
                <div className="w-16 h-16 bg-amber/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-amber" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">Submission Successful!</h3>
                <p className="text-charcoal mb-6">Your payment details and receipt have been securely sent to our team for processing.</p>
                <Button 
                    variant="ghost" 
                    onClick={() => {
                        setIsSubmitted(false);
                        setForm({
                            fullName: "",
                            goodsDescription: "",
                            weight: "",
                            amountPaid: "",
                            receipt: null,
                        });
                        if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
                >
                    Submit Another Receipt
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Full Name */}
            <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-charcoal mb-1">
                    Full Name <span className="text-red-500">*</span>
                </label>
                <input
                    id="fullName"
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    onBlur={() => handleBlur("fullName")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-colors text-charcoal bg-white"
                    placeholder="E.g. John Doe"
                />
                {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
            </div>

            {/* Goods Description */}
            <div>
                <label htmlFor="goodsDescription" className="block text-sm font-medium text-charcoal mb-1">
                    Goods Description <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="goodsDescription"
                    required
                    rows={3}
                    value={form.goodsDescription}
                    onChange={(e) => setForm({ ...form, goodsDescription: e.target.value })}
                    onBlur={() => handleBlur("goodsDescription")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-colors text-charcoal resize-none bg-white"
                    placeholder="Briefly describe what you are shipping..."
                />
                {errors.goodsDescription && <p className="mt-1 text-sm text-red-500">{errors.goodsDescription}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Weight/KG */}
                <div>
                    <label htmlFor="weight" className="block text-sm font-medium text-charcoal mb-1">
                        Total Weight (in KG) <span className="text-gray-400 font-normal text-xs ml-1">(Optional)</span>
                    </label>
                    <input
                        id="weight"
                        type="text"
                        value={form.weight}
                        onChange={(e) => setForm({ ...form, weight: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-colors text-charcoal bg-white"
                        placeholder="E.g. 150 KG"
                    />
                </div>

                {/* Amount Paid */}
                <div>
                    <label htmlFor="amountPaid" className="block text-sm font-medium text-charcoal mb-1">
                        Amount Paid <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="amountPaid"
                        type="text"
                        required
                        value={form.amountPaid}
                        onChange={(e) => setForm({ ...form, amountPaid: e.target.value })}
                        onBlur={() => handleBlur("amountPaid")}
                        className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-colors text-charcoal bg-white"
                        placeholder="E.g. ₦250,000 or $500"
                    />
                    {errors.amountPaid && <p className="mt-1 text-sm text-red-500">{errors.amountPaid}</p>}
                </div>
            </div>

            {/* Receipt Upload */}
            <div>
                <span className="block text-sm font-medium text-charcoal mb-1">
                    Upload Payment Receipt <span className="text-red-500">*</span>
                </span>
                <label 
                    htmlFor="receipt"
                    className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg transition-colors cursor-pointer group ${errors.receipt ? 'border-red-300 bg-red-50' : 'border-gray-light hover:border-amber/50 bg-sky/50 hover:bg-sky'}`}
                >
                    <div className="space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400 group-hover:text-amber/70 transition-colors" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex text-sm text-gray-600 justify-center pointer-events-none">
                            <span className="relative rounded-md font-medium text-amber group-hover:text-amber/80 transition-colors">
                                <span>Upload a file</span>
                                <input 
                                    id="receipt" 
                                    name="receipt" 
                                    type="file" 
                                    className="sr-only pointer-events-auto" 
                                    accept="image/png, image/jpeg, image/jpg, application/pdf"
                                    ref={fileInputRef}
                                    onChange={(e) => {
                                        const file = e.target.files?.[0] || null;
                                        setForm({ ...form, receipt: file });
                                        if (errors.receipt) {
                                            setErrors(prev => ({ ...prev, receipt: undefined }));
                                        }
                                    }}
                                />
                            </span>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                            PNG, JPG, or PDF up to 10MB
                        </p>
                    </div>
                </label>
                {form.receipt && (
                    <div className="mt-2 text-sm text-navy bg-sky py-2 px-3 rounded-md flex items-center border border-blue-100">
                        <svg className="w-4 h-4 mr-2 text-amber shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="truncate">{form.receipt.name}</span>
                        <span className="ml-2 text-gray-500 text-xs shrink-0">({(form.receipt.size / 1024 / 1024).toFixed(2)} MB)</span>
                    </div>
                )}
                {errors.receipt && <p className="mt-1 text-sm text-red-500">{errors.receipt}</p>}
            </div>

            {/* Submit Error */}
            {submitError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <div>
                            <p className="text-sm font-medium text-red-800">Error submitting form</p>
                            <p className="text-sm text-red-600 mt-1">{submitError}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Submit */}
            <Button type="submit" variant="primary" size="lg" className="w-full mt-8">
                {isSubmitting ? (
                    <span className="flex items-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting Details...
                    </span>
                ) : (
                    "Submit Payment Confirmation"
                )}
            </Button>
            
            <p className="text-xs text-center text-gray-400 mt-4">
                Your receipt is securely transmitted to our team.
            </p>
        </form>
    );
}
