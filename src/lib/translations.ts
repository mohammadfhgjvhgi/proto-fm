/**
 * UI i18n strings — Arabic (primary, RTL) + English (LTR).
 * Source: Content Bible §3. Technical terms stay English in both.
 */

export type Lang = "ar" | "en";

export const translations = {
  ar: {
    // Meta
    htmlLang: "ar",
    dir: "rtl",

    // Skip link
    skipToContent: "تخطّى إلى المحتوى",

    // Navbar
    nav: {
      entry: "الرئيسية",
      proof: "الأدلة",
      projects: "المشاريع",
      philosophy: "الفلسفة",
      trajectory: "المسار",
      engage: "التواصل",
      langToggle: "EN",
      langToggleLabel: "التبديل إلى الإنجليزية",
    },

    // Hero
    hero: {
      sidePanelLabel: "هوية هندسية",
      version: "v1.0.0",
      name: "مهندس محمد عادل العقيلي",
      specialty: "متخصص في تكنولوجيا المباني الذكية",
      tagline: "أحوّل الأفكار الهندسية إلى أنظمة ذكية موثّقة، عملية، وقابلة للتطوير.",
      ctaPrimary: "استكشف الأدلة",
      ctaSecondary: "تواصل مباشرة",
      authority: "مشروع بمستوى الجامعة — مُقدَّم للجنة تحكيم التوجيهي المهني",
      techStackTitle: "TECH STACK",
    },

    // Trust signals
    trust: {
      sectionNumber: "00",
      title: "إشارات ثقة",
      subtitle: "ثلاث فقط. كل واحدة موثّقة برابط.",
      cards: [
        {
          title: "مشروع بمستوى الجامعة",
          desc: "قيّمته لجنة تحكيم التوجيهي المهني بأنه بمستوى مشاريع الجامعة، ويدمج 6 أنظمة في مشروع واحد.",
          link: "الأدلة الكاملة",
          href: "#proof",
        },
        {
          title: "6 أنظمة مدمجة في مشروع واحد",
          desc: "حريق، عبث، إضاءة ذكية، باب ذكي، مراقبة بيئية، تحكم عن بُعد — كلٌّ موثّق بالكود.",
          link: "تفاصيل المشروع",
          href: "#projects",
        },
        {
          title: "Arduino Mega WiFi R3 + Firebase + Android",
          desc: "لوحة Mega مع وحدة ESP8266 مدمجة، مربوطة بـ Firebase، وتطبيق أندرويد بالتعاون مع مطور.",
          link: "المشروع الرئيسي",
          href: "#projects",
        },
      ],
    },

    // Branching question
    branching: {
      title: "ما الذي يهمّك؟",
      options: [
        { label: "أرني الأدلة", desc: "ادعاءات موثّقة بالكود والصور والتقييم", href: "#proof" },
        { label: "أرني كيف أفكّر", desc: "مبادئ القرار الهندسي ولماذا كل اختيار", href: "#philosophy" },
        { label: "أرني المسار", desc: "خط زمني طبيعي من 2024 إلى اليوم", href: "#trajectory" },
      ],
    },

    // Featured project
    featured: {
      sectionNumber: "01",
      label: "المشروع الرئيسي",
      title: "نظام إدارة المباني الذكية بالطاقة الاحتياطية",
      subtitle: "Arduino Mega WiFi R3 + ESP8266 (مدمج) + Firebase + Android",
      desc: "نظام متكامل لإدارة المباني الذكية يدمج 6 أنظمة في مشروع واحد: كشف الحريق، كشف العبث، إضاءة ذكية، باب ذكي، مراقبة بيئية، وتحكم عن بُعد. مُغذّى بالطاقة الشمسية، موثّق بالكامل، ومتوافق مع NFPA 101 و IEC 60364 و ISO 27001.",
      cta: "الغوص في المشروع",
      metrics: [
        { value: "6", label: "أنظمة مدمجة" },
        { value: "200ms", label: "استجابة الحريق" },
        { value: "19.6h", label: "تشغيل البطارية" },
      ],
    },

    // Proof index
    proof: {
      sectionNumber: "02",
      title: "فهرس الأدلة",
      subtitle: "كل ادّعاء → دليل → تحقق. لا استثناءات.",
      claimsTitle: "خريطة الادّعاءات",
      claimsCols: ["الادّعاء", "الدليل", "نوع التحقق"],
      matrixTitle: "مصفوفة العمق التقني",
      matrixCols: ["القدرة", "العمق", "الدليل"],
      recognitionTitle: "تقييم لجنة التحكيم",
      recognitionContext: "السياق",
      recognitionContextValue: "تقديم المشروع أمام لجنة تحكيم التوجيهي المهني بمدرسة ذكور دورا الثانوية المهنية 2025/2026، للحصول على شهادة الكفاءة المهنية.",
      recognitionResult: "النتيجة",
      recognitionResultValue: "قيّمت اللجنة المشروع بأنه بمستوى مشاريع الجامعة، ويدمج 6 أنظمة في مشروع واحد.",
      recognitionQuote:
        "هذا المشروع ليس مشروع توجيهي — هذا مشروع جامعة، وكأنه 6 مشاريع ببعض.",
      recognitionAttribution: "لجنة تحكيم التوجيهي المهني — 2026",
      depth: {
        implemented: "منفّذ",
        working: "معرفة عاملة",
        learning: "قيد التعلّم",
      },
    },

    // Stats band
    stats: {
      sectionNumber: "03",
      title: "أرقام موثّقة",
      subtitle: "من تقرير المشروع الفني واختبارات اللجنة.",
      source: "المصدر: التقرير الفني الشامل + بروتوكول الاختبار (10 سيناريوهات)",
      items: [
        { value: "6", unit: "", label: "أنظمة مدمجة في مشروع واحد" },
        { value: "200", unit: "ms", label: "زمن استجابة كشف الحريق" },
        { value: "300", unit: "ms", label: "زمن استجابة كشف العبث" },
        { value: "19.6", unit: "h", label: "تشغيل على البطارية (نظري)" },
        { value: "98", unit: "%", label: "استقرار اتصال WiFi" },
        { value: "8", unit: "", label: "أشهر تطوير متواصل" },
      ],
    },

    // Philosophy
    philosophy: {
      sectionNumber: "04",
      title: "الفلسفة الهندسية",
      subtitle: "العقل وراء المشاريع. قواعد قرار قابلة للاختبار، لا قيمًا مجرّدة.",
      principlesTitle: "مبادئ التشغيل",
      howTitle: "كيف أفكّر",
      whyTitle: "لماذا كل قرار تقني",
      dontTitle: "ما لا أفعله",
      exampleLabel: "مثال تطبيقي",
    },

    // Trajectory
    trajectory: {
      sectionNumber: "05",
      title: "المسار الزمني",
      subtitle: "يُروى كحقائق. العمر يظهر كدليل التزام، لا كمفاجأة.",
    },

    // Engage
    engage: {
      sectionNumber: "06",
      title: "كيف يمكننا العمل معًا؟",
      subtitle: "أربعة مسارات. اختر ما يناسبك. أرد خلال 48 ساعة على الأكثر.",
      responseTime: "أرد خلال 48 ساعة على الأكثر.",
      paths: {
        review: {
          label: "تقييم مشروع",
          desc: "لديك مشروع وتريد رأيًا هندسيًا فيه.",
          fields: ["الاسم", "سياق المشروع", "السؤال"],
        },
        consult: {
          label: "استشارة تقنية",
          desc: "سؤال هندسي محدّد في IoT أو الأنظمة المدمجة.",
          fields: ["المجال", "السؤال"],
        },
        build: {
          label: "تنفيذ مشروع",
          desc: "تريد بناء نظام من الصفر.",
          fields: ["نوع المشروع", "الميزانية التقريبية", "الموعد"],
        },
        refer: {
          label: "توصية أو مرجع",
          desc: "تحتاج مرجعًا تقنيًا أو توصية بمكوّنات.",
          fields: ["السياق", "ما تحتاجه"],
        },
      },
      form: {
        nameLabel: "الاسم",
        namePlaceholder: "اسمك الكامل",
        emailLabel: "البريد الإلكتروني",
        emailPlaceholder: "you@example.com",
        contextLabel: "السياق",
        contextPlaceholder: "اكتب التفاصيل هنا",
        submit: "إرسال",
        submitting: "جارٍ الإرسال…",
        success: "وصلتني رسالتك. أرد خلال 48 ساعة.",
        error: "تعذّر الإرسال. حاول مرة أخرى أو راسلني مباشرة.",
        required: "هذا الحقل مطلوب",
      },
      channelsTitle: "قنوات مباشرة",
      channels: {
        whatsapp: "واتساب",
        email: "بريد إلكتروني",
        github: "GitHub",
        linkedin: "LinkedIn",
        linkedinSoon: "قريبًا",
      },
      noPhone: "لا يُعرض رقم الهاتف علنًا. التواصل عبر واتساب فقط.",
    },

    // CTA band
    ctaBand: {
      tag: "الخطوة التالية",
      title: "هل تريد رؤية المشروع كاملاً؟",
      desc: "9 أقسام توثيق: المشكلة، القيود، العمارة، المكوّنات، الاختبار، النتائج، الدروس، التحقق — كلٌّ بالأدلة.",
      primary: "الغوص في المشروع",
      secondary: "تواصل مباشرة",
    },

    // Footer
    footer: {
      tagline: "هوية هندسية رقمية. الثقة هي المنتج النهائي.",
      badge: "التوثيق قبل التسليم",
      quickLinks: "روابط سريعة",
      technical: "معلومات تقنية",
      lastUpdate: "آخر تحديث",
      lastUpdateValue: "2026",
      techValue: "Next.js 16 · TypeScript · Tailwind 4",
      copyright: "© 2026 مهندس محمد عادل العقيلي. جميع الحقوق محفوظة.",
      version: "v1.0.0",
    },

    // Project deep-dive
    project: {
      back: "العودة للأعلى",
      sections: {
        problem: "المشكلة",
        constraints: "القيود",
        architecture: "عمارة النظام",
        components: "قائمة المكوّنات",
        implementation: "التنفيذ",
        testing: "بروتوكول الاختبار",
        results: "النتائج",
        lessons: "الدروس المستفادة",
        verification: "التحقق",
      },
      codeLabel: "كود",
      copy: "نسخ",
      copied: "تم النسخ",
    },
  },

  en: {
    // Meta
    htmlLang: "en",
    dir: "ltr",

    skipToContent: "Skip to content",

    nav: {
      entry: "Entry",
      proof: "Proof",
      projects: "Projects",
      philosophy: "Philosophy",
      trajectory: "Trajectory",
      engage: "Engage",
      langToggle: "ع",
      langToggleLabel: "Switch to Arabic",
    },

    hero: {
      sidePanelLabel: "ENGINEERING IDENTITY",
      version: "v1.0.0",
      name: "Mohammed Adil Alakaly",
      specialty: "Specialized in Smart Building Technology",
      tagline: "I turn engineering ideas into documented, practical, and scalable smart systems.",
      ctaPrimary: "Explore the evidence",
      ctaSecondary: "Contact directly",
      authority: "University-grade project — presented to the vocational Tawjihi jury",
      techStackTitle: "TECH STACK",
    },

    trust: {
      sectionNumber: "00",
      title: "Trust signals",
      subtitle: "Only three. Each backed by a link.",
      cards: [
        {
          title: "University-grade project",
          desc: "Rated by the vocational Tawjihi jury as equivalent to university projects, integrating 6 systems in one.",
          link: "Full evidence",
          href: "#proof",
        },
        {
          title: "6 systems in one project",
          desc: "Fire, tamper, smart lighting, smart door, environmental monitoring, remote control — each documented in code.",
          link: "Project details",
          href: "#projects",
        },
        {
          title: "Arduino Mega WiFi R3 + Firebase + Android",
          desc: "Mega board with embedded ESP8266, connected to Firebase, plus an Android app built in collaboration.",
          link: "Main project",
          href: "#projects",
        },
      ],
    },

    branching: {
      title: "What matters to you?",
      options: [
        { label: "Show me the proof", desc: "Claims backed by code, photos, review", href: "#proof" },
        { label: "Show me how I think", desc: "Engineering decision principles and why each choice", href: "#philosophy" },
        { label: "Show me the path", desc: "A natural timeline from 2024 to today", href: "#trajectory" },
      ],
    },

    featured: {
      sectionNumber: "01",
      label: "Featured project",
      title: "Smart Building Management System Using Backup Energy",
      subtitle: "Arduino Mega WiFi R3 + ESP8266 (embedded) + Firebase + Android",
      desc: "An integrated smart building system combining 6 systems in one project: fire detection, tamper detection, smart lighting, smart door, environmental monitoring, and remote control. Solar-powered, fully documented, compliant with NFPA 101, IEC 60364, and ISO 27001.",
      cta: "Dive into the project",
      metrics: [
        { value: "6", label: "systems integrated" },
        { value: "200ms", label: "fire response" },
        { value: "19.6h", label: "battery runtime" },
      ],
    },

    proof: {
      sectionNumber: "02",
      title: "Proof index",
      subtitle: "Every claim → evidence → verification. No exceptions.",
      claimsTitle: "Claims map",
      claimsCols: ["Claim", "Evidence", "Verification"],
      matrixTitle: "Technical depth matrix",
      matrixCols: ["Capability", "Depth", "Evidence"],
      recognitionTitle: "Jury review",
      recognitionContext: "Context",
      recognitionContextValue: "Presented to the vocational Tawjihi jury at Dura Boys Vocational Secondary School, 2025/2026, for the Vocational Proficiency Certificate.",
      recognitionResult: "Outcome",
      recognitionResultValue: "The jury rated the project as university-level, integrating 6 systems in one project.",
      recognitionQuote:
        "This is not a Tawjihi project — it's a university project, like 6 projects in one.",
      recognitionAttribution: "Vocational Tawjihi jury — 2026",
      depth: {
        implemented: "Implemented",
        working: "Working knowledge",
        learning: "Learning",
      },
    },

    stats: {
      sectionNumber: "03",
      title: "Verified numbers",
      subtitle: "From the technical report and jury tests.",
      source: "Source: comprehensive technical report + test protocol (10 scenarios)",
      items: [
        { value: "6", unit: "", label: "systems in one project" },
        { value: "200", unit: "ms", label: "fire detection response" },
        { value: "300", unit: "ms", label: "tamper detection response" },
        { value: "19.6", unit: "h", label: "battery runtime (theoretical)" },
        { value: "98", unit: "%", label: "WiFi stability" },
        { value: "8", unit: "", label: "months of development" },
      ],
    },

    philosophy: {
      sectionNumber: "04",
      title: "Engineering philosophy",
      subtitle: "The mind behind the projects. Testable decision rules, not abstract values.",
      principlesTitle: "Operating principles",
      howTitle: "How I think",
      whyTitle: "Why each technical decision",
      dontTitle: "What I don't do",
      exampleLabel: "Applied example",
    },

    trajectory: {
      sectionNumber: "05",
      title: "Trajectory",
      subtitle: "Told as facts. Age appears as a commitment signal, not a surprise.",
    },

    engage: {
      sectionNumber: "06",
      title: "How can we work together?",
      subtitle: "Four tracks. Pick what fits. I respond within 48 hours at most.",
      responseTime: "I respond within 48 hours at most.",
      paths: {
        review: {
          label: "Project review",
          desc: "You have a project and want an engineering opinion.",
          fields: ["Name", "Project context", "Question"],
        },
        consult: {
          label: "Technical consult",
          desc: "A specific engineering question on IoT or embedded systems.",
          fields: ["Domain", "Question"],
        },
        build: {
          label: "Build a project",
          desc: "You want to build a system from scratch.",
          fields: ["Project type", "Approximate budget", "Timeline"],
        },
        refer: {
          label: "Reference or recommendation",
          desc: "You need a technical reference or component recommendation.",
          fields: ["Context", "What you need"],
        },
      },
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your full name",
        emailLabel: "Email",
        emailPlaceholder: "you@example.com",
        contextLabel: "Context",
        contextPlaceholder: "Write the details here",
        submit: "Send",
        submitting: "Sending…",
        success: "I received your message. I'll respond within 48 hours.",
        error: "Could not send. Try again or reach me directly.",
        required: "This field is required",
      },
      channelsTitle: "Direct channels",
      channels: {
        whatsapp: "WhatsApp",
        email: "Email",
        github: "GitHub",
        linkedin: "LinkedIn",
        linkedinSoon: "soon",
      },
      noPhone: "No phone number is shown publicly. WhatsApp only.",
    },

    ctaBand: {
      tag: "Next step",
      title: "Want to see the full project?",
      desc: "9 documentation sections: problem, constraints, architecture, components, testing, results, lessons, verification — each with evidence.",
      primary: "Dive into the project",
      secondary: "Contact directly",
    },

    footer: {
      tagline: "Digital engineering identity. Trust is the final product.",
      badge: "Documentation before delivery",
      quickLinks: "Quick links",
      technical: "Technical",
      lastUpdate: "Last update",
      lastUpdateValue: "2026",
      techValue: "Next.js 16 · TypeScript · Tailwind 4",
      copyright: "© 2026 Mohammed Adil Alakaly. All rights reserved.",
      version: "v1.0.0",
    },

    project: {
      back: "Back to top",
      sections: {
        problem: "Problem",
        constraints: "Constraints",
        architecture: "System architecture",
        components: "Component list",
        implementation: "Implementation",
        testing: "Testing protocol",
        results: "Results",
        lessons: "Lessons learned",
        verification: "Verification",
      },
      codeLabel: "code",
      copy: "Copy",
      copied: "Copied",
    },
  },
} as const;

export type TranslationDict = (typeof translations)["ar"];
