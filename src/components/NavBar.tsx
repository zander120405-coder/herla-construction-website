import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  const linkClass = isScrolled
    ? "text-foreground/70 hover:text-primary"
    : "text-white/80 hover:text-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">

          {/* Logo — switches variant on scroll */}
          <a href="#" className="hover:opacity-80 transition-opacity">
            <Logo size="md" variant={isScrolled ? "dark" : "light"} />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`nav-link text-sm font-semibold uppercase tracking-wider transition-colors ${linkClass}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="lg"
              className="rounded-none font-bold uppercase tracking-widest bg-primary hover:bg-primary/90 text-primary-foreground shadow-none"
            >
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block text-sm font-semibold uppercase tracking-wider text-foreground/70 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="w-full rounded-none font-bold uppercase tracking-widest bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Get a Quote</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
