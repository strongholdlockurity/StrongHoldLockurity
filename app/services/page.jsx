import ClientPage from "@/components/ClientPage";
import { getBreadcrumbSchema, getServicesPageSchema } from "@/lib/seo";

export const metadata = {
  title: "Services — IT services, structured cabling, commercial, access control, residential and automotive | Stronghold Lockurity Atlanta",
  description:
    "Residential, commercial & industrial IT services, structured cabling, commercial locksmithing, electronic access control, residential security, and mobile automotive locksmithing in Atlanta, Georgia.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: "Services — IT services, structured cabling, commercial, access control, residential and automotive | Stronghold Lockurity Atlanta",
    description:
      "Residential, commercial & industrial IT services, structured cabling, commercial locksmithing, electronic access control, residential security, and mobile automotive locksmithing in Atlanta, Georgia.",
    images: ["https://strongholdlockurity.com/assets/it-services-server-rack-infrastructure-atlanta.jpg"],
  },
  twitter: {
    title: "Services — IT services, structured cabling, commercial, access control, residential and automotive | Stronghold Lockurity Atlanta",
    description:
      "Residential, commercial & industrial IT services, structured cabling, commercial locksmithing, electronic access control, residential security, and mobile automotive locksmithing in Atlanta, Georgia.",
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
      <ClientPage name="services" />
    </>
  );
}

