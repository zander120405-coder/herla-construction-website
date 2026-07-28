import { motion } from "framer-motion";
import { Quote, ShieldCheck, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "They painted the entire exterior of my house and it looked better than I imagined. Clean work, fair price, and they finished in two days. I'll definitely call them again.",
    author: "Sandra M.",
    role: "House Painting — Exterior",
    stars: 5,
  },
  {
    quote: "Needed a carport built before the rainy season. Herla came out, gave me a quote the same day, and had it done within a week. Really happy with how it turned out.",
    author: "Ricardo T.",
    role: "Carport Build",
    stars: 5,
  },
  {
    quote: "We renovated our kitchen and bathroom. The guys were respectful, kept the mess to a minimum, and the quality of the work was really impressive for a small team. Highly recommend.",
    author: "Lisa & James O.",
    role: "Kitchen & Bathroom Renovation",
    stars: 5,
  },
];

const badges = [
  { icon: ShieldCheck, label: "Quality Guaranteed" },
  { icon: ShieldCheck, label: "Honest Pricing" },
  { icon: ShieldCheck, label: "Free Estimates" },
  { icon: ShieldCheck, label: "Local & Trusted" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-[#F7F3EC] relative overflow-hidden">
      <div className="absolute top-0 right-0 text-[28rem] font-display leading-none select-none pointer-events-none opacity-[0.03] -mt-16 -mr-16 text-foreground">
        "
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3 border-l-2 border-primary pl-3">
            Client Feedback
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase leading-tight">
            What Our Clients Say.
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-lift rounded-none bg-card border-border h-full flex flex-col hover:border-primary transition-colors duration-300">
                <CardContent className="p-8 flex flex-col flex-grow">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>

                  <Quote className="w-7 h-7 text-primary mb-4 opacity-40" />

                  <p className="text-muted-foreground text-base mb-8 flex-grow leading-relaxed">
                    "{t.quote}"
                  </p>

                  <div className="mt-auto pt-6 border-t border-border/50">
                    <div className="font-bold text-foreground uppercase tracking-wide text-sm">{t.author}</div>
                    <div className="text-xs text-primary uppercase tracking-widest mt-1">{t.role}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 border border-border bg-card px-6 py-3"
              >
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-foreground">{badge.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
