import { motion } from "framer-motion";
import { Clock, BadgeCheck, Banknote, MapPin } from "lucide-react";

const points = [
  {
    icon: Clock,
    title: "Reliable & On-Time",
    description: "We show up when we say we will. No waiting, no excuses — just a team that respects your time.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Workmanship",
    description: "Every job is done properly, with the right materials. We don't cut corners — ever.",
  },
  {
    icon: Banknote,
    title: "Transparent Pricing",
    description: "You get a clear quote upfront. What we quote is what you pay — no hidden costs, no surprises.",
  },
  {
    icon: MapPin,
    title: "Local Gauteng Experts",
    description: "We know Gauteng well. Local team, local pride, local accountability — wherever you are in the province.",
  },
];

export function WhyChooseUsStrip() {
  return (
    <section className="py-20 bg-secondary border-b border-border">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3 border-l-2 border-primary pl-3">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold uppercase leading-tight">
            The Herla Difference
          </h2>
        </motion.div>

        {/* 4-point grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card-lift p-8 flex flex-col items-start bg-background hover:bg-card transition-colors duration-300 group
                  ${index < points.length - 1 ? "border-b lg:border-b-0 lg:border-r border-border" : ""}
                  ${index === 1 ? "sm:border-r-0 lg:border-r border-border" : ""}
                `}
              >
                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="w-6 h-[2px] bg-primary mb-4" />
                <h3 className="text-base font-display font-bold uppercase tracking-wide mb-2 text-foreground">
                  {point.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
