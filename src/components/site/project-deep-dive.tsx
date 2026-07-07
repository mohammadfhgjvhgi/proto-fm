"use client";

import { useState } from "react";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import {
  projectSections,
  featuredProject,
  projectProblem,
  projectConstraints,
  projectArchitecture,
  projectComponents,
  codeSnippets,
  testProtocol,
  projectResults,
  lessons,
  verification,
  projectGallery,
  pick,
  type CodeSnippet,
} from "@/lib/content";

/**
 * Project Deep-Dive — 2026 contemporary case study.
 * 9 numbered sections with bento accents, glowing code blocks.
 */
export function ProjectDeepDive() {
  const lang = useLanguageStore((s) => s.lang);
  const t = translations[lang].project;

  return (
    <section
      id="project-deep-dive"
      className="relative py-24 sm:py-32"
      aria-labelledby="pdd-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div className="reveal mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--accent)]">
            {lang === "ar" ? "دراسة حالة موثّقة" : "Documented case study"}
          </span>
          <h2 id="pdd-heading" className="mt-4 text-4xl font-medium tracking-tight text-[var(--text)] sm:text-5xl">
            {pick(featuredProject.title, lang)}
          </h2>
          {/* Meta pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="chip">ID · PRJ-001</span>
            <span className="chip">{featuredProject.year}</span>
            <span className="chip chip-violet">{pick(featuredProject.status, lang)}</span>
            <span className="chip chip-accent">{pick(featuredProject.duration, lang)}</span>
          </div>
        </div>

        <div className="flex flex-col gap-20">
          {/* 01 — PROBLEM */}
          <NumberedSection section={projectSections[0]}>
            <div className="glass-card p-7">
              <p className="text-lg leading-relaxed text-[var(--text-muted)]">
                {pick(projectProblem.text, lang)}
              </p>
            </div>
          </NumberedSection>

          {/* 02 — CONSTRAINTS */}
          <NumberedSection section={projectSections[1]}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {projectConstraints.map((c, idx) => (
                <li key={idx} className="glass-card flex items-start gap-3 p-5">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--accent-soft)] font-mono text-xs text-[var(--accent)]" aria-hidden>
                    {idx + 1}
                  </span>
                  <span className="text-sm text-[var(--text)]">{pick(c.text, lang)}</span>
                </li>
              ))}
            </ul>
          </NumberedSection>

          {/* 03 — ARCHITECTURE */}
          <NumberedSection section={projectSections[2]}>
            <ol className="grid gap-3">
              {projectArchitecture.map((layer, idx) => (
                <li key={idx} className="glass-card grid grid-cols-1 gap-3 p-5 sm:grid-cols-[220px_1fr] sm:items-center">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--accent-soft)] font-mono text-sm font-medium text-[var(--accent)]">
                      L{idx + 1}
                    </span>
                    <span className="font-mono text-sm font-medium text-[var(--text)]">
                      {pick(layer.layer, lang)}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-muted)]">{pick(layer.content, lang)}</p>
                </li>
              ))}
            </ol>
          </NumberedSection>

          {/* 04 — COMPONENTS */}
          <NumberedSection section={projectSections[3]}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {projectComponents.map((c, idx) => (
                <li key={idx} className="glass-card p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--text-muted)]">{pick(c.component, lang)}</span>
                    <span className="chip chip-accent">×{c.qty}</span>
                  </div>
                  <div className="mt-3 font-mono text-base text-[var(--text)]">{c.model}</div>
                  <p className="mt-2 text-xs text-[var(--text-dim)]">{pick(c.why, lang)}</p>
                </li>
              ))}
            </ul>
          </NumberedSection>

          {/* 05 — IMPLEMENTATION */}
          <NumberedSection section={projectSections[4]}>
            <h4 className="mb-4 font-mono text-sm uppercase tracking-wider text-[var(--text-dim)]">
              {lang === "ar" ? "معرض الصور" : "Gallery"}
            </h4>
            <ul className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {projectGallery.map((img, idx) => (
                <li key={idx}>
                  <figure className="glass-card relative flex aspect-[4/3] items-center justify-center overflow-hidden p-3 text-center">
                    <span className="absolute right-3 top-3 font-mono text-[10px] text-[var(--accent)]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <figcaption>
                      <p className="font-mono text-[10px] text-[var(--text-muted)]">{pick(img.caption, lang)}</p>
                      <p className="mt-1 font-mono text-[9px] uppercase text-[var(--text-dim)]">{pick(img.context, lang)}</p>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>

            <h4 className="mb-4 font-mono text-sm uppercase tracking-wider text-[var(--text-dim)]">
              {lang === "ar" ? "مقاطع كود مفتاحية" : "Key code snippets"}
            </h4>
            <ul className="flex flex-col gap-5">
              {codeSnippets.map((snip, idx) => (
                <li key={idx} className="reveal">
                  <CodeBlock snippet={snip} copyLabel={t.copy} copiedLabel={t.copied} codeLabel={t.codeLabel} />
                </li>
              ))}
            </ul>
          </NumberedSection>

          {/* 06 — TESTING */}
          <NumberedSection section={projectSections[5]}>
            <ol className="grid gap-3 sm:grid-cols-3">
              {testProtocol.map((test, idx) => (
                <li key={idx} className="glass-card flex h-full flex-col p-5">
                  <span className="font-mono text-xs text-[var(--accent)]">TEST 0{idx + 1}</span>
                  <h4 className="mt-3 text-base font-medium text-[var(--text)]">
                    {pick(test.test, lang)}
                  </h4>
                  <p className="mt-2 flex-1 text-sm text-[var(--text-muted)]">{pick(test.how, lang)}</p>
                  <p className="mt-4 rounded-lg bg-[var(--accent-soft)] px-3 py-2 font-mono text-sm text-[var(--accent)]">
                    → {pick(test.result, lang)}
                  </p>
                </li>
              ))}
            </ol>
          </NumberedSection>

          {/* 07 — RESULTS */}
          <NumberedSection section={projectSections[6]}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {projectResults.map((r, idx) => (
                <li key={idx} className="glass-card p-5">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-dim)]">
                    {pick(r.metric, lang)}
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-sm text-[var(--text-dim)] line-through">{pick(r.before, lang)}</span>
                    <span className="text-[var(--text-muted)]" aria-hidden>→</span>
                    <span className="font-mono text-lg text-[var(--accent)]">{pick(r.after, lang)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </NumberedSection>

          {/* 08 — LESSONS */}
          <NumberedSection section={projectSections[7]}>
            <ul className="grid gap-3">
              {lessons.map((l, idx) => {
                const tone =
                  l.type === "worked"
                    ? { color: "var(--accent)", bg: "var(--accent-soft)", mark: "✓", label: lang === "ar" ? "نجح" : "worked" }
                    : l.type === "failed"
                    ? { color: "var(--accent-alert)", bg: "rgba(255,87,87,0.12)", mark: "✕", label: lang === "ar" ? "فشل" : "failed" }
                    : { color: "var(--accent-2)", bg: "var(--accent-2-soft)", mark: "↻", label: lang === "ar" ? "مختلف" : "different" };
                return (
                  <li key={idx} className="glass-card flex items-start gap-4 p-5">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full font-mono text-sm" style={{ background: tone.bg, color: tone.color }} aria-hidden>
                      {tone.mark}
                    </span>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: tone.color }}>
                        {tone.label}
                      </span>
                      <p className="mt-1 text-sm text-[var(--text)] leading-relaxed">{pick(l.text, lang)}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </NumberedSection>

          {/* 09 — VERIFICATION */}
          <NumberedSection section={projectSections[8]}>
            <ul className="grid gap-3">
              {verification.map((v, idx) => (
                <li key={idx} className="glass-card flex items-start gap-3 p-5">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--accent-soft)] font-mono text-xs text-[var(--accent)]" aria-hidden>
                    ✓
                  </span>
                  <p className="text-sm text-[var(--text)] leading-relaxed">{pick(v.text, lang)}</p>
                </li>
              ))}
            </ul>
          </NumberedSection>
        </div>
      </div>
    </section>
  );
}

/* ---------- sub-components ---------- */

function NumberedSection({
  section,
  children,
}: {
  section: { id: string; number: string; title: { ar: string; en: string } };
  children: React.ReactNode;
}) {
  const lang = useLanguageStore((s) => s.lang);
  return (
    <article id={section.id} className="reveal scroll-mt-24">
      <div className="mb-7 flex items-center gap-4">
        <span className="font-mono text-5xl font-medium text-[var(--surface-3)]">
          {section.number}
        </span>
        <div>
          <h3 className="text-xl font-medium text-[var(--text)] sm:text-2xl">
            {pick(section.title, lang)}
          </h3>
          <span className="mt-1 block h-px w-12 bg-[var(--accent)]" aria-hidden />
        </div>
      </div>
      {children}
    </article>
  );
}

function CodeBlock({
  snippet,
  copyLabel,
  copiedLabel,
  codeLabel: _codeLabel,
}: {
  snippet: CodeSnippet;
  copyLabel: string;
  copiedLabel: string;
  codeLabel: string;
}) {
  const lang = useLanguageStore((s) => s.lang);
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — silent */
    }
  };

  return (
    <div className="code-block">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-alert)]/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-2)]/50" />
          </div>
          <span className="font-mono text-xs text-[var(--accent)]">{snippet.filename}</span>
        </div>
        <button
          onClick={onCopy}
          className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          aria-label={copyLabel}
        >
          {copied ? copiedLabel : copyLabel}
        </button>
      </div>

      {/* Title */}
      <div className="border-b border-[var(--border)] px-4 py-2">
        <p className="text-sm text-[var(--text)]">{pick(snippet.title, lang)}</p>
      </div>

      {/* Code */}
      <pre className="max-h-96 overflow-auto scroll-thin p-4 text-xs leading-relaxed text-[var(--text)]">
        <code className="font-mono">{snippet.code}</code>
      </pre>
    </div>
  );
}
