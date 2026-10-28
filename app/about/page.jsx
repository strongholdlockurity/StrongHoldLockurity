import ClientPage from "@/components/ClientPage";
import { getBreadcrumbSchema, getAboutPageSchema } from "@/lib/seo";

export const metadata = {
  title: "About — Security hardware, access control & IT infrastructure | Stronghold Lockurity",
  description:
    "Stronghold Lockurity has secured Atlanta homes, businesses, facilities and vehicles since 2018. Twelve specialists across physical hardware, electronic access control, cybersecurity, cloud implementations, and workstation support.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About — Security hardware, access control & IT infrastructure | Stronghold Lockurity",
    description:
      "Stronghold Lockurity has secured Atlanta homes, businesses, facilities and vehicles since 2018. Twelve specialists across physical hardware, electronic access control, cybersecurity, cloud implementations, and workstation support.",
    images: ["https://strongholdlockurity.com/assets/stronghold-lockurity-security-technicians-commercial-door-install.jpg"],
  },
  twitter: {
    title: "About — Security hardware, access control & IT infrastructure | Stronghold Lockurity",
    description:
      "Stronghold Lockurity has secured Atlanta homes, businesses, facilities and vehicles since 2018. Twelve specialists across physical hardware, electronic access control, cybersecurity, cloud implementations, and workstation support.",
    images: ["https://strongholdlockurity.com/assets/stronghold-lockurity-security-technicians-commercial-door-install.jpg"],
  },
};

export default function Page() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getAboutPageSchema()) }}
      />
      <ClientPage name="about" />
    </>
  );
}

