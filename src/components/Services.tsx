import { motion } from "framer-motion";
import {
  Hammer, Zap, Scissors, LayoutDashboard, Building2,
  PaintBucket, Wrench, ClipboardList, Truck, Warehouse, ArrowRight, CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const coreServices = [
  {
    title: "Renovations",
    tagline: "Residential & commercial upgrades — Gauteng",
    description: "We handle complete renovation projects from planning to handover — kitchens, bathrooms, living areas, office spaces, and full property refurbishments. We modernise, restore, and improve properties of all sizes with a clean, well-managed approach.",
    icon: Hammer,
    benefits: [
      "Full interior & exterior renovations",
      "Residential & commercial properties",
      "Modernisation & property upgrades",
      "Ongoing maintenance programmes",
    ],
  },
  {
    title: "New Builds",
    tagline: "Construction from the ground up — Gauteng",
    description: "From site preparation and foundations through to final finishes, we manage new construction projects end-to-end. We offer turnkey solutions for residential homes and commercial builds, maintaining quality control at every stage.",
    icon: Building2,
    benefits: [
      "Residential new builds",
      "Commercial construction",
      "Turnkey project delivery",
      "Full quality control throughout",
    ],
  },
  {
    title: "Electrical",
    tagline: "Certified electrical installation & maintenance",
    description: "Our registered electricians (Registration No. 25729) carry out electrical installations, compliance inspections, and maintenance work across residential, commercial, and industrial properties. All work is carried out to South African standards and regulations.",
    icon: Zap,
    benefits: [
      "New electrical installations",
      "COC compliance certificates",
      "Residential & commercial work",
      "Fault finding & maintenance",
    ],
  },
  {
    title: "Carpentry",
    tagline: "Custom woodwork & finishing — Gauteng",
    description: "From structural timber work to bespoke cabinetry and custom finishing, our carpenters deliver quality at every level. Whether it is built-in cupboards, wooden flooring, or structural elements — we build it properly.",
    icon: Scissors,
    benefits: [
      "Built-in cupboards & cabinetry",
      "Structural timber work",
      "Custom woodwork & finishing",
      "Door & window installation",
    ],
  },
  {
    title: "Interior Design",
    tagline: "Functional & aesthetic space planning",
    description: "We offer interior design services that complement our construction and renovation work — creating spaces that are functional, well-finished, and visually considered. From concept through to final installation, we help bring your vision to life.",
    icon: LayoutDashboard,
    benefits: [
      "Space planning & layout design",
      "Material & finish selection",
      "Residential & commercial interiors",
      "Integrated with construction work",
    ],
  },
];

const additionalServices = [
  { icon: PaintBucket, title: "Painting & Waterproofing", desc: "Interior and exterior painting, surface preparation, and waterproofing for roofs, walls, and wet areas." },
  { icon: Wrench, title: "Structural Repairs & Underpinning", desc: "Diagnosis and repair of structural issues including foundation work, wall crack repairs, and underpinning." },
  { icon: ClipboardList, title: "Project Management & QS", desc: "Professional project oversight and quantity surveying to keep your project on time and within budget." },
  { icon: Building2, title: "Shopfitting", desc: "Full fit-out services for retail, commercial, and hospitality spaces — designed and built to specification." },
  { icon: Truck, title: "Demolition", desc: "Safe and controlled demolition of structures, internal walls, and elements as part of renovation or new construction." },
  { icon: Warehouse, title: "Warehousing", desc: "Warehousing construction and fit-out for commercial and industrial clients requiring purpose-built storage facilities." },
];

export function Services() {
  return (
    <section id="services" className="py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3 border-l-2 border-primary pl-3">
              Core Services
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase leading-tight">
              What We Do<br />Best.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-muted-foreground max-w-sm text-base"
          >
            Five core disciplines. Delivered to a high standard — for residential, commercial, and industrial clients across Gauteng.
          </motion.p>
        </div>

        {/* Core services — top row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {coreServices.slice(0, 3).map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-lift bg-background border border-border hover:border-primary transition-colors duration-300 group p-8 flex flex-col"
              >
                <div className="w-14 h-14 bg-secondary text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="w-8 h-[2px] bg-primary mb-4" />
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{service.tagline}</div>
                <h3 className="text-2xl font-display font-bold uppercase tracking-wide mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/80">{b}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-none border-border hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-widest font-bold text-sm group/btn self-start"
                >
                  <a href="#contact">
                    Get a Quote
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Core services — bottom row: 2 wider cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {coreServices.slice(3).map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-lift bg-background border border-border hover:border-primary transition-colors duration-300 group p-8 flex flex-col"
              >
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-14 h-14 bg-secondary text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{service.tagline}</div>
                    <h3 className="text-2xl font-display font-bold uppercase tracking-wide">{service.title}</h3>
                  </div>
                </div>
                <div className="w-8 h-[2px] bg-primary mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
                <ul className="space-y-2 mb-8 grid grid-cols-2 gap-x-4">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/80">{b}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-none border-border hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-widest font-bold text-sm group/btn self-start"
                >
                  <a href="#contact">
                    Get a Quote
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Additional services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Additional Capabilities</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="card-lift flex items-start gap-4 p-6 bg-background border border-border hover:border-primary transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-secondary text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold uppercase tracking-wide text-sm mb-1">{service.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{service.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
