"use client";

import Link from "next/link";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";

/**
 * BranchingQuestion — 2026 style. Big question, three large interactive
 * cards with accent hover. Routes to /proof, /philosophy, /trajectory.
 */
export function BranchingQuestion() {
  const lang = useLanguageStore((s) => s.lang);
  const t = translations[lang].branching;

  const routes = ["/proof", "/philosophy", "/trajectory"];

  return (
    <section
      className="relative border-y border-[var(--border)] bg-[var(--bg-soft)] py-24 sm:py-32"
      aria-label={t.title}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal text-center">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--text-dim)]">
            {lang === "ar" ? "اختصار" : "shortcut"}
          </span>
          <h2 className="mt-4 text-4xl font-medium tracking-tight text-[var(--text)] sm:text-6xl">
            {t.title}
          </h2>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-3">
          {t.options.map((opt, idx) => (
            <li key={idx} className={`reveal reveal-delay-${idx + 1}`}>
              <Link
                href={routes[idx]}
                className="glow-card group flex h-full flex-col p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-5xl font-medium text-[var(--surface-3)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                    0{idx + 1}
                  </span>
                  <span
                    aria-hidden
                    className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]"
                  >
                    <span className="rtl:rotate-180">→</span>
                  </span>
                </div>
                <span className="mt-8 text-xl font-medium text-[var(--text)]">
                  {opt.label}
                </span>
                <span className="mt-2 text-sm text-[var(--text-muted)]">
                  {opt.desc}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
