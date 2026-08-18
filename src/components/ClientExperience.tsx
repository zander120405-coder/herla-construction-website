import { motion } from "framer-motion";
import { Building2, Landmark, ShieldCheck, Factory } from "lucide-react";

const clients = [
  {
    icon: Landmark,
    title: "World Bank – South Africa",
    description:
      "Building maintenance and shopfitting work for World Bank properties in South Africa.",
  },
  {
    icon: Building2,
    title: "French Embassy",
    description:
      "More than 10 years of maintenance work on Embassy properties in South Africa, including Herbert Baker buildings.",
  },
  {
    icon: ShieldCheck,
    title: "Compass Insurance Company",
    description:
      "Panel contractor for more than 10 years, specialising in rebuilding and reinstatement of fire-damaged properties.",
  },
  {
    icon: Factory,
    title: "Mozal – Mozambique",
    description:
      "Construction work including police stations in Maputo Province and low-cost housing in Matola.",
  },
];

export function ClientExperience() {
  return (
    <section className="py-20 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3 border-l-2 border-primary pl-3">
            Selected Client Experience
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase leading-[1.05] mb-5">
            Experience That
            <br />
            Speaks for Itself.
          </h2>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Herla has worked across institutional, diplomatic, insurance and
            industrial environments in South Africa and neighbouring regions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {clients.map((client, index) => {
            const Icon = client.icon;

            return (
              <motion.div
                key={client.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border border-border bg-background p-7 flex gap-5"
              >
                <div className="w-12 h-12 bg-secondary text-primary flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold uppercase tracking-wide mb-2">
                    {client.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
