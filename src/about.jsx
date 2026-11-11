"use client";
import "./boot";

const WORK = [
  ["We look at the opening, not the lock", "A lock is one component in an assembly. Before we quote anything we look at the door, frame, strike, hinges and how the opening is actually used."],
  ["We say what we would do", "You get a recommendation, not a menu of upsells. If the existing hardware is fine and only needs a rekey, that is what we will tell you."],
  ["We size it to the real risk", "Over-specified security gets propped open by the people who use it every day. The right system is the one that will still be followed in six months."],
  ["We finish the job", "Alignment, screw length, strike depth, credential handover and documentation. The parts that decide whether the hardware performs."],
];

const BELIEFS = [
  ["Understandable", "You should be able to explain your own security to someone else."],
  ["Properly installed", "Most failures are installation failures, not product failures."],
  ["Appropriate", "Matched to the actual risk, not to the invoice."],
  ["Scalable", "Adding a door, a tenant or a staff member should not mean starting over."],
  ["Reliable", "Hardware that works on the thousandth cycle, not the tenth."],
  ["Manageable", "You, not us, should be in control of who holds access."],
];

const DISCIPLINES = [
  "24/7 Managed IT & Tier 1–3 Helpdesk", "Cisco & CompTIA Certified Engineering",
  "Cyber-security & network hardening", "Cloud implementations (M365 & Workspace)",
  "SOC2, HIPAA & PCI compliance readiness", "VLAN segmentation & Zero-Trust VPNs",
  "Structured Cat6/Fiber cabling", "Server rack buildouts & certification",
  "Workstation support (Windows, Linux, macOS)", "IP access control & directory sync",
  "4K AI cloud video surveillance", "Electrified door hardware & maglocks",
  "Commercial Grade-1 door hardware", "Master key system architecture",
  "Residential smart home & security", "Commercial fleet & automotive keys",
];

const IT_OPTIONS = [
  {
    title: "Cyber-Security",
    tagline: "Threat mitigation & network hardening",
    desc: "Physical doors and network access are interconnected. We protect your business from both physical breaches and digital threats.",
    points: [
      "Firewall deployment & intrusion prevention systems",
      "VLAN & network segmentation for IoT, cameras & access control",
      "Zero-trust remote access & secure business VPNs",
      "Endpoint threat detection & vulnerability assessments",
      "Automated disaster recovery & encrypted backup systems",
    ],
  },
  {
    title: "Cloud Implementations",
    tagline: "Scalable infrastructure & remote management",
    desc: "Modernize your operations with resilient cloud services that streamline collaboration and enable secure access from anywhere.",
    points: [
      "Microsoft 365 & Google Workspace deployment and migrations",
      "Cloud-managed access control & surveillance systems",
      "Hybrid cloud storage & multi-site data synchronization",
      "Identity management, single sign-on (SSO) & multi-factor auth (MFA)",
      "Cloud disaster recovery & automated failover planning",
    ],
  },
  {
    title: "Workstation Support",
    tagline: "Windows, macOS & Linux environments",
    desc: "Complete cross-platform provisioning, maintenance, and helpdesk support for executive, office, and industrial shop-floor computers.",
    points: [
      "Cross-platform OS configuration (Windows, Linux, macOS)",
      "Hardware provisioning, fleet rollouts & lifecycle management",
      "Fast remote diagnostics & responsive on-site troubleshooting",
      "Security hardening, endpoint patch management & anti-malware",
      "Peripheral, local backup & specialized software configuration",
    ],
  },
];

function About() {
  return (
    <React.Fragment>
      <Header active="about" />
      <main id="main">
        <HeroBand
          className="sh-hero"
          eyebrow="ABOUT STRONGHOLD"
          headline="Enterprise IT engineers and physical security specialists under one roof."
          lead="Stronghold Lockurity is a twelve-person IT infrastructure and intelligent security firm in Atlanta. Backed by Cisco and CompTIA certifications and a 99.9% uptime SLA, we manage cloud and network environments, pull structured cabling, deploy IP access control, and engineer commercial door hardware."
          actions={<Button href="/contact">Schedule an IT &amp; Security Audit</Button>}
          aside={<Reveal delay={120}><Shot priority id="about-hero" variant="sh-shot-wide" src="/assets/it-network-engineer-commercial-industrial-setup-atlanta.jpg" alt="Stronghold Lockurity engineer configuring enterprise network and security infrastructure in Atlanta" placeholder="Image — IT & security engineering team" /></Reveal>}
        />

        <ContentBand className="sh-band" eyebrow="OUR EVOLUTION" headline="Operating in Atlanta since 2018 — built for the hybrid era.">
          <div className="sh-split">
            <Reveal className="sh-stack" style={{ gap: "var(--sl-space-lg)" }}>
              <p className="sh-p">
                Stronghold began in 2018 securing physical openings across Atlanta. As commercial facilities moved from brass keys to IP door controllers, cloud identity directories, and PoE surveillance, clients kept running into the same wall: their Managed IT provider stopped at the patch panel, and their door contractor didn't understand VLANs, firewalls, or Active Directory.
              </p>
              <p className="sh-p">
                We built Stronghold to close that gap. Today our team leads with enterprise Managed IT support, cybersecurity hardening, cloud migrations, and certified structured cabling — seamlessly integrated with electronic access control and commercial door hardware.
              </p>
            </Reveal>
            <Reveal delay={80} className="sh-stack" style={{ gap: "var(--sl-space-lg)" }}>
              <p className="sh-p">
                Our twelve-person in-house roster pairs Cisco and CompTIA certified network engineers with master low-voltage and physical security technicians. That allows us to support a 99.9% network uptime SLA, guide SMBs and clinics through SOC2 and HIPAA compliance, and service the physical door assembly on the same ticket.
              </p>
              <p className="sh-p">
                We are not a franchise, and we never outsource your infrastructure to a third-party dispatch board. When you partner with Stronghold Lockurity, you work directly with the engineers who design, cable, and manage your environment.
              </p>
            </Reveal>
          </div>
        </ContentBand>

        <GreenDividerBand />

        <ContentBand
          className="sh-band"
          eyebrow="THE TEAM"
          headline="Twelve specialists, one set of standards."
          lead="Physical security, electronics, IT systems and locksmithing are separate trades that keep landing in the same job. The team is built so that all of them are in the room."
        >
          <div className="sh-split-4-6">
            <Reveal><Shot id="about-team" variant="sh-shot-tall" src="/assets/security-technician-access-control-installation-atlanta.jpg" alt="Security technician terminating low-voltage cable at a door controller enclosure" placeholder="Image — team portrait or technicians on site" /></Reveal>
            <Reveal delay={80} className="sh-stack" style={{ gap: "var(--sl-space-xl)" }}>
              <p className="sh-p">Disciplines covered in house:</p>
              <div className="sh-chips">
                {DISCIPLINES.map((d) => (<span className="sh-chip" key={d} style={{ padding: "var(--sl-space-sm) var(--sl-space-md)" }}>{d}</span>))}
              </div>
            </Reveal>
          </div>
        </ContentBand>

        <ContentBand
          className="sh-band"
          eyebrow="IT SUPPORT & IMPLEMENTATION"
          headline="Cyber-security, cloud infrastructure, and workstation support."
          lead="Securing a modern facility requires protecting both physical doors and digital networks. We provide dedicated IT implementation and ongoing cross-platform support across residential, commercial, and industrial environments."
        >
          <div className="sh-g3">
            {IT_OPTIONS.map((it, n) => (
              <Reveal key={it.title} delay={n * 70}>
                <Card style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div className="sh-stack" style={{ gap: "var(--sl-space-md)" }}>
                    <div className="sh-stack" style={{ gap: "var(--sl-space-xs)" }}>
                      <span className="sh-cap" style={{ color: "var(--sl-primary)", fontFamily: "var(--sl-font-mono)", letterSpacing: "0.8px" }}>
                        {it.tagline}
                      </span>
                      <h3 className="sh-h4">{it.title}</h3>
                    </div>
                    <p className="sh-p-sm" style={{ color: "var(--sl-mute)" }}>{it.desc}</p>
                    <DashedRule />
                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: "var(--sl-space-sm)" }}>
                      {it.points.map((p) => (
                        <li key={p} style={{ display: "grid", gridTemplateColumns: "14px minmax(0,1fr)", gap: "var(--sl-space-sm)", color: "var(--sl-body)", fontSize: "var(--sl-body-sm-size)", lineHeight: "var(--sl-body-sm-line)" }}>
                          <span style={{ color: "var(--sl-primary)", fontFamily: "var(--sl-font-mono)" }}>—</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ marginTop: "var(--sl-space-xl)" }}>
                    <Button variant="ghost" href="/contact">Inquire about {it.title}</Button>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </ContentBand>

        <ContentBand className="sh-band" eyebrow="HOW WE WORK" headline="Four habits that decide the outcome.">
          <div className="sh-g2">
            {WORK.map(([t, d], n) => (
              <Reveal key={t} delay={n * 60}>
                <Card style={{ height: "100%" }}>
                  <span className="sh-num">{String(n + 1).padStart(2, "0")}</span>
                  <h3 className="sh-h4" style={{ margin: "var(--sl-space-md) 0 var(--sl-space-sm)" }}>{t}</h3>
                  <p className="sh-p-sm" style={{ lineHeight: "var(--sl-prose-line)" }}>{d}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </ContentBand>

        <ContentBand
          className="sh-band"
          eyebrow="WHAT WE BELIEVE"
          headline="Security should be six things."
          lead="These are the tests we apply to our own recommendations before we make them."
        >
          <div className="sh-g3">
            {BELIEFS.map(([t, d], n) => (
              <Reveal key={t} delay={n * 50} style={{ borderTop: "1px solid var(--sl-hairline)", paddingTop: "var(--sl-space-lg)" }}>
                <h3 className="sh-h4" style={{ marginBottom: "var(--sl-space-sm)" }}>{t}</h3>
                <p className="sh-p-sm" style={{ color: "var(--sl-mute)" }}>{d}</p>
              </Reveal>
            ))}
          </div>
        </ContentBand>

        <ClosingCTA
          eyebrow="TALK TO US"
          headline="Ask us something specific."
          lead="Bring the awkward question — the door that never latched, the master key nobody can account for, the reader that was installed by someone else. That is the conversation we are good at."
        />
      </main>
      <Footer />
    </React.Fragment>
  );
}
export default About;
