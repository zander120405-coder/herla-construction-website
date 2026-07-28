import { motion } from "framer-motion";
import { FileText, MapPin, MessageCircle, CalendarDays } from "lucide-react";

const stats = [
  {
    icon: FileText,
    value: "Free",
    label: "Quotations",
    detail: "No cost, no obligation — always",
  },
  {
    icon: MapPin,
    value: "Local",
    label: "Team",
    detail: "All of Gauteng covered",
  },
  {
    icon: MessageCircle,
    value: "Fast",
    label: "WhatsApp Response",
    detail: "Message us and we'll get back to you quickly",
  },
  {
    icon: CalendarDays,
    value: "Mon–Sat",
    label: "9am – 4pm",
    detail: "Available six days a week",
  },
];

export function StatsBar() {
  return (
    <section className="py-0 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-black/10 divide-y lg:divide-y-0">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-8"
              >
                <div className="w-12 h-12 bg-black/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#1A1A1A]" />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-[#1A1A1A] leading-none">{stat.value}</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-[#1A1A1A] mt-0.5">{stat.label}</div>
                  <div className="text-xs text-[#1A1A1A]/60 mt-0.5">{stat.detail}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
