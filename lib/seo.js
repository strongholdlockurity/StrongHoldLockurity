/**
 * SEO & Structured Data (JSON-LD) configuration for Stronghold Lockurity.
 *
 * Implements Google Search Console and Schema.org standards for:
 * - LocalBusiness / Locksmith rich results (Local Pack, Knowledge Graph)
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
  telephone: "+1-470-827-7019",
  telephoneDisplay: "(470) 827-7019",
  email: "stronghold@strongholdlockurity.com",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/stronghold-lockurity-logo-mark.png`,
  image: [
    `${SITE_URL}/assets/stronghold-lockurity-atlanta-georgia-security-company.jpg`,
    `${SITE_URL}/assets/access-control-reader-commercial-entry-door-atlanta.jpg`,
    `${SITE_URL}/assets/stronghold-lockurity-security-technicians-commercial-door-install.jpg`,
    `${SITE_URL}/assets/it-services-server-rack-infrastructure-atlanta.jpg`,
  ],
  description:
    "Stronghold Lockurity provides commercial & residential locksmithing, electronic access control, security hardware, IT infrastructure, structured cabling, and mobile automotive locksmith services across the Atlanta metropolitan area.",
  foundingDate: "2018",
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Debit Card, Check, Invoice",
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
      description: "24/7 Emergency Locksmith & Door Security Dispatch",
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
    name: "Residential, Commercial & Industrial IT Services",
    description: "Hardened network architectures, managed switches, VLAN segmentation, commercial Wi-Fi, failover networks, and OT security.",
    url: `${SITE_URL}/services#it-services`,
  },
  {
    id: "commercial",
    name: "Commercial & B2B Locksmithing",
    description: "Master key systems, commercial lock hardware, exit devices, panic hardware, storefront hardware, and emergency response.",
    url: `${SITE_URL}/services#commercial`,
  },
  {
    id: "access-control",
    name: "Electronic Access Control & Smart Security",
    description: "Credential-based access control, keyless entry locks, door controllers, fobs, card readers, and smart locks.",
    url: `${SITE_URL}/services#access-control`,
  },
  {
    id: "residential",
    name: "Residential Physical Security & Locksmithing",
    description: "High-security locks, deadbolt installation, door & strike reinforcement, patio door security, and residential rekeying.",
    url: `${SITE_URL}/services#residential`,
  },
  {
    id: "cabling",
    name: "Structured Cabling & Low-Voltage",
    description: "Cat6/fiber data runs, low-voltage cabling for access control and cameras, rack buildouts, and termination testing.",
    url: `${SITE_URL}/services#cabling`,
  },
  {
    id: "automotive",
    name: "Mobile Automotive Locksmith",
    description: "Mobile vehicle lockout response, car key replacement, transponder key programming, and ignition repair on site.",
    url: `${SITE_URL}/services#automotive`,
  },
];

/**
 * Root Locksmith & LocalBusiness JSON-LD schema for homepage
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "HomeAndConstructionBusiness"],
    "@id": `${SITE_URL}/#locksmith`,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    url: BUSINESS_INFO.url,
    logo: BUSINESS_INFO.logo,
    image: BUSINESS_INFO.image,
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    foundingDate: BUSINESS_INFO.foundingDate,
    priceRange: BUSINESS_INFO.priceRange,
    currenciesAccepted: BUSINESS_INFO.currenciesAccepted,
    paymentAccepted: BUSINESS_INFO.paymentAccepted,
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
      name: "Stronghold Lockurity Security & Locksmith Services",
      itemListElement: SERVICES_CATALOG.map((s, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.description,
          url: s.url,
        },
        position: index + 1,
      })),
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
    name: "Stronghold Lockurity Security, IT & Locksmith Services",
    description: "Comprehensive security hardware, access control, cabling, IT systems, and mobile locksmith services in Atlanta, GA.",
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
    name: "About Stronghold Lockurity",
    description: "Operating since 2018 in Atlanta, GA. Twelve specialists across physical hardware, electronic access control, cybersecurity, cloud implementations, and workstation support.",
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
    name: "Contact Stronghold Lockurity — Security Assessment & Locksmith Dispatch",
    description: "Request a security assessment or emergency locksmith dispatch in Atlanta, GA. Call (470) 827-7019 or submit our online form.",
    mainEntity: {
      "@id": `${SITE_URL}/#locksmith`,
    },
  };
}
