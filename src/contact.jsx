"use client";
import "./boot";

const NEEDS = [
  "Residential, commercial & industrial IT services",
  "Commercial & B2B locksmithing",
  "Electronic access control & smart security",
  "Residential physical security",
  "Structured cabling & low-voltage",
  "Mobile automotive security",
  "Not sure yet"
];
const PROPERTY = ["Residential", "Commercial", "Industrial", "Automotive", "Other"];

function Field({ id, label, optional, error, children, hint }) {
  return (
    <div className="sh-field">
      <label className="sh-label" htmlFor={id}>{label}{optional && <span> (optional)</span>}</label>
      {children}
      {hint && !error && <span className="sh-cap">{hint}</span>}
      {error && <span className="sh-err" role="alert">{error}</span>}
    </div>
  );
}

function ContactForm() {
  const empty = { name: "", company: "", email: "", phone: "", need: "", property: "", message: "", contact: "Phone", sum: "", website: "" };
  const [v, setV] = React.useState(empty);
  const [err, setErr] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [fatal, setFatal] = React.useState("");
  const [cap, setCap] = React.useState(() => ({ a: 2 + Math.floor(Math.random() * 8), b: 2 + Math.floor(Math.random() * 8) }));
  const t0 = React.useRef(Date.now());
  const set = (k) => (e) => { setV({ ...v, [k]: e.target.value }); if (err[k]) setErr({ ...err, [k]: null }); };
  const check = (state) => {
    const e = {};
    if (!state.name.trim()) e.name = "Please enter your name.";
    if (!state.email.trim()) e.email = "Please enter an email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(state.email.trim())) e.email = "That email address doesn't look right.";
    if (!state.phone.trim()) e.phone = "Please enter a phone number.";
    else if (state.phone.replace(/\D/g, "").length < 10) e.phone = "Please enter a full phone number.";
    if (!state.need) e.need = "Pick the closest option — 'Not sure yet' is fine.";
    if (!state.message.trim()) e.message = "A sentence or two is enough.";
    if (!String(state.sum).trim()) e.sum = "Please answer the question below.";
    else if (Number(state.sum) !== cap.a + cap.b) e.sum = "That is not the right answer.";
    return e;
  };
  const blur = (k) => () => { const e = check(v); setErr((p) => ({ ...p, [k]: e[k] || null })); };
  const submit = async (ev) => {
    ev.preventDefault();
    const e = check(v);
    setErr(e);
    if (Object.keys(e).length) {
      const first = document.querySelector('[aria-invalid="true"]');
      if (first) first.focus();
      return;
    }
    setBusy(true);
    setFatal("");
    try {
      const body = new FormData();
      Object.keys(v).forEach((k) => body.append(k, v[k]));
      body.append("a", String(cap.a));
      body.append("b", String(cap.b));
      body.append("t", String(Math.round((Date.now() - t0.current) / 1000)));
      const res = await fetch("/api/contact", { method: "POST", body });
      const data = await res.json().catch(() => ({ ok: false, error: "The server returned an unexpected response." }));
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong on our end.");
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          event_category: "contact",
          service_need: v.need,
          property_type: v.property || "Unspecified",
          preferred_contact: v.contact,
        });
      }
      setSent(true);
    } catch (x) {
      setCap({ a: 2 + Math.floor(Math.random() * 8), b: 2 + Math.floor(Math.random() * 8) });
      setV((p) => ({ ...p, sum: "" }));
      setFatal(x && x.message ? x.message : `We could not send that just now. Please call ${SITE.phone}.`);
    } finally {
      setBusy(false);
    }
  };

  if (sent) {
    return (
      <Card featured style={{ padding: "var(--sl-space-4xl)" }}>
        <div className="sh-stack" style={{ gap: "var(--sl-space-lg)" }}>
          <PillTag tone="live" style={{ alignSelf: "flex-start" }}>Request received</PillTag>
          <h2 className="sh-h2">Thanks for reaching out.</h2>
          <p className="sh-p" style={{ maxWidth: 520 }}>
            Our team will review what you sent and get back to you at the contact method you chose. If the situation is urgent, call {SITE.phone} — the line is staffed for emergencies around the clock.
          </p>
          <div className="sh-row">
            <Button variant="outline" href={SITE.phoneHref}>Call {SITE.phone}</Button>
            <Button variant="ghost" onClick={() => { setV(empty); setSent(false); setFatal(""); }}>Send another request</Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card style={{ padding: "var(--sl-space-4xl)" }}>
      <form className="sh-form" onSubmit={submit} noValidate>
        <div className="sh-g2">
          <Field id="f-name" label="Name" error={err.name}>
            <input id="f-name" className="sh-input" value={v.name} onChange={set("name")} onBlur={blur("name")} aria-invalid={!!err.name} aria-describedby={err.name ? "f-name-e" : undefined} autoComplete="name" required />
          </Field>
          <Field id="f-company" label="Company" optional>
            <input id="f-company" className="sh-input" value={v.company} onChange={set("company")} autoComplete="organization" />
          </Field>
          <Field id="f-email" label="Email" error={err.email}>
            <input id="f-email" type="email" className="sh-input" value={v.email} onChange={set("email")} onBlur={blur("email")} aria-invalid={!!err.email} autoComplete="email" required />
          </Field>
          <Field id="f-phone" label="Phone" error={err.phone}>
            <input id="f-phone" type="tel" className="sh-input" value={v.phone} onChange={set("phone")} onBlur={blur("phone")} aria-invalid={!!err.phone} autoComplete="tel" required />
          </Field>
        </div>
        <Field id="f-need" label="What do you need help with?" error={err.need}>
          <select id="f-need" className="sh-select" value={v.need} onChange={set("need")} onBlur={blur("need")} aria-invalid={!!err.need} required>
            <option value="">Select a service</option>
            {NEEDS.map((n) => (<option key={n} value={n}>{n}</option>))}
          </select>
        </Field>
        <Field id="f-property" label="Property type" optional>
          <select id="f-property" className="sh-select" value={v.property} onChange={set("property")}>
            <option value="">Select a property type</option>
            {PROPERTY.map((p) => (<option key={p} value={p}>{p}</option>))}
          </select>
        </Field>
        <Field id="f-message" label="Tell us more" error={err.message} hint="What isn't working, what you want installed, or what you're trying to protect.">
          <textarea id="f-message" className="sh-textarea" value={v.message} onChange={set("message")} onBlur={blur("message")} aria-invalid={!!err.message} required />
        </Field>
        <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
          <legend className="sh-label" style={{ padding: 0, marginBottom: "var(--sl-space-sm)" }}>Preferred contact method</legend>
          <div className="sh-radio">
            {["Phone", "Email"].map((c) => (
              <label key={c}>
                <input type="radio" name="contact" value={c} checked={v.contact === c} onChange={set("contact")} />{c}
              </label>
            ))}
          </div>
        </fieldset>
        <DashedRule />
        <Field id="f-sum" label={`Quick check — what is ${cap.a} + ${cap.b}?`} error={err.sum} hint="This keeps automated submissions out of our inbox.">
          <input id="f-sum" type="text" inputMode="numeric" className="sh-input" style={{ maxWidth: 140 }} value={v.sum} onChange={set("sum")} onBlur={blur("sum")} aria-invalid={!!err.sum} autoComplete="off" required />
        </Field>
        <div className="sh-hp" aria-hidden="true">
          <label htmlFor="f-website">Website</label>
          <input id="f-website" name="website" type="text" tabIndex="-1" autoComplete="off" value={v.website} onChange={set("website")} />
        </div>
        {fatal && <p className="sh-err" role="alert" style={{ margin: 0 }}>{fatal}</p>}
        <div className="sh-row" style={{ justifyContent: "space-between" }}>
          <Button type="submit" disabled={busy}>{busy ? "Sending…" : "Request a security assessment"}</Button>
          <span className="sh-cap" style={{ maxWidth: 320 }}>We use your details to answer this request. Nothing else.</span>
        </div>
      </form>
    </Card>
  );
}

function Detail({ label, children }) {
  return (
    <div className="sh-stack" style={{ gap: 2, paddingBlock: "var(--sl-space-md)", borderTop: "1px dashed var(--sl-dashed-rule)" }}>
      <span className="sh-cap">{label}</span>
      <span style={{ color: "var(--sl-ink)", fontSize: "var(--sl-body-sm-size)", lineHeight: "var(--sl-body-md-line)" }}>{children}</span>
    </div>
  );
}

function Contact() {
  return (
    <React.Fragment>
      <Header active="contact" />
      <main id="main">
        <HeroBand
          className="sh-hero"
          style={{ paddingBottom: "var(--sl-space-3xl)" }}
          eyebrow="CONTACT"
          headline="Tell us what you need secured."
          lead="Whether you need a locksmith, new access control, upgraded door hardware, or help figuring out the right security solution, tell us what's going on."
          note={`24/7 emergency service · ${SITE.phone}`}
        />
        <section className="sh-band" style={{ paddingTop: 0 }}>
          <div className="sh-wrap sh-split-4-6" style={{ gap: "var(--sl-space-4xl)", alignItems: "start", gridTemplateColumns: "minmax(0,1.6fr) minmax(0,1fr)" }}>
            <Reveal><ContactForm /></Reveal>
            <Reveal delay={80} className="sh-stack" style={{ gap: "var(--sl-space-2xl)" }}>
              <div>
                <Eyebrow>DIRECT</Eyebrow>
                <div style={{ marginTop: "var(--sl-space-lg)" }}>
                  <Detail label="Phone"><a href={SITE.phoneHref} style={{ fontFamily: "var(--sl-font-mono)", color: "var(--sl-primary)" }}>{SITE.phone}</a></Detail>
                  <Detail label="Email"><a href={`mailto:${SITE.email}`}>{SITE.email}</a></Detail>
                  <Detail label="Digital Card">
                    <div className="sh-stack" style={{ gap: "var(--sl-space-xs)" }}>
                      <a
                        href={SITE.qrCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sh-social-link sh-qr"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--sl-primary)", fontWeight: 600 }}
                      >
                        <QrCodeIcon width={16} height={16} /> Save Contact / Blinq Card ↗
                      </a>
                      <span className="sh-cap" style={{ margin: 0 }}>
                        Scan the QR code or tap to save Tony Brown & Stronghold Lockurity directly to your phone.
                      </span>
                    </div>
                  </Detail>
                  <Detail label="Social">
                    <div className="sh-stack" style={{ gap: "var(--sl-space-xs)" }}>
                      <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="sh-social-link sh-fb" style={{ color: "var(--sl-ink)" }}>
                        <FacebookIcon width={16} height={16} /> Facebook: StrongholdLockurity
                      </a>
                      <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="sh-social-link sh-ig" style={{ color: "var(--sl-ink)" }}>
                        <InstagramIcon width={16} height={16} /> Instagram: @strongholdlockurity
                      </a>
                      <a href={SITE.youtube} target="_blank" rel="noopener noreferrer" className="sh-social-link sh-yt" style={{ color: "var(--sl-ink)" }}>
                        <YouTubeIcon width={17} height={17} /> YouTube: Stronghold Lockurity
                      </a>
                      <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer" className="sh-social-link sh-tt" style={{ color: "var(--sl-ink)" }}>
                        <TikTokIcon width={15} height={15} /> TikTok: @strongholdlockurity
                      </a>
                    </div>
                  </Detail>
                  <Detail label="Address">{SITE.address}</Detail>
                  <Detail label="Hours">{SITE.hours}</Detail>
                  <Detail label="Emergency">{SITE.emergency}, including outside business hours.</Detail>
                </div>
              </div>
              <Card style={{ padding: "var(--sl-space-2xl)", textAlign: "center" }}>
                <div className="sh-stack" style={{ alignItems: "center", gap: "var(--sl-space-md)" }}>
                  <Eyebrow>DIGITAL BUSINESS CARD</Eyebrow>
                  <a
                    href={SITE.qrCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sh-qr-box"
                    title="Scan with phone camera or tap to open digital contact card"
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      src={SITE.qrImage}
                      alt="Stronghold Lockurity Blinq Digital Contact QR Code"
                      width="150"
                      height="150"
                      style={{ display: "block" }}
                    />
                    <span style={{ fontSize: "var(--sl-caption-size)", color: "var(--sl-mute)", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 4 }}>
                      <QrCodeIcon width={13} height={13} /> Scan with camera
                    </span>
                  </a>
                  <div className="sh-stack" style={{ gap: 2, alignItems: "center" }}>
                    <span style={{ fontWeight: 600, color: "var(--sl-ink)", fontSize: "var(--sl-body-sm-strong-size)" }}>Tony Brown</span>
                    <span className="sh-cap">Lead Consultant · Operations / Customer Care</span>
                  </div>
                  <Button
                    variant="outline"
                    href={SITE.qrCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "var(--sl-caption-size)", padding: "var(--sl-space-xs) var(--sl-space-lg)" }}
                  >
                    Open Blinq Card ↗
                  </Button>
                </div>
              </Card>
              <Card>
                <h3 className="sh-h4" style={{ marginBottom: "var(--sl-space-md)" }}>What happens next</h3>
                <ol style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "grid", gap: "var(--sl-space-md)" }}>
                  {[
                    "We read the request and match it to the right specialist.",
                    "We come back with questions or a recommendation, by phone or email — whichever you chose.",
                    "If a site visit is needed, we schedule it around your access.",
                  ].map((t, i) => (
                    <li key={t} style={{ display: "grid", gridTemplateColumns: "28px minmax(0,1fr)", gap: "var(--sl-space-sm)", color: "var(--sl-body)", fontSize: "var(--sl-body-sm-size)", lineHeight: "var(--sl-body-sm-line)" }}>
                      <span className="sh-num">{String(i + 1).padStart(2, "0")}</span>{t}
                    </li>
                  ))}
                </ol>
              </Card>
              <div>
                <Eyebrow>SERVICES</Eyebrow>
                <div className="sh-stack" style={{ gap: "var(--sl-space-sm)", marginTop: "var(--sl-space-lg)" }}>
                  {SERVICES.map((s) => (<a key={s.id} href={`/services#${s.id}`} className="sh-p-sm" style={{ color: "var(--sl-body)" }}>{s.name}</a>))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}
export default Contact;
