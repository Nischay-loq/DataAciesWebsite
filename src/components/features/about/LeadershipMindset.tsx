"use client";

import { motion } from "motion/react";
import { Handshake, Lightbulb, TrendingUp } from "lucide-react";

const mindsets = [
  {
    title: "Business-Driven Technology",
    description: "Technology should create measurable business outcomes.",
    icon: TrendingUp,
  },
  {
    title: "Innovation with Purpose",
    description: "Innovation must solve real-world challenges.",
    icon: Lightbulb,
  },
  {
    title: "Long-Term Partnerships",
    description: "Success is achieved through lasting client relationships.",
    icon: Handshake,
  },
] as const;

export function LeadershipMindset() {
  return (
    <section
      aria-labelledby="thought-leadership-heading"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/40 to-white py-24 sm:py-28 border-b border-slate-200/70"
    >
      {/* Subtle radial wash */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(219,234,254,0.5),transparent_65%)]"
        aria-hidden="true"
      />
      {/* Faint blue dot-grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_center,#2563eb_1px,transparent_1px)] [background-size:28px_28px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading — Single large heading 'Thought Leadership' */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            id="thought-leadership-heading"
            className="font-heading text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Thought Leadership
          </h2>
        </motion.div>

        {/* 3 Cards Grid */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {mindsets.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-blue-100 bg-gradient-to-br from-white via-blue-50/20 to-blue-50/50 p-8 shadow-md transition-all duration-300 ease-out hover:border-blue-300/80 hover:shadow-xl hover:shadow-blue-500/15"
              >
                {/* Solid/gradient blue rounded-2xl icon badge */}
                <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-[#ffffff] shadow-md shadow-blue-500/20 transition-transform duration-300 ease-out group-hover:scale-[1.08]">
                  <Icon className="size-7 stroke-[2.2]" aria-hidden="true" />
                </div>

                <h3 className="mt-6 font-heading text-2xl font-bold tracking-tight text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
