"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";

/**
 * StatsBand — 2026 huge mono numbers with lime accent.
 * Bento grid with one featured metric. Count-up on first view,
 * respects reduced-motion.
 */
export function StatsBand() {
  const lang = useLanguageStore((s) => s.lang);
  const t = translations[lang].stats;

  return (
    <section
      id="stats"
      className="relative overflow-hidden py-24 sm:py-32"
      aria-labelledby="stats-heading"
    >
      {/* Mesh + dot grid backdrop */}
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-50" aria-hidden />
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div className="reveal mb-14">
          <span className="section-label">{t.sectionNumber} / {t.title}</span>
          <h2 id="stats-heading" className="mt-5 text-4xl font-medium tracking-tight text-[var(--text)] sm:text-5xl">
            {t.title}
          </h2>
          <p className="mt-3 max-w-xl text-[var(--text-muted)]">{t.subtitle}</p>
        </div>

        {/* Bento stats grid — first item featured (spans 2) */}
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item, idx) => (
            <li
              key={idx}
              className={
                "reveal " +
                (idx === 0
                  ? "glow-card flex flex-col justify-between p-7 lg:col-span-2"
                  : "glass-card flex flex-col justify-between p-6")
              }
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-dim)]">
                  M{String(idx + 1).padStart(2, "0")}
                </span>
                {idx === 0 && (
                  <span className="chip chip-accent">
                    {lang === "ar" ? "رئيسي" : "key"}
                  </span>
                )}
              </div>
              <StatItem item={item} featured={idx === 0} />
            </li>
          ))}
        </ul>

        {/* Source */}
        <p className="reveal mt-8 flex items-center gap-2 font-mono text-[11px] text-[var(--text-dim)]">
          <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden />
          {t.source}
        </p>
      </div>
    </section>
  );
}

function StatItem({
  item,
  featured,
}: {
  item: { value: string; unit: string; label: string };
  featured?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(item.value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const match = item.value.match(/^([^\d.-]*)([\d.]+)/);
    if (!match) return;
    const prefix = match[1] ?? "";
    const target = parseFloat(match[2]);
    if (Number.isNaN(target) || target === 0) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          const start = performance.now();
          const duration = 900;
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 4);
            const current = target * eased;
            const hasDecimal = match[2].includes(".");
            const formatted = hasDecimal ? current.toFixed(1) : Math.round(current).toString();
            setDisplay(`${prefix}${formatted}`);
            if (p < 1) requestAnimationFrame(tick);
            else setDisplay(item.value);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [item.value]);

  return (
    <div ref={ref} className="mt-6">
      <div className="flex items-baseline gap-1.5">
        <span
          className={
            "font-mono font-medium text-[var(--accent)] " +
            (featured ? "text-6xl sm:text-7xl" : "text-4xl sm:text-5xl")
          }
        >
          {display}
        </span>
        {item.unit && (
          <span className={"font-mono text-[var(--accent-2)] " + (featured ? "text-2xl" : "text-lg")}>
            {item.unit}
          </span>
        )}
      </div>
      <p className="mt-3 text-sm text-[var(--text-muted)]">{item.label}</p>
    </div>
  );
}
