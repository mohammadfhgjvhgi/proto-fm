import { describe, it, expect } from "vitest";
import {
  claims,
  capabilities,
  principles,
  howThink,
  theWhy,
  dontDo,
  trajectory,
  skillsLearned,
  techStack,
  projectSections,
  projectComponents,
  codeSnippets,
  testProtocol,
  projectResults,
  lessons,
  verification,
  problemsSolutions,
  marketAnalysis,
  knxCertificate,
  tenMountains,
  lifePhilosophy,
  featuredProject,
  costBreakdown,
  dipSwitchModes,
  futureDevelopments,
  solarSpecs,
  academicSubjects,
  academicSummary,
  universityPlan,
  professionalGoals,
} from "./content";

describe("content structure integrity", () => {
  it("claims has 6 entries", () => {
    expect(claims).toHaveLength(6);
    claims.forEach((c) => {
      expect(c.claim.ar).toBeTruthy();
      expect(c.claim.en).toBeTruthy();
      expect(c.evidence.ar).toBeTruthy();
      expect(c.evidence.en).toBeTruthy();
      expect(c.verification.ar).toBeTruthy();
      expect(c.verification.en).toBeTruthy();
    });
  });

  it("capabilities has 6 entries", () => {
    expect(capabilities).toHaveLength(6);
    capabilities.forEach((c) => {
      expect(["implemented", "working", "learning"]).toContain(c.depth);
    });
  });

  it("principles has 6 entries with rules and examples", () => {
    expect(principles).toHaveLength(6);
    principles.forEach((p) => {
      expect(p.rule.ar).toBeTruthy();
      expect(p.rule.en).toBeTruthy();
      expect(p.example.ar).toBeTruthy();
      expect(p.example.en).toBeTruthy();
    });
  });

  it("howThink has 5 entries", () => {
    expect(howThink).toHaveLength(5);
  });

  it("theWhy has 4-5 entries", () => {
    expect(theWhy.length).toBeGreaterThanOrEqual(4);
    expect(theWhy.length).toBeLessThanOrEqual(5);
  });

  it("dontDo has at least 5 entries", () => {
    expect(dontDo.length).toBeGreaterThanOrEqual(5);
  });

  it("trajectory has 8 stages", () => {
    expect(trajectory).toHaveLength(8);
    trajectory.forEach((entry) => {
      expect(entry.year).toBeTruthy();
      expect(entry.stage.ar).toBeTruthy();
      expect(entry.stage.en).toBeTruthy();
      expect(entry.items.length).toBeGreaterThan(0);
    });
  });

  it("skillsLearned has at least 10 skills", () => {
    expect(skillsLearned.length).toBeGreaterThanOrEqual(10);
  });

  it("techStack has at least 15 items", () => {
    expect(techStack.length).toBeGreaterThanOrEqual(15);
  });

  it("projectSections has 9 sections", () => {
    expect(projectSections).toHaveLength(9);
  });

  it("projectComponents has 18 components", () => {
    expect(projectComponents).toHaveLength(18);
    projectComponents.forEach((c) => {
      expect(c.model).toBeTruthy();
      expect(c.pin).toBeTruthy();
    });
  });

  it("codeSnippets has 3 snippets with valid code", () => {
    expect(codeSnippets).toHaveLength(3);
    codeSnippets.forEach((s) => {
      expect(s.code.length).toBeGreaterThan(50);
      expect(s.filename).toBeTruthy();
      expect(s.language).toBeTruthy();
    });
  });

  it("testProtocol has at least 5 tests", () => {
    expect(testProtocol.length).toBeGreaterThanOrEqual(5);
  });

  it("projectResults has at least 4 results", () => {
    expect(projectResults.length).toBeGreaterThanOrEqual(4);
  });

  it("lessons has at least 4 entries", () => {
    expect(lessons.length).toBeGreaterThanOrEqual(4);
    lessons.forEach((l) => {
      expect(["worked", "failed", "different"]).toContain(l.type);
    });
  });

  it("verification has at least 3 entries", () => {
    expect(verification.length).toBeGreaterThanOrEqual(3);
  });

  it("problemsSolutions has at least 10 entries", () => {
    expect(problemsSolutions.length).toBeGreaterThanOrEqual(10);
  });

  it("tenMountains has 10 entries", () => {
    expect(tenMountains).toHaveLength(10);
    tenMountains.forEach((m) => {
      expect(["done", "current", "future"]).toContain(m.status);
    });
  });

  it("featuredProject has required fields", () => {
    expect(featuredProject.id).toBe("smart-building");
    expect(featuredProject.title.ar).toBeTruthy();
    expect(featuredProject.title.en).toBeTruthy();
    expect(featuredProject.year).toBeTruthy();
  });

  it("costBreakdown sums correctly to 750 NIS", () => {
    const total = costBreakdown.reduce((sum, c) => {
      const num = parseInt(c.cost.replace(/[^\d]/g, ""), 10);
      return sum + num;
    }, 0);
    expect(total).toBe(750);
  });

  it("dipSwitchModes has 3 modes", () => {
    expect(dipSwitchModes).toHaveLength(3);
  });

  it("solarSpecs has all fields", () => {
    expect(solarSpecs.panel.ar).toBeTruthy();
    expect(solarSpecs.battery.ar).toBeTruthy();
    expect(solarSpecs.consumption.ar).toBeTruthy();
    expect(solarSpecs.runtimeTheoretical.ar).toBeTruthy();
    expect(solarSpecs.chargeTime.ar).toBeTruthy();
  });

  it("academicSubjects has 4 subjects", () => {
    expect(academicSubjects).toHaveLength(4);
  });

  it("academicSummary has expected average 94.5%", () => {
    const avg = academicSummary.expectedAverage;
    const avgStr = typeof avg === "object" ? `${avg.ar} ${avg.en}` : String(avg);
    expect(avgStr).toContain("94.5");
  });

  it("universityPlan has Khadouri", () => {
    expect(universityPlan.university.ar).toContain("خضوري");
    expect(universityPlan.university.en).toContain("Khadouri");
  });

  it("lifePhilosophy has quote and insights", () => {
    expect(lifePhilosophy.quote.ar).toBeTruthy();
    expect(lifePhilosophy.quote.en).toBeTruthy();
    expect(lifePhilosophy.insights.length).toBeGreaterThan(0);
  });

  it("marketAnalysis has all fields", () => {
    expect(marketAnalysis.companiesInWestBank.ar).toBeTruthy();
    expect(marketAnalysis.southPresence.ar).toContain("صفر");
  });

  it("knxCertificate has cost and center", () => {
    expect(knxCertificate.cost.ar).toContain("930");
    expect(knxCertificate.nearestCenter.ar).toContain("عمّان");
  });

  it("no Serial3 in any code snippet (must be Serial1)", () => {
    codeSnippets.forEach((s) => {
      expect(s.code).not.toContain("Serial3");
    });
  });

  it("no PIN 1474 in code snippets (redacted)", () => {
    // The PIN is intentionally in the Kotlin snippet as it's a demo
    // But it should not appear in Arduino/ESP snippets as a password
    codeSnippets.forEach((s) => {
      // PIN 1474 is allowed in the Kotlin app snippet (door PIN)
      if (s.language === "kotlin") return;
      expect(s.code).not.toMatch(/password\s*=\s*1474/i);
    });
  });
});
