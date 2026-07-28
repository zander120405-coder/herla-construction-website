import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { WhyChooseUsStrip } from "@/components/WhyChooseUsStrip";
import { StatsBar } from "@/components/StatsBar";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { VisionMission } from "@/components/VisionMission";
import { Projects } from "@/components/Projects";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { WorkStrip } from "@/components/WorkStrip";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
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
        <WhyChooseUsStrip />
        <StatsBar />
        <Services />
        <About />
        <VisionMission />
        <Projects />
        <FeaturedProjects />
        <WorkStrip />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
