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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <TrustStrip />
        <ServicesGrid />
        <HowItWorks />
        <WhyChooseUs />
        <CTAStrip />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
