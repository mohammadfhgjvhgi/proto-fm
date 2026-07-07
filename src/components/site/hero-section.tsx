"use client";

import Link from "next/link";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { techStack } from "@/lib/content";

/**
 * Hero — 2026 contemporary.
 * Oversized kinetic typography, mesh gradient bg, floating bento accents,
 * marquee tech-stack band. RTL Arabic-first.
 */
export function HeroSection() {
  const lang = useLanguageStore((s) => s.lang);
  const t = translations[lang].hero;

  return (
    <section
      id="entry"
      className="relative min-h-screen overflow-hidden pt-24 mesh-bg"
      aria-label={lang === "ar" ? "المقدمة" : "Entry"}
    >
      {/* Dot grid overlay */}
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-8 sm:pt-16">
        {/* Status chip */}
        <div className="reveal flex items-center gap-3">
          <span className="chip chip-accent">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            </span>
            {t.authority}
          </span>
        </div>

        {/* Name — oversized display */}
        <h1 className="reveal reveal-delay-1 mt-8 text-5xl font-medium leading-[1.02] tracking-tight text-[var(--text)] sm:text-7xl lg:text-8xl">
          {t.name}
        </h1>

        {/* Specialty — accent gradient */}
        <p className="reveal reveal-delay-2 mt-5 font-mono text-base uppercase tracking-[0.08em] text-[var(--accent)] sm:text-xl">
          {t.specialty}
        </p>

        {/* Tagline */}
        <p className="reveal reveal-delay-3 mt-8 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl">
          {t.tagline}
        </p>

        {/* CTAs */}
        <div className="reveal reveal-delay-4 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/proof" className="btn-pill group">
            {t.ctaPrimary}
            <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">→</span>
          </Link>
          <Link href="/engage" className="btn-pill-ghost">
            {t.ctaSecondary}
          </Link>
        </div>

        {/* Floating bento accents — desktop only */}
        <div className="mt-16 hidden gap-4 lg:grid lg:grid-cols-3">
          {/* Big stat card */}
          <div className="glow-card reveal reveal-delay-2 flex flex-col justify-between p-6 lg:col-span-1">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-dim)]">
              {lang === "ar" ? "ساعات اختبار" : "hours tested"}
            </span>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-mono text-6xl font-medium text-[var(--accent)]">72</span>
              <span className="font-mono text-2xl text-[var(--text-muted)]">h</span>
            </div>
            <span className="mt-2 text-sm text-[var(--text-muted)]">
              {lang === "ar" ? "تحت الحمل المستمر" : "under continuous load"}
            </span>
          </div>

          {/* Subsystems card */}
          <div className="glass-card reveal reveal-delay-3 flex flex-col justify-between p-6">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-dim)]">
              {lang === "ar" ? "أنظمة فرعية" : "subsystems"}
            </span>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-mono text-6xl font-medium text-[var(--text)]">6</span>
              <span className="font-mono text-sm text-[var(--accent-2)]">· integrated</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Fire", "Intrusion", "Control", "Energy", "Camera", "IoT"].map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>

          {/* Tech stack card */}
          <div className="glass-card reveal reveal-delay-4 p-6">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-dim)]">
              {t.techStackTitle}
            </span>
            <ul className="mt-4 grid grid-cols-2 gap-y-2">
              {techStack.slice(0, 6).map((tech) => (
                <li key={tech} className="flex items-center gap-2 font-mono text-xs text-[var(--text-muted)]">
                  <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden />
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Marquee band — tech stack scrolling */}
      <div className="relative mt-12 border-y border-[var(--border)] py-4">
        <div className="marquee">
          <div className="marquee-track">
            {[...techStack, ...techStack].map((tech, i) => (
              <span key={i} className="flex items-center gap-3 font-mono text-sm text-[var(--text-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
