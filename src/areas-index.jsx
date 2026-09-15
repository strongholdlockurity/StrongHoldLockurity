"use client";
import "./boot";
import { NEIGHBORHOODS, CITIES } from "@/lib/areas";

function AreaCard({ area, n }) {
  return (
    <Reveal delay={n * 50}>
      <a className="sh-areacard" href={`/service-areas/${area.slug}`}>
        <div className="sh-row" style={{ justifyContent: "space-between" }}>
          <span className="sh-cap">{area.where}</span>
          <span className="sh-num">{String(n + 1).padStart(2, "0")}</span>
        </div>
        <h3 className="sh-h3">{area.name}</h3>
        <p className="sh-p-sm" style={{ color: "var(--sl-mute)", lineHeight: "var(--sl-prose-line)" }}>{area.lead}</p>
        <span className="sh-svc-go">See {area.name} <span aria-hidden="true">→</span></span>
      </a>
    </Reveal>
  );
}

export default function AreasIndex() {
  return (
    <React.Fragment>
      <Header active="areas" />
      <main id="main">
        <HeroBand
          className="sh-hero"
          style={{ paddingTop: "var(--sl-space-6xl)", paddingBottom: "var(--sl-space-5xl)" }}
          eyebrow="SERVICE AREAS"
          headline="Where we work, and what changes from street to street."
          lead="Atlanta's building stock varies enormously over short distances. A 1890s Victorian in Grant Park, a converted mill loft in Cabbagetown and a Buckhead tower are three different security problems, and the right answer in one is the wrong answer in the others."
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
                id="areas-hero"
                variant="sh-shot-wide"
                src="/assets/stronghold-lockurity-atlanta-georgia-security-company.jpg"
                alt="Atlanta street at dusk with the downtown skyline beyond, seen from an intown industrial block"
                placeholder="Image — Atlanta intown neighborhoods at dusk"
              />
            </Reveal>
          }
        />

        <ContentBand
          className="sh-band"
          eyebrow="INSIDE THE CITY"
          headline="Atlanta neighborhoods."
          lead="Seven neighborhoods where the housing stock, and therefore the hardware, has its own particular character."
        >
          <div className="sh-g3">
            {NEIGHBORHOODS.map((a, n) => (<AreaCard area={a} n={n} key={a.slug} />))}
          </div>
        </ContentBand>

        <ContentBand
          className="sh-band"
          eyebrow="BEYOND THE CITY LINE"
          headline="Cities we also cover."
          lead="Three separate municipalities, each with its own building department and its own mix of commercial and residential work."
        >
          <div className="sh-g3">
            {CITIES.map((a, n) => (<AreaCard area={a} n={n} key={a.slug} />))}
          </div>
        </ContentBand>

        <ContentBand className="sh-band">
          <Reveal className="sh-stack" style={{ gap: "var(--sl-space-lg)", maxWidth: 680 }}>
            <Eyebrow>NOT ON THE LIST</Eyebrow>
            <h2 className="sh-h2">We cover more than this.</h2>
            <p className="sh-p">
              These are the areas we are asked about most often. We work across the Atlanta area generally, including for mobile automotive service, which goes wherever the vehicle is. If you do not see your neighborhood, call and ask.
            </p>
            <div className="sh-row">
              <Button variant="outline" href={SITE.phoneHref}>Call {SITE.phone}</Button>
            </div>
          </Reveal>
        </ContentBand>

        <ClosingCTA />
      </main>
      <Footer />
    </React.Fragment>
  );
}
