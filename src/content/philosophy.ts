/**
 * Engineering philosophy content — principles, how I think, the why, don'ts.
 *
 * Source: كودي.txt + التقرير الفني + وثيقة المشروع الرسمية.
 */

import type { Bilingual } from "./types";

/* ============================================================
   ENGINEERING PHILOSOPHY
   ============================================================ */
export interface Principle {
  rule: Bilingual;
  example: Bilingual;
}

export const principles: Principle[] = [
  {
    rule: {
      ar: "الحريق يفتح الأبواب، والعبث يُغلقها — لا العكس.",
      en: "Fire opens doors, tamper closes them — never the reverse.",
    },
    example: {
      ar: "تعديل كود قديم كان يُغلق الباب عند الحريق؛ الصحيح فتحه للإخلاء وفق NFPA 101.",
      en: "Fixed legacy code that closed the door on fire; correct is to open for evacuation per NFPA 101.",
    },
  },
  {
    rule: {
      ar: "كل إنذار يجب أن يمر بفلترة برمجية قبل التفعيل.",
      en: "Every alarm must pass a software filter before activation.",
    },
    example: {
      ar: "حساس الميل SW-520D يفعّل الإنذار بعد 3 قراءات متتالية لتقليل الإنذارات الكاذبة.",
      en: "Tilt SW-520D triggers only after 3 consecutive readings to reduce false alarms.",
    },
  },
  {
    rule: {
      ar: "GND مشترك بين كل اللوحات — أساسي للتواصل، ليس خيارًا.",
      en: "Common GND across all boards — essential, not optional.",
    },
    example: {
      ar: "Mega و ESP8266 يتواصلان عبر Serial1 فقط بأرضي موحّد، وإلا تظهر بيانات مشفّرة.",
      en: "Mega and ESP8266 talk over Serial1 only with shared GND, else garbled data.",
    },
  },
  {
    rule: {
      ar: "عند الحريق: إضاءة طوارئ + باب مفتوح + إنذار — كلها معًا.",
      en: "On fire: emergency lighting + open door + alarm — all together.",
    },
    example: {
      ar: "دالة controlOutputs() تشغّل الإضاءة + تفتح السيرفو + تشغّل الجرس في نفس القرار.",
      en: "controlOutputs() turns on lighting + opens servo + triggers buzzer in one decision.",
    },
  },
  {
    rule: {
      ar: "لا أُسلّم نظامًا قبل اختبار كل سيناريو طوارئ على حدة.",
      en: "I don't ship before testing every emergency scenario individually.",
    },
    example: {
      ar: "10 سيناريوهات اختبار موثّقة (حريق، عبث، كلمة سر، WiFi، إعادة تشغيل…) قبل العرض.",
      en: "10 documented test scenarios (fire, tamper, password, WiFi, reboot…) before presentation.",
    },
  },
  {
    rule: {
      ar: "التوثيق الفوري يوفّر ساعات التصحيح لاحقًا.",
      en: "Immediate documentation saves hours of debugging later.",
    },
    example: {
      ar: "جدول 20 مشكلة وحلها موثّق أثناء التطوير، لا بعده.",
      en: "A table of 20 issues and fixes documented during development, not after.",
    },
  },
];

export interface HowThink {
  title: Bilingual;
  body: Bilingual;
}

export const howThink: HowThink[] = [
  {
    title: { ar: "كيف أبدأ مشروعًا", en: "How I start a project" },
    body: {
      ar: "فكرة → قيود (ميزانية/وقت/مكوّنات) → مخطط Block Diagram → شراء القطع. بدأت التخطيط قبل المدرسة بشهرين.",
      en: "Idea → constraints (budget/time/parts) → Block Diagram → buy parts. I started planning two months before school.",
    },
  },
  {
    title: { ar: "كيف أتخذ قرارًا تقنيًا", en: "How I make a technical decision" },
    body: {
      ar: "اخترت Arduino Mega WiFi R3 لأنها تدمج ATmega2560 + ESP8266 في لوحة واحدة — 54 طرف رقمي + WiFi بدون قطع إضافية.",
      en: "I chose Arduino Mega WiFi R3 because it integrates ATmega2560 + ESP8266 in one board — 54 digital pins + WiFi without extra parts.",
    },
  },
  {
    title: { ar: "كيف أُختبر", en: "How I test" },
    body: {
      ar: "فحص فردي لكل قطعة قبل الدمج، ثم سيناريوهات واقعية (10 سيناريوهات موثّقة)، ثم اختبار الحمل والطاقة.",
      en: "Individual test of each part before integration, then real scenarios (10 documented), then load/power testing.",
    },
  },
  {
    title: { ar: "كيف أوثّق", en: "How I document" },
    body: {
      ar: "أرسم مخطط توصيل مسبق، ألوّن الأسلاك حسب الوظيفة، وأسجّل كل تعديل فورًا في جدول المشاكل والحلول.",
      en: "I pre-draw a wiring diagram, color-code wires by function, and log every change immediately in an issues table.",
    },
  },
  {
    title: { ar: "كيف أتعامل مع الفشل", en: "How I handle failure" },
    body: {
      ar: "تشخيص تدريجي: تشغيل كل قطعة منفردة، استخدام Serial Monitor للتتبّع، وتوثيق السبب والحل قبل الانتقال.",
      en: "Gradual diagnosis: run each part alone, use Serial Monitor to trace, document cause+fix before moving on.",
    },
  },
];

export interface TheWhy {
  question: Bilingual;
  answer: Bilingual;
}

export const theWhy: TheWhy[] = [
  {
    question: { ar: "لماذا Arduino Mega WiFi R3؟", en: "Why Arduino Mega WiFi R3?" },
    answer: {
      ar: "تدمج ATmega2560 (54 رقمي + 16 تناظري) مع ESP8266 في لوحة واحدة، فلا أحتاج لوحتين منفصلتين ولا أسلاك تواصل بينهما.",
      en: "Integrates ATmega2560 (54 digital + 16 analog) with ESP8266 on one board — no need for two separate boards or inter-board wiring.",
    },
  },
  {
    question: { ar: "لماذا Serial1 بين Mega و ESP؟", en: "Why Serial1 between Mega and ESP?" },
    answer: {
      ar: "لوحة Mega WiFi R3 مصمّمة ليتواصل المعالجان داخليًا عبر Serial1 (الدبابيس 18/19 = TX1/RX1) بسرعة 9600 baud، وأتحكم بالمسار عبر DIP Switches (1,2 ON للتشغيل).",
      en: "The Mega WiFi R3 board is designed for internal Mega↔ESP communication over Serial1 (pins 18/19 = TX1/RX1) at 9600 baud, controlled via DIP switches (1,2 ON for run mode).",
    },
  },
  {
    question: { ar: "لماذا Firebase Realtime DB؟", en: "Why Firebase Realtime DB?" },
    answer: {
      ar: "مزامنة لحظية بدون إدارة خادم، SDK ناضج لـ ESP8266 (Firebase_ESP_Client)، وتكلفة صفر للمشاريع التعليمية. العيب: قفل المزوّد — قَبلته لأن أولوية المشروع إثبات النظام.",
      en: "Real-time sync with no server ops, mature SDK for ESP8266 (Firebase_ESP_Client), zero cost for educational projects. Trade-off: vendor lock-in — accepted because the priority was proving the system.",
    },
  },
  {
    question: { ar: "لماذا Tilt SW-520D لا PIR للعبث؟", en: "Why Tilt SW-520D, not PIR, for tamper?" },
    answer: {
      ar: "PIR يكشف الحركة، أما الميل (SW-520D) يكشف محاولة تحريك أو هز النظام نفسه — حدث مختلف. استخدمت الاثنين: IR للحركة وTilt للعبث.",
      en: "PIR detects motion; tilt (SW-520D) detects attempts to move or shake the system itself — a different event. I used both: IR for motion, Tilt for tamper.",
    },
  },
  {
    question: { ar: "لماذا تطبيق أندرويد بالتعاون؟", en: "Why an Android app in collaboration?" },
    answer: {
      ar: "تخصصي المباشرة هو المباني الذكية (Hardware + Firmware + Cloud). تطوير تطبيق احترافي بـ Kotlin/Android Studio تطلب تخصص تطبيقات الهواتف الذكية، فتعاونت مع مطور من التخصص.",
      en: "My direct specialty is smart buildings (Hardware + Firmware + Cloud). Building a professional Kotlin/Android Studio app required the mobile-apps specialty, so I collaborated with a developer from that track.",
    },
  },
];

export const dontDo: { text: Bilingual }[] = [
  { text: { ar: "لا أَعِد بميزة لم أُختبرها.", en: "I don't promise a feature I haven't tested." } },
  { text: { ar: "لا أستخدم مكتبة لا أفهمها.", en: "I don't use a library I don't understand." } },
  { text: { ar: "لا أُسلّم كودًا بدون توثيق.", en: "I don't ship code without documentation." } },
  { text: { ar: "لا أُضيف تعقيدًا بلا سبب.", en: "I don't add complexity without a reason." } },
  { text: { ar: "لا أخترع أرقامًا أو إنجازات.", en: "I don't invent numbers or achievements." } },
  { text: { ar: "لا أتجاوز معايير السلامة (NFPA/IEC/ISO).", en: "I don't bypass safety standards (NFPA/IEC/ISO)." } },
];
