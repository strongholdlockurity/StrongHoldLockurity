"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "next/navigation";

const ADMIN_TOKEN_KEY = "sh_admin_chat_token_v1";

const QUICK_REPLIES = [
  "Hi! Thanks for reaching out to Stronghold Lockurity. How can we help you today?",
  "I'm on a job site right now — can I give you a quick call at the number you provided?",
  "We can dispatch a technician to help with that. What is the address or neighborhood?",
];

function formatDateTime(iso) {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleString([], {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  } catch {
    return "";
  }
}

export default function AdminChatConsole() {
  const searchParams = useSearchParams();
  const urlSessionId = searchParams.get("session");
  const urlToken = searchParams.get("token");

  const [adminToken, setAdminToken] = useState("");
  const [authChecked, setAuthChecked] = useState(false);
  const [pin, setPin] = useState("");
  const [authErr, setAuthErr] = useState("");
  const [authBusy, setAuthBusy] = useState(false);

  const [sessions, setSessions] = useState([]);
  const [selectedId, setSelectedId] = useState(urlSessionId || "");
  const [filter, setFilter] = useState("all"); // all | active | closed
  const [replyText, setReplyText] = useState("");
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState("");
  const [mobileShowList, setMobileShowList] = useState(!urlSessionId);

  const threadEndRef = useRef(null);

  // Authenticate via URL magic token or saved localStorage token
  useEffect(() => {
    async function initAuth() {
      const candidateToken =
        urlToken ||
        (typeof window !== "undefined" ? localStorage.getItem(ADMIN_TOKEN_KEY) : "") ||
        "";

      if (!candidateToken) {
        setAuthChecked(true);
        return;
      }

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "admin_auth",
            token: candidateToken,
            sessionId: urlSessionId || null,
          }),
        });
        const data = await res.json().catch(() => ({ ok: false }));
        if (res.ok && data.ok && data.adminToken) {
          setAdminToken(data.adminToken);
          try {
            localStorage.setItem(ADMIN_TOKEN_KEY, data.adminToken);
          } catch {
            // Ignore
          }
        } else {
          try {
            localStorage.removeItem(ADMIN_TOKEN_KEY);
          } catch {
            // Ignore
          }
        }
      } catch {
        // Ignore network error on init
      } finally {
        setAuthChecked(true);
      }
    }
    initAuth();
  }, [urlToken, urlSessionId]);

  const loadSessions = useCallback(async () => {
    if (!adminToken) return;
    try {
      const res = await fetch(
        `/api/chat?admin=1&token=${encodeURIComponent(adminToken)}${
          selectedId ? `&session=${encodeURIComponent(selectedId)}` : ""
        }`,
        { cache: "no-store" }
      );
      if (res.status === 401) {
        setAdminToken("");
        try {
          localStorage.removeItem(ADMIN_TOKEN_KEY);
        } catch {
          // Ignore
        }
        return;
      }
      if (!res.ok) return;
      const data = await res.json();
      if (data?.ok && Array.isArray(data.sessions)) {
        setSessions(data.sessions);
        if (!selectedId && data.sessions.length > 0) {
          setSelectedId(data.sessions[0].id);
        }
      }
    } catch {
      // Ignore transient poll errors
    }
  }, [adminToken, selectedId]);

  useEffect(() => {
    if (!adminToken) return;
    loadSessions();
    const timer = setInterval(loadSessions, 2500);
    return () => clearInterval(timer);
  }, [adminToken, loadSessions]);

  const activeSession = sessions.find((s) => String(s.id) === String(selectedId)) || null;

  useEffect(() => {
    threadEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeSession?.id, activeSession?.messages?.length]);

  const handlePinLogin = async (e) => {
    e.preventDefault();
    setAuthErr("");
    if (!pin.trim()) {
      setAuthErr("Please enter the admin PIN.");
      return;
    }
    setAuthBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "admin_auth", pin: pin.trim() }),
      });
      const data = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Incorrect PIN.");
      }
      setAdminToken(data.adminToken);
      setPin("");
      try {
        localStorage.setItem(ADMIN_TOKEN_KEY, data.adminToken);
      } catch {
        // Ignore
      }
    } catch (err) {
      setAuthErr(err.message || "Authentication failed.");
    } finally {
      setAuthBusy(false);
    }
  };

  const handleSendReply = async (e) => {
    e.preventDefault();
    const text = replyText.trim();
    if (!text || !activeSession || sending) return;

    setSending(true);
    setNotice("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "admin_reply",
          sessionId: activeSession.id,
          adminToken,
          message: text,
        }),
      });
      const data = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send reply.");
      }
      setReplyText("");
      setSessions((prev) =>
        prev.map((s) => (String(s.id) === String(data.session.id) ? data.session : s))
      );
      setNotice(
        data.visitorEmailed
          ? "Reply sent to live chat + emailed to visitor."
          : "Reply sent to live chat."
      );
      setTimeout(() => setNotice(""), 4500);
    } catch (err) {
      setNotice(`Error: ${err.message || "Could not send reply."}`);
    } finally {
      setSending(false);
    }
  };

  const handleToggleStatus = async (sessionObj) => {
    const nextStatus = sessionObj.status === "closed" ? "open" : "closed";
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "admin_status",
          sessionId: sessionObj.id,
          adminToken,
          status: nextStatus,
        }),
      });
      const data = await res.json();
      if (res.ok && data?.ok) {
        setSessions((prev) =>
          prev.map((s) => (String(s.id) === String(data.session.id) ? data.session : s))
        );
      }
    } catch {
      // Ignore
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem(ADMIN_TOKEN_KEY);
    } catch {
      // Ignore
    }
    setAdminToken("");
  };

  if (!authChecked) {
    return (
      <div className="sh-admin-shell">
        <div className="sh-admin-login-card">
          <div className="sh-num">STRONGHOLD LOCKURITY</div>
          <h1 className="sh-h3" style={{ marginTop: 8 }}>Loading Live Chat Console…</h1>
        </div>
      </div>
    );
  }

  if (!adminToken) {
    return (
      <div className="sh-admin-shell">
        <div className="sh-admin-login-card">
          <div className="sh-num">STRONGHOLD LOCKURITY — ADMIN</div>
          <h1 className="sh-h3" style={{ margin: "8px 0 6px" }}>Live Chat Inbox</h1>
          <p className="sh-p-sm" style={{ marginBottom: 20 }}>
            Enter your admin PIN to view and reply to customer chats in real time.
          </p>
          <form onSubmit={handlePinLogin} className="sh-stack" style={{ gap: 14 }}>
            <input
              type="password"
              className="sh-input"
              placeholder="Admin PIN"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              autoFocus
            />
            {authErr && (
              <div className="sh-chat-error" role="alert">
                {authErr}
              </div>
            )}
            <button type="submit" className="sh-chat-submit-btn" disabled={authBusy}>
              {authBusy ? "Verifying…" : "Unlock Live Chat →"}
            </button>
          </form>
          <div style={{ marginTop: 18 }}>
            <a href="/" className="sh-p-sm" style={{ color: "var(--sl-mute)" }}>
              ← Back to strongholdlockurity.com
            </a>
          </div>
        </div>
      </div>
    );
  }

  const filteredSessions = sessions.filter((s) => {
    if (filter === "active") return s.status !== "closed";
    if (filter === "closed") return s.status === "closed";
    return true;
  });

  return (
    <div className="sh-admin-console">
      {/* Top Bar */}
      <header className="sh-admin-topbar">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href="/" className="sh-brand" style={{ textDecoration: "none" }}>
            <img src="/assets/stronghold-lockurity-logo-mark.png" alt="" width="28" height="28" />
            <b>Stronghold Live Chat</b>
          </a>
          <span className="sh-admin-pill is-live">Live Sync</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href="/" className="sh-admin-btn-ghost">
            View Site
          </a>
          <button type="button" className="sh-admin-btn-ghost" onClick={handleLogout}>
            Lock
          </button>
        </div>
      </header>

      <div className="sh-admin-grid">
        {/* Sidebar: Conversation List */}
        <aside className={`sh-admin-sidebar ${mobileShowList ? "is-mobile-visible" : ""}`}>
          <div className="sh-admin-tabs">
            {[
              { id: "all", label: `All (${sessions.length})` },
              {
                id: "active",
                label: `Active (${sessions.filter((s) => s.status !== "closed").length})`,
              },
              {
                id: "closed",
                label: `Closed (${sessions.filter((s) => s.status === "closed").length})`,
              },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                className={`sh-admin-tab ${filter === t.id ? "is-active" : ""}`}
                onClick={() => setFilter(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="sh-admin-session-list">
            {filteredSessions.length === 0 ? (
              <div className="sh-admin-empty">No chat conversations in this view yet.</div>
            ) : (
              filteredSessions.map((s) => {
                const last = s.messages[s.messages.length - 1];
                const isSelected = String(s.id) === String(activeSession?.id);
                const needsReply = s.status === "open" || last?.sender === "visitor";
                return (
                  <button
                    key={s.id}
                    type="button"
                    className={`sh-admin-session-item ${isSelected ? "is-selected" : ""}`}
                    onClick={() => {
                      setSelectedId(s.id);
                      setMobileShowList(false);
                    }}
                  >
                    <div className="sh-admin-session-top">
                      <strong>{s.visitor?.name || "Visitor"}</strong>
                      <span
                        className={`sh-admin-status-badge ${
                          s.status === "closed"
                            ? "is-closed"
                            : needsReply
                              ? "is-unread"
                              : "is-replied"
                        }`}
                      >
                        {s.status === "closed"
                          ? "Closed"
                          : needsReply
                            ? "Needs Reply"
                            : "Replied"}
                      </span>
                    </div>
                    <div className="sh-admin-session-contact">
                      {s.visitor?.phone || s.visitor?.email || "No contact"}
                    </div>
                    {last && (
                      <div className="sh-admin-session-preview">
                        {last.sender === "admin" ? "You: " : ""}
                        {last.text}
                      </div>
                    )}
                    <div className="sh-admin-session-time">{formatDateTime(s.updatedAt)}</div>
                  </button>
                );
              })
            )}
          </div>
        </aside>

        {/* Main Pane: Selected Conversation */}
        <main className={`sh-admin-main ${!mobileShowList ? "is-mobile-visible" : ""}`}>
          {!activeSession ? (
            <div className="sh-admin-empty" style={{ margin: "auto" }}>
              Select a conversation on the left to view and reply.
            </div>
          ) : (
            <>
              {/* Visitor Info Header */}
              <div className="sh-admin-conv-header">
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                  <button
                    type="button"
                    className="sh-admin-back-btn"
                    onClick={() => setMobileShowList(true)}
                  >
                    ← Chats
                  </button>
                  <div>
                    <h2 className="sh-h4" style={{ margin: 0 }}>
                      {activeSession.visitor?.name}
                    </h2>
                    <div className="sh-cap">
                      Started {formatDateTime(activeSession.createdAt)}
                      {activeSession.visitor?.page ? ` • ${activeSession.visitor.page}` : ""}
                    </div>
                  </div>
                </div>

                <div className="sh-admin-conv-actions">
                  {activeSession.visitor?.phone && (
                    <>
                      <a
                        href={`tel:${activeSession.visitor.phone}`}
                        className="sh-admin-action-link"
                      >
                        📞 Call {activeSession.visitor.phone}
                      </a>
                      <a
                        href={`sms:${activeSession.visitor.phone}`}
                        className="sh-admin-action-link"
                      >
                        💬 SMS
                      </a>
                    </>
                  )}
                  {activeSession.visitor?.email && (
                    <a
                      href={`mailto:${activeSession.visitor.email}`}
                      className="sh-admin-action-link"
                    >
                      ✉️ {activeSession.visitor.email}
                    </a>
                  )}
                  <button
                    type="button"
                    className="sh-admin-btn-ghost"
                    onClick={() => handleToggleStatus(activeSession)}
                  >
                    {activeSession.status === "closed" ? "Reopen Chat" : "Mark Closed"}
                  </button>
                </div>
              </div>

              {/* Message Thread */}
              <div className="sh-admin-messages">
                {(activeSession.messages || []).map((m) => {
                  const isAdmin = m.sender === "admin";
                  const label = isAdmin
                    ? m.auto
                      ? "Stronghold Assistant (Auto)"
                      : "Stronghold Lockurity (You)"
                    : activeSession.visitor?.name;
                  return (
                    <div
                      key={m.id}
                      className={`sh-chat-bubble-wrap ${isAdmin ? "is-visitor" : "is-admin"}`}
                    >
                      <div className="sh-chat-bubble-meta">
                        <span>{label}</span>
                        <span>{formatDateTime(m.ts)}</span>
                      </div>
                      <div className="sh-chat-bubble">{m.text}</div>
                    </div>
                  );
                })}
                <div ref={threadEndRef} />
              </div>

              {/* Quick Replies & Composer */}
              <div className="sh-admin-composer-area">
                <div className="sh-admin-quick-replies">
                  {QUICK_REPLIES.map((qr, i) => (
                    <button
                      key={i}
                      type="button"
                      className="sh-admin-quick-chip"
                      onClick={() => setReplyText(qr)}
                    >
                      {qr.slice(0, 48)}…
                    </button>
                  ))}
                </div>

                {notice && <div className="sh-admin-notice">{notice}</div>}

                <form className="sh-admin-reply-form" onSubmit={handleSendReply}>
                  <textarea
                    className="sh-textarea sh-admin-reply-input"
                    rows={2}
                    placeholder={`Reply to ${activeSession.visitor?.name || "visitor"}… (Enter to send, Shift+Enter for new line)`}
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendReply(e);
                      }
                    }}
                  />
                  <button
                    type="submit"
                    className="sh-chat-submit-btn sh-admin-send-btn"
                    disabled={sending || !replyText.trim()}
                  >
                    {sending ? "Sending…" : "Send Reply →"}
                  </button>
                </form>
                <div className="sh-cap" style={{ marginTop: 6 }}>
                  {activeSession.visitor?.email
                    ? `Replies appear live on the website AND are emailed to ${activeSession.visitor.email}.`
                    : "Replies appear live in the visitor's website chat window."}
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

