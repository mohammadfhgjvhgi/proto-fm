"use client";

import Link from "next/link";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { featuredProject } from "@/lib/content";
import { pick } from "@/lib/content";

/**
 * FeaturedProject — 2026 hero-of-the-section layout.
 * Large image placeholder + floating metric badges.
 */
export function FeaturedProject() {
  const lang = useLanguageStore((s) => s.lang);
  const t = translations[lang].featured;

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32"
      aria-labelledby="featured-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div className="reveal mb-12">
          <span className="section-label">{t.sectionNumber} / {t.label}</span>
          <h2
            id="featured-heading"
            className="mt-5 text-4xl font-medium tracking-tight text-[var(--text)] sm:text-5xl"
          >
            {pick(featuredProject.title, lang)}
          </h2>
          <p className="mt-3 font-mono text-sm text-[var(--accent)]">{t.subtitle}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-stretch">
          {/* Image placeholder — large, with floating badges */}
          <figure className="reveal glow-card group relative flex aspect-[16/10] items-center justify-center overflow-hidden">
            {/* Gradient backdrop */}
            <div className="absolute inset-0 mesh-bg opacity-60" aria-hidden />
            <div className="absolute inset-0 dot-grid opacity-30" aria-hidden />

            {/* Placeholder caption */}
            <figcaption className="relative z-10 px-6 text-center">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl border border-[var(--border-strong)] bg-[var(--surface-2)]/60 backdrop-blur">
                <span className="font-mono text-xl text-[var(--accent)]" aria-hidden>⚙</span>
              </div>
              <p className="font-mono text-xs text-[var(--text-muted)]">
                {lang === "ar"
                  ? "[صورة: النظام الكامل مُركّب]"
                  : "[Image: full assembled system]"}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-[var(--text-dim)]">
                {lang === "ar" ? "صورة حقيقية — من Mohammed" : "Real photo — from Mohammed"}
              </p>
            </figcaption>

            {/* Floating metric badges */}
            <div className="absolute left-4 top-4 float-slow">
              <span className="chip chip-accent backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden />
                {lang === "ar" ? "نظام حي" : "live system"}
              </span>
            </div>
            <div className="absolute bottom-4 right-4 float-slower">
              <span className="chip backdrop-blur">PRJ-001 · 2026</span>
            </div>
          </figure>

          {/* Details */}
          <div className="reveal reveal-delay-1 flex flex-col">
            {/* Meta pills */}
            <div className="flex flex-wrap gap-2">
              <span className="chip">{featuredProject.year}</span>
              <span className="chip chip-violet">{pick(featuredProject.status, lang)}</span>
              <span className="chip">{pick(featuredProject.duration, lang)}</span>
            </div>

            <p className="mt-6 text-[var(--text-muted)] leading-relaxed">
              {t.desc}
            </p>

            {/* Metric grid */}
            <ul className="mt-8 grid grid-cols-3 gap-3">
              {t.metrics.map((m, idx) => (
                <li key={idx} className="glass-card p-4">
                  <div className="font-mono text-3xl font-medium text-[var(--accent)]">
                    {m.value}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[var(--text-dim)]">
                    {m.label}
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <Link href="/projects/smart-building" className="btn-pill group">
                {t.cta}
                <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
