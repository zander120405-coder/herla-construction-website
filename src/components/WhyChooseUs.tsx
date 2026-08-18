import { motion } from "framer-motion";
import { Clock, BadgeCheck, Wrench, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Experienced",
    description:
      "Over 30 years of practical construction experience.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Driven",
    description:
      "Professional workmanship and attention to detail.",
  },
  {
    icon: Wrench,
    title: "Versatile",
    description:
      "Multiple construction disciplines managed under one team.",
  },
  {
    icon: ShieldCheck,
    title: "Professional",
    description:
      "Reliable communication and professional project delivery.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3 border-l-2 border-primary pl-3">
            The Herla Difference
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase leading-[1.05]">
            Why Choose
            <br />
            Herla.
          </h2>
        </motion.div>

        {/* Reasons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border-t-2 border-primary pt-6"
              >
                <div className="w-12 h-12 bg-card border border-border text-primary flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-display font-bold uppercase tracking-wide mb-2">
                  {reason.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
