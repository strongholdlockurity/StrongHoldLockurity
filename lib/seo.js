/**
 * SEO, AEO (Answer Engine Optimization) & Structured Data (JSON-LD) configuration
 * for Stronghold Lockurity.
 *
 * Implements Google Search Console, Schema.org, and AI Answer Engine standards for:
 * - ProfessionalService / IT Infrastructure & Locksmith LocalBusiness rich results
 * - UnitPriceSpecification & OfferCatalog for Managed IT pricing & SLAs
 * - FAQPage structured Q&A for AI synthesis (ChatGPT Search, Perplexity, Google AI Overviews, Claude)
 * - BreadcrumbList rich snippets
 * - WebSite entity identity
 * - Service & ServiceCatalog listings
 * - ServiceArea geo-targeting
 */
import { AREAS } from "./areas";

export const SITE_URL = "https://strongholdlockurity.com";

export const BUSINESS_INFO = {
  name: "Stronghold Lockurity",
  legalName: "Stronghold Lockurity LLC",
  slogan: "Enterprise IT Infrastructure & Intelligent Security Solutions",
  telephone: "+1-470-827-7019",
  telephoneDisplay: "(470) 827-7019",
  email: "stronghold@strongholdlockurity.com",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/stronghold-lockurity-logo-mark.png`,
  image: [
    `${SITE_URL}/assets/it-services-server-rack-infrastructure-atlanta.jpg`,
    `${SITE_URL}/assets/stronghold-lockurity-atlanta-georgia-security-company.jpg`,
    `${SITE_URL}/assets/access-control-reader-commercial-entry-door-atlanta.jpg`,
    `${SITE_URL}/assets/stronghold-lockurity-security-technicians-commercial-door-install.jpg`,
  ],
  description:
    "Stronghold Lockurity delivers 24/7 Managed IT support, cloud integration, cybersecurity, structured Cat6/Fiber cabling, electronic access control, and commercial & residential security hardware across the Atlanta metropolitan area. Cisco & CompTIA certified engineers with a 99.9% uptime SLA and SOC2/HIPAA compliance readiness.",
  foundingDate: "2018",
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Debit Card, Check, ACH, Corporate Invoice",
  knowsAbout: [
    "Managed IT Services (MSP)",
    "Enterprise Network Infrastructure & Firewalls (Cisco, Meraki, UniFi)",
    "Cloud Integration & Administration (Microsoft 365, Azure AD / Entra ID, Google Workspace)",
    "Cybersecurity, Endpoint Detection & Response (EDR/MDR)",
    "SOC2 & HIPAA Technical and Physical Compliance Readiness",
    "Structured Cabling (Cat6, Cat6A, Fiber Optic Backbone, Server Rack Buildouts)",
    "Electronic Access Control (HID, Brivo, Verkada, PaxLock, Mobile Credentials, Biometrics)",
    "IP Video Surveillance & Cloud CCTV Archiving",
    "Commercial Grade-1 Door Hardware, Master Key Systems & Panic Exit Devices",
    "Residential Smart Home Security & High-Security Locks",
    "Commercial Fleet Key Management & Automotive Transponder Programming",
  ],
  hasCredential: [
    "Cisco Certified Network Associates & Engineers",
    "CompTIA A+, Network+, and Security+ Certified Technicians",
    "Licensed & Insured Georgia Physical Security & Locksmith Specialists",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "2454 Scottridge Dr",
    addressLocality: "Atlanta",
    addressRegion: "GA",
    postalCode: "30318",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.7915,
    longitude: -84.4485,
  },
  hasMap: "https://maps.google.com/?q=2454+Scottridge+Dr+Atlanta+GA+30318",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
      description: "24/7 Managed IT NOC Monitoring & Emergency Security Dispatch",
    },
  ],
  sameAs: [
    "https://www.facebook.com/StrongholdLockurity/",
    "https://www.instagram.com/strongholdlockurity/",
    "https://www.youtube.com/channel/UCSVHmn9UshwLsJcywXTAcwA",
    "https://www.tiktok.com/@strongholdlockurity",
  ],
  contactPoints: [
    {
      "@type": "ContactPoint",
      telephone: "+1-470-827-7019",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+1-470-827-7019",
      contactType: "technical support",
      areaServed: "US",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+1-470-827-7019",
      contactType: "emergency",
      areaServed: "US",
      availableLanguage: ["English"],
    },
  ],
};

/**
 * Areas served formatted for Schema.org areaServed property.
 */
export const AREAS_SERVED = [
  {
    "@type": "City",
    name: "Atlanta",
    sameAs: "https://en.wikipedia.org/wiki/Atlanta",
  },
  ...AREAS.map((a) => ({
    "@type": a.kind === "city" ? "City" : "Place",
    name: a.name,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: a.where,
    },
  })),
];

/**
 * Core services catalog for Schema.org
 */
export const SERVICES_CATALOG = [
  {
    id: "it-services",
    name: "Managed IT Support, Cloud & Cybersecurity",
    description:
      "24/7 proactive endpoint monitoring, Tier 1–3 helpdesk, cloud integration (M365/Workspace), Cisco/UniFi/Meraki networks, VLAN segmentation, and SOC2/HIPAA compliance readiness.",
    url: `${SITE_URL}/services#it-services`,
  },
  {
    id: "cabling",
    name: "Structured Cabling & Network Infrastructure",
    description:
      "Certified Cat6/Fiber backbone, server rack buildouts, high-density commercial Wi-Fi 6/7, and low-voltage PoE runs for access control and cameras.",
    url: `${SITE_URL}/services#cabling`,
  },
  {
    id: "access-control",
    name: "Electronic Access Control & Smart Security",
    description:
      "IP-connected door controllers, mobile/fob/biometric credentials, Active Directory sync, 4K cloud video surveillance, and compliance audit logs.",
    url: `${SITE_URL}/services#access-control`,
  },
  {
    id: "commercial",
    name: "Commercial Door Hardware & B2B Locksmithing",
    description:
      "Grade-1 commercial lock hardware, electrified strikes, maglocks, master key systems, code-compliant exit devices, and storefront hardware.",
    url: `${SITE_URL}/services#commercial`,
  },
  {
    id: "residential",
    name: "Residential Physical Security & Smart Home",
    description:
      "Whole-home Wi-Fi & smart lock integration, high-security deadbolts, door & strike reinforcement, and residential rekeying.",
    url: `${SITE_URL}/services#residential`,
  },
  {
    id: "automotive",
    name: "Commercial Fleet & Mobile Automotive Security",
    description:
      "Commercial fleet key management, on-site transponder & smart key programming, ignition service, and mobile vehicle lockout response.",
    url: `${SITE_URL}/services#automotive`,
  },
];

/**
 * Transparent Managed IT & Infrastructure Pricing Tiers for AEO Answer Synthesis
 */
export const MANAGED_IT_PRICING_OFFERS = [
  {
    "@type": "Offer",
    name: "Business Managed IT Plan (Standard)",
    description:
      "8x5 proactive helpdesk, remote workstation management, automated patch management, cloud administration (Microsoft 365 / Google Workspace), and basic endpoint protection.",
    url: `${SITE_URL}/#estimator`,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "75.00",
      priceCurrency: "USD",
      unitText: "user per month",
    },
  },
  {
    "@type": "Offer",
    name: "24/7 SOC & Compliance Enterprise Managed IT Plan",
    description:
      "24/7/365 NOC & SOC monitoring, advanced EDR/MDR threat hunting, quarterly on-site network & physical access audits, 99.9% uptime SLA, and SOC2 / HIPAA compliance log retention.",
    url: `${SITE_URL}/#estimator`,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "110.00",
      priceCurrency: "USD",
      unitText: "user per month",
    },
  },
  {
    "@type": "Offer",
    name: "Managed Wi-Fi 6 & Firewall Infrastructure Add-On",
    description:
      "Proactive management, firmware patching, VLAN segmentation, and failover monitoring for commercial firewalls and high-density wireless access points.",
    url: `${SITE_URL}/#estimator`,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "150.00",
      priceCurrency: "USD",
      unitText: "month",
    },
  },
  {
    "@type": "Offer",
    name: "IP Access Control Management Add-On",
    description:
      "Cloud credential administration, Active Directory / SSO user sync, door schedule updates, and compliance audit trail management.",
    url: `${SITE_URL}/#estimator`,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "200.00",
      priceCurrency: "USD",
      unitText: "month",
    },
  },
  {
    "@type": "Offer",
    name: "Cloud CCTV & Video Surveillance Archiving Add-On",
    description:
      "Encrypted cloud retention, camera health monitoring, and NVR firmware maintenance for commercial 4K IP security camera systems.",
    url: `${SITE_URL}/#estimator`,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "180.00",
      priceCurrency: "USD",
      unitText: "month",
    },
  },
];

/**
 * High-intent AEO Frequently Asked Questions for Homepage & Services
 */
export const HOME_FAQS = [
  {
    question: "How much does Managed IT support cost at Stronghold Lockurity in Atlanta?",
    answer:
      "Stronghold Lockurity offers two primary Managed IT support tiers for Atlanta businesses: the Business Managed IT plan at $75 per user/month (including 8x5 helpdesk, remote workstation management, automated patching, and cloud administration) and the 24/7 SOC & Compliance Enterprise plan at $110 per user/month (adding 24/7 NOC/SOC monitoring, advanced EDR/MDR threat hunting, a 99.9% uptime SLA, quarterly on-site security audits, and SOC2/HIPAA log management). Optional facility add-ons include Managed Wi-Fi 6 & Firewall ($150/mo), IP Access Control Management ($200/mo), and Cloud CCTV Archiving ($180/mo).",
  },
  {
    question: "What is Stronghold Lockurity's Hybrid IT and Physical Security model?",
    answer:
      "Unlike traditional IT Managed Service Providers (MSPs) who stop at the firewall or traditional locksmiths who don't understand IP networks, Stronghold Lockurity engineers and supports the entire 4-layer stack under one SLA: (1) Managed IT & Cloud Helpdesk, (2) Structured Cat6 & Fiber Optic Cabling, (3) IP Access Control & Cloud Surveillance synced with Active Directory/SSO, and (4) Grade-1 Commercial Door Hardware & Electrified Strikes. When an employee is onboarded or offboarded, both their cloud identity and physical building credentials are updated simultaneously.",
  },
  {
    question: "Does Stronghold Lockurity support SOC2 and HIPAA compliance for Atlanta businesses?",
    answer:
      "Yes. Stronghold Lockurity provides both digital and physical compliance readiness for SOC2 and HIPAA audited organizations across metro Atlanta. This includes network VLAN segmentation (isolating guest Wi-Fi, VoIP, corporate endpoints, and physical security devices), EDR/MDR endpoint protection, encrypted cloud backups, locked server rack enclosures, biometric/fob access control on MDF/IDF closets, and exportable door-entry audit logs.",
  },
  {
    question: "What certifications and SLA guarantees does Stronghold Lockurity provide?",
    answer:
      "Stronghold Lockurity's team of 12 specialists includes Cisco and CompTIA (A+, Network+, Security+) certified engineers alongside licensed Georgia physical security and door hardware technicians. Enterprise Managed IT clients receive a guaranteed 99.9% network uptime SLA, sub-15-minute remote helpdesk triage, and 24/7 emergency on-site dispatch across metro Atlanta.",
  },
  {
    question: "Which areas of metro Atlanta does Stronghold Lockurity serve?",
    answer:
      "Operating from 2454 Scottridge Dr in Atlanta (30318) since 2018, Stronghold Lockurity serves businesses, healthcare facilities, multi-tenant properties, and homeowners across Grant Park, West End, Buckhead, Virginia-Highland, Inman Park, Old Fourth Ward, Cabbagetown, Midtown, Downtown Atlanta, Smyrna (Cobb County), Decatur (DeKalb County), and Sandy Springs (Fulton County).",
  },
];

export const SERVICES_FAQS = [
  {
    question: "What is included in Stronghold Lockurity's Managed IT & Cybersecurity service?",
    answer:
      "Our Managed IT service (01) includes 24/7 proactive endpoint and server monitoring, Tier 1–3 remote and on-site helpdesk support, Microsoft 365 and Google Workspace administration, enterprise firewall and Wi-Fi engineering (Cisco, Meraki, UniFi), VLAN network segmentation, automated off-site cloud backups, disaster recovery planning, and SOC2/HIPAA compliance readiness.",
  },
  {
    question: "Can Stronghold Lockurity run Cat6/Fiber cabling and install the access control hardware on the same project?",
    answer:
      "Yes. Because Stronghold Lockurity houses both low-voltage structured cabling technicians and commercial door/access control specialists, we pull, terminate, Fluke-certify, and label Cat6, Cat6A, and Fiber Optic cabling (Service 02), build out the MDF/IDF server racks, mount the IP door controllers and PoE cameras (Service 03), and cut in the Grade-1 electrified strikes or maglocks (Service 04) as a single turnkey deployment.",
  },
  {
    question: "Does Stronghold Lockurity still provide 24/7 emergency commercial, residential, and automotive locksmith services?",
    answer:
      "Yes. Alongside our enterprise IT and electronic access control divisions, we operate 24/7 mobile dispatch across Atlanta for commercial door hardware repairs, panic bar and closer replacements, master key systems, residential lockouts and high-security deadbolt upgrades, and commercial fleet or personal automotive transponder/smart key programming.",
  },
];

/**
 * Generates Schema.org FAQPage JSON-LD from an array of { question, answer } objects
 */
export function getFAQPageSchema(faqs = HOME_FAQS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Root ProfessionalService, IT Infrastructure & Locksmith LocalBusiness JSON-LD schema
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Locksmith", "HomeAndConstructionBusiness"],
    "@id": `${SITE_URL}/#locksmith`,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    slogan: BUSINESS_INFO.slogan,
    url: BUSINESS_INFO.url,
    logo: BUSINESS_INFO.logo,
    image: BUSINESS_INFO.image,
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    foundingDate: BUSINESS_INFO.foundingDate,
    priceRange: BUSINESS_INFO.priceRange,
    currenciesAccepted: BUSINESS_INFO.currenciesAccepted,
    paymentAccepted: BUSINESS_INFO.paymentAccepted,
    knowsAbout: BUSINESS_INFO.knowsAbout,
    hasCredential: BUSINESS_INFO.hasCredential,
    address: BUSINESS_INFO.address,
    geo: BUSINESS_INFO.geo,
    hasMap: BUSINESS_INFO.hasMap,
    openingHoursSpecification: BUSINESS_INFO.openingHoursSpecification,
    sameAs: BUSINESS_INFO.sameAs,
    contactPoint: BUSINESS_INFO.contactPoints,
    areaServed: AREAS_SERVED,
    description: BUSINESS_INFO.description,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Stronghold Lockurity Enterprise IT, Access Control & Security Services",
      itemListElement: [
        ...SERVICES_CATALOG.map((s, index) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.name,
            description: s.description,
            url: s.url,
          },
          position: index + 1,
        })),
        ...MANAGED_IT_PRICING_OFFERS.map((offer, index) => ({
          ...offer,
          position: SERVICES_CATALOG.length + index + 1,
        })),
      ],
    },
  };
}

/**
 * WebSite schema for entity recognition and Google sitelinks
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.description,
    publisher: {
      "@id": `${SITE_URL}/#locksmith`,
    },
    inLanguage: "en-US",
  };
}

/**
 * BreadcrumbList schema generator for Google Search Console Breadcrumbs report
 * @param {Array<{ name: string, url: string }>} items
 */
export function getBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * Services page JSON-LD schema
 */
export function getServicesPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Stronghold Lockurity Managed IT, Structured Cabling, Access Control & Locksmith Services",
    description:
      "24/7 Managed IT support, cloud & cybersecurity, structured Cat6/Fiber cabling, electronic access control, commercial Grade-1 door hardware, residential smart security, and mobile automotive locksmith services in Atlanta, GA.",
    url: `${SITE_URL}/services`,
    numberOfItems: SERVICES_CATALOG.length,
    itemListElement: SERVICES_CATALOG.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        url: s.url,
        provider: {
          "@id": `${SITE_URL}/#locksmith`,
        },
        areaServed: AREAS_SERVED,
      },
    })),
  };
}

/**
 * About page schema
 */
export function getAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about#webpage`,
    url: `${SITE_URL}/about`,
    name: "About Stronghold Lockurity — Hybrid IT Infrastructure & Physical Security in Atlanta",
    description:
      "Operating since 2018 in Atlanta, GA. Twelve Cisco & CompTIA certified engineers and licensed physical security specialists delivering Managed IT, cloud, cybersecurity, structured cabling, electronic access control, and commercial door hardware under one SLA.",
    mainEntity: {
      "@id": `${SITE_URL}/#locksmith`,
    },
  };
}

/**
 * Contact page schema
 */
export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#webpage`,
    url: `${SITE_URL}/contact`,
    name: "Contact Stronghold Lockurity — Schedule an IT & Security Audit or Emergency Dispatch",
    description:
      "Schedule an IT & physical security audit, request a Managed IT proposal, or call (470) 827-7019 for 24/7 emergency dispatch in Atlanta, GA.",
    mainEntity: {
      "@id": `${SITE_URL}/#locksmith`,
    },
  };
}
