"use client";

import { useEffect } from "react";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";

/**
 * Syncs the persisted language preference with the <html> element's
 * `lang` and `dir` attributes. Arabic (default) → rtl, English → ltr.
 *
 * Mounted once inside the root layout. Avoids hydration mismatch by
 * only applying changes on the client after mount.
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useLanguageStore((s) => s.lang);

  useEffect(() => {
    const html = document.documentElement;
    const t = translations[lang];
    html.lang = t.htmlLang;
    html.dir = t.dir;
  }, [lang]);

  return <>{children}</>;
}
