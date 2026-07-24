"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { ROUTES } from "@/constants/routes";
import { Container } from "@/components/layout/container";

export function TechnologyAssistanceSection() {
  return (
    <section
      aria-labelledby="technology-assistance-heading"
      className="relative overflow-hidden bg-white pt-12 sm:pt-16 lg:pt-20 pb-0"
    >
      {/* 1. LAYERED GRADIENT MESH BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#FFFFFF_0%,#F4F8FF_35%,#EFF6FF_65%,rgba(30,58,138,0.06)_100%)]"
        aria-hidden="true"
      />

      {/* Subtle Outer Radial Navy Depth Glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(30,58,138,0.04)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      {/* 2. ANIMATED GLOW ORBS (ELECTRIC BLUE #2563EB & NAVY #1E3A8A) */}
      {/* Top-Left Orb */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-20 size-96 rounded-full bg-gradient-to-br from-[#2563EB]/25 to-[#1E3A8A]/20 opacity-30 blur-3xl sm:size-[30rem] lg:-left-16"
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom-Right Orb */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-1/3 size-[28rem] rounded-full bg-gradient-to-tl from-[#1E3A8A]/25 via-[#2563EB]/20 to-sky-400/15 opacity-25 blur-3xl sm:size-[34rem] lg:-right-16"
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center Ambient Orb */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 size-80 -translate-x-1/2 rounded-full bg-blue-500/15 opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 3. MASKED DOT GRID WITH HIGHER VISIBILITY */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#2563eb_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-14 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]"
        aria-hidden="true"
      />

      {/* Blueprint-Inspired SVG Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
        aria-hidden="true"
      >
        <svg className="size-full stroke-blue-900" width="100%" height="100%">
          <defs>
            <pattern
              id="enterprise-blueprint-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 40 0 L 0 0 0 40" fill="none" strokeWidth="1" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#enterprise-blueprint-grid)"
          />
        </svg>
      </div>

      {/* 4. FINE ELECTRIC BLUE LIGHT BEAM ACCENTS */}
      {/* Diagonal Light Beam (Left) */}
      <div
        className="pointer-events-none absolute -top-24 left-1/4 h-[420px] w-0.5 rotate-[32deg] bg-gradient-to-b from-transparent via-blue-500/25 to-transparent blur-[1px]"
        aria-hidden="true"
      />

      {/* Diagonal Light Beam (Right) */}
      <div
        className="pointer-events-none absolute -top-16 right-1/4 h-[460px] w-0.5 -rotate-[28deg] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent blur-[1px]"
        aria-hidden="true"
      />

      {/* Horizontal Light Ray Accent behind header */}
      <div
        className="pointer-events-none absolute top-28 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
        aria-hidden="true"
      />

      {/* Corner Architectural Labels */}
      <div
        className="pointer-events-none absolute inset-x-8 top-8 hidden justify-between text-[10px] font-mono tracking-widest text-blue-400/60 sm:flex lg:inset-x-16"
        aria-hidden="true"
      >
        <span className="flex items-center gap-1.5">
          <span className="text-blue-500/80">+</span> Enterprise Systems
        </span>
        <span className="flex items-center gap-1.5">
          Consulting Framework <span className="text-blue-500/80">+</span>
        </span>
      </div>

      {/* MAIN CONTENT AREA */}
      <Container className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* PREMIUM ENTERPRISE SIGNAL LINE */}
          <div className="relative mx-auto flex max-w-2xl items-center justify-center gap-4">
            {/* Left Expanding Signal Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="h-px flex-1 origin-right bg-gradient-to-r from-transparent via-blue-300/60 to-blue-600/80"
              aria-hidden="true"
            />

            {/* Badge Text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-4 py-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.22em] text-blue-700 shadow-xs backdrop-blur-xs">
                <span className="size-1.5 rounded-full bg-blue-600 animate-pulse" />
                PROFESSIONAL TECHNOLOGY ASSISTANCE
              </span>
            </motion.div>

            {/* Right Expanding Signal Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="h-px flex-1 origin-left bg-gradient-to-r from-blue-600/80 via-blue-300/60 to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* MAIN HEADING */}
          <motion.h2
            id="technology-assistance-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-heading text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Professional{" "}
            <motion.span
              initial={{ opacity: 0.7 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="font-bold text-blue-600"
            >
              Technology
            </motion.span>{" "}
            Assistance
          </motion.h2>

          {/* SUPPORTING STATEMENT */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-4 max-w-xl text-balance text-base font-normal leading-relaxed text-slate-600 sm:text-lg"
          >
            Where Technology Meets Tailored Solutions and Innovation Drives
            Success
          </motion.p>

          {/* CTA INTERACTION AREA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col items-center justify-center"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Need expert technology guidance?
            </p>
            <Link
              href={`${ROUTES.contact}#contact-section`}
              aria-label="IT Consulting Contact"
              className="group relative inline-flex items-center gap-2.5 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 active:translate-y-0"
            >
              <span>IT Consulting</span>
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </Container>

      {/* BOTTOM TRANSITION: Modern Curved Architectural Divider */}
      <div className="relative mt-12 w-full overflow-hidden leading-none sm:mt-16">
        <motion.svg
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="relative block h-10 w-full text-slate-50/90 sm:h-14 lg:h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0 C300,85 900,85 1200,0 L1200,120 L0,120 Z"
            fill="currentColor"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1.0, ease: "easeInOut" }}
            d="M0,0 C300,85 900,85 1200,0"
            fill="none"
            stroke="url(#enterpriseCurveGradient)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient
              id="enterpriseCurveGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(59,130,246,0)" />
              <stop offset="50%" stopColor="rgba(59,130,246,0.35)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0)" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
    </section>
  );
}
