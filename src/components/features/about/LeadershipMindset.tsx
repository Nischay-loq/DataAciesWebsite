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
      aria-labelledby="leadership-mindset-heading"
      className="relative overflow-hidden border-t border-white/5 bg-[oklch(0.09_0.018_260)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-container-x">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Leadership Mindset
          </p>
          <h2
            id="leadership-mindset-heading"
            className="mt-4 font-heading text-3xl font-semibold tracking-[-0.03em] sm:text-4xl"
          >
            How We Think
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {mindsets.map((mindset, index) => {
            const Icon = mindset.icon;
            return (
              <motion.article
                key={mindset.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-primary/30"
              >
                <Icon className="size-8 text-primary" aria-hidden />
                <h3 className="mt-6 font-heading text-xl font-semibold">
                  {mindset.title}
                </h3>
                <p className="mt-3 font-support text-sm leading-relaxed text-muted-foreground">
                  {mindset.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
