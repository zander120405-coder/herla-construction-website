import { motion } from "framer-motion";
import { Clock, BadgeCheck, Globe, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "30+ Years of Experience",
    description: "Established in 1993, Herla Construction brings over three decades of practical knowledge across residential, commercial, and industrial construction.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Workmanship",
    description: "We use the right materials and follow proven methods. Every job is completed to a standard we are proud to put our name to — no shortcuts, no compromises.",
  },
  {
    icon: Globe,
    title: "Broad Capability",
    description: "From minor repairs and painting to full construction contracts, shopfitting, and project management — we handle it all, including projects in neighbouring African countries.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Professionalism",
    description: "We operate with a commitment to safety on every site and maintain professional conduct throughout every project — from first contact to final handover.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3 border-l-2 border-primary pl-3">
              The Herla Difference
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase leading-[1.05]">
              Why Clients Choose<br />Herla.
            </h2>
          </motion.div>
        </div>

        {/* Reason cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-start"
              >
                <div className="w-14 h-14 bg-card border border-border text-primary flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="w-8 h-[2px] bg-primary mb-4" />
                <h3 className="text-xl font-display font-bold uppercase tracking-wide mb-3">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust points bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-0 border border-border"
        >
          {[
            { value: "Est. 1993", label: "Over 30 Years in Business" },
            { value: "Gauteng", label: "Based & Operating Locally" },
            { value: "All Scales", label: "Small Jobs to Large Contracts" },
            { value: "Mon–Sat", label: "Available for Site Visits" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`p-8 text-center ${i < 3 ? "border-r border-border" : ""}`}
            >
              <div className="text-2xl md:text-3xl font-display font-bold text-primary mb-2 leading-tight">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
