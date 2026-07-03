"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { BarChart3, Bot, DatabaseZap, GitBranch, Headphones, Workflow } from "lucide-react";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { ProblemCard, type ProblemChallenge } from "./ProblemCard";

const challenges: ProblemChallenge[] = [
  {
    id: "manual-operations",
    title: "Manual & Repetitive Operations",
    problem: "Teams spend valuable time performing repetitive manual tasks.",
    solution: "Automate workflows and streamline operations using intelligent systems.",
    visual: "workflow",
    icon: Workflow,
    outcomes: ["Faster Processes", "Reduced Manual Effort", "Improved Productivity"],
  },
  {
    id: "support-bottlenecks",
    title: "IT Support Bottlenecks",
    problem: "Growing ticket volumes overwhelm support teams and increase response times.",
    solution: "Use AI-powered service management and intelligent ticket routing.",
    visual: "tickets",
    icon: Headphones,
    outcomes: ["Faster Resolution", "Improved Service Quality", "Better Visibility"],
  },
  {
    id: "data-quality-testing",
    title: "Poor Data Quality & Testing",
    problem: "Inaccurate, incomplete, or inconsistent data delays software delivery.",
    solution: "Generate enterprise-grade test data and automate validation processes.",
    visual: "data-quality",
    icon: DatabaseZap,
    outcomes: ["Higher Quality", "Faster Testing", "Lower Risk"],
  },
  {
    id: "disconnected-systems",
    title: "Disconnected Business Systems",
    problem: "Critical information is spread across multiple systems and teams.",
    solution: "Create unified data platforms and connected digital ecosystems.",
    visual: "systems",
    icon: GitBranch,
    outcomes: ["Unified Data", "Better Insights", "Improved Collaboration"],
  },
  {
    id: "slow-decisions",
    title: "Slow Decision Making",
    problem: "Organizations struggle to turn raw data into actionable insights.",
    solution: "Leverage AI, analytics, and intelligent automation to accelerate decisions.",
    visual: "decisions",
    icon: BarChart3,
    outcomes: ["Real-Time Insights", "Faster Decisions", "Business Agility"],
  },
  {
    id: "scaling-operations",
    title: "Scaling Enterprise Operations",
    problem: "Growth creates operational complexity and process inefficiencies.",
    solution: "Deploy scalable digital platforms designed for enterprise expansion.",
    visual: "scale",
    icon: Bot,
    outcomes: ["Scalability", "Operational Efficiency", "Future Readiness"],
  },
];

export const whatWeSolveMotion = {
  sectionHeader: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  } satisfies Variants,
  headerItem: {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  } satisfies Variants,
  cardGrid: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
  } satisfies Variants,
};

export function WhatWeSolveSection() {
  return (
    <section
      id="what-we-solve"
      aria-labelledby="what-we-solve-heading"
      className="scroll-mt-24 border-t border-slate-200 bg-slate-50 py-20 sm:py-24"
    >
      <Container size="wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={whatWeSolveMotion.sectionHeader}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={whatWeSolveMotion.headerItem}
            className="text-sm font-semibold uppercase tracking-[0.16em] text-primary"
          >
            What We Solve
          </motion.p>
          <motion.h2
            id="what-we-solve-heading"
            variants={whatWeSolveMotion.headerItem}
            className="mt-4 font-heading text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl"
          >
            Solving operational problems before they become growth barriers
          </motion.h2>
          <motion.p
            variants={whatWeSolveMotion.headerItem}
            className="mt-5 text-lg leading-8 text-slate-600"
          >
            Modern organizations face fragmented systems, manual processes,
            data quality issues, and decision delays. Data Acies turns these
            into practical transformation opportunities.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={whatWeSolveMotion.cardGrid}
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {challenges.map((challenge) => (
            <ProblemCard key={challenge.id} challenge={challenge} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="font-heading text-3xl font-semibold tracking-[-0.025em] text-slate-950">
                Every challenge is an opportunity for transformation
              </h3>
              <p className="mt-3 max-w-2xl text-slate-600">
                Our products, platforms, and services solve real business
                problems while creating measurable outcomes.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href={ROUTES.products} className={cn(buttonVariants(), "rounded-full px-5")}> 
                Explore Products
              </Link>
              <Link
                href={`${ROUTES.contact}#contact-section`}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "rounded-full border-slate-300 bg-white px-5 text-slate-800",
                )}
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
