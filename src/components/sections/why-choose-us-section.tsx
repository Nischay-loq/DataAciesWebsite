"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Handshake,
  Layers,
  Lightbulb,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Telescope,
  type LucideIcon,
} from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { Container } from "@/components/layout/container";
import { CompanyIntroductionSection } from "@/components/sections/company-introduction-section";

type Reason = {
  title: string;
  icon: LucideIcon;
  points: string[];
  accent: "blue" | "navy";
};

const reasons: Reason[] = [
  {
    title: "Comprehensive Service Portfolio",
    icon: Layers,
    accent: "blue",
    points: [
      "Comprehensive suite of services addressing diverse business needs",
      "Expertise in data management, IT infrastructure optimization, digital transformation, business process streamlining, and talent acquisition",
      "Holistic approach to meet clients' specific requirements",
      "Wide range of services to cater to various aspects of business operations",
    ],
  },
  {
    title: "Tailored Solutions",
    icon: SlidersHorizontal,
    accent: "blue",
    points: [
      "Recognition of the uniqueness of each client and their specific goals and challenges",
      "Customized solutions tailored to meet clients' individual needs",
      "Close collaboration with clients to understand and address their requirements effectively",
      "Alignment of solutions with clients' business objectives",
    ],
  },
  {
    title: "Client Relationships",
    icon: Handshake,
    accent: "blue",
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
    icon: Lightbulb,
    accent: "navy",
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
    icon: ShieldCheck,
    accent: "navy",
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
    icon: Telescope,
    accent: "navy",
    points: [
      "We envision the future systemically, with a long-term view and the latest technologies",
      "We consistently keep track of emerging technologies to deliver advanced software solutions",
      "We help you build and grow the commerce and business sector globally and generate the maximum possible output",
    ],
  },
];

const iconGradients = {
  blue: "from-blue-500 to-blue-700",
  navy: "from-blue-700 to-[#1E3A8A]",
};

const cardBorderGradients = {
  blue: "from-blue-400 to-blue-600",
  navy: "from-blue-600 to-[#1E3A8A]",
};

const cardBg = {
  blue: "from-white to-[#F8FAFF]",
  navy: "from-white to-[#F0F5FF]",
};

function ReasonCard({
  reason,
  index,
}: {
  reason: Reason;
  index: number;
}) {
  const Icon = reason.icon;

  return (
    <motion.article
      key={reason.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-b p-8 shadow-md transition-shadow duration-300 hover:shadow-[0_20px_48px_rgba(37,99,235,0.18)]"
      style={{
        backgroundImage: `linear-gradient(to bottom, white, ${reason.accent === "blue" ? "#F8FAFF" : "#F0F5FF"})`,
      }}
    >
      {/* Animated Top Gradient Border — expands from center */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`absolute inset-x-0 top-0 h-[3px] origin-center rounded-t-2xl bg-gradient-to-r ${cardBorderGradients[reason.accent]} transition-all duration-300 group-hover:h-[4px]`}
        aria-hidden="true"
      />

      {/* Subtle Inner Radial Glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.06),transparent_50%)]"
        aria-hidden="true"
      />

      {/* Icon Container — Bold gradient bg + glow + hover scale/rotate */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 6 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className={`relative inline-flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br ${iconGradients[reason.accent]} text-white shadow-[0_8px_20px_rgba(37,99,235,0.35)]`}
      >
        {/* Shimmer sweep on hover */}
        <span
          className="absolute inset-0 rounded-2xl bg-[linear-gradient(105deg,transparent_30%,rgba(255,255,255,0.25)_50%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
        />
        <Icon className="relative size-8" strokeWidth={1.8} />
      </motion.div>

      {/* Card Content */}
      <div className="relative mt-6 flex flex-1 flex-col">
        <h3 className="font-heading text-2xl font-bold tracking-tight text-slate-900">
          {reason.title}
        </h3>

        <ul className="mt-5 flex flex-1 flex-col justify-start space-y-4">
          {reason.points.map((point, pointIndex) => (
            <motion.li
              key={point}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.3 + index * 0.1 + pointIndex * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-start gap-3"
            >
              {/* Filled Blue Circular Badge Checkmark */}
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
                <Check className="size-3.5" strokeWidth={2.8} />
              </span>
              <span className="text-[0.95rem] leading-relaxed text-slate-600">
                {point}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export function WhyChooseUsSection() {
  const row1 = reasons.slice(0, 3);
  const row2 = reasons.slice(3, 6);

  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(244,248,255,0.9)_0%,#ffffff_38%,rgba(248,250,252,1)_100%)] pt-0 pb-20 sm:pb-24 lg:pb-28"
    >
      {/* Thin Wave SVG Transition from previous section — replaces the tall blank gradient band */}
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

      {/* Background Ambiance Orb — subtle top radial, no tall gap */}
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow Badge — gradient border + pulsing dot */}
          <div className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-transparent bg-white/80 px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-primary shadow-[0_8px_20px_rgba(15,23,42,0.04)] ring-1 ring-blue-300/60 ring-offset-0">
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

          {/* Animated Gradient Divider — expands width on scroll into view */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-5 h-0.5 w-full max-w-[200px] origin-center rounded-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            aria-hidden
          />

          {/* Animated Subtext — fade-up with delay */}
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

          {/* Stat Chips — social proof pills */}
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

        {/* Row 1 — Blue accent cards */}
        <div className="mt-14 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {row1.map((reason, index) => (
            <ReasonCard key={reason.title} reason={reason} index={index} />
          ))}
        </div>

        {/* Row 2 — Navy accent cards (visually distinguished) */}
        <div className="mt-6 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {row2.map((reason, index) => (
            <ReasonCard key={reason.title} reason={reason} index={index + 3} />
          ))}
        </div>

        {/* Conveyor Belt Feature Cards placed right above Satisfaction Guaranteed card */}
        <CompanyIntroductionSection />

        {/* Satisfaction Guaranteed — highlight banner */}
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

        {/* Ready to Transform Your Business — closing CTA */}
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
