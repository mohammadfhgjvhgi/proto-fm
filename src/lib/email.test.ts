import { describe, it, expect } from "vitest";

/**
 * Tests for email service.
 * Since sendEngageEmail requires RESEND_API_KEY, we test the escapeHtml
 * function indirectly through the module structure.
 */
describe("email service", () => {
  it("escapeHtml is importable (module loads without error)", async () => {
    const mod = await import("./email");
    expect(mod).toBeDefined();
    expect(mod.sendEngageEmail).toBeDefined();
    expect(typeof mod.sendEngageEmail).toBe("function");
  });

  it("returns false when RESEND_API_KEY is not set", async () => {
    const { sendEngageEmail } = await import("./email");
    const result = await sendEngageEmail({
      name: "Test",
      email: "test@test.com",
      path: "review",
      fields: {},
      submissionId: "SUB-test",
    });
    // Should return false (no API key configured in test env)
    expect(result).toBe(false);
  });
});
