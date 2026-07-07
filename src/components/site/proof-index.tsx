"use client";

import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { claims, capabilities, pick } from "@/lib/content";

/**
 * ProofIndex — 2026 dark glassmorphism.
 * Claims as animated cards (not table), capabilities as grid,
 * committee quote as large feature block.
 */
export function ProofIndex() {
  const lang = useLanguageStore((s) => s.lang);
  const t = translations[lang].proof;

  return (
    <section
      id="proof"
      className="relative border-y border-[var(--border)] bg-[var(--bg-soft)] py-24 sm:py-32"
      aria-labelledby="proof-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div className="reveal mb-16">
          <span className="section-label">{t.sectionNumber} / {t.title}</span>
          <h2 id="proof-heading" className="mt-5 text-4xl font-medium tracking-tight text-[var(--text)] sm:text-5xl">
            {t.title}
          </h2>
          <p className="mt-3 max-w-xl text-[var(--text-muted)]">{t.subtitle}</p>
        </div>

        {/* 1. Claims Map — card grid instead of table */}
        <div className="mb-20">
          <h3 className="reveal mb-6 font-mono text-sm uppercase tracking-wider text-[var(--text-dim)]">
            {t.claimsTitle}
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {claims.map((claim, idx) => (
              <li key={idx} className={`reveal reveal-delay-${(idx % 4) + 1}`}>
                <article className="glass-card group flex h-full flex-col p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[var(--accent)]">
                      C{String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden />
                  </div>
                  <h4 className="mt-4 text-base font-medium text-[var(--text)]">
                    {pick(claim.claim, lang)}
                  </h4>
                  <p className="mt-2 flex-1 text-sm text-[var(--text-muted)] leading-relaxed">
                    {pick(claim.evidence, lang)}
                  </p>
                  <p className="mt-4 font-mono text-xs text-[var(--accent-2)]">
                    ✓ {pick(claim.verification, lang)}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>

        {/* 2. Capabilities Matrix */}
        <div className="mb-20">
          <h3 className="reveal mb-6 font-mono text-sm uppercase tracking-wider text-[var(--text-dim)]">
            {t.matrixTitle}
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, idx) => (
              <li key={idx} className={`reveal reveal-delay-${(idx % 4) + 1}`}>
                <div className="glass-card flex h-full flex-col p-5">
                  <div className="flex items-center justify-between">
                    <DepthBadge depth={cap.depth} label={t.depth[cap.depth]} />
                    <span className="font-mono text-[10px] text-[var(--text-dim)]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h4 className="mt-4 text-base font-medium text-[var(--text)]">
                    {pick(cap.capability, lang)}
                  </h4>
                  <span className="mt-3 font-mono text-xs text-[var(--accent)]">
                    {pick(cap.evidence, lang)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Engineering Recognition — big feature */}
        <div className="reveal">
          <h3 className="mb-6 font-mono text-sm uppercase tracking-wider text-[var(--text-dim)]">
            {t.recognitionTitle}
          </h3>
          <div className="glow-card relative overflow-hidden p-8 sm:p-12">
            {/* Big quote mark */}
            <span
              className="pointer-events-none absolute -top-8 font-display text-[12rem] leading-none text-[var(--surface-3)]"
              aria-hidden
            >
              "
            </span>

            <div className="relative grid gap-10 md:grid-cols-2">
              {/* Quote */}
              <blockquote>
                <p className="text-xl font-medium leading-relaxed text-[var(--text)] sm:text-2xl">
                  {t.recognitionQuote}
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-[var(--accent)]" aria-hidden />
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    {t.recognitionAttribution}
                  </span>
                </footer>
              </blockquote>

              {/* Context + Result */}
              <div className="flex flex-col gap-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
                    {t.recognitionContext}
                  </p>
                  <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
                    {t.recognitionContextValue}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
                    {t.recognitionResult}
                  </p>
                  <p className="mt-2 text-sm text-[var(--text)] leading-relaxed">
                    {t.recognitionResultValue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DepthBadge({
  depth,
  label,
}: {
  depth: "implemented" | "working" | "learning";
  label: string;
}) {
  const cls =
    depth === "implemented"
      ? "chip-accent"
      : depth === "working"
      ? "chip-violet"
      : "chip";
  return (
    <span className={`chip ${cls}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
      {label}
    </span>
  );
}
