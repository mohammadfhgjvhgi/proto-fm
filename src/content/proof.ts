/**
 * Proof content — claims, capabilities, recognition, problems & solutions.
 *
 * Source: كودي.txt + التقرير الفني + وثيقة المشروع الرسمية.
 */

import type { Bilingual } from "./types";

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
