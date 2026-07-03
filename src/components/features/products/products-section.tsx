"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, BarChart3, CheckCircle2, Database, Headphones } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const products = [
  {
    title: "AI-Powered ITSM Platform",
    tag: "Service Operations",
    icon: Headphones,
    problem: "High ticket volumes, manual triage, and slow response times strain support teams.",
    solution:
      "AI-assisted classification, routing, summarization, SLA visibility, and resolution recommendations.",
    outcome:
      "Faster incident resolution, better service quality, and clearer operational visibility.",
    features: ["Ticket Automation", "AI Assistance", "Workflow Orchestration", "Reporting"],
  },
  {
    title: "Enterprise Test Data Generation Platform",
    tag: "Data Quality",
    icon: Database,
    problem: "Testing slows down when data is incomplete, risky to use, or hard to prepare.",
    solution:
      "Synthetic data generation, masking, ETL validation, data quality checks, and dataset provisioning.",
    outcome:
      "Faster QA cycles, reduced testing cost, improved accuracy, and accelerated releases.",
    features: ["Data Generation", "ETL Validation", "Compliance Support", "Data Quality"],
  },
] as const;

const metrics = [
  "Faster Incident Resolution",
  "Reduced Manual Effort",
  "Improved Data Quality",
  "Accelerated Software Delivery",
] as const;

export function ProductsSection() {
  return (
    <section id="products-section" className="bg-white py-20 sm:py-24 lg:py-28">
      <Container size="wide">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Products
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl">
            Software platforms built for enterprise operations
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Data Acies builds practical platforms that solve operational
            bottlenecks, data readiness challenges, and decision-making delays.
          </p>
        </motion.div>

        <div className="mt-14 space-y-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.article
                key={product.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="grid gap-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg lg:grid-cols-[0.85fr_1.15fr] lg:p-8"
              >
                <div>
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                    <Icon className="size-6" />
                  </div>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                    {product.tag}
                  </p>
                  <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.025em] text-slate-950">
                    {product.title}
                  </h2>
                  <div className="mt-7 grid gap-5">
                    <InfoBlock label="Problem" text={product.problem} />
                    <InfoBlock label="How Data Acies solves it" text={product.solution} />
                    <InfoBlock label="Business outcome" text={product.outcome} />
                  </div>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link href={ROUTES.contact} className={cn(buttonVariants(), "rounded-full px-5")}>
                      Book a Demo
                    </Link>
                    <Link
                      href={ROUTES.whatWeSolve}
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "rounded-full border-slate-300 bg-white px-5 text-slate-800",
                      )}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {product.features.map((feature) => (
                      <div key={feature} className="rounded-2xl border border-slate-200 bg-white p-4">
                        <CheckCircle2 className="size-5 text-primary" />
                        <p className="mt-4 font-medium text-slate-950">{feature}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          Clear visibility, accountable workflow, and reliable execution.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-14 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <BarChart3 className="size-6 text-primary" />
            <h2 className="font-heading text-2xl font-semibold text-slate-950">
              Driving measurable outcomes
            </h2>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl bg-slate-50 p-4"
              >
                <span className="font-mono text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-medium text-slate-900">{metric}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-[2rem] bg-slate-950 p-8 text-white lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-heading text-3xl font-semibold">
                Ready to see these platforms in action?
              </h2>
              <p className="mt-3 max-w-2xl text-slate-300">
                Schedule a consultation to discover how our products can
                improve operations, data quality, and enterprise delivery.
              </p>
            </div>
            <Link href={ROUTES.contact} className={cn(buttonVariants(), "rounded-full bg-white px-6 text-slate-950 hover:bg-slate-100")}>
              Book a Demo
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function InfoBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-sm font-semibold text-slate-950">{label}</p>
      <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}
