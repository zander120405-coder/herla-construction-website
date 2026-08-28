import { FormEvent, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Building2, CalendarDays, Check, ChevronDown, ClipboardList, Factory, Home as HomeIcon, Info, Mail, MapPin, Menu, Phone, Settings, ShieldCheck, Star, UserRoundCheck, X } from "lucide-react";

type View = "home" | "services" | "residential" | "commercial" | "industrial" | "project-management" | "specialist" | "experience" | "loss-adjustment" | "insurance-reinstatement" | "about" | "why-herla" | "contact";

const serviceItems: { view: View; title: string; detail: string; icon: typeof HomeIcon }[] = [
  { view: "residential", title: "Residential Construction", detail: "New builds, alterations, renovations & property development", icon: HomeIcon },
  { view: "commercial", title: "Commercial Construction", detail: "Commercial construction projects up to R10 million", icon: Building2 },
  { view: "industrial", title: "Industrial Construction", detail: "Industrial construction projects up to R10 million", icon: Factory },
  { view: "project-management", title: "Project Management", detail: "Planning, coordination, contractors, quality & delivery", icon: ClipboardList },
  { view: "specialist", title: "Specialist Services", detail: "BOQ, electrical, solar, roofing, kitchens, cupboards & shopfitting", icon: Settings },
  { view: "loss-adjustment", title: "Loss Adjustment & Insurance Reinstatement", detail: "ILASA-registered loss-adjusting expertise", icon: ShieldCheck },
  { view: "experience", title: "Our Experience", detail: "Selected client and project experience", icon: Star },
  { view: "about", title: "About Herla", detail: "Privately owned. Pretoria-based. Established 1993.", icon: Info },
];

const views: Record<Exclude<View, "home" | "contact">, { eyebrow: string; title: string; intro: string; bullets?: string[] }> = {
  services: { eyebrow: "Our capability", title: "Construction services", intro: "Herla delivers residential, commercial and industrial construction together with project management and specialist construction disciplines.", bullets: ["Residential property development", "Commercial construction", "Industrial construction", "Project management", "Specialist construction disciplines"] },
  residential: { eyebrow: "Core service", title: "Residential construction", intro: "Practical, accountable residential building capability for projects from scope and costing through to completion.", bullets: ["New builds", "Alterations", "Renovations", "Property development"] },
  commercial: { eyebrow: "Core service", title: "Commercial construction", intro: "Commercial construction backed by more than three decades of practical building and project-delivery experience.", bullets: ["Commercial construction", "Projects with values up to R10 million"] },
  industrial: { eyebrow: "Core service", title: "Industrial construction", intro: "Experienced construction coordination and delivery for industrial building projects.", bullets: ["Industrial construction", "Projects with values up to R10 million"] },
  "project-management": { eyebrow: "End-to-end delivery", title: "Project management", intro: "Herla coordinates the construction process with a practical focus on programme, workmanship, accountability and completion.", bullets: ["Planning", "Construction coordination", "Contractor coordination", "Programme management", "Quality control", "Project delivery"] },
  specialist: { eyebrow: "Specialist disciplines", title: "Specialist services", intro: "Established construction disciplines that support complete, coordinated project delivery.", bullets: ["Preparation of Bills of Quantities", "Electrical installations", "Solar installations", "Compliance certification of existing electrical installations", "Roofing specialist services", "Kitchen installations", "Built-in cupboards", "Shopfitting, maintenance, repairs and refurbishment work"] },
  experience: { eyebrow: "Established 1993", title: "Selected client experience", intro: "Long-standing experience serving institutional, diplomatic, insurance and industrial clients.", bullets: ["World Bank – South Africa: building maintenance and shopfitting", "French Embassy: property maintenance for more than 10 years, including Herbert Baker buildings in Cape Town", "Compass Insurance Company: panel contractor for more than 10 years, specialising in fire-damage rebuilding and reinstatement", "Mozal – Mozambique: police stations in Maputo Province and low-cost housing in Matola"] },
  "loss-adjustment": { eyebrow: "Insurance expertise", title: "Loss adjustment", intro: "Harry van der Westhuizen is a professional loss adjuster registered with ILASA and is able to assess property insurance claims.", bullets: ["Property damage assessment", "Reinstatement requirements", "Construction costing insight", "Professional loss-adjusting expertise distinct from construction delivery"] },
  "insurance-reinstatement": { eyebrow: "Insurance expertise", title: "Insurance reinstatement", intro: "Herla has extensive practical experience in reinstating fire-damaged residential, commercial and industrial properties.", bullets: ["Residential reinstatement", "Commercial reinstatement", "Industrial reinstatement", "Fire-damaged property rebuilding", "Construction delivery informed by claims-assessment experience"] },
  about: { eyebrow: "Who we are", title: "Experience that moves projects forward", intro: "Herla Construction is a privately owned construction company established in 1993 and based in Pretoria, Gauteng. Its approach combines practical construction experience, project coordination and attention to detail from initial scope and costing through to construction, specialist installations and completion.", bullets: ["More than three decades of experience", "Residential, commercial and industrial building projects", "Practical construction and project coordination", "Quality workmanship and dependable service"] },
  "why-herla": { eyebrow: "Why Herla", title: "Built on experience. Focused on delivery.", intro: "Quality construction, experienced management and trusted delivery.", bullets: ["Established in 1993", "30+ years of construction experience", "Multi-sector capability", "End-to-end delivery", "Insurance reinstatement expertise", "Proven long-standing client experience", "Quality workmanship", "Accountability and dependable delivery"] },
};

const stats = [
  { icon: CalendarDays, title: "EST. 1993", detail: "30+ Years Experience" },
  { icon: Building2, title: "PROJECTS UP TO R10M", detail: "Commercial & Industrial" },
  { icon: ClipboardList, title: "END-TO-END DELIVERY", detail: "From planning to completion" },
  { icon: MapPin, title: "PRETORIA, GAUTENG", detail: "South Africa" },
  { icon: UserRoundCheck, title: "PROFESSIONAL LOSS ADJUSTER", detail: "ILASA registered • Insurance reinstatement expertise" },
];

export default function Home() {
  const [view, setView] = useState<View>("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [lossOpen, setLossOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") { setView("home"); setMobileOpen(false); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const open = (next: View) => {
    setView(next); setMobileOpen(false); setServicesOpen(false); setExperienceOpen(false); setLossOpen(false);
  };

  return <div className="herla-shell">
    <header className="topbar">
      <button className="brand" onClick={() => open("home")} aria-label="Herla Construction home">
        <span className="brand-symbol"><img src="/herla-symbol.png" alt="Herla Construction symbol" /></span>
        <span className="brand-wordmark"><b>Herla</b><small>Construction</small></span>
      </button>
      <nav className="desktop-nav" aria-label="Main navigation">
        <NavButton active={view === "home"} onClick={() => open("home")}>Home</NavButton>
        <DropNav label="Services" open={servicesOpen} onToggle={() => setServicesOpen(!servicesOpen)}>
          <DropItem onClick={() => open("services")}>All services</DropItem>
          {serviceItems.slice(0, 5).map(item => <DropItem key={item.view} onClick={() => open(item.view)}>{item.title}</DropItem>)}
        </DropNav>
        <DropNav label="Experience" open={experienceOpen} onToggle={() => setExperienceOpen(!experienceOpen)}><DropItem onClick={() => open("experience")}>Selected client experience</DropItem></DropNav>
        <DropNav label="Loss Adjustment" open={lossOpen} onToggle={() => setLossOpen(!lossOpen)}><DropItem onClick={() => open("loss-adjustment")}>Loss adjustment</DropItem><DropItem onClick={() => open("insurance-reinstatement")}>Insurance reinstatement</DropItem></DropNav>
        <NavButton active={view === "about"} onClick={() => open("about")}>About</NavButton>
        <NavButton active={view === "why-herla"} onClick={() => open("why-herla")}>Why Herla</NavButton>
        <NavButton active={view === "contact"} onClick={() => open("contact")}>Contact</NavButton>
      </nav>
      <button className="mobile-trigger" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu /></button>
    </header>

    <main className="main-stage">
      <section className="hero" aria-hidden={view !== "home"}>
        <div className="hero-image" /><div className="hero-shade" />
        <div className="hero-copy">
          <div className="eyebrow"><span>Since 1993</span><i /></div>
          <h1>Built on Experience.<br /><strong>Delivered with<br />Accountability.</strong></h1>
          <p>Residential, commercial and industrial construction with end-to-end project management.</p>
          <button className="primary-cta" onClick={() => open("contact")}>Contact Us <ArrowRight /></button>
        </div>
        <aside className="service-rail" aria-label="Herla services">
          {serviceItems.map(({ view: target, title, detail, icon: Icon }) => <button key={target} onClick={() => open(target)}><Icon /><span><b>{title}</b><small>{detail}</small></span><ArrowRight className="rail-arrow" /></button>)}
        </aside>
      </section>

      {view !== "home" && <section className="view-panel" aria-live="polite"><button className="back-home" onClick={() => open("home")}><ArrowLeft /> Back to Home</button><div className="panel-inner">{view === "contact" ? <ContactView /> : <ContentView view={view} onOpen={open} />}</div></section>}
    </main>

    <footer className="credibility-bar">{stats.map(({ icon: Icon, title, detail }) => <div key={title}><Icon /><span><b>{title}</b><small>{detail}</small></span></div>)}</footer>
    <a className="whatsapp" href="https://wa.me/27826554815" target="_blank" rel="noreferrer" aria-label="Contact Herla Construction on WhatsApp">WA</a>

    {mobileOpen && <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <button className="drawer-close" onClick={() => setMobileOpen(false)} aria-label="Close navigation"><X /></button><img src="/herla-symbol.png" alt="" />
      <button onClick={() => open("home")}>Home</button><button onClick={() => open("services")}>Services</button>
      {serviceItems.slice(0, 5).map(item => <button key={item.view} className="sub" onClick={() => open(item.view)}>{item.title}</button>)}
      <button onClick={() => open("experience")}>Experience</button><button onClick={() => open("loss-adjustment")}>Loss Adjustment</button><button onClick={() => open("insurance-reinstatement")}>Insurance Reinstatement</button><button onClick={() => open("about")}>About</button><button onClick={() => open("why-herla")}>Why Herla</button><button className="drawer-contact" onClick={() => open("contact")}>Contact Us</button>
    </div>}
  </div>;
}

function ContentView({ view, onOpen }: { view: Exclude<View, "home" | "contact">; onOpen: (view: View) => void }) {
  const content = views[view];
  const sectionNumber = String(Object.keys(views).indexOf(view) + 1).padStart(2, "0");
  const listHeading = view === "experience" ? "Selected client experience" : view === "about" || view === "why-herla" ? "The Herla difference" : "What Herla delivers";

  return <div className="content-view">
    <div className="content-intro">
      <div className="panel-heading">
        <div className="panel-kicker"><b>{sectionNumber}</b><span>{content.eyebrow}</span></div>
        <h2>{content.title}</h2>
        <p>{content.intro}</p>
      </div>
      <div className="proof-card">
        <span>Herla Construction</span>
        <strong>30+</strong>
        <b>Years of practical experience</b>
        <small>Established 1993 · Pretoria, Gauteng</small>
      </div>
    </div>

    {view === "services" ? <ServiceOverview onOpen={onOpen} /> : view === "experience" ? <ExperienceCards items={content.bullets || []} /> : <div className="direct-section">
      <div className="section-label"><span>{listHeading}</span><i /></div>
      <div className="direct-list">{content.bullets?.map((item, index) => <div key={item}><b>{String(index + 1).padStart(2, "0")}</b><span>{item}</span><Check /></div>)}</div>
    </div>}

    {(view === "loss-adjustment" || view === "insurance-reinstatement") && <div className="service-relationship" aria-label="Related Herla services">
      <button onClick={() => onOpen("services")}><span>01</span>Construction</button>
      <button className={view === "loss-adjustment" ? "current" : ""} onClick={() => onOpen("loss-adjustment")}><span>02</span>Loss Adjustment</button>
      <button className={view === "insurance-reinstatement" ? "current" : ""} onClick={() => onOpen("insurance-reinstatement")}><span>03</span>Insurance Reinstatement</button>
    </div>}

    <div className="panel-actions">
      <a className="email-action" href="mailto:herla@telkomsa.net?subject=Herla%20website%20enquiry"><Mail /><span><b>Email Herla</b><small>Recommended contact method</small></span><ArrowRight /></a>
      <button onClick={() => onOpen("contact")}><span>Open contact form</span><ArrowRight /></button>
      {view !== "services" && <button className="quiet-action" onClick={() => onOpen(view === "loss-adjustment" || view === "insurance-reinstatement" ? "loss-adjustment" : "services")}><span>{view === "loss-adjustment" || view === "insurance-reinstatement" ? "Insurance services" : "All services"}</span><ArrowRight /></button>}
    </div>
  </div>;
}

function ServiceOverview({ onOpen }: { onOpen: (view: View) => void }) {
  return <div className="direct-section">
    <div className="section-label"><span>Choose a service</span><i /></div>
    <div className="service-overview">{serviceItems.slice(0, 6).map(({ view, title, detail, icon: Icon }, index) => <button key={view} onClick={() => onOpen(view)}>
      <span className="service-number">{String(index + 1).padStart(2, "0")}</span><Icon /><span><b>{title}</b><small>{detail}</small></span><ArrowRight />
    </button>)}</div>
  </div>;
}

function ExperienceCards({ items }: { items: string[] }) {
  return <div className="direct-section">
    <div className="section-label"><span>Selected client experience</span><i /></div>
    <div className="experience-cards">{items.map((item, index) => {
      const [client, ...details] = item.split(":");
      return <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><h3>{client}</h3><p>{details.join(":").trim()}</p></article>;
    })}</div>
  </div>;
}

function ContactView() {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const route = ((event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null)?.value;
    const message = `Herla website enquiry\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\n\n${data.get("message")}`;
    if (route === "whatsapp") {
      window.open(`https://wa.me/27826554815?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
      return;
    }
    const subject = encodeURIComponent(`Herla website enquiry – ${data.get("name") || "New client"}`);
    window.location.href = `mailto:herla@telkomsa.net?subject=${subject}&body=${encodeURIComponent(message)}`;
  };

  return <div className="contact-layout">
    <div className="panel-heading">
      <span>Contact Herla</span>
      <h2>Let’s discuss your project.</h2>
      <p>Residential, commercial, industrial or insurance-reinstatement enquiries.</p>
      <div className="contact-details">
        <a className="recommended-contact" href="mailto:herla@telkomsa.net"><Mail /> <span><b>Email us — Recommended</b><small>herla@telkomsa.net</small></span></a>
        <a href="https://wa.me/27826554815" target="_blank" rel="noreferrer"><Phone /> <span><b>WhatsApp or call</b><small>+27 82 655 4815</small></span></a>
        <div><MapPin /> Pretoria, Gauteng, South Africa</div>
      </div>
    </div>
    <form className="contact-form" onSubmit={submit}>
      <div className="form-note"><Mail /><span><b>Email is recommended</b><small>It gives Herla the clearest project record and makes follow-up easier.</small></span></div>
      <label>Name<input name="name" required /></label>
      <label>Email<input name="email" type="email" required /></label>
      <label>Phone<input name="phone" type="tel" required /></label>
      <label>How can we help?<textarea name="message" rows={4} required /></label>
      <div className="contact-actions">
        <button type="submit" value="email">Send by Email <ArrowRight /></button>
        <button className="whatsapp-submit" type="submit" value="whatsapp">Continue on WhatsApp <ArrowRight /></button>
      </div>
    </form>
  </div>;
}

function NavButton({ children, active, onClick }: { children: React.ReactNode; active?: boolean; onClick: () => void }) { return <button className={active ? "active" : ""} onClick={onClick}>{children}</button>; }
function DropNav({ label, open, onToggle, children }: { label: string; open: boolean; onToggle: () => void; children: React.ReactNode }) { return <div className="drop-nav"><button onClick={onToggle}>{label}<ChevronDown /></button>{open && <div className="drop-menu">{children}</div>}</div>; }
function DropItem({ children, onClick }: { children: React.ReactNode; onClick: () => void }) { return <button onClick={onClick}>{children}</button>; }
