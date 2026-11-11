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
  emergency: "99.9% Uptime SLA · 24/7 Support",
};

const SERVICES = [
  {
    id: "it-services",
    cardImg: "/assets/it-services-server-rack-infrastructure-atlanta.jpg",
    img: "/assets/it-network-engineer-commercial-industrial-setup-atlanta.jpg",
    num: "01",
    name: "Managed IT support, cloud & cybersecurity",
    short: "24/7 proactive endpoint monitoring, helpdesk support, cloud integration, and hardened network architectures for SMBs, corporate offices, healthcare clinics, and industrial facilities.",
    chips: ["24/7 Managed IT & Helpdesk", "Cloud & M365 / Workspace", "Cisco & CompTIA Certified", "SOC2 & HIPAA Readiness", "VLAN & Zero-Trust Security", "99.9% Uptime SLA"],
    who: "SMBs, corporate offices, healthcare clinics, property managers, warehouses, logistics centers, and connected homes.",
    problem:
      "Modern operations and security hardware depend on resilient IP networks. When IT is reactive or unmanaged, Wi-Fi drops out, endpoints go unpatched, IoT and access devices sit exposed on public subnets, and outages stall business continuity.",
    solution:
      "Our Cisco and CompTIA certified engineers design, deploy, and manage hardened IT environments under a 99.9% uptime SLA. From Tier 1–3 helpdesk support and Microsoft 365 / Google Workspace migrations to enterprise UniFi/Meraki/Cisco stacks, VLAN segmentation, and SOC2/HIPAA compliance readiness, we keep your operations online and protected.",
    handles: [
      "24/7/365 proactive endpoint monitoring, patch management & Tier 1–3 helpdesk",
      "Enterprise network engineering, next-gen firewalls & managed PoE switch stacks",
      "Cloud migrations (Microsoft 365 & Google Workspace), SSO & MFA enforcement",
      "VLAN segmentation isolating corporate data, VoIP, IoT, cameras & access control",
      "SOC2, HIPAA & PCI compliance readiness, vulnerability scans & endpoint protection",
      "Dual-WAN, 5G cellular automated failover & encrypted cloud disaster recovery",
      "Cross-platform workstation provisioning & support (Windows, macOS, Linux)",
      "Industrial Operational Technology (OT) networking & ruggedized high-bay Wi-Fi",
    ],
  },
  {
    id: "cabling",
    cardImg: "/assets/structured-cabling-network-patch-panel-atlanta.jpg",
    img: "/assets/low-voltage-structured-cabling-installation-atlanta.jpg",
    num: "02",
    name: "Structured cabling & network infrastructure",
    short: "Certified Cat6/Fiber backbone, server rack buildouts, high-density Wi-Fi 6/7 deployment, and low-voltage runs for offices, commercial buildings, and facilities.",
    chips: ["Cat6 & Fiber Backbone", "Server Rack Buildouts", "High-Density Wi-Fi", "Low-Voltage & PoE Runs", "Patch Panel Certification"],
    who: "Corporate offices, healthcare facilities, multi-tenant buildings, retail, warehouses, and new-build or retrofit fit-outs.",
    problem:
      "Cloud applications, Wi-Fi access points, IP cameras, and door controllers only perform as well as the physical layer feeding them. Unlabelled cable, improvised runs, and messy network closets create bottlenecks that look like software or ISP failures.",
    solution:
      "We pull, terminate, certify, and label structured data and low-voltage cabling to enterprise standards, build out clean server racks and patch panels, and engineer both the physical wiring and the switch configuration as one unified deployment.",
    handles: [
      "Structured Cat6, Cat6A and fiber-optic backbone cabling",
      "Server room rack buildouts, patch panel termination & closet cleanups",
      "High-density commercial Wi-Fi heatmapping & access point deployment",
      "Low-voltage PoE runs for IP access control readers, controllers & 4K cameras",
      "New construction, commercial tenant fit-out & retrofit cabling",
      "Full line testing, certification & port-by-port documentation",
    ],
  },
  {
    id: "access-control",
    cardImg: "/assets/keyless-entry-access-control-keypad-atlanta.jpg",
    img: "/assets/electronic-access-control-panel-installation-atlanta.jpg",
    num: "03",
    name: "Electronic access control & smart security",
    short: "IP-connected door controllers, mobile/fob/biometric credentials, cloud video surveillance, and directory-synced entry with a complete audit trail.",
    chips: ["IP Access Control", "Mobile & Fob Credentials", "Active Directory Sync", "Cloud Video / CCTV", "Audit Trails & Schedules"],
    who: "Corporate offices, healthcare clinics, property managers, warehouses, multi-tenant buildings, and smart facilities.",
    problem:
      "Traditional IT vendors stop at the Ethernet jack, while traditional locksmiths don't configure VLANs or cloud directories. Meanwhile, physical keys cannot be revoked remotely or produce an audit log for compliance.",
    solution:
      "We bridge digital IT and physical entry. We install IP door controllers, biometric/fob/mobile readers, and cloud cameras on a segmented security VLAN, integrate them with your user directory, and hand over a system where access is granted, scheduled, or revoked in seconds.",
    handles: [
      "Cloud and on-premise IP access control systems & multi-door controllers",
      "Mobile credentials, encrypted key fobs, badges, PIN keypads & biometrics",
      "Directory integration (Microsoft Entra ID / Active Directory / Google) for instant onboarding & offboarding",
      "4K AI cloud video surveillance & door-event video verification",
      "Automated door schedules for staff, contractors, cleaners & after-hours access",
      "Audit logs & physical access reporting for SOC2 and HIPAA compliance",
    ],
  },
  {
    id: "commercial",
    cardImg: "/assets/commercial-locksmith-atlanta-door-hardware.jpg",
    img: "/assets/commercial-locksmith-atlanta-exit-device-panic-bar.jpg",
    num: "04",
    name: "Commercial door hardware & B2B locksmithing",
    short: "The physical foundation of facility security — Grade-1 commercial locks, restricted master key systems, exit devices, and door/frame remediation.",
    chips: ["Grade-1 Door Hardware", "Master Key Systems", "Exit Devices & Closers", "Electrified Strikes & Maglocks", "Facility Key Control"],
    who: "Property managers, corporate facilities, healthcare clinics, retail corridors, schools, and multi-tenant buildings.",
    problem:
      "Even the smartest electronic access system fails if the physical door sags, the closer slams, or the electric strike binds. And on mechanical openings, untracked keys and worn hardware leave facilities exposed.",
    solution:
      "Unlike pure IT MSPs that have to subcontract door work, our in-house commercial hardware specialists service the entire physical opening — installing Grade-1 locks, electrified strikes, code-compliant panic bars, heavy-duty closers, and administered master key hierarchies.",
    handles: [
      "Electrified strikes, maglocks & power-transfer hinges for access control doors",
      "Grade-1 commercial lock installation, repair & reinforcement",
      "Restricted keyways & multi-tier master key system architecture",
      "Code-compliant panic bars, fire-rated exit devices & hydraulic door closers",
      "Storefront aluminum/glass door hardware & continuous hinges",
      "24/7 commercial facility lockout & hardware failure response",
    ],
  },
  {
    id: "residential",
    cardImg: "/assets/residential-locksmith-atlanta-high-security-deadbolt.jpg",
    img: "/assets/home-security-entry-door-hardware-smart-lock-atlanta.jpg",
    num: "05",
    name: "Residential physical security & smart home",
    short: "Whole-home Wi-Fi & smart lock integration, high-security deadbolts, frame reinforcement, and single-key rekeying for Atlanta homeowners.",
    chips: ["Smart Locks & Home Wi-Fi", "High-Security Deadbolts", "Door & Frame Reinforcement", "Whole-Home Rekeying", "Historic Door Hardware"],
    who: "Homeowners, executives working from home, custom home builders, and residential property managers.",
    problem:
      "Consumer smart locks drop offline when home Wi-Fi is weak, and builder-grade deadbolts fail at the door frame when secured with half-inch screws.",
    solution:
      "We pair reliable residential network coverage with commercial-grade physical door security — reinforcing strikes and frames, fitting smart or high-security mechanical locks, and rekeying every opening smoothly.",
    handles: [
      "Smart lock installation integrated with whole-home Wi-Fi & mobile apps",
      "High-security deadbolt installation and strike/frame reinforcement",
      "Whole-home rekeying after purchasing a home or tenant turnover",
      "Restoration-grade mortise lock service for historic Atlanta homes",
      "Patio, sliding, gate, garage and secondary entrance security",
    ],
  },
  {
    id: "automotive",
    cardImg: "/assets/mobile-automotive-locksmith-atlanta-car-key-service.jpg",
    img: "/assets/mobile-automotive-locksmith-service-atlanta-night.jpg",
    num: "06",
    name: "Commercial fleet & mobile automotive security",
    short: "On-site fleet key administration, transponder & smart key programming, ignition service, and mobile vehicle lockout response across Atlanta.",
    chips: ["Commercial Fleet Keys", "Transponder & Fob Programming", "On-Site Mobile Dispatch", "Ignition & Lock Service"],
    who: "Commercial fleet operators, logistics managers, dealerships, and drivers across metro Atlanta.",
    problem:
      "A downed service van or lost transponder key takes a vehicle and a driver off the road, and towing a commercial vehicle to a dealership wastes a full workday.",
    solution:
      "Our mobile automotive units come directly to your yard, office, or roadside location across Atlanta to cut, program, and service keys and ignitions on site.",
    handles: [
      "Commercial fleet key duplication, transponder programming & key tracking",
      "On-site smart key, fob and remote replacement",
      "Mobile vehicle lockout response across metro Atlanta",
      "Ignition repair and worn cylinder service on site",
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
          <span>Atlanta, Georgia · Enterprise IT Infrastructure, Managed Support &amp; Intelligent Security Solutions</span>
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
            <Button href="/contact" className="sh-hide-sm">Schedule an IT &amp; Security Audit</Button>
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
            <Button href="/contact" fullWidth>Schedule an IT &amp; Security Audit</Button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

function ClosingCTA({
  eyebrow = "SCHEDULE AN AUDIT",
  headline = "Modernize your IT operations and secure every entry point.",
  lead = "Whether you need 24/7 managed IT support, a structured cabling & Wi-Fi buildout, cloud integration, or unified IP access control, our engineers will scope the right architecture for your facility.",
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
              <Button href="/contact">Schedule an IT &amp; Security Audit</Button>
              <Button variant="outline" href="/#estimator">Request a Managed Services Proposal</Button>
            </div>
            <span className="sh-cap">Cisco &amp; CompTIA Certified · {SITE.emergency} · {SITE.phone}</span>
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
            Enterprise IT infrastructure, managed helpdesk support, structured cabling, smart access control, and commercial security hardware in Atlanta, GA. Operating since 2018.
          </span>
          <Button href="/contact" style={{ alignSelf: "flex-start" }}>Schedule an IT &amp; Security Audit</Button>
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
