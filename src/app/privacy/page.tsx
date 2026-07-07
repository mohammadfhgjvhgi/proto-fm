"use client";

import { SiteLayout } from "@/components/site/site-layout";
import { PageHeader, BackLink } from "@/components/site/page-header";
import { useLanguageStore } from "@/lib/store";

export default function PrivacyPage() {
  const lang = useLanguageStore((s) => s.lang);

  const content = {
    ar: {
      title: "سياسة الخصوصية",
      updated: "آخر تحديث: يوليو 2026",
      sections: [
        {
          h: "البيانات التي نجمعها",
          p: "عند تعبئة نموذج التواصل (/engage)، نجمع: الاسم، البريد الإلكتروني، والمعلومات الإضافية التي تختار مشاركتها. لا نجمع بيانات تتبّع أو cookies تسويقية.",
        },
        {
          h: "كيف نستخدم بياناتك",
          p: "نستخدم بياناتك فقط للرد على رسالتك خلال 48 ساعة. لا نبيع أو نشارك بياناتك مع أي طرف ثالث.",
        },
        {
          h: "حماية بياناتك",
          p: "يتم تخزين رسائلك في قاعدة بياناتنا. عنوان IP الخاص بك يُشفَّر (SHA-256) قبل التخزين — لا نحتفظ بـ IP خام. جميع الطلبات محمية بـ Rate Limiting (5 طلبات/ساعة) لمنع الإساءة.",
        },
        {
          h: "التخزين المحلي (localStorage)",
          p: "نستخدم localStorage في متصفحك لحفظ تفضيل اللغة (عربي/إنجليزي) وموافقتك على سياسة الخصوصية. هذه البيانات لا تُرسل لأي خادم.",
        },
        {
          h: "حقوقك",
          p: "لديك الحق في: الوصول لبياناتك، طلب حذفها، أو تصديرها. تواصل معنا عبر نموذج التواصل لتمارس هذه الحقوق.",
        },
        {
          h: "أمن البيانات",
          p: "نطبّق Security Headers (CSP, HSTS, X-Frame-Options) لحماية الموقع من XSS و clickjacking. جميع الاتصالات عبر HTTPS.",
        },
        {
          h: "التواصل",
          p: "لأي أسئلة حول الخصوصية، تواصل معنا عبر نموذج /engage أو عبر القنوات المذكورة فيه.",
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      updated: "Last updated: July 2026",
      sections: [
        {
          h: "Data We Collect",
          p: "When you fill the contact form (/engage), we collect: your name, email, and any additional info you choose to share. We do not collect tracking data or marketing cookies.",
        },
        {
          h: "How We Use Your Data",
          p: "We use your data only to respond to your message within 48 hours. We do not sell or share your data with any third party.",
        },
        {
          h: "Data Protection",
          p: "Your messages are stored in our database. Your IP address is hashed (SHA-256) before storage — we don't keep raw IPs. All requests are protected by Rate Limiting (5 requests/hour) to prevent abuse.",
        },
        {
          h: "Local Storage",
          p: "We use localStorage in your browser to save your language preference (Arabic/English) and your privacy consent. This data is never sent to any server.",
        },
        {
          h: "Your Rights",
          p: "You have the right to: access your data, request deletion, or export it. Contact us via the engage form to exercise these rights.",
        },
        {
          h: "Data Security",
          p: "We apply Security Headers (CSP, HSTS, X-Frame-Options) to protect the site from XSS and clickjacking. All connections are over HTTPS.",
        },
        {
          h: "Contact",
          p: "For any privacy questions, contact us via the /engage form or through the channels listed there.",
        },
      ],
    },
  };

  const c = lang === "ar" ? content.ar : content.en;

  return (
    <SiteLayout>
      <PageHeader sectionNumber="PRIVACY" title={c.title} subtitle={c.updated} />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="flex flex-col gap-8">
            {c.sections.map((s, i) => (
              <div key={i} className="glass-card p-6">
                <h2 className="text-lg font-medium text-[var(--text)]">{s.h}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BackLink />
    </SiteLayout>
  );
}
