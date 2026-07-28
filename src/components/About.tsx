import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  { title: "Experience", desc: "Established in 1993 — over 30 years of hands-on construction knowledge across residential, commercial, and industrial sectors." },
  { title: "Quality", desc: "We use the right materials and do the job properly. Every project, large or small, receives the same standard of workmanship." },
  { title: "Reliability", desc: "We communicate clearly, deliver on time, and stand behind our work. Our reputation has been built on consistent, dependable service." },
];

export function About() {
  return (
    <section id="about" className="py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative">
              <img
                src="/project-3.png"
                alt="Herla Construction at work"
                className="w-full h-full object-cover brightness-90 hover:brightness-100 transition-all duration-700"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-border pointer-events-none" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-0 md:-right-8 bg-[#CC9633] p-7">
              <div className="text-4xl font-display font-bold text-[#1A1A1A] leading-none">Est.</div>
              <div className="text-3xl font-display font-bold text-[#1A1A1A] leading-none">1993</div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/70 mt-1">Gauteng</div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pl-4"
          >
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3 border-l-2 border-primary pl-3">
              Who We Are
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase leading-[1.05] mb-6">
              Over 30 Years<br />of Construction<br />Experience.
            </h2>

            <div className="space-y-5 text-muted-foreground text-base leading-relaxed mb-8">
              <p>
                Herla Construction is a privately owned construction company based in Gauteng, South Africa. Established in 1993, we have built a strong reputation for delivering quality workmanship across residential, commercial, and industrial projects.
              </p>
              <p>
                Our experience spans a broad range of construction disciplines — from house painting and carport installation to full-scale renovations, structural repairs, shopfitting, and project management. We have completed projects locally across Gauteng as well as in neighbouring African countries.
              </p>
              <p>
                Whether you need a small repair or a large construction contract, Herla brings the same level of care, skill, and professionalism to every job. Our team is adaptable, experienced, and committed to delivering results that meet — and exceed — client expectations.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4 mb-10 border-t border-border pt-8">
              {values.map((v, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-bold uppercase tracking-wide text-foreground">{v.title} — </span>
                    <span className="text-muted-foreground text-sm">{v.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="rounded-none h-12 px-8 font-bold uppercase tracking-widest bg-primary hover:bg-primary/90 text-foreground group"
            >
              <a href="#contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
