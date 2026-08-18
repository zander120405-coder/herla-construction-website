import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Services } from "@/components/Services";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { About } from "@/components/About";
import { InsuranceExpertise } from "@/components/InsuranceExpertise";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CallToAction } from "@/components/CallToAction";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-primary-foreground">
      <NavBar />

      <main>
        <Hero />
        <StatsBar />
        <Services />
        <FeaturedProjects />
        <About />
        <InsuranceExpertise />
        <WhyChooseUs />
        <CallToAction />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
