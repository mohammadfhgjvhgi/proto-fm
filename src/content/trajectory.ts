/**
 * Trajectory content — timeline + skills learned.
 *
 * Source: كودي.txt + التقرير الفني + وثيقة المشروع الرسمية.
 */

import type { Bilingual } from "./types";

/* ============================================================
   WHAT I LEARNED — skills acquired 2025-2026 (for public version)
   ============================================================ */
export interface Skill {
  name: string;
  level: "learning" | "working" | "implemented";
  year: string;
}

export const skillsLearned: Skill[] = [
  { name: "Arduino / C++", level: "implemented", year: "2025" },
  { name: "Electronics & Circuits", level: "implemented", year: "2025" },
  { name: "Sensors & Actuators", level: "implemented", year: "2025" },
  { name: "IoT (Internet of Things)", level: "implemented", year: "2026" },
  { name: "ESP8266 / WiFi", level: "implemented", year: "2026" },
  { name: "Firebase Realtime DB", level: "implemented", year: "2026" },
  { name: "Cloud Integration", level: "implemented", year: "2026" },
  { name: "Solar Power Systems", level: "implemented", year: "2026" },
  { name: "Battery Management", level: "working", year: "2026" },
  { name: "Android (Kotlin)", level: "working", year: "2026" },
  { name: "Serial Communication", level: "implemented", year: "2026" },
  { name: "Safety Standards (NFPA/IEC/ISO)", level: "working", year: "2026" },
  { name: "Troubleshooting & Debugging", level: "implemented", year: "2026" },
  { name: "Technical Documentation", level: "implemented", year: "2026" },
  { name: "Project Planning", level: "implemented", year: "2026" },
];

/* ============================================================
   TRAJECTORY — 8 stages from first secondary to future
   ============================================================ */
export interface TimelineEntry {
  year: string;
  stage: Bilingual;
  age: Bilingual;
  items: Bilingual[];
}

export const trajectory: TimelineEntry[] = [
  {
    year: "1st secondary",
    stage: { ar: "البذرة", en: "The seed" },
    age: { ar: "المرحلة الأولى", en: "stage one" },
    items: [
      { ar: "أول مشروع تنفيذي: مكينة لحام — نقطة تحول نفسية.", en: "First executed project: a welding machine — a psychological turning point." },
      { ar: "أول طالب يُسلّم مشروعه في الصف.", en: "First student in class to deliver their project." },
      { ar: "إتقان اللحام الاحترافي — مهارة أساسية ستلازمه لاحقاً.", en: "Mastered professional welding — a foundational skill." },
      { ar: "اكتشاف أن العمل اليدوي هو نقطة القوة الحقيقية.", en: "Discovered that hands-on work is the real strength." },
    ],
  },
  {
    year: "11th grade",
    stage: { ar: "التميز العملي", en: "Practical excellence" },
    age: { ar: "المرحلة الثانية", en: "stage two" },
    items: [
      { ar: "التدريب العملي: 198/200 (99%) — مستوى ثابت سنتين متتاليتين.", en: "Practical training: 198/200 (99%) — consistent over two years." },
      { ar: "الرسم الصناعي: 100/100 — علامة كاملة.", en: "Industrial drawing: 100/100 — a perfect score." },
      { ar: "ريادة الأعمال: 97/100.", en: "Entrepreneurship: 97/100." },
      { ar: "مشروع «بيع وشراء أونلاين» — منصة تجارة إلكترونية متكاملة (98/100).", en: "Project: Online Buy/Sell — integrated e-commerce platform (98/100)." },
      { ar: "مشروع «تقنية الأمن الذكية» — خطة عمل احترافية برأس مال 10,900 شيكل (97/100).", en: "Project: Smart Security Tech — professional business plan, 10,900 NIS capital (97/100)." },
    ],
  },
  {
    year: "Jul 2025",
    stage: { ar: "الشرارة", en: "The spark" },
    age: { ar: "المرحلة الثالثة", en: "stage three" },
    items: [
      { ar: "شراء أول كيت Arduino Uno بعد انتهاء الصف الحادي عشر.", en: "Bought first Arduino Uno kit after 11th grade." },
      { ar: "أغسطس 2025، 5:47 صباحاً: أول سطر كود — «أول لبنة».", en: "August 2025, 5:47 AM: first line of code — \"first brick\"." },
      { ar: "تعلّم ذاتي كامل: يوتيوب + ذكاء اصطناعي، لا معلم خاص ولا دورات مدفوعة.", en: "Fully self-taught: YouTube + AI, no private teacher, no paid courses." },
      { ar: "كل «ما رح تقدر تسويه» كانت وقوداً للإصرار.", en: "Every \"you can't do it\" became fuel for persistence." },
    ],
  },
  {
    year: "Aug 2025 – Jun 2026",
    stage: { ar: "التسلّق", en: "The climb" },
    age: { ar: "10 أشهر تطوير", en: "10 months of development" },
    items: [
      { ar: "10 أشهر تطوير مستمر، 8-18 ساعة عمل يومياً حسب الحالة.", en: "10 months of continuous development, 8-18 work hours/day depending on the day." },
      { ar: "إتقان 13 مكوّناً تقنياً واحداً تلو الآخر: DHT11، Servo، LDR، Flame، RTC، Keypad، LCD، MQ-2، RFID، Tilt، ESP8266، ESP32، Firebase.", en: "Mastered 13 components one by one: DHT11, Servo, LDR, Flame, RTC, Keypad, LCD, MQ-2, RFID, Tilt, ESP8266, ESP32, Firebase." },
      { ar: "تطوير 7 مشاريع تقنية متكاملة خلال الفترة نفسها.", en: "Developed 7 integrated technical projects during the same period." },
      { ar: "مواجهة 8 محن تقنية حرجة وحلّها واحدة تلو الأخرى.", en: "Faced and solved 8 critical technical hardships, one after another." },
    ],
  },
  {
    year: "Jun 2026",
    stage: { ar: "المشروع الرئيسي", en: "The main project" },
    age: { ar: "SBMS", en: "SBMS" },
    items: [
      { ar: "نظام إدارة المباني الذكية بمساعدة الطاقة الاحتياطية — 6 أنظمة في مشروع واحد.", en: "Smart Building Management System with backup energy — 6 systems in one project." },
      { ar: "18 قطعة إلكترونية + شاشة + Keypad + RTC + طاقة شمسية.", en: "18 electronic parts + LCD + Keypad + RTC + solar power." },
      { ar: "3 برامج منفصلة: Arduino Mega + ESP8266 + تطبيق Android (Kotlin).", en: "3 separate programs: Arduino Mega + ESP8266 + Android app (Kotlin)." },
      { ar: "استجابة الحريق < 300ms. تكلفة 750 شيكل. توثيق 25 صفحة + 24 شريحة + 15 ملف مرجعي.", en: "Fire response < 300ms. Cost 750 NIS. Documentation: 25 pages + 24 slides + 15 reference files." },
      { ar: "تقديم أمام لجنة وزارية: «هذا ليس مشروع توجيهي — هذا مشروع جامعة، 6 مشاريع ببعض».", en: "Presented to a ministerial jury: \"This is not a Tawjihi project — it's a university project, 6 projects in one.\"" },
    ],
  },
  {
    year: "Alongside",
    stage: { ar: "المشاريع المساعدة", en: "Helper projects" },
    age: { ar: "5 مشاريع لطلاب وزملاء", en: "5 projects for students & peers" },
    items: [
      { ar: "مصعد السيارات الذكي — ESP8266 + Ultrasonic + Keypad + Servo + 2 Relay.", en: "Smart car elevator — ESP8266 + Ultrasonic + Keypad + Servo + 2 Relay." },
      { ar: "مزرعة الدجاج الذكية v23.0 — Arduino Uno + 4 حساسات + 3 Relays.", en: "Smart chicken farm v23.0 — Arduino Uno + 4 sensors + 3 Relays." },
      { ar: "قاعة الأعراس v18.5 — ESP32 + 2 Servo + DFPlayer Mini + Firebase.", en: "Wedding hall v18.5 — ESP32 + 2 Servo + DFPlayer Mini + Firebase." },
      { ar: "الخزنة الذكية v7.3 — ESP32 + RFID + ميزة Anti-Freeze تمنع تجمد النظام.", en: "Smart safe v7.3 — ESP32 + RFID + Anti-Freeze feature preventing system lockup." },
      { ar: "نظام الكراج الذكي v2.0 — Arduino Mega WiFi + 5 حساسات + 3 Servo + JSON batch.", en: "Smart garage v2.0 — Arduino Mega WiFi + 5 sensors + 3 Servo + JSON batch." },
    ],
  },
  {
    year: "Alongside",
    stage: { ar: "التدريس المجاني", en: "Free teaching" },
    age: { ar: "لوجه الله", en: "for the sake of God" },
    items: [
      { ar: "تدريس نصف طلاب الصف مجاناً في التدريب العملي والنظري والرسم الصناعي.", en: "Taught half the class for free: practical training, theory, and industrial drawing." },
      { ar: "إتقان عميق: لا يمكن تعليم ما لا تفهمه 100%.", en: "Deep mastery: you can't teach what you don't understand 100%." },
      { ar: "قدرة على توصيل المعلومة المعقدة ببساطة.", en: "Ability to convey complex ideas simply." },
      { ar: "نزاهة شخصية: مساعدة مجانية في وقت كان ضغط التوجيهي على أشده.", en: "Personal integrity: free help at the peak of Tawjihi pressure." },
    ],
  },
  {
    year: "Future",
    stage: { ar: "التطلعات", en: "Aspirations" },
    age: { ar: "الجبال العشرة", en: "the ten mountains" },
    items: [
      { ar: "جامعة فلسطين التقنية - خضوري (طولكرم): دبلوم الأتمتة الصناعية، مسار تكاملي (78 ساعة معتمدة).", en: "Palestine Technical University - Khadouri (Tulkarem): Industrial Automation diploma, integrated track (78 credit hours)." },
      { ar: "شهادة KNX الدولية (معيار الذهب في المباني الذكية) — مخطط لها مستقبلاً.", en: "International KNX certificate (the gold standard in smart buildings) — planned for the future." },
      { ar: "تأسيس شركة أتمتة ومبانٍ ذكية في جنوب الضفة (سوق مفتوح بدون منافسة).", en: "Establishing an automation & smart buildings company in the southern West Bank (an open market with no competition)." },
      { ar: "الفلسفة: «كل هدف جبل بتسلقه بلاقي جبل ثاني — والحمد لله اتسلقهم كلهم».", en: "Philosophy: \"Every goal is a mountain you climb only to find another — and thank God I climbed them all.\"" },
    ],
  },
];
