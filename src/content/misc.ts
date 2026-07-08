/**
 * Miscellaneous content — tech stack, channels, gallery, solar specs, cost, DIP modes, future.
 *
 * Source: كودي.txt + التقرير الفني + وثيقة المشروع الرسمية.
 */

import type { Bilingual } from "./types";

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
