import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Services } from "@/components/Services";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { About } from "@/components/About";
import { InsuranceExpertise } from "@/components/InsuranceExpertise";
import { ClientExperience } from "@/components/ClientExperience";
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
        {/* Hero */}
        <Hero />

        {/* Trust bar */}
        <StatsBar />

        {/* Services - slightly tighter */}
        <div className="[&>section]:!py-16 md:[&>section]:!py-20">
          <Services />
        </div>

        {/* Projects */}
        <div className="[&>section]:!py-16 md:[&>section]:!py-20">
          <FeaturedProjects />
        </div>

        {/* About - remove excessive white space */}
        <div className="[&>section]:!pt-16 [&>section]:!pb-14 md:[&>section]:!pt-20 md:[&>section]:!pb-16">
          <About />
        </div>

        {/* Insurance expertise - tighter dark section */}
        <div className="[&>section]:!py-16 md:[&>section]:!py-20">
          <InsuranceExpertise />
        </div>

        {/* Client experience - stronger but compact */}
        <div className="[&>section]:!py-16 md:[&>section]:!py-20 [&_h3]:text-lg [&_p]:leading-relaxed">
          <ClientExperience />
        </div>

        {/* Why Herla - reduce empty space before CTA */}
        <div className="[&>section]:!pt-16 [&>section]:!pb-14 md:[&>section]:!pt-20 md:[&>section]:!pb-16">
          <WhyChooseUs />
        </div>

        {/* CTA - compact */}
        <div className="[&>section]:!py-14 md:[&>section]:!py-16">
          <CallToAction />
        </div>

        {/* Contact - compact final section */}
        <div className="[&>section]:!py-16 md:[&>section]:!py-20">
          <Contact />
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
