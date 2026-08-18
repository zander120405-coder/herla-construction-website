import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    title: "30+ Years",
    desc: "Construction experience since 1993.",
  },
  {
    title: "Quality",
    desc: "Professional workmanship from start to finish.",
  },
  {
    title: "Reliable",
    desc: "Clear communication and dependable project delivery.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-24 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative">
              <img
                src="/project-3.png"
                alt="Herla Construction project"
                className="w-full h-full object-cover brightness-90"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-border pointer-events-none" />
            </div>

            <div className="absolute -bottom-5 right-0 md:-right-6 bg-[#CC9633] p-6">
              <div className="text-4xl font-display font-bold text-[#1A1A1A] leading-none">
                1993
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/70 mt-2">
                Established
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3 border-l-2 border-primary pl-3">
              About Herla
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase leading-[1.05] mb-6">
              Built on
              <br />
              Experience.
            </h2>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Herla Construction has delivered residential, commercial and
              industrial construction solutions across Gauteng since 1993,
              combining hands-on experience with reliable project delivery and
              quality workmanship.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8 border-t border-border pt-7">
              {values.map((value) => (
                <div key={value.title}>
                  <div className="w-6 h-[2px] bg-primary mb-3" />
                  <h3 className="font-display font-bold uppercase tracking-wide mb-1">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="rounded-none h-12 px-8 font-bold uppercase tracking-widest bg-primary hover:bg-primary/90 text-foreground group"
            >
              <a href="#contact">
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
