/**
 * Language store — Arabic is the primary default (RTL).
 * Persisted to localStorage so the preference survives reloads.
 */
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Lang } from "./translations";

interface LanguageState {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      lang: "ar",
      setLang: (lang) => set({ lang }),
      toggle: () => {
        const next = get().lang === "ar" ? "en" : "ar";
        set({ lang: next });
      },
    }),
    {
      name: "eng-identity-lang",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
