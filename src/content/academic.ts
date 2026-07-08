/**
 * Academic content — Tawjihi subjects, university plan, professional goals, market insight.
 *
 * Source: كودي.txt + التقرير الفني + وثيقة المشروع الرسمية.
 */

import type { Bilingual } from "./types";

/* ============================================================
   ACADEMIC ACHIEVEMENTS — Tawjihi vocational track (no names)
   ============================================================ */
export interface AcademicSubject {
  name: Bilingual;
  type: Bilingual;
  maxScore: number;
  expectedScore: number;
}

export const academicSubjects: AcademicSubject[] = [
  {
    name: { ar: "التدريب العملي", en: "Practical Training" },
    type: { ar: "وزاري", en: "Ministerial" },
    maxScore: 200,
    expectedScore: 197,
  },
  {
    name: { ar: "الرسم الصناعي", en: "Industrial Drawing" },
    type: { ar: "وزاري", en: "Ministerial" },
    maxScore: 100,
    expectedScore: 94,
  },
  {
    name: { ar: "علم الصناعة", en: "Industry Science" },
    type: { ar: "وزاري", en: "Ministerial" },
    maxScore: 100,
    expectedScore: 89,
  },
  {
    name: { ar: "المشروع", en: "Project" },
    type: { ar: "داخلي", en: "Internal" },
    maxScore: 100,
    expectedScore: 92,
  },
];

export const academicSummary = {
  track: {
    ar: "مسار الكفاءة المهنية (4 مواد مهنية فقط)",
    en: "Vocational Proficiency track (4 vocational subjects only)",
  },
  calculation: {
    ar: "مجموع العلامات ÷ 5 (من 500)، ليس ÷ 800 أو ÷ 1000",
    en: "Sum of grades ÷ 5 (out of 500), not ÷ 800 or ÷ 1000",
  },
  expectedAverage: { ar: "94.5%", en: "94.5%" },
  totalScore: { ar: "472.5 من 500", en: "472.5 out of 500" },
  strongest: {
    ar: "التدريب العملي 197/200 (98.5%)",
    en: "Practical Training 197/200 (98.5%)",
  },
};

/* ============================================================
   UNIVERSITY PLAN + PROFESSIONAL GOALS (no personal info)
   ============================================================ */
export const universityPlan = {
  university: {
    ar: "جامعة فلسطين التقنية - خضوري (طولكرم)",
    en: "Palestine Technical University - Khadouri (Tulkarm)",
  },
  program: {
    ar: "دبلوم الأتمتة الصناعية - مسار تكاملي",
    en: "Industrial Automation Diploma - Integrated track",
  },
  creditHours: { ar: "78 ساعة معتمدة", en: "78 credit hours" },
  acceptanceThreshold: { ar: "50%", en: "50%" },
  whyKhadouri: {
    ar: "أقوى في تخصص الأتمتة الصناعية، والمسار التكاملي يحل مشكلة منع التجسير (القانون رقم 2 لسنة 2024) بجمع الدبلوم والبكالوريوس في مسار واحد.",
    en: "Stronger in Industrial Automation, and the integrated track solves the no-bridging issue (Law #2 of 2024) by combining diploma and bachelor's in one track.",
  },
};

export const professionalGoals = [
  {
    title: { ar: "شهادة KNX الدولية", en: "International KNX Certification" },
    desc: {
      ar: "المعيار الذهبي عالميًا في المباني الذكية. تكلفة التدريب 930-1500$ وأقرب مركز في عمّان.",
      en: "The global gold standard in smart buildings. Training costs $930-1500, nearest center in Amman.",
    },
    timeline: { ar: "بعد الجامعة", en: "Post-university" },
  },
  {
    title: { ar: "بداية عملية بكاميرات المراقبة", en: "Practical start with surveillance cameras" },
    desc: {
      ar: "حوالي 70 شيكل للكاميرا — مدخل عملي لسوق المباني الذكية قبل الأتمتة الكاملة.",
      en: "About 70 NIS per camera — a practical entry into the smart-buildings market before full automation.",
    },
    timeline: { ar: "أثناء الدراسة", en: "During studies" },
  },
  {
    title: { ar: "شركة أتمتة ومبانٍ ذكية", en: "Automation & smart-building company" },
    desc: {
      ar: "هدف بعيد المدى — تأسيس شركة في منطقة لا توجد فيها أي منافسة متخصصة.",
      en: "Long-term goal — founding a company in a region with zero specialized competition.",
    },
    timeline: { ar: "هدف طويل المدى", en: "Long-term goal" },
  },
];

export const marketInsight = {
  title: { ar: "تحليل السوق الفلسطيني", en: "Palestinian market analysis" },
  stats: [
    { value: "3-5", label: { ar: "شركات متخصصة في كل الضفة الغربية", en: "specialized companies in all West Bank" } },
    { value: "0", label: { ar: "شركات في جنوب الضفة (الخليل/بيت لحم/دورا)", en: "companies in south West Bank (Hebron/Bethlehem/Dura)" } },
    { value: "400-650 ₪", label: { ar: "تكلفة معقولة لمشروع بداية", en: "reasonable cost for a starter project" } },
  ],
  conclusion: {
    ar: "سوق مفتوح تمامًا في الجنوب — فرصة ذهبية لمن يعرف المنطقة ويبني قاعدة عملاء.",
    en: "A completely open market in the south — a golden opportunity for someone who knows the region and builds a client base.",
  },
};

/* ============================================================
   ADDITIONAL PROJECTS — built before/during SBMS (portfolio depth)
   Each is a real, documented build with verified components.
   ============================================================ */
export interface MiniProject {
  id: string;
  slug: string;
  title: Bilingual;
  shortTitle: Bilingual;
  microcontroller: string;
  year: string;
  duration: Bilingual;
  status: Bilingual;
  desc: Bilingual;
  components: string[];
  highlights: Bilingual[];
}

export const additionalProjects: MiniProject[] = [
  {
    id: "car-elevator",
    slug: "car-elevator",
    title: {
      ar: "مصعد السيارات الذكي",
      en: "Smart Car Elevator",
    },
    shortTitle: {
      ar: "مصعد السيارات",
      en: "Car Elevator",
    },
    microcontroller: "ESP8266",
    year: "2025",
    duration: { ar: "مشروع تطبيقي", en: "Applied project" },
    status: { ar: "منفّذ", en: "Completed" },
    desc: {
      ar: "نظام مصعد أوتوماتيكي لصف السيارات بتحكم ذكي. عند دخول الشخص (Ultrasonic يكشف) يفتح السيرفو الباب تلقائيًا، وبعد الخروج ينتظر 3 ثوانٍ ثم يُغلق. لوحة المفاتيح تختار الطابق (4 ثوانٍ للوصول). يستخدم مؤقتات non-blocking على millis() — نمط برمجي متقدم يتجنّب تجميد النظام بـ delay().",
      en: "An automatic parking elevator system with smart control. On entry (Ultrasonic detects) the servo opens the door automatically; after exit it waits 3s then closes. The keypad selects the floor (4s to reach). Uses non-blocking millis()-based timers — an advanced pattern that avoids freezing the system with delay().",
    },
    components: ["ESP8266", "Servo Motor", "Keypad 4×4", "Ultrasonic HC-SR04", "Relay", "Buzzer"],
    highlights: [
      { ar: "تحكم ذكي بالأبواب عبر Ultrasonic", en: "Smart door control via Ultrasonic" },
      { ar: "مؤقتات non-blocking على millis() (لا delay)", en: "Non-blocking millis() timers (no delay)" },
      { ar: "WiFi مدمج للتحكم عن بُعد", en: "Built-in WiFi for remote control" },
    ],
  },
  {
    id: "smart-wedding-hall",
    slug: "smart-wedding-hall",
    title: {
      ar: "قاعة الأعراس الذكية",
      en: "Smart Wedding Hall",
    },
    shortTitle: {
      ar: "قاعة الأعراس",
      en: "Wedding Hall",
    },
    microcontroller: "ESP32 v18.5",
    year: "2025-2026",
    duration: { ar: "مشروع تجاري قابل للتسويق", en: "Marketable commercial project" },
    status: { ar: "منفّذ", en: "Completed" },
    desc: {
      ar: "أتمتة كاملة لقاعة أعراس: إضاءة، صوت، وتكييف ذكي. أقوى المتحكمات (ESP32 v18.5) يجمع WiFi + Bluetooth. يعمل بنمط Local-First — ينفّذ كل شيء محليًا ويتزامن مع Firebase كل 400ms، ويستمر بدون WiFi. 14 مكوّنًا متكاملًا في نظام واحد.",
      en: "Full wedding-hall automation: lighting, sound, and smart HVAC. The most powerful MCU (ESP32 v18.5) combines WiFi + Bluetooth. Runs in Local-First mode — executes everything locally and syncs with Firebase every 400ms, keeps working without WiFi. 14 integrated components in one system.",
    },
    components: ["ESP32", "2× Relay", "2× Servo", "2× Ultrasonic", "IR Sensor", "Button", "DFPlayer Mini", "Speaker"],
    highlights: [
      { ar: "Local-First: يعمل بدون WiFi", en: "Local-First: works without WiFi" },
      { ar: "مزامنة Firebase كل 400ms", en: "Firebase sync every 400ms" },
      { ar: "14 مكوّنًا متكاملًا", en: "14 integrated components" },
      { ar: "WiFi + Bluetooth معًا", en: "WiFi + Bluetooth combined" },
    ],
  },
  {
    id: "smart-chicken-farm",
    slug: "smart-chicken-farm",
    title: {
      ar: "مزرعة الدجاج الذكية",
      en: "Smart Chicken Farm",
    },
    shortTitle: {
      ar: "مزرعة الدجاج",
      en: "Chicken Farm",
    },
    microcontroller: "Arduino Uno",
    year: "2025",
    duration: { ar: "مشروع قطاع زراعي", en: "Agricultural sector project" },
    status: { ar: "منفّذ", en: "Completed" },
    desc: {
      ar: "أتمتة مزرعة دجاج: حرارة، تهوية، إضاءة، وتغذية. المروحة تعمل 40 ثانية عند وصول الحرارة 27°م (من DHT11) ثم تنتظر فترة تهدئة. مضخة الماء تعمل حسب رطوبة التربة. حساس Ultrasonic يقيس مستوى العلف. كل القيم تُعرض وتُتحكَم تلقائيًا.",
      en: "Chicken-farm automation: temperature, ventilation, lighting, and feeding. The fan runs 40s when temperature reaches 27°C (from DHT11) then waits a cooldown. The water pump runs based on soil moisture. An Ultrasonic sensor measures feed level. All values are displayed and auto-controlled.",
    },
    components: ["Arduino Uno", "DHT11", "LDR", "Soil moisture sensor", "Ultrasonic", "Fans", "Water pump", "Buzzer"],
    highlights: [
      { ar: "تحكم بالحرارة مع فترة تهدئة", en: "Temperature control with cooldown" },
      { ar: "مراقبة مستوى العلف بـ Ultrasonic", en: "Feed-level monitoring via Ultrasonic" },
      { ar: "ري تلقائي حسب رطوبة التربة", en: "Auto-irrigation based on soil moisture" },
    ],
  },
];
