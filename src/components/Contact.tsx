import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormEvent, useState } from "react";

const contactItems = [
  {
    icon: Phone,
    label: "Mobile",
    value: "+27 82 655 4815",
    href: "tel:+27826554815",
  },
  {
    icon: Mail,
    label: "Email",
    value: "herla@telkomsa.net",
    href: "mailto:herla@telkomsa.net",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pretoria, Gauteng, South Africa",
    href: null,
  },
];

export function Contact() {
  const [jobType, setJobType] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const phone = form.get("phone");
    const message = form.get("message");

    const whatsappMessage = `Hi Herla Construction,

My name is ${name}.
My contact number is ${phone}.
Service required: ${jobType || "Not specified"}.

Project details:
${message}

I would like to request a quotation.`;

    const whatsappUrl = `https://wa.me/27826554815?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="mb-10">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3 border-l-2 border-primary pl-3">
            Contact Herla
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase leading-tight">
            Let's Talk About
            <br />
            Your Project.
          </h2>

          <p className="text-muted-foreground text-base mt-4 max-w-xl">
            Based in Pretoria and serving clients across Gauteng.
            Contact us directly or send your project details for a quotation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <a
              href="https://wa.me/27826554815"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-[#25D366] hover:bg-[#20bd5a] transition-colors mb-7"
            >
              <div className="w-12 h-12 bg-white/20 text-white flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>

              <div>
                <div className="font-bold uppercase tracking-wide text-white">
                  WhatsApp Herla
                </div>
                <div className="text-white/80 text-sm">
                  +27 82 655 4815
                </div>
              </div>
            </a>

            <div className="space-y-5">
              {contactItems.map((item) => {
                const Icon = item.icon;

                const content = (
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-secondary text-primary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>

                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </div>

                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </div>
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

          {/* Quote form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 bg-background border border-border p-7 md:p-8"
          >
            <h3 className="text-xl font-display font-bold uppercase mb-6">
              Request a Quote
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Name
                  </label>

                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="rounded-none bg-card border-border h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Phone / WhatsApp
                  </label>

                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Your number"
                    className="rounded-none bg-card border-border h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Service
                </label>

                <Select value={jobType} onValueChange={setJobType}>
                  <SelectTrigger className="rounded-none bg-card border-border h-12">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>

                  <SelectContent className="rounded-none">
                    <SelectItem value="Residential Construction">
                      Residential Construction
                    </SelectItem>

                    <SelectItem value="Commercial Construction">
                      Commercial Construction
                    </SelectItem>

                    <SelectItem value="Industrial Construction">
                      Industrial Construction
                    </SelectItem>

                    <SelectItem value="Renovations">
                      Renovations
                    </SelectItem>

                    <SelectItem value="Project Management">
                      Project Management
                    </SelectItem>

                    <SelectItem value="Electrical & Compliance">
                      Electrical & Compliance
                    </SelectItem>

                    <SelectItem value="Solar Installation">
                      Solar Installation
                    </SelectItem>

                    <SelectItem value="Roofing">
                      Roofing
                    </SelectItem>

                    <SelectItem value="Kitchen / Built-In Cupboards">
                      Kitchen / Built-In Cupboards
                    </SelectItem>

                    <SelectItem value="Shopfitting">
                      Shopfitting
                    </SelectItem>

                    <SelectItem value="Bills of Quantities">
                      Bills of Quantities
                    </SelectItem>

                    <SelectItem value="Insurance / Fire Damage Reinstatement">
                      Insurance / Fire Damage Reinstatement
                    </SelectItem>

                    <SelectItem value="Maintenance / Repairs">
                      Maintenance / Repairs
                    </SelectItem>

                    <SelectItem value="Other">
                      Other
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                >
                  Project Details
                </label>

                <Textarea
                  id="message"
                  name="message"
                  required
                  className="min-h-[100px] rounded-none bg-card border-border resize-none"
                  placeholder="Briefly tell us what you need and where the project is located."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-none font-bold uppercase tracking-widest h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Send via WhatsApp
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Your request will open in WhatsApp ready to send.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
