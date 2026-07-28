import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#1A1A1A]">
      {/* Subtle diagonal texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 24px,
          rgba(201,163,78,0.4) 24px,
          rgba(201,163,78,0.4) 25px
        )`
      }} />

      {/* Gold left border accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#CC9633]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="text-[#CC9633] text-xs font-bold uppercase tracking-widest mb-4">
              Serving All of Gauteng
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase text-white leading-[1.05]">
              Get a Free Quote<br /> Today.
            </h2>
            <p className="mt-4 text-white/60 text-lg max-w-lg">
              Tell us what you need and we'll come out, take a look, and give you a straight price — no obligation, no pressure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 flex-shrink-0"
          >
            <Button
              asChild
              size="lg"
              className="btn-scale btn-gold gold-pulse rounded-none h-14 px-8 text-sm font-bold uppercase tracking-widest bg-[#CC9633] text-[#1A1A1A] group shadow-none"
            >
              <a href="#contact">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

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
                WhatsApp Us
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
