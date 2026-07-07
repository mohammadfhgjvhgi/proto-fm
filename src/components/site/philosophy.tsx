"use client";

import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { principles, howThink, theWhy, dontDo, pick } from "@/lib/content";

/**
 * Philosophy — 2026 bento layout.
 * Principles as large numbered cards, How-I-Think + The-Why as two-col,
 * What-I-Don't-Do as alert-style grid.
 */
export function Philosophy() {
  const lang = useLanguageStore((s) => s.lang);
  const t = translations[lang].philosophy;

  return (
    <section
      id="philosophy"
      className="relative py-24 sm:py-32"
      aria-labelledby="philosophy-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div className="reveal mb-16">
          <span className="section-label">{t.sectionNumber} / {t.title}</span>
          <h2 id="philosophy-heading" className="mt-5 text-4xl font-medium tracking-tight text-[var(--text)] sm:text-5xl">
            {t.title}
          </h2>
          <p className="mt-3 max-w-xl text-[var(--text-muted)]">{t.subtitle}</p>
        </div>

        {/* Operating Principles — bento */}
        <div className="mb-20">
          <h3 className="reveal mb-8 font-mono text-sm uppercase tracking-wider text-[var(--text-dim)]">
            {t.principlesTitle}
          </h3>
          <ol className="grid gap-4 sm:grid-cols-2">
            {principles.map((p, idx) => (
              <li key={idx} className={`reveal reveal-delay-${(idx % 4) + 1}`}>
                <article className="glass-card flex h-full flex-col p-6">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-3xl font-medium text-[var(--accent)]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="flex-1 text-[var(--text)] leading-relaxed">
                      {pick(p.rule, lang)}
                    </p>
                  </div>
                  <div className="mt-5 rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] p-4">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent-2)]">
                      {t.exampleLabel}
                    </p>
                    <p className="mt-1.5 text-sm text-[var(--text-muted)] leading-relaxed">
                      {pick(p.example, lang)}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>

        {/* How I Think + The Why */}
        <div className="mb-20 grid gap-10 lg:grid-cols-2">
          {/* How I Think */}
          <div className="reveal">
            <h3 className="mb-6 font-mono text-sm uppercase tracking-wider text-[var(--text-dim)]">
              {t.howTitle}
            </h3>
            <ul className="flex flex-col">
              {howThink.map((h, idx) => (
                <li key={idx} className="group border-b border-[var(--border)] py-5 last:border-0">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-sm text-[var(--accent)]">0{idx + 1}</span>
                    <h4 className="text-base font-medium text-[var(--text)]">{pick(h.title, lang)}</h4>
                  </div>
                  <p className="mt-2 ps-7 text-sm text-[var(--text-muted)] leading-relaxed">
                    {pick(h.body, lang)}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* The Why */}
          <div className="reveal reveal-delay-1">
            <h3 className="mb-6 font-mono text-sm uppercase tracking-wider text-[var(--text-dim)]">
              {t.whyTitle}
            </h3>
            <ul className="flex flex-col gap-4">
              {theWhy.map((w, idx) => (
                <li key={idx} className="glass-card p-5">
                  <h4 className="text-base font-medium text-[var(--text)]">
                    {pick(w.question, lang)}
                  </h4>
                  <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
                    {pick(w.answer, lang)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* What I Don't Do */}
        <div className="reveal">
          <h3 className="mb-8 font-mono text-sm uppercase tracking-wider text-[var(--text-dim)]">
            {t.dontTitle}
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {dontDo.map((d, idx) => (
              <li key={idx} className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--accent-alert)]/40">
                <span
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--accent-alert)]/10 font-mono text-sm text-[var(--accent-alert)]"
                  aria-hidden
                >
                  ✕
                </span>
                <span className="text-sm text-[var(--text)]">{pick(d.text, lang)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
