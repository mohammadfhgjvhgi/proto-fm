import { describe, it, expect, beforeEach } from "vitest";
import { useLanguageStore } from "./store";

describe("useLanguageStore", () => {
  beforeEach(() => {
    // Reset store between tests
    useLanguageStore.setState({ lang: "ar" });
    localStorage.clear();
  });

  it("defaults to Arabic", () => {
    expect(useLanguageStore.getState().lang).toBe("ar");
  });

  it("setLang changes language to English", () => {
    useLanguageStore.getState().setLang("en");
    expect(useLanguageStore.getState().lang).toBe("en");
  });

  it("toggle switches ar → en", () => {
    useLanguageStore.getState().toggle();
    expect(useLanguageStore.getState().lang).toBe("en");
  });

  it("toggle switches en → ar", () => {
    useLanguageStore.getState().setLang("en");
    useLanguageStore.getState().toggle();
    expect(useLanguageStore.getState().lang).toBe("ar");
  });

  it("setLang changes language to Arabic", () => {
    useLanguageStore.getState().setLang("en");
    useLanguageStore.getState().setLang("ar");
    expect(useLanguageStore.getState().lang).toBe("ar");
  });
});
