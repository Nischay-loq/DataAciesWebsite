"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
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
  Pause,
  Play,
  Sparkles,
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

const AUTO_ADVANCE_INTERVAL = 5000;

export function WhatWeSolveSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(0);

  const activeChallenge = challenges[activeIndex];

  // Auto-advance timer logic
  const nextTab = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % challenges.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextTab();
    }, AUTO_ADVANCE_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, nextTab]);

  const handleSelectTab = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true); // Pause auto-advance on manual interaction
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

      {/* Large Soft Blurred Blue Ambient Shape behind header */}
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
        {/* ── Section Header (Asymmetric 2-Column Layout) ─── */}
        <div className="mb-12 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          {/* Left Column: Eyebrow + Large Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 text-left"
          >
            {/* Upgraded Eyebrow Badge — Live System Indicator feel */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-300/80 bg-white/90 px-3.5 py-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-blue-700 shadow-[0_4px_16px_rgba(37,99,235,0.12)] ring-1 ring-blue-400/20 backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span>What We Solve</span>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="inline-flex"
              >
                <Activity className="size-3.5 text-blue-500" />
              </motion.span>
            </div>

            {/* Impactful Heading with Bold Visual Anchor Word */}
            <h2
              id="what-we-solve-heading"
              className="mt-5 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-[-0.035em] text-slate-950"
            >
              Solving operational problems before they become{" "}
              <span className="relative inline-block text-blue-600">
                growth barriers
                {/* Marker Swipe Highlight Animation */}
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

          {/* Right Column: Subtext + Supporting Stat Callouts */}
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

            {/* Supporting Stat Callout Card */}
            <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-blue-100/90 bg-gradient-to-br from-blue-50/80 via-white to-sky-50/60 p-4 shadow-sm backdrop-blur-sm">
              <div className="border-r border-blue-100 pr-3">
                <span className="font-heading text-3xl lg:text-4xl font-extrabold text-blue-600 tracking-tight block">
                  6
                </span>
                <span className="text-xs font-bold text-slate-700 leading-tight block mt-0.5">
                  Critical Bottlenecks
                </span>
                <span className="text-[0.65rem] text-slate-500 font-medium block mt-0.5">
                  Solved End-to-End
                </span>
              </div>
              <div className="pl-1">
                <span className="font-heading text-3xl lg:text-4xl font-extrabold text-blue-600 tracking-tight block">
                  1
                </span>
                <span className="text-xs font-bold text-slate-700 leading-tight block mt-0.5">
                  Unified Platform
                </span>
                <span className="text-[0.65rem] text-slate-500 font-medium block mt-0.5">
                  Intelligent Transformation
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Interactive Module Container ───────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-50/90 via-blue-50/20 to-slate-50/90 p-4 sm:p-6 lg:p-8 shadow-xl shadow-slate-200/50 backdrop-blur-sm"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* ── DESKTOP TABBED LAYOUT (lg+) ─────────────── */}
          <div className="hidden lg:grid lg:grid-cols-[360px_1fr] lg:gap-8 lg:items-stretch">
            {/* Left Tabs List */}
            <div className="flex flex-col justify-between gap-2.5 rounded-2xl border border-slate-200/70 bg-white p-3 shadow-sm">
              <div className="space-y-2">
                <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 mb-1">
                  <span className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Select a Challenge
                  </span>
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[0.65rem] font-semibold text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-600"
                    title={isPaused ? "Resume auto-play" : "Pause auto-play"}
                  >
                    {isPaused ? (
                      <>
                        <Play className="size-2.5 fill-current" /> Auto-play
                      </>
                    ) : (
                      <>
                        <Pause className="size-2.5 fill-current" /> Paused
                      </>
                    )}
                  </button>
                </div>

                {challenges.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectTab(index)}
                      className={cn(
                        "group relative flex w-full items-center gap-3.5 rounded-xl p-3.5 text-left transition-all duration-300 outline-none",
                        isActive
                          ? "bg-blue-50/80 text-blue-900 font-semibold shadow-sm"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      )}
                    >
                      {/* Active Indicator Bar (Animated layoutId) */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="absolute inset-0 rounded-xl border border-blue-300/80 bg-blue-50/70 shadow-sm"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}

                      {/* Left vertical border accent */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTabPill"
                          className="absolute left-0 top-2 bottom-2 w-1.5 rounded-r-full bg-blue-600"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}

                      {/* Icon Badge */}
                      <div
                        className={cn(
                          "relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 shadow-sm",
                          isActive
                            ? `${item.badgeBg} ${item.glowColor} scale-105 shadow-md`
                            : "border-slate-200 bg-slate-100 text-slate-500 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600"
                        )}
                      >
                        <Icon className="size-5" />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[0.65rem] font-bold tracking-wider text-slate-400 group-hover:text-blue-500">
                            {item.number}
                          </span>
                          {isActive && (
                            <span className="inline-flex size-2 rounded-full bg-blue-600" />
                          )}
                        </div>
                        <p className="text-sm font-semibold leading-snug line-clamp-1">
                          {item.title}
                        </p>
                      </div>

                      {/* Active Progress Bar (5s timer) */}
                      {isActive && !isPaused && (
                        <motion.div
                          key={`progress-${activeIndex}`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: AUTO_ADVANCE_INTERVAL / 1000, ease: "linear" }}
                          className="absolute bottom-0 left-3 right-3 h-0.5 origin-left rounded-full bg-blue-500/60"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Detail Panel */}
            <div className="relative flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChallenge.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-1 flex-col justify-between"
                >
                  {/* Top Header info */}
                  <div>
                    <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
                      <div className="flex items-center gap-3.5">
                        <div
                          className={cn(
                            "flex size-12 items-center justify-center rounded-2xl border shadow-md",
                            activeChallenge.badgeBg,
                            activeChallenge.glowColor
                          )}
                        >
                          <activeChallenge.icon className="size-6" />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                            Challenge {activeChallenge.number} of 06
                          </span>
                          <h3 className="font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                            {activeChallenge.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* 2-Column or Stacked Cards: Problem vs How Data Acies Solves It */}
                    <div className="mt-6 grid gap-6">
                      {/* Problem Card */}
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="group relative overflow-hidden rounded-2xl border border-rose-200/80 bg-gradient-to-br from-rose-50/90 via-red-50/40 to-white p-6 shadow-sm"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-100/90 px-3 py-1 text-xs font-bold text-rose-700 shadow-xs">
                            <AlertCircle className="size-3.5 text-rose-600" />
                            THE PROBLEM
                          </span>
                        </div>
                        <p className="mt-3.5 text-base sm:text-lg font-semibold leading-relaxed text-slate-800">
                          &ldquo;{activeChallenge.problem}&rdquo;
                        </p>
                      </motion.div>

                      {/* Solution Card */}
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="group relative overflow-hidden rounded-2xl border border-blue-200/90 bg-gradient-to-br from-blue-50/90 via-sky-50/40 to-white p-6 shadow-sm ring-1 ring-blue-500/10"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-100/90 px-3 py-1 text-xs font-bold text-blue-700 shadow-xs">
                            <Lightbulb className="size-3.5 text-blue-600" />
                            HOW DATA ACIES SOLVES IT
                          </span>
                        </div>
                        <p className="mt-3.5 text-base sm:text-lg font-semibold leading-relaxed text-slate-800">
                          {activeChallenge.solution}
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Business Outcome Tags */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="mt-8 border-t border-slate-100 pt-6"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-3">
                      <TrendingUp className="size-3.5 text-blue-600" />
                      Measurable Business Outcomes
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {activeChallenge.outcomes.map((outcome, idx) => (
                        <motion.span
                          key={outcome}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.25, delay: 0.35 + idx * 0.08 }}
                          className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 text-xs font-bold text-white shadow-md shadow-blue-500/20"
                        >
                          <CheckCircle2 className="size-3.5 text-blue-200" />
                          {outcome}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ── MOBILE ACCORDION LAYOUT (< lg) ───────────── */}
          <div className="flex flex-col gap-3 lg:hidden">
            {challenges.map((item, index) => {
              const Icon = item.icon;
              const isExpanded = mobileExpandedIndex === index;

              return (
                <div
                  key={item.id}
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-all duration-300 bg-white",
                    isExpanded
                      ? "border-blue-300 shadow-md ring-1 ring-blue-400/20"
                      : "border-slate-200 shadow-xs hover:border-blue-200"
                  )}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => setMobileExpandedIndex(isExpanded ? null : index)}
                    className="flex w-full items-center justify-between p-4 text-left outline-none"
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={cn(
                          "flex size-10 shrink-0 items-center justify-center rounded-xl border shadow-xs",
                          item.badgeBg
                        )}
                      >
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <span className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-400">
                          {item.number}
                        </span>
                        <h3 className="font-heading text-base font-bold text-slate-900 leading-snug">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <ChevronDown
                      className={cn(
                        "size-5 text-slate-400 transition-transform duration-300 shrink-0 ml-2",
                        isExpanded && "rotate-180 text-blue-600"
                      )}
                    />
                  </button>

                  {/* Accordion Content */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden border-t border-slate-100 bg-slate-50/50 p-4 sm:p-5 space-y-4"
                      >
                        {/* Problem */}
                        <div className="rounded-xl border border-rose-200/80 bg-rose-50/80 p-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-100 px-2.5 py-0.5 text-[0.7rem] font-bold text-rose-700">
                            <AlertCircle className="size-3 text-rose-600" />
                            THE PROBLEM
                          </span>
                          <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-800">
                            &ldquo;{item.problem}&rdquo;
                          </p>
                        </div>

                        {/* Solution */}
                        <div className="rounded-xl border border-blue-200/80 bg-blue-50/80 p-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-100 px-2.5 py-0.5 text-[0.7rem] font-bold text-blue-700">
                            <Lightbulb className="size-3 text-blue-600" />
                            HOW DATA ACIES SOLVES IT
                          </span>
                          <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-800">
                            {item.solution}
                          </p>
                        </div>

                        {/* Outcomes */}
                        <div>
                          <span className="text-[0.7rem] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                            Business Outcomes
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {item.outcomes.map((outcome) => (
                              <span
                                key={outcome}
                                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-1 text-xs font-bold text-white shadow-xs"
                              >
                                <CheckCircle2 className="size-3 text-blue-200" />
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
        </motion.div>

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
