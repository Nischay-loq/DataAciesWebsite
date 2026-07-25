"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  AlertCircle,
  Building2,
  CheckCircle2,
  Clock3,
  Lightbulb,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/container";
import { ContactForm } from "./contact-form";

const trustItems = [
  {
    title: "Response within 24 hours",
    description: "A member of our consultation team reviews every request.",
    icon: Clock3,
  },
  {
    title: "Enterprise-ready guidance",
    description: "We focus on practical next steps, not generic sales pitches.",
    icon: ShieldCheck,
  },
  {
    title: "Global delivery capability",
    description: "Teams across the United States and India support delivery.",
    icon: Building2,
  },
] as const;

export function ContactSection() {
  return (
    <section
      id="contact-section"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24 overflow-hidden border-t border-slate-200 bg-slate-50/80 py-20 sm:py-24"
    >
      {/* Background Orbs */}
      <div
        className="pointer-events-none absolute -left-20 top-1/4 size-80 rounded-full bg-blue-100/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-1/4 size-96 rounded-full bg-sky-100/40 blur-3xl"
        aria-hidden="true"
      />

      <Container size="wide" className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
          {/* ── Left Column (Slides in from Left) ────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              <span className="size-2 rounded-full bg-blue-600 animate-pulse" />
              Contact Data Acies
            </span>
            <h1
              id="contact-heading"
              className="mt-4 font-heading text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-5xl leading-tight"
            >
              Start with a clear business problem
            </h1>
            <p className="mt-5 max-w-xl text-xl sm:text-2xl font-normal leading-relaxed text-slate-700">
              Tell us what needs to improve. We&apos;ll help identify the right
              mix of data, AI, automation, product, and delivery capabilities to
              create measurable outcomes.
            </p>

            {/* Problem / Solution / Outcome Cards (Color-Coded 4px Left Border) */}
            <div className="mt-8 grid gap-4">
              {/* Problem Card */}
              <div className="rounded-2xl rounded-l-none border border-slate-200/90 border-l-4 border-l-amber-500 bg-white p-5.5 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-2">
                  <AlertCircle className="size-5 text-amber-500" />
                  <p className="text-base font-bold text-slate-950">Problem</p>
                </div>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  Enterprise teams often know what needs to improve but need a
                  clear path from challenge to execution.
                </p>
              </div>

              {/* Solution Card */}
              <div className="rounded-2xl rounded-l-none border border-slate-200/90 border-l-4 border-l-blue-600 bg-white p-5.5 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-2">
                  <Lightbulb className="size-5 text-blue-600" />
                  <p className="text-base font-bold text-slate-950">
                    How Data Acies solves it
                  </p>
                </div>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  We assess the business context, identify practical options,
                  and recommend a focused transformation approach.
                </p>
              </div>

              {/* Outcome Card */}
              <div className="rounded-2xl rounded-l-none border border-slate-200/90 border-l-4 border-l-emerald-500 bg-white p-5.5 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-5 text-emerald-500" />
                  <p className="text-base font-bold text-slate-950">Business outcome</p>
                </div>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  You leave the first conversation with clearer priorities,
                  next steps, and measurable success criteria.
                </p>
              </div>
            </div>

            {/* Trust Badges (Staggered Entrance + Hover Glow) */}
            <div className="mt-10 grid gap-4">
              {trustItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: 0.2 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group rounded-2xl border border-slate-200 bg-white p-5.5 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-[0_10px_28px_rgba(37,99,235,0.12)] hover:-translate-y-0.5"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                        <Icon className="size-6" />
                      </div>
                      <div>
                        <h2 className="font-heading text-lg font-bold text-slate-950">
                          {item.title}
                        </h2>
                        <p className="mt-1 text-base leading-relaxed text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Contact Info (Icon-in-circle Treatment) */}
            <div className="mt-10 space-y-4 pt-6 border-t border-slate-200/80">
              <Link
                href={`mailto:${siteConfig.contact.email}`}
                className="group flex items-center gap-3.5 text-base sm:text-lg font-semibold text-slate-800 transition-colors hover:text-blue-600"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Mail className="size-5" />
                </div>
                <span>{siteConfig.contact.email}</span>
              </Link>
              <div className="flex items-center gap-3.5 text-base sm:text-lg font-semibold text-slate-800">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-blue-600">
                  <MapPin className="size-5" />
                </div>
                <span>{siteConfig.contact.address}</span>
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: Form Container (Slides in from Right) ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white shadow-xl shadow-slate-200/60"
          >
            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
