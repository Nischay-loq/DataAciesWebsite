"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
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
  { label: "Products", href: ROUTES.products, matchPaths: [ROUTES.products] },
  { label: "What We Solve", href: ROUTES.whatWeSolve, matchPaths: [ROUTES.whatWeSolve] },
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
  const [isVisible, setIsVisible] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = latest - previous;

    // Track scroll state for compact height (> 80px)
    setIsScrolled(latest > 80);

    // Always keep header visible if mobile drawer is open
    if (isDrawerOpen) {
      setIsVisible(true);
      return;
    }

    // Always visible near top of page (< 80px)
    if (latest < 80) {
      setIsVisible(true);
    } else if (diff > 8) {
      // Hide header smoothly when scrolling down past 80px
      setIsVisible(false);
    } else if (diff < -8) {
      // Show header smoothly when scrolling up
      setIsVisible(true);
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsScrolled(window.scrollY > 80);
    }
  }, []);

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
      "group relative inline-flex items-center px-1 font-sans text-sm transition-colors duration-200",
      activeItem === label
        ? "text-blue-600 font-bold"
        : "text-slate-700 hover:text-blue-600 font-semibold",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 focus-visible:ring-offset-2",
    );

  return (
    <motion.header
      initial={false}
      animate={{
        y: isVisible ? "0%" : "-100%",
      }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled
          ? "border-slate-200/90 bg-white/95 shadow-sm backdrop-blur-md"
          : "border-slate-200/60 bg-white/90 backdrop-blur-md",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            isScrolled ? "h-16" : "h-20",
          )}
        >
          {/* Logo */}
          <Link
            href={ROUTES.home}
            aria-label="Data Acies home"
            className="group flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 focus-visible:ring-offset-2"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              priority
              sizes="(max-width: 767px) 150px, (max-width: 1023px) 170px, 200px"
              className={cn(
                "w-auto object-contain transition-all duration-300",
                isScrolled ? "h-8 sm:h-9" : "h-9 sm:h-10",
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 lg:flex xl:gap-9"
          >
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className={linkClassName(item.label)}>
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-blue-600 transition-transform duration-300 ease-out",
                    "group-hover:scale-x-100",
                    activeItem === item.label && "scale-x-100",
                  )}
                  aria-hidden
                />
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href={`${ROUTES.contact}#contact-section`}
              className={cn(
                "hidden items-center justify-center rounded-full bg-blue-600 px-5 font-sans font-bold text-white shadow-sm transition-all duration-200",
                "hover:bg-blue-700 hover:shadow-md hover:shadow-blue-500/20 active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 focus-visible:ring-offset-2 lg:inline-flex",
                isScrolled ? "h-9.5 text-xs sm:text-sm" : "h-11 text-sm",
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
              className={cn(
                "inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 lg:hidden",
                isScrolled ? "size-9.5" : "size-10.5",
              )}
            >
              {isDrawerOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
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
              className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "absolute inset-x-0 top-full z-50 border-b border-slate-200 bg-white/98 p-4 shadow-xl backdrop-blur-xl lg:hidden",
              )}
            >
              <div className="mx-auto max-w-7xl">
                <nav className="flex flex-col space-y-1" aria-label="Mobile navigation">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsDrawerOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 font-sans text-sm font-semibold text-slate-800 transition-colors",
                        "hover:bg-blue-50/80 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/35",
                        activeItem === item.label && "bg-blue-50 text-blue-600 font-bold",
                      )}
                    >
                      {item.label}
                      {activeItem === item.label && (
                        <span className="size-1.5 rounded-full bg-blue-600" aria-hidden />
                      )}
                    </Link>
                  ))}
                </nav>

                <Link
                  href={`${ROUTES.contact}#contact-section`}
                  onClick={() => setIsDrawerOpen(false)}
                  className="mt-4 flex h-11 items-center justify-center rounded-full bg-blue-600 px-5 font-sans text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
