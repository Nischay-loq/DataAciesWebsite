"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { ROUTES } from "@/constants/routes";
import { Container } from "@/components/layout/container";

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function TechnologyAssistanceSection() {
  return (
    <section
      aria-labelledby="technology-assistance-heading"
      className="relative overflow-hidden px-4 pb-12 pt-4 sm:px-6 sm:pb-16 lg:px-8"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.08),transparent_28%),radial-gradient(circle_at_82%_28%,rgba(96,165,250,0.08),transparent_30%),linear-gradient(180deg,rgba(248,250,252,0.98)_0%,rgba(244,248,255,0.88)_100%)]"
        aria-hidden
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-6 top-12 hidden size-48 rounded-full bg-blue-200/20 blur-3xl sm:block lg:left-16"
        animate={{ x: [0, 14, 0], y: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-8 top-24 hidden size-64 rounded-full bg-sky-200/20 blur-3xl sm:block lg:right-16"
        animate={{ x: [0, -16, 0], y: [0, 12, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl rounded-[2.25rem] border border-slate-200/70 bg-white/80 px-6 py-16 shadow-[0_18px_55px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:px-10 sm:py-20 lg:px-14 lg:py-24">
        <Container className="relative px-0">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              custom={0}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50 px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-primary">
                <Sparkles className="size-3.5" aria-hidden />
                Professional Technology Assistance
              </span>
            </motion.div>

            <motion.h2
              id="technology-assistance-heading"
              custom={0.08}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="mx-auto mt-6 max-w-4xl font-heading text-[clamp(2.35rem,6vw,4.4rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-slate-950"
            >
              Professional Technology Assistance
            </motion.h2>

            <motion.p
              custom={0.16}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-8 text-slate-600"
            >
              Where Technology Meets Tailored Solutions and Innovation Drives
              Success
            </motion.p>

            <motion.div
              custom={0.24}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-10"
            >
              <Link
                href={ROUTES.contact}
                aria-label="Contact Us for IT Consulting"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-blue-200/80 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-[0_18px_42px_rgba(37,99,235,0.14)]"
              >
                <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent_10%,rgba(59,130,246,0.12)_45%,transparent_80%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg,rgba(59,130,246,0),rgba(59,130,246,1),rgba(125,211,252,1),rgba(59,130,246,0))",
                  }}
                />
                <span className="relative">IT Consulting</span>
                <span className="relative flex size-7 items-center justify-center rounded-full bg-blue-50 text-primary transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-16 h-px max-w-4xl origin-left"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(0,0,0,0),rgba(125,211,252,0.7),rgba(0,0,0,0))",
            }}
            aria-hidden
          />

          <motion.div
            aria-hidden
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none mx-auto mt-10 max-w-5xl"
          >
            <div className="h-14 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)] [clip-path:polygon(0_55%,14%_36%,32%_48%,50%_64%,68%_49%,86%_35%,100%_56%,100%_100%,0_100%)]" />
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
