"use client";

import { motion } from "motion/react";
import { DatabaseZap, Headset } from "lucide-react";
import { ProductFeatureList } from "./product-feature-list";

const platforms = [
  {
    name: "ITSM Platform",
    label: "Intelligent operations",
    icon: Headset,
    features: [
      "Ticket Automation",
      "AI Assistance",
      "Workflow Automation",
      "Reporting",
    ],
  },
  {
    name: "Test Data Platform",
    label: "Enterprise data readiness",
    icon: DatabaseZap,
    features: [
      "Data Generation",
      "ETL Validation",
      "Compliance",
      "Data Quality",
    ],
  },
] as const;

export function ProductComparison() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-3xl border border-white/8 bg-white/[0.025]"
      aria-labelledby="comparison-heading"
    >
      <div className="border-b border-white/8 px-6 py-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          Platform comparison
        </p>
        <h3 id="comparison-heading" className="mt-2 font-heading text-xl font-semibold">
          Purpose-built for distinct enterprise priorities
        </h3>
      </div>
      <div className="grid md:grid-cols-2 md:divide-x md:divide-white/8">
        {platforms.map(({ name, label, icon: Icon, features }) => (
          <div key={name} className="border-b border-white/8 p-6 last:border-b-0 md:border-b-0 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden />
              </span>
              <div>
                <p className="font-heading font-semibold">{name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{label}</p>
              </div>
            </div>
            <div className="mt-6">
              <ProductFeatureList features={features} columns={2} compact />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
