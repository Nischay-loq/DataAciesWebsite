"use client";

import { motion } from "motion/react";
import { BrainCircuit, Database, LineChart, Shield, type LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/container";

type Service = {
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "AI Strategy",
    problem: "AI initiatives often stall when use cases are unclear.",
    solution: "We define practical roadmaps, governance, and adoption plans.",
    outcome: "Leadership teams can invest with confidence and measurable priorities.",
    icon: BrainCircuit,
  },
  {
    title: "Data Engineering",
    problem: "Fragmented data limits visibility across the enterprise.",
    solution: "We design reliable pipelines, platforms, and data products.",
    outcome: "Teams gain trusted data for reporting, analytics, and automation.",
    icon: Database,
  },
  {
    title: "Digital Operations",
    problem: "Manual work slows service delivery and creates operational risk.",
    solution: "We streamline workflows with automation and intelligent systems.",
    outcome: "Operations become faster, more consistent, and easier to scale.",
    icon: LineChart,
  },
  {
    title: "Enterprise Governance",
    problem: "Growth increases compliance, security, and reliability demands.",
    solution: "We embed secure, responsible practices into technology delivery.",
    outcome: "Organizations modernize while protecting trust and resilience.",
    icon: Shield,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="border-t border-slate-200 bg-slate-50 py-20 sm:py-24">
      <Container size="wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Services
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
            Practical capabilities for complex enterprise challenges
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Each engagement connects the business problem to a clear technical
            approach and an outcome leaders can measure.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex size-11 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-semibold text-slate-950">
                  {service.title}
                </h3>
                <dl className="mt-5 space-y-4 text-sm leading-6">
                  <div>
                    <dt className="font-semibold text-slate-950">Problem</dt>
                    <dd className="mt-1 text-slate-600">{service.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-950">How we solve it</dt>
                    <dd className="mt-1 text-slate-600">{service.solution}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-950">Business outcome</dt>
                    <dd className="mt-1 text-slate-600">{service.outcome}</dd>
                  </div>
                </dl>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
