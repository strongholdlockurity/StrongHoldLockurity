import ClientPage from "@/components/ClientPage";
import { getLocalBusinessSchema } from "@/lib/seo";

export const metadata = {
  title: "Stronghold Lockurity — Enterprise IT Infrastructure & Intelligent Security Solutions in Atlanta, GA",
  description:
    "Stronghold Lockurity delivers 24/7 Managed IT support, cloud integration, cybersecurity, structured Cat6/Fiber cabling, electronic access control, and commercial security hardware in Atlanta, GA. Cisco & CompTIA certified. 99.9% uptime SLA.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Stronghold Lockurity — Enterprise IT Infrastructure & Intelligent Security Solutions in Atlanta, GA",
    description:
      "Stronghold Lockurity delivers 24/7 Managed IT support, cloud integration, cybersecurity, structured Cat6/Fiber cabling, electronic access control, and commercial security hardware in Atlanta, GA.",
    images: ["https://strongholdlockurity.com/assets/it-services-server-rack-infrastructure-atlanta.jpg"],
  },
  twitter: {
    title: "Stronghold Lockurity — Enterprise IT Infrastructure & Intelligent Security Solutions in Atlanta, GA",
    description:
      "Stronghold Lockurity delivers 24/7 Managed IT support, cloud integration, cybersecurity, structured Cat6/Fiber cabling, electronic access control, and commercial security hardware in Atlanta, GA.",
    images: ["https://strongholdlockurity.com/assets/it-services-server-rack-infrastructure-atlanta.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
      />
      <ClientPage name="home" />
    </>
  );
}

