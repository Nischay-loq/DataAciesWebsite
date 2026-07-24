"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Compass,
  Handshake,
  Lightbulb,
  MapPin,
  Rocket,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const timeline = [
  {
    stage: "Foundation",
    title: "Building a Strong Consulting Foundation",
    description:
      "Data Acies began with a vision to help organizations solve complex technology challenges through consulting, engineering excellence, and business-driven innovation.",
    icon: Rocket,
  },
  {
    stage: "Expansion",
    title: "Expanding Digital Transformation Capabilities",
    description:
      "As organizations accelerated digital adoption, Data Acies expanded into Data Services, Digital Operations, Site Reliability Engineering, and enterprise technology solutions.",
    icon: TrendingUp,
  },
  {
    stage: "Innovation",
    title: "Driving Enterprise Innovation",
    description:
      "The company strengthened its expertise in automation, intelligent workflows, and scalable digital platforms to help businesses operate more efficiently.",
    icon: Lightbulb,
  },
  {
    stage: "AI Transformation",
    title: "Entering the AI-First Era",
    description:
      "Data Acies embraced Artificial Intelligence, Generative AI, and Agentic AI to help organizations modernize decision-making and automate operations.",
    icon: BrainCircuit,
  },
  {
    stage: "Product Development",
    title: "Building Enterprise Products",
    description:
      "The company evolved beyond services by creating enterprise-grade software platforms including AI-powered ITSM solutions and intelligent Test Data Generation systems.",
    icon: Target,
  },
  {
    stage: "Future Vision",
    title: "Shaping Intelligent Enterprises",
    description:
      "Today Data Acies continues building AI-powered products, scalable data platforms, and intelligent automation solutions that help organizations thrive in a rapidly evolving digital world.",
    icon: Compass,
  },
] as const;

const locations = [
  { city: "Dallas, Texas", role: "Headquarters", icon: Building2 },
  { city: "Hyderabad, India", role: "Delivery Center", icon: MapPin },
  { city: "Chennai, India", role: "Delivery Center", icon: MapPin },
  { city: "Mumbai, India", role: "Delivery Center", icon: MapPin },
] as const;

const locationTrack = [...locations, ...locations] as const;

const values = [
  {
    title: "Trust",
    description: "Building lasting relationships through transparency, reliability, and accountability.",
    icon: ShieldCheck,
  },
  {
    title: "Care",
    description: "Putting people first and ensuring client success at every stage of engagement.",
    icon: Users,
  },
  {
    title: "Innovation",
    description: "Continuously exploring new technologies and approaches to create business value.",
    icon: Lightbulb,
  },
  {
    title: "Customer First",
    description: "Every decision starts with understanding customer needs and delivering meaningful outcomes.",
    icon: CheckCircle2,
  },
] as const;

const mindset = [
  {
    title: "Business-Driven Technology",
    description: "Technology should create measurable business outcomes.",
    icon: TrendingUp,
  },
  {
    title: "Innovation with Purpose",
    description: "Innovation must solve real-world challenges.",
    icon: Lightbulb,
  },
  {
    title: "Long-Term Partnerships",
    description: "Success is achieved through lasting client relationships.",
    icon: Handshake,
  },
] as const;

export function AboutPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-container-x">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-4xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              About Data Acies
            </p>
            <h1 className="mt-5 font-heading text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl">
              Engineering intelligence for the modern enterprise
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Data Acies is a technology consulting and digital transformation
              company helping organizations unlock growth through data
              engineering, artificial intelligence, intelligent automation,
              digital operations, and enterprise software solutions.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <ClarityBlock
                label="Problem"
                text="Enterprises need modernization, but fragmented systems and unclear priorities slow progress."
              />
              <ClarityBlock
                label="How Data Acies solves it"
                text="We combine consulting discipline, engineering execution, and intelligent platforms."
              />
              <ClarityBlock
                label="Business outcome"
                text="Leaders gain practical transformation programs that improve operations and growth."
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-container-x">
          <SectionHeader
            eyebrow="Company Journey"
            title="A company journey built on practical enterprise impact"
            description="Our evolution is defined by stages of capability rather than artificial timelines."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.stage}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                        {item.stage}
                      </p>
                      <h3 className="mt-2 font-heading text-xl font-semibold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-container-x">
          <SectionHeader
            eyebrow="Global Presence"
            title="Strategic presence with global delivery capability"
            description="Data Acies combines business proximity with distributed execution across the United States and India."
          />
          <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50/80 py-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent" />
            <motion.div
              aria-label="Locations conveyor belt"
              className="flex w-max items-stretch gap-6 px-6"
              animate={{ x: [0, "-50%"] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            >
              {locationTrack.map((location, index) => {
              const Icon = location.icon;
              return (
                <Card key={`${location.city}-${index}`} className="w-[18rem] shrink-0">
                  <Icon className="size-7 text-primary" />
                  <h3 className="mt-5 font-heading text-xl font-semibold text-slate-950">
                    {location.city}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{location.role}</p>
                </Card>
              );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-container-x lg:grid-cols-2">
          <Feature title="Our Mission" icon={Target}>
            By assisting businesses in utilizing the most cutting-edge digital
            transformation technologies, we help significantly improve
            efficiency, accelerate innovation, and drive measurable business
            outcomes.
          </Feature>
          <Feature title="Our Vision" icon={Compass}>
            To become one of the world&apos;s leading business consulting and
            technology transformation firms, delivering innovations that advance
            how people live and work.
          </Feature>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-container-x">
          <SectionHeader eyebrow="Core Values" title="What we stand for" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title}>
                  <Icon className="size-7 text-primary" />
                  <h3 className="mt-5 font-heading text-xl font-semibold text-slate-950">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-container-x">
          <SectionHeader eyebrow="Leadership Mindset" title="How we think" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {mindset.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title}>
                  <Icon className="size-7 text-primary" />
                  <h3 className="mt-5 font-heading text-xl font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-container-x">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="font-heading text-3xl font-semibold">
                  Let&apos;s build the future together
                </h2>
                <p className="mt-3 max-w-2xl text-slate-300">
                  Partner with Data Acies to accelerate digital transformation,
                  modernize operations, and unlock the power of intelligent
                  technology.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href={`${ROUTES.contact}#contact-section`} className={cn(buttonVariants(), "rounded-full bg-white px-6 text-slate-950 hover:bg-slate-100")}>
                  Book a Consultation
                  <ArrowRight className="size-4" />
                </Link>
                <Link href={ROUTES.solutions} className={cn(buttonVariants({ variant: "outline" }), "rounded-full border-white/30 px-6 text-white hover:bg-white/10")}>
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">{eyebrow}</p>
      <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>}
    </div>
  );
}

function ClarityBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-sm font-semibold text-slate-950">{label}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className={cn("rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg", className)}
    >
      {children}
    </motion.article>
  );
}

function Feature({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: typeof Target;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <Icon className="size-7 text-primary" />
      <h2 className="mt-5 font-heading text-2xl font-semibold text-slate-950">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-600">{children}</p>
    </Card>
  );
}
