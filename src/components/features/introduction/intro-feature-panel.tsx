"use client";

import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type IntroFeaturePanelProps = {
  icon: ReactNode;
  title: string;
  description: string;
  supporting: string;
  reverse?: boolean;
  index: number;
};

export function IntroFeaturePanel({
  icon,
  title,
  description,
  supporting,
  reverse = false,
  index,
}: IntroFeaturePanelProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
        transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "group relative grid items-center gap-8 overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white/80 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-200/80 hover:bg-white hover:shadow-[0_18px_44px_rgba(15,23,42,0.08)] sm:p-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10",
        )}
      >
        <div
          className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[linear-gradient(90deg,rgba(0,0,0,0),rgba(125,211,252,0.85),rgba(0,0,0,0))] transition-transform duration-500 group-hover:scale-x-100"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_45%)] opacity-70"
          aria-hidden
        />

        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.12 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "relative flex justify-center lg:justify-start",
            reverse && "lg:order-2 lg:justify-end",
          )}
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex size-24 items-center justify-center rounded-[1.5rem] border border-blue-100 bg-[linear-gradient(180deg,rgba(239,246,255,0.96),rgba(255,255,255,0.92))] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition-colors duration-300 group-hover:border-blue-200 group-hover:bg-blue-50 sm:size-28"
          >
            <span
              className="absolute inset-3 rounded-[1.1rem] border border-blue-100/70 opacity-60"
              aria-hidden
            />
            <motion.span
              animate={isInView ? { y: [0, -2, 0] } : { y: 0 }}
              transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {icon}
            </motion.span>
          </motion.div>
        </motion.div>

        <div className={cn("relative", reverse && "lg:order-1")}
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.65, delay: 0.2 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 h-0.5 w-14 origin-left rounded-full bg-[linear-gradient(90deg,rgba(37,99,235,1),rgba(125,211,252,1),rgba(0,0,0,0))] transition-all duration-500 group-hover:w-20"
            aria-hidden
          />
          <h3 className="font-heading text-xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-[1.7rem]">
            {title}
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={isInView ? { opacity: 0, y: 6 } : { opacity: 0, y: 6 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-sm leading-6 text-slate-500 opacity-0 translate-y-1 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            {supporting}
          </motion.p>
        </div>
      </motion.article>
  );
}
