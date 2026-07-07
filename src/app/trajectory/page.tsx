"use client";

import { SiteLayout } from "@/components/site/site-layout";
import { PageHeader, BackLink } from "@/components/site/page-header";
import { Trajectory } from "@/components/site/trajectory";

export default function TrajectoryPage() {
  return (
    <SiteLayout>
      <PageHeader
        sectionNumber="05 / TRAJECTORY"
        title="المسار الزمني"
        subtitle="يُروى كحقائق. بداية التعلّم 2025، المشروع الكامل 2026."
      />
      <Trajectory />
      <BackLink />
    </SiteLayout>
  );
}
