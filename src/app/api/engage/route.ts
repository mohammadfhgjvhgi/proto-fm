import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * Engage form backend — in-memory storage (no DB dependency).
 * Submissions persist for the server's lifetime. Suitable for dev
 * and any Node.js host. For production, forward to email or Formspree.
 */

const engagementPaths = ["review", "consult", "build", "refer"] as const;

const engageSchema = z.object({
  path: z.enum(engagementPaths),
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  fields: z.record(z.string(), z.string()).optional(),
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
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
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

  const record = {
    id: `SUB-${Date.now().toString(36)}`,
    receivedAt: new Date().toISOString(),
    ...parsed.data,
  };

  submissions.push(record);
  console.log("[engage] new submission:", record.id, record.path);

  return NextResponse.json({
    ok: true,
    id: record.id,
    message:
      "Received. I will respond within 48 hours. — وصلتني رسالتك. أرد خلال 48 ساعة.",
  });
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    count: submissions.length,
    paths: engagementPaths,
  });
}
