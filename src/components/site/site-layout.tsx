"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

/**
 * SiteLayout — shared shell for every page.
 * Sticky footer: root wrapper min-h-screen flex flex-col;
 * main flex-1; footer uses mt-auto.
 */
export function SiteLayout({ children }: { children: React.ReactNode }) {
  useScrollReveal();
  return (
    <div className="relative flex min-h-screen flex-col">
      <a href="#main" className="skip-link">
        تخطّى إلى المحتوى / Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
