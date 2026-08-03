"use client";

import React from "react";
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
import { GlobalPresenceMap } from "./GlobalPresenceMap";

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
    accent: "#2563EB",       // blue-600
    accentBg: "#EFF6FF",    // blue-50
    accentShadow: "rgba(37,99,235,0.28)",
    accentBorder: "rgba(37,99,235,0.25)",
  },
  {
    title: "Care",
    description: "Putting people first and ensuring client success at every stage of engagement.",
    icon: Users,
    accent: "#0EA5E9",       // sky-500
    accentBg: "#F0F9FF",
    accentShadow: "rgba(14,165,233,0.28)",
    accentBorder: "rgba(14,165,233,0.25)",
  },
  {
    title: "Innovation",
    description: "Continuously exploring new technologies and approaches to create business value.",
    icon: Lightbulb,
    accent: "#4F46E5",       // indigo-600
    accentBg: "#EEF2FF",
    accentShadow: "rgba(79,70,229,0.28)",
    accentBorder: "rgba(79,70,229,0.25)",
  },
  {
    title: "Customer First",
    description: "Every decision starts with understanding customer needs and delivering meaningful outcomes.",
    icon: CheckCircle2,
    accent: "#0891B2",       // cyan-600
    accentBg: "#ECFEFF",
    accentShadow: "rgba(8,145,178,0.28)",
    accentBorder: "rgba(8,145,178,0.25)",
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
      <GlobalPresenceMap />


      {/* ─────────────────────────────────────────────────────────────────
          SECTION — Our Mission & Our Vision
      ───────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28 border-b border-slate-200/70">
        {/* Soft background gradient wash */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(219,234,254,0.4),transparent_60%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-6xl gap-7 px-container-x lg:grid-cols-2">

          {/* ── OUR MISSION (light blue tint) ── */}
          <motion.article
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-[2rem] border border-blue-200/70 bg-gradient-to-br from-blue-50 via-white to-blue-50/30 p-8 shadow-[0_8px_32px_rgba(37,99,235,0.09)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(37,99,235,0.14)] sm:p-10"
          >
            {/* Watermark icon — Target (Mission) */}
            <div className="pointer-events-none absolute -right-6 -top-6 opacity-[0.06] text-blue-600" aria-hidden="true">
              <Target className="size-52" strokeWidth={0.8} />
            </div>

            {/* Top accent bar */}
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-[2rem] bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 opacity-70" />

            {/* Icon badge */}
            <div
              className="relative flex size-14 items-center justify-center rounded-2xl shadow-[0_4px_18px_rgba(37,99,235,0.30)]"
              style={{ background: "linear-gradient(135deg,#2563EB,#1D4ED8)" }}
            >
              <Target className="size-7 text-white" aria-hidden />
            </div>

            <h2 className="relative mt-8 font-heading text-3xl font-bold tracking-[-0.03em] text-slate-950">
              Our Mission
            </h2>
            <p className="relative mt-5 text-lg leading-relaxed text-slate-600">
              By assisting businesses in utilizing the most cutting-edge digital
              transformation technologies, we help significantly improve
              efficiency, accelerate innovation, and drive measurable business
              outcomes.
            </p>
          </motion.article>

          {/* ── OUR VISION (deep navy / dark card) ── */}
          <motion.article
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-[2rem] border border-blue-900/30 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-8 shadow-[0_8px_40px_rgba(15,23,42,0.30)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_56px_rgba(15,23,42,0.4)] sm:p-10"
          >
            {/* Subtle grid overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:36px_36px]"
              aria-hidden="true"
            />
            {/* Watermark icon — Compass (Vision) */}
            <div className="pointer-events-none absolute -right-4 -top-4 opacity-[0.08] text-blue-300" aria-hidden="true">
              <Compass className="size-52" strokeWidth={0.8} />
            </div>
            {/* Radial glow in corner */}
            <div
              className="pointer-events-none absolute -right-12 -top-12 size-56 rounded-full"
              style={{ background: "radial-gradient(circle,rgba(59,130,246,0.18),transparent 70%)" }}
              aria-hidden="true"
            />

            {/* Top accent bar */}
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-[2rem] bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500 opacity-80" />

            {/* Icon badge */}
            <div
              className="relative flex size-14 items-center justify-center rounded-2xl shadow-[0_4px_18px_rgba(96,165,250,0.35)]"
              style={{ background: "linear-gradient(135deg,#3B82F6,#2563EB)" }}
            >
              <Compass className="size-7 text-white" aria-hidden />
            </div>

            <h2 className="relative mt-8 font-heading text-3xl font-bold tracking-[-0.03em] text-white">
              Our Vision
            </h2>
            <p className="relative mt-5 text-lg leading-relaxed text-blue-100/80">
              To become one of the world&apos;s leading business consulting and
              technology transformation firms, delivering innovations that advance
              how people live and work.
            </p>
          </motion.article>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION — Core Values
      ───────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="core-values-heading"
        className="relative overflow-hidden bg-white py-24 sm:py-28 border-b border-slate-200/70"
      >
        {/* Very soft radial wash */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_0%,rgba(219,234,254,0.28),transparent_60%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-container-x">

          {/* ── Section header with animated dot rhythm ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            {/* Animated dot sequence eyebrow rhythm */}
            <div className="mb-4 flex items-center justify-center gap-2" aria-hidden="true">
              {[0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9].map((delay, i) => (
                <motion.span
                  key={i}
                  className="block rounded-full bg-primary"
                  style={{ width: i === 3 ? 20 : 6, height: 6, opacity: 0.3 + (i === 3 ? 0.7 : 0) }}
                  animate={{ opacity: [0.25, 0.85, 0.25], scaleX: i === 3 ? [1, 1.15, 1] : 1 }}
                  transition={{ duration: 2.2, delay, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Core Values
            </p>
            <h2
              id="core-values-heading"
              className="mt-4 font-heading text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl"
            >
              What We Stand For
            </h2>
          </motion.div>

          {/* ── Value cards grid ── */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.07)] transition-shadow duration-300"
                  style={{
                    "--accent": value.accent,
                    "--accent-shadow": value.accentShadow,
                  } as React.CSSProperties}
                >
                  {/* Left accent border */}
                  <div
                    className="absolute inset-y-0 left-0 w-1 rounded-l-[1.75rem] opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: value.accent }}
                  />
                  {/* Hover accent glow bg */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: `radial-gradient(ellipse at 20% 20%, ${value.accentBg} 0%, transparent 70%)` }}
                    aria-hidden="true"
                  />

                  {/* Icon badge */}
                  <motion.div
                    className="relative flex size-13 items-center justify-center rounded-2xl shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${value.accent}ee, ${value.accent}bb)`,
                      boxShadow: `0 6px 20px ${value.accentShadow}`,
                    }}
                    whileHover={{ scale: 1.08, rotate: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  >
                    <Icon className="size-7 text-white" aria-hidden />
                  </motion.div>

                  <h3
                    className="relative mt-6 font-heading text-2xl font-bold tracking-[-0.02em] text-slate-900 transition-colors duration-200 group-hover:text-slate-950"
                  >
                    {value.title}
                  </h3>
                  <p className="relative mt-3 text-base leading-relaxed text-slate-600">
                    {value.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION — Thought Leadership
      ───────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="thought-leadership-heading"
        className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/40 to-white py-24 sm:py-28 border-b border-slate-200/70"
      >
        {/* Subtle radial wash */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(219,234,254,0.5),transparent_65%)]"
          aria-hidden="true"
        />
        {/* Faint blue dot-grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_center,#2563eb_1px,transparent_1px)] [background-size:28px_28px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-container-x">
          {/* Section Heading — Single large heading 'Thought Leadership' */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2
              id="thought-leadership-heading"
              className="font-heading text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl"
            >
              Thought Leadership
            </h2>
          </motion.div>

          {/* 3 Cards Grid */}
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {mindset.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-blue-100 bg-gradient-to-br from-white via-blue-50/20 to-blue-50/50 p-8 shadow-md transition-all duration-300 ease-out hover:border-blue-300/80 hover:shadow-xl hover:shadow-blue-500/15"
                >
                  {/* Solid/gradient blue rounded-2xl icon badge */}
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white shadow-md shadow-blue-500/20 transition-transform duration-300 ease-out group-hover:scale-[1.08]">
                    <Icon className="size-7 stroke-[2.2]" aria-hidden="true" />
                  </div>

                  <h3 className="mt-6 font-heading text-2xl font-bold tracking-tight text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </motion.article>
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
