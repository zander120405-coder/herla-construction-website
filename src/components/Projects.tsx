import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

const v = "?v=4";

const projects = [
  {
    id: 1,
    title: "Home Renovation",
    category: "Building & Construction — Gauteng",
    description: "Full exterior renovation including plastering, painting, and finishing. The property went from weathered and damaged to a clean, well-presented finish ready for the market.",
    before: `/before-1.jpg${v}`,
    after: `/after-1.jpg${v}`,
    beforeFilter: "none",
    afterFilter: "none",
    beforeObjectPosition: "center",
    afterObjectPosition: "center",
  },
  {
    id: 2,
    title: "Steel Carport Install",
    category: "Carport Builder — Gauteng",
    description: "Double steel-frame carport installed on an existing property. Custom built to fit the driveway, with IBR roofing, clean fascia, and a proper foundation — completed in two days.",
    before: `/before-2.png${v}`,
    after: `/carport.png${v}`,
    beforeFilter: "none",
    afterFilter: "none",
    beforeObjectPosition: "top center",
    afterObjectPosition: "top center",
  },
  {
    id: 3,
    title: "Kitchen Renovation",
    category: "Home Renovation — Gauteng",
    description: "Complete kitchen remodel — new tiling, fitted cupboards, countertop, and a fresh paint finish throughout. The client went from a dated, worn-out kitchen to a fully functional modern space.",
    before: `/before-3.png${v}`,
    after: `/after-3.png${v}`,
    beforeFilter: "none",
    afterFilter: "none",
    beforeObjectPosition: "top center",
    afterObjectPosition: "top center",
  },
  {
    id: 4,
    title: "Roof Repair & Finish",
    category: "Roofing & Repairs — Gauteng",
    description: "Damaged roof section repaired, re-sheeted, and sealed to stop persistent leaks. We replaced the affected IBR sheets, repointed ridging, and repainted the full roof for a uniform finish.",
    before: `/before-4.png${v}`,
    after: `/after-4.png${v}`,
    beforeFilter: "none",
    afterFilter: "none",
    beforeObjectPosition: "top center",
    afterObjectPosition: "top center",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3 border-l-2 border-primary pl-3">
              Our Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase leading-tight">
              Real Work.<br /> Real Results.
            </h2>
          </motion.div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors self-start md:self-end"
          >
            Start your project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Instruction hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-sm mb-10 flex items-center gap-2"
        >
          <span className="inline-block w-4 h-[1px] bg-primary" />
          Drag the slider left or right to compare before &amp; after results.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <BeforeAfterSlider
                before={project.before}
                after={project.after}
                title={project.title}
                category={project.category}
                beforeLabel="Before"
                afterLabel="After"
                beforeFilter={project.beforeFilter}
                afterFilter={project.afterFilter}
                beforeObjectPosition={project.beforeObjectPosition}
                afterObjectPosition={project.afterObjectPosition}
              />
              <div className="bg-background border border-t-0 border-border px-5 py-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-muted-foreground/50 mt-8 uppercase tracking-widest"
        >
          Real jobs · Real results · All of Gauteng
        </motion.p>
      </div>
    </section>
  );
}
