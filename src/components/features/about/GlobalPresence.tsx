"use client";

import { motion } from "motion/react";
import { Building2, MapPin } from "lucide-react";

const locations = [
  { city: "Dallas, Texas", role: "Headquarters" },
  { city: "Hyderabad, India", role: "Delivery Center" },
  { city: "Chennai, India", role: "Delivery Center" },
  { city: "Mumbai, India", role: "Delivery Center" },
] as const;

export function GlobalPresence() {
  return (
    <section
      aria-labelledby="global-presence-heading"
      className="relative overflow-hidden border-t border-white/5 bg-[oklch(0.075_0.018_260)] py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.13] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:28px_28px]" />
      <svg
        className="pointer-events-none absolute inset-x-0 top-16 h-[420px] w-full opacity-25"
        viewBox="0 0 1200 420"
        preserveAspectRatio="none"
        aria-hidden
      >
        <motion.path
          d="M80 210 C260 70 360 330 520 190 S790 70 940 220 S1110 310 1160 170"
          fill="none"
          stroke="rgba(34,211,238,0.42)"
          strokeWidth="1.2"
          strokeLinecap="round"
          animate={{ pathLength: [0.25, 1, 0.25], opacity: [0.22, 0.68, 0.22] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      <div className="relative mx-auto max-w-6xl px-container-x">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Global Presence
          </p>
          <h2
            id="global-presence-heading"
            className="mt-4 font-heading text-3xl font-semibold tracking-[-0.03em] sm:text-4xl"
          >
            Built for Global Delivery
          </h2>
          <p className="mt-5 font-support text-base leading-relaxed text-muted-foreground">
            Data Acies combines strategic leadership with distributed delivery
            capability across the United States and India.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {locations.map((location, index) => (
            <motion.article
              key={location.city}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="absolute -right-14 -top-14 size-36 rounded-full bg-primary/15 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex size-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                {index === 0 ? <Building2 className="size-6" /> : <MapPin className="size-6" />}
              </div>
              <h3 className="relative mt-6 font-heading text-xl font-semibold">
                {location.city}
              </h3>
              <p className="relative mt-2 font-support text-sm text-cyan-100/70">
                {location.role}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
