import { motion } from "framer-motion";
import {
  Clock,
  ClipboardCheck,
  ShieldCheck,
  Building2,
} from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "30+ Years",
    description:
      "Established in 1993 with more than three decades of construction experience.",
  },
  {
    icon: ClipboardCheck,
    title: "Full Project Delivery",
    description:
      "Capability from quantities and costing through construction, coordination and completion.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Expertise",
    description:
      "Specialist knowledge in insurance reinstatement and fire-damaged property rebuilding.",
  },
  {
    icon: Building2,
    title: "Proven Client Experience",
    description:
      "Experience serving institutional, diplomatic, insurance and industrial clients.",
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

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase leading-[1.05] mb-4">
            Why Choose
            <br />
            Herla.
          </h2>

          <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
            Practical experience, accountable project delivery and specialist
            construction knowledge built over more than three decades.
          </p>
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
