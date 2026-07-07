"use client";

import Link from "next/link";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";

/**
 * TrustSignals — 2026 bento grid. Three cards of varied emphasis.
 * The first card spans wider (featured trust signal).
 */
export function TrustSignals() {
  const lang = useLanguageStore((s) => s.lang);
  const t = translations[lang].trust;

  return (
    <section
      id="trust"
      className="relative py-24 sm:py-32"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div className="reveal mb-12">
          <span className="section-label">{t.sectionNumber} / {t.title}</span>
          <h2
            id="trust-heading"
            className="mt-5 text-4xl font-medium tracking-tight text-[var(--text)] sm:text-5xl"
          >
            {t.title}
          </h2>
          <p className="mt-3 max-w-xl text-[var(--text-muted)]">{t.subtitle}</p>
        </div>

        {/* Bento grid — first card is featured */}
        <ul className="grid gap-4 sm:grid-cols-6">
          {/* Card 1 — featured, spans 3 */}
          <li className="reveal sm:col-span-3">
            <Link href="/proof" className="glow-card group flex h-full flex-col p-7">
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-[var(--accent)]">01</span>
                <span className="chip chip-accent">{lang === "ar" ? "مُقدَّم" : "presented"}</span>
              </div>
              <h3 className="mt-8 text-2xl font-medium text-[var(--text)]">
                {t.cards[0].title}
              </h3>
              <p className="mt-3 flex-1 text-[var(--text-muted)] leading-relaxed">
                {t.cards[0].desc}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                {t.cards[0].link}
                <span aria-hidden className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">→</span>
              </span>
            </Link>
          </li>

          {/* Card 2 — spans 3 */}
          <li className="reveal reveal-delay-1 sm:col-span-3">
            <Link href="/projects/smart-building" className="glass-card group flex h-full flex-col p-7">
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-[var(--accent-2)]">02</span>
                <span className="font-mono text-4xl text-[var(--text)]">6×</span>
              </div>
              <h3 className="mt-8 text-2xl font-medium text-[var(--text)]">
                {t.cards[1].title}
              </h3>
              <p className="mt-3 flex-1 text-[var(--text-muted)] leading-relaxed">
                {t.cards[1].desc}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                {t.cards[1].link}
                <span aria-hidden className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">→</span>
              </span>
            </Link>
          </li>

          {/* Card 3 — full width */}
          <li className="reveal reveal-delay-2 sm:col-span-6">
            <Link href="/projects/smart-building" className="glass-card group flex flex-col items-start gap-4 p-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[var(--accent)]">03</span>
                  <h3 className="text-xl font-medium text-[var(--text)] sm:text-2xl">
                    {t.cards[2].title}
                  </h3>
                </div>
                <p className="mt-2 text-[var(--text-muted)]">{t.cards[2].desc}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Arduino Mega", "ESP8266", "Firebase", "Android"].map((tag) => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                {t.cards[2].link}
                <span aria-hidden className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">→</span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
