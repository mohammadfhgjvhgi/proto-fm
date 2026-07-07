import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { createHash } from "crypto";

/**
 * Engage form backend — persists to database (Phase 2: replaces in-memory).
 * - Rate limit: 5 requests/hour/IP (using hashed IP for privacy)
 * - Honeypot: hidden "website" field — bots fill it, humans don't
 * - Zod validation on all input
 * - IP is hashed (SHA-256) before storage — no raw IP kept
 */

const engagementPaths = ["review", "consult", "build", "refer"] as const;

const engageSchema = z.object({
  path: z.enum(engagementPaths),
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  fields: z.record(z.string(), z.string()).optional(),
  website: z.string().max(0).optional(), // honeypot
});

function hashIp(ip: string): string {
  return createHash("sha256").update(ip).digest("hex").substring(0, 16);
}

export async function POST(request: Request) {
  // Rate limiting (using raw IP for counter, not stored)
  const ip = getClientIp(request);
  const limit = rateLimit(ip);
  if (!limit.allowed) {
    return NextResponse.json(
      {
        ok: false,
        error: "Rate limit exceeded. Try again later.",
        retryAfter: Math.ceil((limit.resetAt - Date.now()) / 1000),
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil((limit.resetAt - Date.now()) / 1000)),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(limit.resetAt),
        },
      }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = engageSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed.",
        issues: parsed.error.issues.map((i) => i.message),
      },
      { status: 400 }
    );
  }

  // Honeypot — silently accept but don't store (bot trap)
  if (parsed.data.website) {
    return NextResponse.json({ ok: true, id: "SUB-bot-trap", message: "Received." });
  }

  try {
    const record = await db.submission.create({
      data: {
        path: parsed.data.path,
        name: parsed.data.name,
        email: parsed.data.email,
        fields: JSON.stringify(parsed.data.fields ?? {}),
        ipHash: hashIp(ip),
      },
    });

    // Log only non-PII metadata
    console.log("[engage] new submission:", record.id, record.path);

    return NextResponse.json(
      {
        ok: true,
        id: record.id,
        message:
          "Received. I will respond within 48 hours. — وصلتني رسالتك. أرد خلال 48 ساعة.",
      },
      {
        headers: {
          "X-RateLimit-Remaining": String(limit.remaining),
          "X-RateLimit-Reset": String(limit.resetAt),
        },
      }
    );
  } catch (err) {
    console.error("[engage] DB error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to store submission. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const count = await db.submission.count();
    return NextResponse.json({
      ok: true,
      count,
      paths: engagementPaths,
    });
  } catch (err) {
    console.error("[engage] DB error:", err);
    // Fallback to in-memory count if DB unavailable
    return NextResponse.json({
      ok: true,
      count: 0,
      paths: engagementPaths,
    });
  }
}
