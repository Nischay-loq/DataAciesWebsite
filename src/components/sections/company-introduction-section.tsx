"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Building2, Cloud, CircuitBoard, Network } from "lucide-react";
import { Container } from "@/components/layout/container";
import { IntroFeaturePanel } from "@/components/features/introduction/intro-feature-panel";

const features = [
  {
    icon: <Cloud className="size-10 sm:size-11" strokeWidth={1.5} />,
    title: "Cloud, Data Engineering & Site Reliability Engineering",
    description:
      "Scalable cloud platforms and modern data engineering built for reliability.",
  },
  {
    icon: <Building2 className="size-10 sm:size-11" strokeWidth={1.5} />,
    title: "Technology Consulting & Strategic Staffing",
    description:
      "Specialized consulting and staffing that help teams move faster.",
  },
  {
    icon: <Network className="size-10 sm:size-11" strokeWidth={1.5} />,
    title: "Innovation Through the Right Technology Landscape",
    description:
      "Practical innovation aligned to the right platforms and outcomes.",
  },
] as const;

function TitleReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="mx-auto max-w-5xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mb-5 inline-flex items-center gap-3 rounded-full border border-blue-200/70 bg-white/80 px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-primary shadow-[0_8px_20px_rgba(15,23,42,0.04)]"
      >
        <CircuitBoard className="size-3.5" aria-hidden />
        Welcome to Data Acies
      </motion.div>

      <motion.div
        initial={{ gap: "0.25rem", marginBottom: "1rem" }}
        animate={isInView ? { gap: "1.25rem", marginBottom: "2.5rem" } : { gap: "0.25rem", marginBottom: "1rem" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-wrap items-center justify-center"
      >
        <motion.span
          initial={{ x: 0, opacity: 1, letterSpacing: "0.08em" }}
          animate={isInView ? { x: -14, letterSpacing: "0.18em" } : { x: 0, letterSpacing: "0.08em" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-[clamp(2.1rem,6vw,4.8rem)] font-semibold tracking-[0.08em] text-slate-950"
        >
          WELCOME TO
        </motion.span>
        <motion.span
          initial={{ x: 0, opacity: 1, letterSpacing: "0.08em" }}
          animate={isInView ? { x: 14, letterSpacing: "0.18em" } : { x: 0, letterSpacing: "0.08em" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-[clamp(2.1rem,6vw,4.8rem)] font-semibold tracking-[0.08em] text-primary"
        >
          DATA ACIES
        </motion.span>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto h-px w-full max-w-3xl origin-center bg-linear-to-r from-transparent via-sky-300 to-transparent"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.65, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 space-y-6 lg:space-y-0"
      >
        <div className="relative mx-auto max-w-6xl overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" aria-hidden />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-[linear-gradient(270deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" aria-hidden />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="flex w-max transform-gpu gap-5 pb-3 will-change-transform"
          >
            {features.concat(features).map((feature, index) => (
              <IntroFeaturePanel
                key={`${feature.title}-${index}`}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export function CompanyIntroductionSection() {
  return (
    <section
      id="company-introduction"
      aria-labelledby="company-intro-heading"
      className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(248,250,252,1)_22%,rgba(244,248,255,0.9)_100%)] py-20 sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.14),transparent_68%)]"
        aria-hidden
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-8 top-20 hidden size-56 transform-gpu rounded-full border border-blue-100/70 bg-blue-100/20 blur-2xl will-change-transform lg:block"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 hidden size-72 transform-gpu rounded-full border border-sky-100/70 bg-sky-100/20 blur-3xl will-change-transform lg:block"
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container size="wide">
        <p id="company-intro-heading" className="sr-only">
          Welcome to Data Acies
        </p>
        <TitleReveal />
      </Container>
    </section>
  );
}
