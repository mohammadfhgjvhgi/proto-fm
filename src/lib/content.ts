/**
 * Content barrel — re-exports the split content modules from `src/content/`.
 *
 * All existing `@/lib/content` imports continue to work unchanged.
 * Real content data lives in:
 *   - src/content/types.ts        (Bilingual, Lang re-export)
 *   - src/content/project.ts      (Smart Building deep-dive)
 *   - src/content/proof.ts        (claims, capabilities, recognition, problems)
 *   - src/content/philosophy.ts   (principles, howThink, theWhy, dontDo)
 *   - src/content/trajectory.ts   (trajectory, skillsLearned)
 *   - src/content/academic.ts     (academic, university, goals, marketInsight, additionalProjects)
 *   - src/content/market.ts       (marketAnalysis, knx, mountains, lifePhilosophy)
 *   - src/content/misc.ts         (techStack, channels, gallery, solar, cost, DIP, future)
 */

import type { Lang } from "./translations";

export type { Bilingual } from "../content/types";
export type { Lang } from "../content/types";

export * from "../content/project";
export * from "../content/proof";
export * from "../content/philosophy";
export * from "../content/trajectory";
export * from "../content/academic";
export * from "../content/market";
export * from "../content/misc";

/* ============================================================
   Helper
   ============================================================ */
export function pick<T>(item: { ar: T; en: T }, lang: Lang): T {
  return item[lang];
}
