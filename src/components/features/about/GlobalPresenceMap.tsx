"use client";

import { motion } from "motion/react";
import { Building2, MapPin } from "lucide-react";

const locations = [
  {
    city: "Dallas, TX",
    role: "Global HQ",
    description: "Executive Leadership & Client Strategy",
    type: "hq" as const,
    icon: Building2,
  },
  {
    city: "Hyderabad",
    role: "Delivery Center",
    description: "Cloud Engineering & AI R&D Hub",
    type: "delivery" as const,
    icon: MapPin,
  },
  {
    city: "Mumbai",
    role: "Delivery Center",
    description: "Digital Operations & Workflows",
    type: "delivery" as const,
    icon: MapPin,
  },
  {
    city: "Chennai",
    role: "Delivery Center",
    description: "Software Assurance & Quality Engineering",
    type: "delivery" as const,
    icon: MapPin,
  },
];

export function GlobalPresenceMap() {
  return (
    <section
      aria-labelledby="global-presence-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24 border-b border-slate-200/80"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2563EB]">
            Global Presence
          </p>
          <h2
            id="global-presence-heading"
            className="mt-3 font-heading text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl"
          >
            Strategic presence with global delivery capability
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            Data Acies combines executive proximity in North America with
            high-capacity engineering centers across India.
          </p>
        </motion.div>

        {/* 4 Location Cards Row / Responsive Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((loc, index) => {
            const Icon = loc.icon;
            const isHq = loc.type === "hq";

            return (
              <motion.article
                key={loc.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className={`group relative flex flex-col justify-between rounded-xl border p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                  isHq
                    ? "border-amber-200/90 bg-gradient-to-b from-slate-50 via-white to-amber-50/20"
                    : "border-slate-200 bg-gradient-to-b from-white to-blue-50/30"
                }`}
              >
                {/* Accent top border */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 rounded-t-xl ${
                    isHq ? "bg-amber-400" : "bg-[#2563EB]"
                  }`}
                  aria-hidden="true"
                />

                <div>
                  {/* Top row: Icon badge + Label Tag */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex size-11 items-center justify-center rounded-xl ${
                        isHq
                          ? "bg-[#0B1739] text-amber-400 shadow-sm"
                          : "bg-blue-50 text-[#2563EB] border border-blue-100"
                      }`}
                    >
                      <Icon className="size-5 stroke-[2.2]" />
                    </div>

                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[0.65rem] font-extrabold uppercase tracking-wider ${
                        isHq
                          ? "bg-[#0B1739] text-amber-300"
                          : "bg-blue-50 text-[#1D4ED8] border border-blue-200/60"
                      }`}
                    >
                      {loc.role}
                    </span>
                  </div>

                  {/* Location Title */}
                  <h3 className="mt-5 font-heading text-xl font-bold tracking-tight text-slate-900">
                    {loc.city}
                  </h3>

                  {/* Short Role / Detail */}
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {loc.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
