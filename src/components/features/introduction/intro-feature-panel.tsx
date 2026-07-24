"use client";

import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type IntroFeaturePanelProps = {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
};

export function IntroFeaturePanel({
  icon,
  title,
  description,
  index,
}: IntroFeaturePanelProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative flex h-full min-h-[220px] w-[22rem] shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 text-left shadow-md shadow-blue-950/[0.04] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-blue-400 hover:ring-2 hover:ring-blue-500/20 hover:shadow-xl hover:shadow-blue-500/15 sm:w-[26rem] sm:p-7"
      )}
    >
      {/* Top Accent Line */}
      <div
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-blue-600 via-sky-400 to-transparent transition-all duration-300 group-hover:h-1"
        aria-hidden="true"
      />
      
      {/* Subtle Inner Glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col gap-4">
        {/* Upgraded Icon Container */}
        <div className="flex justify-start">
          <div className="flex size-14 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 via-sky-50/60 to-white text-blue-600 shadow-xs transition-transform duration-300 group-hover:scale-105 sm:size-16">
            {icon}
          </div>
        </div>

        {/* Title & Description with Large Clear Readability */}
        <div className="mt-1">
          <h3 className="font-heading text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
            {title}
          </h3>
          <p className="mt-3 text-base font-medium leading-relaxed text-slate-700 sm:text-[1.05rem]">
            {description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
