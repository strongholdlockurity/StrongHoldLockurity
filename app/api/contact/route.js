/**
 * POST /api/contact — contact form handler.
 *
 * Replaces the Express route of the same path. The form posts FormData
 * (multipart), which this reads natively; the previous Express version only
 * parsed urlencoded bodies, so this is also a fix.
 *
 * Required environment variables are listed in .env.example.
 */
import nodemailer from "nodemailer";
import { supabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAIL_TO = process.env.MAIL_TO || "stronghold@strongholdlockurity.com";
const MAIL_FROM = process.env.MAIL_FROM || process.env.SMTP_USER;
const PHONE = "(470) 827-7019";

/* ------------------------------ mail transport ------------------------------ */

let transport = null;
function mailer() {
  if (transport) return transport;
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;
  const port = Number(SMTP_PORT || 465);
  transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
  return transport;
}

/* --------------------------------- storage ---------------------------------- */
/* The submission is written to Supabase before the email goes out, so an SMTP
   failure cannot lose an enquiry. Every function here swallows its own errors:
   storage is a safety net and must never be the reason a visitor sees a
   failure. RLS on contact_submissions has no policies, so only this route's
   service-role key can read or write the table. */

async function store(row) {
  const db = supabaseAdmin();
  if (!db) {
    console.warn("[contact] Supabase is not configured — submission will not be stored.");
    return null;
  }
  const { data, error } = await db
    .from("contact_submissions")
    .insert(row)
    .select("id")
    .single();
  if (error) {
    console.error("[contact] store failed:", error.message);
    return null;
  }
  return data.id;
}

async function markEmail(id, sent, error) {
  if (!id) return;
  const db = supabaseAdmin();
  if (!db) return;
  const { error: err } = await db
    .from("contact_submissions")
    .update({ email_sent: sent, email_error: error ? String(error).slice(0, 500) : null })
    .eq("id", id);
  if (err) console.error("[contact] status update failed:", err.message);
}

/* -------------------------------- rate limit -------------------------------- */
/* In memory, so it is per server instance. Enough to stop a bored script; it
   resets on redeploy and does not coordinate across multiple processes. */

const hits = new Map();
const WINDOW = 15 * 60 * 1000;
const MAX = 5;

function rateLimited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < WINDOW);
  if (list.length >= MAX) {
    hits.set(ip, list);
    return true;
  }
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (!v.some((t) => now - t < WINDOW)) hits.delete(k);
  }
  return false;
}

function clientIp(req) {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

/* --------------------------------- handler ---------------------------------- */

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

export async function POST(req) {
  const bad = (error, code = 422) => json({ ok: false, error }, code);
  const ip = clientIp(req);

  if (rateLimited(ip)) {
    return bad(`Too many requests from this connection. Please call ${PHONE}.`, 429);
  }

  let data;
  try {
    const type = req.headers.get("content-type") || "";
    if (type.includes("application/json")) {
      const body = await req.json();
      data = new Map(Object.entries(body ?? {}));
    } else {
      data = await req.formData();
    }
  } catch {
    return bad("We could not read that submission. Please try again.", 400);
  }
  const f = (k) => String(data.get(k) ?? "").trim();

  // Honeypot — a real browser never fills a hidden field.
  if (f("website")) return bad("Rejected.");

  // Timing — seconds the form was open, sent by the page.
  const t = Number(f("t"));
  if (Number.isFinite(t) && t < 3) return bad("That was too fast — please try again.");

  // Math question.
  const a = Number(f("a"));
  const b = Number(f("b"));
  if (!f("sum") || Number(f("sum")) !== a + b) {
    return bad("The answer to the math question was not correct.");
  }

  const name = f("name");
  const email = f("email");
  const phone = f("phone");
  const need = f("need");
  const message = f("message");

  if (!name) return bad("Please enter your name.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return bad("Please enter a valid email address.");
  if (phone.replace(/\D/g, "").length < 10) return bad("Please enter a full phone number.");
  if (!need) return bad("Please choose what you need help with.");
  if (!message) return bad("Please tell us a little about the job.");
  if (/[\r\n]/.test(name + email + phone)) return bad("Rejected.");

  const submissionId = await store({
    name,
    company: f("company") || null,
    email,
    phone,
    preferred_contact: f("contact") || null,
    need,
    property_type: f("property") || null,
    message,
    source_ip: ip,
    referer: req.headers.get("referer") || null,
    user_agent: req.headers.get("user-agent") || null,
  });

  const tx = mailer();
  if (!tx) {
    console.error("[contact] SMTP is not configured — set SMTP_HOST, SMTP_USER and SMTP_PASS.");
    await markEmail(submissionId, false, "SMTP is not configured.");
    // Stored, so nothing is lost even with no mail transport. Thank the
    // visitor rather than sending them away.
    if (submissionId) return json({ ok: true });
    return json(
      { ok: false, error: `Our contact form is not available right now. Please call ${PHONE} or email us directly.` },
      503
    );
  }

  const body = [
    "New security assessment request — strongholdlockurity.com",
    "",
    `Name:              ${name}`,
    `Company:           ${f("company") || "—"}`,
    `Email:             ${email}`,
    `Phone:             ${phone}`,
    `Preferred contact: ${f("contact") || "—"}`,
    "",
    `Service needed:    ${need}`,
    `Property type:     ${f("property") || "—"}`,
    "",
    "Message:",
    message,
    "",
    "---",
    `Submitted: ${new Date().toUTCString()}`,
    `IP:        ${ip}`,
    `Page:      ${req.headers.get("referer") || "unknown"}`,
    `Record:    ${submissionId || "not stored"}`,
  ].join("\n");

  try {
    await tx.sendMail({
      to: MAIL_TO,
      from: `Stronghold Lockurity Website <${MAIL_FROM}>`,
      replyTo: `${name} <${email}>`,
      subject: `Assessment request — ${name} (${need})`,
      text: body,
    });
    await markEmail(submissionId, true, null);
    return json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed:", err.message);
    await markEmail(submissionId, false, err.message);
    // The row is safe in the database, so this is our problem to chase, not
    // something to make the visitor retype.
    if (submissionId) return json({ ok: true });
    return json(
      { ok: false, error: `We could not send that just now. Please call ${PHONE} or email us directly.` },
      500
    );
  }
}

export function GET() {
  return json({ ok: false, error: "Method not allowed." }, 405);
}
