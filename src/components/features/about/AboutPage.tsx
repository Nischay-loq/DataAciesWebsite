"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Compass,
  Handshake,
  Lightbulb,
  MapPin,
  Rocket,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const timeline = [
  {
    stage: "Foundation",
    title: "Building a Strong Consulting Foundation",
    description:
      "Data Acies began with a vision to help organizations solve complex technology challenges through consulting, engineering excellence, and business-driven innovation.",
    icon: Rocket,
  },
  {
    stage: "Expansion",
    title: "Expanding Digital Transformation Capabilities",
    description:
      "As organizations accelerated digital adoption, Data Acies expanded into Data Services, Digital Operations, Site Reliability Engineering, and enterprise technology solutions.",
    icon: TrendingUp,
  },
  {
    stage: "Innovation",
    title: "Driving Enterprise Innovation",
    description:
      "The company strengthened its expertise in automation, intelligent workflows, and scalable digital platforms to help businesses operate more efficiently.",
    icon: Lightbulb,
  },
  {
    stage: "AI Transformation",
    title: "Entering the AI-First Era",
    description:
      "Data Acies embraced Artificial Intelligence, Generative AI, and Agentic AI to help organizations modernize decision-making and automate operations.",
    icon: BrainCircuit,
  },
  {
    stage: "Product Development",
    title: "Building Enterprise Products",
    description:
      "The company evolved beyond services by creating enterprise-grade software platforms including AI-powered ITSM solutions and intelligent Test Data Generation systems.",
    icon: Target,
  },
  {
    stage: "Future Vision",
    title: "Shaping Intelligent Enterprises",
    description:
      "Today Data Acies continues building AI-powered products, scalable data platforms, and intelligent automation solutions that help organizations thrive in a rapidly evolving digital world.",
    icon: Compass,
  },
] as const;

const values = [
  {
    title: "Trust",
    description: "Building lasting relationships through transparency, reliability, and accountability.",
    icon: ShieldCheck,
  },
  {
    title: "Care",
    description: "Putting people first and ensuring client success at every stage of engagement.",
    icon: Users,
  },
  {
    title: "Innovation",
    description: "Continuously exploring new technologies and approaches to create business value.",
    icon: Lightbulb,
  },
  {
    title: "Customer First",
    description: "Every decision starts with understanding customer needs and delivering meaningful outcomes.",
    icon: CheckCircle2,
  },
] as const;

const mindset = [
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

const flowSteps = [
  {
    step: "01",
    label: "Problem",
    title: "Fragmented Systems & Silos",
    text: "Enterprises need modernization, but fragmented systems and unclear priorities slow progress.",
  },
  {
    step: "02",
    label: "Approach",
    title: "Engineered Execution",
    text: "We combine consulting discipline, engineering execution, and intelligent platforms.",
  },
  {
    step: "03",
    label: "Outcome",
    title: "Measurable Impact",
    text: "Leaders gain practical transformation programs that improve operations and growth.",
  },
] as const;

export function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-white py-20 sm:py-24 lg:py-28">
        {/* Subtle radial gradient wash fading from #EFF4FF to white */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,#EFF4FF_0%,rgba(255,255,255,0)_75%)]"
          aria-hidden="true"
        />

        {/* Faint large-scale line-art watermark behind/right of the heading */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 opacity-[0.14] lg:opacity-[0.18]"
          aria-hidden="true"
        >
          <svg
            width="680"
            height="680"
            viewBox="0 0 680 680"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="340" cy="340" r="300" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="6 6" />
            <circle cx="340" cy="340" r="220" stroke="#3B82F6" strokeWidth="1" />
            <circle cx="340" cy="340" r="140" stroke="#1D4ED8" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M340 40 V640 M40 340 H640" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.6" />
            <path d="M128 128 L552 552 M128 552 L552 128" stroke="#3B82F6" strokeWidth="0.75" strokeDasharray="8 8" />
            <circle cx="340" cy="40" r="6" fill="#2563EB" />
            <circle cx="640" cy="340" r="6" fill="#2563EB" />
            <circle cx="340" cy="640" r="6" fill="#2563EB" />
            <circle cx="40" cy="340" r="6" fill="#2563EB" />
            <circle cx="552" cy="128" r="5" fill="#3B82F6" />
            <circle cx="128" cy="552" r="5" fill="#3B82F6" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-container-x">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-primary">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden />
              About Data Acies
            </p>

            <h1 className="mt-5 font-heading text-[clamp(2.75rem,5vw,4.25rem)] font-bold leading-[1.05] tracking-[-0.04em] text-slate-950">
              Engineering{" "}
              <span className="bg-[linear-gradient(135deg,#2563EB_0%,#1D4ED8_100%)] bg-clip-text text-transparent">
                intelligence
              </span>{" "}
              for the modern enterprise
            </h1>

            <p className="mt-7 max-w-3xl text-[1.1rem] leading-[1.75] text-slate-600 sm:text-[1.2rem]">
              Data Acies is a technology consulting and digital transformation
              company helping organizations unlock growth through{" "}
              <span className="font-semibold text-slate-800">data engineering</span>,{" "}
              <span className="font-semibold text-slate-800">artificial intelligence</span>,
              intelligent automation, digital operations, and enterprise
              software solutions.
            </p>

            {/* Connected flow strip — 01 Problem → 02 Approach → 03 Outcome */}
            <div className="relative mt-16">
              {/*
                Horizontal connector line on desktop.
                top-7 = half of node size-14 (56px ÷ 2 = 28px ≈ 1.75rem)
                so the line pierces the node center.
              */}
              <div
                className="pointer-events-none absolute left-[12%] right-[12%] top-7 hidden h-[2.5px] rounded-full bg-gradient-to-r from-blue-200 via-[#2563EB] to-blue-200 md:block"
                aria-hidden="true"
              />

              {/* Vertical connector line (mobile) — left-6 = half of node size-12 */}
              <div
                className="pointer-events-none absolute bottom-0 left-6 top-12 w-[2.5px] rounded-full bg-gradient-to-b from-blue-200 via-[#2563EB] to-blue-200 md:hidden"
                aria-hidden="true"
              />

              <div className="grid gap-10 md:grid-cols-3 md:gap-8">
                {flowSteps.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.52,
                      delay: 0.18 + index * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative flex flex-col pl-20 md:items-center md:pl-0 md:text-center"
                  >
                    {/*
                      Node circle — size-14 (56px).
                      On mobile: absolute left-0 top-0.
                      On desktop: rendered in flow (mb-6) centred above the card.
                    */}
                    <div className="absolute left-0 top-0 flex size-14 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_6px_24px_rgba(37,99,235,0.18)] ring-[5px] ring-blue-50 md:relative md:left-auto md:top-auto md:mb-6">
                      <div className="flex size-[calc(100%-6px)] items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] shadow-inner">
                        <span className="font-heading text-sm font-extrabold tracking-tight text-white">
                          {item.step}
                        </span>
                      </div>
                    </div>

                    {/* Card */}
                    <div className="flex-1 rounded-2xl border border-slate-200/80 bg-white/95 p-7 shadow-[0_6px_28px_rgba(15,23,42,0.05)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-blue-300/70 group-hover:shadow-[0_16px_40px_rgba(37,99,235,0.12)] md:w-full">
                      {/* Label pill */}
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#1D4ED8]">
                        <span className="size-1.5 rounded-full bg-[#2563EB]" aria-hidden />
                        {item.label}
                      </span>

                      {/* Title — impactful */}
                      <h3 className="mt-3 font-heading text-[1.35rem] font-bold leading-[1.18] tracking-[-0.025em] text-slate-900 sm:text-[1.5rem]">
                        {item.title}
                      </h3>

                      {/* Body — readable, not tiny */}
                      <p className="mt-3 text-[1rem] leading-[1.65] text-slate-500 sm:text-[1.05rem]">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28">
        {/* Faint tinted background strip */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(219,234,254,0.35),transparent_65%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-container-x">
          <SectionHeader
            eyebrow="Company Journey"
            title="A journey built on practical enterprise impact"
            description="Our evolution is defined by stages of capability, not arbitrary timelines."
          />

          {/* ── Vertical Timeline ── */}
          <div className="relative mt-20">

            {/* ──────────────────────────────────────────────────────────────
                Central vertical spine — desktop (hidden on mobile)
                We use a CSS gradient so it fades in from top and out at bottom.
            ────────────────────────────────────────────────────────────────── */}
            <div
              className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-200 via-[#2563EB] to-transparent md:block"
              aria-hidden="true"
            />

            {/* Left-edge spine — mobile only */}
            <div
              className="pointer-events-none absolute bottom-0 left-5 top-0 w-[3px] rounded-full bg-gradient-to-b from-blue-200 via-[#2563EB] to-transparent md:hidden"
              aria-hidden="true"
            />

            {/* ── Milestone items ── */}
            <div className="flex flex-col gap-0">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0; // even → left side on desktop
                const isLast = index === timeline.length - 1;

                return (
                  <div
                    key={item.stage}
                    className={[
                      "relative flex items-start gap-6 pb-16",
                      // Mobile: all content to the right of the left-edge line
                      "pl-16 md:pl-0",
                      // Desktop: alternate left/right layout
                      isLeft
                        ? "md:flex-row md:pr-[calc(50%+2.5rem)]"
                        : "md:flex-row-reverse md:pl-[calc(50%+2.5rem)]",
                    ].join(" ")}
                  >
                    {/* ─── Icon node — sits on the spine ─── */}
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className={[
                        // Mobile: absolute on left edge
                        "absolute left-0 top-0 z-10 md:absolute md:left-1/2 md:top-0 md:-translate-x-1/2",
                      ].join(" ")}
                      aria-hidden="true"
                    >
                      {/* Glow ring — slow pulse */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-blue-400/25"
                        animate={{ scale: [1, 1.55, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                      />
                      {/* Icon circle */}
                      <div className="relative flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] shadow-[0_6px_20px_rgba(37,99,235,0.35)] ring-4 ring-white md:size-[3.25rem]">
                        <Icon className="size-5 text-white md:size-6" />
                      </div>
                    </motion.div>

                    {/* ─── Horizontal stub line connecting node to card ─── */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.35, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                      style={{ transformOrigin: isLeft ? "left center" : "right center" }}
                      className={[
                        "absolute top-[1.375rem] hidden h-[2px] w-10 bg-gradient-to-r from-[#2563EB]/60 to-transparent md:block",
                        isLeft
                          ? "left-[calc(50%+1.625rem)]"
                          : "right-[calc(50%+1.625rem)] rotate-180",
                      ].join(" ")}
                      aria-hidden="true"
                    />

                    {/* ─── Milestone card ─── */}
                    <motion.article
                      initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.52, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className={[
                        "group flex-1 rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_38px_rgba(37,99,235,0.10)]",
                        // Desktop: text alignment follows side
                        isLeft ? "md:text-right" : "md:text-left",
                      ].join(" ")}
                    >
                      {/* Stage label */}
                      <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-[#2563EB]">
                        {item.stage}
                      </p>
                      {/* Title */}
                      <h3 className="mt-2 font-heading text-[1.2rem] font-bold leading-[1.22] tracking-[-0.02em] text-slate-900 sm:text-[1.35rem]">
                        {item.title}
                      </h3>
                      {/* Description */}
                      <p className="mt-3 text-[0.9375rem] leading-[1.65] text-slate-500">
                        {item.description}
                      </p>
                    </motion.article>
                  </div>
                );
              })}

              {/* ── End cap: open arrow tail signalling "still in progress" ── */}
              <div className="relative flex justify-center pl-16 md:pl-0">
                {/* Desktop center, mobile left */}
                <div className="absolute left-5 top-0 md:left-1/2 md:-translate-x-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center gap-1"
                  >
                    {/* Gradient fade tail */}
                    <div className="h-8 w-[3px] rounded-full bg-gradient-to-b from-[#2563EB] to-transparent" />
                    {/* Arrowhead */}
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                      <path d="M7 9L1 1M7 9L13 1" stroke="url(#arrow-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <defs>
                        <linearGradient id="arrow-grad" x1="7" y1="0" x2="7" y2="10" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#2563EB" />
                          <stop offset="1" stopColor="#2563EB" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <p className="mt-2 text-center text-xs font-semibold tracking-[0.12em] text-blue-400/80 uppercase">
                      Still writing
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ──────────────────────────────────────────────────────────────
          SECTION 3 — Global Presence (Interactive Stylized Map)
      ────────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-28 lg:py-32 border-b border-slate-200/80">
        {/* Subtle radial background wash */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,#EFF4FF_0%,rgba(255,255,255,0)_70%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-container-x">
          <SectionHeader
            eyebrow="Global Presence"
            title="Strategic presence with global delivery capability"
            description="Data Acies combines executive proximity in North America with high-capacity engineering centers across India."
          />

          {/* Map Card Canvas Container */}
          <div className="relative mt-14 rounded-[2.5rem] border border-slate-200/80 bg-gradient-to-b from-[#F8FAFC] to-[#EFF4FF]/60 p-4 sm:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)] overflow-hidden">
            {/* World Grid Map Visual */}
            <div className="relative aspect-[16/9] w-full min-h-[380px] sm:min-h-[460px] flex items-center justify-center">

              {/* Background SVG Grid & Continents Line-Art */}
              <svg
                viewBox="0 0 1000 500"
                className="absolute inset-0 h-full w-full select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Subtle Grid Pattern */}
                  <pattern id="map-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#CBD5E1" strokeWidth="0.5" strokeOpacity="0.4" />
                  </pattern>

                  {/* Flow Line Gradient */}
                  <linearGradient id="arc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#60A5FA" stopOpacity="1" />
                    <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {/* Grid Overlay */}
                <rect width="1000" height="500" fill="url(#map-grid)" />

                {/* Stylized Continent Outlines (Line Art) */}
                <g fill="#E2E8F0" stroke="#94A3B8" strokeWidth="0.75" opacity="0.55">
                  {/* North America */}
                  <path d="M 120,90 Q 200,70 300,100 T 320,200 Q 250,260 180,240 T 100,160 Z" />
                  {/* South America */}
                  <path d="M 270,270 Q 320,280 340,350 T 290,440 Q 250,420 250,340 Z" />
                  {/* Europe */}
                  <path d="M 460,80 Q 540,70 580,110 T 540,170 Q 480,160 450,120 Z" />
                  {/* Africa */}
                  <path d="M 460,180 Q 560,180 570,260 T 520,380 Q 460,360 450,260 Z" />
                  {/* Asia / India */}
                  <path d="M 590,90 Q 750,70 850,130 T 820,270 Q 720,290 620,220 Z" />
                  <path d="M 700,190 Q 750,200 750,270 Q 710,280 690,220 Z" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.2" opacity="0.85" />
                  {/* Australia */}
                  <path d="M 800,320 Q 880,310 900,360 T 840,420 Q 780,410 790,350 Z" />
                </g>

                {/* Animated Connector Arcs from Dallas (220, 185) to India (Mumbai, Hyderabad, Chennai) */}
                {/* Glow Under-Arc */}
                <path d="M 220 185 Q 465 85 710 235" fill="none" stroke="#93C5FD" strokeWidth="4" opacity="0.4" />
                <path d="M 220 185 Q 480 75 740 220" fill="none" stroke="#93C5FD" strokeWidth="4" opacity="0.4" />
                <path d="M 220 185 Q 485 95 748 252" fill="none" stroke="#93C5FD" strokeWidth="4" opacity="0.4" />

                {/* Animated Flow Arcs */}
                <motion.path
                  d="M 220 185 Q 465 85 710 235"
                  fill="none"
                  stroke="url(#arc-gradient)"
                  strokeWidth="2.5"
                  strokeDasharray="8 8"
                  animate={{ strokeDashoffset: [0, -32] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                />
                <motion.path
                  d="M 220 185 Q 480 75 740 220"
                  fill="none"
                  stroke="url(#arc-gradient)"
                  strokeWidth="2.5"
                  strokeDasharray="8 8"
                  animate={{ strokeDashoffset: [0, -32] }}
                  transition={{ duration: 1.9, repeat: Infinity, ease: "linear" }}
                />
                <motion.path
                  d="M 220 185 Q 485 95 748 252"
                  fill="none"
                  stroke="url(#arc-gradient)"
                  strokeWidth="2.5"
                  strokeDasharray="8 8"
                  animate={{ strokeDashoffset: [0, -32] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
                />
              </svg>

              {/* Location Pins Overlay */}

              {/* 1. DALLAS (HEADQUARTERS) */}
              <div className="absolute left-[22%] top-[37%] -translate-x-1/2 -translate-y-1/2 group z-20">
                {/* Pulse Ring */}
                <motion.div
                  className="absolute -inset-3 rounded-full bg-blue-500/30"
                  animate={{ scale: [1, 1.8, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Pin Badge Button */}
                <div className="relative flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#0F1F4D_0%,#1D4ED8_100%)] px-3.5 py-2 text-white shadow-[0_8px_24px_rgba(15,31,77,0.35)] ring-2 ring-white transition-transform duration-300 group-hover:scale-110 cursor-pointer">
                  <span className="flex size-6 items-center justify-center rounded-full bg-amber-400 text-[#0F1F4D]">
                    <Building2 className="size-3.5 font-bold" />
                  </span>
                  <div className="text-left leading-none pr-1">
                    <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-amber-300">
                      Global HQ
                    </p>
                    <p className="text-xs font-bold text-white mt-0.5">
                      Dallas, TX
                    </p>
                  </div>
                </div>

                {/* Tooltip on Hover */}
                <div className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1 w-64 z-30">
                  <div className="rounded-2xl border border-blue-400/30 bg-[#0F1F4D] p-4 text-white shadow-2xl backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-amber-400/20 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-amber-300">
                        Headquarters
                      </span>
                      <span className="text-[0.7rem] text-slate-300">USA</span>
                    </div>
                    <h4 className="mt-2 font-heading text-sm font-bold text-white">Dallas, Texas</h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-300">
                      Global Operations, Executive Leadership & Client Strategy
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. HYDERABAD (DELIVERY CENTER) */}
              <div className="absolute left-[74%] top-[44%] -translate-x-1/2 -translate-y-1/2 group z-20">
                <motion.div
                  className="absolute -inset-2 rounded-full bg-blue-400/30"
                  animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                />
                <div className="relative flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-slate-900 shadow-md ring-2 ring-blue-500 transition-transform duration-300 group-hover:scale-110 cursor-pointer">
                  <span className="size-2.5 rounded-full bg-[#2563EB]" />
                  <span className="text-xs font-bold">Hyderabad</span>
                </div>
                {/* Tooltip */}
                <div className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1 w-60 z-30">
                  <div className="rounded-2xl border border-slate-200 bg-white p-3.5 text-slate-900 shadow-xl">
                    <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-primary">
                      Delivery Center
                    </span>
                    <h4 className="mt-1.5 font-heading text-sm font-bold text-slate-900">Hyderabad, India</h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      Cloud Engineering, AI R&D & Core Delivery Hub
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. MUMBAI (DELIVERY CENTER) */}
              <div className="absolute left-[71%] top-[47%] -translate-x-1/2 -translate-y-1/2 group z-20">
                <motion.div
                  className="absolute -inset-2 rounded-full bg-blue-400/30"
                  animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                />
                <div className="relative flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-slate-900 shadow-md ring-2 ring-blue-500 transition-transform duration-300 group-hover:scale-110 cursor-pointer">
                  <span className="size-2.5 rounded-full bg-[#2563EB]" />
                  <span className="text-xs font-bold">Mumbai</span>
                </div>
                {/* Tooltip */}
                <div className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1 w-60 z-30">
                  <div className="rounded-2xl border border-slate-200 bg-white p-3.5 text-slate-900 shadow-xl">
                    <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-primary">
                      Delivery Center
                    </span>
                    <h4 className="mt-1.5 font-heading text-sm font-bold text-slate-900">Mumbai, India</h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      Digital Operations & Enterprise Intelligent Workflows
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. CHENNAI (DELIVERY CENTER) */}
              <div className="absolute left-[75%] top-[51%] -translate-x-1/2 -translate-y-1/2 group z-20">
                <motion.div
                  className="absolute -inset-2 rounded-full bg-blue-400/30"
                  animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                />
                <div className="relative flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-slate-900 shadow-md ring-2 ring-blue-500 transition-transform duration-300 group-hover:scale-110 cursor-pointer">
                  <span className="size-2.5 rounded-full bg-[#2563EB]" />
                  <span className="text-xs font-bold">Chennai</span>
                </div>
                {/* Tooltip */}
                <div className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1 w-60 z-30">
                  <div className="rounded-2xl border border-slate-200 bg-white p-3.5 text-slate-900 shadow-xl">
                    <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-primary">
                      Delivery Center
                    </span>
                    <h4 className="mt-1.5 font-heading text-sm font-bold text-slate-900">Chennai, India</h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      Software Assurance, Testing Automation & Quality Engineering
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* ── Legend Row below Map ── */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-slate-200/80 bg-white px-6 py-3.5 shadow-sm text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <span className="flex size-3.5 items-center justify-center rounded-full bg-[#0F1F4D] text-amber-400 ring-2 ring-amber-400/50">
                  ★
                </span>
                <span><strong className="text-slate-900">Headquarters:</strong> Dallas, Texas (USA)</span>
              </div>
              <div className="h-3 w-px bg-slate-200 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-[#2563EB]" />
                <span><strong className="text-slate-900">Delivery Centers:</strong> Hyderabad, Mumbai, Chennai (India)</span>
              </div>
              <div className="h-3 w-px bg-slate-200 hidden sm:block" />
              <div className="flex items-center gap-2 text-slate-500">
                <span className="h-0.5 w-5 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full" />
                <span>Active 24/7 Delivery Flow</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-container-x lg:grid-cols-2">
          <Feature title="Our Mission" icon={Target}>
            By assisting businesses in utilizing the most cutting-edge digital
            transformation technologies, we help significantly improve
            efficiency, accelerate innovation, and drive measurable business
            outcomes.
          </Feature>
          <Feature title="Our Vision" icon={Compass}>
            To become one of the world&apos;s leading business consulting and
            technology transformation firms, delivering innovations that advance
            how people live and work.
          </Feature>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-container-x">
          <SectionHeader eyebrow="Core Values" title="What we stand for" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title}>
                  <Icon className="size-7 text-primary" />
                  <h3 className="mt-5 font-heading text-xl font-semibold text-slate-950">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-container-x">
          <SectionHeader eyebrow="Leadership Mindset" title="How we think" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {mindset.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title}>
                  <Icon className="size-7 text-primary" />
                  <h3 className="mt-5 font-heading text-xl font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-container-x">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="font-heading text-3xl font-semibold">
                  Let&apos;s build the future together
                </h2>
                <p className="mt-3 max-w-2xl text-slate-300">
                  Partner with Data Acies to accelerate digital transformation,
                  modernize operations, and unlock the power of intelligent
                  technology.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href={`${ROUTES.contact}#contact-section`} className={cn(buttonVariants(), "rounded-full bg-white px-6 text-slate-950 hover:bg-slate-100")}>
                  Book a Consultation
                  <ArrowRight className="size-4" />
                </Link>
                <Link href={ROUTES.solutions} className={cn(buttonVariants({ variant: "outline" }), "rounded-full border-white/30 px-6 text-white hover:bg-white/10")}>
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">{eyebrow}</p>
      <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>}
    </div>
  );
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className={cn("rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg", className)}
    >
      {children}
    </motion.article>
  );
}

function Feature({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: typeof Target;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <Icon className="size-7 text-primary" />
      <h2 className="mt-5 font-heading text-2xl font-semibold text-slate-950">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-600">{children}</p>
    </Card>
  );
}
