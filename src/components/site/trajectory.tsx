"use client";

import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { trajectory, pick } from "@/lib/content";

/**
 * Trajectory — 8 stages from first secondary to future aspirations.
 * Glowing accent nodes, animated vertical line, glass cards per stage.
 * Each stage shows: year/stage label + age + items.
 */
export function Trajectory() {
  const lang = useLanguageStore((s) => s.lang);
  const t = translations[lang].trajectory;

  return (
    <section
      id="trajectory"
      className="relative border-y border-[var(--border)] bg-[var(--bg-soft)] py-24 sm:py-32"
      aria-labelledby="trajectory-heading"
    >
      {/* Mesh accent */}
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div className="reveal mb-16">
          <span className="section-label">{t.sectionNumber} / {t.title}</span>
          <h2 id="trajectory-heading" className="mt-5 text-4xl font-medium tracking-tight text-[var(--text)] sm:text-5xl">
            {t.title}
          </h2>
          <p className="mt-3 max-w-xl text-[var(--text-muted)]">{t.subtitle}</p>
        </div>

        {/* Timeline */}
        <ol className="relative">
          {/* Vertical accent line */}
          <span
            className="absolute bottom-0 top-0 w-px bg-gradient-to-b from-transparent via-[var(--accent)]/40 to-transparent sm:start-2"
            aria-hidden
          />

          {trajectory.map((entry, idx) => {
            const isFuture = entry.year === "Future";
            const isDone = entry.year !== "Future";
            return (
              <li key={idx} className="reveal relative mb-12 last:mb-0">
                <div className="grid gap-4 sm:grid-cols-[140px_1fr] sm:gap-8">
                  {/* Year column with glowing node */}
                  <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-1">
                    <span
                      className={
                        "relative grid h-4 w-4 place-items-center rounded-full " +
                        (isFuture ? "bg-[var(--accent-2)]" : "bg-[var(--accent)]")
                      }
                      aria-hidden
                    >
                      {isDone && (
                        <span className="absolute inset-0 animate-ping rounded-full bg-[var(--accent)] opacity-40" />
                      )}
                    </span>
                    <div className="sm:mt-3">
                      <div className="font-mono text-xl font-medium text-[var(--text)] sm:text-2xl">
                        {entry.year}
                      </div>
                      <div className={"font-mono text-[11px] uppercase tracking-wider " + (isFuture ? "text-[var(--accent-2)]" : "text-[var(--accent)]")}>
                        {pick(entry.stage, lang)}
                      </div>
                      <div className="font-mono text-[10px] text-[var(--text-dim)]">
                        {pick(entry.age, lang)}
                      </div>
                    </div>
                  </div>

                  {/* Items in a glass card */}
                  <ul className="glass-card flex flex-col gap-3 p-6">
                    {entry.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className={"mt-2 h-1.5 w-1.5 shrink-0 rounded-full " + (isFuture ? "bg-[var(--accent-2)]" : "bg-[var(--accent)]")}
                          aria-hidden
                        />
                        <p className="text-[var(--text)] leading-relaxed">{pick(item, lang)}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
