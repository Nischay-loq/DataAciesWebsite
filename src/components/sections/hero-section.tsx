"use client";

import Image from "next/image";
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
      className="relative overflow-hidden border-b border-slate-200 bg-white"
    >
      {/* Background Graphic: Hero_Image.png positioned so its left white space forms the canvas for hero text and its right 3D objects are 100% visible and uncropped */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <Image
          src="/Hero_Image.png"
          alt="Data Acies AI & Data Ecosystem Architecture"
          fill
          priority
          quality={100}
          unoptimized
          className="object-contain object-right"
        />
      </div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col px-container-x py-12 sm:py-16 lg:py-24">
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-12">
          {/* HERO TEXT — positioned directly over the white space on the left side of Hero_Image */}
          <div className="z-10 w-full max-w-[560px] lg:col-span-7 xl:col-span-6">
            <motion.p
              custom={0}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50/90 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.22em] text-primary shadow-xs"
            >
              AI-FIRST DIGITAL TRANSFORMATION
            </motion.p>

            <motion.h1
              id="hero-heading"
              custom={0.1}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="mt-5 font-heading text-[2.6rem] font-bold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-[3.2rem] lg:text-[3.5rem] xl:text-[3.8rem]"
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
                className="text-[1.5rem] font-bold leading-tight tracking-[-0.03em] text-primary sm:text-[1.85rem] lg:text-[2.1rem]"
              />
            </motion.div>

            <motion.p
              custom={0.36}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="mt-6 text-[1.05rem] font-medium leading-8 text-slate-600 sm:text-lg"
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
                  "h-12 rounded-full px-7 font-bold shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg",
                )}
              >
                Book a Consultation
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href={ROUTES.solutions}
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-12 rounded-full border-slate-300 bg-white/90 px-7 font-bold text-slate-800 backdrop-blur-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white hover:shadow-md",
                )}
              >
                Explore Solutions
              </Link>
            </motion.div>
          </div>

          {/* MOBILE / TABLET DISPLAY — Image shown below text on smaller screens with zero cropping */}
          <div className="z-10 mt-6 block w-full lg:hidden">
            <Image
              src="/Hero_Image.png"
              alt="Data Acies AI & Data Ecosystem Architecture"
              width={1920}
              height={1080}
              priority
              quality={100}
              unoptimized
              className="h-auto w-full object-contain drop-shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
