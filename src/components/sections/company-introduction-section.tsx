"use client";

import { motion } from "motion/react";
import { Building2, Cloud, Network } from "lucide-react";
import { IntroFeaturePanel } from "@/components/features/introduction/intro-feature-panel";

const features = [
  {
    title: "Cloud, Data Engineering & Site Reliability Engineering",
    description:
      "Scalable cloud platforms and modern data engineering built for reliability.",
    Icon: Cloud,
  },
  {
    title: "Technology Consulting & Strategic Staffing",
    description:
      "Specialized consulting and staffing that help teams move faster.",
    Icon: Building2,
  },
  {
    title: "Innovation Through the Right Technology Landscape",
    description:
      "Practical innovation aligned to the right platforms and outcomes.",
    Icon: Network,
  },
] as const;

export function CompanyIntroductionSection() {
  return (
    <div className="relative my-8 overflow-hidden py-4 sm:my-12">
      {/* Conveyor Belt Continuous Motion Container */}
      <div className="relative mx-auto max-w-7xl overflow-hidden">
        {/* Soft Side Fade Gradients */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-28"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-28"
          aria-hidden="true"
        />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          className="flex w-max transform-gpu gap-6 pb-4 pt-2 will-change-transform"
        >
          {features.concat(features).map((feature, index) => {
            const Icon = feature.Icon;
            return (
              <IntroFeaturePanel
                key={`${feature.title}-${index}`}
                icon={<Icon className="size-8 sm:size-9" strokeWidth={1.6} />}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
