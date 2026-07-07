"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal hook — adds .is-visible to .reveal elements as they
 * enter the viewport. Respects prefers-reduced-motion (CSS handles it).
 * Runs once on mount; re-scans when new content mounts.
 */
export function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)"));
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}
