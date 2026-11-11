import Script from "next/script";
import ChatWidget from "@/components/ChatWidget";
import "../_ds/stronghold-lockurity-design-system-5c361a51-16d5-4db7-91a5-7a04bc936501/tokens/fonts.css";
import "../_ds/stronghold-lockurity-design-system-5c361a51-16d5-4db7-91a5-7a04bc936501/tokens/colors.css";
import "../_ds/stronghold-lockurity-design-system-5c361a51-16d5-4db7-91a5-7a04bc936501/tokens/typography.css";
import "../_ds/stronghold-lockurity-design-system-5c361a51-16d5-4db7-91a5-7a04bc936501/tokens/spacing.css";
import "../_ds/stronghold-lockurity-design-system-5c361a51-16d5-4db7-91a5-7a04bc936501/tokens/shape.css";
import "../_ds/stronghold-lockurity-design-system-5c361a51-16d5-4db7-91a5-7a04bc936501/tokens/elevation.css";
import "../_ds/stronghold-lockurity-design-system-5c361a51-16d5-4db7-91a5-7a04bc936501/styles.css";
import "../site.css";
import { getWebSiteSchema } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL("https://strongholdlockurity.com"),
  title: {
    default: "Stronghold Lockurity — Enterprise IT Infrastructure & Intelligent Security Solutions in Atlanta, GA",
    template: "%s | Stronghold Lockurity",
  },
  description:
    "Stronghold Lockurity delivers enterprise Managed IT support, cloud integration, cybersecurity, structured Cat6/Fiber cabling, electronic access control, and commercial security hardware in Atlanta, GA. Cisco & CompTIA certified. 99.9% uptime SLA.",
  applicationName: "Stronghold Lockurity",
  authors: [{ name: "Stronghold Lockurity", url: "https://strongholdlockurity.com" }],
  creator: "Stronghold Lockurity",
  publisher: "Stronghold Lockurity",
  keywords: [
    "managed IT services Atlanta",
    "IT support Atlanta",
    "structured cabling Atlanta",
    "electronic access control Atlanta",
    "cybersecurity Atlanta",
    "cloud migration Atlanta",
    "commercial locksmith Atlanta",
    "network infrastructure Atlanta",
    "SOC2 HIPAA IT compliance Atlanta",
    "smart access control Atlanta",
  ],
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/stronghold-lockurity-favicon.png",
    apple: "/assets/stronghold-lockurity-logo-mark.png",
  },
  openGraph: {
    type: "website",
    siteName: "Stronghold Lockurity",
    locale: "en_US",
    url: "https://strongholdlockurity.com",
    title: "Stronghold Lockurity — Enterprise IT Infrastructure & Intelligent Security Solutions in Atlanta, GA",
    description:
      "Managed IT support, cloud infrastructure, cybersecurity, structured cabling, electronic access control, and commercial security hardware across Atlanta, GA.",
    images: [
      {
        url: "/assets/it-services-server-rack-infrastructure-atlanta.jpg",
        width: 1200,
        height: 630,
        alt: "Stronghold Lockurity enterprise IT infrastructure and intelligent security solutions in Atlanta, GA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stronghold Lockurity — Enterprise IT Infrastructure & Intelligent Security Solutions in Atlanta, GA",
    description: "Managed IT support, cloud integration, structured cabling, electronic access control, and commercial security hardware in Atlanta, GA.",
    images: ["/assets/it-services-server-rack-infrastructure-atlanta.jpg"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
  other: {
    "geo.region": "US-GA",
    "geo.placename": "Atlanta",
    "geo.position": "33.7915;-84.4485",
    ICBM: "33.7915, -84.4485",
  },
};

export const viewport = { themeColor: "#101010" };

const gaMeasurementId = (
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
  process.env.GA_MEASUREMENT_ID ||
  "G-3XKCHRKZ6N"
).trim();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebSiteSchema()) }}
        />
        {gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        <a className="sh-skip" href="#main">
          Skip to content
        </a>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}

