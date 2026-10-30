/**
 * /api/chat — Real-time 2-way chat API backed by Supabase + Hostinger SMTP.
 *
 * Stores chat threads in `contact_submissions` (with `need = "Live Chat"`) so
 * it works out-of-the-box with zero manual database migrations while keeping
 * every chat transcript visible in the Supabase Table Editor.
 */
import crypto from "crypto";
import nodemailer from "nodemailer";
import { supabaseAdmin } from "@/lib/supabase";
import { generateSiteAssistantReply } from "@/lib/chat-knowledge";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAIL_TO = process.env.MAIL_TO || "stronghold@strongholdlockurity.com";
const MAIL_FROM = process.env.MAIL_FROM || process.env.SMTP_USER;
const PHONE = "(470) 827-7019";
const CHAT_MARKER = "\n\n---CHAT_DATA---\n";

function getAdminPin() {
  return (process.env.CHAT_ADMIN_PIN || "30318").trim();
}

function getSecret() {
  return (
    process.env.CHAT_SECRET ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    "stronghold-lockurity-chat-secret"
  ).trim();
}

function signToken(payload) {
  return crypto.createHmac("sha256", getSecret()).update(payload).digest("hex");
}

function makeVisitorToken(sessionId) {
  return signToken(`visitor:${sessionId}`);
}

function makeSessionAdminToken(sessionId) {
  return signToken(`admin-session:${sessionId}`);
}

function makeMasterAdminToken() {
  return signToken(`admin-master:${getAdminPin()}`);
}

function safeEqual(a, b) {
  if (!a || !b || typeof a !== "string" || typeof b !== "string") return false;
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

function isAdminAuthorized(token, sessionId = null) {
  if (!token) return false;
  if (safeEqual(token, makeMasterAdminToken())) return true;
  if (sessionId && safeEqual(token, makeSessionAdminToken(String(sessionId)))) return true;
  return false;
}

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

/* --------------------- serialization & fallback storage --------------------- */

const memoryStore = new Map();

function serializeChatMessage(chatData) {
  const lines = (chatData.messages || []).map((m) => {
    const who =
      m.sender === "admin"
        ? m.auto
          ? "Stronghold Assistant (Auto)"
          : "Stronghold Lockurity"
        : chatData.visitor?.name || "Visitor";
    const time = m.ts ? new Date(m.ts).toLocaleString("en-US", { timeZone: "America/New_York" }) : "";
    return `[${who} — ${time}]\n${m.text}`;
  });
  return `${lines.join("\n\n")}${CHAT_MARKER}${JSON.stringify(chatData)}`;
}

function parseChatRow(row) {
  if (!row) return null;
  const raw = String(row.message || "");
  const idx = raw.indexOf(CHAT_MARKER);
  let chatData = null;
  if (idx !== -1) {
    try {
      chatData = JSON.parse(raw.slice(idx + CHAT_MARKER.length));
    } catch {
      chatData = null;
    }
  }
  const cleanEmail =
    row.email && !row.email.endsWith("@chat.stronghold.local") ? row.email : "";
  const cleanPhone =
    row.phone && row.phone !== "Not provided" ? row.phone : "";

  if (!chatData) {
    chatData = {
      v: 1,
      status: "open",
      visitor: {
        name: row.name || "Visitor",
        email: cleanEmail,
        phone: cleanPhone,
        page: row.referer || "",
      },
      messages: raw
        ? [
            {
              id: "m-initial",
              sender: "visitor",
              text: raw,
              ts: row.created_at || new Date().toISOString(),
            },
          ]
        : [],
    };
  }

  const messages = Array.isArray(chatData.messages) ? chatData.messages : [];
  const lastMsg = messages[messages.length - 1] || null;

  return {
    id: String(row.id),
    createdAt: row.created_at || chatData.createdAt || new Date().toISOString(),
    updatedAt: lastMsg?.ts || row.created_at || new Date().toISOString(),
    status: chatData.status || "open",
    visitor: {
      name: chatData.visitor?.name || row.name || "Visitor",
      email: chatData.visitor?.email ?? cleanEmail,
      phone: chatData.visitor?.phone ?? cleanPhone,
      page: chatData.visitor?.page || row.referer || "",
    },
    messages,
  };
}

async function createChatSession({ name, email, phone, page, initialText, autoReply, ip, userAgent }) {
  const now = new Date().toISOString();
  const initialMessages = [
    {
      id: `msg_${Date.now()}_v`,
      sender: "visitor",
      text: initialText,
      ts: now,
    },
  ];
  if (autoReply) {
    initialMessages.push({
      id: `msg_${Date.now() + 1}_bot`,
      sender: "admin",
      auto: true,
      text: autoReply,
      ts: new Date(Date.now() + 250).toISOString(),
    });
  }
  const chatData = {
    v: 1,
    createdAt: now,
    status: "open",
    visitor: { name, email, phone, page },
    messages: initialMessages,
  };

  const serialized = serializeChatMessage(chatData);
  const db = supabaseAdmin();

  if (db) {
    const { data, error } = await db
      .from("contact_submissions")
      .insert({
        name,
        company: null,
        email: email || "no-email@chat.stronghold.local",
        phone: phone || "Not provided",
        preferred_contact: "Live Chat",
        need: "Live Chat",
        property_type: "Chat: Open",
        message: serialized,
        source_ip: ip,
        referer: page || null,
        user_agent: userAgent || null,
      })
      .select("*")
      .single();

    if (!error && data) {
      return parseChatRow(data);
    }
    console.error("[chat] Supabase insert failed, using memory fallback:", error?.message);
  }

  const memId = `local_${Date.now()}`;
  const memRow = {
    id: memId,
    created_at: now,
    name,
    email: email || "no-email@chat.stronghold.local",
    phone: phone || "Not provided",
    need: "Live Chat",
    property_type: "Chat: Open",
    message: serialized,
    referer: page || null,
  };
  memoryStore.set(memId, memRow);
  return parseChatRow(memRow);
}

async function getChatSession(sessionId) {
  const idStr = String(sessionId);
  if (memoryStore.has(idStr)) {
    return parseChatRow(memoryStore.get(idStr));
  }
  const db = supabaseAdmin();
  if (!db) return null;
  const { data, error } = await db
    .from("contact_submissions")
    .select("*")
    .eq("id", sessionId)
    .eq("need", "Live Chat")
    .single();
  if (error || !data) return null;
  return parseChatRow(data);
}

async function saveChatSession(session) {
  const chatData = {
    v: 1,
    createdAt: session.createdAt,
    status: session.status,
    visitor: session.visitor,
    messages: session.messages,
  };
  const serialized = serializeChatMessage(chatData);
  const propLabel =
    session.status === "closed"
      ? "Chat: Closed"
      : session.status === "replied"
        ? "Chat: Replied"
        : "Chat: Open";

  const idStr = String(session.id);
  if (memoryStore.has(idStr)) {
    const existing = memoryStore.get(idStr);
    existing.message = serialized;
    existing.property_type = propLabel;
    memoryStore.set(idStr, existing);
    return parseChatRow(existing);
  }

  const db = supabaseAdmin();
  if (!db) return session;
  const { data, error } = await db
    .from("contact_submissions")
    .update({
      message: serialized,
      property_type: propLabel,
    })
    .eq("id", session.id)
    .select("*")
    .single();

  if (error || !data) {
    console.error("[chat] Supabase update failed:", error?.message);
    return session;
  }
  return parseChatRow(data);
}

async function listChatSessions() {
  const list = [];
  for (const row of memoryStore.values()) {
    const parsed = parseChatRow(row);
    if (parsed) list.push(parsed);
  }
  const db = supabaseAdmin();
  if (db) {
    const { data, error } = await db
      .from("contact_submissions")
      .select("*")
      .eq("need", "Live Chat")
      .order("created_at", { ascending: false })
      .limit(60);
    if (!error && Array.isArray(data)) {
      for (const row of data) {
        const parsed = parseChatRow(row);
        if (parsed) list.push(parsed);
      }
    }
  }
  return list.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
}

/* ------------------------------ notifications ------------------------------- */

function escapeHtml(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getSiteOrigin(req) {
  const proto = req.headers.get("x-forwarded-proto") || "https";
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host");
  if (host) return `${proto}://${host}`;
  return "https://strongholdlockurity.com";
}

async function notifyAdminOfVisitorMessage(req, session, latestText, isNewSession) {
  const tx = mailer();
  if (!tx) {
    console.warn("[chat] SMTP not configured — skipping admin email alert.");
    return false;
  }
  const origin = getSiteOrigin(req);
  const adminToken = makeMasterAdminToken();
  const replyUrl = `${origin}/admin/chat?session=${encodeURIComponent(session.id)}&token=${encodeURIComponent(adminToken)}`;
  const { name, email, phone, page } = session.visitor;

  const subject = isNewSession
    ? `New Live Chat from ${name} — Stronghold Lockurity`
    : `New chat reply from ${name} — Stronghold Lockurity`;

  const textBody = [
    isNewSession
      ? "New live chat started on strongholdlockurity.com"
      : `New message in live chat with ${name}`,
    "",
    `Visitor: ${name}`,
    `Phone:   ${phone || "Not provided"}`,
    `Email:   ${email || "Not provided"}`,
    `Page:    ${page || "strongholdlockurity.com"}`,
    "",
    "Latest Message:",
    latestText,
    "",
    "---",
    "One-Click Reply in Live Chat Console:",
    replyUrl,
  ].join("\n");

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #101010; color: #f2f2f2; padding: 28px; border-radius: 8px; max-width: 580px;">
      <div style="font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: #00d992; font-weight: 600; margin-bottom: 8px;">
        STRONGHOLD LOCKURITY — LIVE CHAT
      </div>
      <h2 style="margin: 0 0 16px; color: #ffffff; font-size: 20px;">
        ${isNewSession ? `New chat from ${escapeHtml(name)}` : `New message from ${escapeHtml(name)}`}
      </h2>
      <div style="background: #1a1a1a; border-left: 3px solid #00d992; padding: 14px 16px; border-radius: 4px; margin-bottom: 20px; color: #ffffff; font-size: 15px; line-height: 1.5; white-space: pre-wrap;">${escapeHtml(latestText)}</div>
      <div style="margin-bottom: 22px;">
        <a href="${replyUrl}" style="display: inline-block; background: #00d992; color: #101010; font-weight: 700; text-decoration: none; padding: 12px 20px; border-radius: 6px; font-size: 14px;">
          Open Live Chat &amp; Reply →
        </a>
      </div>
      <table style="width: 100%; border-collapse: collapse; font-size: 13px; color: #bdbdbd; border-top: 1px solid #3d3a39; padding-top: 12px;">
        <tr><td style="padding: 6px 0; color: #8b949e; width: 90px;">Name:</td><td style="padding: 6px 0; color: #f2f2f2;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 6px 0; color: #8b949e;">Phone:</td><td style="padding: 6px 0; color: #f2f2f2;">${phone ? `<a href="tel:${escapeHtml(phone)}" style="color: #00d992;">${escapeHtml(phone)}</a>` : "Not provided"}</td></tr>
        <tr><td style="padding: 6px 0; color: #8b949e;">Email:</td><td style="padding: 6px 0; color: #f2f2f2;">${email ? `<a href="mailto:${escapeHtml(email)}" style="color: #00d992;">${escapeHtml(email)}</a>` : "Not provided"}</td></tr>
        <tr><td style="padding: 6px 0; color: #8b949e;">Page:</td><td style="padding: 6px 0; color: #bdbdbd;">${escapeHtml(page || "strongholdlockurity.com")}</td></tr>
      </table>
    </div>
  `;

  try {
    await tx.sendMail({
      to: MAIL_TO,
      from: `Stronghold Lockurity Live Chat <${MAIL_FROM}>`,
      ...(email ? { replyTo: `${name} <${email}>` } : {}),
      subject,
      text: textBody,
      html: htmlBody,
    });
    return true;
  } catch (err) {
    console.error("[chat] Failed to email admin:", err.message);
    return false;
  }
}

async function notifyVisitorOfAdminReply(req, session, replyText) {
  const visitorEmail = session.visitor?.email;
  if (!visitorEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(visitorEmail)) {
    return false;
  }
  const tx = mailer();
  if (!tx) return false;

  const origin = getSiteOrigin(req);
  const recentTranscript = (session.messages || [])
    .slice(-6)
    .map((m) => {
      const who = m.sender === "admin" ? "Stronghold Lockurity" : session.visitor?.name || "You";
      return `${who}: ${m.text}`;
    })
    .join("\n\n");

  const textBody = [
    `Hi ${session.visitor.name || "there"},`,
    "",
    "Stronghold Lockurity just replied to your live chat:",
    "",
    `"${replyText}"`,
    "",
    "You can continue chatting live on our website, reply directly to this email, or call us anytime at " + PHONE + ".",
    "",
    `Continue on website: ${origin}`,
    "",
    "--- Recent Conversation ---",
    recentTranscript,
  ].join("\n");

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #101010; color: #f2f2f2; padding: 28px; border-radius: 8px; max-width: 580px;">
      <div style="font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: #00d992; font-weight: 600; margin-bottom: 8px;">
        STRONGHOLD LOCKURITY
      </div>
      <h2 style="margin: 0 0 12px; color: #ffffff; font-size: 19px;">
        New reply from Stronghold Lockurity
      </h2>
      <p style="color: #bdbdbd; font-size: 14px; margin: 0 0 16px;">
        Hi ${escapeHtml(session.visitor.name || "there")}, our team replied to your message:
      </p>
      <div style="background: #1a1a1a; border-left: 3px solid #00d992; padding: 14px 16px; border-radius: 4px; margin-bottom: 20px; color: #ffffff; font-size: 15px; line-height: 1.5; white-space: pre-wrap;">${escapeHtml(replyText)}</div>
      <p style="color: #bdbdbd; font-size: 13px; line-height: 1.5; margin-bottom: 20px;">
        Still on the site? Your chat window updates automatically. You can also reply directly to this email or call us at <a href="tel:+14708277019" style="color: #00d992; text-decoration: none; font-weight: 600;">${PHONE}</a> (24/7 emergency service).
      </p>
      <a href="${origin}" style="display: inline-block; background: #00d992; color: #101010; font-weight: 700; text-decoration: none; padding: 10px 18px; border-radius: 6px; font-size: 13px;">
        Return to Stronghold Lockurity →
      </a>
    </div>
  `;

  try {
    await tx.sendMail({
      to: visitorEmail,
      from: `Stronghold Lockurity <${MAIL_FROM}>`,
      replyTo: `Stronghold Lockurity <${MAIL_TO}>`,
      subject: "Re: Your chat with Stronghold Lockurity",
      text: textBody,
      html: htmlBody,
    });
    return true;
  } catch (err) {
    console.error("[chat] Failed to email visitor:", err.message);
    return false;
  }
}

/* -------------------------------- rate limit -------------------------------- */

const hits = new Map();
const WINDOW = 10 * 60 * 1000;
const MAX_STARTS = 10;

function rateLimited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < WINDOW);
  if (list.length >= MAX_STARTS) {
    hits.set(ip, list);
    return true;
  }
  list.push(now);
  hits.set(ip, list);
  return false;
}

function clientIp(req) {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

/* --------------------------------- handlers --------------------------------- */

export async function GET(req) {
  const url = new URL(req.url);
  const isAdmin = url.searchParams.get("admin") === "1";
  const sessionId = url.searchParams.get("session");
  const token = url.searchParams.get("token") || req.headers.get("x-chat-token") || "";

  if (isAdmin) {
    if (!isAdminAuthorized(token, sessionId)) {
      return json({ ok: false, error: "Unauthorized" }, 401);
    }
    const sessions = await listChatSessions();
    return json({ ok: true, sessions });
  }

  if (!sessionId || !token) {
    return json({ ok: false, error: "Missing session or token." }, 400);
  }

  if (!safeEqual(token, makeVisitorToken(String(sessionId)))) {
    return json({ ok: false, error: "Invalid session token." }, 403);
  }

  const session = await getChatSession(sessionId);
  if (!session) {
    return json({ ok: false, error: "Chat session not found." }, 404);
  }

  return json({ ok: true, session });
}

export async function POST(req) {
  const bad = (error, code = 422) => json({ ok: false, error }, code);
  let body;
  try {
    body = await req.json();
  } catch {
    return bad("Invalid request payload.", 400);
  }

  const action = String(body?.action || "");

  // 1. Visitor starts a new chat session
  if (action === "start") {
    const ip = clientIp(req);
    if (rateLimited(ip)) {
      return bad(`Too many new chats from this connection. Please call ${PHONE}.`, 429);
    }

    if (String(body.website || "").trim()) {
      return bad("Rejected.");
    }

    const name = String(body.name || "").trim().slice(0, 120);
    const email = String(body.email || "").trim().slice(0, 160);
    const phone = String(body.phone || "").trim().slice(0, 60);
    const message = String(body.message || "").trim().slice(0, 2000);
    const page = String(body.page || req.headers.get("referer") || "").trim().slice(0, 300);

    if (!name) return bad("Please enter your name.");
    const hasValidEmail = email && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    const hasValidPhone = phone && phone.replace(/\D/g, "").length >= 10;

    if (!hasValidEmail && !hasValidPhone) {
      return bad("Please enter a valid phone number or email address so we can reach you.");
    }
    if (email && !hasValidEmail) {
      return bad("That email address doesn't look right.");
    }
    if (phone && !hasValidPhone) {
      return bad("Please enter a full 10-digit phone number.");
    }
    if (!message) {
      return bad("Please enter your question or message.");
    }

    const autoReply = await generateSiteAssistantReply(message, null);

    const session = await createChatSession({
      name,
      email: hasValidEmail ? email : "",
      phone: hasValidPhone ? phone : "",
      page,
      initialText: message,
      autoReply,
      ip,
      userAgent: req.headers.get("user-agent") || null,
    });

    await notifyAdminOfVisitorMessage(req, session, message, true);

    return json({
      ok: true,
      sessionId: session.id,
      visitorToken: makeVisitorToken(session.id),
      session,
    });
  }

  // 2. Visitor sends a follow-up message
  if (action === "visitor_message") {
    const sessionId = String(body.sessionId || "");
    const token = String(body.visitorToken || "");
    const text = String(body.message || "").trim().slice(0, 2000);

    if (!sessionId || !safeEqual(token, makeVisitorToken(sessionId))) {
      return bad("Unauthorized chat session.", 403);
    }
    if (!text) return bad("Please enter a message.");

    const session = await getChatSession(sessionId);
    if (!session) return bad("Chat session not found.", 404);

    session.messages.push({
      id: `msg_${Date.now()}_v`,
      sender: "visitor",
      text,
      ts: new Date().toISOString(),
    });
    session.status = "open";

    const autoReply = await generateSiteAssistantReply(text, session);
    if (autoReply) {
      session.messages.push({
        id: `msg_${Date.now() + 1}_bot`,
        sender: "admin",
        auto: true,
        text: autoReply,
        ts: new Date(Date.now() + 250).toISOString(),
      });
    }

    const updated = await saveChatSession(session);
    await notifyAdminOfVisitorMessage(req, updated, text, false);

    return json({ ok: true, session: updated });
  }

  // 3. Admin PIN / Token authentication
  if (action === "admin_auth") {
    const pin = String(body.pin || "").trim();
    const token = String(body.token || "").trim();
    const sessionId = body.sessionId ? String(body.sessionId) : null;

    if (token && isAdminAuthorized(token, sessionId)) {
      return json({ ok: true, adminToken: makeMasterAdminToken() });
    }
    if (pin && safeEqual(pin, getAdminPin())) {
      return json({ ok: true, adminToken: makeMasterAdminToken() });
    }
    return bad("Incorrect admin PIN.", 401);
  }

  // 4. Admin sends a reply to visitor
  if (action === "admin_reply") {
    const sessionId = String(body.sessionId || "");
    const token = String(body.adminToken || "");
    const text = String(body.message || "").trim().slice(0, 4000);

    if (!isAdminAuthorized(token, sessionId)) {
      return bad("Unauthorized.", 401);
    }
    if (!sessionId || !text) {
      return bad("Session ID and reply message are required.");
    }

    const session = await getChatSession(sessionId);
    if (!session) return bad("Chat session not found.", 404);

    session.messages.push({
      id: `msg_${Date.now()}_a`,
      sender: "admin",
      text,
      ts: new Date().toISOString(),
    });
    session.status = "replied";

    const updated = await saveChatSession(session);
    const visitorEmailed = await notifyVisitorOfAdminReply(req, updated, text);

    return json({ ok: true, session: updated, visitorEmailed });
  }

  // 5. Admin updates status (e.g. close / reopen)
  if (action === "admin_status") {
    const sessionId = String(body.sessionId || "");
    const token = String(body.adminToken || "");
    const status = body.status === "closed" ? "closed" : "open";

    if (!isAdminAuthorized(token, sessionId)) {
      return bad("Unauthorized.", 401);
    }
    const session = await getChatSession(sessionId);
    if (!session) return bad("Chat session not found.", 404);

    session.status = status;
    const updated = await saveChatSession(session);
    return json({ ok: true, session: updated });
  }

  return bad("Unknown action.", 400);
}

