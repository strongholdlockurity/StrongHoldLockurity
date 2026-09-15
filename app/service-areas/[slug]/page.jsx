import { notFound } from "next/navigation";
import ClientPage from "@/components/ClientPage";
import { AREAS, areaBySlug, areaMeta } from "@/lib/areas";

/* Ten known slugs, built at build time. Anything else 404s rather than
   rendering an empty page for an area we do not cover. */
export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }) {
  const area = areaBySlug(params.slug);
  if (!area) return {};
  const { title, description, canonical } = areaMeta(area);
  const image = `https://strongholdlockurity.com${area.image}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { url: canonical, title, description, images: [image] },
    twitter: { title, description, images: [image] },
  };
}

export default function Page({ params }) {
  const area = areaBySlug(params.slug);
  if (!area) notFound();

  /* Service-level structured data, scoped to this area. Only facts already
     published elsewhere on the site appear here. */
  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Locksmith and security hardware services",
    provider: {
      "@type": "Locksmith",
      name: "Stronghold Lockurity",
      telephone: "+1-470-827-7019",
      email: "stronghold@strongholdlockurity.com",
      foundingDate: "2018",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2454 Scottridge Dr",
        addressLocality: "Atlanta",
        addressRegion: "GA",
        postalCode: "30318",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": area.kind === "city" ? "City" : "Place",
      name: area.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: area.kind === "city" ? area.name : "Atlanta",
        addressRegion: "GA",
        addressCountry: "US",
      },
    },
    description: area.lead,
    url: `https://strongholdlockurity.com/service-areas/${area.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ClientPage name="area" slug={area.slug} />
    </>
  );
}
