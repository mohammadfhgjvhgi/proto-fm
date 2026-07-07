"use client";

import Link from "next/link";
import { SiteLayout } from "@/components/site/site-layout";
import { PageHeader } from "@/components/site/page-header";
import { useLanguageStore } from "@/lib/store";
import { featuredProject, pick } from "@/lib/content";

export default function ProjectsPage() {
  const lang = useLanguageStore((s) => s.lang);

  const projects = [featuredProject];

  return (
    <SiteLayout>
      <PageHeader
        sectionNumber="01 / PROJECTS"
        title={lang === "ar" ? "المشاريع" : "Projects"}
        subtitle={
          lang === "ar"
            ? "كل مشروع موثّق بـ 9 أقسام: المشكلة، القيود، العمارة، المكوّنات، التنفيذ، الاختبار، النتائج، الدروس، التحقق."
            : "Each project is documented in 9 sections: problem, constraints, architecture, components, implementation, testing, results, lessons, verification."
        }
      />
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <ul className="grid gap-4">
            {projects.map((p, idx) => (
              <li key={idx} className="reveal">
                <Link
                  href={`/projects/${p.id}`}
                  className="glow-card group flex flex-col gap-6 p-7 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="chip chip-accent">PRJ-001</span>
                      <span className="chip">{p.year}</span>
                      <span className="chip chip-violet">{pick(p.status, lang)}</span>
                    </div>
                    <h2 className="mt-5 text-2xl font-medium text-[var(--text)] sm:text-3xl">
                      {pick(p.title, lang)}
                    </h2>
                    <p className="mt-3 text-[var(--text-muted)]">
                      {lang === "ar"
                        ? "نظام متكامل يدمج 6 أنظمة: حريق، عبث، إضاءة ذكية، باب ذكي، مراقبة بيئية، تحكم عن بُعد."
                        : "An integrated system combining 6 systems: fire, tamper, smart lighting, smart door, environmental monitoring, remote control."}
                    </p>
                    <p className="mt-4 font-mono text-xs text-[var(--accent)]">
                      Arduino Mega WiFi R3 · ESP8266 · Firebase · Android
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                    {lang === "ar" ? "الغوص في المشروع" : "Dive into project"}
                    <span aria-hidden className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
