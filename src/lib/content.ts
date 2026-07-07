/**
 * Structured content — REAL project data from Mohammed's actual files.
 * Source: كودي.txt + التقرير الفني + وثيقة المشروع الرسمية.
 * Bilingual (ar/en). No seating number anywhere.
 */

import type { Lang } from "./translations";

type Bilingual = { ar: string; en: string };

/* ============================================================
   PROJECT META — Smart Building Management System
   ============================================================ */
export const featuredProject = {
  id: "smart-building",
  title: {
    ar: "نظام إدارة المباني الذكية بمساعدة الطاقة الاحتياطية",
    en: "Smart Building Management System Using Backup Energy",
  },
  shortTitle: {
    ar: "نظام إدارة المباني الذكية",
    en: "Smart Building Management System",
  },
  year: "2025-2026",
  duration: { ar: "8 أشهر تطوير متواصل", en: "8 months of continuous development" },
  status: { ar: "مكتمل — مُقدَّم للجنة التحكيم", en: "Completed — presented to jury" },
  student: { ar: "محمد عادل العقيلي", en: "Mohammed Adil Alakaly" },
  school: {
    ar: "مدرسة ذكور دورا الثانوية المهنية — جنوب الخليل، فلسطين",
    en: "Dura Boys Vocational Secondary School — South Hebron, Palestine",
  },
  supervisor: { ar: "المهندس عمر عبد الحليم التلاحمة", en: "Eng. Omar Abdul-Halim Al-Talahmeh" },
  certificate: {
    ar: "شهادة الكفاءة المهنية 2025/2026",
    en: "Vocational Proficiency Certificate 2025/2026",
  },
  totalCost: { ar: "750 شيكل", en: "750 NIS" },
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
   CLAIMS MAP — every claim → evidence → verification (REAL)
   ============================================================ */
export interface Claim {
  claim: Bilingual;
  evidence: Bilingual;
  verification: Bilingual;
}

export const claims: Claim[] = [
  {
    claim: { ar: "كشف الحريق تلقائيًا", en: "Automatic fire detection" },
    evidence: {
      ar: "حساس Flame Sensor (D8/A1) + كود معالجة إنذار",
      en: "Flame Sensor (D8/A1) + alarm handling code",
    },
    verification: { ar: "استجابة ~200ms — اختبار موثّق", en: "~200ms response — documented test" },
  },
  {
    claim: { ar: "كشف العبث والاهتزاز", en: "Tamper/vibration detection" },
    evidence: {
      ar: "حساس Tilt SW-520D (A2) + فلترة 3 قراءات متتالية",
      en: "Tilt SW-520D (A2) + 3-reading filter",
    },
    verification: { ar: "استجابة ~300ms — اختبار موثّق", en: "~300ms response — documented test" },
  },
  {
    claim: { ar: "باب ذكي بكلمة مرور", en: "Smart door with password" },
    evidence: {
      ar: "Keypad 4×3 + Servo SG90 + كلمة مرور REDACTED",
      en: "4×3 Keypad + SG90 Servo + password REDACTED",
    },
    verification: { ar: "فتح 10 ثواني ثم إغلاق تلقائي", en: "10s open then auto-close" },
  },
  {
    claim: { ar: "إضاءة ذكية تلقائية", en: "Automatic smart lighting" },
    evidence: {
      ar: "حساس LDR (A4) + Relay (D6) + تحكم يدوي من التطبيق",
      en: "LDR sensor (A4) + Relay (D6) + manual app control",
    },
    verification: { ar: "عتبة 400 + تجاوز يدوي 5 ثوانٍ", en: "Threshold 400 + 5s manual override" },
  },
  {
    claim: { ar: "مراقبة بيئية لحظية", en: "Real-time environmental monitoring" },
    evidence: {
      ar: "DHT11 (D2) + RTC DS3231 + LCD 16×2 I2C",
      en: "DHT11 (D2) + RTC DS3231 + LCD 16×2 I2C",
    },
    verification: { ar: "حرارة ±2°C + رطوبة ±5%", en: "Temp ±2°C + humidity ±5%" },
  },
  {
    claim: { ar: "تحكم عن بُعد كامل", en: "Full remote control" },
    evidence: {
      ar: "ESP8266 مدمج + Firebase RTDB + تطبيق أندرويد Kotlin",
      en: "Embedded ESP8266 + Firebase RTDB + Kotlin Android app",
    },
    verification: { ar: "استقرار WiFi 98% + Firebase 97%", en: "WiFi 98% + Firebase 97% stability" },
  },
];

/* ============================================================
   CAPABILITIES MATRIX
   ============================================================ */
export interface Capability {
  capability: Bilingual;
  depth: "implemented" | "working" | "learning";
  evidence: Bilingual;
}

export const capabilities: Capability[] = [
  {
    capability: { ar: "Building Automation", en: "Building Automation" },
    depth: "implemented",
    evidence: { ar: "/projects/smart-building", en: "/projects/smart-building" },
  },
  {
    capability: { ar: "IoT Integration", en: "IoT Integration" },
    depth: "implemented",
    evidence: { ar: "/projects/smart-building", en: "/projects/smart-building" },
  },
  {
    capability: { ar: "Energy Management", en: "Energy Management" },
    depth: "implemented",
    evidence: { ar: "/projects/smart-building", en: "/projects/smart-building" },
  },
  {
    capability: { ar: "Security Systems", en: "Security Systems" },
    depth: "implemented",
    evidence: { ar: "/projects/smart-building", en: "/projects/smart-building" },
  },
  {
    capability: { ar: "Cloud (Firebase)", en: "Cloud (Firebase)" },
    depth: "implemented",
    evidence: { ar: "/projects/smart-building", en: "/projects/smart-building" },
  },
  {
    capability: { ar: "Android Development", en: "Android Development" },
    depth: "implemented",
    evidence: { ar: "بالتعاون مع مطور", en: "in collaboration" },
  },
];

/* ============================================================
   ENGINEERING RECOGNITION — real jury + supervisor + standards
   ============================================================ */
export const recognition = {
  context: {
    ar: "قُدّم المشروع أمام لجنة تحكيم التوجيهي المهني بمدرسة ذكور دورا الثانوية المهنية، جنوب الخليل، فلسطين، للسنة الدراسية 2025/2026، للحصول على شهادة الكفاءة المهنية.",
    en: "The project was presented to the vocational Tawjihi jury at Dura Boys Vocational Secondary School, South Hebron, Palestine, for the 2025/2026 academic year, for the Vocational Proficiency Certificate.",
  },
  result: {
    ar: "قيّمت اللجنة المشروع بأنه بمستوى مشاريع الجامعة، وأنه يدمج 6 أنظمة في مشروع واحد.",
    en: "The jury rated the project as university-level, integrating 6 systems in one project.",
  },
  quote: {
    ar: "قيّمت اللجنة المشروع بأنه بمستوى مشاريع الجامعة، وبأنه يدمج 6 أنظمة في مشروع واحد.",
    en: "The jury rated the project as university-level, noting that it integrates 6 systems in one project.",
  },
  attribution: { ar: "لجنة تحكيم التوجيهي المهني — 2026", en: "Vocational Tawjihi jury — 2026" },
  supervisor: {
    ar: "إشراف المهندس عمر عبد الحليم التلاحمة",
    en: "Supervised by Eng. Omar Abdul-Halim Al-Talahmeh",
  },
  standards: [
    { code: "NFPA 101", desc: { ar: "فتح الأبواب تلقائيًا عند الحريق للإخلاء", en: "Auto-open doors on fire for evacuation" } },
    { code: "IEC 60364-5-56", desc: { ar: "تشغيل إضاءة الطوارئ عند الحريق", en: "Emergency lighting on fire" } },
    { code: "ISO 27001", desc: { ar: "إغلاق الأبواب عند كشف العبث/الاقتحام", en: "Close doors on tamper/intrusion" } },
  ],
};

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

/* ============================================================
   PROJECT DEEP-DIVE — 9 sections (real data)
   ============================================================ */
export interface ProjectSection {
  id: string;
  number: string;
  title: Bilingual;
}

export const projectSections: ProjectSection[] = [
  { id: "problem", number: "01", title: { ar: "المشكلة", en: "Problem" } },
  { id: "constraints", number: "02", title: { ar: "القيود", en: "Constraints" } },
  { id: "architecture", number: "03", title: { ar: "عمارة النظام", en: "System architecture" } },
  { id: "components", number: "04", title: { ar: "قائمة المكوّنات", en: "Component list" } },
  { id: "implementation", number: "05", title: { ar: "التنفيذ", en: "Implementation" } },
  { id: "testing", number: "06", title: { ar: "بروتوكول الاختبار", en: "Testing protocol" } },
  { id: "results", number: "07", title: { ar: "النتائج", en: "Results" } },
  { id: "lessons", number: "08", title: { ar: "الدروس المستفادة", en: "Lessons learned" } },
  { id: "verification", number: "09", title: { ar: "التحقق", en: "Verification" } },
];

export const projectProblem = {
  text: {
    ar: "المباني التقليدية تعاني من: غياب أنظمة مراقبة ذكية تُحذّر من الحرائق والاقتحام، اعتماد كلي على الشبكة الكهربائية التي تنقطع، عدم قدرة على التحكم عن بُعد، واستهلاك عالٍ للطاقة. الهدف: نظام واحد يدمج الأمان والإضاءة والتحكم والطاقة المستدامة.",
    en: "Traditional buildings lack: smart monitoring that warns of fires and intrusions, full dependence on a grid that fails, no remote control, and high energy use. Goal: one system integrating security, lighting, control, and sustainable energy.",
  },
};

export const projectConstraints: { text: Bilingual }[] = [
  { text: { ar: "ميزانية محدودة: 750 شيقل إجمالي.", en: "Limited budget: 750 NIS total." } },
  { text: { ar: "وقت تطوير: 8 أشهر خلال السنة الدراسية.", en: "Development time: 8 months during the school year." } },
  { text: { ar: "متطلبات لجنة التحكيم: نظام موثّق قابل للعرض.", en: "Jury requirements: a documented, presentable system." } },
  { text: { ar: "توفر المكوّنات محليًا فقط (فلسطين).", en: "Components available locally only (Palestine)." } },
  { text: { ar: "استهلاك طاقة منخفض لدعم الطاقة الشمسية (~500mA).", en: "Low power draw to support solar (~500mA)." } },
  { text: { ar: "معايير سلامة: NFPA 101 + IEC 60364 + ISO 27001.", en: "Safety standards: NFPA 101 + IEC 60364 + ISO 27001." } },
];

export interface ArchLayer {
  layer: Bilingual;
  content: Bilingual;
}

export const projectArchitecture: ArchLayer[] = [
  {
    layer: { ar: "Input Layer", en: "Input Layer" },
    content: {
      ar: "Flame (D8/A1)، Tilt SW-520D (A2)، LDR (A4)، DHT11 (D2)، IR (D10)، Keypad، Reset Button.",
      en: "Flame (D8/A1), Tilt SW-520D (A2), LDR (A4), DHT11 (D2), IR (D10), Keypad, Reset Button.",
    },
  },
  {
    layer: { ar: "Processing", en: "Processing" },
    content: { ar: "Arduino Mega WiFi R3 (ATmega2560 + ESP8266 مدمج).", en: "Arduino Mega WiFi R3 (ATmega2560 + embedded ESP8266)." },
  },
  {
    layer: { ar: "Internal Comm", en: "Internal Comm" },
    content: { ar: "Serial1 @ 9600 baud بين Mega و ESP8266 (DIP 1,2 ON).", en: "Serial1 @ 9600 baud between Mega and ESP8266 (DIP 1,2 ON)." },
  },
  {
    layer: { ar: "Cloud", en: "Cloud" },
    content: { ar: "Firebase Realtime Database — smarthomecontrol-61051.", en: "Firebase Realtime Database — smarthomecontrol-61051." },
  },
  {
    layer: { ar: "Output Layer", en: "Output Layer" },
    content: {
      ar: "Servo SG90 (D9)، Relay (D6)، 3 Buzzers (D28/D12/D3)، 4 LEDs، LCD 16×2 I2C.",
      en: "Servo SG90 (D9), Relay (D6), 3 Buzzers (D28/D12/D3), 4 LEDs, LCD 16×2 I2C.",
    },
  },
  {
    layer: { ar: "Power", en: "Power" },
    content: {
      ar: "لوح شمسي 10W (5V/2A) + بطارية ليثيوم 9800mAh (49Wh) + شاحن + محول خافض 12V→5V.",
      en: "10W solar panel (5V/2A) + 9800mAh lithium battery (49Wh) + charger + 12V→5V buck converter.",
    },
  },
  {
    layer: { ar: "Client", en: "Client" },
    content: { ar: "تطبيق أندرويد (Kotlin) — بالتعاون مع مطور.", en: "Android app (Kotlin) — in collaboration." },
  },
];

export interface Component {
  component: Bilingual;
  model: string;
  qty: string;
  pin: string;
  why: Bilingual;
}

export const projectComponents: Component[] = [
  { component: { ar: "اللوحة الرئيسية", en: "Main board" }, model: "Arduino Mega WiFi R3", qty: "1", pin: "—", why: { ar: "ATmega2560 + ESP8266 مدمج، 54 رقمي + 16 تناظري.", en: "ATmega2560 + embedded ESP8266, 54 digital + 16 analog." } },
  { component: { ar: "حساس اللهب", en: "Flame sensor" }, model: "Flame Sensor", qty: "1", pin: "D8, A1", why: { ar: "كشف الأشعة تحت الحمراء 760-1100nm.", en: "Detects IR 760-1100nm." } },
  { component: { ar: "حساس الميل", en: "Tilt sensor" }, model: "SW-520D", qty: "1", pin: "A2", why: { ar: "كشف الاهتزاز/العبث بمفتاح ميكانيكي.", en: "Detects vibration/tamper via mechanical switch." } },
  { component: { ar: "حساس الضوء", en: "Light sensor" }, model: "LDR", qty: "1", pin: "A4", why: { ar: "قياس شدة الإضاءة، عتبة 400.", en: "Measures light intensity, threshold 400." } },
  { component: { ar: "حرارة ورطوبة", en: "Temp & humidity" }, model: "DHT11", qty: "1", pin: "D2", why: { ar: "0-50°C ±2°C، رطوبة 20-90% ±5%.", en: "0-50°C ±2°C, humidity 20-90% ±5%." } },
  { component: { ar: "حساس حركة", en: "Motion sensor" }, model: "IR Sensor", qty: "1", pin: "D10", why: { ar: "كشف الحركة بإشارة تحت الحمراء.", en: "Motion detection via IR." } },
  { component: { ar: "وحدة تحكم بالإضاءة", en: "Light control" }, model: "Relay Module", qty: "1", pin: "D6", why: { ar: "عزل كهربائي للتحكم بالأحمال.", en: "Galvanic isolation for load control." } },
  { component: { ar: "محرك الباب", en: "Door motor" }, model: "Servo SG90", qty: "1", pin: "D9", why: { ar: "0° فتح، 180° إغلاق.", en: "0° open, 180° close." } },
  { component: { ar: "الشاشة", en: "Display" }, model: "LCD 16×2 I2C", qty: "1", pin: "SDA/SCL (20/21)", why: { ar: "عرض الوقت، الحرارة، الرطوبة، التنبيهات.", en: "Shows time, temp, humidity, alerts." } },
  { component: { ar: "لوحة المفاتيح", en: "Keypad" }, model: "4×3 Matrix", qty: "1", pin: "50-53, 47-49", why: { ar: "إدخال كلمة المرور REDACTED.", en: "Password REDACTED entry." } },
  { component: { ar: "ساعة حقيقية", en: "Real-time clock" }, model: "RTC DS3231", qty: "1", pin: "I2C", why: { ar: "حفظ الوقت الدقيق مع بطارية احتياطية.", en: "Accurate time with backup battery." } },
  { component: { ar: "إنذار الحريق", en: "Fire buzzer" }, model: "Active Buzzer", qty: "1", pin: "D28", why: { ar: "صوت عالٍ مستمر عند الحريق.", en: "Loud continuous sound on fire." } },
  { component: { ar: "إنذار العبث", en: "Tamper buzzer" }, model: "Active Buzzer", qty: "1", pin: "D12", why: { ar: "صوت مختلف لتمييز العبث.", en: "Distinct sound for tamper." } },
  { component: { ar: "بازر نغمات", en: "Passive buzzer" }, model: "Passive Buzzer", qty: "1", pin: "D3", why: { ar: "نغمات متغيرة: 400/2000/2500 Hz.", en: "Variable tones: 400/2000/2500 Hz." } },
  { component: { ar: "مؤشرات LED", en: "Status LEDs" }, model: "LED R/G/Y + No-Fire", qty: "4", pin: "D34/D32/D33/D30", why: { ar: "أحمر خطر، أصفر تحذير، أخضر سلامة.", en: "Red danger, yellow warning, green safe." } },
  { component: { ar: "زر إعادة الضبط", en: "Reset button" }, model: "Push Button", qty: "1", pin: "D11", why: { ar: "إلغاء إنذار العبث (INPUT_PULLUP).", en: "Cancel tamper alarm (INPUT_PULLUP)." } },
  { component: { ar: "مقاومات حماية", en: "Protection resistors" }, model: "220-330Ω", qty: "—", pin: "—", why: { ar: "حماية كل مصابيح LED.", en: "Protect all LEDs." } },
  { component: { ar: "منظومة الطاقة", en: "Solar power system" }, model: "10W Panel + 9800mAh", qty: "1", pin: "VIN/5V", why: { ar: "تشغيل مستدام 19.6h، شحن 4-6h.", en: "Sustainable 19.6h runtime, 4-6h charge." } },
];

export interface CodeSnippet {
  title: Bilingual;
  language: string;
  filename: string;
  code: string;
}

export const codeSnippets: CodeSnippet[] = [
  {
    title: { ar: "كود Arduino Mega — المنطق الرئيسي", en: "Arduino Mega code — main logic" },
    language: "cpp",
    filename: "smart_building_mega.ino",
    code: `// ===== دوال الباب =====
void openDoor() {
  if (!doorOpen) {
    servo.write(0);          // 0° = فتح
    doorOpen = true;
    doorTimer = millis();
    Serial1.println("EVENT:DOOR_OPENED");
  }
}

void closeDoor() {
  if (doorOpen) {
    servo.write(180);        // 180° = إغلاق
    doorOpen = false;
    Serial1.println("EVENT:DOOR_CLOSED");
  }
}

// ===== الحريق يفتح الباب، العبث يُغلقه =====
void handleDoorEmergency() {
  if (fireDetected && !doorOpen) openDoor();      // NFPA 101
  if (tamperDetected && doorOpen) closeDoor();    // ISO 27001
}

// ===== فلترة العبث: 3 قراءات متتالية =====
void readSensors() {
  static int confirmedShakes = 0;
  int rawTilt = analogRead(TILT_PIN);
  static int lastTiltPos = 512;
  if (abs(rawTilt - lastTiltPos) > 250) {
    confirmedShakes++;
    if (confirmedShakes > 2) tamperDetected = true;  // تقليل الإنذارات الكاذبة
  } else {
    if (confirmedShakes > 0) confirmedShakes--;
  }
  lastTiltPos = rawTilt;
}`,
  },
  {
    title: { ar: "كود ESP8266 — المزامنة مع Firebase", en: "ESP8266 code — Firebase sync" },
    language: "cpp",
    filename: "esp8266_firebase.ino",
    code: `#include <ESP8266WiFi.h>
#include <Firebase_ESP_Client.h>

#define WIFI_SSID "Dura School for Boys"
#define WIFI_PASSWORD "********"
#define FIREBASE_HOST "smarthomecontrol-61051-default-rtdb.firebaseio.com"
#define FIREBASE_AUTH "********"

FirebaseData fbdo;

void setup() {
  Serial.begin(9600);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) { delay(500); }
  config.host = FIREBASE_HOST;
  config.signer.tokens.legacy_token = FIREBASE_AUTH;
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}

void loop() {
  Firebase.ready();  // إلزامي للمكتبة الجديدة
  // استقبال بيانات Mega عبر Serial ومزامنتها مع Firebase
  while (Serial.available()) {
    char c = Serial.read();
    if (c == '\\n') { parseAndSendToFirebase(buffer); buffer = ""; }
    else buffer += c;
  }
  // قراءة أوامر التطبيق من Firebase وإرسالها للميجا
  if (Firebase.RTDB.getString(&fbdo, "/SmartHome/Actuators/Door/status")) {
    if (fbdo.stringData() == "OPEN") Serial.println("OPEN_DOOR");
  }
}`,
  },
  {
    title: { ar: "كود تطبيق أندرويد — استماع لـ Firebase (Kotlin)", en: "Android app — Firebase listener (Kotlin)" },
    language: "kotlin",
    filename: "HomeControlActivity.kt",
    code: `package com.example.smarthomecontrol

class HomeControlActivity : AppCompatActivity() {
    private val dbRoot = FirebaseDatabase.getInstance()
                        .getReference("SmartHome")

    // استماع لحالة الحريق لحظيًا
    private fun setupSensorListeners() {
        dbRoot.child("Sensors/Safety/fire")
            .addValueEventListener(object : ValueEventListener {
            override fun onDataChange(snapshot: DataSnapshot) {
                val isFire = snapshot.getValue(Boolean::class.java) ?: false
                tvFireStatus.text = if (isFire)
                    getString(R.string.status_fire_danger)
                else
                    getString(R.string.status_safe)
            }
            override fun onCancelled(error: DatabaseError) {}
        })
    }

    // التحكم بالإضاءة من التطبيق
    private fun setupPowerControl() {
        switchLight.setOnCheckedChangeListener { btn, checked ->
            if (btn.isPressed) dbRoot.child("Power/relay1").setValue(checked)
        }
    }

    // فتح الباب بكلمة المرور REDACTED
    private fun submitPin() {
        if (enteredPin == "REDACTED") {
            dbRoot.child("Actuators/Door/status").setValue("OPEN")
        }
    }
}`,
  },
];

export interface TestProtocol {
  test: Bilingual;
  how: Bilingual;
  result: Bilingual;
}

export const testProtocol: TestProtocol[] = [
  {
    test: { ar: "كشف الحريق", en: "Fire detection" },
    how: { ar: "تقريب ولاعة من حساس اللهب.", en: "Bring a lighter near the flame sensor." },
    result: { ar: "باب يفتح + إنذار + إضاءة طوارئ — ~200ms.", en: "Door opens + alarm + emergency light — ~200ms." },
  },
  {
    test: { ar: "كشف العبث", en: "Tamper detection" },
    how: { ar: "هز النظام لتفعيل حساس الميل SW-520D.", en: "Shake the system to trigger SW-520D." },
    result: { ar: "باب يغلق + إنذار عبث — ~300ms.", en: "Door closes + tamper alarm — ~300ms." },
  },
  {
    test: { ar: "كلمة مرور صحيحة", en: "Correct password" },
    how: { ar: "إدخال REDACTED# من لوحة المفاتيح.", en: "Enter REDACTED# on the keypad." },
    result: { ar: "باب يفتح 10 ثواني ثم يُغلق تلقائيًا.", en: "Door opens 10s then auto-closes." },
  },
  {
    test: { ar: "إضاءة تلقائية", en: "Automatic lighting" },
    how: { ar: "تغطية حساس LDR لخفض القراءة تحت 400.", en: "Cover LDR to drop reading below 400." },
    result: { ar: "الريلاي يُفعّل الإضاءة تلقائيًا.", en: "Relay turns on lighting automatically." },
  },
  {
    test: { ar: "تحكم من التطبيق", en: "App control" },
    how: { ar: "تغيير Power/relay1 في Firebase من تطبيق أندرويد.", en: "Change Power/relay1 in Firebase from Android app." },
    result: { ar: "الإضاءة تستجيب + تجاوز يدوي 5 ثوانٍ.", en: "Light responds + 5s manual override." },
  },
  {
    test: { ar: "انقطاع WiFi", en: "WiFi outage" },
    how: { ar: "فصل الراوتر أثناء التشغيل.", en: "Disconnect the router while running." },
    result: { ar: "النظام يعمل محليًا بالكامل (حريق/عبث/باب/إضاءة).", en: "System works fully locally (fire/tamper/door/light)." },
  },
  {
    test: { ar: "إعادة تشغيل", en: "Reboot" },
    how: { ar: "فصل الطاقة ثم وصلها.", en: "Cut power then restore." },
    result: { ar: "النظام يعود للعمل تلقائيًا (System Ready).", en: "System auto-resumes (System Ready)." },
  },
];

export interface ProjectResult {
  metric: Bilingual;
  before: Bilingual;
  after: Bilingual;
}

export const projectResults: ProjectResult[] = [
  {
    metric: { ar: "زمن كشف الحريق", en: "Fire detection time" },
    before: { ar: "يدوي (دقائق)", en: "Manual (minutes)" },
    after: { ar: "~200ms", en: "~200ms" },
  },
  {
    metric: { ar: "زمن كشف العبث", en: "Tamper detection time" },
    before: { ar: "غير متاح", en: "Not available" },
    after: { ar: "~300ms", en: "~300ms" },
  },
  {
    metric: { ar: "التحكّم عن بُعد", en: "Remote control" },
    before: { ar: "غير متاح", en: "Not available" },
    after: { ar: "كامل (Firebase + أندرويد)", en: "Full (Firebase + Android)" },
  },
  {
    metric: { ar: "استقرار WiFi", en: "WiFi stability" },
    before: { ar: "غير موثّق", en: "Not documented" },
    after: { ar: "98%", en: "98%" },
  },
  {
    metric: { ar: "استقرار Firebase", en: "Firebase stability" },
    before: { ar: "غير موثّق", en: "Not documented" },
    after: { ar: "97%", en: "97%" },
  },
  {
    metric: { ar: "تشغيل على البطارية", en: "Battery runtime" },
    before: { ar: "غير متاح", en: "Not available" },
    after: { ar: "19.6h (نظري)", en: "19.6h (theoretical)" },
  },
];

export interface Lesson {
  type: "worked" | "failed" | "different";
  text: Bilingual;
}

export const lessons: Lesson[] = [
  {
    type: "worked",
    text: {
      ar: "فصل الإنذار المحلي (Mega) عن الإشعار السحابي (Firebase) ضمن استجابة <300ms مهما كانت حالة الشبكة.",
      en: "Separating local alarm (Mega) from cloud notification (Firebase) guaranteed <300ms response regardless of network.",
    },
  },
  {
    type: "worked",
    text: {
      ar: "فلترة حساس الميل بـ 3 قراءات متتالية قلّلت الإنذارات الكاذبة بشكل كبير.",
      en: "Filtering the tilt sensor with 3 consecutive readings drastically reduced false alarms.",
    },
  },
  {
    type: "failed",
    text: {
      ar: "أول نسخة استخدمت delay(3000) في فتح الباب فجمّدت النظام. حُلّت بجدولة non-blocking مبنية على millis().",
      en: "First version used delay(3000) on door open and froze the system. Fixed with non-blocking millis()-based scheduling.",
    },
  },
  {
    type: "failed",
    text: {
      ar: "كود قديم كان يُغلق الباب عند الحريق — مخالف لـ NFPA 101. صُحّح: الحريق يفتح الباب للإخلاء.",
      en: "Legacy code closed the door on fire — violating NFPA 101. Fixed: fire opens the door for evacuation.",
    },
  },
  {
    type: "failed",
    text: {
      ar: "تعارض مكتبات Firebase سبّب 50% من المشاكل. حُلّ بحذف كل المكتبات القديمة وتثبيت Firebase_ESP_Client + ArduinoJson 6.21.3 فقط.",
      en: "Firebase library conflicts caused 50% of issues. Fixed by removing all old libs and installing only Firebase_ESP_Client + ArduinoJson 6.21.3.",
    },
  },
  {
    type: "different",
    text: {
      ar: "لو أعدت البناء، سأبدأ بفحص كل قطعة منفردة قبل الدمج — وفّر ذلك ساعات تخمين مصدر العطل.",
      en: "If I rebuilt, I'd test each part individually before integration — saves hours of guessing the fault source.",
    },
  },
];

export interface Verification {
  text: Bilingual;
}

export const verification: Verification[] = [
  {
    text: {
      ar: "تقييم اللجنة: المشروع بمستوى مشاريع الجامعة، يدمج 6 أنظمة في مشروع واحد.",
      en: "Jury review: the project is university-level, integrating 6 systems in one.",
    },
  },
  {
    text: {
      ar: "إشراف المهندس عمر عبد الحليم التلاحمة، مدرسة ذكور دورا الثانوية المهنية.",
      en: "Supervised by Eng. Omar Abdul-Halim Al-Talahmeh, Dura Boys Vocational Secondary School.",
    },
  },
  {
    text: {
      ar: "معايير السلامة المطبقة: NFPA 101 (إخلاء)، IEC 60364-5-56 (إضاءة طوارئ)، ISO 27001 (عبث).",
      en: "Applied safety standards: NFPA 101 (evacuation), IEC 60364-5-56 (emergency lighting), ISO 27001 (tamper).",
    },
  },
  {
    text: {
      ar: "10 سيناريوهات اختبار موثّقة + 20 مشكلة وحلها مُسجّلة أثناء التطوير.",
      en: "10 documented test scenarios + 20 issues with fixes logged during development.",
    },
  },
  {
    text: {
      ar: "قابلية التكرار: نعم — كل قطعة موثّقة وكل قرار مُسجّل وكل كود متاح.",
      en: "Reproducibility: yes — every part documented, every decision recorded, every code available.",
    },
  },
];

/* ============================================================
   PROBLEMS & SOLUTIONS — 20 documented issues
   ============================================================ */
export interface ProblemSolution {
  problem: Bilingual;
  solution: Bilingual;
}

export const problemsSolutions: ProblemSolution[] = [
  { problem: { ar: "تعارض مكتبات Firebase", en: "Firebase library conflicts" }, solution: { ar: "حذف القديم + تثبيت Firebase_ESP_Client و ArduinoJson 6.21.3 فقط.", en: "Remove old + install only Firebase_ESP_Client and ArduinoJson 6.21.3." } },
  { problem: { ar: "ESP متصل WiFi لكن لا يُرسل لـ Firebase", en: "ESP on WiFi but not sending to Firebase" }, solution: { ar: "إضافة Firebase.ready() في loop().", en: "Add Firebase.ready() in loop()." } },
  { problem: { ar: "Firebase Write Failed", en: "Firebase Write Failed" }, solution: { ar: "فتح Rules: .read: true, .write: true.", en: "Open Rules: .read: true, .write: true." } },
  { problem: { ar: "Mega لا يُرسل لـ ESP", en: "Mega not sending to ESP" }, solution: { ar: "ضبط DIP Switches على 1,2 ON.", en: "Set DIP switches to 1,2 ON." } },
  { problem: { ar: "بيانات مشفّرة بين Mega و ESP", en: "Garbled data between Mega and ESP" }, solution: { ar: "توحيد Baud على 9600 + GND مشترك.", en: "Match Baud at 9600 + shared GND." } },
  { problem: { ar: "كلمة سر مختلفة (1234 vs REDACTED)", en: "Mismatched password (1234 vs REDACTED)" }, solution: { ar: "توحيد على REDACTED في كل مكان.", en: "Unify on REDACTED everywhere." } },
  { problem: { ar: "الباب يُغلق عند الحريق", en: "Door closes on fire" }, solution: { ar: "تعديل: حريق = فتح الباب (NFPA 101).", en: "Fix: fire = open door (NFPA 101)." } },
  { problem: { ar: "delay(3000) يجمّد النظام", en: "delay(3000) freezes system" }, solution: { ar: "استبدال بـ millis() non-blocking.", en: "Replace with non-blocking millis()." } },
  { problem: { ar: "إنذارات كاذبة لمستشعر الميل", en: "False alarms from tilt sensor" }, solution: { ar: "فلترة: 3 قراءات متتالية + زر إعادة ضبط.", en: "Filter: 3 consecutive readings + reset button." } },
  { problem: { ar: "عدم استقرار الجهد مع السيرفو والريلاي", en: "Voltage instability with servo/relay" }, solution: { ar: "مصدر 5V خارجي + مكثفات تنعيم + أرضي مشترك.", en: "External 5V + smoothing caps + shared GND." } },
  { problem: { ar: "ESP8266 لا تدعم شبكة 5GHz", en: "ESP8266 doesn't support 5GHz WiFi" }, solution: { ar: "اكتشاف المشكلة بعد 3 ساعات — التحويل لشبكة 2.4GHz.", en: "Discovered after 3 hours — switch to a 2.4GHz network." } },
  { problem: { ar: "حجم Buffer غير كافٍ (512 بايت)", en: "Insufficient buffer size (512 bytes)" }, solution: { ar: "رفع حجم Buffer إلى 2048 بايت لاستيعاب رسائل Firebase.", en: "Raised buffer to 2048 bytes to fit Firebase messages." } },
  { problem: { ar: "تضارب مواعيد الجدول الوزاري", en: "Ministry schedule date conflicts" }, solution: { ar: "حلّها عبر الدعم الفني المتبادل والتنسيق المباشر.", en: "Resolved through mutual technical support and direct coordination." } },
  { problem: { ar: "تعقيد مزامنة السحابة (Firebase)", en: "Cloud sync complexity (Firebase)" }, solution: { ar: "معالجة بصبر + فصل طبقة الإنذار المحلي عن الإشعار السحابي.", en: "Handled patiently + separated local alarm layer from cloud notification." } },
];

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

/* ============================================================
   TECH STACK (Hero)
   ============================================================ */
export const techStack = [
  "Arduino Mega WiFi R3",
  "Arduino Uno",
  "ESP8266 (embedded)",
  "ESP32",
  "ATmega2560",
  "Serial1 @ 9600",
  "Firebase RTDB",
  "DHT11",
  "Flame Sensor",
  "Tilt SW-520D",
  "LDR",
  "IR Sensor",
  "MQ-2 (gas)",
  "RFID MFRC522",
  "Servo SG90",
  "Relay",
  "LCD I2C",
  "RTC DS3231",
  "Keypad 4×3",
  "Solar 10W",
  "Kotlin / Android",
];

/* ============================================================
   CONTACT CHANNELS — placeholder values, clearly marked
   ============================================================ */
export const channels = {
  whatsapp: "https://wa.me/970000000000", // TODO(mohammed): real WhatsApp with country code
  email: "mailto:mohammed@example.com", // TODO(mohammed): real email
  github: "https://github.com/mohammed-alakaly", // TODO(mohammed): real GitHub
  linkedin: null, // V1.2 — not yet
};

/* ============================================================
   PROJECT GALLERY — placeholders per Design Spec
   ============================================================ */
export interface GalleryImage {
  caption: Bilingual;
  context: Bilingual;
}

export const projectGallery: GalleryImage[] = [
  { caption: { ar: "تجميع الأسلاك", en: "Wire assembly" }, context: { ar: "المرحلة الأولى — 2026", en: "Phase 1 — 2026" } },
  { caption: { ar: "المجسم في بداية العمل", en: "Model at start" }, context: { ar: "تجميع القطع", en: "Assembling parts" } },
  { caption: { ar: "اختبار القطع أثناء العمل", en: "Testing parts during work" }, context: { ar: "الفحص الفردي", en: "Individual testing" } },
  { caption: { ar: "لوحة المفاتيح وكلمة المرور", en: "Keypad and password" }, context: { ar: "REDACTED#", en: "REDACTED#" } },
  { caption: { ar: "منظومة الطاقة الشمسية", en: "Solar power system" }, context: { ar: "10W + 9800mAh", en: "10W + 9800mAh" } },
  { caption: { ar: "النظام الكامل مُركّب", en: "Full assembled system" }, context: { ar: "قبل التقديم للجنة", en: "Before jury presentation" } },
];

/* ============================================================
   SOLAR POWER SPECS
   ============================================================ */
export const solarSpecs = {
  panel: { ar: "10 وات (5V, 2A)", en: "10W (5V, 2A)" },
  battery: { ar: "9800mAh / 49Wh", en: "9800mAh / 49Wh" },
  consumption: { ar: "~500mA", en: "~500mA" },
  runtimeTheoretical: { ar: "19.6 ساعة", en: "19.6 hours" },
  chargeTime: { ar: "4-6 ساعات", en: "4-6 hours" },
};

/* ============================================================
   COST BREAKDOWN
   ============================================================ */
export const costBreakdown = [
  { item: { ar: "الحساسات (لهب/ميل/LDR/DHT11/IR)", en: "Sensors (flame/tilt/LDR/DHT11/IR)" }, cost: "90 ₪" },
  { item: { ar: "وحدة التحكم (Mega WiFi R3)", en: "Control unit (Mega WiFi R3)" }, cost: "70 ₪" },
  { item: { ar: "المخرجات (سيرفو/ريلاي/بازرات/LEDs)", en: "Outputs (servo/relay/buzzers/LEDs)" }, cost: "74 ₪" },
  { item: { ar: "الطاقة الشمسية (لوح/بطارية/شاحن)", en: "Solar power (panel/battery/charger)" }, cost: "117 ₪" },
  { item: { ar: "المجسم والباب الذكي", en: "Model + smart door" }, cost: "350 ₪" },
  { item: { ar: "أسلاك ومقاومات ومسلتزمات", en: "Wiring, resistors, misc" }, cost: "49 ₪" },
];

/* ============================================================
   DIP SWITCH MODES — real board config
   ============================================================ */
export const dipSwitchModes = [
  { mode: { ar: "برمجة Mega", en: "Program Mega" }, switches: "3,4 ON", use: { ar: "رفع كود ATmega2560 عبر USB", en: "Upload ATmega2560 code via USB" } },
  { mode: { ar: "برمجة ESP8266", en: "Program ESP8266" }, switches: "5,6,7 ON", use: { ar: "وضع Flash لرفع سكيتشات ESP", en: "Flash mode for ESP sketches" } },
  { mode: { ar: "التشغيل العادي", en: "Normal run" }, switches: "1,2 ON", use: { ar: "تواصل Mega ↔ ESP عبر Serial1", en: "Mega ↔ ESP communication via Serial1" } },
];

/* ============================================================
   FUTURE DEVELOPMENTS — from the report
   ============================================================ */
export const futureDevelopments: Bilingual[] = [
  { ar: "تحكم صوتي", en: "Voice control" },
  { ar: "نظام طاقة كامل", en: "Full power system" },
  { ar: "إشعارات فورية Push", en: "Push notifications" },
  { ar: "نظام بصمة", en: "Fingerprint system" },
  { ar: "كاميرات مراقبة", en: "Surveillance cameras" },
];

/* ============================================================
   Helper
   ============================================================ */
export function pick<T>(item: { ar: T; en: T }, lang: Lang): T {
  return item[lang];
}
