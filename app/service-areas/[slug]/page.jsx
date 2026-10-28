import { notFound } from "next/navigation";
import ClientPage from "@/components/ClientPage";
import { AREAS, areaBySlug, areaMeta } from "@/lib/areas";
import { getBreadcrumbSchema, BUSINESS_INFO } from "@/lib/seo";

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

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/service-areas" },
    { name: area.name, url: `/service-areas/${area.slug}` },
  ]);

  /* Service-level structured data, scoped to this area. */
  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Locksmith and Security Hardware Services",
    provider: {
      "@type": "Locksmith",
      "@id": "https://strongholdlockurity.com/#locksmith",
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.telephone,
      email: BUSINESS_INFO.email,
      url: BUSINESS_INFO.url,
      logo: BUSINESS_INFO.logo,
      image: BUSINESS_INFO.image,
      foundingDate: BUSINESS_INFO.foundingDate,
      priceRange: BUSINESS_INFO.priceRange,
      sameAs: BUSINESS_INFO.sameAs,
      address: BUSINESS_INFO.address,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ClientPage name="area" slug={area.slug} />
    </>
  );
}

