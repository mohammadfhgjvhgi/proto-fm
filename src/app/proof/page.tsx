"use client";

import { SiteLayout } from "@/components/site/site-layout";
import { PageHeader, BackLink } from "@/components/site/page-header";
import { ProofIndex } from "@/components/site/proof-index";

export default function ProofPage() {
  return (
    <SiteLayout>
      <PageHeader
        sectionNumber="02 / PROOF"
        title="فهرس الأدلة"
        subtitle="كل ادّعاء → دليل → تحقق. لا استثناءات."
      />
      <ProofIndex />
      <BackLink />
    </SiteLayout>
  );
}
