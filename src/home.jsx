"use client";
import "./boot";

const LAYERS = [
  { k: "PERIMETER", t: "What has to be crossed", d: "Fencing, gates, exterior openings and the approach to the building. Most security decisions are made here, before anyone reaches a door." },
  { k: "OPENING", t: "What resists force", d: "Door, frame, strike, hinges and closer. The lock is one part of an assembly, and it is rarely the part that fails first." },
  { k: "CREDENTIAL", t: "Who is allowed through", d: "Key, code, card or phone. Which person opens which door, on which days, at which hours." },
  { k: "RECORD", t: "What you can change later", d: "Access granted, revoked and logged. A credential can be switched off in seconds; a copied key cannot." },
];

function AccessLayers() {
  const wrap = React.useRef(null);
  const inner = React.useRef(null);
  const [i, setI] = React.useState(0);
  const [compact, setCompact] = React.useState(false);
  React.useEffect(() => {
    const sync = () => {
      const stickyH = inner.current ? inner.current.offsetHeight : 0;
      setCompact(window.innerWidth <= 900 || window.innerHeight < stickyH + 120);
      const el = wrap.current; if (!el) return;
      const r = el.getBoundingClientRect();
      const total = Math.max(1, el.offsetHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, -r.top / total));
      setI(Math.min(LAYERS.length - 1, Math.floor(p * (LAYERS.length + 0.4))));
    };
    sync();
    const ro = new ResizeObserver(sync);
    if (inner.current) ro.observe(inner.current);
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => { ro.disconnect(); window.removeEventListener("scroll", sync); window.removeEventListener("resize", sync); };
  }, []);
  const on = (n) => compact || n === i;
  return (
    <section className="sh-band sh-layers" ref={wrap} style={{ minHeight: compact ? "auto" : `${LAYERS.length * 70}vh`, paddingTop: "var(--sl-space-6xl)" }} aria-label="How security layers fit together">
      <div className="sh-wrap sh-layers-sticky" ref={inner} style={{ position: compact ? "static" : "sticky", paddingTop: compact ? 0 : "var(--sl-space-2xl)" }}>
        <div className="sh-split-4-6">
          <div className="sh-stack" style={{ gap: "var(--sl-space-xl)" }}>
            <Eyebrow>THE STRONGHOLD MODEL</Eyebrow>
            <h2 className="sh-h2">Security is four layers, not one lock.</h2>
            <p className="sh-p">A door is only as strong as the layer behind it and the layer in front of it. We work through all four, then tell you which one is actually costing you.</p>
            <div style={{ marginTop: "var(--sl-space-lg)" }}>
              {LAYERS.map((l, n) => (
                <div className="sh-layerrow" key={l.k} data-on={on(n)}>
                  <span className="sh-num">{String(n + 1).padStart(2, "0")}</span>
                  <div className="sh-stack" style={{ gap: "var(--sl-space-xs)" }}>
                    <span style={{ fontFamily: "var(--sl-font-mono)", fontSize: "var(--sl-code-strong-size)", fontWeight: 500, letterSpacing: "1.2px", color: on(n) ? "var(--sl-ink-strong)" : "var(--sl-body)" }}>{l.k}</span>
                    <span className="sh-p-sm" style={{ color: "var(--sl-ink)" }}>{l.t}</span>
                    <div className="sh-layerdesc"><span className="sh-p-sm" style={{ color: "var(--sl-mute)" }}>{l.d}</span></div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" href="/services" style={{ alignSelf: "flex-start" }}>Explore services</Button>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="sh-stage">
              {LAYERS.map((l, n) => {
                const inset = n * 46;
                return (
                  <div className="sh-ring" key={l.k} data-on={on(n)} data-past={!compact && n < i} style={{ inset: `${inset}px` }}>
                    <i>{String(n + 1).padStart(2, "0")} — {l.k}</i>
                  </div>
                );
              })}
              <div style={{ position: "absolute", inset: `${LAYERS.length * 46}px`, display: "grid", placeItems: "center", textAlign: "center", padding: "var(--sl-space-lg)" }}>
                <span className="sh-mono" style={{ color: "var(--sl-body)" }}>{compact ? "one system" : LAYERS[i].t.toLowerCase()}</span>
              </div>
              {!compact && <div className="sh-scan" style={{ top: `${8 + i * 24}%`, left: `${i * 46}px`, right: `${i * 46}px`, transition: "top 300ms ease, left 300ms ease, right 300ms ease" }} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const METRICS = [
  ["2018", "Operating in Atlanta since 2018, on residential, commercial and industrial work."],
  ["12", "A twelve-person team covering physical hardware, electronics and locksmithing."],
  ["5", "Service lines: commercial, access control, residential, cabling and mobile automotive."],
  ["24/7", "Emergency response outside standard hours, seven days a week."],
];

const STEPS = [
  ["01", "Tell us what you need", "Send the form or call. Describe the property, the problem, or the thing you want secured. No forms with twenty fields."],
  ["02", "We assess the situation", "We review the openings and the requirement, on site where it matters, and identify what is actually failing."],
  ["03", "We recommend the fix", "You get a clear recommendation, in plain language, sized to the real risk. Options where options exist."],
  ["04", "We install it properly", "Fast, scheduled, and done to the standard the hardware was designed for. You get the keys, credentials and documentation."],
];

const PILLARS = [
  ["Expertise", "Physical hardware, electronic access control, commercial, residential and automotive work in one team. The categories overlap constantly."],
  ["Communication", "Clear answers and clear expectations. If a cheaper fix will hold, we will say so."],
  ["Speed", "Fast scheduling, fast execution, and emergency response when a door cannot wait until Monday."],
  ["Precision", "Security hardware only performs when it is installed correctly. Alignment, screws and strike depth are not details we skip."],
  ["Judgment", "Security that is over-specified gets bypassed by the people who use it daily. We size the solution to the actual risk."],
  ["Partnership", "You should not need three vendors to secure one building. We stay with the system after it is installed."],
];

const SECTORS = [
  ["Residential", "Homes, condos, rentals and personal property.", "Rekeys, high-security locks, entry hardware, smart locks"],
  ["Commercial", "Offices, retail, restaurants and property management.", "Master key systems, exit devices, access control, repairs"],
  ["Industrial", "Warehouses, facilities and operational environments.", "Heavy-use hardware, controlled access, key control"],
  ["Automotive", "Vehicle owners and fleets, wherever the vehicle is.", "Lockouts, keys, ignition-related service, mobile dispatch"],
];

function Home() {
  return (
    <React.Fragment>
      <Header active="home" />
      <main id="main">
        <HeroBand
          className="sh-hero"
          style={{ paddingTop: "var(--sl-space-6xl)", paddingBottom: "var(--sl-space-6xl)" }}
          eyebrow="ATLANTA, GEORGIA — SINCE 2018"
          headline="Every entry point, handled properly."
          lead="Stronghold Lockurity secures homes, businesses, facilities and vehicles across Atlanta — physical hardware, electronic access control, smart security, structured cabling and locksmithing, from one twelve-person team."
          actions={
            <React.Fragment>
              <Button href="/contact">Request a security assessment</Button>
              <Button variant="outline" href="/services">Explore services</Button>
            </React.Fragment>
          }
          note={`24/7 emergency service · ${SITE.phone}`}
          aside={<Reveal delay={120}><Shot priority id="home-hero" variant="sh-shot-wide" src="/assets/access-control-reader-commercial-entry-door-atlanta.jpg" alt="Electronic access control reader on a commercial glass entry door in Atlanta at dusk" placeholder="Hero image — commercial entry hardware, an access reader, or a technician at work" /></Reveal>}
        />

        <section className="sh-band-tight" style={{ paddingTop: 0 }}>
          <div className="sh-wrap">
            <Reveal className="sh-metrics">
              {METRICS.map(([n, d]) => (
                <div className="sh-metric" key={n}>
                  <b>{n}</b>
                  <span className="sh-p-sm" style={{ color: "var(--sl-mute)" }}>{d}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <ContentBand
          className="sh-band"
          eyebrow="WHAT WE DO"
          headline="Five service lines, one team."
          lead="Security problems rarely fit neatly into one category. A commercial rekey turns into an access control question; a new front door turns into a frame problem. We handle all four so nothing gets handed off."
        >
          <div className="sh-g2">
            {SERVICES.map((s, n) => (
              <Reveal key={s.id} delay={n * 70} style={n === SERVICES.length - 1 && SERVICES.length % 2 === 1 ? { gridColumn: "1 / -1" } : undefined}>
                <article className="sh-svc">
                  <Shot id={`home-svc-${s.id}`} src={s.cardImg} alt={`${s.name} — Stronghold Lockurity, Atlanta`} variant={n === SERVICES.length - 1 && SERVICES.length % 2 === 1 ? "sh-shot-wide" : ""} placeholder={`Image — ${s.name.toLowerCase()}`} />
                  <div className="sh-row" style={{ justifyContent: "space-between" }}>
                    <span className="sh-num">{s.num}</span>
                    <span className="sh-cap">{s.who.split(",")[0]}</span>
                  </div>
                  <h3 className="sh-h3">{s.name}</h3>
                  <p className="sh-p">{s.short}</p>
                  <div className="sh-chips">{s.chips.map((c) => (<span className="sh-chip" key={c}>{c}</span>))}</div>
                  <a className="sh-svc-go" href={`/services#${s.id}`}>See what we handle <span aria-hidden="true">→</span></a>
                </article>
              </Reveal>
            ))}
          </div>
        </ContentBand>

        <AccessLayers />

        <ContentBand
          className="sh-band"
          eyebrow="ONE SECURITY PARTNER"
          headline="You should not need three vendors to secure one building."
          lead="A locksmith fits the hardware. An integrator wires the readers. A third company handles the vehicles. The gaps between them are where security actually fails. We work across the whole chain."
        >
          <Reveal className="sh-chain">
            {[
              ["Hardware", "Locks, frames, strikes, closers and exit devices."],
              ["Access", "Who opens which door, and on what schedule."],
              ["Technology", "Electronic locks, readers, credentials, smart systems."],
              ["People", "Staff turnover, lost keys, contractors, tenants."],
              ["Property", "Homes, buildings, facilities and vehicles."],
            ].map(([t, d], n) => (
              <div key={t}>
                <span className="sh-num">{String(n + 1).padStart(2, "0")}</span>
                <h3 className="sh-h4" style={{ margin: "var(--sl-space-md) 0 var(--sl-space-sm)" }}>{t}</h3>
                <p className="sh-p-sm" style={{ color: "var(--sl-mute)" }}>{d}</p>
              </div>
            ))}
          </Reveal>
        </ContentBand>

        <ContentBand className="sh-band" eyebrow="HOW IT WORKS" headline="Four steps, no runaround.">
          <div>
            {STEPS.map(([n, t, d], idx) => (
              <Reveal className="sh-step" key={n} delay={idx * 60}>
                <span className="sh-num" style={{ fontSize: "var(--sl-display-sm-size)" }}>{n}</span>
                <div className="sh-stack" style={{ gap: "var(--sl-space-sm)" }}>
                  <h3 className="sh-h4">{t}</h3>
                  <p className="sh-p" style={{ maxWidth: 640 }}>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </ContentBand>

        <ContentBand
          className="sh-band"
          eyebrow="WHY STRONGHOLD"
          headline="Specialists, not a call center with a van."
          lead="Twelve people who do this work every day, in a city where the answer changes depending on whether it is a storefront on Marietta Street or a house in Grant Park."
        >
          <div className="sh-g3">
            {PILLARS.map(([t, d], n) => (
              <Reveal key={t} delay={n * 60}>
                <Card style={{ height: "100%" }}>
                  <h3 className="sh-h4" style={{ marginBottom: "var(--sl-space-md)" }}>{t}</h3>
                  <p className="sh-p-sm" style={{ color: "var(--sl-body)", lineHeight: "var(--sl-prose-line)" }}>{d}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </ContentBand>

        <ContentBand className="sh-band" eyebrow="WHO WE WORK WITH" headline="Four environments, four sets of rules.">
          <div>
            {SECTORS.map(([t, d, cap], n) => (
              <Reveal className="sh-sector" key={t} delay={n * 50}>
                <h3 className="sh-h3">{t}</h3>
                <p className="sh-p">{d}</p>
                <span className="sh-mono">{cap}</span>
              </Reveal>
            ))}
          </div>
        </ContentBand>

        <ContentBand className="sh-band">
          <div className="sh-split" style={{ alignItems: "center" }}>
            <Reveal className="sh-stack" style={{ gap: "var(--sl-space-lg)" }}>
              <Eyebrow>ATLANTA, GEORGIA</Eyebrow>
              <h2 className="sh-h2">Based here. Working here.</h2>
              <p className="sh-p" style={{ maxWidth: 520 }}>
                Stronghold Lockurity operates out of Atlanta and provides professional security and locksmithing solutions for residential, commercial, industrial and automotive clients across the area. Call and you speak to the people doing the work.
              </p>
              <div style={{ borderTop: "1px dashed var(--sl-dashed-rule)", paddingTop: "var(--sl-space-lg)", display: "grid", gap: "var(--sl-space-sm)" }}>
                <span className="sh-mono">{SITE.address}</span>
                <span className="sh-mono">{SITE.hours}</span>
                <span className="sh-mono" style={{ color: "var(--sl-primary)" }}>{SITE.emergency} · {SITE.phone}</span>
              </div>
            </Reveal>
            <Reveal delay={90}><Shot id="home-atlanta" variant="sh-shot-wide" src="/assets/stronghold-lockurity-atlanta-georgia-security-company.jpg" alt="Atlanta, Georgia skyline seen from a Westside industrial street at dusk" placeholder="Image — Atlanta storefront, building entry or a service vehicle on site" /></Reveal>
          </div>
        </ContentBand>

        <ClosingCTA />
      </main>
      <Footer />
    </React.Fragment>
  );
}
export default Home;
