"use client";

import { SiteLayout } from "@/components/site/site-layout";
import { ProjectDeepDive } from "@/components/site/project-deep-dive";
import { BackLink } from "@/components/site/page-header";

export default function SmartBuildingPage() {
  return (
    <SiteLayout>
      <ProjectDeepDive />
      <BackLink />
    </SiteLayout>
  );
}
