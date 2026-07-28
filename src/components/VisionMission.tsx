import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const GOLD = "#CC9633";

export function VisionMission() {
  return (
    <section className="py-20 bg-[#111111] relative overflow-hidden">

      {/* Background texture line */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px]" style={{ background: GOLD }} />
            <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>
              Who We Are & Where We're Going
            </span>
            <div className="w-8 h-[2px]" style={{ background: GOLD }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold uppercase text-white leading-tight">
            Our Vision & Mission
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 border border-white/10 p-10 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center border border-white/20 flex-shrink-0" style={{ color: GOLD }}>
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: GOLD }}>Vision</div>
                <h3 className="text-xl font-display font-bold uppercase text-white">Where We're Headed</h3>
              </div>
            </div>
            <div className="w-10 h-[2px] mb-6" style={{ background: GOLD }} />
            <p className="text-white/65 text-base leading-relaxed">
              To be the most trusted construction and renovation company in Gauteng — recognised for quality workmanship, professional conduct, and the ability to deliver across all scales of construction, from single-room renovations to large commercial projects.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-10 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center border border-white/20 flex-shrink-0" style={{ color: GOLD }}>
                <Target className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: GOLD }}>Mission</div>
                <h3 className="text-xl font-display font-bold uppercase text-white">How We Work</h3>
              </div>
            </div>
            <div className="w-10 h-[2px] mb-6" style={{ background: GOLD }} />
            <p className="text-white/65 text-base leading-relaxed">
              To deliver reliable, high-quality construction services through an experienced and skilled team, a commitment to safety, and honest communication with every client. We take on every project — large or small — with the same level of professionalism, care, and accountability.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
