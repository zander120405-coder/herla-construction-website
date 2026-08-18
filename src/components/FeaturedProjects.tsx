import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const GOLD = "#CC9633";

const projects = [
  {
    label: "New Build",
    title: "Residential Home Build",
    description:
      "A complete residential home build delivered with attention to structural quality, workmanship and long-term durability.",
    badge: "Built by Herla",
    image: "/featured-build.jpg",
  },
  {
    label: "Renovation",
    title: "Home Renovation Project",
    description:
      "A residential renovation focused on improving the finish, functionality and overall value of the property.",
    badge: "Renovated by Herla",
    image: "/featured-renovation.jpg",
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px]" style={{ background: GOLD }} />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Featured Work
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase leading-[1.02] mb-4 text-foreground">
            Our Work.<br />
            Built to Last.
          </h2>

          <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
            A look at residential construction and renovation work completed by Herla across Gauteng.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="group border border-border bg-white overflow-hidden"
            >
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "16/9" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <div
                  className="absolute top-5 left-5 px-3 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-[#1A1A1A]"
                  style={{ background: GOLD }}
                >
                  {project.label}
                </div>
              </div>

              {/* Content */}
              <div className="p-7 md:p-8">
                <div
                  className="w-10 h-[3px] mb-5"
                  style={{ background: GOLD }}
                />

                <h3 className="text-2xl md:text-3xl font-display font-extrabold uppercase tracking-wide mb-3 text-foreground">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex items-center justify-between gap-4 pt-5 border-t border-border">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                      {project.badge}
                    </span>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="rounded-none uppercase tracking-widest font-bold text-xs group/btn"
                  >
                    <a href="#contact">
                      Get a Quote
                      <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
