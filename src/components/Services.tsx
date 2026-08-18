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
  Sun,
  Home,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building2,
    title: "Commercial & Industrial Construction",
    description:
      "Commercial and industrial construction projects up to R10 million, managed from scope and costing through to completion.",
  },
  {
    icon: Hammer,
    title: "Residential Development & Renovations",
    description:
      "Residential construction, alterations, renovations, property development and refurbishment.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description:
      "Coordination of contractors, programme, quality, costing and project delivery from start to finish.",
  },
  {
    icon: Zap,
    title: "Electrical & Compliance",
    description:
      "Electrical installations, maintenance and compliance certification for existing installations.",
  },
  {
    icon: Sun,
    title: "Solar Installations",
    description:
      "Solar installation services integrated with residential, commercial and industrial projects.",
  },
  {
    icon: Home,
    title: "Roofing",
    description:
      "Specialist roofing services for new construction, repairs, maintenance and refurbishment work.",
  },
];

const additionalServices = [
  { icon: FileText, title: "Bills of Quantities" },
  { icon: Scissors, title: "Kitchens & Built-In Cupboards" },
  { icon: Building2, title: "Shopfitting" },
  { icon: PaintBucket, title: "Painting & Refurbishment" },
  { icon: Wrench, title: "Maintenance & Repairs" },
  { icon: Truck, title: "Demolition" },
  { icon: Warehouse, title: "Warehousing" },
  { icon: LayoutDashboard, title: "Interior Planning & Finishes" },
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
            Based in Pretoria and serving Gauteng, Herla delivers residential,
            commercial and industrial construction together with specialist
            project and building services.
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
