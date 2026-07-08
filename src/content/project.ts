/**
 * Project deep-dive content — Smart Building Management System.
 *
 * Source: كودي.txt + التقرير الفني + وثيقة المشروع الرسمية.
 */

import type { Bilingual } from "./types";

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
