"use client";

import Link from "next/link";
import { SiteLayout } from "@/components/site/site-layout";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { skillsLearned, featuredProject, pick, trajectory } from "@/lib/content";
import { Shield, Sparkles, Cpu, Cloud, Sun, Smartphone, Wrench, BookOpen, Award } from "lucide-react";
// Note: Shield kept for the "security" system icon in the project showcase.

/**
 * Home — PUBLIC version (for people).
 * Inspiring, visual, focused on "what I learned" + "what I built".
 * Different from /admin (official documentation version).
 */
export default function Home() {
  const lang = useLanguageStore((s) => s.lang);
  const t = translations[lang];

  return (
    <SiteLayout>
      {/* ===== HERO — inspiring, personal ===== */}
      <section
        id="entry"
        className="relative min-h-screen overflow-hidden pt-24 mesh-bg"
        aria-label={lang === "ar" ? "المقدمة" : "Entry"}
      >
        <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-8 sm:pt-16">
          {/* Status chip */}
          <div className="reveal flex items-center gap-3">
            <span className="chip chip-accent">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              </span>
              {t.hero.authority}
            </span>
          </div>

          {/* Name */}
          <h1 className="reveal reveal-delay-1 mt-8 text-5xl font-medium leading-[1.02] tracking-tight text-[var(--text)] sm:text-7xl lg:text-8xl">
            {t.hero.name}
          </h1>

          {/* Specialty */}
          <p className="reveal reveal-delay-2 mt-5 font-mono text-base uppercase tracking-[0.08em] text-[var(--accent)] sm:text-xl">
            {t.hero.specialty}
          </p>

          {/* Tagline */}
          <p className="reveal reveal-delay-3 mt-8 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl">
            {t.hero.tagline}
          </p>

          {/* CTAs */}
          <div className="reveal reveal-delay-4 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="#learned" className="btn-pill group">
              {lang === "ar" ? "شوف إيش تعلمت" : "See what I learned"}
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">→</span>
            </Link>
            <Link href="#built" className="btn-pill-ghost">
              {lang === "ar" ? "شوف إيش أنجزت" : "See what I built"}
            </Link>
          </div>
        </div>

        {/* Marquee band */}
        <div className="relative mt-12 border-y border-[var(--border)] py-4">
          <div className="marquee">
            <div className="marquee-track">
              {[...skillsLearned.slice(0, 8), ...skillsLearned.slice(0, 8)].map((s, i) => (
                <span key={i} className="flex items-center gap-3 font-mono text-sm text-[var(--text-muted)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden />
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT I LEARNED — skills grid ===== */}
      <section id="learned" className="relative py-24 sm:py-32 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="reveal mb-14">
            <span className="section-label">
              <BookOpen className="h-3 w-3" aria-hidden />
              {lang === "ar" ? "رحلة التعلم" : "Learning journey"}
            </span>
            <h2 className="mt-5 text-4xl font-medium tracking-tight text-[var(--text)] sm:text-5xl">
              {lang === "ar" ? "إيش تعلّمت؟" : "What did I learn?"}
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--text-muted)]">
              {lang === "ar"
                ? "من الصفر في 2025 إلى نظام متكامل في 2026. كل مهارة اكتسبتها عبر البناء الفعلي، لا بالنظر فقط."
                : "From zero in 2025 to an integrated system in 2026. Every skill gained through real building, not just watching."}
            </p>
          </div>

          {/* Year split */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* 2025 */}
            <div className="reveal">
              <div className="mb-6 flex items-baseline gap-3">
                <span className="font-mono text-5xl font-medium text-[var(--accent)]">2025</span>
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-dim)]">
                  {lang === "ar" ? "البداية" : "the start"}
                </span>
              </div>
              <ul className="flex flex-col gap-2">
                {skillsLearned.filter(s => s.year === "2025").map((s, idx) => (
                  <li key={idx} className="glass-card flex items-center justify-between p-4">
                    <span className="flex items-center gap-3 text-[var(--text)]">
                      <Sparkles className="h-4 w-4 text-[var(--accent)]" aria-hidden />
                      {s.name}
                    </span>
                    <span className="chip chip-accent">{lang === "ar" ? "أتقنت" : "mastered"}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2026 */}
            <div className="reveal reveal-delay-1">
              <div className="mb-6 flex items-baseline gap-3">
                <span className="font-mono text-5xl font-medium text-[var(--accent-2)]">2026</span>
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-dim)]">
                  {lang === "ar" ? "الإنجاز" : "the build"}
                </span>
              </div>
              <ul className="flex flex-col gap-2">
                {skillsLearned.filter(s => s.year === "2026").map((s, idx) => (
                  <li key={idx} className="glass-card flex items-center justify-between p-4">
                    <span className="flex items-center gap-3 text-[var(--text)]">
                      <Sparkles className="h-4 w-4 text-[var(--accent)]" aria-hidden />
                      {s.name}
                    </span>
                    <span className={s.level === "implemented" ? "chip chip-accent" : "chip chip-violet"}>
                      {s.level === "implemented" ? (lang === "ar" ? "أتقنت" : "mastered") : (lang === "ar" ? "أعمل بها" : "working")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT I BUILT — visual project showcase ===== */}
      <section id="built" className="relative border-y border-[var(--border)] bg-[var(--bg-soft)] py-24 sm:py-32 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="reveal mb-14">
            <span className="section-label">
              <Cpu className="h-3 w-3" aria-hidden />
              {lang === "ar" ? "الإنجاز" : "Achievement"}
            </span>
            <h2 className="mt-5 text-4xl font-medium tracking-tight text-[var(--text)] sm:text-5xl">
              {lang === "ar" ? "إيش أنجزت؟" : "What did I build?"}
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--text-muted)]">
              {lang === "ar"
                ? "نظام متكامل لإدارة المباني الذكية — 6 أنظمة في مشروع واحد، بُني على مدى 8 أشهر."
                : "An integrated smart building management system — 6 systems in one project, built over 8 months."}
            </p>
          </div>

          {/* Big project card */}
          <div className="reveal reveal-delay-1 glow-card overflow-hidden">
            <div className="grid lg:grid-cols-[1.3fr_1fr]">
              {/* Visual side */}
              <div className="relative aspect-[16/10] overflow-hidden mesh-bg lg:aspect-auto">
                <div className="absolute inset-0 dot-grid opacity-30" aria-hidden />
                {/* System icons floating */}
                <div className="absolute inset-0 grid grid-cols-3 gap-4 p-8">
                  <SystemIcon icon={<Sun className="h-6 w-6" />} label={lang === "ar" ? "طاقة شمسية" : "Solar"} delay="0s" />
                  <SystemIcon icon={<Cpu className="h-6 w-6" />} label="Arduino Mega" delay="0.5s" />
                  <SystemIcon icon={<Cloud className="h-6 w-6" />} label="Firebase" delay="1s" />
                  <SystemIcon icon={<Smartphone className="h-6 w-6" />} label={lang === "ar" ? "تطبيق أندرويد" : "Android app"} delay="1.5s" />
                  <SystemIcon icon={<Wrench className="h-6 w-6" />} label={lang === "ar" ? "6 أنظمة" : "6 systems"} delay="2s" />
                  <SystemIcon icon={<Shield className="h-6 w-6" />} label={lang === "ar" ? "حماية" : "Security"} delay="2.5s" />
                </div>
              </div>

              {/* Details side */}
              <div className="flex flex-col justify-between p-7 sm:p-10">
                <div>
                  <span className="chip chip-accent">PRJ-001 · 2025-2026</span>
                  <h3 className="mt-5 text-2xl font-medium text-[var(--text)] sm:text-3xl">
                    {pick(featuredProject.shortTitle, lang)}
                  </h3>
                  <p className="mt-3 font-mono text-sm text-[var(--accent)]">
                    Arduino Mega WiFi R3 · ESP8266 · Firebase · Android
                  </p>
                  <p className="mt-5 text-[var(--text-muted)] leading-relaxed">
                    {lang === "ar"
                      ? "نظام يدمج كشف الحريق، كشف العبث، الإضاءة الذكية، الباب الذكي، المراقبة البيئية، والتحكم عن بُعد — كلها في مشروع واحد مُغذّى بالطاقة الشمسية."
                      : "A system integrating fire detection, tamper detection, smart lighting, smart door, environmental monitoring, and remote control — all in one solar-powered project."}
                  </p>
                </div>

                {/* Mini metrics */}
                <ul className="mt-8 grid grid-cols-3 gap-3">
                  <li className="glass-card p-3 text-center">
                    <div className="font-mono text-2xl font-medium text-[var(--accent)]">6</div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[var(--text-dim)]">
                      {lang === "ar" ? "أنظمة" : "systems"}
                    </div>
                  </li>
                  <li className="glass-card p-3 text-center">
                    <div className="font-mono text-2xl font-medium text-[var(--accent)]">200ms</div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[var(--text-dim)]">
                      {lang === "ar" ? "استجابة" : "response"}
                    </div>
                  </li>
                  <li className="glass-card p-3 text-center">
                    <div className="font-mono text-2xl font-medium text-[var(--accent)]">8</div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[var(--text-dim)]">
                      {lang === "ar" ? "أشهر" : "months"}
                    </div>
                  </li>
                </ul>

                <Link href="/projects/smart-building" className="btn-pill group mt-8 self-start">
                  {lang === "ar" ? "شوف التفاصيل" : "See details"}
                  <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRAJECTORY — simplified timeline ===== */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="reveal mb-14">
            <span className="section-label">
              <Award className="h-3 w-3" aria-hidden />
              {lang === "ar" ? "المسار" : "Path"}
            </span>
            <h2 className="mt-5 text-4xl font-medium tracking-tight text-[var(--text)] sm:text-5xl">
              {lang === "ar" ? "رحلتي" : "My journey"}
            </h2>
          </div>

          <ol className="relative">
            <span className="absolute bottom-0 top-0 w-px bg-gradient-to-b from-transparent via-[var(--accent)]/40 to-transparent sm:start-2" aria-hidden />
            {trajectory.filter((_, i) => [0, 2, 3, 4].includes(i)).map((entry, idx) => {
              const isFuture = entry.year === "Future";
              return (
                <li key={idx} className="reveal relative mb-12 last:mb-0">
                  <div className="grid gap-4 sm:grid-cols-[120px_1fr] sm:gap-8">
                    <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-1">
                      <span
                        className={"relative grid h-4 w-4 place-items-center rounded-full " + (isFuture ? "bg-[var(--accent-2)]" : "bg-[var(--accent)]")}
                        aria-hidden
                      >
                        {!isFuture && <span className="absolute inset-0 animate-ping rounded-full bg-[var(--accent)] opacity-40" />}
                      </span>
                      <div className="sm:mt-3">
                        <div className="font-mono text-lg font-medium text-[var(--text)] sm:text-xl">{entry.year}</div>
                        <div className={"font-mono text-[11px] uppercase tracking-wider " + (isFuture ? "text-[var(--accent-2)]" : "text-[var(--accent)]")}>
                          {pick(entry.stage, lang)}
                        </div>
                      </div>
                    </div>
                    <ul className="glass-card flex flex-col gap-2 p-5">
                      {entry.items.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className={"mt-2 h-1.5 w-1.5 shrink-0 rounded-full " + (isFuture ? "bg-[var(--accent-2)]" : "bg-[var(--accent)]")} aria-hidden />
                          <p className="text-sm text-[var(--text)] leading-relaxed">{pick(item, lang)}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="reveal mt-8 text-center">
            <Link href="/trajectory" className="btn-pill-ghost">
              {lang === "ar" ? "شوف المسار الكامل (8 مراحل)" : "See full path (8 stages)"}
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA — contact ===== */}
      <section className="relative overflow-hidden border-y border-[var(--border)] py-24 sm:py-32">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(197, 255, 62, 0.18), transparent 60%), radial-gradient(ellipse 70% 60% at 80% 70%, rgba(124, 92, 255, 0.18), transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="reveal text-3xl font-medium tracking-tight text-[var(--text)] sm:text-5xl">
            {lang === "ar"
              ? "بدك تشوف تفاصيل أكثر أو تتواصل؟"
              : "Want more details or to get in touch?"}
          </h2>
          <p className="reveal reveal-delay-1 mt-4 text-[var(--text-muted)]">
            {lang === "ar"
              ? "كل المشروع موثّق بالأكواد والاختبارات والمعايير. وأرد على رسائلك خلال 48 ساعة."
              : "The whole project is documented with code, tests, and standards. I respond within 48 hours."}
          </p>
          <div className="reveal reveal-delay-2 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/projects/smart-building" className="btn-pill group">
              {lang === "ar" ? "الغوص في المشروع" : "Dive into the project"}
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">→</span>
            </Link>
            <Link href="/engage" className="btn-pill-ghost">
              {lang === "ar" ? "تواصل معي" : "Contact me"}
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

/* System icon with float animation */
function SystemIcon({ icon, label, delay }: { icon: React.ReactNode; label: string; delay: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-4 backdrop-blur float-slow"
      style={{ animationDelay: delay }}
    >
      <span className="text-[var(--accent)]">{icon}</span>
      <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">{label}</span>
    </div>
  );
}
