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
    detail: "Commercial & Industrial",
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
    detail: "ILASA registered • Insurance reinstatement",
  },
];

export function StatsBar() {
  return (
    <section className="relative z-20 border-t border-white/10 bg-[#06111f]">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-2 divide-x divide-white/10 lg:grid-cols-5">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="flex min-h-[92px] items-center gap-4 px-4 py-4 lg:px-5"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center">
                  <Icon
                    strokeWidth={1.8}
                    className="h-8 w-8 text-[#0869ff]"
                  />
                </div>

                <div className="min-w-0">
                  <div className="text-[11px] font-extrabold uppercase leading-tight tracking-[0.03em] text-white md:text-xs">
                    {stat.title}
                  </div>

                  <div className="mt-1 text-[10px] leading-snug text-white/65 md:text-[11px]">
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
