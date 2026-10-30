"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "sh_live_chat_v1";
const PHONE = "(470) 827-7019";
const PHONE_HREF = "tel:+14708277019";

function playReplyChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
    osc.frequency.setValueAtTime(880, ctx.currentTime + 0.09); // A5
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.28);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.28);
  } catch {
    // Ignore audio errors when browser blocks autoplay
  }
}

function formatTime(iso) {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  } catch {
    return "";
  }
}

export default function ChatWidget() {
  const pathname = usePathname();
  const isAdminPage = pathname && pathname.startsWith("/admin");

  const [open, setOpen] = useState(false);
  const [creds, setCreds] = useState(null); // { sessionId, visitorToken }
  const [session, setSession] = useState(null);
  const [unread, setUnread] = useState(0);

  // Start-chat form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [initialMsg, setInitialMsg] = useState("");
  const [website, setWebsite] = useState("");
  const [formErr, setFormErr] = useState("");
  const [starting, setStarting] = useState(false);

  // Follow-up message state
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const [sendErr, setSendErr] = useState("");

  const lastAdminCountRef = useRef(0);
  const threadEndRef = useRef(null);
  const chipsScrollRef = useRef(null);
  const openRef = useRef(open);
  openRef.current = open;

  // Restore saved session on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.sessionId && parsed?.visitorToken) {
          setCreds(parsed);
        }
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const clearSession = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
    setCreds(null);
    setSession(null);
    setUnread(0);
    lastAdminCountRef.current = 0;
  }, []);

  // Poll active chat session
  const fetchSession = useCallback(async () => {
    if (!creds?.sessionId || !creds?.visitorToken) return;
    try {
      const res = await fetch(
        `/api/chat?session=${encodeURIComponent(creds.sessionId)}&token=${encodeURIComponent(creds.visitorToken)}`,
        { cache: "no-store" }
      );
      if (res.status === 404 || res.status === 403) {
        clearSession();
        return;
      }
      if (!res.ok) return;
      const data = await res.json();
      if (data?.ok && data.session) {
        const adminMsgs = (data.session.messages || []).filter((m) => m.sender === "admin");
        if (adminMsgs.length > lastAdminCountRef.current) {
          const diff = adminMsgs.length - lastAdminCountRef.current;
          if (lastAdminCountRef.current > 0 || adminMsgs.length > 0) {
            playReplyChime();
            if (!openRef.current) {
              setUnread((u) => u + diff);
            }
          }
          lastAdminCountRef.current = adminMsgs.length;
        }
        setSession(data.session);
      }
    } catch {
      // Network hiccup — retry on next interval
    }
  }, [creds, clearSession]);

  useEffect(() => {
    if (!creds || isAdminPage) return;
    fetchSession();
    const intervalMs = open ? 2500 : 7000;
    const timer = setInterval(fetchSession, intervalMs);
    return () => clearInterval(timer);
  }, [creds, open, isAdminPage, fetchSession]);

  // Clear unread count when opening chat
  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => {
        threadEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 60);
    }
  }, [open, session?.messages?.length]);

  if (isAdminPage) return null;

  const handleStartChat = async (e) => {
    e.preventDefault();
    setFormErr("");

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedEmail = email.trim();
    const trimmedMsg = initialMsg.trim();

    if (!trimmedName) {
      setFormErr("Please enter your name.");
      return;
    }
    const validPhone = trimmedPhone && trimmedPhone.replace(/\D/g, "").length >= 10;
    const validEmail = trimmedEmail && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmedEmail);

    if (!validPhone && !validEmail) {
      setFormErr("Please enter a valid phone number or email address so we can reach you.");
      return;
    }
    if (trimmedEmail && !validEmail) {
      setFormErr("That email address doesn't look right.");
      return;
    }
    if (trimmedPhone && !validPhone) {
      setFormErr("Please enter a full 10-digit phone number.");
      return;
    }
    if (!trimmedMsg) {
      setFormErr("Please type your question or message.");
      return;
    }

    setStarting(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "start",
          name: trimmedName,
          phone: trimmedPhone,
          email: trimmedEmail,
          message: trimmedMsg,
          website,
          page: typeof window !== "undefined" ? window.location.href : pathname,
        }),
      });
      const data = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || `Could not start chat. Please call ${PHONE}.`);
      }

      const nextCreds = { sessionId: data.sessionId, visitorToken: data.visitorToken };
      const initialAdminCount = (data.session?.messages || []).filter(
        (m) => m.sender === "admin"
      ).length;
      lastAdminCountRef.current = initialAdminCount;
      setCreds(nextCreds);
      setSession(data.session);
      setInitialMsg("");
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(nextCreds));
      } catch {
        // Ignore
      }

      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          event_category: "live_chat",
          preferred_contact: validEmail ? "Live Chat + Email" : "Live Chat + Phone",
        });
      }
    } catch (err) {
      setFormErr(err.message || `Could not start chat. Please call ${PHONE}.`);
    } finally {
      setStarting(false);
    }
  };

  const sendFollowUpText = async (rawText) => {
    const text = String(rawText || "").trim();
    if (!text || !creds || sending) return;

    setSending(true);
    setSendErr("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "visitor_message",
          sessionId: creds.sessionId,
          visitorToken: creds.visitorToken,
          message: text,
        }),
      });
      const data = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Could not send message.");
      }
      setDraft("");
      setSession(data.session);
    } catch (err) {
      setSendErr(err.message || "Failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const handleSendFollowUp = async (e) => {
    e.preventDefault();
    await sendFollowUpText(draft);
  };

  const scrollChips = (dir) => {
    if (!chipsScrollRef.current) return;
    chipsScrollRef.current.scrollBy({ left: dir * 180, behavior: "smooth" });
  };

  return (
    <div className="sh-chat-root" aria-live="polite">
      {open && (
        <div className="sh-chat-panel" role="dialog" aria-label="Stronghold Lockurity Live Chat">
          {/* Header */}
          <div className="sh-chat-header">
            <div className="sh-chat-header-brand">
              <span className="sh-chat-dot" aria-hidden="true" />
              <div>
                <div className="sh-chat-title">Stronghold Lockurity</div>
                <div className="sh-chat-subtitle">
                  Live Chat • Urgent? <a href={PHONE_HREF}>{PHONE}</a>
                </div>
              </div>
            </div>
            <div className="sh-chat-header-actions">
              {session && (
                <button
                  type="button"
                  className="sh-chat-reset-btn"
                  onClick={clearSession}
                  title="Start a new chat"
                >
                  New
                </button>
              )}
              <button
                type="button"
                className="sh-chat-close-btn"
                onClick={() => setOpen(false)}
                aria-label="Minimize chat"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Body: either Pre-Chat Form or Active Thread */}
          {!session ? (
            <form className="sh-chat-start-form" onSubmit={handleStartChat} noValidate>
              <div className="sh-chat-intro">
                Have a question about locks, access control, cabling, or IT? Enter your details below to start a live chat with our team.
              </div>

              <div className="sh-chat-field">
                <label htmlFor="sh-chat-name">Your name *</label>
                <input
                  id="sh-chat-name"
                  type="text"
                  className="sh-input"
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="sh-chat-row-2">
                <div className="sh-chat-field">
                  <label htmlFor="sh-chat-phone">Phone</label>
                  <input
                    id="sh-chat-phone"
                    type="tel"
                    className="sh-input"
                    placeholder="(404) 555-0199"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="sh-chat-field">
                  <label htmlFor="sh-chat-email">Email</label>
                  <input
                    id="sh-chat-email"
                    type="email"
                    className="sh-input"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="sh-chat-hint">
                Provide phone or email (include email to also get a copy of our replies).
              </div>

              {/* Honeypot */}
              <div className="sh-hp" aria-hidden="true">
                <label htmlFor="sh-chat-website">Website</label>
                <input
                  id="sh-chat-website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <div className="sh-chat-field">
                <label htmlFor="sh-chat-msg">How can we help? *</label>
                <textarea
                  id="sh-chat-msg"
                  className="sh-textarea sh-chat-textarea"
                  placeholder="Tell us about your door, lock, access control, or vehicle..."
                  rows={3}
                  value={initialMsg}
                  onChange={(e) => setInitialMsg(e.target.value)}
                  required
                />
              </div>

              {formErr && (
                <div className="sh-chat-error" role="alert">
                  {formErr}
                </div>
              )}

              <button type="submit" className="sh-chat-submit-btn" disabled={starting}>
                {starting ? "Starting chat…" : "Start Live Chat →"}
              </button>
            </form>
          ) : (
            <div className="sh-chat-session">
              <div className="sh-chat-messages">
                <div className="sh-chat-system-note">
                  Connected as <strong>{session.visitor?.name}</strong>. Our team has been notified—replies appear right here{session.visitor?.email ? ` and at ${session.visitor.email}` : ""}.
                </div>

                {(session.messages || []).map((m) => {
                  const isVisitor = m.sender === "visitor";
                  const senderLabel = isVisitor
                    ? "You"
                    : m.auto
                      ? "Stronghold Assistant"
                      : "Stronghold Lockurity";
                  return (
                    <div
                      key={m.id}
                      className={`sh-chat-bubble-wrap ${isVisitor ? "is-visitor" : "is-admin"}`}
                    >
                      <div className="sh-chat-bubble-meta">
                        <span>{senderLabel}</span>
                        {m.ts && <span>{formatTime(m.ts)}</span>}
                      </div>
                      <div className="sh-chat-bubble">{m.text}</div>
                    </div>
                  );
                })}
                <div ref={threadEndRef} />
              </div>

              <div className="sh-chat-topics-bar">
                <button
                  type="button"
                  className="sh-chat-scroll-arrow"
                  onClick={() => scrollChips(-1)}
                  aria-label="Scroll options left"
                  title="Scroll left"
                >
                  ‹
                </button>
                <div
                  className="sh-chat-topic-chips"
                  ref={chipsScrollRef}
                  onWheel={(e) => {
                    if (chipsScrollRef.current && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                      e.preventDefault();
                      chipsScrollRef.current.scrollLeft += e.deltaY;
                    }
                  }}
                >
                  {[
                    "What services do you offer?",
                    "Access control & key fobs",
                    "Commercial & master keys",
                    "Residential locks & rekeying",
                    "IT, Wi-Fi & cybersecurity",
                    "Structured cabling & low-voltage",
                    "Mobile automotive & car keys",
                    "What areas do you serve?",
                    "Hours & 24/7 emergency service",
                    "How do quotes & assessments work?",
                  ].map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      className="sh-admin-quick-chip"
                      disabled={sending}
                      onClick={() => sendFollowUpText(topic)}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  className="sh-chat-scroll-arrow"
                  onClick={() => scrollChips(1)}
                  aria-label="Scroll options right"
                  title="Scroll right"
                >
                  ›
                </button>
              </div>

              {sendErr && (
                <div className="sh-chat-error" style={{ margin: "0 12px 8px" }}>
                  {sendErr}
                </div>
              )}

              <form className="sh-chat-composer" onSubmit={handleSendFollowUp}>
                <input
                  type="text"
                  className="sh-input sh-chat-composer-input"
                  placeholder="Type a message…"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  disabled={sending}
                />
                <button
                  type="submit"
                  className="sh-chat-send-btn"
                  disabled={sending || !draft.trim()}
                >
                  {sending ? "…" : "Send"}
                </button>
              </form>
            </div>
          )}
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        type="button"
        className="sh-chat-launcher"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close live chat" : "Open live chat"}
      >
        <span className="sh-chat-dot" aria-hidden="true" />
        <span className="sh-chat-launcher-text">{open ? "Minimize Chat" : "Live Chat"}</span>
        {unread > 0 && <span className="sh-chat-badge">{unread}</span>}
      </button>
    </div>
  );
}

