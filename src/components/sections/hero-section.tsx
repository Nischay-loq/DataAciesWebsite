"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { TypingHeadline } from "@/components/features/hero/typing-headline";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const outcomes = [
  "Reduce operational complexity",
  "Improve decision-making",
  "Accelerate enterprise delivery",
] as const;

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-slate-200 bg-white"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.06),transparent_34%),radial-gradient(circle_at_78%_24%,rgba(37,99,235,0.08),transparent_32%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-container-x py-20 sm:py-24 lg:min-h-[calc(100svh-6.5rem)] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-24 xl:gap-16">
        <div className="max-w-2xl">
          <motion.p
            custom={0}
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="text-sm font-semibold uppercase tracking-[0.16em] text-primary"
          >
            AI-first digital transformation
          </motion.p>

          <motion.h1
            id="hero-heading"
            custom={0.12}
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="mt-5 max-w-4xl font-heading text-[3rem] font-semibold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-[4rem] lg:text-[5.2rem] xl:text-[5.8rem]"
          >
            Engineering the Future of Intelligent Business
          </motion.h1>

          <motion.div
            custom={0.2}
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="mt-7 min-h-[3.25rem] sm:min-h-[4rem]"
          >
            <TypingHeadline
              startDelay={700}
              className="text-[2rem] font-semibold leading-tight tracking-[-0.035em] sm:text-[2.75rem] lg:text-[3.15rem]"
            />
          </motion.div>

          <motion.p
            custom={0.32}
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl text-lg leading-8 text-slate-600"
          >
            Data Acies helps enterprises modernize data platforms, automate
            workflows, and build intelligent software systems without adding
            unnecessary complexity.
          </motion.p>

          <motion.div
            custom={0.44}
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-3"
          >
            {outcomes.map((outcome) => (
              <div key={outcome} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{outcome}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            custom={0.56}
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href={`${ROUTES.contact}#contact-section`}
              className={cn(buttonVariants({ size: "lg" }), "h-11 rounded-full px-6 shadow-sm")}
            >
              Book a Consultation
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href={ROUTES.solutions}
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 rounded-full border-slate-300 bg-white px-6 text-slate-800",
              )}
            >
              Explore Solutions
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:pl-2 xl:pl-6"
        >
          <div
            className="absolute inset-6 -z-10 rounded-[2.5rem] bg-blue-100/70 blur-3xl"
            aria-hidden
          />
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-3 shadow-2xl shadow-slate-200/80 lg:rotate-[-1.5deg]">
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
              <video
                className="block aspect-[16/10] h-full max-h-[620px] w-full object-contain object-center"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                disablePictureInPicture
                disableRemotePlayback
                tabIndex={-1}
                aria-hidden
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support background video.
              </video>
            </div>
          </div>
          <p
            className="mt-4 text-center text-xs leading-5 text-slate-500 lg:text-right"
            aria-hidden
          >
            Enterprise platform preview
          </p>
        </motion.div>
      </div>
    </section>
  );
}
