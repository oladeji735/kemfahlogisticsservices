import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { homepageData } from "@/lib/data/homepage";
import { servicesData } from "@/lib/data/services";

const capabilityStats = [
  { label: "Nationwide Coverage", value: "36" },
  { label: "International Routing", value: "12+" },
  { label: "Fleet Ready", value: "15" },
  { label: "On-Time Delivery", value: "100%" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          headline={homepageData.hero.headline}
          subheadline={homepageData.hero.subheadline}
          ctaPrimary={homepageData.hero.ctaPrimary}
          ctaSecondary={homepageData.hero.ctaSecondary}
          imageSrc={homepageData.hero.imageSrc}
        />
        <StatsBar stats={capabilityStats} />
        <TrustStrip items={homepageData.trustStrip.items} />
        <ServicesGrid services={homepageData.services} />
        <HowItWorks steps={servicesData.howItWorks} />
        <WhyChooseUs items={homepageData.whyChooseUs} />
        <CTAStrip
          headline={homepageData.ctaStrip.headline}
          subheadline={homepageData.ctaStrip.subheadline}
          buttonLabel={homepageData.ctaStrip.buttonLabel}
        />
        <Testimonials testimonials={homepageData.testimonials} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
