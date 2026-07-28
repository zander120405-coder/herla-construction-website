import { Clock, Phone, Mail, MessageCircle, Facebook, Instagram } from "lucide-react";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 md:px-6">

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">

          {/* Brand column */}
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="inline-flex hover:opacity-80 transition-opacity mb-6">
              <Logo size="lg" />
            </a>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mt-4">
              A privately owned construction company established in 1993. Serving residential, commercial, and industrial clients across Gauteng and beyond — quality workmanship, every time.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/27826554815"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-[#25D366] hover:border-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-foreground text-sm mb-6">Quick Links</h4>
            <ul className="space-y-3 text-muted-foreground">
              {[
                { label: "Services", href: "#services" },
                { label: "About Us", href: "#about" },
                { label: "Our Work", href: "#projects" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors text-sm font-semibold tracking-wider uppercase flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-primary transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-foreground text-sm mb-6">Contact</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <a href="tel:+27826554815" className="flex items-start gap-3 hover:text-primary transition-colors group">
                  <Phone className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-sm">+27 82 655 4815</span>
                </a>
              </li>
              <li>
                <a href="tel:+27125671902" className="flex items-start gap-3 hover:text-primary transition-colors group">
                  <Phone className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-sm">012 567 1902</span>
                </a>
              </li>
              <li>
                <a href="mailto:herla@telkomsa.net" className="flex items-start gap-3 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-sm">herla@telkomsa.net</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/27826554815"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mt-0.5 text-[#25D366] flex-shrink-0" />
                  <span className="text-sm">WhatsApp Us</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <div>Mon – Sat, 9:00 AM – 4:00 PM</div>
                  <div className="text-muted-foreground/60 text-xs mt-0.5">All of Gauteng</div>
                  <div className="text-muted-foreground/50 text-xs mt-0.5">Serving all of Gauteng — call-out fee may apply</div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
            &copy; {new Date().getFullYear()} Herla. All rights reserved.
          </p>
          <div className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
            Local team. Honest work. Every time.
          </div>
        </div>

      </div>
    </footer>
  );
}
