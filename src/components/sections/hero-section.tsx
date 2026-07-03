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

const trustItems = ["AI Solutions", "Enterprise Platforms", "Intelligent Automation", "Global Delivery"] as const;

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

      <div className="relative mx-auto max-w-7xl px-container-x py-20 sm:py-24 lg:min-h-[calc(100svh-6.5rem)] lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.98fr)] lg:items-stretch xl:gap-20">
          <div className="max-w-2xl">
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
              className="mt-5 max-w-4xl font-heading text-[2.9rem] font-semibold leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-[4rem] lg:text-[5.1rem] xl:text-[5.6rem]"
            >
              Engineering the Future of Intelligent Business
            </motion.h1>

            <motion.div
              custom={0.24}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="mt-6 min-h-14 sm:min-h-16"
            >
              <TypingHeadline
                startDelay={900}
                className="text-[1.9rem] font-semibold leading-tight tracking-[-0.04em] text-primary sm:text-[2.4rem] lg:text-[2.95rem]"
              />
            </motion.div>

            <motion.p
              custom={0.36}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-xl text-[1.05rem] leading-8 text-slate-600 sm:text-lg"
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

            <motion.div
              custom={0.6}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2"
            >
              {trustItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.64 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto flex h-full w-full max-w-[40rem] self-stretch lg:ml-auto lg:mr-0 lg:max-w-none"
          >
            <div
              className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_62%)] blur-2xl"
              aria-hidden
            />
            <div className="flex h-full min-h-[32rem] w-full rounded-[2.25rem] border border-slate-200 bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-4 lg:min-h-[calc(100svh-13rem)]">
              <div className="relative h-full min-h-[30rem] w-full overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 lg:min-h-[calc(100svh-15rem)]">
                <video
                  className="block h-full w-full object-cover object-center"
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
