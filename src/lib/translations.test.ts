import { describe, it, expect } from "vitest";
import { translations, type Lang } from "./translations";

describe("translations consistency", () => {
  const arKeys = Object.keys(translations.ar).sort();
  const enKeys = Object.keys(translations.en).sort();

  it("Arabic and English have the same top-level keys", () => {
    expect(arKeys).toEqual(enKeys);
  });

  it("hero section exists in both languages", () => {
    expect(translations.ar.hero).toBeDefined();
    expect(translations.en.hero).toBeDefined();
    expect(translations.ar.hero.name).toBeTruthy();
    expect(translations.en.hero.name).toBeTruthy();
  });

  it("trust cards have 3 entries in both languages", () => {
    expect(translations.ar.trust.cards).toHaveLength(3);
    expect(translations.en.trust.cards).toHaveLength(3);
  });

  it("stats items have 6 entries in both languages", () => {
    expect(translations.ar.stats.items).toHaveLength(6);
    expect(translations.en.stats.items).toHaveLength(6);
  });

  it("branching options have 3 entries in both languages", () => {
    expect(translations.ar.branching.options).toHaveLength(3);
    expect(translations.en.branching.options).toHaveLength(3);
  });

  it("nav has 6 links + 2 controls in both languages", () => {
    expect(Object.keys(translations.ar.nav)).toHaveLength(8); // 6 links + langToggle + langToggleLabel
    expect(Object.keys(translations.en.nav)).toHaveLength(8);
  });

  it("engage paths have 4 entries in both languages", () => {
    const arPaths = Object.keys(translations.ar.engage.paths);
    const enPaths = Object.keys(translations.en.engage.paths);
    expect(arPaths).toEqual(["review", "consult", "build", "refer"]);
    expect(enPaths).toEqual(arPaths);
  });

  it("all Arabic strings are non-empty (except optional unit field)", () => {
    const checkNonEmpty = (obj: unknown, path = ""): void => {
      if (typeof obj === "string") {
        // "unit" can be empty for stats that have no unit (e.g. count of systems)
        if (path.endsWith(".unit")) return;
        expect(obj.length, `${path} should not be empty`).toBeGreaterThan(0);
      } else if (Array.isArray(obj)) {
        obj.forEach((item, i) => checkNonEmpty(item, `${path}[${i}]`));
      } else if (obj && typeof obj === "object") {
        for (const [key, val] of Object.entries(obj)) {
          checkNonEmpty(val, path ? `${path}.${key}` : key);
        }
      }
    };
    checkNonEmpty(translations.ar);
  });

  it("all English strings are non-empty (except optional unit field)", () => {
    const checkNonEmpty = (obj: unknown, path = ""): void => {
      if (typeof obj === "string") {
        if (path.endsWith(".unit")) return;
        expect(obj.length, `${path} should not be empty`).toBeGreaterThan(0);
      } else if (Array.isArray(obj)) {
        obj.forEach((item, i) => checkNonEmpty(item, `${path}[${i}]`));
      } else if (obj && typeof obj === "object") {
        for (const [key, val] of Object.entries(obj)) {
          checkNonEmpty(val, path ? `${path}.${key}` : key);
        }
      }
    };
    checkNonEmpty(translations.en);
  });
});

describe("translations type safety", () => {
  it("Lang type accepts 'ar' and 'en'", () => {
    const ar: Lang = "ar";
    const en: Lang = "en";
    expect(ar).toBe("ar");
    expect(en).toBe("en");
  });
});
