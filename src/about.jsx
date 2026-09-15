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
  "Commercial locksmithing", "Master key system design", "Access control installation",
  "Electronic and smart locks", "Residential hardware", "Door and frame repair",
  "Automotive locksmithing", "Mobile dispatch", "Estimating and site survey",
  "Structured cabling and low-voltage", "Termination and testing",
  "Scheduling and client service", "Emergency response", "Key control administration",
];

function About() {
  return (
    <React.Fragment>
      <Header active="about" />
      <main id="main">
        <HeroBand
          className="sh-hero"
          eyebrow="ABOUT"
          headline="Security is only as strong as the people behind it."
          lead="Stronghold Lockurity is a twelve-person security company in Atlanta. We install physical hardware, build access control systems, and do locksmithing across residential, commercial, industrial and automotive work."
          actions={<Button href="/contact">Talk to a security expert</Button>}
          aside={<Reveal delay={120}><Shot priority id="about-hero" variant="sh-shot-wide" src="/assets/stronghold-lockurity-security-technicians-commercial-door-install.jpg" alt="Stronghold Lockurity technicians installing a door closer and electronic lock on a commercial door" placeholder="Image — the team, a service vehicle, or a technician on an install" /></Reveal>}
        />

        <ContentBand className="sh-band" eyebrow="OUR STORY" headline="Operating in Atlanta since 2018.">
          <div className="sh-split">
            <Reveal className="sh-stack" style={{ gap: "var(--sl-space-lg)" }}>
              <p className="sh-p">
                The company started in 2018 doing what most locksmiths do: rekeys, lockouts, hardware swaps. The work changed as the requests did. Clients who called about a broken deadbolt also wanted to know why three former employees still had keys, and whether the reader at the back door could be tied to the same system.
              </p>
              <p className="sh-p">
                So the capability grew in that direction — from mechanical hardware into electronic access control, from single doors into buildings, and from homes into commercial and industrial properties. The automotive side stayed mobile, because vehicles rarely break down somewhere convenient.
              </p>
            </Reveal>
            <Reveal delay={80} className="sh-stack" style={{ gap: "var(--sl-space-lg)" }}>
              <p className="sh-p">
                Today the team is twelve people. That is deliberate. It is large enough to cover commercial installs, emergency calls and mobile automotive work in the same week, and small enough that the person who surveys your building is connected to the person who installs the hardware.
              </p>
              <p className="sh-p">
                We are not a franchise, and we are not a dispatch board selling your call to whoever is nearest. When you phone Stronghold Lockurity you are speaking to the company that does the work.
              </p>
            </Reveal>
          </div>
        </ContentBand>

        <GreenDividerBand />

        <ContentBand
          className="sh-band"
          eyebrow="THE TEAM"
          headline="Twelve specialists, one set of standards."
          lead="Physical security, electronics and locksmithing are separate trades that keep landing in the same job. The team is built so that all three are in the room."
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
