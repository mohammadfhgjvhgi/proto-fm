"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { key: "entry", href: "/" },
  { key: "proof", href: "/proof" },
  { key: "projects", href: "/projects" },
  { key: "philosophy", href: "/philosophy" },
  { key: "trajectory", href: "/trajectory" },
  { key: "engage", href: "/engage" },
] as const;

export function Navbar() {
  const lang = useLanguageStore((s) => s.lang);
  const toggle = useLanguageStore((s) => s.toggle);
  const t = translations[lang].nav;
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(top > 20);
      setProgress(height > 0 ? Math.min((top / height) * 100, 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-3 py-2 transition-all duration-300 sm:px-4",
          scrolled
            ? "border border-[var(--border)] bg-[var(--bg)]/70 backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        )}
        aria-label="Main"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 ps-1.5"
          aria-label={lang === "ar" ? "العودة للأعلى" : "Back to top"}
        >
          <span
            className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--accent)] font-mono text-xs font-bold text-[var(--bg)]"
            aria-hidden
          >
            MA
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] sm:inline">
            {lang === "ar" ? "هوية هندسية" : "Eng. Identity"}
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-sm transition-colors duration-200",
                    active
                      ? "bg-[var(--surface-2)] text-[var(--accent)]"
                      : "text-[var(--text-muted)] hover:bg-[var(--surface-2)] hover:text-[var(--text)]"
                  )}
                >
                  {t[item.key]}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label={t.langToggleLabel}
            className="grid h-8 w-8 place-items-center rounded-full border border-[var(--border)] font-mono text-xs font-medium transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {t.langToggle}
          </button>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={lang === "ar" ? "القائمة" : "Menu"}
            className="grid h-8 w-8 place-items-center rounded-full border border-[var(--border)] md:hidden"
          >
            <span className="sr-only">menu</span>
            <div className="flex flex-col gap-1" aria-hidden>
              <span className={cn("h-0.5 w-4 bg-current transition-transform", mobileOpen && "translate-y-[3.5px] rotate-45")} />
              <span className={cn("h-0.5 w-4 bg-current transition-transform", mobileOpen && "-translate-y-[2.5px] -rotate-45")} />
            </div>
          </button>
        </div>
      </nav>

      {/* Scroll progress — lime line at very top */}
      <div
        className="mx-auto mt-1 h-px max-w-6xl bg-[var(--accent)] transition-[width] duration-150"
        style={{ width: `${progress}%`, opacity: scrolled ? 1 : 0 }}
        aria-hidden
      />

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-[var(--border)] bg-[var(--bg)]/95 p-2 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-sm transition-colors",
                    isActive(item.href)
                      ? "bg-[var(--surface-2)] text-[var(--accent)]"
                      : "text-[var(--text)] hover:bg-[var(--surface-2)]"
                  )}
                >
                  {t[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
