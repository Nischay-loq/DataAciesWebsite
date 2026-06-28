"use client";

import { motion, type Variants } from "motion/react";
import {
  BrainCircuit,
  Boxes,
  ChartNoAxesCombined,
  Lightbulb,
  Network,
  Rocket,
  type LucideIcon,
} from "lucide-react";

type TimelineStage = {
  stage: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const stages: TimelineStage[] = [
  {
    stage: "Foundation",
    title: "Building a Strong Consulting Foundation",
    description:
      "Data Acies began with a vision to help organizations solve complex technology challenges through consulting, engineering excellence, and business-driven innovation.",
    icon: Rocket,
  },
  {
    stage: "Expansion",
    title: "Expanding Digital Transformation Capabilities",
    description:
      "As organizations accelerated digital adoption, Data Acies expanded into Data Services, Digital Operations, Site Reliability Engineering, and enterprise technology solutions.",
    icon: ChartNoAxesCombined,
  },
  {
    stage: "Innovation",
    title: "Driving Enterprise Innovation",
    description:
      "The company strengthened its expertise in automation, intelligent workflows, and scalable digital platforms to help businesses operate more efficiently.",
    icon: Lightbulb,
  },
  {
    stage: "AI Transformation",
    title: "Entering the AI-First Era",
    description:
      "Data Acies embraced Artificial Intelligence, Generative AI, and Agentic AI to help organizations modernize decision-making and automate operations.",
    icon: BrainCircuit,
  },
  {
    stage: "Product Development",
    title: "Building Enterprise Products",
    description:
      "The company evolved beyond services by creating enterprise-grade software platforms including AI-powered ITSM solutions and intelligent Test Data Generation systems.",
    icon: Boxes,
  },
  {
    stage: "Future Vision",
    title: "Shaping Intelligent Enterprises",
    description:
      "Today Data Acies continues building AI-powered products, scalable data platforms, and intelligent automation solutions that help organizations thrive in a rapidly evolving digital world.",
    icon: Network,
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

export function CompanyTimeline() {
  return (
    <section
      aria-labelledby="company-journey-heading"
      className="relative overflow-hidden border-t border-white/5 bg-[oklch(0.082_0.018_260)] py-20 sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[150px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-container-x">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Company Journey
          </p>
          <h2
            id="company-journey-heading"
            className="mt-4 font-heading text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl"
          >
            From Consulting Foundation to AI-First Platforms
          </h2>
          <p className="mt-5 font-support text-base leading-relaxed text-muted-foreground sm:text-lg">
            Our story is not marked by artificial dates. It is defined by
            stages of capability, ambition, and enterprise impact.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mt-16 space-y-8 lg:mt-20"
        >
          <div
            className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-primary/35 to-transparent md:left-1/2 md:block"
            aria-hidden
          />
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={stage.stage}
                variants={item}
                className="relative grid gap-5 md:grid-cols-[1fr_72px_1fr] md:items-center"
              >
                <div className={isEven ? "md:text-right" : "md:col-start-3"}>
                  <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/[0.04]">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                      {stage.stage}
                    </p>
                    <h3 className="mt-3 font-heading text-xl font-semibold tracking-[-0.02em]">
                      {stage.title}
                    </h3>
                    <p className="mt-4 font-support text-sm leading-relaxed text-muted-foreground">
                      {stage.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-0 top-6 hidden md:static md:col-start-2 md:flex md:justify-center">
                  <motion.div
                    whileInView={{ scale: [0.92, 1.06, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, delay: 0.08 }}
                    className="relative z-10 flex size-14 items-center justify-center rounded-2xl border border-primary/30 bg-[#07101f] text-primary shadow-[0_0_40px_rgba(59,130,246,0.22)]"
                  >
                    <Icon className="size-6" aria-hidden />
                  </motion.div>
                </div>

                {isEven && <div className="hidden md:block" aria-hidden />}
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
