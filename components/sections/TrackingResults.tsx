import { Button } from "@/components/ui/Button";

interface TrackingResultsProps {
    code: string | null;
}

// ── Types ──────────────────────────────────────────────────
type StepStatus = "done" | "active" | "pending";

interface Step {
    status: StepStatus;
    label: string;
    date: string;
    location: string;
    icon: React.ReactNode;
}

// ── Mini icon helpers ──────────────────────────────────────
const CheckIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
);

const PlaneIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
);

const BuildingIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
);

const ClockIcon = () => (
    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const PinIcon = () => (
    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

// ── Timeline Step ──────────────────────────────────────────
function TimelineStep({ step, isLast }: { step: Step; isLast?: boolean }) {
    const dotClass = {
        done: "bg-navy text-white shadow-md shadow-navy/30",
        active: "bg-white border-[3px] border-amber text-amber shadow-lg shadow-amber/25",
        pending: "bg-white border-2 border-gray-200 text-gray-300",
    }[step.status];

    const labelClass = {
        done: "text-navy",
        active: "text-amber font-bold",
        pending: "text-gray-400",
    }[step.status];

    const lineClass = step.status === "done" ? "bg-navy/20" : "bg-gray-200";

    return (
        <div className="flex gap-4 sm:gap-5">
            {/* Dot + line */}
            <div className="flex flex-col items-center shrink-0 pt-0.5">
                <div className={`relative w-9 h-9 rounded-full flex items-center justify-center transition-all ${dotClass}`}>
                    {step.status === "active" && (
                        <span className="absolute inset-0 rounded-full animate-ping bg-amber/20" />
                    )}
                    {step.icon}
                </div>
                {!isLast && (
                    <div className={`w-0.5 flex-1 mt-1 min-h-[36px] rounded-full ${lineClass}`} />
                )}
            </div>

            {/* Content */}
            <div className={`pb-9 min-w-0 flex-1 ${step.status === "pending" ? "opacity-40" : ""}`}>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h4 className={`text-base leading-tight ${labelClass}`}>{step.label}</h4>
                    {step.status === "active" && (
                        <span className="bg-amber/15 text-amber text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border border-amber/30">
                            Current
                        </span>
                    )}
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                        <ClockIcon /> {step.date}
                    </span>
                    <span className="flex items-center gap-1">
                        <PinIcon /> {step.location}
                    </span>
                </div>
            </div>
        </div>
    );
}

// ── Progress Bar ───────────────────────────────────────────
function ProgressBar({ steps, currentIndex }: { steps: Step[]; currentIndex: number }) {
    const percent = Math.round((currentIndex / (steps.length - 1)) * 100);
    return (
        <div className="px-6 sm:px-8 py-5 border-b border-gray-100 bg-gray-50/70">
            <div className="flex items-center justify-between text-xs font-semibold text-gray-400 mb-2">
                <span>Shipment Created</span>
                <span className="text-amber">{percent}% Complete</span>
                <span>Delivered</span>
            </div>
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-navy to-amber rounded-full transition-all duration-700"
                    style={{ width: `${percent}%` }}
                />
            </div>
            <div className="flex justify-between mt-2">
                {steps.map((s, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all ${
                            i < currentIndex
                                ? "bg-navy"
                                : i === currentIndex
                                ? "bg-amber ring-2 ring-amber/30"
                                : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

// ── Main Component ─────────────────────────────────────────
export function TrackingResults({ code }: TrackingResultsProps) {
    const isMockCode = code === "KEMFAH-DEMO-123";

    if (!code) return null;

    // ── Maintenance / Not Found ──
    if (!isMockCode) {
        return (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden max-w-2xl mx-auto">
                {/* Top accent */}
                <div className="h-1.5 w-full bg-gradient-to-r from-amber via-amber-light to-amber" />
                <div className="p-8 sm:p-12 text-center">
                    <div className="relative w-20 h-20 mx-auto mb-6">
                        <div className="absolute inset-0 bg-amber/10 rounded-2xl rotate-6" />
                        <div className="relative w-20 h-20 bg-amber/5 rounded-2xl flex items-center justify-center border border-amber/20">
                            <svg className="w-9 h-9 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                        </div>
                    </div>

                    <div className="inline-block bg-gray-100 rounded-lg px-3 py-1.5 mb-4">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Tracking Number</span>
                        <p className="text-navy font-bold text-sm mt-0.5 font-mono break-all">{code}</p>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3">Tracking Update in Progress</h3>
                    <p className="text-charcoal/70 mb-8 leading-relaxed text-sm sm:text-base max-w-md mx-auto">
                        Real-time visibility for this waybill is temporarily unavailable as we integrate our tracking systems. Your cargo is secure and moving.
                    </p>

                    <div className="bg-[#EDF3FA] rounded-xl p-5 mb-8 text-left border border-sky max-w-sm mx-auto">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-navy mb-0.5">Need an instant update?</p>
                                <p className="text-xs text-charcoal/70 leading-relaxed">Contact our team with your tracking number and we&apos;ll locate your shipment within minutes.</p>
                            </div>
                        </div>
                    </div>

                    <Button variant="primary" href="/contact" size="md">
                        Contact Support Team
                    </Button>
                </div>
            </div>
        );
    }

    // ── Mock Demo Timeline ──
    const steps: Step[] = [
        {
            status: "done",
            label: "Shipment Created",
            date: "Apr 22, 2026 · 08:30 AM",
            location: "Lagos Hub, Ikeja",
            icon: <CheckIcon />,
        },
        {
            status: "done",
            label: "In Transit",
            date: "Apr 22, 2026 · 02:15 PM",
            location: "Murtala Muhammed Int. Airport",
            icon: <PlaneIcon />,
        },
        {
            status: "done",
            label: "Arrived at Regional Hub",
            date: "Apr 23, 2026 · 09:45 AM",
            location: "London Heathrow Facility",
            icon: <BuildingIcon />,
        },
        {
            status: "active",
            label: "Out for Delivery",
            date: "Apr 23, 2026 · 10:30 AM",
            location: "London CBD",
            icon: <ArrowRightIcon />,
        },
        {
            status: "pending",
            label: "Delivered",
            date: "Estimated: Apr 23, 2026",
            location: "Destination Address",
            icon: <CheckIcon />,
        },
    ];

    const activeIndex = steps.findIndex((s) => s.status === "active");
    const progressIndex = activeIndex === -1 ? steps.length - 1 : activeIndex;

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-3xl mx-auto">
            {/* Amber top accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-navy via-amber to-amber-light" />

            {/* Status badge strip */}
            <div className="bg-navy/[0.03] px-6 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-gray-100">
                <div className="flex items-center gap-3 min-w-0">
                    <div>
                        <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-0.5">Tracking Number</p>
                        <h2 className="text-base sm:text-xl font-bold text-navy font-mono tracking-wide break-all">{code}</h2>
                    </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                    <span className="flex items-center gap-1.5 bg-amber/10 text-amber border border-amber/25 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                        <span className="w-1.5 h-1.5 bg-amber rounded-full animate-pulse" />
                        Out for Delivery
                    </span>
                </div>
            </div>

            {/* Shipment metadata */}
            <div className="px-6 sm:px-8 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-b border-gray-100">
                {[
                    { label: "Service", value: "Air Cargo" },
                    { label: "Weight", value: "45.5 kg" },
                    { label: "Origin", value: "Lagos, NG" },
                    { label: "Destination", value: "London, UK" },
                ].map(({ label, value }) => (
                    <div key={label}>
                        <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-0.5">{label}</p>
                        <p className="text-sm font-semibold text-charcoal">{value}</p>
                    </div>
                ))}
            </div>

            {/* Progress bar */}
            <ProgressBar steps={steps} currentIndex={progressIndex} />

            {/* Timeline */}
            <div className="px-6 sm:px-8 pt-8 pb-4">
                {steps.map((step, i) => (
                    <TimelineStep key={i} step={step} isLast={i === steps.length - 1} />
                ))}
            </div>

            {/* Footer actions */}
            <div className="px-6 sm:px-8 py-5 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-gray-400">Last updated: Apr 23, 2026 at 10:30 AM · Lagos time</p>
                <div className="flex gap-3">
                    <Button variant="ghost" href="/contact" size="sm">
                        Contact Support
                    </Button>
                    <Button variant="primary" href="/contact" size="sm">
                        Get a Quote
                    </Button>
                </div>
            </div>
        </div>
    );
}
