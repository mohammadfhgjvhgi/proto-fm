"use client";

import { SiteLayout } from "@/components/site/site-layout";
import { PageHeader, BackLink } from "@/components/site/page-header";
import { Engage } from "@/components/site/engage";

export default function EngagePage() {
  return (
    <SiteLayout>
      <PageHeader
        sectionNumber="06 / ENGAGE"
        title="كيف يمكننا العمل معًا؟"
        subtitle="أربعة مسارات. اختر ما يناسبك. أرد خلال 48 ساعة على الأكثر."
      />
      <Engage />
      <BackLink />
    </SiteLayout>
  );
}
