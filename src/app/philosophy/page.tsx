"use client";

import { SiteLayout } from "@/components/site/site-layout";
import { PageHeader, BackLink } from "@/components/site/page-header";
import { Philosophy } from "@/components/site/philosophy";

export default function PhilosophyPage() {
  return (
    <SiteLayout>
      <PageHeader
        sectionNumber="04 / PHILOSOPHY"
        title="الفلسفة الهندسية"
        subtitle="العقل وراء المشاريع. قواعد قرار قابلة للاختبار، لا قيمًا مجرّدة."
      />
      <Philosophy />
      <BackLink />
    </SiteLayout>
  );
}
