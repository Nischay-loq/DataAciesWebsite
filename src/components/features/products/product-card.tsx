"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  Database,
  GitBranch,
  Headphones,
  Layers3,
  Network,
  ServerCog,
  Sparkles,
} from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ProductFeatureList } from "./product-feature-list";

export type ProductData = {
  id: string;
  name: string;
  tag: string;
  headline: string;
  description: string;
  features: readonly string[];
  outcomes: readonly string[];
  visual: "itsm" | "data";
};

function WindowFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080d18]/95 shadow-[0_28px_80px_rgba(0,0,0,0.45),0_0_50px_rgba(59,130,246,0.09)]">
      <div className="flex h-10 items-center justify-between border-b border-white/8 bg-white/[0.025] px-4">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2 rounded-full bg-white/15" />
          <span className="size-2 rounded-full bg-white/10" />
          <span className="size-2 rounded-full bg-primary/35" />
        </div>
        <span className="text-[0.6rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </span>
        <span className="size-5 rounded-md border border-white/8 bg-white/[0.035]" />
      </div>
      {children}
    </div>
  );
}

function ITSMVisual() {
  const tickets = [
    { id: "INC-2841", title: "Payment gateway latency", priority: "Critical", color: "bg-rose-400" },
    { id: "INC-2838", title: "Identity sync failure", priority: "High", color: "bg-amber-400" },
    { id: "REQ-9172", title: "Access provisioning", priority: "Normal", color: "bg-sky-400" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 18 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle,rgba(37,99,235,0.18),transparent_65%)] blur-2xl" aria-hidden />
      <WindowFrame label="Command center / live">
        <div className="grid min-h-[380px] grid-cols-[48px_1fr] sm:grid-cols-[62px_1fr]">
          <div className="flex flex-col items-center gap-4 border-r border-white/8 bg-white/[0.018] py-4">
            {[Layers3, Headphones, CircleDot, GitBranch].map((Icon, index) => (
              <span key={index} className={cn("flex size-8 items-center justify-center rounded-lg", index === 1 ? "bg-primary/15 text-primary" : "text-white/25")}>
                <Icon className="size-3.5" aria-hidden />
              </span>
            ))}
          </div>
          <div className="min-w-0 p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[0.625rem] uppercase tracking-[0.14em] text-muted-foreground">Service Operations</p>
                <p className="mt-1 text-sm font-semibold">Incident Overview</p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/8 px-2 py-1 text-[0.6rem] text-emerald-300">
                <span className="size-1.5 rounded-full bg-emerald-400" /> Live
              </span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                ["Open", "284", "+8%"],
                ["Resolved", "1,942", "+24%"],
                ["SLA", "98.7%", "Healthy"],
              ].map(([label, value, trend]) => (
                <div key={label} className="rounded-lg border border-white/8 bg-white/[0.025] p-2.5">
                  <p className="text-[0.55rem] uppercase tracking-wider text-muted-foreground">{label}</p>
                  <p className="mt-1 text-sm font-semibold sm:text-base">{value}</p>
                  <p className="mt-1 text-[0.55rem] text-primary">{trend}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-2 rounded-xl border border-white/8 bg-white/[0.018] p-3">
                <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-wider text-muted-foreground">
                  <span>Live tickets</span><span>Priority</span>
                </div>
                {tickets.map((ticket) => (
                  <div key={ticket.id} className="rounded-lg border border-white/7 bg-white/[0.025] p-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[0.6rem] text-primary">{ticket.id}</span>
                      <span className="flex items-center gap-1 text-[0.55rem] text-muted-foreground">
                        <span className={cn("size-1.5 rounded-full", ticket.color)} />{ticket.priority}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-[0.7rem] font-medium">{ticket.title}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-primary/18 bg-primary/[0.055] p-3">
                <div className="flex items-center gap-2 text-primary">
                  <Bot className="size-3.5" aria-hidden />
                  <span className="text-[0.6rem] font-semibold uppercase tracking-wider">AI recommendation</span>
                </div>
                <p className="mt-3 text-[0.68rem] leading-relaxed text-white/70">
                  Similar incidents indicate a connection pool threshold. Apply the verified remediation workflow.
                </p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/8">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "92%" }} transition={{ duration: 1.2, delay: 0.4 }} className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-400" />
                </div>
                <div className="mt-2 flex justify-between text-[0.55rem] text-muted-foreground">
                  <span>Confidence</span><span>92%</span>
                </div>
                <div className="mt-4 rounded-md border border-primary/20 bg-primary/12 py-2 text-center text-[0.6rem] font-medium text-primary">
                  Review workflow
                </div>
              </div>
            </div>
          </div>
        </div>
      </WindowFrame>
    </motion.div>
  );
}

function DataVisual() {
  const pipeline = [
    { label: "Sources", icon: Database },
    { label: "Generate", icon: Sparkles },
    { label: "Validate", icon: CheckCircle2 },
    { label: "Provision", icon: ServerCog },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 18 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle,rgba(14,165,233,0.15),transparent_65%)] blur-2xl" aria-hidden />
      <WindowFrame label="Data factory / pipeline 07">
        <div className="min-h-[380px] p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[0.625rem] uppercase tracking-[0.14em] text-muted-foreground">Synthetic Data Engine</p>
              <p className="mt-1 text-sm font-semibold">Enterprise provisioning pipeline</p>
            </div>
            <Network className="size-5 text-primary" aria-hidden />
          </div>

          <div className="relative mt-8 grid grid-cols-4 gap-2">
            <div className="absolute left-[10%] right-[10%] top-5 h-px bg-gradient-to-r from-primary/20 via-cyan-400/70 to-primary/20" aria-hidden>
              <motion.span animate={{ x: [0, 260, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="absolute -top-1 block size-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)] motion-reduce:hidden" />
            </div>
            {pipeline.map(({ label, icon: Icon }, index) => (
              <div key={label} className="relative z-10 text-center">
                <span className={cn("mx-auto flex size-10 items-center justify-center rounded-xl border bg-[#0b1220]", index === 2 ? "border-emerald-400/35 text-emerald-300" : "border-primary/25 text-primary")}>
                  <Icon className="size-4" aria-hidden />
                </span>
                <p className="mt-2 text-[0.58rem] text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-[1fr_0.8fr]">
            <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
              <div className="flex items-center justify-between">
                <span className="text-[0.6rem] uppercase tracking-wider text-muted-foreground">Dataset generation</span>
                <span className="text-[0.6rem] text-emerald-300">Running</span>
              </div>
              <div className="mt-5 flex h-24 items-end gap-1.5" aria-label="Dataset volume chart">
                {[36, 58, 44, 74, 61, 86, 69, 95, 78, 90, 72, 100].map((height, index) => (
                  <motion.span key={index} initial={{ height: 0 }} whileInView={{ height: `${height}%` }} transition={{ duration: 0.55, delay: index * 0.04 }} className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/25 to-cyan-400/80" />
                ))}
              </div>
              <div className="mt-3 flex justify-between text-[0.55rem] text-muted-foreground">
                <span>1.8M records</span><span>99.8% valid</span>
              </div>
            </div>
            <div className="space-y-2">
              {[
                ["Schema validation", "100%", "text-emerald-300"],
                ["PII masking", "Active", "text-cyan-300"],
                ["Referential integrity", "99.9%", "text-emerald-300"],
                ["Compliance rules", "24/24", "text-primary"],
              ].map(([label, value, color]) => (
                <div key={label} className="flex items-center justify-between rounded-lg border border-white/8 bg-white/[0.02] px-3 py-2.5">
                  <span className="text-[0.6rem] text-muted-foreground">{label}</span>
                  <span className={cn("text-[0.62rem] font-medium", color)}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </WindowFrame>
    </motion.div>
  );
}

export function ProductCard({ product, reverse = false }: { product: ProductData; reverse?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const visibleFeatures = product.features.slice(0, 6);
  const extraFeatures = product.features.slice(6);
  const panelId = `${product.id}-feature-details`;

  return (
    <motion.article
      id={product.id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative scroll-mt-24 overflow-hidden rounded-[2rem] border border-white/8 bg-gradient-to-br from-white/[0.055] to-white/[0.018] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.24)] sm:p-8 lg:p-10"
    >
      <div className="pointer-events-none absolute right-0 top-0 size-72 rounded-full bg-primary/8 blur-[100px]" aria-hidden />
      <div className={cn("relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14", reverse && "lg:[&>*:first-child]:order-2")}>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-primary">
              {product.tag}
            </span>
            <span className="text-xs text-muted-foreground">{product.name}</span>
          </div>
          <h3 className="mt-6 font-heading text-2xl font-semibold leading-tight tracking-[-0.025em] sm:text-3xl xl:text-[2.15rem]">
            {product.headline}
          </h3>
          <p className="mt-5 font-support text-sm leading-[1.75] text-muted-foreground sm:text-base">
            {product.description}
          </p>

          <div className="mt-7">
            <p className="mb-4 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-foreground/65">Core capabilities</p>
            <ProductFeatureList features={visibleFeatures} />
            <AnimatePresence initial={false}>
              {expanded && extraFeatures.length > 0 && (
                <motion.div id={panelId} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="pt-3">
                    <ProductFeatureList features={extraFeatures} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {product.outcomes.map((outcome) => (
              <span key={outcome} className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2 text-xs text-foreground/80">
                {outcome}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls={extraFeatures.length > 0 ? panelId : undefined}
              onClick={() => setExpanded((value) => !value)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/[0.035] px-5 text-sm font-medium transition-colors hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {expanded ? "Show Less" : "Learn More"}
              <ChevronDown className={cn("size-4 transition-transform", expanded && "rotate-180")} aria-hidden />
            </button>
            <Link href={ROUTES.contact} className={cn(buttonVariants({ size: "lg" }), "h-11 px-5 shadow-glow-sm")}>
              Book Demo
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="min-w-0">{product.visual === "itsm" ? <ITSMVisual /> : <DataVisual />}</div>
      </div>
    </motion.article>
  );
}
