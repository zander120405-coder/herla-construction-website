import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Home,
  Building2,
  Factory,
  Hammer,
  ClipboardList,
  ShieldCheck,
  BriefcaseBusiness,
  Info,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Logo } from "@/components/Logo";

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="relative z-50 border-b border-white/10 bg-[#06111f]">
      <div className="mx-auto flex h-[84px] max-w-[1500px] items-center justify-between px-6 md:px-10 lg:px-14">
        {/* Logo */}
        <a href="/" className="flex items-center transition-opacity hover:opacity-85">
          <Logo size="md" variant="light" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          <a
            href="/"
            className="border-b-2 border-[#0869ff] pb-1 text-xs font-bold uppercase tracking-[0.08em] text-[#0869ff]"
          >
            Home
          </a>

          {/* Services */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown("services")}
              className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.08em] text-white/85 transition-colors hover:text-white"
            >
              Services
              <ChevronDown className="h-4 w-4" />
            </button>

            {openDropdown === "services" && (
              <div className="absolute left-0 top-full mt-5 w-[320px] border border-white/10 bg-[#091827] shadow-2xl">
                <a
                  href="/services/residential"
                  className="flex items-start gap-3 border-b border-white/10 px-5 py-4 text-white transition-colors hover:bg-white/5"
                >
                  <Home className="mt-0.5 h-5 w-5 text-[#0869ff]" />
                  <div>
                    <div className="text-xs font-bold uppercase">
                      Residential Construction
                    </div>
                    <div className="mt-1 text-[11px] text-white/55">
                      New builds, alterations, renovations & property development
                    </div>
                  </div>
                </a>

                <a
                  href="/services/commercial"
                  className="flex items-start gap-3 border-b border-white/10 px-5 py-4 text-white transition-colors hover:bg-white/5"
                >
                  <Building2 className="mt-0.5 h-5 w-5 text-[#0869ff]" />
                  <div>
                    <div className="text-xs font-bold uppercase">
                      Commercial Construction
                    </div>
                    <div className="mt-1 text-[11px] text-white/55">
                      Projects up to R10 million
                    </div>
                  </div>
                </a>

                <a
                  href="/services/industrial"
                  className="flex items-start gap-3 border-b border-white/10 px-5 py-4 text-white transition-colors hover:bg-white/5"
                >
                  <Factory className="mt-0.5 h-5 w-5 text-[#0869ff]" />
                  <div>
                    <div className="text-xs font-bold uppercase">
                      Industrial Construction
                    </div>
                    <div className="mt-1 text-[11px] text-white/55">
                      Projects up to R10 million
                    </div>
                  </div>
                </a>

                <a
                  href="/services/project-management"
                  className="flex items-start gap-3 border-b border-white/10 px-5 py-4 text-white transition-colors hover:bg-white/5"
                >
                  <ClipboardList className="mt-0.5 h-5 w-5 text-[#0869ff]" />
                  <div>
                    <div className="text-xs font-bold uppercase">
                      Project Management
                    </div>
                    <div className="mt-1 text-[11px] text-white/55">
                      Planning, coordination, contractors, quality & delivery
                    </div>
                  </div>
                </a>

                <a
                  href="/services/specialist"
                  className="flex items-start gap-3 px-5 py-4 text-white transition-colors hover:bg-white/5"
                >
                  <Hammer className="mt-0.5 h-5 w-5 text-[#0869ff]" />
                  <div>
                    <div className="text-xs font-bold uppercase">
                      Specialist Services
                    </div>
                    <div className="mt-1 text-[11px] text-white/55">
                      BOQ, electrical, solar, roofing, kitchens, shopfitting & more
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* Experience */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown("experience")}
              className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.08em] text-white/85 transition-colors hover:text-white"
            >
              Experience
              <ChevronDown className="h-4 w-4" />
            </button>

            {openDropdown === "experience" && (
              <div className="absolute left-0 top-full mt-5 w-[260
