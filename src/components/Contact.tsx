import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { FormEvent, useState } from "react";

const contactItems = [
  {
    icon: Phone,
    label: "Mobile",
    value: "+27 82 655 4815",
    href: "tel:+27826554815",
  },
  {
    icon: PhoneCall,
    label: "Office",
    value: "012 567 1902",
    href: "tel:+27125671902",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "herla@telkomsa.net",
    href: "mailto:herla@telkomsa.net",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "PO Box 15159, Sinoville",
    note: "Serving all of Gauteng — call-out fee may apply depending on location",
    href: null,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Sat, 9:00 AM – 4:00 PM",
    href: null,
  },
];

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thanks for getting in touch. We'll come back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section header */}
        <div className="mb-14">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3 border-l-2 border-primary pl-3">
            Get in Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase leading-tight">
            Let's Talk About<br /> Your Project.
          </h2>
          <p className="text-muted-foreground text-base mt-4 max-w-xl">
            Serving all of Gauteng — call-out fee may apply depending on location. WhatsApp us for the fastest quote, or fill in the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* WhatsApp CTA — primary action */}
            <a
              href="https://wa.me/27826554815"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-[#25D366] hover:bg-[#20bd5a] transition-colors group"
            >
              <div className="w-14 h-14 bg-white/20 text-white flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div>
                <div className="font-bold uppercase tracking-wide text-base text-white">
                  Message us on WhatsApp for a fast quote
                </div>
                <div className="text-white/80 text-sm mt-0.5 font-medium">
                  We respond within minutes · Mon–Sat, 9am–4pm
                </div>
              </div>
            </a>

            {/* Other contact details */}
            <div className="space-y-5 mt-2">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-secondary text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-0.5">{item.label}</div>
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{item.value}</div>
                      {item.note && <div className="text-xs text-muted-foreground mt-0.5">{item.note}</div>}
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — simplified form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-background border border-border p-8 md:p-10"
          >
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Prefer a form? Fill this in and we'll get back to you with a free quote. No pressure, no obligation.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Your Name</label>
                <Input id="name" required placeholder="e.g. John Smith" className="rounded-none bg-card border-border focus-visible:ring-primary h-12" />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone / WhatsApp Number</label>
                <Input id="phone" type="tel" required placeholder="e.g. 082 123 4567" className="rounded-none bg-card border-border focus-visible:ring-primary h-12" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Type of Job</label>
                <Select>
                  <SelectTrigger className="rounded-none bg-card border-border focus:ring-primary h-12">
                    <SelectValue placeholder="Select a job type" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-border">
                    <SelectItem value="renovation">Renovations</SelectItem>
                    <SelectItem value="new-build">New Build</SelectItem>
                    <SelectItem value="electrical">Electrical</SelectItem>
                    <SelectItem value="carpentry">Carpentry</SelectItem>
                    <SelectItem value="interior-design">Interior Design</SelectItem>
                    <SelectItem value="painting">Painting & Waterproofing</SelectItem>
                    <SelectItem value="shopfitting">Shopfitting</SelectItem>
                    <SelectItem value="structural">Structural Repairs</SelectItem>
                    <SelectItem value="demolition">Demolition</SelectItem>
                    <SelectItem value="other">Other / Not Sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Tell Us About the Job</label>
                <Textarea
                  id="message"
                  required
                  className="min-h-[120px] rounded-none bg-card border-border focus-visible:ring-primary resize-none"
                  placeholder="What needs doing, where you're based, and any relevant details..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full rounded-none font-bold uppercase tracking-widest h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-base"
              >
                {isSubmitting ? "Sending..." : "Send My Request"}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Mon–Sat, 9am–4pm · We'll get back to you quickly.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
