import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const GOLD = "#CC9633";

const projects = [
  {
    label: "New Build",
    title: "Residential Home Build",
    description:
      "A complete residential home build completed with attention to structure, finish quality, and long-term durability.",
    badge: "Built by Herla",
    image: "/featured-build.jpg",
  },
  {
    label: "Renovation",
    title: "Home Renovation Project",
    description:
      "A full home renovation focused on improving the appearance, finish, and overall value of the property.",
    badge: "Renovated by Herla",
    image: "/featured-renovation.jpg",
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-4"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px]" style={{ background: GOLD }} />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Featured Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase leading-[1.02] mb-5 text-foreground">
            Featured Property<br />Projects
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed">
            Real homes completed and improved by Herla, from full builds to carefully finished renovations.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="origin-left h-[1px] bg-border mb-12"
        />

        {/* Intro line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm text-muted-foreground/70 italic mb-14 max-w-2xl"
        >
          From ground-up builds to refined renovations, Herla delivers work that speaks for itself.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-white border border-border overflow-hidden flex flex-col"
              style={{
                transition: "transform 0.28s ease, box-shadow 0.28s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px -12px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Image with gradient overlay */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  style={{ transition: "transform 0.5s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
                {/* Dark gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* Label pill */}
                <div
                  className="absolute top-5 left-5 px-3 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-[#1A1A1A]"
                  style={{ background: GOLD }}
                >
                  {project.label}
                </div>
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col flex-grow">
                {/* Gold accent bar */}
                <div className="w-12 h-[3px] mb-6" style={{ background: GOLD }} />

                <h3 className="text-2xl md:text-3xl font-display font-extrabold uppercase tracking-wide mb-4 text-foreground leading-tight">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Bottom row */}
                <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-border/50">
                  {/* Badge */}
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                      {project.badge}
                    </span>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="rounded-none border-border hover:border-primary hover:bg-primary hover:text-white transition-all duration-250 uppercase tracking-widest font-bold text-xs group/btn"
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

        {/* Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 border border-border p-8 md:p-10 bg-secondary/40"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
              Ready to start?
            </p>
            <p className="text-lg md:text-xl font-display font-bold uppercase text-foreground">
              Want results like this? Get in touch for a free quote.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="btn-scale rounded-none h-13 px-8 text-sm font-bold uppercase tracking-widest bg-primary hover:bg-primary/90 text-primary-foreground flex-shrink-0 group"
          >
            <a href="#contact">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
