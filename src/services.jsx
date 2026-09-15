"use client";
import "./boot";

function SubNav() {
  const [active, setActive] = React.useState(SERVICES[0].id);
  React.useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    SERVICES.forEach((s) => { const el = document.getElementById(s.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <div className="sh-subnav">
      <div className="sh-wrap">
        {SERVICES.map((s) => (
          <a key={s.id} href={`#${s.id}`} data-active={active === s.id}>
            <span className="sh-num" style={{ marginRight: 8 }}>{s.num}</span>{s.name}
          </a>
        ))}
      </div>
    </div>
  );
}

function ServiceSection({ s, flip }) {
  return (
    <section id={s.id} className="sh-band" style={{ borderTop: "1px solid var(--sl-hairline)", scrollMarginTop: 128 }}>
      <div className="sh-wrap sh-stack" style={{ gap: "var(--sl-space-4xl)" }}>
        <Reveal className="sh-split" style={{ alignItems: "end", gap: "var(--sl-space-3xl)" }}>
          <div className="sh-stack" style={{ gap: "var(--sl-space-lg)" }}>
            <span className="sh-num" style={{ fontSize: "var(--sl-display-sm-size)" }}>{s.num}</span>
            <h2 className="sh-h2">{s.name}</h2>
            <p className="sh-p" style={{ maxWidth: 560 }}>{s.short}</p>
          </div>
          <div className="sh-stack" style={{ gap: "var(--sl-space-md)" }}>
            <span className="sh-cap">Who it's for</span>
            <p className="sh-p-sm" style={{ color: "var(--sl-ink)" }}>{s.who}</p>
            <div className="sh-chips">{s.chips.map((c) => (<span className="sh-chip" key={c}>{c}</span>))}</div>
          </div>
        </Reveal>

        <div className={`sh-split ${flip ? "sh-flip" : ""}`} style={{ gap: "var(--sl-space-4xl)" }}>
          <Reveal delay={60}><Shot id={`svc-${s.id}`} variant="sh-shot-wide" src={s.img} alt={`${s.name} — Stronghold Lockurity, Atlanta, Georgia`} placeholder={`Image — ${s.name.toLowerCase()}`} /></Reveal>
          <Reveal delay={120} className="sh-stack" style={{ gap: "var(--sl-space-2xl)" }}>
            <div className="sh-stack" style={{ gap: "var(--sl-space-sm)" }}>
              <span className="sh-cap">The problem</span>
              <p className="sh-p">{s.problem}</p>
            </div>
            <DashedRule />
            <div className="sh-stack" style={{ gap: "var(--sl-space-sm)" }}>
              <span className="sh-cap">How we approach it</span>
              <p className="sh-p">{s.solution}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <Card>
            <div className="sh-split" style={{ gap: "var(--sl-space-3xl)", alignItems: "start" }}>
              <div className="sh-stack" style={{ gap: "var(--sl-space-lg)" }}>
                <h3 className="sh-h4">What we handle</h3>
                <p className="sh-p-sm" style={{ color: "var(--sl-mute)" }}>Scope varies by property. Tell us the situation and we will confirm what applies.</p>
                <div className="sh-row">
                  <Button href="/contact">Talk to a security expert</Button>
                  <Button variant="ghost" href={SITE.phoneHref}>{SITE.phone}</Button>
                </div>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: "var(--sl-space-md)" }}>
                {s.handles.map((h) => (
                  <li key={h} style={{ display: "grid", gridTemplateColumns: "16px minmax(0,1fr)", gap: "var(--sl-space-md)", color: "var(--sl-body)", fontSize: "var(--sl-body-sm-size)", lineHeight: "var(--sl-body-sm-line)" }}>
                    <span style={{ color: "var(--sl-primary)", fontFamily: "var(--sl-font-mono)" }}>—</span>{h}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <React.Fragment>
      <Header active="services" />
      <main id="main">
        <HeroBand
          className="sh-hero"
          eyebrow="SERVICES"
          headline="Security solutions for every point of entry."
          lead="Five service lines covering physical hardware, electronic access, cabling infrastructure, homes and vehicles. Start with the one closest to your situation — if it sits between two, that is normal, and we handle both."
          actions={
            <React.Fragment>
              <Button href="/contact">Request a security assessment</Button>
              <Button variant="outline" href="#commercial">See the five services</Button>
            </React.Fragment>
          }
          note={`24/7 emergency service · ${SITE.phone}`}
        />
        <SubNav />
        {SERVICES.map((s, i) => (<ServiceSection key={s.id} s={s} flip={i % 2 === 1} />))}
        <ClosingCTA
          eyebrow="NOT SURE WHICH ONE"
          headline="Describe the problem. We'll tell you which service it is."
          lead="Most requests start with a door that isn't working, a key that shouldn't exist, or a building that changed hands. You don't need to categorise it first."
        />
      </main>
      <Footer />
    </React.Fragment>
  );
}
export default Services;
