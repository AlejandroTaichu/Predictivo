import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Integrations } from "@/components/landing/Integrations";
import { Process } from "@/components/landing/Process";
import { TechSpecs } from "@/components/landing/TechSpecs";
import { Pricing } from "@/components/landing/Pricing";
import { Industries } from "@/components/landing/Industries";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { FAQ } from "@/components/landing/FAQ";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Integrations />
        <Process />
        <TechSpecs />
        <Industries />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
