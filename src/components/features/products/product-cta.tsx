"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, CalendarDays } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function ProductCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/12 via-white/[0.035] to-indigo-500/10 px-6 py-12 text-center shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:px-10 sm:py-16"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-[70%] -translate-x-1/2 rounded-full bg-primary/15 blur-[90px]" aria-hidden />
      <div className="relative">
        <span className="mx-auto flex size-11 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
          <CalendarDays className="size-5" aria-hidden />
        </span>
        <h3 className="mt-6 font-heading text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
          Ready to See These Platforms in Action?
        </h3>
        <p className="mx-auto mt-4 max-w-2xl font-support text-sm leading-relaxed text-muted-foreground sm:text-base">
          Schedule a consultation to discover how our products can transform your operations.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href={ROUTES.contact}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 bg-gradient-to-r from-blue-500 to-indigo-500 px-6 text-white shadow-[0_12px_35px_rgba(59,130,246,0.25)] hover:from-blue-400 hover:to-indigo-400",
            )}
          >
            Book a Demo
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <Link
            href={ROUTES.contact}
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-11 border-white/12 bg-white/[0.035] px-6",
            )}
          >
            Talk to an Expert
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
