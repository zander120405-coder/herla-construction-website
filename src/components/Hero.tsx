import {
  ArrowRight,
  Phone,
  Home,
  Building2,
  Factory,
  ClipboardList,
  Settings,
  ShieldCheck,
  Star,
  Info,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-full overflow-hidden bg-[#06111f]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt="Herla Construction"
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#06111f] via-[#06111f]/88 to-[#06111f]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06111f]/90 via-transparent to-[#06111f]/20" />
      </div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] items-center px-8 pr-[330px]">
        <div className="max-w-[560px]">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#0874ff]">
              Since 1993
            </span>
            <span className="h-[2px] w-12 bg-[#0874ff]" />
          </div>

          <h1 className="text-[48px] font-black uppercase leading-[0.94] tracking-[-0.025em] text-white md:text-[58px] xl:text-[66px]">
            Built on Experience.
            <br />
            <span className="text-[#0874ff]">
              Delivered with
              <br />
              Accountability.
            </span>
          </h1>

          <p className="mt-5 max-w-[500px] text-[16px] leading-relaxed text-white/85">
            Residential, commercial and industrial construction with
            end-to-end project management.
          </p>

          <div className="mt-7 flex">
            <a
              href="/contact"
              className="flex h-13 min-w-[190px] items-center justify-center gap-3 bg-[#0874ff] px-8 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#0064e6]"
            >
              Contact Us
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE MENU */}
      <aside className="absolute right-5 top-5 bottom-5 z-20 hidden w-[285px] overflow-hidden rounded-md border border-white/10 bg-[#071522]/95 shadow-2xl backdrop-blur-md xl:block">
        <SideLink
          icon={Home}
          title="Residential Construction"
          detail="New builds, alterations, renovations & property development"
          href="/services/residential"
        />

        <SideLink
          icon={Building2}
          title="Commercial Construction"
          detail="Projects up to R10 million"
          href="/services/commercial"
        />

        <SideLink
          icon={Factory}
          title="Industrial Construction"
          detail="Projects up to R10 million"
          href="/services/industrial"
        />

        <SideLink
          icon={ClipboardList}
          title="Project Management"
          detail="Planning, coordination, contractors, quality & project delivery"
          href="/services/project-management"
        />

        <SideLink
          icon={Settings}
          title="Specialist Services"
          detail="BOQ, electrical, solar, compliance, roofing, kitchens, shopfitting & more"
          href="/services/specialist"
          arrow
        />

        <SideLink
          icon={ShieldCheck}
          title="Loss Adjustment & Insurance Reinstatement"
          detail="ILASA registered loss adjuster. Fire-damage reinstatement specialists."
          href="/loss-adjusting"
        />

        <SideLink
          icon={Star}
          title="Our Experience"
          detail="Projects & client references"
          href="/experience"
        />

        <SideLink
          icon={Info}
          title="About Herla"
          detail="Who we are"
          href="/about"
          last
        />
      </aside>
    </section>
  );
}

function SideLink({
  icon: Icon,
  title,
  detail,
  href,
  arrow = false,
  last = false,
}: {
  icon: any;
  title: string;
  detail: string;
  href: string;
  arrow?: boolean;
  last?: boolean;
}) {
  return (
    <a
      href={href}
      className={`flex min-h-[72px] items-start gap-3 px-5 py-4 transition hover:bg-white/5 ${
        !last ? "border-b border-white/10" : ""
      }`}
    >
      <Icon
        strokeWidth={1.8}
        className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0874ff]"
      />

      <div className="min-w-0 flex-1">
        <div className="text-[11px] font-extrabold uppercase leading-tight text-white">
          {title}
        </div>

        <div className="mt-1 text-[9px] leading-snug text-white/60">
          {detail}
        </div>
      </div>

      {arrow && (
        <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-white/60" />
      )}
    </a>
  );
}
