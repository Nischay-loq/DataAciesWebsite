"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useCallback } from "react";
import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { Container } from "@/components/layout/container";
import { CompanyIntroductionSection } from "@/components/sections/company-introduction-section";

/* ──────────────────────────────────────────────────────────────
   Image mapping — each file in public/home_images/ matched
   strictly by heading name (no shuffling, no reuse).

   ✅  "comprehensive service portfolio.png" → Comprehensive Service Portfolio
   ✅  "tailored solutions.png"              → Tailored Solutions
   ✅  "client relationships.png"            → Client Relationships
   ✅  "focus oninnovation.png"              → Focus on Innovation
   ✅  "commitmenttoqualityandsecurity.png"  → Commitment to Quality and Security
   ✅  "envisionthefuture.png"               → Envision the Future
────────────────────────────────────────────────────────────── */

type Reason = {
  title: string;
  /** One-line teaser shown in the list row */
  teaser: string;
  points: string[];
  accent: "blue" | "navy";
  /** Path relative to /public — served as static asset */
  imageSrc: string;
  imageAlt: string;
};

const reasons: Reason[] = [
  {
    title: "Comprehensive Service Portfolio",
    teaser: "End-to-end services across data, infrastructure & talent",
    accent: "blue",
    imageSrc: "/home_images/comprehensive service portfolio.png",
    imageAlt: "A broad range of enterprise services offered by Data Acies",
    points: [
      "Comprehensive suite of services addressing diverse business needs",
      "Expertise in data management, IT infrastructure optimization, digital transformation, business process streamlining, and talent acquisition",
      "Holistic approach to meet clients' specific requirements",
      "Wide range of services to cater to various aspects of business operations",
    ],
  },
  {
    title: "Tailored Solutions",
    teaser: "Custom-fit strategies aligned to your unique goals",
    accent: "blue",
    imageSrc: "/home_images/tailored solutions.png",
    imageAlt: "Customized solutions crafted for each client's unique challenges",
    points: [
      "Recognition of the uniqueness of each client and their specific goals and challenges",
      "Customized solutions tailored to meet clients' individual needs",
      "Close collaboration with clients to understand and address their requirements effectively",
      "Alignment of solutions with clients' business objectives",
    ],
  },
  {
    title: "Client Relationships",
    teaser: "Long-term partnerships built on trust and open communication",
    accent: "blue",
    imageSrc: "/home_images/client relationships.png",
    imageAlt: "Strong, long-lasting partnerships built on trust and communication",
    points: [
      "Emphasis on building strong and long-lasting partnerships",
      "Foster open communication and actively listen to client needs",
      "Strive to exceed client expectations in all interactions",
      "Client-centric approach focused on delivering consistent value",
      "Cultivate successful partnerships that clients trust and vouch for",
    ],
  },
  {
    title: "Focus on Innovation",
    teaser: "Staying ahead with emerging tech and cutting-edge practices",
    accent: "navy",
    imageSrc: "/home_images/focus oninnovation.png",
    imageAlt: "Driving innovation through emerging technologies and cutting-edge practices",
    points: [
      "Continuous focus on staying ahead of industry trends and emerging technologies",
      "Embracing innovation to provide cutting-edge solutions to clients",
      "Helping clients gain a competitive edge in their markets through advanced technologies",
      "Proactive exploration of new tools, methodologies, and best practices",
      "Commitment to driving innovation and delivering exceptional results for clients",
    ],
  },
  {
    title: "Commitment to Quality and Security",
    teaser: "High standards, rigorous QA, and robust data protection",
    accent: "navy",
    imageSrc: "/home_images/commitmenttoqualityandsecurity.png",
    imageAlt: "Uncompromising quality standards and robust security protocols",
    points: [
      "Commitment to maintaining high quality standards in all our services",
      "Adherence to industry best practices for optimal results",
      "Implementation of stringent quality control measures for excellence in service delivery",
      "Robust security protocols to protect client data and ensure privacy",
      "Compliance with regulations to maintain data security and regulatory requirements",
    ],
  },
  {
    title: "Envision the Future",
    teaser: "A long-term, technology-driven vision for global growth",
    accent: "navy",
    imageSrc: "/home_images/envisionthefuture.png",
    imageAlt: "A forward-looking vision powered by the latest technologies",
    points: [
      "We envision the future systemically, with a long-term view and the latest technologies",
      "We consistently keep track of emerging technologies to deliver advanced software solutions",
      "We help you build and grow the commerce and business sector globally and generate the maximum possible output",
    ],
  },
];

/* ──────────────────────────────────────────────────────────────
   Design tokens
────────────────────────────────────────────────────────────── */
const accentLineClass = {
  blue: "bg-[#2563EB]",
  navy: "bg-[#1E3A8A]",
} as const;

const topBorderGradient = {
  blue: "from-[#2563EB] to-blue-400",
  navy: "from-[#1E3A8A] to-blue-600",
} as const;

/** Duration each slide is shown before auto-advancing (ms) */
const AUTO_ADVANCE_MS = 5500;

/* ──────────────────────────────────────────────────────────────
   Bullet stagger variants
────────────────────────────────────────────────────────────── */
const bulletListVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
};

const bulletItemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ──────────────────────────────────────────────────────────────
   WhyChooseUsSection — Showcase layout
────────────────────────────────────────────────────────────── */
export function WhyChooseUsSection() {
  /**
   * Single shared state: which item is currently showcased.
   * On mobile this same index drives the accordion open/closed state.
   */
  const [activeIndex, setActiveIndex] = useState(0);
  /**
   * Once the user clicks a row manually, auto-advance is paused
   * permanently for the session so it doesn't fight the user.
   */
  const [isPaused, setIsPaused] = useState(false);

  const handleSelect = useCallback((index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
  }, []);

  /**
   * Auto-advance interval.
   * `activeIndex` is in the dep array so the interval — and
   * therefore the progress bar animation — resets cleanly each
   * time the slide changes (whether via auto-advance or manual click).
   */
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reasons.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [isPaused, activeIndex]);

  const active = reasons[activeIndex];

  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(244,248,255,0.9)_0%,#ffffff_38%,rgba(248,250,252,1)_100%)] pt-0 pb-20 sm:pb-24 lg:pb-28"
    >
      {/* Thin wave SVG transition from previous section */}
      <div className="relative w-full overflow-hidden leading-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          className="block h-12 w-full sm:h-16 lg:h-20"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z"
            fill="rgba(248,250,252,1)"
          />
        </svg>
      </div>

      {/* Background ambiance orbs */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,0.08),transparent_70%)]"
        aria-hidden
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-10 top-1/3 hidden size-64 transform-gpu rounded-full border border-blue-100/70 bg-blue-100/20 blur-3xl will-change-transform lg:block"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-0 top-24 hidden size-72 transform-gpu rounded-full border border-sky-100/70 bg-sky-100/20 blur-3xl will-change-transform lg:block"
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container size="wide" className="relative">
        {/* ── Section Header ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow badge */}
          <div className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-transparent bg-white/80 px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-primary shadow-[0_8px_20px_rgba(15,23,42,0.04)] ring-1 ring-blue-300/60">
            <Sparkles className="size-3.5 text-blue-500" aria-hidden />
            <span>Why Choose Us</span>
            <motion.span
              className="size-2 rounded-full bg-blue-500"
              animate={{ opacity: [1, 0.3, 1], scale: [1, 0.85, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />
          </div>

          <h2
            id="why-choose-us-heading"
            className="mt-6 font-heading text-[clamp(2rem,4.6vw,3.1rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-slate-950"
          >
            Why Is It Worth <span className="text-primary">Choosing Us</span>
          </h2>

          {/* Animated gradient divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-5 h-0.5 w-full max-w-[200px] origin-center rounded-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            aria-hidden
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-slate-600"
          >
            From strategy to delivery, we combine breadth of expertise with a
            client-first mindset to create lasting value for every partnership.
          </motion.p>

          {/* Stat chips — social proof pills */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            {[
              { label: "10+ Years", desc: "of Experience" },
              { label: "50+ Clients", desc: "Served Globally" },
              { label: "24/7 Support", desc: "Always Available" },
            ].map((stat) => (
              <span
                key={stat.label}
                className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-50/60 px-4 py-1.5 text-sm font-semibold text-blue-800 shadow-xs"
              >
                <span className="size-1.5 rounded-full bg-blue-500" aria-hidden />
                <span>{stat.label}</span>
                <span className="font-normal text-blue-600/80">{stat.desc}</span>
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* ════════════════════════════════════════════════════
            SHOWCASE LAYOUT
            Desktop (lg+): panel left 55% | list right 45%
            Mobile: panel on top, list accordion below
        ════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8"
        >

          {/* ── LEFT / TOP: Showcase Panel ─────────────────── */}
          <div
            className="relative flex w-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_20px_60px_rgba(37,99,235,0.10)] lg:w-[55%] lg:shrink-0"
          >
            {/* Animated top gradient border — resets with key on each switch */}
            <motion.div
              key={`border-${activeIndex}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
              className={`absolute inset-x-0 top-0 z-20 h-[3px] origin-left rounded-t-2xl bg-gradient-to-r ${topBorderGradient[active.accent]}`}
              aria-hidden="true"
            />

            {/* ── Image area (fixed height) ── */}
            <div className="relative h-[260px] shrink-0 overflow-hidden sm:h-[320px] lg:h-[360px]">
              {/*
                mode="sync" → entering and exiting images overlap,
                producing a smooth cross-fade rather than a flash-to-blank.
              */}
              <AnimatePresence mode="sync">
                <motion.div
                  key={`img-${activeIndex}`}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.65, ease: "easeInOut" }}
                >
                  <Image
                    src={active.imageSrc}
                    alt={active.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover brightness-95"
                    priority
                  />

                  {/* Bottom gradient — improves readability of any overlaid text */}
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/35 to-transparent"
                    aria-hidden="true"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Counter badge (top-left) */}
              <div
                className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-black/30 px-3 py-1 backdrop-blur-sm"
                aria-hidden="true"
              >
                <span className="text-[0.7rem] font-semibold tabular-nums text-white">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="text-[0.7rem] text-white/50">/</span>
                <span className="text-[0.7rem] font-semibold text-white/60">
                  {String(reasons.length).padStart(2, "0")}
                </span>
              </div>

              {/* Dot nav (bottom-center) */}
              <div
                className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5"
                aria-hidden="true"
              >
                {reasons.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    suppressHydrationWarning
                    className={[
                      "rounded-full transition-all duration-300 focus-visible:outline-none",
                      i === activeIndex
                        ? "h-2 w-5 bg-white"
                        : "size-2 bg-white/40 hover:bg-white/70",
                    ].join(" ")}
                    aria-label={`Show ${reasons[i].title}`}
                  />
                ))}
              </div>
            </div>

            {/* ── Content area (fixed min-height, no reflow) ── */}
            <div className="relative flex min-h-[220px] flex-1 flex-col overflow-hidden px-7 pb-8 pt-6 sm:px-8 sm:pt-7">
              {/* Subtle radial inner glow */}
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.05),transparent_60%)]"
                aria-hidden="true"
              />

              {/*
                mode="wait" → old content fully exits before new enters,
                preventing visual overlap inside the fixed-height box.
              */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${activeIndex}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] as const }}
                  className="relative"
                >
                  {/* Accent line above heading */}
                  <span
                    className={`mb-3 block h-[3px] w-8 rounded-full ${accentLineClass[active.accent]}`}
                    aria-hidden="true"
                  />

                  <h3 className="font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-[1.65rem]">
                    {active.title}
                  </h3>

                  {/* Staggered bullet list */}
                  <motion.ul
                    variants={bulletListVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-4 flex flex-col space-y-2.5"
                  >
                    {active.points.map((point) => (
                      <motion.li
                        key={point}
                        variants={bulletItemVariants}
                        className="flex items-start gap-2.5"
                      >
                        {/* Filled blue circular badge checkmark */}
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-sm">
                          <svg
                            className="size-3"
                            viewBox="0 0 14 14"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <polyline points="2,7 5.5,10.5 12,3" />
                          </svg>
                        </span>
                        <span className="text-sm leading-relaxed text-slate-600 sm:text-[0.925rem]">
                          {point}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ── RIGHT / BOTTOM: Compact list ───────────────── */}
          <div className="flex w-full flex-col gap-1.5 lg:w-[45%]">
            {reasons.map((reason, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={reason.title}
                  onClick={() => handleSelect(index)}
                  aria-pressed={isActive}
                  aria-label={`View ${reason.title}`}
                  suppressHydrationWarning
                  className={[
                    "group relative flex w-full items-center gap-4 overflow-hidden rounded-xl px-5 py-4 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1",
                    isActive
                      ? "border-l-[3px] border-blue-600 bg-blue-50/80 shadow-sm"
                      : "border-l-[3px] border-transparent hover:bg-slate-50/90",
                  ].join(" ")}
                >
                  {/* Thumbnail */}
                  <div className="relative size-[4.5rem] shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={reason.imageSrc}
                      alt=""
                      fill
                      sizes="72px"
                      className={[
                        "object-cover transition-all duration-500",
                        isActive
                          ? "brightness-100 saturate-110"
                          : "brightness-[0.65] grayscale-[25%] group-hover:brightness-90 group-hover:grayscale-0",
                      ].join(" ")}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <p
                      className={[
                        "truncate text-base font-semibold leading-snug transition-colors duration-150",
                        isActive ? "text-blue-700" : "text-slate-800 group-hover:text-slate-900",
                      ].join(" ")}
                    >
                      {reason.title}
                    </p>
                    <p
                      className={[
                        "mt-1 line-clamp-1 text-sm leading-relaxed transition-colors duration-150",
                        isActive ? "text-blue-600/80" : "text-slate-500",
                      ].join(" ")}
                    >
                      {reason.teaser}
                    </p>
                  </div>

                  {/*
                    Shared layout-animated dot — slides between rows
                    giving a physical "selection" feel.
                  */}
                  {isActive && (
                    <motion.span
                      layoutId="active-indicator-dot"
                      className="size-2 shrink-0 rounded-full bg-blue-500"
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                      aria-hidden="true"
                    />
                  )}

                  {/*
                    Progress bar — auto-advance timer indicator.
                    key forces a fresh animation on every index change.
                    Only rendered while auto-advance is live.
                  */}
                  {isActive && !isPaused && (
                    <motion.div
                      key={`progress-${activeIndex}`}
                      className="absolute inset-x-0 bottom-0 h-[2px] origin-left rounded-b-xl bg-blue-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: AUTO_ADVANCE_MS / 1000,
                        ease: "linear",
                      }}
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}

            {/* Auto-advance status hint */}
            <p className="mt-1 px-4 text-[0.7rem] text-slate-400" aria-live="polite">
              {isPaused
                ? "Auto-advance paused — click any item to explore"
                : "Auto-advancing · click any item to take control"}
            </p>
          </div>
        </motion.div>

        {/* Conveyor belt feature cards */}
        <CompanyIntroductionSection />

        {/* ── Satisfaction Guaranteed banner ──────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-6 overflow-hidden rounded-[1.75rem] border border-[#2f6bff] bg-[linear-gradient(120deg,#2463eb_0%,#0f4ed6_100%)] p-8 text-white shadow-[0_20px_60px_rgba(37,99,235,0.22)] sm:p-10"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_92%_0%,rgba(125,211,252,0.3),transparent_46%),radial-gradient(circle_at_10%_100%,rgba(125,211,252,0.16),transparent_40%)]"
            aria-hidden
          />
          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
                  <BadgeCheck className="size-6" />
                </span>
                <h3 className="font-heading text-[1.6rem] font-semibold tracking-[-0.03em] sm:text-[1.9rem]">
                  Satisfaction Guaranteed
                </h3>
              </div>
              <p className="mt-5 text-[1rem] leading-7 text-white/90 sm:text-[1.05rem]">
                The world of technology can be fast-paced and scary. That&apos;s why
                our goal is to provide an experience that is tailored to your
                company&apos;s needs. No matter the budget, we pride ourselves on
                providing professional customer service. We guarantee you will be
                satisfied with our work.
              </p>
            </div>

            <Link
              href={`${ROUTES.contact}#contact-section`}
              className="group inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-primary shadow-[0_14px_32px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.24)]"
            >
              Contact Us
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>

        {/* ── Ready to Transform CTA ────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-16 max-w-2xl rounded-[1.75rem] border border-slate-200/80 bg-white/85 px-6 py-10 text-center shadow-[0_16px_44px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:px-10 sm:py-12"
        >
          <h3 className="font-heading text-2xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-3xl">
            Ready to Transform Your Business?
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Engineering-led transformation for cloud, data, and automation initiatives.
          </p>
          <Link
            href={ROUTES.about}
            className="group mt-8 inline-flex h-12 items-center gap-2 rounded-full border border-primary bg-white px-7 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-[0_12px_28px_rgba(37,99,235,0.18)]"
          >
            Learn More
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-white" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
