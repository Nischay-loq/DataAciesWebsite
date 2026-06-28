"use client";

import { motion } from "motion/react";
import { HandHeart, ShieldCheck, Sparkles, Users } from "lucide-react";

const values = [
  {
    title: "Trust",
    description:
      "Building lasting relationships through transparency, reliability, and accountability.",
    icon: ShieldCheck,
  },
  {
    title: "Care",
    description:
      "Putting people first and ensuring client success at every stage of engagement.",
    icon: HandHeart,
  },
  {
    title: "Innovation",
    description:
      "Continuously exploring new technologies and approaches to create business value.",
    icon: Sparkles,
  },
  {
    title: "Customer First",
    description:
      "Every decision starts with understanding customer needs and delivering meaningful outcomes.",
    icon: Users,
  },
] as const;

export function CoreValues() {
  return (
    <section
      aria-labelledby="core-values-heading"
      className="relative overflow-hidden border-t border-white/5 bg-[oklch(0.075_0.018_260)] py-20 sm:py-24"
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
            Core Values
          </p>
          <h2
            id="core-values-heading"
            className="mt-4 font-heading text-3xl font-semibold tracking-[-0.03em] sm:text-4xl"
          >
            What We Stand For
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-colors hover:border-primary/30 hover:bg-primary/[0.04]"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary transition group-hover:shadow-[0_0_38px_rgba(59,130,246,0.2)]">
                  <Icon className="size-6" aria-hidden />
                </div>
                <h3 className="mt-6 font-heading text-xl font-semibold">
                  {value.title}
                </h3>
                <p className="mt-3 font-support text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
