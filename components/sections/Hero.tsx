import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaPrimaryHref?: string;
  ctaSecondary: string;
  ctaSecondaryHref?: string;
  imageSrc: string;
}

export function Hero({
  headline,
  subheadline,
  ctaPrimary,
  ctaPrimaryHref = "/contact",
  ctaSecondary,
  ctaSecondaryHref = "/services",
  imageSrc,
}: HeroProps) {
  return (
    <section
      className="relative min-h-[70vh] flex items-center bg-navy pt-16 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background with image and overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={imageSrc}
          alt="Cargo trucks and shipping containers for logistics"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/75 to-midnight/70" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - CAC Licensed, IATA-Aligned */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/10">
            <span className="w-2 h-2 bg-amber rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-white/90 text-sm font-medium tracking-wide uppercase">CAC Licensed · IATA-Aligned</span>
          </div>

          {/* Main Headline */}
          <h1
            id="hero-heading"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
          >
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="mt-8 text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto font-light">
            {subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              href={ctaPrimaryHref}
              className="shadow-xl shadow-amber/30 hover:shadow-amber/40 transition-shadow lg:px-7 lg:py-3 lg:text-base"
            >
              {ctaPrimary}
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={ctaSecondaryHref}
              className="border-2 border-white/30 text-white hover:bg-white hover:text-navy hover:border-white transition-all lg:px-7 lg:py-3 lg:text-base"
            >
              {ctaSecondary}
            </Button>
          </div>

          {/* Trust indicators - 3 columns */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-white/60">
              <div className="w-10 h-10 rounded-full bg-amber/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-amber" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium">Nationwide Coverage</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/60">
              <div className="w-10 h-10 rounded-full bg-amber/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-amber" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium">International Routing</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/60">
              <div className="w-10 h-10 rounded-full bg-amber/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-amber" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium">On-Time Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration — hidden on mobile */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#EDF3FA" />
        </svg>
      </div>
    </section>
  );
}
