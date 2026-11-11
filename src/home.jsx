"use client";
import "./boot";

const LAYERS = [
  {
    k: "CLOUD & IDENTITY",
    t: "Who is authenticated",
    d: "Microsoft 365, Google Workspace, SSO/MFA, Zero-Trust VPNs, and user directories synced directly to building entry credentials.",
  },
  {
    k: "NETWORK & CYBER",
    t: "What carries & protects traffic",
    d: "Next-gen firewalls, VLAN segmentation, managed PoE switch stacks, enterprise Wi-Fi 6, and 24/7 endpoint threat detection.",
  },
  {
    k: "CABLING & SMART ACCESS",
    t: "Where digital meets the building",
    d: "Certified Cat6/Fiber backbone, server racks, IP door controllers, mobile/fob/biometric readers, and 4K cloud video surveillance.",
  },
  {
    k: "PHYSICAL HARDWARE",
    t: "What holds the opening",
    d: "Commercial Grade-1 locks, electrified strikes, maglocks, code-compliant exit devices, and administered master key systems.",
  },
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
      const el = wrap.current;
      if (!el) return;
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
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);
  const on = (n) => compact || n === i;
  return (
    <section
      className="sh-band sh-layers"
      ref={wrap}
      style={{
        minHeight: compact ? "auto" : `${LAYERS.length * 70}vh`,
        paddingTop: "var(--sl-space-6xl)",
      }}
      aria-label="How digital IT and physical security layers fit together"
    >
      <div
        className="sh-wrap sh-layers-sticky"
        ref={inner}
        style={{
          position: compact ? "static" : "sticky",
          paddingTop: compact ? 0 : "var(--sl-space-2xl)",
        }}
      >
        <div className="sh-split-4-6">
          <div className="sh-stack" style={{ gap: "var(--sl-space-xl)" }}>
            <Eyebrow>THE HYBRID ADVANTAGE</Eyebrow>
            <h2 className="sh-h2">The bridge between digital IT and physical access security.</h2>
            <p className="sh-p">
              Most Managed Service Providers (MSPs) stop at the Ethernet jack, while traditional locksmiths don't configure VLANs or cloud directories. We engineer and manage all four layers under a single SLA.
            </p>
            <div style={{ marginTop: "var(--sl-space-lg)" }}>
              {LAYERS.map((l, n) => (
                <div className="sh-layerrow" key={l.k} data-on={on(n)}>
                  <span className="sh-num">{String(n + 1).padStart(2, "0")}</span>
                  <div className="sh-stack" style={{ gap: "var(--sl-space-xs)" }}>
                    <span
                      style={{
                        fontFamily: "var(--sl-font-mono)",
                        fontSize: "var(--sl-code-strong-size)",
                        fontWeight: 500,
                        letterSpacing: "1.2px",
                        color: on(n) ? "var(--sl-ink-strong)" : "var(--sl-body)",
                      }}
                    >
                      {l.k}
                    </span>
                    <span className="sh-p-sm" style={{ color: "var(--sl-ink)" }}>
                      {l.t}
                    </span>
                    <div className="sh-layerdesc">
                      <span className="sh-p-sm" style={{ color: "var(--sl-mute)" }}>
                        {l.d}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" href="/services" style={{ alignSelf: "flex-start" }}>
              Explore IT &amp; security services
            </Button>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="sh-stage">
              {LAYERS.map((l, n) => {
                const inset = n * 46;
                return (
                  <div
                    className="sh-ring"
                    key={l.k}
                    data-on={on(n)}
                    data-past={!compact && n < i}
                    style={{ inset: `${inset}px` }}
                  >
                    <i>
                      {String(n + 1).padStart(2, "0")} — {l.k}
                    </i>
                  </div>
                );
              })}
              <div
                style={{
                  position: "absolute",
                  inset: `${LAYERS.length * 46}px`,
                  display: "grid",
                  placeItems: "center",
                  textAlign: "center",
                  padding: "var(--sl-space-lg)",
                }}
              >
                <span className="sh-mono" style={{ color: "var(--sl-body)" }}>
                  {compact ? "unified SLA" : LAYERS[i].t.toLowerCase()}
                </span>
              </div>
              {!compact && (
                <div
                  className="sh-scan"
                  style={{
                    top: `${8 + i * 24}%`,
                    left: `${i * 46}px`,
                    right: `${i * 46}px`,
                    transition: "top 300ms ease, left 300ms ease, right 300ms ease",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ITCostEstimator() {
  const [users, setUsers] = React.useState(25);
  const [tier, setTier] = React.useState("business"); // "business" | "enterprise"
  const [addonWifi, setAddonWifi] = React.useState(false);
  const [addonAccess, setAddonAccess] = React.useState(false);
  const [addonCctv, setAddonCctv] = React.useState(false);

  const perUserRate = tier === "business" ? 75 : 110;
  const total =
    users * perUserRate +
    (addonWifi ? 150 : 0) +
    (addonAccess ? 200 : 0) +
    (addonCctv ? 180 : 0);

  const addonsSelected = [
    addonWifi && "Managed Wi-Fi 6 & Network Hardware",
    addonAccess && "IP Access Control & Door Controller Management",
    addonCctv && "Cloud CCTV Video Archiving & Health Monitoring",
  ].filter(Boolean);

  const scopeSummary = `Estimated Package: $${total.toLocaleString()}/mo — ${users} users on ${
    tier === "business" ? "Business Managed IT ($75/user)" : "24/7 SOC & Compliance Enterprise ($110/user)"
  }${addonsSelected.length ? ` + Add-ons: ${addonsSelected.join(", ")}` : ""}.`;

  const proposalHref = `/contact?need=${encodeURIComponent(
    "Managed IT support, cloud & cybersecurity"
  )}&scope=${encodeURIComponent(scopeSummary)}`;

  return (
    <section
      id="estimator"
      className="sh-band"
      style={{ scrollMarginTop: 96, borderTop: "1px solid var(--sl-hairline)" }}
    >
      <div className="sh-wrap sh-stack" style={{ gap: "var(--sl-space-4xl)" }}>
        <Reveal className="sh-stack" style={{ gap: "var(--sl-space-md)", maxWidth: 680 }}>
          <Eyebrow>INTERACTIVE SCOPE BUILDER</Eyebrow>
          <h2 className="sh-h2">Estimate your Managed IT &amp; Security package.</h2>
          <p className="sh-p">
            Select your team size, support SLA tier, and integrated infrastructure add-ons to calculate a baseline monthly managed services estimate.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <Card style={{ padding: "var(--sl-space-4xl)" }}>
            <div className="sh-split" style={{ gap: "var(--sl-space-4xl)", alignItems: "stretch" }}>
              {/* Left Column: Controls */}
              <div className="sh-stack" style={{ gap: "var(--sl-space-2xl)" }}>
                {/* 1. Endpoints Slider */}
                <div className="sh-stack" style={{ gap: "var(--sl-space-sm)" }}>
                  <div className="sh-row" style={{ justifyContent: "space-between" }}>
                    <label htmlFor="est-users" className="sh-label">
                      01. Supported endpoints / users
                    </label>
                    <span
                      style={{
                        fontFamily: "var(--sl-font-mono)",
                        fontSize: "var(--sl-display-sm-size)",
                        fontWeight: 600,
                        color: "var(--sl-primary)",
                      }}
                    >
                      {users} Users
                    </span>
                  </div>
                  <input
                    id="est-users"
                    type="range"
                    min="5"
                    max="150"
                    step="5"
                    value={users}
                    onChange={(e) => setUsers(Number(e.target.value))}
                    className="sh-est-range"
                  />
                  <div className="sh-row" style={{ justifyContent: "space-between" }}>
                    <span className="sh-cap">5 (Small office)</span>
                    <span className="sh-cap">50 (Mid-market)</span>
                    <span className="sh-cap">150+ (Enterprise)</span>
                  </div>
                </div>

                <DashedRule />

                {/* 2. Support Tier */}
                <div className="sh-stack" style={{ gap: "var(--sl-space-sm)" }}>
                  <span className="sh-label">02. Core Managed IT support tier</span>
                  <div className="sh-g2" style={{ gap: "var(--sl-space-md)" }}>
                    <button
                      type="button"
                      className={`sh-est-tier ${tier === "business" ? "is-active" : ""}`}
                      onClick={() => setTier("business")}
                    >
                      <div className="sh-row" style={{ justifyContent: "space-between", width: "100%" }}>
                        <strong style={{ color: "var(--sl-ink-strong)", fontSize: "var(--sl-body-sm-strong-size)" }}>
                          Business Managed IT
                        </strong>
                        <span className="sh-num">$75/u</span>
                      </div>
                      <span className="sh-cap">
                        8am–6pm Helpdesk, patch management, cloud backups &amp; endpoint security
                      </span>
                    </button>

                    <button
                      type="button"
                      className={`sh-est-tier ${tier === "enterprise" ? "is-active" : ""}`}
                      onClick={() => setTier("enterprise")}
                    >
                      <div className="sh-row" style={{ justifyContent: "space-between", width: "100%" }}>
                        <strong style={{ color: "var(--sl-ink-strong)", fontSize: "var(--sl-body-sm-strong-size)" }}>
                          24/7 SOC &amp; Compliance
                        </strong>
                        <span className="sh-num">$110/u</span>
                      </div>
                      <span className="sh-cap">
                        24/7 monitoring, SOC2/HIPAA compliance support &amp; priority SLA
                      </span>
                    </button>
                  </div>
                </div>

                <DashedRule />

                {/* 3. Integrated Add-ons */}
                <div className="sh-stack" style={{ gap: "var(--sl-space-sm)" }}>
                  <span className="sh-label">03. Integrated infrastructure add-ons</span>
                  <div className="sh-stack" style={{ gap: "var(--sl-space-sm)" }}>
                    {[
                      {
                        id: "est-wifi",
                        checked: addonWifi,
                        toggle: () => setAddonWifi((v) => !v),
                        label: "Managed Wi-Fi 6, Next-Gen Firewall & Switch Stack",
                        price: "+$150/mo",
                      },
                      {
                        id: "est-access",
                        checked: addonAccess,
                        toggle: () => setAddonAccess((v) => !v),
                        label: "IP Access Control & Door Controller Management",
                        price: "+$200/mo",
                      },
                      {
                        id: "est-cctv",
                        checked: addonCctv,
                        toggle: () => setAddonCctv((v) => !v),
                        label: "Cloud CCTV Video Archiving & Camera Health Monitoring",
                        price: "+$180/mo",
                      },
                    ].map((item) => (
                      <label key={item.id} className={`sh-est-addon ${item.checked ? "is-checked" : ""}`}>
                        <span style={{ display: "flex", alignItems: "center", gap: "var(--sl-space-md)" }}>
                          <input
                            type="checkbox"
                            checked={item.checked}
                            onChange={item.toggle}
                            style={{ accentColor: "var(--sl-primary)", width: 16, height: 16 }}
                          />
                          <span style={{ color: "var(--sl-ink)", fontSize: "var(--sl-body-sm-size)" }}>
                            {item.label}
                          </span>
                        </span>
                        <span className="sh-mono" style={{ color: "var(--sl-primary)" }}>
                          {item.price}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Live Estimate Summary */}
              <div className="sh-est-summary">
                <div className="sh-stack" style={{ gap: "var(--sl-space-md)" }}>
                  <span className="sh-num">ESTIMATED MONTHLY INVESTMENT</span>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "var(--sl-space-sm)" }}>
                    <span
                      style={{
                        fontFamily: "var(--sl-font-mono)",
                        fontSize: "var(--sl-display-lg-size)",
                        fontWeight: 600,
                        color: "var(--sl-ink-strong)",
                        letterSpacing: "-1px",
                      }}
                    >
                      ${total.toLocaleString()}
                    </span>
                    <span className="sh-cap">/ month</span>
                  </div>
                  <p className="sh-p-sm" style={{ color: "var(--sl-mute)" }}>
                    Includes remote &amp; on-site support, network monitoring, endpoint security, and selected infrastructure add-ons. One-time cabling or door hardware installations are scoped separately during your audit.
                  </p>
                  <DashedRule />
                  <ul
                    style={{
                      margin: 0,
                      padding: 0,
                      listStyle: "none",
                      display: "grid",
                      gap: "var(--sl-space-sm)",
                    }}
                  >
                    {[
                      "Cisco & CompTIA certified engineering team",
                      "99.9% network uptime SLA & < 15 min avg response",
                      "SOC2, HIPAA & PCI compliance documentation support",
                      "Single vendor for IT, cabling & physical door access",
                    ].map((pt) => (
                      <li
                        key={pt}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "16px minmax(0,1fr)",
                          gap: "var(--sl-space-sm)",
                          color: "var(--sl-body)",
                          fontSize: "var(--sl-body-sm-size)",
                        }}
                      >
                        <span style={{ color: "var(--sl-primary)", fontFamily: "var(--sl-font-mono)" }}>✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sh-stack" style={{ gap: "var(--sl-space-sm)", marginTop: "var(--sl-space-2xl)" }}>
                  <Button href={proposalHref} fullWidth>
                    Request a Managed Services Proposal →
                  </Button>
                  <Button variant="ghost" href="/contact" fullWidth>
                    Schedule a Free On-Site IT &amp; Security Audit
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

const METRICS = [
  ["99.9%", "Network uptime SLA backed by proactive 24/7 monitoring, dual-WAN failover, and < 15 min avg ticket response."],
  ["Certified", "Cisco & CompTIA certified engineers supporting SOC2, HIPAA, and PCI compliance requirements."],
  ["Hybrid", "One vendor from the cloud firewall and core switch rack down to the smart door controller and physical lock."],
  ["Since 2018", "Operating in Atlanta with a twelve-person in-house IT engineering, cabling, and security hardware team."],
];

const STEPS = [
  ["01", "Schedule an IT & Security Audit", "Request a proposal or book an on-site audit. Tell us about your endpoints, network topology, compliance goals, or facility openings."],
  ["02", "We audit the full stack", "Our engineers evaluate your firewall, switches, Wi-Fi coverage, structured cabling, and physical door access points to find the real bottlenecks and risks."],
  ["03", "You get a unified architecture & SLA", "We deliver a clear, plain-language roadmap and predictable monthly managed services proposal sized to your actual operational risk."],
  ["04", "We deploy, document & manage 24/7", "From rack buildouts and cloud migrations to badge readers and Grade-1 door hardware, we install it cleanly and monitor it around the clock."],
];

const PILLARS = [
  ["Cisco & CompTIA Certified", "Enterprise network architecture, VLAN segmentation, firewall hardening, and cross-platform workstation support handled by credentialed engineers."],
  ["99.9% Uptime SLA", "Proactive 24/7 endpoint monitoring, automated patching, and dual-WAN cellular failover keep your operations online before staff ever notice an issue."],
  ["SOC2 & HIPAA Readiness", "End-to-end compliance support — from encrypted cloud backups and MFA enforcement to physical door access audit logs."],
  ["The Hybrid Advantage", "Most MSPs stop at the Ethernet port; most locksmiths don't know IP subnets. We engineer the cloud, the cable, the reader, and the lock."],
  ["Transparent Scope", "Predictable per-user managed IT packages and straightforward infrastructure quotes without call-center runaround or unnecessary upsells."],
  ["One Partner, Zero Gaps", "You never have to referee between an IT company, a cabling contractor, and a door hardware vendor when an entry point or network segment goes down."],
];

const SECTORS = [
  ["SMBs & Corporate Offices", "Growing businesses, multi-suite offices, and professional service firms.", "24/7 Managed IT helpdesk, M365 / Google Workspace, Wi-Fi 6, IP badge access"],
  ["Healthcare & Regulated Facilities", "Clinics, medical practices, and organizations with strict compliance mandates.", "HIPAA & SOC2 readiness, VLAN isolation, encrypted backups, audit-logged doors"],
  ["Property & Facility Managers", "Multi-tenant commercial buildings, retail centers, and community associations.", "Cloud credential management, structured cabling, intercoms, master key systems"],
  ["Industrial & Logistics", "Warehouses, distribution centers, manufacturing plants, and commercial fleets.", "Ruggedized high-bay Wi-Fi, dual-WAN failover, OT security, fleet key systems"],
];

function Home() {
  return (
    <React.Fragment>
      <Header active="home" />
      <main id="main">
        <HeroBand
          className="sh-hero"
          style={{ paddingTop: "var(--sl-space-6xl)", paddingBottom: "var(--sl-space-6xl)" }}
          eyebrow="ENTERPRISE IT INFRASTRUCTURE & INTELLIGENT SECURITY SOLUTIONS"
          headline="Modernizing IT operations & securing every entry point."
          lead="Stronghold Lockurity engineers reliable managed IT infrastructure, proactive cloud & cybersecurity support, structured cabling, and unified digital-physical access control for Atlanta SMBs, corporate offices, healthcare facilities, and property managers."
          actions={
            <React.Fragment>
              <Button href="/contact">Schedule an IT &amp; Security Audit</Button>
              <Button variant="outline" href="#estimator">Estimate Managed IT Pricing</Button>
            </React.Fragment>
          }
          note="Cisco & CompTIA Certified · 99.9% Uptime SLA · SOC2 & HIPAA Support · (470) 827-7019"
          aside={
            <Reveal delay={120}>
              <Shot
                priority
                id="home-hero"
                variant="sh-shot-wide"
                src="/assets/it-services-server-rack-infrastructure-atlanta.jpg"
                alt="Enterprise server rack, managed switch stack and structured cabling engineered by Stronghold Lockurity in Atlanta"
                placeholder="Hero image — enterprise server rack and network infrastructure"
              />
            </Reveal>
          }
        />

        <section className="sh-band-tight" style={{ paddingTop: 0 }}>
          <div className="sh-wrap">
            <Reveal className="sh-metrics">
              {METRICS.map(([n, d]) => (
                <div className="sh-metric" key={n}>
                  <b>{n}</b>
                  <span className="sh-p-sm" style={{ color: "var(--sl-mute)" }}>
                    {d}
                  </span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <ContentBand
          className="sh-band"
          eyebrow="CORE CAPABILITIES"
          headline="Enterprise IT & intelligent security, engineered as one stack."
          lead="Modern security and IT infrastructure are inseparable. An access control system requires a segmented VLAN; cloud productivity requires resilient Wi-Fi and certified Cat6 cabling; compliance requires both digital firewalls and audit-logged physical doors."
        >
          <div className="sh-g2">
            {SERVICES.map((s, n) => (
              <Reveal
                key={s.id}
                delay={n * 70}
                style={
                  n === SERVICES.length - 1 && SERVICES.length % 2 === 1
                    ? { gridColumn: "1 / -1" }
                    : undefined
                }
              >
                <article className="sh-svc">
                  <Shot
                    id={`home-svc-${s.id}`}
                    src={s.cardImg}
                    alt={`${s.name} — Stronghold Lockurity, Atlanta`}
                    variant={
                      n === SERVICES.length - 1 && SERVICES.length % 2 === 1 ? "sh-shot-wide" : ""
                    }
                    placeholder={`Image — ${s.name.toLowerCase()}`}
                  />
                  <div className="sh-row" style={{ justifyContent: "space-between" }}>
                    <span className="sh-num">{s.num}</span>
                    <span className="sh-cap">{s.who.split(",")[0]}</span>
                  </div>
                  <h3 className="sh-h3">{s.name}</h3>
                  <p className="sh-p">{s.short}</p>
                  <div className="sh-chips">
                    {s.chips.map((c) => (
                      <span className="sh-chip" key={c}>
                        {c}
                      </span>
                    ))}
                  </div>
                  <a className="sh-svc-go" href={`/services#${s.id}`}>
                    Explore service capabilities <span aria-hidden="true">→</span>
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </ContentBand>

        <AccessLayers />

        <ITCostEstimator />

        <ContentBand
          className="sh-band"
          eyebrow="ONE TECHNOLOGY PARTNER"
          headline="You should not need three vendors to run and secure one building."
          lead="When your MSP blames the cabling contractor, the cabling contractor blames the access control vendor, and the access control vendor blames the door hardware, your team is stuck in the middle. We own the entire chain."
        >
          <Reveal className="sh-chain">
            {[
              ["Cloud & Helpdesk", "24/7 Tier 1–3 support, Microsoft 365, Google Workspace, and endpoint security."],
              ["Network & Cyber", "Firewalls, VLAN segmentation, Wi-Fi 6, dual-WAN failover, and SOC2/HIPAA readiness."],
              ["Cabling & Racks", "Certified Cat6/Fiber runs, patch panels, PoE switch stacks, and clean server closets."],
              ["Smart Access", "IP door controllers, mobile/fob/biometric credentials, and 4K cloud CCTV."],
              ["Door & Fleet Hardware", "Grade-1 commercial locks, electric strikes, panic bars, and commercial fleet keys."],
            ].map(([t, d], n) => (
              <div key={t}>
                <span className="sh-num">{String(n + 1).padStart(2, "0")}</span>
                <h3 className="sh-h4" style={{ margin: "var(--sl-space-md) 0 var(--sl-space-sm)" }}>
                  {t}
                </h3>
                <p className="sh-p-sm" style={{ color: "var(--sl-mute)" }}>
                  {d}
                </p>
              </div>
            ))}
          </Reveal>
        </ContentBand>

        <ContentBand className="sh-band" eyebrow="HOW WE ENGAGE" headline="Four steps from audit to managed SLA.">
          <div>
            {STEPS.map(([n, t, d], idx) => (
              <Reveal className="sh-step" key={n} delay={idx * 60}>
                <span className="sh-num" style={{ fontSize: "var(--sl-display-sm-size)" }}>
                  {n}
                </span>
                <div className="sh-stack" style={{ gap: "var(--sl-space-sm)" }}>
                  <h3 className="sh-h4">{t}</h3>
                  <p className="sh-p" style={{ maxWidth: 640 }}>
                    {d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </ContentBand>

        <ContentBand
          className="sh-band"
          eyebrow="WHY STRONGHOLD"
          headline="Certified engineers, not a call center with a script."
          lead="Twelve in-house specialists covering network engineering, cybersecurity, structured cabling, electronic access control, and commercial door hardware across metro Atlanta."
        >
          <div className="sh-g3">
            {PILLARS.map(([t, d], n) => (
              <Reveal key={t} delay={n * 60}>
                <Card style={{ height: "100%" }}>
                  <h3 className="sh-h4" style={{ marginBottom: "var(--sl-space-md)" }}>
                    {t}
                  </h3>
                  <p className="sh-p-sm" style={{ color: "var(--sl-body)", lineHeight: "var(--sl-prose-line)" }}>
                    {d}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </ContentBand>

        <ContentBand className="sh-band" eyebrow="TARGET ENVIRONMENTS" headline="Built for organizations that cannot afford downtime.">
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
              <h2 className="sh-h2">Local engineers. Rapid on-site &amp; remote response.</h2>
              <p className="sh-p" style={{ maxWidth: 520 }}>
                Stronghold Lockurity operates out of Atlanta, deploying and managing enterprise IT infrastructure, structured cabling, smart access control, and commercial security hardware across the metro region. When you call, you speak directly with the engineering team that owns your stack.
              </p>
              <div
                style={{
                  borderTop: "1px dashed var(--sl-dashed-rule)",
                  paddingTop: "var(--sl-space-lg)",
                  display: "grid",
                  gap: "var(--sl-space-sm)",
                }}
              >
                <span className="sh-mono">{SITE.address}</span>
                <span className="sh-mono">{SITE.hours}</span>
                <span className="sh-mono" style={{ color: "var(--sl-primary)" }}>
                  {SITE.emergency} · {SITE.phone}
                </span>
                <a
                  href={SITE.qrCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sh-social-link sh-qr"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    color: "var(--sl-primary)",
                    fontSize: "var(--sl-caption-size)",
                    marginTop: "var(--sl-space-xs)",
                    width: "fit-content",
                  }}
                >
                  <QrCodeIcon width={14} height={14} /> Scan or save digital contact card (QR) ↗
                </a>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <Shot
                id="home-atlanta"
                variant="sh-shot-wide"
                src="/assets/stronghold-lockurity-atlanta-georgia-security-company.jpg"
                alt="Atlanta, Georgia skyline seen from a Westside industrial street at dusk"
                placeholder="Image — Atlanta commercial corridor"
              />
            </Reveal>
          </div>
        </ContentBand>

        <ClosingCTA />
      </main>
      <Footer />
    </React.Fragment>
  );
}
export default Home;
