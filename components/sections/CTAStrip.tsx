import { Button } from "@/components/ui/Button";

interface CTAStripProps {
  headline: string;
  subheadline?: string;
  buttonLabel: string;
  buttonHref?: string;
  trustNote?: string;
}

export function CTAStrip({
  headline,
  subheadline,
  buttonLabel,
  buttonHref = "/contact",
  trustNote = "Response within 24 hours · No obligation · Free consultation",
}: CTAStripProps) {
  return (
    <section className="relative bg-amber py-20 overflow-hidden" aria-labelledby="cta-heading">
      {/* Wave decoration at top */}
      <div className="absolute top-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="#EDF3FA" />
        </svg>
      </div>

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        <h2
          id="cta-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
        >
          {headline}
        </h2>

        {subheadline && (
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {subheadline}
          </p>
        )}

        <div className="mt-10">
          <Button
            variant="secondary"
            size="lg"
            href={buttonHref}
            className="bg-navy text-white hover:bg-navy-hover shadow-xl shadow-navy/30"
          >
            {buttonLabel}
          </Button>
        </div>

        {trustNote && (
          <p className="mt-6 text-sm text-white/70">
            {trustNote}
          </p>
        )}
      </div>
    </section>
  );
}
