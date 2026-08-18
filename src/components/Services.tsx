import { motion } from "framer-motion";
import {
  Hammer,
  Building2,
  Zap,
  Scissors,
  LayoutDashboard,
  PaintBucket,
  Wrench,
  ClipboardList,
  Truck,
  Warehouse,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Hammer,
    title: "Renovations",
    description:
      "Complete residential and commercial renovations, upgrades and property refurbishments.",
  },
  {
    icon: Building2,
    title: "New Builds",
    description:
      "Residential and commercial construction managed from site preparation through to final finishes.",
  },
  {
    icon: Zap,
    title: "Electrical",
    description:
      "Electrical installations, compliance inspections, fault finding and maintenance.",
  },
  {
    icon: Scissors,
    title: "Carpentry",
    description:
      "Built-in cupboards, cabinetry, structural timber work and custom woodwork.",
  },
  {
    icon: LayoutDashboard,
    title: "Interior Design",
    description:
      "Space planning, material selection and interior design integrated with construction.",
  },
  {
    icon: PaintBucket,
    title: "Painting & Waterproofing",
    description:
      "Interior and exterior painting, surface preparation and waterproofing.",
  },
];

const additionalServices = [
  { icon: Wrench, title: "Structural Repairs & Underpinning" },
  { icon: ClipboardList, title: "Project Management & QS" },
  { icon: Building2, title: "Shopfitting" },
  { icon: Truck, title: "Demolition" },
  { icon: Warehouse, title: "Warehousing" },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3 border-l-2 border-primary pl-3">
            Our Services
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase leading-tight mb-4">
            Built For Every
            <br />
            Stage Of The Project.
          </h2>

          <p className="text-muted-foreground text-base leading-relaxed">
            Construction, renovation and specialist services for residential,
            commercial and industrial projects across Gauteng.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="card-lift bg-background border border-border hover:border-primary transition-colors duration-300 group p-7"
              >
                <div className="w-12 h-12 bg-secondary text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-display font-bold uppercase tracking-wide mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-border pt-8"
        >
          <div className="text-xs font-bold uppercase tracking-widest text-primary mb-5">
            Additional Capabilities
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {additionalServices.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="flex items-center gap-2 border border-border bg-background px-4 py-3"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-wide">
                    {service.title}
                  </span>
                </div>
              );
            })}
          </div>

          <Button
            asChild
            className="rounded-none bg-primary text-primary-foreground uppercase tracking-widest font-bold px-7"
          >
            <a href="#contact">
              Request a Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
