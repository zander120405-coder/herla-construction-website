import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "Do you offer free quotes?",
    a: "Yes, always. We'll come out to your property, look at the job, and give you a clear written quote at no cost and no obligation. What we quote is what you pay — we don't add extras after the fact.",
  },
  {
    q: "Which areas do you work in?",
    a: "We serve all of Gauteng — a call-out fee may apply depending on your location. Just give us a call and we'll let you know if we can get to you.",
  },
  {
    q: "How long does a typical job take?",
    a: "A paint job usually takes 1–3 days depending on the size of the house. A carport build typically takes 3–5 days. Renovations depend on the scope, but we'll give you a realistic timeline before we start and we stick to it.",
  },
  {
    q: "Do you clean up after the job?",
    a: "Always. We tidy up at the end of each working day and do a full cleanup once the job is complete. We treat your property with respect and leave it the way we found it — just with better workmanship.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept EFT bank transfer and cash. You'll get a proper invoice for every job. On bigger projects, we ask for a deposit upfront before we start.",
  },
  {
    q: "What if I'm not happy with the work?",
    a: "Then we'll fix it — simple as that. We stand behind everything we do. If something isn't right, tell us and we'll come back and sort it out at no extra cost.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Left — header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col justify-start"
          >
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3 border-l-2 border-primary pl-3">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase leading-[1.05] mb-6">
              Good Questions.<br />Straight Answers.
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Still not sure about something? Give us a call or drop us a WhatsApp — we're happy to chat before you commit to anything.
            </p>
            <Button
              asChild
              className="rounded-none h-12 px-8 font-bold uppercase tracking-widest bg-primary hover:bg-primary/90 text-white self-start group"
            >
              <a href="#contact">
                Ask Us Anything
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <Accordion type="single" collapsible className="space-y-0">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-b border-border last:border-b-0 rounded-none"
                >
                  <AccordionTrigger className="text-left font-bold uppercase tracking-wide text-sm py-6 hover:text-primary hover:no-underline transition-colors [&[data-state=open]]:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
