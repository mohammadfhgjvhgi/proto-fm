import { describe, it, expect, beforeEach } from "vitest";
import { rateLimit, getClientIp } from "./rate-limit";

describe("rateLimit", () => {
  beforeEach(() => {
    // Each test gets a fresh IP to avoid cross-test interference
  });

  it("allows first request", () => {
    const result = rateLimit("ip-test-1");
    expect(result.allowed).toBe(true);
    expect(result.remaining).toBe(4); // 5 max - 1 used
  });

  it("allows up to 5 requests", () => {
    const ip = "ip-test-2";
    for (let i = 1; i <= 5; i++) {
      const result = rateLimit(ip);
      expect(result.allowed).toBe(true);
      expect(result.remaining).toBe(5 - i);
    }
  });

  it("blocks 6th request", () => {
    const ip = "ip-test-3";
    for (let i = 0; i < 5; i++) rateLimit(ip);
    const result = rateLimit(ip);
    expect(result.allowed).toBe(false);
    expect(result.remaining).toBe(0);
  });

  it("tracks different IPs independently", () => {
    rateLimit("ip-a");
    rateLimit("ip-a");
    const resultB = rateLimit("ip-b");
    expect(resultB.allowed).toBe(true);
    expect(resultB.remaining).toBe(4);
  });

  it("returns resetAt as future timestamp", () => {
    const before = Date.now();
    const result = rateLimit("ip-test-4");
    const after = Date.now();
    expect(result.resetAt).toBeGreaterThanOrEqual(before + 3500000); // ~58 min
    expect(result.resetAt).toBeLessThanOrEqual(after + 3700000); // ~62 min
  });
});

describe("getClientIp", () => {
  it("extracts IP from x-forwarded-for header", () => {
    const request = new Request("https://example.com", {
      headers: { "x-forwarded-for": "1.2.3.4, 5.6.7.8" },
    });
    expect(getClientIp(request)).toBe("1.2.3.4");
  });

  it("extracts IP from x-real-ip header", () => {
    const request = new Request("https://example.com", {
      headers: { "x-real-ip": "9.9.9.9" },
    });
    expect(getClientIp(request)).toBe("9.9.9.9");
  });

  it("returns 'unknown' when no headers present", () => {
    const request = new Request("https://example.com");
    expect(getClientIp(request)).toBe("unknown");
  });

  it("prioritizes x-forwarded-for over x-real-ip", () => {
    const request = new Request("https://example.com", {
      headers: {
        "x-forwarded-for": "1.1.1.1",
        "x-real-ip": "2.2.2.2",
      },
    });
    expect(getClientIp(request)).toBe("1.1.1.1");
  });
});
