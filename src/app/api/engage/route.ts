import { NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

/**
 * Engage form backend — in-memory storage with rate limiting + honeypot.
 * - Rate limit: 5 requests/hour/IP
 * - Honeypot: hidden "website" field — bots fill it, humans don't
 * - Zod validation on all input
 */

const engagementPaths = ["review", "consult", "build", "refer"] as const;

const engageSchema = z.object({
  path: z.enum(engagementPaths),
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  fields: z.record(z.string(), z.string()).optional(),
  // Honeypot — must be empty for legit submissions
  website: z.string().max(0).optional(),
});

const submissions: Array<{
  id: string;
  receivedAt: string;
  path: string;
  name: string;
  email: string;
  fields?: Record<string, string>;
}> = [];

export async function POST(request: Request) {
  // Rate limiting
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

  // Honeypot check — silently accept but don't store (bot trap)
  if (parsed.data.website) {
    // Pretend success to not tip off the bot
    return NextResponse.json({ ok: true, id: "SUB-bot-trap", message: "Received." });
  }

  const record = {
    id: `SUB-${Date.now().toString(36)}`,
    receivedAt: new Date().toISOString(),
    path: parsed.data.path,
    name: parsed.data.name,
    email: parsed.data.email,
    fields: parsed.data.fields,
  };

  submissions.push(record);
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
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    count: submissions.length,
    paths: engagementPaths,
  });
}
