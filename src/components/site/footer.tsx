"use client";

import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";

const NAV_LINKS = [
  { key: "entry", href: "#entry" },
  { key: "proof", href: "#proof" },
  { key: "projects", href: "#projects" },
  { key: "philosophy", href: "#philosophy" },
  { key: "trajectory", href: "#trajectory" },
  { key: "engage", href: "#engage" },
] as const;

/**
 * Footer — 2026 dark with subtle mesh accent. Sticky to bottom.
 */
export function Footer() {
  const lang = useLanguageStore((s) => s.lang);
  const t = translations[lang].footer;
  const nav = translations[lang].nav;

  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--bg)]">
      {/* Mesh accent line at top */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--accent), var(--accent-2), transparent)",
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span
                className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--accent)] font-mono text-sm font-bold text-[var(--bg)]"
                aria-hidden
              >
                MA
              </span>
              <div>
                <p className="text-base font-medium text-[var(--text)]">
                  {lang === "ar" ? "مهندس محمد عادل العقيلي" : "Mohammed Adil Alakaly"}
                </p>
                <p className="font-mono text-[11px] text-[var(--text-dim)]">{t.tagline}</p>
              </div>
            </div>

            {/* Badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-3 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent)]">
                {t.badge}
              </span>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label={t.quickLinks}>
            <h3 className="mb-4 font-mono text-[10px] uppercase tracking-wider text-[var(--text-dim)]">
              {t.quickLinks}
            </h3>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                  >
                    {nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Technical */}
          <div>
            <h3 className="mb-4 font-mono text-[10px] uppercase tracking-wider text-[var(--text-dim)]">
              {t.technical}
            </h3>
            <dl className="flex flex-col gap-4">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-dim)]">
                  {t.lastUpdate}
                </dt>
                <dd className="mt-1 font-mono text-sm text-[var(--text)]">{t.lastUpdateValue}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-dim)]">
                  Stack
                </dt>
                <dd className="mt-1 font-mono text-xs text-[var(--text-muted)]">{t.techValue}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-[var(--text-dim)]">{t.copyright}</p>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-[var(--text-dim)]">{t.version}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden />
            <span className="font-mono text-[11px] text-[var(--accent)]">2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
