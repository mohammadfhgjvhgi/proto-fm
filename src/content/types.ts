/**
 * Shared content types.
 *
 * `Bilingual` is defined here and re-used by every content module.
 * `Lang` is re-exported from `../lib/translations` so callers can keep a
 * single import path.
 */

export type Bilingual = { ar: string; en: string };

export type { Lang } from "../lib/translations";
