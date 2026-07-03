"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
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

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,rgba(248,250,252,0.92)_0%,#ffffff_34%,rgba(243,248,255,0.88)_100%)]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.08),transparent_26%),radial-gradient(circle_at_82%_24%,rgba(59,130,246,0.06),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.35),transparent_45%)]"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col px-container-x py-16 sm:py-20 lg:py-24">
        <div className="grid flex-1 items-center gap-12 lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] lg:gap-16 xl:gap-20">
          {/* LEFT COLUMN — content only, capped for readability, vertically centered */}
          <div className="w-full max-w-[520px]">
            <motion.p
              custom={0}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary"
            >
              AI-FIRST DIGITAL TRANSFORMATION
            </motion.p>

            <motion.h1
              id="hero-heading"
              custom={0.1}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="mt-5 font-heading text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-[3.2rem] lg:text-[3.5rem] xl:text-[3.9rem]"
            >
              Engineering the Future of Intelligent Business
            </motion.h1>

            <motion.div
              custom={0.24}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="mt-5 min-h-12 sm:min-h-14"
            >
              <TypingHeadline
                startDelay={900}
                className="text-[1.5rem] font-semibold leading-tight tracking-[-0.03em] text-primary sm:text-[1.85rem] lg:text-[2.1rem]"
              />
            </motion.div>

            <motion.p
              custom={0.36}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="mt-6 text-[1.05rem] leading-8 text-slate-600 sm:text-lg"
            >
              We design, build, and operate scalable digital solutions that help
              enterprises automate workflows, improve decision-making, and
              accelerate growth.
            </motion.p>

            <motion.div
              custom={0.48}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href={`${ROUTES.contact}#contact-section`}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full px-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md",
                )}
              >
                Book a Consultation
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href={ROUTES.solutions}
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-12 rounded-full border-slate-300 bg-white px-7 text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 hover:shadow-sm",
                )}
              >
                Explore Solutions
              </Link>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — video only, fully visible, never cropped, right-aligned */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex w-full items-center justify-center lg:justify-end"
          >
            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_62%)] blur-2xl"
              aria-hidden
            />
            <div className="w-full max-w-[46rem] rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-4">
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50">
                <video
                  className="block aspect-[1024/592] h-auto w-full object-contain"
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
                  <source src="/DataAcies_video.mp4" type="video/mp4" />
                  Your browser does not support background video.
                </video>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
