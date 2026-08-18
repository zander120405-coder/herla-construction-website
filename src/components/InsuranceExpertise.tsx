import { motion } from "framer-motion";
import {
  ShieldCheck,
  Flame,
  ClipboardCheck,
  Building2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const expertise = [
  {
    icon: ShieldCheck,
    title: "Loss Adjusting",
    description:
      "Professional loss adjusting expertise supporting the assessment and management of property-related insurance claims.",
  },
  {
    icon: Flame,
    title: "Fire Damage Reinstatement",
    description:
      "Experience in the assessment, repair and reinstatement of fire-damaged residential, commercial and industrial properties.",
  },
  {
    icon: ClipboardCheck,
    title: "Insurance Claim Support",
    description:
      "Practical construction knowledge combined with loss adjusting experience to support accurate assessment, costing and reinstatement.",
  },
];

export function InsuranceExpertise() {
  return (
    <section className="py-20 md:py-24 bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#CC9633] mb-3 border-l-2 border-[#CC9633] pl-3">
              Specialist Expertise
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase leading-[1.05] mb-6">
              Construction Meets
              <br />
              Insurance Expertise.
            </h2>

            <p className="text-white/65 text-base md:text-lg leading-relaxed mb-5 max-w-xl">
              Herla brings together practical construction experience and
              professional loss adjusting expertise, providing a valuable
              understanding of both property damage and the reinstatement
              process.
            </p>

            <p className="text-white/55 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Harry van der Westhuizen is a professional loss adjuster
              registered with the Institute of Loss Adjusters of Southern
              Africa (ILASA), with experience in fire-damaged residential,
              commercial and industrial properties.
            </p>

            <Button
              asChild
              className="rounded-none h-12 px-8 font-bold uppercase tracking-widest bg-[#CC9633] hover:bg-[#CC9633]/90 text-[#1A1A1A] group"
            >
              <a href="#contact">
                Discuss Your Requirements
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + index * 0.08,
                  }}
                  className="border border-white/10 p-6 md:p-7 flex gap-5 hover:border-[#CC9633]/60 transition-colors"
                >
                  <div className="w-12 h-12 bg-[#CC9633]/10 text-[#CC9633] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-display font-bold uppercase tracking-wide mb-2">
                      {item.title}
                    </h3>

                    <p className="text-white/55 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            <div className="border border-[#CC9633]/30 bg-[#CC9633]/5 p-6 flex items-center gap-4">
              <Building2 className="w-6 h-6 text-[#CC9633] flex-shrink-0" />

              <p className="text-sm text-white/70 leading-relaxed">
                Experience across residential, commercial and industrial
                property claims and reinstatement.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
