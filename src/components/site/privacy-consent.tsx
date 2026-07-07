"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguageStore } from "@/lib/store";

/**
 * Privacy Notice + Cookie Consent banner (GDPR compliance).
 * Shows once on first visit, stores consent in localStorage.
 * Uses lazy initializer to avoid setState-in-effect lint rule.
 */
export function PrivacyConsent() {
  const lang = useLanguageStore((s) => s.lang);
  const [show, setShow] = useState<boolean>(() =>
    typeof window !== "undefined" && !localStorage.getItem("privacy-consent")
  );

  useEffect(() => {
    // Sync if consent changes in another tab
    const handler = (e: StorageEvent) => {
      if (e.key === "privacy-consent" && e.newValue) setShow(false);
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const accept = () => {
    localStorage.setItem("privacy-consent", "accepted");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("privacy-consent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label={lang === "ar" ? "إشعار الخصوصية" : "Privacy notice"}
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-[var(--border)] bg-[var(--bg)]/95 p-4 backdrop-blur-xl sm:p-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1 text-sm text-[var(--text-muted)]">
          <p>
            {lang === "ar"
              ? "هذا الموقع يستخدم localStorage لحفظ تفضيل اللغة فقط. لا نستخدم cookies للتتبع. رسائل النموذج تُخزّن في قاعدة بياناتنا مع تشفير IP. "
              : "This site uses localStorage to save your language preference only. We don't use tracking cookies. Form messages are stored in our database with hashed IP. "}
            <Link
              href="/privacy"
              className="text-[var(--accent)] underline hover:no-underline"
            >
              {lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={decline}
            className="rounded-full border border-[var(--border)] px-4 py-2 text-xs text-[var(--text-muted)] transition-colors hover:border-[var(--text-secondary)] hover:text-[var(--text)]"
          >
            {lang === "ar" ? "رفض" : "Decline"}
          </button>
          <button
            onClick={accept}
            className="rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-medium text-[var(--bg)] transition-opacity hover:opacity-85"
          >
            {lang === "ar" ? "موافق" : "Accept"}
          </button>
        </div>
      </div>
    </div>
  );
}
