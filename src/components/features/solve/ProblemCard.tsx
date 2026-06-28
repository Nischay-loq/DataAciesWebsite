"use client";

import { motion, type Variants } from "motion/react";
import type { LucideIcon } from "lucide-react";

export type ProblemVisual =
  | "workflow"
  | "tickets"
  | "data-quality"
  | "systems"
  | "decisions"
  | "scale";

export type ProblemChallenge = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  outcomes: readonly string[];
  visual: ProblemVisual;
  icon: LucideIcon;
};

export const problemCardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export function ProblemCard({ challenge }: { challenge: ProblemChallenge }) {
  const Icon = challenge.icon;

  return (
    <motion.article
      variants={problemCardVariants}
      whileHover={{ y: -4 }}
      tabIndex={0}
      aria-labelledby={`${challenge.id}-title`}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm outline-none transition hover:shadow-lg focus-visible:ring-2 focus-visible:ring-primary/40"
    >
      <div className="flex size-11 items-center justify-center rounded-2xl bg-blue-50 text-primary">
        <Icon className="size-5" aria-hidden />
      </div>
      <h3 id={`${challenge.id}-title`} className="mt-6 font-heading text-xl font-semibold text-slate-950">
        {challenge.title}
      </h3>
      <dl className="mt-5 space-y-4 text-sm leading-6">
        <div>
          <dt className="font-semibold text-slate-950">Problem</dt>
          <dd className="mt-1 text-slate-600">{challenge.problem}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-950">How Data Acies solves it</dt>
          <dd className="mt-1 text-slate-600">{challenge.solution}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-950">Business outcome</dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {challenge.outcomes.map((outcome) => (
              <span key={outcome} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                {outcome}
              </span>
            ))}
          </dd>
        </div>
      </dl>
    </motion.article>
  );
}
