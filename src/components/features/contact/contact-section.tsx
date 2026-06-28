"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Building2, Clock3, Mail, MapPin, ShieldCheck } from "lucide-react";
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
      className="scroll-mt-24 border-t border-slate-200 bg-slate-50 py-20 sm:py-24"
    >
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Contact Data Acies
            </p>
            <h1
              id="contact-heading"
              className="mt-4 font-heading text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl"
            >
              Start with a clear business problem
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Tell us what needs to improve. We&apos;ll help identify the right
              mix of data, AI, automation, product, and delivery capabilities to
              create measurable outcomes.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-950">Problem</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Enterprise teams often know what needs to improve but need a
                  clear path from challenge to execution.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-950">
                  How Data Acies solves it
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We assess the business context, identify practical options,
                  and recommend a focused transformation approach.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-950">Business outcome</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  You leave the first conversation with clearer priorities,
                  next steps, and measurable success criteria.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-4">
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <h2 className="font-heading text-base font-semibold text-slate-950">
                          {item.title}
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 space-y-3 text-sm text-slate-600">
              <Link href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 hover:text-primary">
                <Mail className="size-4" />
                {siteConfig.contact.email}
              </Link>
              <p className="flex items-center gap-3">
                <MapPin className="size-4 text-primary" />
                {siteConfig.contact.address}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-[2rem] border border-slate-200 bg-white shadow-lg shadow-slate-200/60"
          >
            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
