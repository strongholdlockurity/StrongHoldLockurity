import ClientPage from "@/components/ClientPage";
import {
  getBreadcrumbSchema,
  getServicesPageSchema,
  getFAQPageSchema,
  SERVICES_FAQS,
  SERVICES_CATALOG,
} from "@/lib/seo";

export const metadata = {
  title: "Services — Managed IT, structured cabling, access control, commercial door hardware & locksmithing | Stronghold Lockurity Atlanta",
  description:
    "24/7 Managed IT support, cloud & cybersecurity, structured Cat6/Fiber cabling, electronic access control, commercial Grade-1 door hardware, residential smart security, and mobile automotive locksmithing in Atlanta, Georgia.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: "Services — Managed IT, structured cabling, access control, commercial door hardware & locksmithing | Stronghold Lockurity Atlanta",
    description:
      "24/7 Managed IT support, cloud & cybersecurity, structured Cat6/Fiber cabling, electronic access control, commercial Grade-1 door hardware, residential smart security, and mobile automotive locksmithing in Atlanta, Georgia.",
    images: ["https://strongholdlockurity.com/assets/it-services-server-rack-infrastructure-atlanta.jpg"],
  },
  twitter: {
    title: "Services — Managed IT, structured cabling, access control, commercial door hardware & locksmithing | Stronghold Lockurity Atlanta",
    description:
      "24/7 Managed IT support, cloud & cybersecurity, structured Cat6/Fiber cabling, electronic access control, commercial Grade-1 door hardware, residential smart security, and mobile automotive locksmithing in Atlanta, Georgia.",
    images: ["https://strongholdlockurity.com/assets/it-services-server-rack-infrastructure-atlanta.jpg"],
  },
};

export default function Page() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getServicesPageSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQPageSchema(SERVICES_FAQS)) }}
      />
      <section className="sh-hp" aria-label="Stronghold Lockurity Full Service Catalog">
        <h1>Stronghold Lockurity Services — Managed IT, Structured Cabling, Electronic Access Control &amp; Physical Security</h1>
        <p>
          Six integrated practices delivered by Cisco &amp; CompTIA certified IT engineers and licensed Georgia physical
          security technicians across metro Atlanta.
        </p>
        <ul>
          {SERVICES_CATALOG.map((s, idx) => (
            <li key={s.id}>
              <h2>
                0{idx + 1}. {s.name}
              </h2>
              <p>{s.description}</p>
            </li>
          ))}
        </ul>
        <h2>Services FAQ</h2>
        <dl>
          {SERVICES_FAQS.map((faq) => (
            <div key={faq.question}>
              <dt>{faq.question}</dt>
              <dd>{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
      <ClientPage name="services" />
    </>
  );
}
