"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Database,
  Headphones,
  Mic,
  Play,
  Search,
  Shield,
  X,
  Zap,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/container";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

/* ─────────────────────────────────────────────────────────────
   Types
───────────────────────────────────────────────────────────── */
type TabId = "intake" | "voice" | "rag" | "agent";

interface Tab {
  id: TabId;
  label: string;
  icon: React.ElementType;
  description: string;
}

/* ─────────────────────────────────────────────────────────────
   Tab definitions
───────────────────────────────────────────────────────────── */
const TABS: Tab[] = [
  {
    id: "intake",
    label: "AI Incident Intake",
    icon: Zap,
    description: "Plain-text issue → structured ITSM ticket in seconds",
  },
  {
    id: "voice",
    label: "Voice Transcription",
    icon: Mic,
    description: "Audio transcribed & diarized by Groq Whisper in real-time",
  },
  {
    id: "rag",
    label: "RAG Solution Engine",
    icon: Search,
    description: "FAISS semantic search returns ranked, grounded solutions",
  },
  {
    id: "agent",
    label: "Autonomous Agent",
    icon: Bot,
    description: "LangGraph agent auto-resolves routine tickets at >=90% confidence",
  },
];

const AUTO_ADVANCE_MS = 6500;

/* ─────────────────────────────────────────────────────────────
   Animated preview panels
───────────────────────────────────────────────────────────── */

/* == AI Incident Intake == */
function IntakePreview({ active }: { active: boolean }) {
  const FULL_TEXT = "VPN keeps disconnecting every 10 minutes...";
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"typing" | "ticket">("typing");
  const [fieldsVisible, setFieldsVisible] = useState<number>(0);

  useEffect(() => {
    if (!active) return;
    setTyped("");
    setPhase("typing");
    setFieldsVisible(0);
    let i = 0;
    const typeInterval = setInterval(() => {
      i++;
      setTyped(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setPhase("ticket");
          let f = 0;
          const fieldInterval = setInterval(() => {
            f++;
            setFieldsVisible(f);
            if (f >= 4) clearInterval(fieldInterval);
          }, 350);
        }, 600);
      }
    }, 45);
    return () => clearInterval(typeInterval);
  }, [active]);

  const fields = [
    { label: "Category", value: "Network / VPN", color: "text-blue-700" },
    { label: "Priority", value: "P2 - High", color: "text-amber-600" },
    { label: "Urgency", value: "High", color: "text-amber-600" },
    { label: "Impact", value: "Multiple Users", color: "text-slate-700" },
  ];

  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
        <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-slate-400 mb-1.5">
          Issue Description
        </p>
        <p className="min-h-[1.4rem] text-sm text-slate-800">
          {typed}
          {phase === "typing" && (
            <span className="inline-block w-0.5 h-4 bg-blue-600 align-middle ml-0.5 animate-pulse" />
          )}
        </p>
      </div>

      <AnimatePresence>
        {phase === "ticket" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-blue-200 bg-white p-3 shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[0.65rem] font-bold uppercase tracking-widest text-blue-600">
                Auto-Drafted Ticket
              </span>
              <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[0.6rem] font-semibold text-blue-700 border border-blue-200">
                INC-00482
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {fields.map((f, i) => (
                <AnimatePresence key={f.label}>
                  {fieldsVisible > i && (
                    <motion.div
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center justify-between rounded-lg bg-slate-50 px-2.5 py-1.5"
                    >
                      <span className="text-[0.6rem] text-slate-500">{f.label}</span>
                      <span className={cn("text-[0.65rem] font-semibold", f.color)}>
                        {f.value}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* == Voice Transcription == */
function VoicePreview({ active }: { active: boolean }) {
  const [barHeights, setBarHeights] = useState<number[]>(Array(18).fill(4));
  const [lines, setLines] = useState<number>(0);

  const transcript = [
    { speaker: "Caller:", text: "My screen keeps freezing after login." },
    { speaker: "Engineer:", text: "When did this start happening?" },
    { speaker: "Caller:", text: "Since yesterday's system update." },
    { speaker: "Engineer:", text: "I'll escalate to our desktop team now." },
  ];

  useEffect(() => {
    if (!active) {
      setBarHeights(Array(18).fill(4));
      setLines(0);
      return;
    }
    setLines(0);
    const waveInterval = setInterval(() => {
      setBarHeights(Array(18).fill(0).map(() => 4 + Math.random() * 28));
    }, 120);
    const lineTimers = transcript.map((_, i) =>
      setTimeout(() => setLines(i + 1), 800 + i * 900)
    );
    return () => {
      clearInterval(waveInterval);
      lineTimers.forEach(clearTimeout);
    };
  }, [active]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-center gap-0.5 rounded-xl bg-blue-950 py-3 px-4">
        <div className="mr-2 flex size-5 items-center justify-center rounded-full bg-blue-500">
          <Mic className="size-3 text-white" />
        </div>
        {barHeights.map((h, i) => (
          <motion.div
            key={i}
            animate={{ height: active ? h : 4 }}
            transition={{ duration: 0.1 }}
            className="w-1 rounded-full bg-blue-400"
            style={{ minHeight: 4 }}
          />
        ))}
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 space-y-1.5 min-h-[88px]">
        <p className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-400 mb-2">
          Live Transcript
        </p>
        {transcript.slice(0, lines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-1.5 text-xs"
          >
            <span className="font-semibold text-blue-700 shrink-0">{line.speaker}</span>
            <span className="text-slate-700">{line.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* == RAG Solution Engine == */
function RAGPreview({ active }: { active: boolean }) {
  const solutions = [
    { title: "Reset VPN client config & flush DNS cache", conf: 94 },
    { title: "Update network adapter drivers to v12.4.1", conf: 87 },
    { title: "Reconfigure MTU settings on gateway router", conf: 76 },
  ];
  const [visible, setVisible] = useState(0);
  const [bars, setBars] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    if (!active) {
      setVisible(0);
      setBars([0, 0, 0]);
      return;
    }
    solutions.forEach((sol, i) => {
      setTimeout(() => {
        setVisible((v) => Math.max(v, i + 1));
        setTimeout(() => {
          setBars((prev) => {
            const next = [...prev];
            next[i] = sol.conf;
            return next;
          });
        }, 200);
      }, i * 700);
    });
  }, [active]);

  return (
    <div className="flex flex-col gap-2">
      <p className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-400 mb-1">
        Ranked Solutions — FAISS Semantic Match
      </p>
      {solutions.map((s, i) => (
        <AnimatePresence key={s.title}>
          {visible > i && (
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <p className="text-[0.72rem] font-medium text-slate-800 leading-snug">{s.title}</p>
                <span className="shrink-0 text-[0.65rem] font-bold text-blue-700">{bars[i]}%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${bars[i]}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={cn(
                    "h-full rounded-full",
                    bars[i] >= 90 ? "bg-green-500" : bars[i] >= 80 ? "bg-blue-500" : "bg-blue-400"
                  )}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </div>
  );
}

/* == Autonomous Agent == */
function AgentPreview({ active }: { active: boolean }) {
  const [conf, setConf] = useState(0);
  const [status, setStatus] = useState<"in-progress" | "resolved">("in-progress");
  const [showFlag, setShowFlag] = useState(false);

  useEffect(() => {
    if (!active) {
      setConf(0);
      setStatus("in-progress");
      setShowFlag(false);
      return;
    }
    const t1 = setTimeout(() => {
      let c = 0;
      const inc = setInterval(() => {
        c += 2;
        setConf(c);
        if (c >= 93) {
          clearInterval(inc);
          setTimeout(() => {
            setStatus("resolved");
            setTimeout(() => setShowFlag(true), 400);
          }, 500);
        }
      }, 30);
    }, 300);
    return () => clearTimeout(t1);
  }, [active]);

  const radius = 38;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (conf / 100) * circ;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="relative flex-shrink-0 size-24">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 96 96">
            <circle cx="48" cy="48" r={radius} fill="none" stroke="#e2e8f0" strokeWidth="8" />
            <circle
              cx="48" cy="48" r={radius}
              fill="none"
              stroke="#fbbf24"
              strokeWidth="2"
              strokeDasharray={`${0.9 * circ} ${0.1 * circ}`}
              strokeDashoffset={0}
              opacity={0.6}
            />
            <motion.circle
              cx="48" cy="48" r={radius}
              fill="none"
              stroke={conf >= 90 ? "#22c55e" : "#2563EB"}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circ}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 0.05 }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-bold text-slate-900">{conf}%</span>
            <span className="text-[0.55rem] text-slate-400 uppercase tracking-wide">confidence</span>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-400 mb-1.5">INC-00391</p>
          <p className="text-[0.75rem] font-medium text-slate-700 leading-snug mb-3">
            Password reset loop after SSO migration
          </p>
          <div className="flex flex-col gap-1.5">
            <motion.span
              animate={{
                backgroundColor: status === "resolved" ? "#dcfce7" : "#dbeafe",
                color: status === "resolved" ? "#15803d" : "#1d4ed8",
                borderColor: status === "resolved" ? "#86efac" : "#93c5fd",
              }}
              transition={{ duration: 0.4 }}
              className="inline-flex w-fit items-center gap-1 rounded-full border px-2.5 py-0.5 text-[0.62rem] font-semibold"
            >
              <span className={cn(
                "size-1.5 rounded-full",
                status === "resolved" ? "bg-green-500" : "bg-blue-500 animate-pulse"
              )} />
              {status === "resolved" ? "Auto-Resolved" : "In Progress"}
            </motion.span>

            <AnimatePresence>
              {showFlag && (
                <motion.span
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex w-fit items-center gap-1 rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-[0.6rem] font-semibold text-amber-700"
                >
                  Pending Human Review
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <p className="text-[0.65rem] text-slate-400 text-center">
        Threshold at 90% — agent triggered at {conf >= 90 ? "93%" : `${conf}%`}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   AegisOps interactive right column
───────────────────────────────────────────────────────────── */
function AegisOpsShowcase() {
  const [activeTab, setActiveTab] = useState<TabId>("intake");
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const startTimeRef = useRef<number>(Date.now());

  const advanceTab = useCallback(() => {
    setActiveTab((prev) => {
      const idx = TABS.findIndex((t) => t.id === prev);
      return TABS[(idx + 1) % TABS.length].id;
    });
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  useEffect(() => {
    if (paused || modalOpen) return;
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / AUTO_ADVANCE_MS) * 100, 100);
      setProgress(pct);
      if (pct >= 100) advanceTab();
    }, 50);
    return () => clearInterval(interval);
  }, [paused, modalOpen, activeTab, advanceTab]);

  const handleTabClick = (id: TabId) => {
    setActiveTab(id);
    setProgress(0);
    startTimeRef.current = Date.now();
    setPaused(false);
  };

  /* Shared tab-button JSX renderer — plain function, not a component */
  const renderTabButtons = (layoutPrefix: string) =>
    TABS.map((tab) => {
      const Icon = tab.icon;
      const isActive = tab.id === activeTab;
      return (
        <button
          key={tab.id}
          type="button"
          onClick={() => handleTabClick(tab.id)}
          className={cn(
            "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-200",
            isActive ? "bg-blue-50" : "hover:bg-slate-50"
          )}
        >
          {isActive && (
            <motion.div
              layoutId={`${layoutPrefix}-indicator`}
              className="absolute inset-0 rounded-xl border border-blue-200 bg-blue-50"
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          )}
          <div className={cn(
            "relative z-10 flex size-7 shrink-0 items-center justify-center rounded-lg transition-colors duration-200",
            isActive
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600"
          )}>
            <Icon className="size-3.5" />
          </div>
          <div className="relative z-10 flex-1 min-w-0">
            <p className={cn("text-xs font-semibold leading-tight", isActive ? "text-blue-700" : "text-slate-700")}>
              {tab.label}
            </p>
            <p className="text-[0.65rem] text-slate-500 truncate">{tab.description}</p>
          </div>
          {isActive && (
            <div className="absolute bottom-0 left-3 right-3 h-[2px] overflow-hidden rounded-full bg-blue-100">
              <div
                className="h-full bg-blue-500 rounded-full transition-none"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </button>
      );
    });

  /* Shared preview content switcher — plain function, not a component */
  const renderPreviewContent = (keyPrefix: string) => (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${keyPrefix}-${activeTab}`}
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -12 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {activeTab === "intake" && <IntakePreview active />}
        {activeTab === "voice" && <VoicePreview active />}
        {activeTab === "rag" && <RAGPreview active />}
        {activeTab === "agent" && <AgentPreview active />}
      </motion.div>
    </AnimatePresence>
  );

  return (
    <>
      {/* ── Main showcase panel ── */}
      <div
        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="mb-4 flex items-center justify-between">
          <p className="text-xs font-semibold text-slate-500">Interactive demo</p>
          <button
            type="button"
            onClick={() => { setModalOpen(true); setPaused(true); }}
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            <Play className="size-3" />
            Watch it in action
          </button>
        </div>

        {/* Tab buttons — inlined, no inner component */}
        <div className="flex flex-col gap-1">
          {renderTabButtons("main")}
        </div>

        {/* Preview panel — inlined, no inner component */}
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-1.5 bg-slate-50 border-b border-slate-100 px-3 py-2">
            <span className="size-2.5 rounded-full bg-red-400" />
            <span className="size-2.5 rounded-full bg-amber-400" />
            <span className="size-2.5 rounded-full bg-green-400" />
            <div className="ml-2 flex-1 rounded-md bg-slate-200 h-3.5 max-w-[140px]" />
          </div>
          <div className="p-4 min-h-[220px]">
            {renderPreviewContent("main")}
          </div>
        </div>
      </div>

      {/* ── Modal / Lightbox ── */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4"
            onClick={(e) => { if (e.target === e.currentTarget) { setModalOpen(false); setPaused(false); } }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-xl bg-blue-600">
                    <Shield className="size-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">AegisOps AI — Feature Demo</p>
                    <p className="text-xs text-slate-500">Enterprise ITSM Copilot</p>
                  </div>
                </div>
                <button
                  onClick={() => { setModalOpen(false); setPaused(false); }}
                  className="flex size-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="p-6 grid gap-5 lg:grid-cols-[1fr_1.4fr]">
                {/* Modal tab buttons — inlined */}
                <div className="flex flex-col gap-1">
                  {renderTabButtons("modal")}
                </div>

                {/* Modal preview panel — inlined */}
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-md">
                  <div className="flex items-center gap-1.5 bg-slate-50 border-b border-slate-100 px-4 py-2.5">
                    <span className="size-3 rounded-full bg-red-400" />
                    <span className="size-3 rounded-full bg-amber-400" />
                    <span className="size-3 rounded-full bg-green-400" />
                    <div className="ml-2 flex-1 rounded-md bg-slate-200 h-4 max-w-[180px]" />
                  </div>
                  <div className="p-5 min-h-[280px]">
                    {renderPreviewContent("modal")}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   Static product data
───────────────────────────────────────────────────────────── */
const staticProducts = [
  {
    title: "Enterprise Test Data Generation Platform",
    tag: "Data Quality",
    icon: Database,
    problem: "Testing slows down when data is incomplete, risky to use, or hard to prepare.",
    solution:
      "Synthetic data generation, masking, ETL validation, data quality checks, and dataset provisioning.",
    outcome:
      "Faster QA cycles, reduced testing cost, improved accuracy, and accelerated releases.",
    features: ["Data Generation", "ETL Validation", "Compliance Support", "Data Quality"],
    featureDescriptions: [
      "Generate realistic synthetic datasets at scale — structurally valid, statistically representative, and compliance-safe.",
      "Automated schema validation, row-count checks, and data-type assertions across ETL pipeline stages.",
      "Built-in PII masking, GDPR/HIPAA-aligned data controls, and audit trail for every generated dataset.",
      "Automated profiling, anomaly detection, and completeness scoring to catch data issues before they reach production.",
    ],
  },
] as const;

const metrics = [
  "Faster Incident Resolution",
  "Reduced Manual Effort",
  "Improved Data Quality",
  "Accelerated Software Delivery",
] as const;

/* ─────────────────────────────────────────────────────────────
   Main export
───────────────────────────────────────────────────────────── */
export function ProductsSection() {
  return (
    <section id="products-section" className="bg-white py-20 sm:py-24 lg:py-28">
      <Container size="wide">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Products
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl">
            Software platforms built for enterprise operations
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Data Acies builds practical platforms that solve operational bottlenecks, data
            readiness challenges, and decision-making delays.
          </p>
        </motion.div>

        <div className="mt-14 space-y-8">
          {/* AegisOps interactive card */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm lg:grid-cols-[0.85fr_1.15fr] lg:p-8"
          >
            {/* Left column */}
            <div>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                <Headphones className="size-6" />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                Service Operations
              </p>
              <h2 className="mt-2 font-heading text-4xl font-bold tracking-[-0.03em] text-slate-950">
                AegisOps
              </h2>
              <div className="mt-7 grid gap-4">
                <InfoBlock
                  label="Problem"
                  text="High ticket volumes, manual triage, and slow response times strain support teams."
                  accent="amber"
                />
                <InfoBlock
                  label="How Data Acies solves it"
                  text="AI-assisted classification, routing, summarization, SLA visibility, and resolution recommendations."
                  accent="blue"
                />
                <InfoBlock
                  label="Business outcome"
                  text="Faster incident resolution, better service quality, and clearer operational visibility."
                  accent="green"
                />
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={ROUTES.contact} className={cn(buttonVariants(), "rounded-full px-5")}>
                  Book a Demo
                </Link>
                <Link
                  href={ROUTES.whatWeSolve}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "rounded-full border-slate-300 bg-white px-5 text-slate-800",
                  )}
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right column */}
            <AegisOpsShowcase />
          </motion.article>

          {/* Enterprise Test Data card */}
          {staticProducts.map((product) => {
            const Icon = product.icon;
            return (
              <motion.article
                key={product.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="grid gap-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg lg:grid-cols-[0.85fr_1.15fr] lg:p-8"
              >
                <div>
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                    <Icon className="size-6" />
                  </div>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                    {product.tag}
                  </p>
                  <h2 className="mt-2 font-heading text-4xl font-bold tracking-[-0.03em] text-slate-950">
                    {product.title}
                  </h2>
                  <div className="mt-7 grid gap-4">
                    <InfoBlock label="Problem" text={product.problem} accent="amber" />
                    <InfoBlock label="How Data Acies solves it" text={product.solution} accent="blue" />
                    <InfoBlock label="Business outcome" text={product.outcome} accent="green" />
                  </div>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link href={ROUTES.contact} className={cn(buttonVariants(), "rounded-full px-5")}>
                      Book a Demo
                    </Link>
                    <Link
                      href={ROUTES.whatWeSolve}
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "rounded-full border-slate-300 bg-white px-5 text-slate-800",
                      )}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {product.features.map((feature, i) => (
                      <div key={feature} className="rounded-2xl border border-slate-200 bg-white p-4">
                        <CheckCircle2 className="size-5 text-primary" />
                        <p className="mt-4 font-medium text-slate-950">{feature}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {product.featureDescriptions[i]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Metrics */}
        <div className="mt-14 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <BarChart3 className="size-6 text-primary" />
            <h2 className="font-heading text-2xl font-semibold text-slate-950">
              Driving measurable outcomes
            </h2>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl bg-slate-50 p-4"
              >
                <span className="font-mono text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-medium text-slate-900">{metric}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-[2rem] bg-slate-950 p-8 text-white lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-heading text-3xl font-semibold">
                Ready to see these platforms in action?
              </h2>
              <p className="mt-3 max-w-2xl text-slate-300">
                Schedule a consultation to discover how our products can improve operations,
                data quality, and enterprise delivery.
              </p>
            </div>
            <Link
              href={ROUTES.contact}
              className={cn(buttonVariants(), "rounded-full bg-white px-6 text-slate-950 hover:bg-slate-100")}
            >
              Book a Demo
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   InfoBlock — colored left-border accent
───────────────────────────────────────────────────────────── */
function InfoBlock({
  label,
  text,
  accent = "blue",
}: {
  label: string;
  text: string;
  accent?: "amber" | "blue" | "green";
}) {
  const colors = {
    amber: "border-amber-400 bg-amber-50/50",
    blue: "border-blue-500 bg-blue-50/40",
    green: "border-green-500 bg-green-50/40",
  };
  const labelColors = {
    amber: "text-amber-700",
    blue: "text-blue-700",
    green: "text-green-700",
  };
  return (
    <div className={cn("rounded-r-xl border-l-[3px] pl-4 pr-3 py-2.5", colors[accent])}>
      <p className={cn("text-xs font-semibold uppercase tracking-wide", labelColors[accent])}>
        {label}
      </p>
      <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}
