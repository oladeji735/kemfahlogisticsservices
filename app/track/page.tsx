"use client";

import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { TrackingResults } from "@/components/sections/TrackingResults";

// ── Inner component that reads useSearchParams ─────────────────────────────
// Must be isolated inside <Suspense> so Next.js can pre-render a fallback
// shell at build time without crashing on the missing search params context.
function TrackPageContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const urlCode = searchParams.get("code");
    // Initialise directly from the URL — no effect needed, avoids cascading renders
    const [inputValue, setInputValue] = useState(urlCode ?? "");
    // Derived directly from URL — re-renders automatically when URL changes
    const activeTrackingCode: string | null = urlCode;

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmed = inputValue.trim();
        if (trimmed) {
            router.push(`/track?code=${encodeURIComponent(trimmed)}`);
        }
    };

    return (
        <main className="min-h-screen bg-[#F0F4F9]">

            {/* ── Hero Header ── */}
            <section className="relative bg-navy overflow-hidden pt-28 pb-24">
                {/* Layered gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D2545] via-navy to-[#1a3d72]" />

                {/* Ambient glow blobs */}
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-amber/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-navy/60 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

                {/* Dot grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
                        backgroundSize: "32px 32px",
                    }}
                />

                <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-6">
                        <span className="w-2 h-2 bg-amber rounded-full animate-pulse" />
                        <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">
                            Live Shipment Tracking
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
                        Where Is Your{" "}
                        <span className="text-amber">Cargo?</span>
                    </h1>
                    <p className="text-white/60 text-base sm:text-lg mb-10 max-w-md mx-auto leading-relaxed">
                        Enter your Kemfah tracking number below for real‑time status updates.
                    </p>

                    {/* Search box */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 shadow-xl">
                        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
                            <div className="relative flex-1 min-w-0">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Enter your tracking number"
                                    className="block w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-transparent focus:bg-white/20 focus:border-amber/40 focus:ring-2 focus:ring-amber/20 outline-none transition-all text-white placeholder:text-white/35 text-base"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-amber hover:bg-amber-hover text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-amber/30 hover:shadow-amber/50 hover:-translate-y-0.5 whitespace-nowrap text-base active:translate-y-0"
                            >
                                Track Now
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* ── Results ── */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                {activeTrackingCode ? (
                    <TrackingResults code={activeTrackingCode} />
                ) : (
                    /* Empty state */
                    <div className="text-center py-16">
                        <div className="w-20 h-20 bg-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                            <svg className="w-9 h-9 text-navy/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-navy mb-2">No tracking number entered</h3>
                        <p className="text-charcoal/60 text-sm max-w-sm mx-auto">
                            Enter your Kemfah waybill number in the search bar above to track your shipment.
                        </p>
                    </div>
                )}
            </section>

        </main>
    );
}

// ── Fallback shown while the content is loading client-side ───────────────
function TrackPageSkeleton() {
    return (
        <main className="min-h-screen bg-[#F0F4F9]">
            <section className="relative bg-navy overflow-hidden pt-28 pb-24">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D2545] via-navy to-[#1a3d72]" />
                <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
                    <div className="h-8 w-48 bg-white/10 rounded-full mx-auto mb-6 animate-pulse" />
                    <div className="h-12 w-80 bg-white/10 rounded-xl mx-auto mb-4 animate-pulse" />
                    <div className="h-6 w-64 bg-white/10 rounded-lg mx-auto mb-10 animate-pulse" />
                    <div className="bg-white/10 rounded-2xl p-3 h-16 animate-pulse" />
                </div>
            </section>
        </main>
    );
}

// ── Page export: wraps content in Suspense so Next.js can pre-render ───────
export default function TrackPage() {
    return (
        <>
            <Navbar />
            <Suspense fallback={<TrackPageSkeleton />}>
                <TrackPageContent />
            </Suspense>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
