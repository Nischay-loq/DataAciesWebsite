"use client";

import { motion } from "motion/react";
import { Compass, Target } from "lucide-react";

const cards = [
  {
    headline: "Our Mission",
    content:
      "By assisting businesses in utilizing the most cutting-edge digital transformation technologies, we help significantly improve efficiency, accelerate innovation, and drive measurable business outcomes.",
    icon: Target,
  },
  {
    headline: "Our Vision",
    content:
      "To become one of the world's leading business consulting and technology transformation firms, delivering innovations that advance how people live and work.",
    icon: Compass,
  },
] as const;

export function MissionVision() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[oklch(0.09_0.018_260)] py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-6 px-container-x lg:grid-cols-2">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.article
              key={card.headline}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.58, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-primary/20 bg-[radial-gradient(circle_at_75%_20%,rgba(59,130,246,0.18),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-9"
            >
              <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:34px_34px]" />
              <div className="relative flex size-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/12 text-primary shadow-[0_0_42px_rgba(59,130,246,0.18)]">
                <Icon className="size-7" aria-hidden />
              </div>
              <h2 className="relative mt-8 font-heading text-3xl font-semibold tracking-[-0.03em]">
                {card.headline}
              </h2>
              <p className="relative mt-5 font-support text-base leading-[1.8] text-muted-foreground sm:text-lg">
                {card.content}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
