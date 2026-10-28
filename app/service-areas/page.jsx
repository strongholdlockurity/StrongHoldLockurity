import ClientPage from "@/components/ClientPage";
import { AREAS } from "@/lib/areas";
import { getBreadcrumbSchema } from "@/lib/seo";

const title = "Service areas — Atlanta neighborhoods, Smyrna, Decatur and Sandy Springs | Stronghold Lockurity";
const description =
  "Where Stronghold Lockurity works: Grant Park, West End, Buckhead, Virginia-Highland, Inman Park, Old Fourth Ward and Cabbagetown in Atlanta, plus Smyrna, Decatur and Sandy Springs. Locksmithing, door hardware and electronic access control.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/service-areas" },
  openGraph: {
    url: "/service-areas",
    title,
    description,
    images: ["https://strongholdlockurity.com/assets/stronghold-lockurity-atlanta-georgia-security-company.jpg"],
  },
  twitter: {
    title,
    description,
    images: ["https://strongholdlockurity.com/assets/stronghold-lockurity-atlanta-georgia-security-company.jpg"],
  },
};

export default function Page() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/service-areas" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Stronghold Lockurity service areas",
            itemListElement: AREAS.map((a, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: a.name,
              url: `https://strongholdlockurity.com/service-areas/${a.slug}`,
            })),
          }),
        }}
      />
      <ClientPage name="areas" />
    </>
  );
}

