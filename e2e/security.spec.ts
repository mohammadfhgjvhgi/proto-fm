import { test, expect } from "@playwright/test";

/**
 * E2E tests for security features.
 * Tests: rate limiting, security headers, honeypot bot trap.
 */

test("rate limiting blocks 6th request", async ({ request }) => {
  // Make 5 requests rapidly
  for (let i = 0; i < 5; i++) {
    const res = await request.post("/api/engage", {
      data: {
        path: "review",
        name: `Rate test ${i}`,
        email: `rate${i}@test.com`,
        fields: { q: "test" },
      },
    });
    expect(res.status()).toBe(200);
  }

  // 6th request should be rate limited
  const res = await request.post("/api/engage", {
    data: {
      path: "review",
      name: "Rate test 6",
      email: "rate6@test.com",
      fields: { q: "test" },
    },
  });
  expect(res.status()).toBe(429);
  expect(res.headers()["retry-after"]).toBeTruthy();
});

test("honeypot field triggers silent success (bot trap)", async ({ request }) => {
  const res = await request.post("/api/engage", {
    data: {
      path: "review",
      name: "Bot Test",
      email: "bot@test.com",
      website: "http://spam.com", // honeypot filled
      fields: {},
    },
  });

  // Should return 200 (silent success) but not store
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.ok).toBe(true);
  expect(body.id).toBe("SUB-bot-trap");
});

test("security headers are present", async ({ request }) => {
  const res = await request.get("/");
  const headers = res.headers();

  expect(headers["content-security-policy"]).toBeTruthy();
  expect(headers["strict-transport-security"]).toContain("max-age=31536000");
  expect(headers["x-frame-options"]).toBe("DENY");
  expect(headers["x-content-type-options"]).toBe("nosniff");
  expect(headers["referrer-policy"]).toBeTruthy();
  expect(headers["permissions-policy"]).toBeTruthy();
});

test("invalid JSON body returns 400", async ({ request }) => {
  const res = await request.post("/api/engage", {
    headers: { "Content-Type": "application/json" },
    data: "not valid json",
  });
  expect(res.status()).toBe(400);
});

test("invalid path returns 400", async ({ request }) => {
  const res = await request.post("/api/engage", {
    data: {
      path: "invalid-path",
      name: "Test",
      email: "test@test.com",
    },
  });
  expect(res.status()).toBe(400);
});

test("invalid email returns 400", async ({ request }) => {
  const res = await request.post("/api/engage", {
    data: {
      path: "review",
      name: "Test",
      email: "not-an-email",
    },
  });
  expect(res.status()).toBe(400);
});

test("name too short returns 400", async ({ request }) => {
  const res = await request.post("/api/engage", {
    data: {
      path: "review",
      name: "a", // less than 2 chars
      email: "test@test.com",
    },
  });
  expect(res.status()).toBe(400);
});

test("GET /api/engage returns count (no PII)", async ({ request }) => {
  const res = await request.get("/api/engage");
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.ok).toBe(true);
  expect(typeof body.count).toBe("number");
  expect(body.paths).toEqual(["review", "consult", "build", "refer"]);
  // No PII in response
  const bodyStr = JSON.stringify(body);
  expect(bodyStr).not.toMatch(/name|email/i);
});
