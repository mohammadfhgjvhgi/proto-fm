"use client";

import Link from "next/link";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";

/**
 * CtaBand — 2026 mesh-gradient band with floating glow.
 * Two buttons, big bold heading.
 */
export function CtaBand() {
  const lang = useLanguageStore((s) => s.lang);
  const t = translations[lang].ctaBand;

  return (
    <section
      className="relative overflow-hidden border-y border-[var(--border)] py-28 sm:py-36"
      aria-labelledby="cta-heading"
    >
      {/* Mesh gradient background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(197, 255, 62, 0.18), transparent 60%), radial-gradient(ellipse 70% 60% at 80% 70%, rgba(124, 92, 255, 0.18), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Text */}
          <div className="max-w-2xl">
            <span className="reveal chip chip-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden />
              {t.tag}
            </span>
            <h2
              id="cta-heading"
              className="reveal reveal-delay-1 mt-6 text-4xl font-medium tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl"
            >
              {t.title}
            </h2>
            <p className="reveal reveal-delay-2 mt-5 text-lg text-[var(--text-muted)] leading-relaxed">
              {t.desc}
            </p>
          </div>

          {/* Buttons */}
          <div className="reveal reveal-delay-3 flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
            <Link href="/projects/smart-building" className="btn-pill group">
              {t.primary}
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">→</span>
            </Link>
            <Link href="/engage" className="btn-pill-ghost">
              {t.secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
