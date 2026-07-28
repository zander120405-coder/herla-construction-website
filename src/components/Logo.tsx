const GOLD = "#CC9633";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export function Logo({ size = "md", variant = "light" }: LogoProps) {
  const textColor = variant === "dark" ? "#111111" : "#FFFFFF";
  const wallColor = variant === "dark" ? "#333333" : "rgba(255,255,255,0.9)";

  const configs = {
    sm: { iconW: 26, iconH: 30, fontSize: "text-xl",        gap: "gap-2.5" },
    md: { iconW: 32, iconH: 36, fontSize: "text-[1.75rem]", gap: "gap-3"   },
    lg: { iconW: 42, iconH: 48, fontSize: "text-[2.2rem]",  gap: "gap-4"   },
  };
  const c = configs[size];

  return (
    <div className={`flex items-center ${c.gap}`}>

      {/* Original house icon */}
      <svg
        width={c.iconW}
        height={c.iconH}
        viewBox="0 0 36 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M1 22 L18 4 L35 22" stroke={GOLD} strokeWidth="2.6" strokeLinejoin="miter" strokeLinecap="square" />
        <line x1="3.3"  y1="22" x2="3.3"  y2="36" stroke={wallColor} strokeWidth="2.4" strokeLinecap="square" />
        <line x1="32.7" y1="22" x2="32.7" y2="36" stroke={wallColor} strokeWidth="2.4" strokeLinecap="square" />
        <line x1="0"    y1="36" x2="36"   y2="36" stroke={wallColor} strokeWidth="1.8" strokeLinecap="square" />
        <rect x="14" y="26" width="8" height="10" fill={GOLD} />
        <circle cx="18" cy="4" r="1.8" fill={GOLD} />
      </svg>

      {/* HERLA — bolder, wider, more presence */}
      <span
        className={`font-display font-extrabold ${c.fontSize} uppercase leading-none tracking-[0.14em]`}
        style={{ color: textColor, letterSpacing: "0.14em" }}
      >
        HERLA
      </span>

    </div>
  );
}
