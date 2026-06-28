"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";

const PHRASES = [
  "Data Platforms.",
  "AI Systems.",
  "Autonomous Operations.",
] as const;

const TYPING_MS = 58;
const DELETING_MS = 34;
const PAUSE_TYPED_MS = 1450;
const PAUSE_DELETED_MS = 260;

type TypingHeadlineProps = {
  className?: string;
  startDelay?: number;
};

export function TypingHeadline({ className, startDelay = 0 }: TypingHeadlineProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = window.setTimeout(() => setActive(true), startDelay);
    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion, startDelay]);

  useEffect(() => {
    if (!active || prefersReducedMotion) return;

    const phrase = PHRASES[phraseIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === phrase) {
      timer = setTimeout(() => setIsDeleting(true), PAUSE_TYPED_MS);
    } else if (isDeleting && text === "") {
      timer = setTimeout(() => {
        setPhraseIndex((current) => (current + 1) % PHRASES.length);
        setIsDeleting(false);
      }, PAUSE_DELETED_MS);
    } else if (isDeleting) {
      timer = setTimeout(() => {
        setText(phrase.slice(0, text.length - 1));
      }, DELETING_MS);
    } else {
      timer = setTimeout(() => {
        setText(phrase.slice(0, text.length + 1));
      }, TYPING_MS);
    }

    return () => clearTimeout(timer);
  }, [active, isDeleting, phraseIndex, prefersReducedMotion, text]);

  const visibleText = prefersReducedMotion ? PHRASES[0] : text;

  return (
    <>
      <span className="sr-only">
        Data Platforms, AI Systems, and Autonomous Operations.
      </span>
      <span
        className={cn(
          "inline-flex min-h-[1.35em] items-center font-heading text-[1.75rem] font-medium leading-tight tracking-tight text-primary sm:text-[2rem] md:text-[1.75rem] lg:text-[2.125rem]",
          className,
        )}
        aria-hidden
      >
        <span className="inline-block min-w-[13ch] sm:min-w-[15ch]">
          {visibleText}
        </span>
        {!prefersReducedMotion && (
          <span
            className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-px animate-cursor-blink bg-primary align-middle"
            aria-hidden
          />
        )}
      </span>
    </>
  );
}
