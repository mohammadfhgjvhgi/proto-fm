"use client";

import Link from "next/link";
import { useLanguageStore } from "@/lib/store";
import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * PageHeader — shared hero for inner pages.
 * Section number + title + subtitle, on a mesh-bg backdrop.
 */
export function PageHeader({
  sectionNumber,
  title,
  subtitle,
}: {
  sectionNumber: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="relative overflow-hidden border-b border-[var(--border)] mesh-bg pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
        >
          <ArrowRight className="h-3 w-3 rtl:hidden" aria-hidden />
          <ArrowLeft className="hidden h-3 w-3 rtl:block" aria-hidden />
          <span className="rtl:hidden">Home</span>
          <span className="hidden rtl:inline">الرئيسية</span>
        </Link>
        <span className="section-label">{sectionNumber}</span>
        <h1 className="mt-5 text-4xl font-medium tracking-tight text-[var(--text)] sm:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-[var(--text-muted)]">{subtitle}</p>
        )}
      </div>
    </header>
  );
}

/** BackLink to home (used at the bottom of inner pages). */
export function BackLink() {
  const lang = useLanguageStore((s) => s.lang);
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
      >
        <ArrowRight className="h-3 w-3 rtl:hidden" aria-hidden />
        <ArrowLeft className="hidden h-3 w-3 rtl:block" aria-hidden />
        {lang === "ar" ? "العودة للرئيسية" : "Back to home"}
      </Link>
    </div>
  );
}
