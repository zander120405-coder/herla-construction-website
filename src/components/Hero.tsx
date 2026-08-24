import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-0 flex-1 items-center overflow-hidden bg-[#06111f]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt="Herla Construction"
          className="h-full w-full object-cover object-center"
        />

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06111f] via-[#06111f]/88 to-[#06111f]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06111f]/95 via-transparent to-[#06111f]/25" />
      </div>

      {/* Main hero content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1500px] items-center px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-[620px]"
        >
          {/* Since */}
          <div className="mb-3 flex items-center gap-3">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#0869ff]">
              Since 1993
            </span>

            <span className="h-[2px] w-12 bg-[#0869ff]" />
          </div>

          {/* Heading */}
          <h1 className="mb-4 font-display text-[3.1rem] font-black uppercase leading-[0.93] tracking-[-0.025em] text-white sm:text-[3.8rem] md:text-[4.6rem] lg:text-[5rem]">
            Built on Experience.
            <br />
            <span className="text-[#0869ff]">
              Delivered with Accountability.
            </span>
          </h1>

          {/* Description */}
          <p className="mb-6 max-w-[560px] text-base leading-relaxed text-white/85 md:text-lg">
            Residential, commercial and industrial construction with
            end-to-end project management.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/quote"
              className="group inline-flex h-14 items-center justify-center gap-3 bg-[#0869ff] px-8 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-[#075cd9]"
            >
              Get a Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/contact"
              className="inline-flex h-14 items-center justify-center gap-3 border border-white/65 bg-[#06111f]/45 px-8 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10"
            >
              Contact Us
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Subtle bottom shadow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#06111f] to-transparent" />
    </section>
  );
}
