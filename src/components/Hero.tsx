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
          alt="Herla Construction commercial construction, new builds and renovations across Gauteng"
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
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold text-white uppercase leading-[0.95] mb-6">
              Commercial Construction.
              <br />
              <span className="text-[#CC9633]">Built Right.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl font-sans font-light leading-relaxed">
              Commercial construction, new builds and renovations across Gauteng.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
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

              <Button
                asChild
                size="lg"
                className="btn-scale btn-gold rounded-none h-14 px-8 text-sm font-bold uppercase tracking-widest bg-[#CC9633] text-[#1A1A1A] group shadow-none"
              >
                <a href="#contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-2 text-white/55 text-sm"
            >
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 text-[#CC9633] fill-[#CC9633]"
                />
              ))}

              <span className="ml-1 font-medium">
                Trusted across Gauteng since 1993
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute left-8 md:left-12 top-0 bottom-0 w-[1px] bg-white/10 z-10 hidden md:block" />
    </section>
  );
}
