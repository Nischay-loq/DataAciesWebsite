"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { GradientText } from "@/components/shared/gradient-text";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge-animated";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";
import { AnimatedGrid } from "./animated-grid";
import { FloatingParticles } from "./floating-particles";
import { AICore } from "./ai-core";
import { Floating } from "@/components/motion/floating";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-surface pb-section-lg pt-section-xl">
      {/* Background Effects */}
      <AnimatedGrid />
      <FloatingParticles />

      <Container className="relative z-10">
        <motion.div
          className="mx-auto max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Floating AI Core Illustration */}
          <Floating className="mb-8">
            <AICore />
          </Floating>

          {/* Eyebrow Badge */}
          <motion.div
            variants={staggerItem}
            className="flex justify-center"
          >
            <Badge variant="glow" animated>
              ✨ Enterprise AI Solutions
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={staggerItem}
            className="mt-8 text-display-md font-bold"
          >
            <GradientText className="text-display-md">
              AI-First Data Consulting
            </GradientText>
          </motion.h1>

          {/* Subheadline */}
          <motion.h2
            variants={staggerItem}
            className="mt-6 text-display-sm font-normal text-muted-foreground"
          >
            Transform Your Business with Data, AI & Intelligent Automation
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={staggerItem}
            className="mt-8 text-body-lg text-foreground/90"
          >
            We design modern data platforms, deploy Generative AI solutions, and
            build autonomous Agentic AI systems that drive measurable outcomes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="mt-12 flex flex-col gap-4 sm:flex-row items-center justify-center"
          >
            <Link href={ROUTES.contact}>
              <Button size="lg" className="shadow-glow-sm">
                Get Started
              </Button>
            </Link>
            <Link href={ROUTES.services}>
              <Button variant="outline" size="lg">
                Our Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
