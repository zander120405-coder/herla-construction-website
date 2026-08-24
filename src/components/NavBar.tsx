import { ChevronDown, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";

export function NavBar() {
  return (
    <nav className="relative z-50 h-[72px] flex-shrink-0 border-b border-white/5 bg-[#06111f]">
      <div className="mx-auto flex h-full max-w-[1600px] items-center px-6">
        <div className="mr-auto flex h-[52px] w-[185px] items-center overflow-hidden">
          <Logo size="md" variant="light" />
        </div>

        <div className="hidden items-center gap-7 lg:flex">
          <a
            href="/"
            className="border-b-2 border-[#0874ff] pb-1 text-[11px] font-bold uppercase text-[#0874ff]"
          >
            Home
          </a>

          <NavDrop href="/services">Services</NavDrop>

          <NavDrop href="/experience">Experience</NavDrop>

          <NavDrop href="/loss-adjusting">Loss Adjustment</NavDrop>

          <a
            href="/about"
            className="text-[11px] font-bold uppercase text-white/80 hover:text-white"
          >
            About
          </a>

          <a
            href="/why-herla"
            className="text-[11px] font-bold uppercase text-white/80 hover:text-white"
          >
            Why Herla
          </a>

          <a
            href="/contact"
            className="text-[11px] font-bold uppercase text-white/80 hover:text-white"
          >
            Contact
          </a>

          <a
            href="/quote"
            className="ml-2 flex h-11 items-center gap-2 bg-[#0874ff] px-6 text-[11px] font-bold uppercase text-white transition hover:bg-[#0064e6]"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}

function NavDrop({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-1 text-[11px] font-bold uppercase text-white/80 hover:text-white"
    >
      {children}
      <ChevronDown className="h-3.5 w-3.5" />
    </a>
  );
}
