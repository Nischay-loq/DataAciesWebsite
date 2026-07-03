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

type Reason = {
  title: string;
  icon: LucideIcon;
  points: string[];
};

const reasons: Reason[] = [
  {
    title: "Comprehensive Service Portfolio",
    icon: Layers,
    points: [
      "Comprehensive suite of services addressing diverse business needs",
      "Expertise in data management, IT infrastructure optimization, digital transformation, business process streamlining, and talent acquisition",
      "Holistic approach to meet clients’ specific requirements",
      "Wide range of services to cater to various aspects of business operations",
    ],
  },
  {
    title: "Tailored Solutions",
    icon: SlidersHorizontal,
    points: [
      "Recognition of the uniqueness of each client and their specific goals and challenges",
      "Customized solutions tailored to meet clients’ individual needs",
      "Close collaboration with clients to understand and address their requirements effectively",
      "Alignment of solutions with clients’ business objectives",
    ],
  },
  {
    title: "Client Relationships",
    icon: Handshake,
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
    points: [
      "We envision the future systemically, with a long-term view and the latest technologies",
      "We consistently keep track of emerging technologies to deliver advanced software solutions",
      "We help you build and grow the commerce and business sector globally and generate the maximum possible output",
    ],
  },
];

const cardReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(244,248,255,0.9)_0%,#ffffff_38%,rgba(248,250,252,1)_100%)] py-20 sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.12),transparent_68%)]"
        aria-hidden
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-10 top-1/3 hidden size-64 rounded-full border border-blue-100/70 bg-blue-100/20 blur-3xl lg:block"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-0 top-24 hidden size-72 rounded-full border border-sky-100/70 bg-sky-100/20 blur-3xl lg:block"
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container size="wide" className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mx-auto inline-flex items-center gap-3 rounded-full border border-blue-200/70 bg-white/80 px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-primary shadow-[0_8px_20px_rgba(15,23,42,0.04)]">
            <Sparkles className="size-3.5" aria-hidden />
            Why Choose Us
          </span>

          <h2
            id="why-choose-us-heading"
            className="mt-6 font-heading text-[clamp(2rem,4.6vw,3.1rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-slate-950"
          >
            Why Is It Worth <span className="text-primary">Choosing Us</span>
          </h2>

          <div
            className="mx-auto mt-6 h-px w-full max-w-sm origin-center bg-linear-to-r from-transparent via-sky-300 to-transparent"
            aria-hidden
          />

          <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-8 text-slate-600">
            From strategy to delivery, we combine breadth of expertise with a
            client-first mindset to create lasting value for every partnership.
          </p>
        </motion.div>

        {/* Reason cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.article
                key={reason.title}
                custom={index}
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/90 bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200/80 hover:shadow-[0_18px_44px_rgba(15,23,42,0.08)] sm:p-7"
              >
                <div
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[linear-gradient(90deg,rgba(0,0,0,0),rgba(125,211,252,0.85),rgba(0,0,0,0))] transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.07),transparent_45%)] opacity-70"
                  aria-hidden
                />

                <div className="relative flex size-14 items-center justify-center rounded-[1.15rem] border border-blue-100 bg-[linear-gradient(180deg,rgba(239,246,255,0.96),rgba(255,255,255,0.92))] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition-colors duration-300 group-hover:border-blue-200 group-hover:bg-blue-50">
                  <Icon className="size-7" strokeWidth={1.6} />
                </div>

                <div className="relative mt-5">
                  <div
                    className="mb-4 h-0.5 w-12 origin-left rounded-full bg-[linear-gradient(90deg,rgba(37,99,235,1),rgba(125,211,252,1),rgba(0,0,0,0))] transition-all duration-500 group-hover:w-16"
                    aria-hidden
                  />
                  <h3 className="font-heading text-lg font-semibold tracking-[-0.02em] text-slate-950 sm:text-xl">
                    {reason.title}
                  </h3>
                </div>

                <ul className="relative mt-5 space-y-3">
                  {reason.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-primary">
                        <Check className="size-3.5" strokeWidth={2.4} />
                      </span>
                      <span className="text-[0.9rem] leading-6 text-slate-600">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

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
                The world of technology can be fast-paced and scary. That’s why
                our goal is to provide an experience that is tailored to your
                company’s needs. No matter the budget, we pride ourselves on
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
