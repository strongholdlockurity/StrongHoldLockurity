"use client";
const DS = window.StrongholdLockurityDesignSystem_5c361a;
const { Button, Card, PillTag, NavBar, NavLink, HeroBand, ContentBand, GreenDividerBand, DashedRule, Eyebrow } = DS;

const SITE = {
  name: "Stronghold Lockurity",
  phone: "(470) 827-7019",
  phoneHref: "tel:+14708277019",
  email: "stronghold@strongholdlockurity.com",
  address: "2454 Scottridge Dr, Atlanta, GA 30318",
  hours: "Monday – Saturday, 9:00 AM – 6:00 PM",
  emergency: "24/7 emergency service",
};

const SERVICES = [
  {
    id: "commercial",
    cardImg: "/assets/commercial-locksmith-atlanta-door-hardware.jpg",
    img: "/assets/commercial-locksmith-atlanta-exit-device-panic-bar.jpg",
    num: "01",
    name: "Commercial & B2B locksmithing",
    short: "Businesses, offices, retail, property management and multi-tenant buildings.",
    chips: ["Master key systems", "Rekeying", "Exit devices", "Door hardware", "Lock repair"],
    who: "Business owners, office and retail managers, property managers, facility teams.",
    problem:
      "Keys have been copied, staff have turned over, and nobody is certain who can open what. Doors that get used a few hundred times a day wear out hardware that was specified for a house.",
    solution:
      "We survey the openings, document what is installed on each one, and put a key system in place that you can actually administer. Where a door is failing, we replace the hardware with grades built for commercial traffic.",
    handles: [
      "Commercial lock installation and replacement",
      "Rekeying and master key system design",
      "Exit devices, closers and panic hardware",
      "Storefront and aluminium door hardware",
      "Lock repair and emergency lockout response",
      "Key control and restricted keyways",
    ],
  },
  {
    id: "access-control",
    cardImg: "/assets/keyless-entry-access-control-keypad-atlanta.jpg",
    img: "/assets/electronic-access-control-panel-installation-atlanta.jpg",
    num: "02",
    name: "Electronic access control & smart security",
    short: "Credential-based entry for doors that need a record of who opened them.",
    chips: ["Access control", "Keyless entry", "Electronic locks", "Credentials", "Integrations"],
    who: "Offices, facilities, warehouses, clinics, gyms, and homes moving off metal keys.",
    problem:
      "A metal key cannot be revoked. When someone leaves, the only options are collecting every copy or rekeying the building — and neither tells you who came through the door at 2:00 AM.",
    solution:
      "We install electronic locks and readers on the openings that matter, issue credentials per person, and hand over a system where access is granted and revoked in seconds rather than rekeyed.",
    handles: [
      "Access control systems and door controllers",
      "Electronic and keyless entry locks",
      "Credential systems — cards, fobs, codes, mobile",
      "Smart locks for residential and small-business use",
      "Hardware integration with existing door assemblies",
      "Credential audits and system handover training",
    ],
  },
  {
    id: "residential",
    cardImg: "/assets/residential-locksmith-atlanta-high-security-deadbolt.jpg",
    img: "/assets/home-security-entry-door-hardware-smart-lock-atlanta.jpg",
    num: "03",
    name: "Residential physical security",
    short: "Homes, entry hardware and the parts of a door most people never think about.",
    chips: ["High-security locks", "Rekeying", "Entry hardware", "Door reinforcement", "Smart locks"],
    who: "Homeowners, renters, landlords, and anyone who just moved in.",
    problem:
      "Most front doors fail at the frame, not the lock. Short screws, a thin strike plate and a builder-grade deadbolt make an expensive lock decorative.",
    solution:
      "We look at the whole opening — door, frame, strike, hinges, lock — and upgrade the parts that carry the load. If you have just moved in, we rekey everything to one key on the first visit.",
    handles: [
      "Deadbolt and high-security lock installation",
      "Rekeying after a move, a breakup or a lost key",
      "Strike plate and frame reinforcement",
      "Patio, sliding and secondary door security",
      "Smart lock installation and setup",
      "Mailbox, cabinet and interior locks",
    ],
  },
  {
    id: "cabling",
    cardImg: "/assets/structured-cabling-network-patch-panel-atlanta.jpg",
    img: "/assets/low-voltage-structured-cabling-installation-atlanta.jpg",
    num: "04",
    name: "Structured cabling & low-voltage",
    short: "The infrastructure behind the hardware — data, network and low-voltage runs for homes, businesses and facilities.",
    chips: ["Structured cabling", "Data & network runs", "Low-voltage", "Camera & reader runs", "Termination & labelling"],
    who: "Homeowners, offices, retail, warehouses and facility teams — new builds, fit-outs and retrofits.",
    problem:
      "Access control, cameras and network equipment only work if there is a clean path back to the rack. Improvised runs, unlabelled cable and daisy-chained extensions produce faults that look like device failures and get diagnosed as such.",
    solution:
      "We pull, terminate and test the cable properly, label both ends, and document what runs where — whether it feeds a reader, a camera, an access point or a workstation. Where we are also installing the hardware, the cabling is planned with it rather than after it.",
    handles: [
      "Structured cabling for data and network",
      "Low-voltage runs for access control and cameras",
      "New build, fit-out and retrofit cabling",
      "Cable pathways, containment and management",
      "Termination, testing and labelling",
      "Rack, patch panel and cabinet tidy-ups",
    ],
  },
  {
    id: "automotive",
    cardImg: "/assets/mobile-automotive-locksmith-atlanta-car-key-service.jpg",
    img: "/assets/mobile-automotive-locksmith-service-atlanta-night.jpg",
    num: "05",
    name: "Mobile automotive security",
    short: "We come to the vehicle. Lockouts, keys and ignition-related work on site.",
    chips: ["Lockouts", "Key replacement", "Mobile service", "Vehicle security"],
    who: "Drivers, fleet operators, dealerships and roadside situations.",
    problem:
      "The key is inside the car, or lost, or worn to the point where it no longer turns — and the vehicle is not where a shop is.",
    solution:
      "Our mobile service handles automotive work at the vehicle. Tell us the year, make and model when you call and we arrive with the right equipment for it.",
    handles: [
      "Vehicle lockout response",
      "Replacement and spare key services",
      "Ignition-related service where applicable",
      "Fleet key management",
      "Mobile dispatch across the Atlanta area",
    ],
  },
];

const NAV = [
  { label: "Home", href: "/", key: "home" },
  { label: "About", href: "/about", key: "about" },
  { label: "Services", href: "/services", key: "services" },
  { label: "Service areas", href: "/service-areas", key: "areas" },
  { label: "Contact", href: "/contact", key: "contact" },
];

/* Scroll reveal wrapper */
function Reveal({ as = "div", delay = 0, className = "", style, children, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { el.classList.add("sh-in"); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("sh-in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} className={`sh-rev ${className}`} style={{ "--d": `${delay}ms`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}

/* Replaceable image area */
function Shot({ placeholder = "Image pending", variant = "", src, alt, style, priority = false }) {
  if (!src) {
    // No image yet — a labelled empty frame rather than a blank box.
    return (
      <div className={`sh-shot sh-shot-empty ${variant}`} style={style} role="img" aria-label={alt || placeholder}>
        <span className="sh-cap">{placeholder}</span>
      </div>
    );
  }
  return (
    <div className={`sh-shot ${variant}`} style={style}>
      <img src={src} alt={alt || ""} loading={priority ? "eager" : "lazy"} decoding="async" fetchpriority={priority ? "high" : undefined} />
    </div>
  );
}

function Header({ active }) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  return (
    <React.Fragment>
      <div className="sh-strip">
        <div className="sh-wrap">
          <span>Atlanta, Georgia · Residential, commercial, industrial and automotive security</span>
          <span className="sh-row" style={{ gap: "var(--sl-space-lg)" }}>
            <PillTag tone="live" style={{ fontSize: "var(--sl-caption-size)", padding: "var(--sl-space-xxs) var(--sl-space-md)" }}>{SITE.emergency}</PillTag>
            <a href={SITE.phoneHref} style={{ fontFamily: "var(--sl-font-mono)" }}>{SITE.phone}</a>
          </span>
        </div>
      </div>
      <NavBar
        className="sh-nav"
        brand={
          <a className="sh-brand" href="/" aria-label="Stronghold Lockurity — home">
            <img src="/assets/stronghold-lockurity-logo-mark.png" alt="" width="34" height="34" />
            <b>Stronghold Lockurity</b>
          </a>
        }
        links={
          <div className="sh-navlinks">
            {NAV.map((n) => (
              <span className="sh-navlink" key={n.key} data-active={active === n.key}>
                <NavLink href={n.href} active={active === n.key}>{n.label}</NavLink>
              </span>
            ))}
          </div>
        }
        actions={
          <React.Fragment>
            <Button href="/contact" className="sh-hide-sm">Request a security assessment</Button>
            <button className="sh-burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}><span /></button>
          </React.Fragment>
        }
      />
      {open && (
        <div className="sh-sheet" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="sh-row" style={{ justifyContent: "space-between", marginBottom: "var(--sl-space-2xl)" }}>
            <span className="sh-brand"><img src="/assets/stronghold-lockurity-logo-mark.png" alt="" width="34" height="34" /><b>Stronghold Lockurity</b></span>
            <button className="sh-burger" style={{ display: "inline-flex" }} aria-label="Close menu" onClick={() => setOpen(false)}>
              <span style={{ background: "transparent" }}>
                <i style={{ position: "absolute", inset: 0, fontStyle: "normal", color: "var(--sl-ink)", fontSize: 20, lineHeight: "1px", transform: "translate(-1px,0)" }}>×</i>
              </span>
            </button>
          </div>
          <nav style={{ flex: 1 }}>
            {NAV.map((n) => (<a key={n.key} className="sh-sheetlink" href={n.href}>{n.label}</a>))}
          </nav>
          <div className="sh-stack">
            <a href={SITE.phoneHref} className="sh-mono" style={{ color: "var(--sl-primary)" }}>{SITE.phone} · {SITE.emergency}</a>
            <Button href="/contact" fullWidth>Request a security assessment</Button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

function ClosingCTA({
  eyebrow = "GET IN TOUCH",
  headline = "Let's make your security stronger.",
  lead = "Tell us what you're trying to protect, what isn't working, or what you need installed. We'll help you figure out the next step.",
}) {
  return (
    <React.Fragment>
      <GreenDividerBand />
      <ContentBand style={{ padding: "var(--sl-space-6xl) var(--sl-space-3xl)" }} className="sh-band">
        <div className="sh-split" style={{ alignItems: "center" }}>
          <Reveal className="sh-stack" style={{ gap: "var(--sl-space-lg)" }}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="sh-h2">{headline}</h2>
            <p className="sh-p" style={{ maxWidth: 520 }}>{lead}</p>
          </Reveal>
          <Reveal delay={80} className="sh-stack" style={{ gap: "var(--sl-space-lg)" }}>
            <div className="sh-row">
              <Button href="/contact">Request a security assessment</Button>
              <Button variant="outline" href={SITE.phoneHref}>Call {SITE.phone}</Button>
            </div>
            <span className="sh-cap">{SITE.emergency}. {SITE.hours} for scheduled work.</span>
          </Reveal>
        </div>
      </ContentBand>
    </React.Fragment>
  );
}

function Footer() {
  const col = (title, items) => (
    <div className="sh-footlinks">
      <span style={{ color: "var(--sl-ink)", fontSize: "var(--sl-body-sm-strong-size)", fontWeight: 600 }}>{title}</span>
      {items.map((it) => (<a key={it.label} href={it.href}>{it.label}</a>))}
    </div>
  );
  return (
    <footer style={{ background: "var(--sl-canvas)", color: "var(--sl-body)", padding: "var(--sl-space-5xl) var(--sl-space-3xl)", borderTop: "1px solid var(--sl-hairline)", fontSize: "var(--sl-body-sm-size)", lineHeight: "var(--sl-body-sm-line)" }}>
      <div className="sh-wrap sh-footer-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(120px,.7fr) minmax(160px,1.1fr) minmax(200px,1.2fr)", gap: "var(--sl-space-4xl)" }}>
        <div className="sh-stack">
          <span className="sh-brand"><img src="/assets/stronghold-lockurity-logo-mark.png" alt="" width="34" height="34" /><b>Stronghold Lockurity</b></span>
          <span style={{ color: "var(--sl-mute)", maxWidth: 300 }}>
            Physical security, electronic access control and locksmithing for Atlanta homes, businesses, facilities and vehicles. Operating since 2018.
          </span>
          <Button href="/contact" style={{ alignSelf: "flex-start" }}>Request a security assessment</Button>
        </div>
        {col("Pages", NAV.map((n) => ({ label: n.label, href: n.href })))}
        {col("Services", SERVICES.map((s) => ({ label: s.name, href: `/services#${s.id}` })))}
        <div className="sh-footlinks">
          <span style={{ color: "var(--sl-ink)", fontSize: "var(--sl-body-sm-strong-size)", fontWeight: 600 }}>Contact</span>
          <a href={SITE.phoneHref} style={{ fontFamily: "var(--sl-font-mono)" }}>{SITE.phone}</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <span style={{ color: "var(--sl-mute)" }}>{SITE.address}</span>
          <span style={{ color: "var(--sl-mute)" }}>{SITE.hours}</span>
          <span style={{ color: "var(--sl-primary)" }}>{SITE.emergency}</span>
        </div>
      </div>
      <div className="sh-wrap" style={{ marginTop: "var(--sl-space-4xl)", paddingTop: "var(--sl-space-2xl)", borderTop: "var(--sl-dashed-border)", color: "var(--sl-mute)", fontSize: "var(--sl-caption-size)", display: "flex", justifyContent: "space-between", gap: "var(--sl-space-lg)", flexWrap: "wrap" }}>
        <span>© {new Date().getFullYear()} Stronghold Lockurity. Atlanta, Georgia.</span>
        <span>Serving residential, commercial, industrial and automotive clients.</span>
      </div>
    </footer>
  );
}

Object.assign(window, { DS, SITE, SERVICES, NAV, Reveal, Shot, Header, Footer, ClosingCTA, Button, Card, PillTag, NavBar, NavLink, HeroBand, ContentBand, GreenDividerBand, DashedRule, Eyebrow });
