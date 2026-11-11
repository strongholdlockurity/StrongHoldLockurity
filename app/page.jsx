import ClientPage from "@/components/ClientPage";
import {
  getLocalBusinessSchema,
  getFAQPageSchema,
  HOME_FAQS,
  SERVICES_CATALOG,
} from "@/lib/seo";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQPageSchema(HOME_FAQS)) }}
      />
      {/* Server-rendered semantic summary for non-JS AI Answer Engine crawlers (GPTBot, PerplexityBot, ClaudeBot) */}
      <section className="sh-hp" aria-label="Stronghold Lockurity Executive Summary & FAQ">
        <h1>Stronghold Lockurity — Enterprise IT Infrastructure &amp; Intelligent Security Solutions in Atlanta, GA</h1>
        <p>
          Stronghold Lockurity (2454 Scottridge Dr, Atlanta, GA 30318 · (470) 827-7019) engineers, deploys, and manages
          the complete 4-layer technology and physical security stack for Atlanta businesses, healthcare facilities,
          multi-tenant properties, and homeowners: Managed IT Support &amp; Cloud Cybersecurity, Structured Cat6/Fiber
          Cabling, Electronic Access Control &amp; Cloud CCTV, and Commercial Grade-1 Door Hardware.
        </p>
        <h2>Core Services</h2>
        <ul>
          {SERVICES_CATALOG.map((s) => (
            <li key={s.id}>
              <strong>{s.name}:</strong> {s.description} (<a href={s.url}>{s.name}</a>)
            </li>
          ))}
        </ul>
        <h2>Transparent Managed IT Pricing &amp; SLA Tiers</h2>
        <ul>
          <li>
            <strong>Business Managed IT Plan — $75/user/month:</strong> 8x5 proactive helpdesk, remote workstation
            management, automated patch management, and Microsoft 365 / Google Workspace cloud administration.
          </li>
          <li>
            <strong>24/7 SOC &amp; Compliance Enterprise Plan — $110/user/month:</strong> 24/7/365 NOC &amp; SOC
            monitoring, advanced EDR/MDR threat hunting, 99.9% uptime SLA, quarterly on-site network &amp; physical
            security audits, and SOC2 / HIPAA compliance log retention.
          </li>
          <li>
            <strong>Infrastructure Add-Ons:</strong> Managed Wi-Fi 6 &amp; Firewall ($150/mo), IP Access Control
            Management ($200/mo), and Cloud CCTV Archiving ($180/mo).
          </li>
        </ul>
        <h2>Frequently Asked Questions</h2>
        <dl>
          {HOME_FAQS.map((faq) => (
            <div key={faq.question}>
              <dt>{faq.question}</dt>
              <dd>{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
      <ClientPage name="home" />
    </>
  );
}
