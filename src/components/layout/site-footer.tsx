"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import {
  ArrowUp,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/constants/routes";
import { Container } from "@/components/layout/container";

/* ─── Quick Links ─────────────────────────────────────────── */
const quickLinks = [
  { label: "Home", href: ROUTES.home },
  { label: "About", href: ROUTES.about },
  { label: "Products", href: ROUTES.products },
  { label: "Services", href: ROUTES.services },
  { label: "What We Solve", href: ROUTES.whatWeSolve },
  { label: "Contact", href: `${ROUTES.contact}#contact-section` },
] as const;

/* ─── Social Icon SVGs ────────────────────────────────────── */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: LinkedInIcon },
  { label: "X (Twitter)", href: siteConfig.links.twitter, icon: XIcon },
  { label: "YouTube", href: siteConfig.links.youtube, icon: YouTubeIcon },
  { label: "GitHub", href: siteConfig.links.github, icon: GitHubIcon },
] as const;

const contactItems = [
  {
    icon: Mail,
    label: "Business Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: Phone,
    label: "Phone Number",
    value: siteConfig.contact.phone,
    href: undefined,
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: siteConfig.contact.address,
    href: undefined,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: siteConfig.contact.officeHours,
    href: undefined,
  },
] as const;

/* ─── Back to Top Button ──────────────────────────────────── */
function BackToTop() {
  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      whileHover={{ y: -4, scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      aria-label="Back to top"
      className="flex size-11 items-center justify-center rounded-full border border-blue-500/40 bg-blue-600/20 text-blue-300 shadow-lg shadow-blue-900/30 backdrop-blur-sm transition-colors duration-300 hover:border-blue-400 hover:bg-blue-600/40 hover:text-white"
    >
      <ArrowUp className="size-5" />
    </motion.button>
  );
}

/* ─── Newsletter Row ──────────────────────────────────────── */
function NewsletterRow() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="relative mb-12 overflow-hidden rounded-2xl border border-blue-700/40 bg-blue-900/30 px-6 py-6 sm:px-8">
      {/* Subtle inner glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_0%,rgba(37,99,235,0.18),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-base font-semibold text-white">
            Stay updated with the latest in tech
          </p>
          <p className="mt-0.5 text-sm text-blue-300/80">
            Insights on AI, data engineering &amp; enterprise transformation.
          </p>
        </div>

        {submitted ? (
          <span className="shrink-0 rounded-full bg-blue-600/30 px-5 py-2.5 text-sm font-medium text-blue-200">
            ✓ You&apos;re subscribed!
          </span>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex w-full shrink-0 gap-2 sm:w-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 rounded-full border border-blue-600/50 bg-blue-950/50 px-4 py-2.5 text-sm text-white placeholder-blue-400/60 outline-none transition-all duration-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-400/40 sm:w-52"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <Send className="size-3.5" />
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

/* ─── Main Footer ─────────────────────────────────────────── */
export function SiteFooter() {
  const year = new Date().getFullYear();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#0F1F3D] to-[#1E3A8A]"
    >
      {/* ── Animated Top Border ─────────────────────────────── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 top-0 h-px origin-center bg-gradient-to-r from-transparent via-[#2563EB] to-transparent"
        aria-hidden="true"
      />

      {/* ── Background Depth (dot grid + soft blobs) ────────── */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.055] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"
        aria-hidden="true"
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 size-80 rounded-full bg-blue-700/15 blur-3xl"
        animate={{ y: [0, -14, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-1/4 size-96 rounded-full bg-blue-900/20 blur-3xl"
        animate={{ y: [0, 16, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container size="wide" className="relative px-container-x pb-10 pt-16 lg:pt-20">
        {/* ── Newsletter Row ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <NewsletterRow />
        </motion.div>

        {/* ── 4-Column Grid ───────────────────────────────── */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <Link href={ROUTES.home} aria-label={`${siteConfig.name} home`}>
              <div className="inline-block rounded-xl bg-white/10 p-2 ring-1 ring-white/20 backdrop-blur-sm transition-colors duration-300 hover:bg-white/15">
                <Image
                  src="/data-acies-logo.jpeg"
                  alt={siteConfig.name}
                  width={378}
                  height={84}
                  className="h-9 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-blue-200/80">
              {siteConfig.footerTagline}
            </p>
            <p className="mt-2 text-xs text-blue-300/50">
              {siteConfig.tagline}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -6 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.22 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    className="group relative inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-blue-400"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-px left-0 h-px w-0 rounded-full bg-blue-400 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
              Contact Information
            </h3>
            <ul className="mt-5 space-y-4">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400">
                    <Icon className="size-3.5" />
                  </span>
                  <div>
                    <span className="block text-[0.7rem] font-semibold uppercase tracking-wider text-blue-400/70">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm leading-5 text-slate-300 transition-colors duration-300 hover:text-blue-400"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm leading-5 text-slate-300">{value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect With Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
              Connect With Us
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    scale: 1.12,
                    boxShadow: "0 0 18px rgba(59,130,246,0.45)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-md shadow-blue-900/40 transition-colors duration-300 hover:from-blue-500 hover:to-blue-700"
                >
                  <Icon className="size-4" />
                </motion.a>
              ))}
            </div>

            <div className="mt-8">
              <BackToTop />
            </div>
          </motion.div>
        </div>

        {/* ── Bottom Bar ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 border-t border-blue-900/50 pt-7"
        >
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-slate-500">
              © {year} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-500">
              <Link
                href={ROUTES.privacy}
                className="transition-colors duration-300 hover:text-blue-400"
              >
                Privacy Policy
              </Link>
              <Link
                href={ROUTES.terms}
                className="transition-colors duration-300 hover:text-blue-400"
              >
                Terms of Service
              </Link>
              <span className="text-slate-600">Designed with care.</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
