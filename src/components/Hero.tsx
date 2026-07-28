import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 overflow-hidden bg-[#0d0d0d]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/95 via-[#0d0d0d]/80 to-[#0d0d0d]/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent z-10" />
        <img
          src="/hero.png"
          alt="Herla — carports, painting and renovations serving all of Gauteng"
          className="w-full h-full object-cover object-center opacity-60"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#CC9633]/40 bg-[#CC9633]/10 text-[#CC9633] uppercase tracking-widest text-xs font-bold">
              <span className="w-2 h-2 bg-[#CC9633] rounded-full animate-pulse" />
              Renovations · New Builds · Electrical · Carpentry · Interior Design
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold text-white uppercase leading-[0.95] mb-4">
              Built Right.
              <br />
              <span className="text-[#CC9633]">Every Time.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base md:text-lg text-white/80 mb-2 font-sans font-semibold tracking-wide">
              Renovations, new builds, electrical, carpentry & interior design.
            </p>
            <p className="text-lg md:text-xl text-white/55 mb-10 max-w-xl font-sans font-light leading-relaxed">
              A privately owned construction company based in Gauteng — established in 1993 and trusted by residential, commercial, and industrial clients ever since.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-5">
              <Button
                asChild
                size="lg"
                className="btn-scale rounded-none h-14 px-8 text-sm font-bold uppercase tracking-widest bg-[#25D366] hover:bg-[#20bd5a] text-white group shadow-none"
              >
                <a
                  href="https://wa.me/27826554815"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get a Quote on WhatsApp
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="btn-scale btn-gold rounded-none h-14 px-8 text-sm font-bold uppercase tracking-widest bg-[#CC9633] text-[#1A1A1A] group shadow-none"
              >
                <a href="#contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/60 text-sm font-semibold tracking-wide mb-4"
            >
              Fast response. Quality work. No shortcuts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex items-center gap-2 text-white/50 text-sm"
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-[#CC9633] fill-[#CC9633]" />
              ))}
              <span className="ml-1 font-medium">Trusted by clients across Gauteng since 1993</span>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 flex flex-wrap gap-8 pt-8 border-t border-white/10"
            >
              {[
                { value: "Est. 1993", label: "In Business" },
                { value: "Gauteng", label: "Based & Serving" },
                { value: "All Scales", label: "Residential to Commercial" },
                { value: "Mon–Sat", label: "Available" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-3xl font-display font-bold text-[#CC9633]">{item.value}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/50 mt-1">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute left-8 md:left-12 top-0 bottom-0 w-[1px] bg-white/10 z-10 hidden md:block" />
    </section>
  );
}
