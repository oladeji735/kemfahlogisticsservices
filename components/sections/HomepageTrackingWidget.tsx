"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function HomepageTrackingWidget() {
    const [trackingCode, setTrackingCode] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (trackingCode.trim()) {
            router.push(`/track?code=${encodeURIComponent(trackingCode.trim())}`);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto mt-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-amber rounded-full animate-pulse" />
                    <p className="text-white/80 text-sm font-medium uppercase tracking-wider">Shipment Tracking</p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1 min-w-0">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            value={trackingCode}
                            onChange={(e) => setTrackingCode(e.target.value)}
                            placeholder="Enter your tracking number"
                            className="block w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/15 border border-white/20 focus:bg-white/25 focus:border-amber/60 focus:ring-2 focus:ring-amber/20 outline-none transition-all text-white placeholder:text-white/40 text-base"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-amber hover:bg-amber-hover text-white font-semibold py-3.5 px-7 rounded-xl transition-colors shadow-lg shadow-amber/25 whitespace-nowrap text-base"
                    >
                        Track Now
                    </button>
                </form>
            </div>
        </div>
    );
}
