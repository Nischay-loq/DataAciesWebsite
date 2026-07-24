"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";

type HeaderNavItem = {
  label: string;
  href: string;
  sectionId?: string;
  matchPaths?: readonly string[];
};

const navItems: HeaderNavItem[] = [
  { label: "Home", href: ROUTES.home, matchPaths: [ROUTES.home] },
  { label: "About", href: ROUTES.about, matchPaths: [ROUTES.about] },
  {
    label: "Products",
    href: ROUTES.products,
    matchPaths: [ROUTES.products],
  },
  {
    label: "What We Solve",
    href: ROUTES.whatWeSolve,
    matchPaths: [ROUTES.whatWeSolve],
  },
  { label: "Services", href: ROUTES.services, matchPaths: [ROUTES.services] },
  {
    label: "Contact",
    href: `${ROUTES.contact}#contact-section`,
    sectionId: "contact-section",
    matchPaths: [ROUTES.contact],
  },
];

const logo = {
  src: "/data-acies-logo.jpeg",
  width: 378,
  height: 84,
  alt: "Data Acies Inc",
};

function normalizePath(href: string) {
  return href.split("#")[0] || "/";
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const activeItem = useMemo(() => {
    if (activeSection) {
      const sectionMatch = navItems.find((item) => item.sectionId === activeSection);
      if (sectionMatch && normalizePath(sectionMatch.href) === pathname) {
        return sectionMatch.label;
      }
    }

    const pathMatch = navItems.find((item) => {
      const targetPath = normalizePath(item.href);
      return item.matchPaths?.includes(pathname) || targetPath === pathname;
    });

    return pathMatch?.label ?? "Home";
  }, [activeSection, pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isDrawerOpen]);

  useEffect(() => {
    const sections = navItems
      .map((item) => item.sectionId)
      .filter((sectionId): sectionId is string => Boolean(sectionId))
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-18% 0px -62% 0px",
        threshold: [0.08, 0.18, 0.32],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const linkClassName = (label: string) =>
    cn(
      "group relative inline-flex h-10 items-center rounded-full px-1 font-sans text-sm font-bold text-slate-100 transition-colors duration-300",
      "hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900",
      activeItem === label && "text-blue-400",
    );

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 px-3 py-3 sm:px-4"
    >
      <Container size="wide" className="px-0">
        <div
          className={cn(
            "grid h-18 grid-cols-[auto_1fr_auto] items-center gap-3 rounded-full border px-4 shadow-[0_16px_45px_rgba(15,23,42,0.25)] transition-all duration-300 sm:h-20 sm:px-5",
            "border-slate-800/80 bg-slate-900/95 backdrop-blur-xl",
            isScrolled &&
              "border-blue-500/30 bg-slate-950/98 shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur-2xl",
          )}
        >
          <Link
            href={ROUTES.home}
            aria-label="Data Acies home"
            className="group inline-flex min-w-0 items-center rounded-full bg-white/95 px-3 py-1.5 shadow-sm transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              priority
              sizes="(max-width: 767px) 162px, (max-width: 1023px) 180px, 216px"
              className="h-8 w-auto rounded-xs object-contain sm:h-9 lg:h-10"
            />
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden justify-self-center lg:flex lg:items-center lg:gap-6 xl:gap-8"
          >
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className={linkClassName(item.label)}>
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-1 -bottom-0.5 h-0.5 origin-center scale-x-0 rounded-full bg-blue-400 transition-transform duration-300",
                    "group-hover:scale-x-100",
                    activeItem === item.label && "scale-x-100",
                  )}
                  aria-hidden
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2">
            <Link
              href={`${ROUTES.contact}#contact-section`}
              className={cn(
                "hidden h-11 items-center rounded-full bg-linear-to-r from-[#2563EB] via-[#1D4ED8] to-[#0EA5E9] px-5 font-sans text-sm font-bold text-white shadow-[0_12px_34px_rgba(37,99,235,0.35)] transition-all duration-300",
                "hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(37,99,235,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 lg:inline-flex",
              )}
            >
              Book a Consultation
            </Link>

            <button
              type="button"
              aria-label={isDrawerOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isDrawerOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsDrawerOpen((open) => !open)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 text-slate-100 shadow-sm transition hover:border-blue-400 hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 lg:hidden"
            >
              {isDrawerOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 28 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-4 top-23 z-50 w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-900/98 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl lg:hidden"
            >
              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsDrawerOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3 font-sans text-sm font-bold text-slate-100 transition-colors",
                      "hover:bg-slate-800/80 hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/35",
                      activeItem === item.label && "bg-blue-500/20 text-blue-400",
                    )}
                  >
                    {item.label}
                    {activeItem === item.label && (
                      <span className="size-1.5 rounded-full bg-blue-400" aria-hidden />
                    )}
                  </Link>
                ))}
              </nav>

              <Link
                href={`${ROUTES.contact}#contact-section`}
                onClick={() => setIsDrawerOpen(false)}
                className="mt-3 flex h-12 items-center justify-center rounded-full bg-linear-to-r from-[#2563EB] via-[#1D4ED8] to-[#0EA5E9] px-5 font-sans text-sm font-bold text-white shadow-[0_14px_36px_rgba(37,99,235,0.32)] transition hover:-translate-y-0.5"
              >
                Book a Consultation
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
