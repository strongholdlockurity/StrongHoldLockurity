/**
 * Environment check for the contact form.
 *
 *   npm run check
 *
 * Reports what is configured, then tries a real insert and deletes it again.
 * Never prints the key itself — only its prefix and length, which is enough
 * to spot a truncated paste or the wrong key type.
 */
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

const pad = (s) => String(s).padEnd(26);
const ok = (m) => console.log(`  PASS  ${m}`);
const no = (m) => console.log(`  FAIL  ${m}`);

console.log("\nSupabase\n");

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log(`  ${pad("SUPABASE_URL")}${url || "(not set)"}`);
if (key) {
  const wrapped = /^["'<]|["'>]$/.test(key);
  const clean = key.trim().replace(/^["'<]|["'>]$/g, "").trim();
  const shape = clean.startsWith("sb_secret_")
    ? "sb_secret_ (current format)"
    : clean.startsWith("sb_publishable_")
      ? "sb_publishable_ — this is the PUBLIC key, not the secret one"
      : clean.startsWith("eyJ")
        ? "eyJ… legacy JWT"
        : "unrecognised prefix";
  console.log(`  ${pad("key format")}${shape}`);
  console.log(`  ${pad("key length")}${key.length} characters`);
  if (wrapped) {
    no("the key has brackets or quotes around it in .env — remove them");
    console.log("\n        Write it bare, with nothing around the value:");
    console.log("          SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...");
    console.log("        not:");
    console.log("          SUPABASE_SERVICE_ROLE_KEY=<eyJhbGci...>\n");
  }
  if (/\s/.test(key)) no("the key contains whitespace or a line break — it was pasted wrapped");
  if (!wrapped && shape === "unrecognised prefix") {
    const first = key.codePointAt(0);
    no(`the key starts with an unexpected character (code point ${first})`);
    console.log("\n        Something is prepended to the value. Delete the line and");
    console.log("        paste the key again from the Supabase dashboard.\n");
  }
} else {
  console.log(`  ${pad("key")}(not set)`);
}
console.log("");

if (!url || !key) {
  no("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must both be set in .env");
} else {
  const db = createClient(url, key, { auth: { persistSession: false } });
  const { data, error } = await db
    .from("contact_submissions")
    .insert({
      name: "Environment check",
      email: "check@example.com",
      phone: "0000000000",
      need: "Not sure yet",
      message: "Inserted by npm run check, deleted immediately.",
    })
    .select("id")
    .single();

  if (error) {
    no(`insert rejected: ${error.message}`);
    if (/invalid api key/i.test(error.message)) {
      console.log("\n        Take the secret key from Supabase > Project settings >");
      console.log("        API Keys. If only legacy keys are shown, reveal the");
      console.log("        service_role one; if both exist, prefer sb_secret_.\n");
    }
    if (/row-level security/i.test(error.message)) {
      console.log("\n        That is the anon/publishable key. RLS is blocking it,");
      console.log("        which is correct — you need the secret key.\n");
    }
  } else {
    ok(`insert accepted (row ${data.id})`);
    const { error: delErr } = await db.from("contact_submissions").delete().eq("id", data.id);
    if (delErr) no(`could not clean up the test row: ${delErr.message}`);
    else ok("test row deleted");
  }
}

console.log("\nSMTP\n");

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO, MAIL_FROM } = process.env;
console.log(`  ${pad("SMTP_HOST")}${SMTP_HOST || "(not set)"}`);
console.log(`  ${pad("SMTP_PORT")}${SMTP_PORT || "(not set, defaults to 465)"}`);
console.log(`  ${pad("SMTP_USER")}${SMTP_USER || "(not set)"}`);
console.log(`  ${pad("SMTP_PASS")}${SMTP_PASS ? `${SMTP_PASS.length} characters` : "(not set)"}`);
console.log(`  ${pad("MAIL_TO")}${MAIL_TO || "(not set)"}`);
console.log(`  ${pad("MAIL_FROM")}${MAIL_FROM || "(not set)"}`);
console.log("");

if (SMTP_USER && !SMTP_USER.includes("@")) {
  no("SMTP_USER must be the full mailbox address, not just the part before the @");
}

if (SMTP_USER && MAIL_FROM && SMTP_USER.toLowerCase() !== MAIL_FROM.toLowerCase()) {
  no(`SMTP_USER (${SMTP_USER}) and MAIL_FROM (${MAIL_FROM}) are different mailboxes`);
  console.log("\n        Hostinger will only send as the mailbox you logged in as.");
  console.log("        Set both to the same address unless MAIL_FROM is a");
  console.log("        configured alias of SMTP_USER.\n");
}

if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
  no("SMTP_HOST, SMTP_USER and SMTP_PASS must all be set to send mail");
} else {
  const port = Number(SMTP_PORT || 465);
  try {
    await nodemailer
      .createTransport({ host: SMTP_HOST, port, secure: port === 465, auth: { user: SMTP_USER, pass: SMTP_PASS } })
      .verify();
    ok("SMTP login accepted");
  } catch (err) {
    no(`SMTP login refused: ${err.message}`);
    if (/535|authentication failed/i.test(err.message)) {
      console.log("\n        535 means the host rejected the credentials. Use the");
      console.log("        mailbox's own password from hPanel > Emails, not your");
      console.log("        hPanel login, and make sure that mailbox exists.\n");
    }
  }
}

console.log("");
