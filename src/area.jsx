"use client";
import "./boot";
import { NEIGHBORHOODS, CITIES, areaBySlug } from "@/lib/areas";

function OtherAreas({ current }) {
  const link = (a) => (
    <a className="sh-arealink" key={a.slug} href={`/service-areas/${a.slug}`}>
      {a.name}
    </a>
  );
  return (
    <ContentBand className="sh-band" eyebrow="ELSEWHERE" headline="Other areas we cover.">
      <div className="sh-stack" style={{ gap: "var(--sl-space-2xl)" }}>
        <div className="sh-stack" style={{ gap: "var(--sl-space-md)" }}>
          <span className="sh-cap">Atlanta neighborhoods</span>
          <div className="sh-arealinks">{NEIGHBORHOODS.filter((a) => a.slug !== current).map(link)}</div>
        </div>
        <div className="sh-stack" style={{ gap: "var(--sl-space-md)" }}>
          <span className="sh-cap">Cities</span>
          <div className="sh-arealinks">{CITIES.filter((a) => a.slug !== current).map(link)}</div>
        </div>
      </div>
    </ContentBand>
  );
}

export default function AreaPage({ slug }) {
  const area = areaBySlug(slug);
  if (!area) return null;
  const lines = SERVICES.filter((s) => area.services.includes(s.id));
  const label = area.kind === "city" ? area.where : `${area.name} — Atlanta, GA`;

  return (
    <React.Fragment>
      <Header active="areas" />
      <main id="main">
        <HeroBand
          className="sh-hero"
          style={{ paddingTop: "var(--sl-space-6xl)", paddingBottom: "var(--sl-space-5xl)" }}
          eyebrow={`SERVICE AREA — ${label.toUpperCase()}`}
          headline={`Security and locksmithing in ${area.name}.`}
          lead={area.lead}
          actions={
            <React.Fragment>
              <Button href="/contact">Request a security assessment</Button>
              <Button variant="outline" href={SITE.phoneHref}>Call {SITE.phone}</Button>
            </React.Fragment>
          }
          note={`${SITE.emergency} · ${SITE.phone}`}
          aside={
            <Reveal delay={120}>
              <Shot
                priority
                id={`area-${area.slug}`}
                variant="sh-shot-wide"
                src={area.image}
                alt={area.imageAlt}
                placeholder={`Image — ${area.name}`}
              />
            </Reveal>
          }
        />

        <ContentBand className="sh-band" eyebrow="WHAT WE SEE HERE" headline={`The hardware problem in ${area.name}.`}>
          <div className="sh-split-6-4">
            <Reveal>
              <p className="sh-p" style={{ maxWidth: 620, lineHeight: "var(--sl-prose-line)" }}>{area.character}</p>
            </Reveal>
            <Reveal delay={80}>
              <Card>
                <span className="sh-cap">Common requests</span>
                <ul className="sh-focus">
                  {area.focus.map((f) => (
                    <li key={f}><span className="sh-p-sm" style={{ color: "var(--sl-body)" }}>{f}</span></li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </ContentBand>

        <ContentBand
          className="sh-band"
          eyebrow="SERVICE LINES"
          headline={`What we most often do in ${area.name}.`}
          lead="The full range is available everywhere we work. These are the lines this area calls on most."
        >
          <div className="sh-g3">
            {lines.map((s, n) => (
              <Reveal key={s.id} delay={n * 60}>
                <Card style={{ height: "100%" }}>
                  <div className="sh-row" style={{ justifyContent: "space-between" }}>
                    <span className="sh-num">{s.num}</span>
                  </div>
                  <h3 className="sh-h4" style={{ margin: "var(--sl-space-md) 0 var(--sl-space-sm)" }}>{s.name}</h3>
                  <p className="sh-p-sm" style={{ color: "var(--sl-body)", lineHeight: "var(--sl-prose-line)" }}>{s.short}</p>
                  <a className="sh-svc-go" style={{ marginTop: "var(--sl-space-lg)" }} href={`/services#${s.id}`}>
                    See what we handle <span aria-hidden="true">→</span>
                  </a>
                </Card>
              </Reveal>
            ))}
          </div>
        </ContentBand>

        <OtherAreas current={area.slug} />
        <ClosingCTA
          eyebrow={`${area.name.toUpperCase()}`}
          headline={`Need someone in ${area.name}?`}
          lead={`Tell us the address and what is failing. If it cannot wait, call — ${SITE.emergency.toLowerCase()}.`}
        />
      </main>
      <Footer />
    </React.Fragment>
  );
}
