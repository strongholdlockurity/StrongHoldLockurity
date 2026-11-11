import ClientPage from "@/components/ClientPage";
import { getBreadcrumbSchema, getAboutPageSchema } from "@/lib/seo";

export const metadata = {
  title: "About — Hybrid IT infrastructure, access control & physical security | Stronghold Lockurity",
  description:
    "Stronghold Lockurity has secured Atlanta businesses, healthcare facilities, multi-tenant properties, and homes since 2018. Twelve specialists across Managed IT, cloud, cybersecurity, structured cabling, electronic access control, and Grade-1 door hardware.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About — Hybrid IT infrastructure, access control & physical security | Stronghold Lockurity",
    description:
      "Stronghold Lockurity has secured Atlanta businesses, healthcare facilities, multi-tenant properties, and homes since 2018. Twelve specialists across Managed IT, cloud, cybersecurity, structured cabling, electronic access control, and Grade-1 door hardware.",
    images: ["https://strongholdlockurity.com/assets/stronghold-lockurity-security-technicians-commercial-door-install.jpg"],
  },
  twitter: {
    title: "About — Hybrid IT infrastructure, access control & physical security | Stronghold Lockurity",
    description:
      "Stronghold Lockurity has secured Atlanta businesses, healthcare facilities, multi-tenant properties, and homes since 2018. Twelve specialists across Managed IT, cloud, cybersecurity, structured cabling, electronic access control, and Grade-1 door hardware.",
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
      <section className="sh-hp" aria-label="About Stronghold Lockurity">
        <h1>About Stronghold Lockurity — Hybrid IT &amp; Physical Security Engineers Since 2018</h1>
        <p>
          Founded in 2018 and headquartered at 2454 Scottridge Dr, Atlanta, GA 30318, Stronghold Lockurity bridges the
          gap between Managed IT Services (MSP) and commercial physical security. Our 12-person team includes Cisco and
          CompTIA certified network engineers, low-voltage Cat6/Fiber cabling installers, electronic access control
          specialists, and licensed commercial locksmiths.
        </p>
        <p>
          We maintain a 99.9% uptime SLA for Managed IT clients, support SOC2 and HIPAA physical + technical compliance
          audits, and operate 24/7 emergency dispatch at (470) 827-7019.
        </p>
      </section>
      <ClientPage name="about" />
    </>
  );
}
