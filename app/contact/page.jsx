import ClientPage from "@/components/ClientPage";
import { getBreadcrumbSchema, getContactPageSchema } from "@/lib/seo";

export const metadata = {
  title: "Contact — Request a security assessment | Stronghold Lockurity Atlanta",
  description:
    "Tell Stronghold Lockurity what you need secured. Locksmithing, access control, door hardware and vehicle security in Atlanta, Georgia. Call (470) 827-7019 or send the form.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact — Request a security assessment | Stronghold Lockurity Atlanta",
    description:
      "Tell Stronghold Lockurity what you need secured. Locksmithing, access control, door hardware and vehicle security in Atlanta, Georgia. Call (470) 827-7019 or send the form.",
    images: ["https://strongholdlockurity.com/assets/stronghold-lockurity-atlanta-georgia-security-company.jpg"],
  },
  twitter: {
    title: "Contact — Request a security assessment | Stronghold Lockurity Atlanta",
    description:
      "Tell Stronghold Lockurity what you need secured. Locksmithing, access control, door hardware and vehicle security in Atlanta, Georgia. Call (470) 827-7019 or send the form.",
    images: ["https://strongholdlockurity.com/assets/stronghold-lockurity-atlanta-georgia-security-company.jpg"],
  },
};

export default function Page() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContactPageSchema()) }}
      />
      <ClientPage name="contact" />
    </>
  );
}

