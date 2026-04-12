import { AboutSection } from "@/components/about-section";
import { DemoFormSection } from "@/components/demo-form-section";
import { FaqSection } from "@/components/faq-section";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { InstallationProcessSection } from "@/components/installation-process-section";
import { Navbar } from "@/components/navbar";
import { ProductSection } from "@/components/product-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { TrustSection } from "@/components/trust-section";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <main className="relative pb-16">
      <div className="absolute inset-0 -z-10 bg-hero-radial" />
      <Navbar />
      <HeroSection />
      <TrustSection />
      <ProductSection />
      <FeaturesSection />
      <InstallationProcessSection />
      <FaqSection />
      <TestimonialSection />
      <DemoFormSection />
      <AboutSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
