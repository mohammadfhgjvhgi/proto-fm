/**
 * Market & life-philosophy content — market analysis, KNX cert, ten mountains, life philosophy.
 *
 * Source: كودي.txt + التقرير الفني + وثيقة المشروع الرسمية.
 */

import type { Bilingual } from "./types";

/* ============================================================
   MARKET ANALYSIS — Palestine smart buildings
   ============================================================ */
export const marketAnalysis = {
  companiesInWestBank: { ar: "3-5 شركات فقط في كل الضفة الغربية", en: "Only 3-5 companies in the entire West Bank" },
  companiesLocation: { ar: "كلها في رام الله (وسط الضفة)", en: "All located in Ramallah (central West Bank)" },
  southPresence: { ar: "صفر — لا توجد أي شركة في الخليل أو الجنوب", en: "Zero — no companies in Hebron or the South" },
  reasonableProjectCost: { ar: "400-650 شيكل لمشروع بداية معقول", en: "400-650 NIS for a reasonable starter project" },
  opportunity: {
    ar: "سوق مفتوح تماماً في جنوب الضفة — فرصة ذهبية لمن يعرف المنطقة.",
    en: "A fully open market in the southern West Bank — a golden opportunity for someone who knows the area.",
  },
};

/* ============================================================
   KNX CERTIFICATE — gold standard
   ============================================================ */
export const knxCertificate = {
  name: { ar: "شهادة KNX الدولية", en: "International KNX Certificate" },
  importance: {
    ar: "المعيار الذهبي عالمياً في المباني الذكية — مطلوبة جداً في السوق.",
    en: "The global gold standard in smart buildings — highly demanded in the market.",
  },
  cost: { ar: "930-1500 دولار أمريكي", en: "$930-1500 USD" },
  nearestCenter: { ar: "عمّان (الأردن)", en: "Amman (Jordan)" },
};

/* ============================================================
   10 MOUNTAINS — life journey metaphor
   ============================================================ */
export interface Mountain {
  status: "done" | "current" | "future";
  text: Bilingual;
}

export const tenMountains: Mountain[] = [
  { status: "done", text: { ar: "الأول الثانوي — مكينة لحام + تعليم ذاتي", en: "1st secondary — welding machine + self-learning" } },
  { status: "done", text: { ar: "الحادي عشر — 99% عملي + 100% رسم + مشاريع ريادية", en: "11th grade — 99% practical + 100% drawing + entrepreneurial projects" } },
  { status: "done", text: { ar: "التوجيهي — مشروع «6 مشاريع ببعض»", en: "Tawjihi — the \"6-in-1\" project" } },
  { status: "current", text: { ar: "الامتحانات الوزارية النهائية", en: "Final ministry exams" } },
  { status: "future", text: { ar: "الجامعة + السكن في طولكرم", en: "University + housing in Tulkarem" } },
  { status: "future", text: { ar: "العمل في شركة أتمتة (2-3 سنوات)", en: "Work at an automation company (2-3 years)" } },
  { status: "future", text: { ar: "شهادة KNX الدولية", en: "International KNX certificate" } },
  { status: "future", text: { ar: "تأسيس شركة أتمتة ومبانٍ ذكية", en: "Establish an automation & smart buildings company" } },
  { status: "future", text: { ar: "التوسّع", en: "Expansion" } },
  { status: "future", text: { ar: "الوصول لدخل 5,000-15,000$ شهرياً (بحلول 2035)", en: "Reach $5,000-15,000 monthly income (by 2035)" } },
];

/* ============================================================
   LIFE PHILOSOPHY
   ============================================================ */
export const lifePhilosophy = {
  quote: {
    ar: "كل هدف جبل بتسلقه بلاقي جبل ثاني — والحمد لله اتسلقهم كلهم.",
    en: "Every goal is a mountain you climb only to find another — and thank God I climbed them all.",
  },
  insights: [
    { ar: "وعي ذاتي عالٍ — يعرف أنه خائف (نقطة قوة، لا ضعف).", en: "High self-awareness — knows he's afraid (a strength, not a weakness)." },
    { ar: "إيمان عميق — مصدر القوة الداخلية.", en: "Deep faith — the source of inner strength." },
    { ar: "استراتيجية حياة — تسلّق الجبال واحداً تلو الآخر.", en: "Life strategy — climb the mountains one by one." },
    { ar: "اعتراف بالنجاح — يعرف أنه ينجح.", en: "Acknowledges success — knows he's succeeding." },
  ],
};
