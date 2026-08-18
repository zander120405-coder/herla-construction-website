import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 md:px-6">

        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12">

          {/* Brand */}
          <div>
            <a
              href="#"
              className="inline-flex hover:opacity-80 transition-opacity mb-5"
            >
              <Logo size="lg" />
            </a>

            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Pretoria-based construction company delivering residential,
              commercial and industrial projects since 1993.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-foreground text-sm mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {[
                { label: "Services", href: "#services" },
                { label: "Our Work", href: "#projects" },
                { label: "About", href: "#about" },
                { label: "Why Herla", href: "#why-us" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-foreground text-sm mb-5">
              Contact
            </h4>

            <ul className="space-y-4 text-muted-foreground">
              <li>
                <a
                  href="tel:+27826554815"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">+27 82 655 4815</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:herla@telkomsa.net"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">herla@telkomsa.net</span>
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/27826554815"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span className="text-sm">WhatsApp Us</span>
                </a>
              </li>

              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">
                  Pretoria, Gauteng, South Africa
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
            &copy; {new Date().getFullYear()} Herla Construction. All rights reserved.
          </p>

          <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
            Established 1993 · Pretoria, Gauteng
          </p>
        </div>

      </div>
    </footer>
  );
}
