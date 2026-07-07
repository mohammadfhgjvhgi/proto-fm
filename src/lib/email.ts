import { Resend } from "resend";

/**
 * Email service — sends engage form submissions to the engineer.
 * Uses Resend (https://resend.com) — free tier: 100 emails/day.
 *
 * Falls back to DB-only storage if RESEND_API_KEY is not set.
 * To enable: add RESEND_API_KEY to .env + set ENGINEER_EMAIL.
 */

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const ENGINEER_EMAIL = process.env.ENGINEER_EMAIL || "mohammed@example.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "portfolio@resend.dev";

export interface EmailPayload {
  name: string;
  email: string;
  path: string;
  fields?: Record<string, string>;
  submissionId: string;
}

export async function sendEngageEmail(payload: EmailPayload): Promise<boolean> {
  if (!resend) {
    console.warn("[email] RESEND_API_KEY not set — skipping email, DB-only storage");
    return false;
  }

  const { name, email, path, fields, submissionId } = payload;

  const fieldsHtml = fields
    ? Object.entries(fields)
        .map(
          ([key, value]) =>
            `<tr><td style="padding:8px 0;font-weight:600;color:#1a1a1f;border-bottom:1px solid #e8e8ec;">${escapeHtml(key)}</td><td style="padding:8px 0;color:#6e6e76;border-bottom:1px solid #e8e8ec;">${escapeHtml(value)}</td></tr>`
        )
        .join("")
    : "";

  const pathLabels: Record<string, { ar: string; en: string }> = {
    review: { ar: "تقييم مشروع", en: "Project review" },
    consult: { ar: "استشارة تقنية", en: "Technical consult" },
    build: { ar: "تنفيذ مشروع", en: "Build a project" },
    refer: { ar: "توصية أو مرجع", en: "Reference" },
  };

  const pathLabel = pathLabels[path] || { ar: path, en: path };

  const html = `
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<body style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#f5f5f7;">
  <div style="background:#fff;border-radius:12px;padding:32px;">
    <h1 style="font-size:20px;color:#1a1a1f;margin:0 0 16px;">📨 رسالة جديدة من البروتوفوليو</h1>
    <p style="color:#6e6e76;font-size:14px;margin:0 0 24px;">A new message from your portfolio.</p>

    <table style="width:100%;font-size:14px;border-collapse:collapse;">
      <tr><td style="padding:8px 0;font-weight:600;color:#1a1a1f;">النوع / Type</td><td style="padding:8px 0;color:#6e6e76;">${pathLabel.ar} / ${pathLabel.en}</td></tr>
      <tr><td style="padding:8px 0;font-weight:600;color:#1a1a1f;border-bottom:1px solid #e8e8ec;">الاسم / Name</td><td style="padding:8px 0;color:#6e6e76;border-bottom:1px solid #e8e8ec;">${escapeHtml(name)}</td></tr>
      <tr><td style="padding:8px 0;font-weight:600;color:#1a1a1f;border-bottom:1px solid #e8e8ec;">البريد / Email</td><td style="padding:8px 0;color:#6e6e76;border-bottom:1px solid #e8e8ec;">${escapeHtml(email)}</td></tr>
      ${fieldsHtml}
    </table>

    <div style="margin-top:24px;padding:16px;background:#f0f4f8;border-radius:8px;">
      <p style="font-size:12px;color:#6e6e76;margin:0;">Submission ID: <code style="font-family:monospace;">${escapeHtml(submissionId)}</code></p>
      <p style="font-size:12px;color:#6e6e76;margin:8px 0 0;">⚠️ لا ترد على هذا البريد مباشرةً — استخدم بريد المرسل أعلاه.</p>
    </div>
  </div>
</body>
</html>
  `.trim();

  const text = `New submission (${pathLabel.en})\n\nName: ${name}\nEmail: ${email}\nID: ${submissionId}\n${fields ? Object.entries(fields).map(([k, v]) => `${k}: ${v}`).join("\n") : ""}`;

  try {
    const { error } = await resend.emails.send({
      from: `Portfolio <${FROM_EMAIL}>`,
      to: [ENGINEER_EMAIL],
      replyTo: email,
      subject: `📨 ${pathLabel.ar} — ${name}`,
      html,
      text,
    });

    if (error) {
      console.error("[email] Resend error:", error);
      return false;
    }

    console.warn("[email] sent successfully to", ENGINEER_EMAIL);
    return true;
  } catch (err) {
    console.error("[email] send failed:", err);
    return false;
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
