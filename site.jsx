"use client";
const DS = window.StrongholdLockurityDesignSystem_5c361a;
const { Button, Card, PillTag, NavBar, NavLink, HeroBand, ContentBand, GreenDividerBand, DashedRule, Eyebrow } = DS;

const SITE = {
  name: "Stronghold Lockurity",
  phone: "(470) 827-7019",
  phoneHref: "tel:+14708277019",
  email: "stronghold@strongholdlockurity.com",
  facebook: "https://www.facebook.com/StrongholdLockurity/",
  instagram: "https://www.instagram.com/strongholdlockurity/",
  youtube: "https://www.youtube.com/channel/UCSVHmn9UshwLsJcywXTAcwA",
  tiktok: "https://www.tiktok.com/@strongholdlockurity",
  blinq: "https://blinq.me/Gx7liy42p72L?bs=db",
  qrCode: "https://blinq.me/Gx7liy42p72L?bs=db",
  qrImage: "/assets/stronghold-contact-qr.svg",
  address: "2454 Scottridge Dr, Atlanta, GA 30318",
  hours: "Monday – Saturday, 9:00 AM – 6:00 PM",
  emergency: "24/7 emergency service",
};

const SERVICES = [
  {
    id: "it-services",
    cardImg: "/assets/it-services-server-rack-infrastructure-atlanta.jpg",
    img: "/assets/it-network-engineer-commercial-industrial-setup-atlanta.jpg",
    num: "01",
    name: "Residential, commercial & industrial IT",
    short: "Secure network infrastructure, device management, and operational tech for homes, offices, and industrial facilities.",
    chips: ["Managed networks", "Commercial & industrial Wi-Fi", "IoT & VLAN segmentation", "Server & rack setup", "Redundancy & failover", "Industrial OT security"],
    who: "Homeowners with smart infrastructure, commercial offices, healthcare clinics, retail, warehouses, logistics centers, and manufacturing plants.",
    problem:
      "Modern security hardware runs on IP networks. When network equipment is unmanaged, Wi-Fi drops out, IoT devices sit exposed on public subnets, and industrial operations grind to a halt during outages or cyber-physical compromises.",
    solution:
      "We engineer, deploy, and support hardened network architectures tailored to your environment. From segmenting home automation systems and deploying enterprise-grade UniFi/Meraki stacks for offices, to configuring ruggedized, dual-WAN failover networks in industrial warehouses, we keep your systems connected and protected.",
    handles: [
      "Commercial network engineering, firewalls & managed PoE switches",
      "Industrial-grade ruggedized networking & high-bay Wi-Fi deployment",
      "Residential whole-home Wi-Fi, mesh systems & network closets",
      "VLAN segmentation for IoT, access control, cameras & guest networks",
      "Dual-WAN, 5G cellular automated failover & backup power (UPS)",
      "Server rack buildouts, patch panel certification & cable cleanups",
      "Operational Technology (OT) & environmental sensor monitoring",
      "Secure VPNs, zero-trust remote access & endpoint security",
    ],
  },
  {
    id: "commercial",
    cardImg: "/assets/commercial-locksmith-atlanta-door-hardware.jpg",
    img: "/assets/commercial-locksmith-atlanta-exit-device-panic-bar.jpg",
    num: "02",
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
    num: "03",
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
    num: "04",
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
    num: "05",
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
    num: "06",
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

function FacebookIcon({ width = 18, height = 18, style, className = "" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0, ...style }}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YouTubeIcon({ width = 18, height = 18, style, className = "" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0, ...style }}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TikTokIcon({ width = 18, height = 18, style, className = "" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0, ...style }}
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function InstagramIcon({ width = 18, height = 18, style, className = "" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0, ...style }}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function QrCodeIcon({ width = 18, height = 18, style, className = "" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0, ...style }}
    >
      <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14-2h2v2h-2v-2zm-4 0h2v4h-2v-4zm6 2h2v6h-4v-2h2v-4zm-4 4h2v2h-2v-2zm-2-2h2v2h-2v-2zm4-2h2v2h-2v-2zM5 5h2v2H5V5zm12 0h2v2h-2V5zM5 17h2v2H5v-2z" />
    </svg>
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
            <span className="sh-row" style={{ gap: "var(--sl-space-md)" }}>
              <a
                href={SITE.qrCode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stronghold Lockurity Digital Card & QR Code"
                title="Save Contact — Digital Business Card & QR Code"
                className="sh-social-link sh-qr"
                style={{ color: "inherit", fontSize: "var(--sl-caption-size)", display: "inline-flex", alignItems: "center", gap: 5 }}
              >
                <QrCodeIcon width={13} height={13} />
                <span className="sh-hide-sm">Digital Card</span>
              </a>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stronghold Lockurity on Facebook"
                title="Follow Stronghold Lockurity on Facebook"
                className="sh-social-link sh-fb"
                style={{ color: "inherit", fontSize: "var(--sl-caption-size)" }}
              >
                <FacebookIcon width={14} height={14} />
                <span className="sh-hide-sm">Facebook</span>
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stronghold Lockurity on Instagram"
                title="Follow Stronghold Lockurity on Instagram"
                className="sh-social-link sh-ig"
                style={{ color: "inherit", fontSize: "var(--sl-caption-size)" }}
              >
                <InstagramIcon width={14} height={14} />
                <span className="sh-hide-sm">Instagram</span>
              </a>
              <a
                href={SITE.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stronghold Lockurity on YouTube"
                title="Subscribe to Stronghold Lockurity on YouTube"
                className="sh-social-link sh-yt"
                style={{ color: "inherit", fontSize: "var(--sl-caption-size)" }}
              >
                <YouTubeIcon width={16} height={16} />
                <span className="sh-hide-sm">YouTube</span>
              </a>
              <a
                href={SITE.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stronghold Lockurity on TikTok"
                title="Follow Stronghold Lockurity on TikTok"
                className="sh-social-link sh-tt"
                style={{ color: "inherit", fontSize: "var(--sl-caption-size)" }}
              >
                <TikTokIcon width={14} height={14} />
                <span className="sh-hide-sm">TikTok</span>
              </a>
            </span>
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
            <a
              href={SITE.qrCode}
              target="_blank"
              rel="noopener noreferrer"
              className="sh-social-link sh-qr"
              style={{ color: "var(--sl-ink)", display: "inline-flex", alignItems: "center", gap: 8, padding: "var(--sl-space-xs) 0", fontWeight: 500 }}
            >
              <QrCodeIcon width={18} height={18} /> Digital Business Card (QR)
            </a>
            <div style={{ display: "flex", gap: "var(--sl-space-lg)", padding: "var(--sl-space-xs) 0", flexWrap: "wrap" }}>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="sh-social-link sh-fb"
                style={{ color: "var(--sl-body)" }}
              >
                <FacebookIcon width={17} height={17} /> Facebook
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="sh-social-link sh-ig"
                style={{ color: "var(--sl-body)" }}
              >
                <InstagramIcon width={17} height={17} /> Instagram
              </a>
              <a
                href={SITE.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="sh-social-link sh-yt"
                style={{ color: "var(--sl-body)" }}
              >
                <YouTubeIcon width={19} height={19} /> YouTube
              </a>
              <a
                href={SITE.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="sh-social-link sh-tt"
                style={{ color: "var(--sl-body)" }}
              >
                <TikTokIcon width={16} height={16} /> TikTok
              </a>
            </div>
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
        <div className="sh-stack" style={{ gap: "var(--sl-space-lg)" }}>
          <span className="sh-brand"><img src="/assets/stronghold-lockurity-logo-mark.png" alt="" width="34" height="34" /><b>Stronghold Lockurity</b></span>
          <span style={{ color: "var(--sl-mute)", maxWidth: 300 }}>
            Physical security, electronic access control and locksmithing for Atlanta homes, businesses, facilities and vehicles. Operating since 2018.
          </span>
          <Button href="/contact" style={{ alignSelf: "flex-start" }}>Request a security assessment</Button>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--sl-space-sm)", marginTop: "var(--sl-space-xs)", flexWrap: "wrap" }}>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="sh-social-btn sh-fb"
              aria-label="Stronghold Lockurity on Facebook"
              title="Follow Stronghold Lockurity on Facebook"
            >
              <FacebookIcon width={17} height={17} />
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="sh-social-btn sh-ig"
              aria-label="Stronghold Lockurity on Instagram"
              title="Follow Stronghold Lockurity on Instagram"
            >
              <InstagramIcon width={17} height={17} />
            </a>
            <a
              href={SITE.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="sh-social-btn sh-yt"
              aria-label="Stronghold Lockurity on YouTube"
              title="Subscribe to Stronghold Lockurity on YouTube"
            >
              <YouTubeIcon width={19} height={19} />
            </a>
            <a
              href={SITE.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="sh-social-btn sh-tt"
              aria-label="Stronghold Lockurity on TikTok"
              title="Follow Stronghold Lockurity on TikTok"
            >
              <TikTokIcon width={16} height={16} />
            </a>
            <a
              href={SITE.qrCode}
              target="_blank"
              rel="noopener noreferrer"
              className="sh-social-btn sh-qr"
              aria-label="Stronghold Lockurity Digital Card & QR Code"
              title="Save Contact — Digital Business Card & QR Code"
            >
              <QrCodeIcon width={17} height={17} />
            </a>
            <span style={{ color: "var(--sl-mute)", fontSize: "var(--sl-caption-size)", marginLeft: "var(--sl-space-xs)" }}>
              Follow our work
            </span>
          </div>
        </div>
        {col("Pages", NAV.map((n) => ({ label: n.label, href: n.href })))}
        {col("Services", SERVICES.map((s) => ({ label: s.name, href: `/services#${s.id}` })))}
        <div className="sh-footlinks">
          <span style={{ color: "var(--sl-ink)", fontSize: "var(--sl-body-sm-strong-size)", fontWeight: 600 }}>Contact</span>
          <a href={SITE.phoneHref} style={{ fontFamily: "var(--sl-font-mono)" }}>{SITE.phone}</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a
            href={SITE.qrCode}
            target="_blank"
            rel="noopener noreferrer"
            className="sh-social-link sh-qr"
            style={{ color: "var(--sl-primary)", display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 500 }}
            aria-label="Save contact via Digital Business Card & QR code"
          >
            <QrCodeIcon width={15} height={15} /> Digital Contact Card (QR)
          </a>
          <a
            href={SITE.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="sh-social-link sh-fb"
            aria-label="Stronghold Lockurity on Facebook"
          >
            <FacebookIcon width={16} height={16} /> Facebook
          </a>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="sh-social-link sh-ig"
            aria-label="Stronghold Lockurity on Instagram"
          >
            <InstagramIcon width={16} height={16} /> Instagram
          </a>
          <a
            href={SITE.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="sh-social-link sh-yt"
            aria-label="Stronghold Lockurity on YouTube"
          >
            <YouTubeIcon width={17} height={17} /> YouTube
          </a>
          <a
            href={SITE.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="sh-social-link sh-tt"
            aria-label="Stronghold Lockurity on TikTok"
          >
            <TikTokIcon width={15} height={15} /> TikTok
          </a>
          <span style={{ color: "var(--sl-mute)" }}>{SITE.address}</span>
          <span style={{ color: "var(--sl-mute)" }}>{SITE.hours}</span>
          <span style={{ color: "var(--sl-primary)" }}>{SITE.emergency}</span>
        </div>
      </div>
      <div className="sh-wrap" style={{ marginTop: "var(--sl-space-4xl)", paddingTop: "var(--sl-space-2xl)", borderTop: "var(--sl-dashed-border)", color: "var(--sl-mute)", fontSize: "var(--sl-caption-size)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--sl-space-lg)", flexWrap: "wrap" }}>
        <span>© {new Date().getFullYear()} Stronghold Lockurity. Atlanta, Georgia.</span>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--sl-space-lg)", flexWrap: "wrap" }}>
          <a
            href={SITE.qrCode}
            target="_blank"
            rel="noopener noreferrer"
            className="sh-social-link sh-qr"
            style={{ fontSize: "var(--sl-caption-size)", color: "var(--sl-mute)", display: "inline-flex", alignItems: "center", gap: 4 }}
          >
            <QrCodeIcon width={13} height={13} /> Digital Card
          </a>
          <a
            href={SITE.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="sh-social-link sh-fb"
            style={{ fontSize: "var(--sl-caption-size)", color: "var(--sl-mute)" }}
          >
            <FacebookIcon width={14} height={14} /> Facebook
          </a>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="sh-social-link sh-ig"
            style={{ fontSize: "var(--sl-caption-size)", color: "var(--sl-mute)" }}
          >
            <InstagramIcon width={14} height={14} /> Instagram
          </a>
          <a
            href={SITE.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="sh-social-link sh-yt"
            style={{ fontSize: "var(--sl-caption-size)", color: "var(--sl-mute)" }}
          >
            <YouTubeIcon width={16} height={16} /> YouTube
          </a>
          <a
            href={SITE.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="sh-social-link sh-tt"
            style={{ fontSize: "var(--sl-caption-size)", color: "var(--sl-mute)" }}
          >
            <TikTokIcon width={14} height={14} /> TikTok
          </a>
          <span>Serving residential, commercial, industrial and automotive clients.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { DS, SITE, SERVICES, NAV, Reveal, Shot, Header, Footer, ClosingCTA, Button, Card, PillTag, NavBar, NavLink, HeroBand, ContentBand, GreenDividerBand, DashedRule, Eyebrow, FacebookIcon, InstagramIcon, YouTubeIcon, TikTokIcon, QrCodeIcon });
