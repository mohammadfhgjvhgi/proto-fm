/**
 * Simple in-memory rate limiter (IP-based).
 * For production use @upstash/ratelimit with Redis.
 * Limits: 5 requests per hour per IP for the engage endpoint.
 */

const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;

interface Hit {
  count: number;
  resetAt: number;
}

const hits = new Map<string, Hit>();

// Periodic cleanup every 10 minutes to avoid unbounded growth
let lastCleanup = Date.now();
function cleanup() {
  const now = Date.now();
  if (now - lastCleanup < 10 * 60 * 1000) return;
  lastCleanup = now;
  for (const [ip, hit] of hits) {
    if (now > hit.resetAt) hits.delete(ip);
  }
}

export function rateLimit(ip: string): { allowed: boolean; remaining: number; resetAt: number } {
  cleanup();
  const now = Date.now();
  const existing = hits.get(ip);

  if (!existing || now > existing.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, remaining: MAX_REQUESTS - 1, resetAt: now + WINDOW_MS };
  }

  existing.count++;
  if (existing.count > MAX_REQUESTS) {
    return { allowed: false, remaining: 0, resetAt: existing.resetAt };
  }

  return { allowed: true, remaining: MAX_REQUESTS - existing.count, resetAt: existing.resetAt };
}

/** Extract client IP from request (handles proxies). */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}
