"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Activity,
  AlertCircle,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  DatabaseZap,
  GitBranch,
  Headphones,
  Lightbulb,
  TrendingUp,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";

/* ─── Types & Data ─────────────────────────────────────────── */
type Challenge = {
  id: string;
  number: string;
  title: string;
  problem: string;
  solution: string;
  outcomes: readonly string[];
  icon: LucideIcon;
  color: string;
  badgeBg: string;
  glowColor: string;
};

const challenges: Challenge[] = [
  {
    id: "manual-operations",
    number: "01",
    title: "Manual & Repetitive Operations",
    problem: "Teams spend valuable time performing repetitive manual tasks.",
    solution:
      "Automate workflows and streamline operations using intelligent systems.",
    outcomes: ["Faster Processes", "Reduced Manual Effort", "Improved Productivity"],
    icon: Workflow,
    color: "text-blue-600",
    badgeBg: "bg-blue-50 border-blue-200 text-blue-600",
    glowColor: "shadow-blue-500/20",
  },
  {
    id: "support-bottlenecks",
    number: "02",
    title: "IT Support Bottlenecks",
    problem:
      "Growing ticket volumes overwhelm support teams and increase response times.",
    solution:
      "Use AI-powered service management and intelligent ticket routing.",
    outcomes: ["Faster Resolution", "Improved Service Quality", "Better Visibility"],
    icon: Headphones,
    color: "text-indigo-600",
    badgeBg: "bg-indigo-50 border-indigo-200 text-indigo-600",
    glowColor: "shadow-indigo-500/20",
  },
  {
    id: "data-quality-testing",
    number: "03",
    title: "Poor Data Quality & Testing",
    problem:
      "Inaccurate, incomplete, or inconsistent data delays software delivery.",
    solution:
      "Generate enterprise-grade test data and automate validation processes.",
    outcomes: ["Higher Quality", "Faster Testing", "Lower Risk"],
    icon: DatabaseZap,
    color: "text-cyan-600",
    badgeBg: "bg-cyan-50 border-cyan-200 text-cyan-600",
    glowColor: "shadow-cyan-500/20",
  },
  {
    id: "disconnected-systems",
    number: "04",
    title: "Disconnected Business Systems",
    problem: "Critical information is spread across multiple systems and teams.",
    solution:
      "Create unified data platforms and connected digital ecosystems.",
    outcomes: ["Unified Data", "Better Insights", "Improved Collaboration"],
    icon: GitBranch,
    color: "text-sky-600",
    badgeBg: "bg-sky-50 border-sky-200 text-sky-600",
    glowColor: "shadow-sky-500/20",
  },
  {
    id: "slow-decisions",
    number: "05",
    title: "Slow Decision Making",
    problem: "Organizations struggle to turn raw data into actionable insights.",
    solution:
      "Leverage AI, analytics, and intelligent automation to accelerate decisions.",
    outcomes: ["Real-Time Insights", "Faster Decisions", "Business Agility"],
    icon: BarChart3,
    color: "text-blue-700",
    badgeBg: "bg-blue-50 border-blue-300 text-blue-700",
    glowColor: "shadow-blue-600/20",
  },
  {
    id: "scaling-operations",
    number: "06",
    title: "Scaling Enterprise Operations",
    problem: "Growth creates operational complexity and process inefficiencies.",
    solution:
      "Deploy scalable digital platforms designed for enterprise expansion.",
    outcomes: ["Scalability", "Operational Efficiency", "Future Readiness"],
    icon: TrendingUp,
    color: "text-emerald-600",
    badgeBg: "bg-emerald-50 border-emerald-200 text-emerald-600",
    glowColor: "shadow-emerald-500/20",
  },
];

export function WhatWeSolveSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(0);

  // Desktop Card Render Helper
  const renderDesktopCard = (index: number, side: "left" | "right") => {
    const item = challenges[index];
    const Icon = item.icon;
    const isHovered = hoveredIndex === index;
    const isOtherHovered = hoveredIndex !== null && !isHovered;

    return (
      <motion.div
        key={item.id}
        layout
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        animate={{
          scale: isHovered ? 1.03 : isOtherHovered ? 0.98 : 1,
          opacity: isOtherHovered ? 0.7 : 1,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "relative rounded-2xl border bg-white p-5.5 transition-all duration-300 cursor-pointer select-none",
          isHovered
            ? "z-30 border-blue-500 shadow-[0_18px_40px_rgba(37,99,235,0.2)] ring-2 ring-blue-500/20"
            : "z-10 border-slate-200 shadow-md hover:border-blue-300"
        )}
      >
        {/* Top Badge Number (01..06) */}
        <div className={cn("absolute top-4", side === "left" ? "left-4" : "right-4")}>
          <span className="flex size-8 items-center justify-center rounded-full bg-blue-600 text-sm font-extrabold text-white shadow-xs">
            {item.number}
          </span>
        </div>

        {/* Header Info */}
        <div className={cn("flex items-start gap-4", side === "left" ? "pl-10" : "pr-10")}>
          <div className={cn("flex size-12 shrink-0 items-center justify-center rounded-xl border shadow-xs", item.badgeBg)}>
            <Icon className="size-6" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-950 leading-snug">
              {item.title}
            </h3>
            <p className="mt-1.5 text-sm text-slate-700 font-medium leading-relaxed">
              {item.problem}
            </p>

            {/* Default Single Outcome Tag */}
            {!isHovered && (
              <div className="mt-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200/80 px-3 py-1 text-xs sm:text-sm font-bold text-blue-700">
                  <span className="text-blue-500">↗</span>
                  Outcome: {item.outcomes[0]}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Revealed Expanded Detail Content */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: 8 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden mt-5 pt-4 border-t border-slate-100 space-y-3.5 text-left"
            >
              {/* Complete Problem */}
              <div className="rounded-xl border border-rose-200/80 bg-rose-50/80 p-3.5">
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-rose-700">
                  <AlertCircle className="size-4 text-rose-600" />
                  Problem
                </span>
                <p className="mt-1.5 text-sm sm:text-base font-semibold leading-relaxed text-slate-900">
                  &ldquo;{item.problem}&rdquo;
                </p>
              </div>

              {/* Complete Solution */}
              <div className="rounded-xl border border-blue-200/80 bg-blue-50/80 p-3.5">
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700">
                  <Lightbulb className="size-4 text-blue-600" />
                  How Data Acies Solves It
                </span>
                <p className="mt-1.5 text-sm sm:text-base font-semibold leading-relaxed text-slate-900">
                  {item.solution}
                </p>
              </div>

              {/* All Business Outcomes Tags */}
              <div className="pt-1">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600 block mb-2">
                  Business Outcomes
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.outcomes.map((outcome) => (
                    <span
                      key={outcome}
                      className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1.5 text-xs sm:text-sm font-bold text-white shadow-xs"
                    >
                      <CheckCircle2 className="size-4 text-blue-200" />
                      {outcome}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <section
      id="what-we-solve"
      aria-labelledby="what-we-solve-heading"
      className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24"
    >
      {/* Background Decor */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[550px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(219,234,254,0.45),transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#93c5fd_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.08] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"
        aria-hidden="true"
      />

      {/* Soft Blurred Orbs */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-10 size-96 rounded-full bg-blue-400/15 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-40 size-80 rounded-full bg-sky-300/15 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <Container size="wide" className="relative">
        {/* ── Section Header ─────────────────────────────── */}
        <div className="mb-12 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 text-left"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-300/80 bg-white/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 shadow-[0_4px_16px_rgba(37,99,235,0.12)] ring-1 ring-blue-400/20 backdrop-blur-md">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
              </span>
              <span>What We Solve</span>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="inline-flex"
              >
                <Activity className="size-4 text-blue-500" />
              </motion.span>
            </div>

            {/* Heading */}
            <h2
              id="what-we-solve-heading"
              className="mt-5 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-[-0.035em] text-slate-950"
            >
              Solving operational problems before they become{" "}
              <span className="relative inline-block text-blue-600">
                growth barriers
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -inset-x-1 bottom-1 h-3.5 origin-left -z-10 rounded-sm bg-gradient-to-r from-blue-200/80 via-sky-300/70 to-blue-300/80"
                  aria-hidden="true"
                />
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 text-left"
          >
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
              Modern organizations face fragmented systems, manual processes, data
              quality issues, and decision delays. Data Acies turns these into
              practical transformation opportunities.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-blue-100/90 bg-gradient-to-br from-blue-50/80 via-white to-sky-50/60 p-4 shadow-sm backdrop-blur-sm">
              <div className="border-r border-blue-100 pr-3">
                <span className="font-heading text-3xl lg:text-4xl font-extrabold text-blue-600 tracking-tight block">
                  6
                </span>
                <span className="text-sm font-bold text-slate-800 leading-tight block mt-0.5">
                  Critical Bottlenecks
                </span>
                <span className="text-xs text-slate-500 font-medium block mt-0.5">
                  Solved End-to-End
                </span>
              </div>
              <div className="pl-1">
                <span className="font-heading text-3xl lg:text-4xl font-extrabold text-blue-600 tracking-tight block">
                  1
                </span>
                <span className="text-sm font-bold text-slate-800 leading-tight block mt-0.5">
                  Unified Platform
                </span>
                <span className="text-xs text-slate-500 font-medium block mt-0.5">
                  Intelligent Transformation
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── DESKTOP HUB-AND-SPOKE DIAGRAM (lg+) ─────────────── */}
        <div className="hidden lg:relative lg:block py-6 min-h-[660px]">
          <div className="relative mx-auto max-w-6xl grid grid-cols-[1fr_360px_1fr] gap-8 items-center">
            {/* SVG Connecting Lines Canvas */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full overflow-visible z-0"
              viewBox="0 0 1100 640"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="active-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
                <filter id="blue-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* 01: Left Top to Center Top-Left */}
              <motion.path
                d="M 330 110 C 400 110, 420 220, 460 230"
                stroke={hoveredIndex === 0 ? "url(#active-line-gradient)" : "#cbd5e1"}
                strokeWidth={hoveredIndex === 0 ? 3.5 : 1.5}
                strokeDasharray={hoveredIndex === 0 ? "none" : "4 4"}
                opacity={hoveredIndex === null || hoveredIndex === 0 ? 1 : 0.3}
                filter={hoveredIndex === 0 ? "url(#blue-glow)" : undefined}
                transition={{ duration: 0.3 }}
              />
              {/* 02: Left Mid to Center Mid-Left */}
              <motion.path
                d="M 330 320 L 440 320"
                stroke={hoveredIndex === 1 ? "url(#active-line-gradient)" : "#cbd5e1"}
                strokeWidth={hoveredIndex === 1 ? 3.5 : 1.5}
                strokeDasharray={hoveredIndex === 1 ? "none" : "4 4"}
                opacity={hoveredIndex === null || hoveredIndex === 1 ? 1 : 0.3}
                filter={hoveredIndex === 1 ? "url(#blue-glow)" : undefined}
                transition={{ duration: 0.3 }}
              />
              {/* 03: Left Bot to Center Bot-Left */}
              <motion.path
                d="M 330 530 C 400 530, 420 420, 460 410"
                stroke={hoveredIndex === 2 ? "url(#active-line-gradient)" : "#cbd5e1"}
                strokeWidth={hoveredIndex === 2 ? 3.5 : 1.5}
                strokeDasharray={hoveredIndex === 2 ? "none" : "4 4"}
                opacity={hoveredIndex === null || hoveredIndex === 2 ? 1 : 0.3}
                filter={hoveredIndex === 2 ? "url(#blue-glow)" : undefined}
                transition={{ duration: 0.3 }}
              />

              {/* 04: Right Top to Center Top-Right */}
              <motion.path
                d="M 770 110 C 700 110, 680 220, 640 230"
                stroke={hoveredIndex === 3 ? "url(#active-line-gradient)" : "#cbd5e1"}
                strokeWidth={hoveredIndex === 3 ? 3.5 : 1.5}
                strokeDasharray={hoveredIndex === 3 ? "none" : "4 4"}
                opacity={hoveredIndex === null || hoveredIndex === 3 ? 1 : 0.3}
                filter={hoveredIndex === 3 ? "url(#blue-glow)" : undefined}
                transition={{ duration: 0.3 }}
              />
              {/* 05: Right Mid to Center Mid-Right */}
              <motion.path
                d="M 770 320 L 660 320"
                stroke={hoveredIndex === 4 ? "url(#active-line-gradient)" : "#cbd5e1"}
                strokeWidth={hoveredIndex === 4 ? 3.5 : 1.5}
                strokeDasharray={hoveredIndex === 4 ? "none" : "4 4"}
                opacity={hoveredIndex === null || hoveredIndex === 4 ? 1 : 0.3}
                filter={hoveredIndex === 4 ? "url(#blue-glow)" : undefined}
                transition={{ duration: 0.3 }}
              />
              {/* 06: Right Bot to Center Bot-Right */}
              <motion.path
                d="M 770 530 C 700 530, 680 420, 640 410"
                stroke={hoveredIndex === 5 ? "url(#active-line-gradient)" : "#cbd5e1"}
                strokeWidth={hoveredIndex === 5 ? 3.5 : 1.5}
                strokeDasharray={hoveredIndex === 5 ? "none" : "4 4"}
                opacity={hoveredIndex === null || hoveredIndex === 5 ? 1 : 0.3}
                filter={hoveredIndex === 5 ? "url(#blue-glow)" : undefined}
                transition={{ duration: 0.3 }}
              />
            </svg>

            {/* Left Cards (01, 02, 03) */}
            <div className="relative z-10 flex flex-col gap-6">
              {[0, 1, 2].map((idx) => renderDesktopCard(idx, "left"))}
            </div>

            {/* Center Circle Hub (Larger text & roomier circle) */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="relative flex size-80 sm:size-84 lg:size-88 items-center justify-center rounded-full border-2 border-blue-200/90 bg-white/95 p-8 text-center shadow-[0_0_70px_rgba(37,99,235,0.16)] backdrop-blur-md">
                {/* Decorative Concentric Rings */}
                <div className="pointer-events-none absolute -inset-5 rounded-full border border-dashed border-blue-300/60 animate-[spin_60s_linear_infinite]" />
                <div className="pointer-events-none absolute -inset-10 rounded-full border border-blue-100/50" />
                
                {/* Connector Node Dots on Outer Ring */}
                {[
                  { top: "25%", left: "4%", idx: 0 },
                  { top: "50%", left: "0%", idx: 1 },
                  { top: "75%", left: "4%", idx: 2 },
                  { top: "25%", right: "4%", idx: 3 },
                  { top: "50%", right: "0%", idx: 4 },
                  { top: "75%", right: "4%", idx: 5 },
                ].map((node) => (
                  <span
                    key={node.idx}
                    className={cn(
                      "absolute size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300",
                      hoveredIndex === node.idx
                        ? "scale-150 border-blue-600 bg-blue-600 ring-4 ring-blue-300 shadow-md shadow-blue-500/50"
                        : "border-blue-500 bg-white shadow-xs"
                    )}
                    style={{ top: node.top, left: node.left, right: node.right }}
                  />
                ))}

                {/* Center Branding with Enlarged Text */}
                <div className="flex flex-col items-center justify-center">
                  <div className="relative h-16 w-48">
                    <Image
                      src="/data-acies-logo.jpeg"
                      alt="Data Acies Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <p className="mt-3 text-sm sm:text-base font-extrabold uppercase tracking-wider text-blue-700">
                    Intelligent Solutions.
                  </p>
                  <p className="mt-0.5 text-xs sm:text-sm font-bold text-slate-600">
                    Measurable Impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Cards (04, 05, 06) */}
            <div className="relative z-10 flex flex-col gap-6">
              {[3, 4, 5].map((idx) => renderDesktopCard(idx, "right"))}
            </div>
          </div>
        </div>

        {/* ── MOBILE STACKED LIST LAYOUT (< lg) ───────────── */}
        <div className="flex flex-col gap-4 lg:hidden mt-6">
          {challenges.map((item, index) => {
            const Icon = item.icon;
            const isExpanded = mobileExpandedIndex === index;

            return (
              <div
                key={item.id}
                className={cn(
                  "overflow-hidden rounded-2xl border transition-all duration-300 bg-white",
                  isExpanded
                    ? "border-blue-500 shadow-lg ring-2 ring-blue-500/20"
                    : "border-slate-200 shadow-sm hover:border-blue-300"
                )}
              >
                {/* Accordion Card Header */}
                <button
                  onClick={() => setMobileExpandedIndex(isExpanded ? null : index)}
                  className="flex w-full items-start justify-between p-4.5 text-left outline-none"
                >
                  <div className="flex items-start gap-4 pr-2">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-extrabold text-white shadow-xs">
                      {item.number}
                    </span>
                    <div
                      className={cn(
                        "flex size-12 shrink-0 items-center justify-center rounded-xl border shadow-xs",
                        item.badgeBg
                      )}
                    >
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-slate-950 leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-slate-700 font-medium leading-relaxed">
                        {item.problem}
                      </p>

                      {/* Single Outcome Tag in collapsed state */}
                      {!isExpanded && (
                        <div className="mt-3">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200/80 px-3 py-1 text-xs font-bold text-blue-700">
                            <span className="text-blue-500">↗</span>
                            Outcome: {item.outcomes[0]}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      "size-5 text-slate-400 transition-transform duration-300 shrink-0 mt-1",
                      isExpanded && "rotate-180 text-blue-600"
                    )}
                  />
                </button>

                {/* Expanded Accordion Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden border-t border-slate-100 bg-slate-50/50 p-4.5 sm:p-6 space-y-4"
                    >
                      {/* Problem */}
                      <div className="rounded-xl border border-rose-200/80 bg-rose-50/80 p-4">
                        <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-rose-700">
                          <AlertCircle className="size-4 text-rose-600" />
                          THE PROBLEM
                        </span>
                        <p className="mt-1.5 text-sm sm:text-base font-semibold leading-relaxed text-slate-900">
                          &ldquo;{item.problem}&rdquo;
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="rounded-xl border border-blue-200/80 bg-blue-50/80 p-4">
                        <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700">
                          <Lightbulb className="size-4 text-blue-600" />
                          HOW DATA ACIES SOLVES IT
                        </span>
                        <p className="mt-1.5 text-sm sm:text-base font-semibold leading-relaxed text-slate-900">
                          {item.solution}
                        </p>
                      </div>

                      {/* Outcomes */}
                      <div>
                        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600 block mb-2">
                          Business Outcomes
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {item.outcomes.map((outcome) => (
                            <span
                              key={outcome}
                              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-1.5 text-xs sm:text-sm font-bold text-white shadow-xs"
                            >
                              <CheckCircle2 className="size-4 text-blue-200" />
                              {outcome}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ── Bottom CTA Banner ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 overflow-hidden rounded-3xl border border-blue-100/60 bg-gradient-to-br from-white to-blue-50/60 p-8 shadow-md lg:p-10"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="font-heading text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Every challenge is an opportunity for transformation
              </h3>
              <p className="mt-3 max-w-2xl text-slate-600">
                Our products, platforms, and services solve real business
                problems while creating measurable outcomes.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={ROUTES.products}
                className={cn(buttonVariants(), "rounded-full px-6")}
              >
                Explore Products
              </Link>
              <Link
                href={`${ROUTES.contact}#contact-section`}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "rounded-full border-slate-300 bg-white px-6 text-slate-800"
                )}
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
