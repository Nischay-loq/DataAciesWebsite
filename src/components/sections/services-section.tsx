"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  BarChart3,
  Cloud,
  Code2,
  Database,
  DatabaseZap,
  LineChart,
  LockKeyhole,
  Network,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/layout/container";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Data Strategy & Consulting",
    description: "We help you define the right data strategy and roadmap to align with your business goals and drive growth.",
    icon: Network,
  },
  {
    title: "Cloud Data Solutions & Transformation",
    description: "Modernize your data infrastructure with secure, scalable, and cost-effective cloud solutions.",
    icon: Cloud,
  },
  {
    title: "Data Integration",
    description: "Seamlessly connect and unify data from diverse sources for a single, consistent view of your business.",
    icon: DatabaseZap,
  },
  {
    title: "Data Management",
    description: "Ensure high-quality, reliable, and accessible data through robust governance and management practices.",
    icon: Database,
  },
  {
    title: "Data Analysis",
    description: "Extract meaningful insights from your data using advanced analytics and statistical techniques.",
    icon: BarChart3,
  },
  {
    title: "Data Visualization",
    description: "Transform complex data into clear, interactive visuals that help you communicate and act with confidence.",
    icon: LineChart,
  },
  {
    title: "Data Security",
    description: "Protect your data with enterprise-grade security, compliance, and privacy measures.",
    icon: ShieldCheck,
  },
];

const supportCards = [
  {
    title: "Smarter Insights",
    description: "Understand your data like never before.",
    icon: BarChart3,
  },
  {
    title: "Strategic Advantage",
    description: "Make confident, data-driven decisions.",
    icon: Sparkles,
  },
  {
    title: "Future Ready",
    description: "Build a resilient, scalable data ecosystem.",
    icon: LockKeyhole,
  },
] as const;

function DataIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[42rem]">
      <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_58%)] blur-2xl" aria-hidden />

      <div className="relative h-[22rem] sm:h-[26rem] lg:h-[29rem]">
        <div className="absolute inset-8 rounded-full border border-sky-200/70 bg-white/30 shadow-[0_0_0_1px_rgba(219,234,254,0.7)]" aria-hidden />
        <div className="absolute inset-14 rounded-full border border-sky-100/80 bg-[radial-gradient(circle_at_center,rgba(191,219,254,0.15),transparent_68%)]" aria-hidden />
        <div className="absolute left-1/2 top-1/2 size-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/80 bg-white shadow-[0_20px_60px_rgba(37,99,235,0.08)] sm:size-44" aria-hidden>
          <div className="absolute inset-5 rounded-full bg-[linear-gradient(180deg,#f8fbff_0%,#eaf2ff_100%)] shadow-inner" />
          <div className="absolute inset-x-4 top-7 h-6 rounded-full bg-gradient-to-r from-[#d9e8ff] via-white to-[#c8dcff]" />
          <div className="absolute inset-x-4 top-13 h-6 rounded-full bg-gradient-to-r from-[#2f6bff] via-[#5ea0ff] to-[#1d4ed8] shadow-[0_4px_12px_rgba(37,99,235,0.24)]" />
          <div className="absolute inset-x-4 top-19 h-6 rounded-full bg-gradient-to-r from-[#d9e8ff] via-white to-[#c8dcff]" />
        </div>
        <div className="absolute left-1/2 top-1/2 h-48 w-40 -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] border border-slate-200/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(245,249,255,0.92)_100%)] shadow-[0_18px_40px_rgba(37,99,235,0.08)] sm:h-56 sm:w-48" aria-hidden />

        <motion.div
          aria-hidden
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 top-10 w-[9rem] rounded-[1.75rem] border border-white/70 bg-white/85 p-3 shadow-[0_16px_40px_rgba(37,99,235,0.08)] backdrop-blur-sm sm:left-3 sm:w-[10.5rem]"
        >
          <div className="flex items-center justify-between text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
            <span>Dashboard</span>
            <span className="flex size-5 items-center justify-center rounded-full bg-blue-50 text-primary">
              <ArrowUpRight className="size-3" />
            </span>
          </div>
          <div className="mt-3 grid grid-cols-5 items-end gap-1.5">
            <span className="h-5 rounded-t-sm bg-[#cfe0ff]" />
            <span className="h-8 rounded-t-sm bg-[#98b9ff]" />
            <span className="h-10 rounded-t-sm bg-[#4e85ff]" />
            <span className="h-7 rounded-t-sm bg-[#b8ccff]" />
            <span className="h-12 rounded-t-sm bg-[#2f6bff]" />
          </div>
        </motion.div>

        <motion.div
          aria-hidden
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-1 top-8 w-[9.5rem] rounded-[1.75rem] border border-white/70 bg-white/85 p-3 shadow-[0_16px_40px_rgba(37,99,235,0.08)] backdrop-blur-sm sm:right-4 sm:w-[11rem]"
        >
          <div className="flex items-center justify-between text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
            <span>Analytics</span>
            <span className="size-4 rounded-full border border-blue-100 bg-blue-50" />
          </div>
          <div className="mt-4 flex items-center justify-center">
            <div className="relative size-14 rounded-full border-[7px] border-blue-100 border-r-[#2f6bff] border-b-[#2f6bff] bg-white" />
          </div>
        </motion.div>

        <motion.div
          aria-hidden
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-10 bottom-4 w-[10rem] rounded-[1.75rem] border border-white/70 bg-white/85 p-3 shadow-[0_16px_40px_rgba(37,99,235,0.08)] backdrop-blur-sm sm:left-14 sm:w-[12rem]"
        >
          <div className="flex items-center gap-2 text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
            <span className="size-2 rounded-full bg-primary" />
            Data Flow
          </div>
          <div className="mt-3 rounded-2xl border border-slate-100 bg-slate-50 p-2">
            <div className="flex items-center justify-between text-[0.58rem] text-slate-400">
              <span>01</span>
              <span>04</span>
            </div>
            <div className="mt-2 h-1 rounded-full bg-blue-100">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#2f6bff] to-[#5ea0ff]" />
            </div>
          </div>
        </motion.div>

        <motion.div
          aria-hidden
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-4 bottom-12 w-[8.5rem] rounded-[1.6rem] border border-white/70 bg-white/85 p-3 shadow-[0_16px_40px_rgba(37,99,235,0.08)] backdrop-blur-sm sm:right-8 sm:w-[9.5rem]"
        >
          <div className="flex items-center gap-2 text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
            <span className="size-2 rounded-full bg-[#5ea0ff]" />
            Security
          </div>
          <div className="mt-3 flex items-center justify-center">
            <div className="flex size-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-primary">
              <ShieldCheck className="size-6" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#f7faff] py-10 sm:py-12 lg:py-16">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(59,130,246,0.14),transparent_26%),radial-gradient(circle_at_84%_12%,rgba(96,165,250,0.12),transparent_24%),linear-gradient(180deg,#ffffff_0%,#f7faff_100%)]"
        aria-hidden
      />

      <Container size="wide" className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center rounded-full bg-[#2463eb] px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(37,99,235,0.2)]">
              <Sparkles className="mr-2 size-3.5" aria-hidden />
              Our Expertise
            </span>

            <h1 className="mt-6 font-heading text-[clamp(3.1rem,7vw,5.45rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-slate-950 sm:text-[clamp(3.4rem,7vw,5.8rem)]">
              <span>Data </span>
              <span className="text-[#1d4ed8]">Services</span>
            </h1>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-1.5 w-28 rounded-full bg-[#2463eb]" />
              <div className="size-1.5 rounded-full bg-[#2463eb]/50" />
            </div>

            <p className="mt-7 max-w-xl text-[1.05rem] leading-8 text-slate-600 sm:text-[1.1rem]">
              Our Data Services are designed to empower businesses with the <span className="font-semibold text-[#1d4ed8]">Tools, Insights, and Strategies</span> needed to harness the full potential of our customers’ data assets. By partnering with us, you can unlock valuable opportunities, make data-driven decisions, and stay ahead in today’s Data-Centric world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <DataIllustration />
          </motion.div>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-5 xl:grid-rows-2">
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[1.7rem] border border-[#2f6bff] bg-[linear-gradient(180deg,#2463eb_0%,#0f4ed6_100%)] p-6 text-white shadow-[0_20px_60px_rgba(37,99,235,0.22)] xl:col-span-1 xl:row-span-2 xl:min-h-[37rem]"
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(125,211,252,0.28),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.08)_0%,transparent_24%)]"
              aria-hidden
            />
            <div className="relative flex h-full flex-col">
              <div className="flex size-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
                <Code2 className="size-6" />
              </div>
              <h2 className="mt-10 max-w-[12rem] font-heading text-[1.8rem] font-semibold leading-[1.15] tracking-[-0.04em] sm:text-[2rem]">
                Turn Data into Decisions. Drive Impact.
              </h2>
              <div className="mt-5 h-px w-8 bg-white/75" aria-hidden />

              <div className="mt-auto space-y-4 pt-10">
                {supportCards.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-3 rounded-2xl bg-white/8 p-3.5 backdrop-blur-[2px]">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white text-[#2463eb] shadow-sm">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="mt-1 text-xs leading-5 text-white/85">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 h-16 rounded-[1.35rem] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.06)_100%)]" aria-hidden />
            </div>
          </motion.article>

          {services.map((service, index) => {
            const Icon = service.icon;
            const isQuoteCard = index === services.length - 1;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={[
                  "relative overflow-hidden rounded-[1.45rem] border border-slate-200 bg-white p-5 shadow-[0_10px_28px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(37,99,235,0.09)]",
                  isQuoteCard ? "bg-[linear-gradient(180deg,#f3f7ff_0%,#eef4ff_100%)]" : "",
                ].join(" ")}
              >
                {isQuoteCard ? (
                  <>
                    <div className="flex h-full flex-col justify-between">
                      <div className="inline-flex size-10 items-center justify-center rounded-full bg-[#2463eb] text-white shadow-[0_12px_20px_rgba(37,99,235,0.2)]">
                        <span className="text-xl font-semibold leading-none">&ldquo;</span>
                      </div>
                      <p className="mt-8 max-w-[14rem] text-[1rem] leading-7 text-slate-700">
                        We don’t just manage data. We unlock its true potential.
                      </p>
                      <div className="mt-4 font-heading text-[1.35rem] font-semibold leading-[1.18] tracking-[-0.03em] text-[#1d4ed8]">
                        Your Data.
                        <br />
                        Our Expertise.
                        <br />
                        Limitless Possibilities.
                      </div>
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(59,130,246,0.1),transparent_28%),radial-gradient(circle_at_100%_40%,rgba(37,99,235,0.06),transparent_28%)]"
                      aria-hidden
                    />
                  </>
                ) : (
                  <>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex size-12 items-center justify-center rounded-full bg-[#edf4ff] text-[#1d4ed8] shadow-[0_8px_22px_rgba(37,99,235,0.08)]">
                        <Icon className="size-6" />
                      </div>
                      <span className="text-2xl font-semibold leading-none text-[#a5bbff]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-6 max-w-[14rem] font-heading text-[1.2rem] font-semibold leading-[1.15] tracking-[-0.03em] text-slate-950">
                      {service.title}
                    </h3>
                    <div className="mt-4 h-0.5 w-7 rounded-full bg-[#2463eb]" aria-hidden />
                    <p className="mt-4 text-[0.95rem] leading-7 text-slate-600">
                      {service.description}
                    </p>
                  </>
                )}
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
