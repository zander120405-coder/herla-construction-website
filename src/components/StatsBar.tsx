import {
  CalendarDays,
  BarChart3,
  ShieldCheck,
  MapPin,
  UserRoundCheck,
} from "lucide-react";

const stats = [
  {
    icon: CalendarDays,
    title: "EST. 1993",
    detail: "30+ Years Experience",
  },
  {
    icon: BarChart3,
    title: "PROJECTS UP TO R10M",
    detail: "Commercial, Residential & Industrial",
  },
  {
    icon: ShieldCheck,
    title: "END-TO-END DELIVERY",
    detail: "From planning to completion",
  },
  {
    icon: MapPin,
    title: "PRETORIA, GAUTENG",
    detail: "South Africa",
  },
  {
    icon: UserRoundCheck,
    title: "PROFESSIONAL LOSS ADJUSTER",
    detail: "ILASA registered loss adjuster with expertise in reinstatement",
  },
];

export function StatsBar() {
  return (
    <section className="relative z-30 h-[105px] flex-shrink-0 border-t border-white/10 bg-[#06111f]">
      <div className="mx-auto h-full max-w-[1600px] px-6">
        <div className="grid h-full grid-cols-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className={`flex items-center gap-4 px-5 ${
                  index !== 0 ? "border-l border-white/10" : ""
                }`}
              >
                <Icon
                  strokeWidth={1.8}
                  className="h-8 w-8 flex-shrink-0 text-[#0874ff]"
                />

                <div>
                  <div className="text-[11px] font-extrabold uppercase leading-tight text-white">
                    {stat.title}
                  </div>

                  <div className="mt-1 text-[10px] leading-snug text-white/65">
                    {stat.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
