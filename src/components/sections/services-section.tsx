"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Activity,
  ArrowUpRight,
  Award,
  BarChart2,
  BarChart3,
  Bot,
  Calculator,
  Check,
  ChevronUp,
  Clipboard,
  Clock,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Database,
  Gauge,
  Globe,
  GraduationCap,
  Headphones,
  Heart,
  Layers,
  LayoutDashboard,
  Lightbulb,
  Lock,
  Map,
  Package,
  PenTool,
  RefreshCw,
  Scale,
  Search,
  Share2,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Truck,
  UserPlus,
  Users,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/layout/container";

/* ─────────────────────────────────────────────────────────────
   Types
───────────────────────────────────────────────────────────── */
type SubService = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Service = {
  slug: string;
  title: string;
  tagline: string;
  /** Full description text containing boldPhrase verbatim */
  description: string;
  /** The phrase inside description to render bold-blue */
  boldPhrase: string;
  icon: LucideIcon;
  /** Path under /public — served as static asset */
  imageSrc: string;
  imageAlt: string;
  subServicesLabel: string;
  subServices: SubService[];
};

/* ─────────────────────────────────────────────────────────────
   Service data
───────────────────────────────────────────────────────────── */
const services: Service[] = [
  {
    slug: "data-services",
    title: "Data Services",
    tagline:
      "Unlock the full potential of your data with the right strategy, insights, and tools.",
    description:
      "Our Data Services are designed to empower businesses with the Tools, Insights, and Strategies needed to harness the full potential of our customers' data assets. By partnering with us, you can unlock valuable opportunities, make data-driven decisions, and stay ahead in today's Data-Centric world.",
    boldPhrase: "Tools, Insights, and Strategies",
    icon: Database,
    imageSrc: "/services_images/Data_servies.png",
    imageAlt: "Data Services illustration",
    subServicesLabel: "What we offer",
    subServices: [
      {
        title: "Data Strategy & Consulting",
        icon: Compass,
        description:
          "We help you define the right data strategy and roadmap to align with your business goals and drive measurable growth.",
      },
      {
        title: "Cloud Data Solutions & Transformation",
        icon: Cloud,
        description:
          "Modernize your data infrastructure with secure, scalable, and cost-effective cloud solutions tailored to your needs.",
      },
      {
        title: "Data Integration",
        icon: Share2,
        description:
          "Seamlessly connect and unify data from diverse sources for a single, consistent view of your entire business.",
      },
      {
        title: "Data Management",
        icon: Database,
        description:
          "Ensure high-quality, reliable, and accessible data through robust governance and management practices.",
      },
      {
        title: "Data Analysis",
        icon: TrendingUp,
        description:
          "Extract meaningful insights from your data using advanced analytics and statistical techniques at scale.",
      },
      {
        title: "Data Visualization",
        icon: BarChart3,
        description:
          "Transform complex data into clear, interactive visuals that help you communicate and act with confidence.",
      },
      {
        title: "Data Security",
        icon: ShieldCheck,
        description:
          "Protect your data with enterprise-grade security, compliance, and privacy measures at every layer.",
      },
    ],
  },
  {
    slug: "site-reliability-engineering",
    title: "Site Reliability Engineering",
    tagline:
      "Build resilient, efficient IT systems with proactive monitoring and automation.",
    description:
      "By leveraging our SRE services, customers can benefit from increased System Reliability, Reduced Downtime, Enhanced Performance and Improved Scalability. We are committed to helping you build Resilient and Efficient IT systems that meet the demands of your business and ensure a superior User Experience.",
    boldPhrase: "Resilient and Efficient IT systems",
    icon: Activity,
    imageSrc: "/services_images/site_reliability.png",
    imageAlt: "Site Reliability Engineering illustration",
    subServicesLabel: "What we offer",
    subServices: [
      {
        title: "System Monitoring & Incident Response",
        icon: Activity,
        description:
          "Proactively detect and resolve incidents with 24/7 monitoring, alerting, and rapid-response workflows.",
      },
      {
        title: "Automation & Infrastructure Provisioning",
        icon: Cpu,
        description:
          "Accelerate delivery with automated provisioning, configuration management, and infrastructure-as-code pipelines.",
      },
      {
        title: "Performance Optimization",
        icon: Gauge,
        description:
          "Tune systems for peak speed, efficiency, and resource utilization at any scale and traffic load.",
      },
      {
        title: "Fault Tolerance & Resilience",
        icon: Layers,
        description:
          "Design systems that recover gracefully from failure with zero single points of failure across your stack.",
      },
      {
        title: "Capacity Planning",
        icon: Scale,
        description:
          "Forecast demand and plan capacity to ensure your infrastructure grows seamlessly with your business.",
      },
      {
        title: "Security & Compliance",
        icon: Lock,
        description:
          "Embed security controls and compliance checks directly into your operational workflows and CI/CD pipelines.",
      },
      {
        title: "Collaboration & Knowledge Sharing",
        icon: Users,
        description:
          "Foster a DevOps culture with shared runbooks, post-mortems, and cross-team knowledge transfer programs.",
      },
      {
        title: "24 × 7 Shared Services Model",
        icon: Clock,
        description:
          "Round-the-clock operational coverage with a flexible shared-services model to match your business hours.",
      },
    ],
  },
  {
    slug: "digital-services",
    title: "Digital Services",
    tagline:
      "Enhance your online presence with innovative development, design, and marketing.",
    description:
      "By leveraging our Digital Services, we empower clients to enhance their Online Presence, Streamline Operations, Drive Customer Engagement and Achieve Business Objectives. Our experts combine technical expertise, creative flair and strategic insights to deliver innovative solutions for digital success.",
    boldPhrase: "Online Presence, Streamline Operations, Drive Customer Engagement",
    icon: Globe,
    imageSrc: "/services_images/diggital_services.png",
    imageAlt: "Digital Services illustration",
    subServicesLabel: "What we offer",
    subServices: [
      {
        title: "Website & Apps Development",
        icon: Code2,
        description:
          "Build fast, accessible, and scalable websites and web apps tailored precisely to your users and brand.",
      },
      {
        title: "Native Mobile App Development",
        icon: Smartphone,
        description:
          "Deliver high-performance native iOS and Android apps with seamless, intuitive user experiences.",
      },
      {
        title: "Micro Services Development",
        icon: Package,
        description:
          "Design loosely coupled, independently deployable microservices for agile, resilient architectures.",
      },
      {
        title: "UX & UI Design",
        icon: PenTool,
        description:
          "Craft intuitive interfaces and engaging user journeys grounded in research and design best practices.",
      },
      {
        title: "E-Commerce Solutions",
        icon: ShoppingCart,
        description:
          "Launch and optimize full-featured online stores with analytics, payments, and loyalty integrations.",
      },
      {
        title: "Digital Marketing",
        icon: Target,
        description:
          "Drive awareness, engagement, and conversions through targeted, data-backed digital marketing campaigns.",
      },
      {
        title: "CRM",
        icon: Heart,
        description:
          "Implement and optimize CRM systems to deepen customer relationships and streamline your sales pipeline.",
      },
      {
        title: "Cloud Native Services",
        icon: Cloud,
        description:
          "Build cloud-native applications leveraging containers, serverless functions, and managed cloud services.",
      },
      {
        title: "Quality Engineering & Assurance",
        icon: Check,
        description:
          "Ensure every release meets the highest quality bar with automated testing strategies and QA frameworks.",
      },
    ],
  },
  {
    slug: "digital-operations",
    title: "Digital Operations",
    tagline:
      "Streamline processes and boost productivity with intelligent operations.",
    description:
      "By availing our Digital Operations services, our customers can focus on their Core Competencies while benefiting from Streamlined Processes, Increased Productivity, Enhanced Customer Satisfaction and Improved Business Performance. We serve as a Trusted Partner, empowering them to achieve operational excellence and drive business success.",
    boldPhrase: "Core Competencies",
    icon: Workflow,
    imageSrc: "/services_images/digital_operations.png",
    imageAlt: "Digital Operations illustration",
    subServicesLabel: "What we offer",
    subServices: [
      {
        title: "Process Analysis & Optimization",
        icon: Search,
        description:
          "Identify inefficiencies in your workflows and redesign them for maximum productivity and output quality.",
      },
      {
        title: "Workflow Design & RPA",
        icon: Bot,
        description:
          "Automate repetitive tasks and orchestrate complex workflows with RPA and intelligent automation tools.",
      },
      {
        title: "Data Management & Automation",
        icon: Database,
        description:
          "Centralize and automate data flows to reduce manual effort, errors, and eliminate costly data silos.",
      },
      {
        title: "Customer Support & Service Management",
        icon: Headphones,
        description:
          "Deliver consistent, high-quality customer support through structured service-management frameworks.",
      },
      {
        title: "Supply Chain & Logistics Management",
        icon: Truck,
        description:
          "Optimize end-to-end supply chain operations for reduced cost, faster speed, and improved reliability.",
      },
      {
        title: "Financial Planning & Accounting (FP&A)",
        icon: Calculator,
        description:
          "Drive informed business decisions with integrated financial planning, forecasting, and reporting tools.",
      },
      {
        title: "Reporting & Performance Measurement",
        icon: BarChart2,
        description:
          "Monitor KPIs and generate actionable reports to keep leadership aligned and continuously informed.",
      },
      {
        title: "Audit & Compliance Management",
        icon: Clipboard,
        description:
          "Implement audit trails, controls, and compliance programs to reduce risk and meet regulatory requirements.",
      },
    ],
  },
  {
    slug: "staffing-it-consulting",
    title: "Staffing & IT Consulting",
    tagline:
      "Connect with exceptional talent and expert IT consulting you can trust.",
    description:
      "At Data Acies Inc., we specialize in connecting exceptional talent with top-tier companies across diverse sectors, including IT, engineering, healthcare, and light industry. As an E-Verified company, we take pride in our commitment to providing a compliant and reliable staffing solution that you can trust.",
    boldPhrase: "exceptional talent with top-tier companies",
    icon: Users,
    imageSrc: "/services_images/staffing_itconsulting.png",
    imageAlt: "Staffing & IT Consulting illustration",
    subServicesLabel: "Our specializations",
    subServices: [
      {
        title: "Staffing Solutions",
        icon: UserPlus,
        description:
          "Connect with the right talent fast — permanent, contract, or on-demand staff for any role or sector.",
      },
      {
        title: "IT Consulting",
        icon: Lightbulb,
        description:
          "Navigate complex technology decisions with experienced IT consultants who deeply understand your business.",
      },
      {
        title: "Talent Acquisition & Management",
        icon: Award,
        description:
          "Build and scale high-performing teams with end-to-end talent acquisition, screening, and onboarding support.",
      },
      {
        title: "IT Project / Program Management",
        icon: LayoutDashboard,
        description:
          "Deliver IT projects on time and within scope using proven program-management methodologies and tooling.",
      },
      {
        title: "Technology Assessment & Roadmap",
        icon: Map,
        description:
          "Assess your technology landscape and chart a clear, prioritized roadmap for strategic modernization.",
      },
      {
        title: "IT Governance & Compliance",
        icon: ShieldCheck,
        description:
          "Establish frameworks for IT decision-making, risk management, and regulatory compliance across your org.",
      },
      {
        title: "Training & Skill Development",
        icon: GraduationCap,
        description:
          "Upskill your workforce with targeted training programs aligned to your evolving technology stack.",
      },
      {
        title: "IT Support & Maintenance",
        icon: Wrench,
        description:
          "Keep your systems running smoothly with responsive IT support and proactive preventative maintenance.",
      },
      {
        title: "Change Management & Transition Support",
        icon: RefreshCw,
        description:
          "Plan and execute technology transitions with structured change-management processes and minimal disruption.",
      },
    ],
  },
];

/* Feature cards for the main Services section hero tile */
const supportCards = [
  {
    title: "Smarter Insights",
    description: "Understand your data like never before.",
    icon: BarChart3,
  },
  {
    title: "Strategic Advantage",
    description: "Make confident, data-driven decisions.",
    icon: Sparkles,
  },
  {
    title: "Future Ready",
    description: "Build a resilient, scalable data ecosystem.",
    icon: ShieldCheck,
  },
] as const;


/* ─────────────────────────────────────────────────────────────
   Helpers
───────────────────────────────────────────────────────────── */
/** Overview grid: odd index → deep-navy card */
const isNavyCard = (index: number) => index % 2 !== 0;
/** Sub-service grid: odd index → deep-navy card */
const isNavySubCard = (index: number) => index % 2 !== 0;

/* ─────────────────────────────────────────────────────────────
   DataIllustration — unchanged from Part 1
───────────────────────────────────────────────────────────── */
function DataIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[42rem]">
      <div
        className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_58%)] blur-2xl"
        aria-hidden
      />
      <div className="relative h-[22rem] sm:h-[26rem] lg:h-[29rem]">
        <div className="absolute inset-8 rounded-full border border-sky-200/70 bg-white/30 shadow-[0_0_0_1px_rgba(219,234,254,0.7)]" aria-hidden />
        <div className="absolute inset-14 rounded-full border border-sky-100/80 bg-[radial-gradient(circle_at_center,rgba(191,219,254,0.15),transparent_68%)]" aria-hidden />
        <div className="absolute left-1/2 top-1/2 size-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/80 bg-white shadow-[0_20px_60px_rgba(37,99,235,0.08)] sm:size-44" aria-hidden>
          <div className="absolute inset-5 rounded-full bg-[linear-gradient(180deg,#f8fbff_0%,#eaf2ff_100%)] shadow-inner" />
          <div className="absolute inset-x-4 top-7 h-6 rounded-full bg-linear-to-r from-[#d9e8ff] via-white to-[#c8dcff]" />
          <div className="absolute inset-x-4 top-13 h-6 rounded-full bg-linear-to-r from-[#2f6bff] via-[#5ea0ff] to-[#1d4ed8] shadow-[0_4px_12px_rgba(37,99,235,0.24)]" />
          <div className="absolute inset-x-4 top-19 h-6 rounded-full bg-linear-to-r from-[#d9e8ff] via-white to-[#c8dcff]" />
        </div>
        <div className="absolute left-1/2 top-1/2 h-48 w-40 -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] border border-slate-200/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(245,249,255,0.92)_100%)] shadow-[0_18px_40px_rgba(37,99,235,0.08)] sm:h-56 sm:w-48" aria-hidden />

        <motion.div aria-hidden animate={{ y: [0, -10, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute left-0 top-10 w-36 transform-gpu rounded-[1.75rem] border border-white/70 bg-white/85 p-3 shadow-[0_16px_40px_rgba(37,99,235,0.08)] backdrop-blur-sm will-change-transform sm:left-3 sm:w-42">
          <div className="flex items-center justify-between text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
            <span>Dashboard</span>
            <span className="flex size-5 items-center justify-center rounded-full bg-blue-50 text-primary"><ArrowUpRight className="size-3" /></span>
          </div>
          <div className="mt-3 grid grid-cols-5 items-end gap-1.5">
            <span className="h-5 rounded-t-sm bg-[#cfe0ff]" />
            <span className="h-8 rounded-t-sm bg-[#98b9ff]" />
            <span className="h-10 rounded-t-sm bg-[#4e85ff]" />
            <span className="h-7 rounded-t-sm bg-[#b8ccff]" />
            <span className="h-12 rounded-t-sm bg-[#2f6bff]" />
          </div>
        </motion.div>

        <motion.div aria-hidden animate={{ y: [0, 10, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute right-1 top-8 w-38 transform-gpu rounded-[1.75rem] border border-white/70 bg-white/85 p-3 shadow-[0_16px_40px_rgba(37,99,235,0.08)] backdrop-blur-sm will-change-transform sm:right-4 sm:w-44">
          <div className="flex items-center justify-between text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
            <span>Analytics</span>
            <span className="size-4 rounded-full border border-blue-100 bg-blue-50" />
          </div>
          <div className="mt-4 flex items-center justify-center">
            <div className="relative size-14 rounded-full border-[7px] border-blue-100 border-r-[#2f6bff] border-b-[#2f6bff] bg-white" />
          </div>
        </motion.div>

        <motion.div aria-hidden animate={{ y: [0, -8, 0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} className="absolute left-10 bottom-4 w-[10rem] transform-gpu rounded-[1.75rem] border border-white/70 bg-white/85 p-3 shadow-[0_16px_40px_rgba(37,99,235,0.08)] backdrop-blur-sm will-change-transform sm:left-14 sm:w-48">
          <div className="flex items-center gap-2 text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
            <span className="size-2 rounded-full bg-primary" />
            Data Flow
          </div>
          <div className="mt-3 rounded-2xl border border-slate-100 bg-slate-50 p-2">
            <div className="flex items-center justify-between text-[0.58rem] text-slate-400"><span>01</span><span>04</span></div>
            <div className="mt-2 h-1 rounded-full bg-blue-100">
              <div className="h-full w-3/4 rounded-full bg-linear-to-r from-[#2f6bff] to-[#5ea0ff]" />
            </div>
          </div>
        </motion.div>

        <motion.div aria-hidden animate={{ x: [0, 8, 0] }} transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }} className="absolute right-4 bottom-12 w-34 transform-gpu rounded-[1.6rem] border border-white/70 bg-white/85 p-3 shadow-[0_16px_40px_rgba(37,99,235,0.08)] backdrop-blur-sm will-change-transform sm:right-8 sm:w-38">
          <div className="flex items-center gap-2 text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
            <span className="size-2 rounded-full bg-[#5ea0ff]" />
            Security
          </div>
          <div className="mt-3 flex items-center justify-center">
            <div className="flex size-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-primary">
              <ShieldCheck className="size-6" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SubServiceCard
───────────────────────────────────────────────────────────── */
function SubServiceCard({ sub, index }: { sub: SubService; index: number }) {
  const navy = isNavySubCard(index);
  const Icon = sub.icon;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.42,
        delay: (index % 4) * 0.06,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className={[
        "group relative flex flex-col overflow-hidden rounded-[1.25rem] p-5 transition-shadow duration-300",
        navy
          ? "border border-[#1E3A8A]/60 bg-[#0F1F4D] shadow-[0_10px_28px_rgba(15,31,77,0.22)] hover:shadow-[0_18px_40px_rgba(15,31,77,0.36)]"
          : "border border-slate-200/70 bg-white shadow-[0_8px_22px_rgba(15,23,42,0.05)] hover:border-[#2f6bff]/30 hover:shadow-[0_16px_36px_rgba(37,99,235,0.11)]",
      ].join(" ")}
    >
      {/* Ghost numeral watermark */}
      <span
        className={[
          "pointer-events-none absolute -right-1 -top-3 select-none font-heading text-[3.5rem] font-bold leading-none tracking-[-0.06em]",
          navy ? "text-white/[0.10]" : "text-[#0F1F4D]/[0.09]",
        ].join(" ")}
        aria-hidden="true"
      >
        {num}
      </span>

      {/* Icon — gradient circle, hover scale + rotate */}
      <div
        className={[
          "flex size-12 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg]",
          navy
            ? "bg-white/[0.12] text-[#7BB3FF] shadow-[0_0_18px_rgba(59,130,246,0.18)] ring-1 ring-white/10"
            : "bg-gradient-to-br from-blue-50 to-blue-100/80 text-[#1D4ED8] shadow-[0_6px_18px_rgba(37,99,235,0.12)] ring-1 ring-blue-200/50",
        ].join(" ")}
      >
        <Icon className="size-[1.375rem]" />
      </div>

      {/* Title + expanding underline accent */}
      <h4
        className={[
          "relative mt-5 pb-2 font-heading text-[1.05rem] font-bold leading-[1.2] tracking-[-0.02em]",
          navy ? "text-white" : "text-[#0F1F4D]",
        ].join(" ")}
      >
        {sub.title}
        <span
          className={[
            "absolute bottom-0 left-0 block h-[2.5px] rounded-full transition-all duration-300 ease-out group-hover:w-10",
            navy ? "w-5 bg-[#3B82F6]" : "w-5 bg-[#2563EB]",
          ].join(" ")}
          aria-hidden="true"
        />
      </h4>

      {/* Description — max 3 lines */}
      <p
        className={[
          "mt-3 line-clamp-3 text-[0.875rem] leading-[1.5]",
          navy ? "text-white/70" : "text-slate-500",
        ].join(" ")}
      >
        {sub.description}
      </p>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────────────────────
   ServiceDetailPanel
   Mounted below the grid. Morphs the service card's accent bar
   into the panel's full-width gradient header via layoutId.
───────────────────────────────────────────────────────────── */
function ServiceDetailPanel({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const ServiceIcon = service.icon;

  /* Scroll the panel into view after mount */
  useEffect(() => {
    const id = setTimeout(() => {
      panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => clearTimeout(id);
  }, []);

  /* Escape key closes */
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  /* Split description around the bold phrase */
  const [before, after] = service.description.split(service.boldPhrase);

  /* For the heading gradient split: everything except the last word is dark,
     the last word is the gradient-fill "accent" word. */
  const words = service.title.split(" ");
  const headingFirst = words.slice(0, -1).join(" ");
  const headingLast = words[words.length - 1];

  return (
    <motion.div
      ref={panelRef}
      key={service.slug}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16, transition: { duration: 0.25 } }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
      className="mt-6 scroll-mt-6"
      id="service-detail-panel"
      role="region"
      aria-label={`${service.title} detail`}
    >
      {/* ── Panel outer card ── */}
      <div className="overflow-hidden rounded-[1.7rem] border border-slate-200/80 bg-white shadow-[0_28px_72px_rgba(15,23,42,0.09)]">

        {/* ── Accent bar — layoutId morphs from the card's thin bar ── */}
        <motion.div
          layoutId={`accent-${service.slug}`}
          className="h-[5px] bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]"
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
        />

        {/* ── Header: text (left) + isometric image (right) ── */}
        <div className="flex flex-col gap-8 px-8 py-8 sm:px-10 sm:py-9 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">

          {/* Text block */}
          <div className="max-w-xl flex-1">
            {/* Eyebrow */}
            <span className="inline-flex items-center rounded-full bg-[linear-gradient(135deg,#2563EB_0%,#1E3A8A_100%)] px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_8px_20px_rgba(37,99,235,0.22)]">
              <Sparkles className="mr-2 size-3.5" aria-hidden />
              Our Expertise
            </span>

            {/* H1 — gradient last word */}
            <h2 className="mt-5 font-heading text-[clamp(2.75rem,4.5vw,4rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#0F1F4D]">
              {headingFirst && <span>{headingFirst} </span>}
              <span className="bg-[linear-gradient(135deg,#3B82F6_0%,#1D4ED8_100%)] bg-clip-text text-transparent">
                {headingLast}
              </span>
            </h2>

            {/* Underline + pulsing dot */}
            <div className="mt-4 flex items-center gap-3">
              <div className="h-[5px] w-[90px] rounded-full bg-[#2563EB]" />
              <motion.div
                className="size-[7px] rounded-full bg-[#3B82F6]"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              />
            </div>

            {/* Description */}
            <p className="mt-6 text-[1rem] leading-[1.75] text-slate-600 sm:text-[1.05rem]">
              {before}
              <span className="font-medium text-[#1E40AF]">{service.boldPhrase}</span>
              {after}
            </p>
          </div>

          {/* Service illustration (New image per service) */}
          <div className="relative h-[220px] w-full shrink-0 sm:h-[270px] lg:h-[310px] lg:w-[400px] xl:w-[440px]">
            <Image
              src={service.imageSrc}
              alt={service.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 440px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Separator */}
        <div className="mx-8 h-px bg-slate-100 sm:mx-10" />

        {/* ── Sub-service grid ── */}
        <div className="p-8 sm:p-10">
          <div className="mb-6 flex items-center gap-2.5">
            <span className="size-2 rounded-full bg-[#2563EB]" />
            <h3 className="font-heading text-xl font-bold tracking-tight text-[#0F1F4D]">
              {service.subServicesLabel}
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {service.subServices.map((sub, i) => (
              <SubServiceCard key={sub.title} sub={sub} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Collapse button ── */}
      <div className="mt-5 flex justify-center">
        <motion.button
          onClick={onClose}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="group inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-6 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition-colors duration-200 hover:border-[#2563EB]/40 hover:bg-[#EFF4FF] hover:text-[#1D4ED8] hover:shadow-[0_6px_18px_rgba(37,99,235,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/40"
          aria-label={`Collapse ${service.title} details`}
        >
          <ChevronUp className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
          Collapse
        </motion.button>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ServicesSection — main export
───────────────────────────────────────────────────────────── */
export function ServicesSection() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  const handleSelect = (service: Service) => {
    setActiveService((prev) =>
      prev?.slug === service.slug ? null : service,
    );
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#EFF4FF] py-10 sm:py-12 lg:py-16"
    >
      {/* Ambient background gradient */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(59,130,246,0.10),transparent_28%),radial-gradient(circle_at_84%_12%,rgba(96,165,250,0.09),transparent_26%)]"
        aria-hidden
      />

      <Container size="wide" className="relative">

        {/* ── Section header ── */}
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            {/* Eyebrow pill — gradient fill */}
            <span className="inline-flex items-center rounded-full bg-[linear-gradient(135deg,#2563EB_0%,#1E3A8A_100%)] px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_10px_24px_rgba(37,99,235,0.28)]">
              <Sparkles className="mr-2 size-3.5" aria-hidden />
              Our Expertise
            </span>

            {/* H1 — gradient "Services" */}
            <h1 className="mt-6 font-heading text-[clamp(3rem,5vw,4.5rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-[#0F1F4D]">
              <span>Our </span>
              <span className="bg-[linear-gradient(135deg,#3B82F6_0%,#1D4ED8_100%)] bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            {/* Underline bar + pulsing dot */}
            <div className="mt-5 flex items-center gap-3">
              <div className="h-[5px] w-[90px] rounded-full bg-[#2563EB]" />
              <motion.div
                className="size-[7px] rounded-full bg-[#3B82F6]"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              />
            </div>

            {/* Body paragraph */}
            <p className="mt-7 max-w-xl text-[1.05rem] leading-8 text-slate-600 sm:text-[1.1rem]">
              Our services are designed to empower businesses with the{" "}
              <span className="font-medium text-[#1E40AF]">
                Tools, Insights, and Strategies
              </span>{" "}
              needed to harness the full potential of technology and data.
              Click any service card below to explore everything we offer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <DataIllustration />
          </motion.div>
        </div>

        {/* ── Card grid (1 Hero + 5 Service Cards = 6 Cards total in 3-col grid) ── */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {/* Hero / brand-statement tile */}
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col justify-between overflow-hidden rounded-[1.7rem] border border-[#2f6bff] bg-[linear-gradient(160deg,#2463eb_0%,#0f1f4d_100%)] p-7 text-white shadow-[0_24px_64px_rgba(37,99,235,0.28)]"
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(125,211,252,0.24),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.07)_0%,transparent_28%)]"
              aria-hidden
            />
            <div className="relative flex h-full flex-col">
              <div className="flex size-13 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
                <Code2 className="size-6" />
              </div>
              <h2 className="mt-8 font-heading text-[1.8rem] font-semibold leading-[1.15] tracking-[-0.04em] sm:text-[2rem]">
                Turn Data into Decisions. Drive Impact.
              </h2>
              <div className="mt-4 h-px w-8 bg-white/75" aria-hidden />
              <div className="mt-6 space-y-3">
                {supportCards.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-3 rounded-2xl bg-white/8 p-3 backdrop-blur-[2px]">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#2463eb] shadow-sm">
                        <Icon className="size-4.5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="mt-0.5 text-xs leading-4.5 text-white/85">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.article>

          {/* 5 service cards — alternating white/navy, layoutId accent morph */}
          {services.map((service, index) => {
            const isActive = activeService?.slug === service.slug;
            const hasDifferentActive = activeService !== null && !isActive;
            const navy = isNavyCard(index);
            const Icon = service.icon;
            const num = String(index + 1).padStart(2, "0");

            return (
              <motion.button
                key={service.slug}
                type="button"
                onClick={() => handleSelect(service)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={!isActive ? { y: -6 } : {}}
                aria-label={`${isActive ? "Collapse" : "Expand"} ${service.title}`}
                aria-expanded={isActive}
                className={[
                  "group relative flex flex-col overflow-hidden rounded-[1.45rem] p-6 text-left transition-[shadow,opacity] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2463eb]/40 focus-visible:ring-offset-2",
                  hasDifferentActive ? "opacity-60" : "opacity-100",
                  isActive
                    ? navy
                      ? "border-2 border-[#3B82F6]/60 bg-[#0F1F4D] shadow-[0_22px_52px_rgba(15,31,77,0.42)]"
                      : "border-2 border-[#2563EB]/60 bg-white shadow-[0_22px_52px_rgba(37,99,235,0.18)]"
                    : navy
                      ? "border border-[#1E3A8A]/60 bg-[#0F1F4D] shadow-[0_12px_32px_rgba(15,31,77,0.28)] hover:shadow-[0_22px_48px_rgba(15,31,77,0.40)]"
                      : "border border-slate-200/80 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.05)] hover:border-[#2f6bff]/40 hover:shadow-[0_20px_44px_rgba(37,99,235,0.14)]",
                ].join(" ")}
              >
                {/*
                  layoutId accent bar — present ONLY when NOT active.
                  When active, this unmounts and the panel's layoutId bar takes
                  over, creating the thin-bar → full-width-header morph.
                */}
                {!isActive && (
                  <motion.div
                    layoutId={`accent-${service.slug}`}
                    className="absolute inset-x-0 top-0 h-[3px] rounded-t-[1.45rem] bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]"
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] as const }}
                  />
                )}

                {/* Ghost numeral watermark */}
                <span
                  className={[
                    "pointer-events-none absolute -right-2 -top-3 select-none font-heading text-[4rem] font-bold leading-none tracking-[-0.06em] sm:text-[3.5rem]",
                    navy ? "text-white/[0.12]" : "text-[#0F1F4D]/[0.10]",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  {num}
                </span>

                {/* Icon circle */}
                <div
                  className={[
                    "flex size-13 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[5deg]",
                    navy
                      ? "bg-white/[0.12] text-[#7BB3FF] shadow-[0_0_20px_rgba(59,130,246,0.20)] ring-1 ring-white/10"
                      : "bg-gradient-to-br from-blue-50 to-blue-100/80 text-[#1D4ED8] shadow-[0_8px_22px_rgba(37,99,235,0.10)] ring-1 ring-blue-200/50",
                  ].join(" ")}
                >
                  <Icon className="size-6" />
                </div>

                {/* Title + hover-expand underline */}
                <h3
                  className={[
                    "relative mt-7 pb-2 font-heading text-[1.35rem] font-bold leading-[1.15] tracking-[-0.03em]",
                    navy ? "text-white" : "text-[#0F1F4D]",
                  ].join(" ")}
                >
                  {service.title}
                  <span
                    className={[
                      "absolute bottom-0 left-0 block h-[3px] rounded-full transition-all duration-300 ease-out group-hover:w-12",
                      navy ? "w-6 bg-[#3B82F6]" : "w-6 bg-[#2563EB]",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                </h3>

                {/* Tagline — max 2 lines */}
                <p
                  className={[
                    "mt-5 line-clamp-2 text-[0.9375rem] leading-[1.5]",
                    navy ? "text-white/75" : "text-slate-600",
                  ].join(" ")}
                >
                  {service.tagline}
                </p>

                {/* View / Collapse link row */}
                <span
                  className={[
                    "mt-auto inline-flex items-center gap-1.5 pt-6 text-[0.8rem] font-semibold transition-colors duration-200",
                    navy
                      ? "text-[#7BB3FF] group-hover:text-white"
                      : "text-[#1d4ed8] group-hover:text-[#2563eb]",
                  ].join(" ")}
                >
                  {isActive ? "Collapse ↑" : "View details"}
                  {!isActive && (
                    <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* ── In-page service detail panel ── */}
        <AnimatePresence mode="wait">
          {activeService ? (
            <ServiceDetailPanel
              key={activeService.slug}
              service={activeService}
              onClose={() => setActiveService(null)}
            />
          ) : null}
        </AnimatePresence>

      </Container>
    </section>
  );
}
