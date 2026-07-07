"use client";

import { useState } from "react";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { channels } from "@/lib/content";
import { MessageSquare, Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

type PathKey = "review" | "consult" | "build" | "refer";

/**
 * Engage — 2026 glass form with floating path selector.
 * Submits to /api/engage. Direct channels in side column.
 */
export function Engage() {
  const lang = useLanguageStore((s) => s.lang);
  const t = translations[lang].engage;
  const [path, setPath] = useState<PathKey>("review");

  const paths: PathKey[] = ["review", "consult", "build", "refer"];

  return (
    <section
      id="engage"
      className="relative border-t border-[var(--border)] bg-[var(--bg-soft)] py-24 sm:py-32"
      aria-labelledby="engage-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div className="reveal mb-14">
          <span className="section-label">{t.sectionNumber} / {t.title}</span>
          <h2 id="engage-heading" className="mt-5 text-4xl font-medium tracking-tight text-[var(--text)] sm:text-5xl">
            {t.title}
          </h2>
          <p className="mt-3 max-w-xl text-[var(--text-muted)]">{t.subtitle}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Form column */}
          <div className="reveal">
            {/* Path selector — pill tabs */}
            <div
              role="tablist"
              aria-label={lang === "ar" ? "نوع التواصل" : "Engagement type"}
              className="grid grid-cols-2 gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 sm:grid-cols-4"
            >
              {paths.map((p) => {
                const active = p === path;
                return (
                  <button
                    key={p}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setPath(p)}
                    className={
                      "rounded-xl px-3 py-3 text-start transition-all duration-200 " +
                      (active
                        ? "bg-[var(--accent)] text-[var(--bg)]"
                        : "text-[var(--text-muted)] hover:bg-[var(--surface-2)] hover:text-[var(--text)]")
                    }
                  >
                    <span className="block text-sm font-medium">{t.paths[p].label}</span>
                    <span className={"mt-1 block text-xs " + (active ? "text-[var(--bg)]/70" : "text-[var(--text-dim)]")}>
                      {t.paths[p].desc}
                    </span>
                  </button>
                );
              })}
            </div>

            <EngageForm path={path} />
          </div>

          {/* Direct channels */}
          <aside className="reveal reveal-delay-1" aria-label={t.channelsTitle}>
            <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-[var(--text-dim)]">
              {t.channelsTitle}
            </h3>
            <ul className="flex flex-col gap-2">
              <ChannelItem href={channels.whatsapp} icon={<MessageSquare className="h-4 w-4" aria-hidden />} label={t.channels.whatsapp} external />
              <ChannelItem href={channels.email} icon={<Mail className="h-4 w-4" aria-hidden />} label={t.channels.email} />
              <ChannelItem href={channels.github} icon={<Github className="h-4 w-4" aria-hidden />} label={t.channels.github} external />
              <ChannelItem href={null} icon={<Linkedin className="h-4 w-4" aria-hidden />} label={`${t.channels.linkedin} · ${t.channels.linkedinSoon}`} />
            </ul>

            <div className="mt-6 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent-soft)] p-4">
              <p className="flex items-center gap-2 font-mono text-xs text-[var(--accent)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden />
                {t.responseTime}
              </p>
            </div>

            <p className="mt-4 text-xs text-[var(--text-dim)]">{t.noPhone}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ChannelItem({
  href,
  icon,
  label,
  external,
}: {
  href: string | null;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
}) {
  if (!href) {
    return (
      <li>
        <span className="flex cursor-not-allowed items-center gap-3 rounded-xl border border-[var(--border)] px-4 py-3 text-sm text-[var(--text-dim)]">
          {icon}
          {label}
        </span>
      </li>
    );
  }
  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="group flex items-center justify-between gap-3 rounded-xl border border-[var(--border)] px-4 py-3 text-sm text-[var(--text)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--surface-2)]"
      >
        <span className="flex items-center gap-3">
          {icon}
          {label}
        </span>
        <ArrowUpRight className="h-3.5 w-3.5 text-[var(--text-dim)] transition-colors group-hover:text-[var(--accent)]" aria-hidden />
      </a>
    </li>
  );
}

function EngageForm({ path }: { path: PathKey }) {
  const lang = useLanguageStore((s) => s.lang);
  const t = translations[lang].engage.form;
  const pathFields = translations[lang].engage.paths[path].fields;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/engage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path, name, email, fields: fieldValues }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? "Request failed");
      }
      setStatus("success");
      setName("");
      setEmail("");
      setFieldValues({});
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : String(err));
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="mt-6 flex flex-col items-start gap-4 rounded-2xl border border-[var(--accent)]/40 bg-[var(--accent-soft)] p-7"
      >
        <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--accent)] text-[var(--bg)]" aria-hidden>
          ✓
        </span>
        <p className="text-lg text-[var(--text)]">{t.success}</p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-pill-ghost"
        >
          {lang === "ar" ? "إرسال أخرى" : "Send another"}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <FloatingInput
          id="name"
          label={t.nameLabel}
          type="text"
          required
          value={name}
          onChange={setName}
          placeholder={t.namePlaceholder}
        />
        <FloatingInput
          id="email"
          label={t.emailLabel}
          type="email"
          required
          value={email}
          onChange={setEmail}
          placeholder={t.emailPlaceholder}
          dir="ltr"
        />
      </div>

      {pathFields.map((fieldLabel) => (
        <FloatingTextarea
          key={fieldLabel}
          id={fieldLabel}
          label={fieldLabel}
          required
          value={fieldValues[fieldLabel] ?? ""}
          onChange={(v) => setFieldValues((prev) => ({ ...prev, [fieldLabel]: v }))}
          placeholder={t.contextPlaceholder}
        />
      ))}

      {status === "error" && (
        <p role="alert" className="rounded-lg bg-[var(--accent-alert)]/10 px-4 py-2 text-sm text-[var(--accent-alert)]">
          {t.error} {errorMsg && <span className="font-mono text-xs">({errorMsg})</span>}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-pill group disabled:opacity-50"
        >
          {status === "submitting" ? t.submitting : t.submit}
          {status !== "submitting" && (
            <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">→</span>
          )}
        </button>
      </div>
    </form>
  );
}

/* Floating-label input — 2026 style */
function FloatingInput({
  id,
  label,
  type,
  required,
  value,
  onChange,
  placeholder,
  dir,
}: {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  dir?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-dim)]">
        {label}
      </span>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        dir={dir}
        className="rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] px-4 py-3 text-[var(--text)] outline-none transition-colors duration-200 placeholder:text-[var(--text-dim)] focus:border-[var(--accent)]"
      />
    </label>
  );
}

function FloatingTextarea({
  id,
  label,
  required,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-dim)]">
        {label}
      </span>
      <textarea
        id={id}
        required={required}
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="resize-none rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] px-4 py-3 text-[var(--text)] outline-none transition-colors duration-200 placeholder:text-[var(--text-dim)] focus:border-[var(--accent)]"
      />
    </label>
  );
}
