import ClientPage from "@/components/ClientPage";
import { getBreadcrumbSchema, getContactPageSchema } from "@/lib/seo";

export const metadata = {
  title: "Contact — Schedule an IT & security audit or request a proposal | Stronghold Lockurity Atlanta",
  description:
    "Schedule an IT & physical security audit, request a Managed IT proposal, or call (470) 827-7019 for 24/7 emergency dispatch in Atlanta, Georgia.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact — Schedule an IT & security audit or request a proposal | Stronghold Lockurity Atlanta",
    description:
      "Schedule an IT & physical security audit, request a Managed IT proposal, or call (470) 827-7019 for 24/7 emergency dispatch in Atlanta, Georgia.",
    images: ["https://strongholdlockurity.com/assets/stronghold-lockurity-atlanta-georgia-security-company.jpg"],
  },
  twitter: {
    title: "Contact — Schedule an IT & security audit or request a proposal | Stronghold Lockurity Atlanta",
    description:
      "Schedule an IT & physical security audit, request a Managed IT proposal, or call (470) 827-7019 for 24/7 emergency dispatch in Atlanta, Georgia.",
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
      <section className="sh-hp" aria-label="Contact Stronghold Lockurity">
        <h1>Contact Stronghold Lockurity — Schedule an IT &amp; Security Audit</h1>
        <p>
          Phone (24/7 NOC &amp; Emergency Dispatch): (470) 827-7019 · Email: stronghold@strongholdlockurity.com ·
          Address: 2454 Scottridge Dr, Atlanta, GA 30318 · Scheduled Hours: Monday–Saturday 9:00am–6:00pm (24/7
          Emergency &amp; NOC response).
        </p>
      </section>
      <ClientPage name="contact" />
    </>
  );
}
