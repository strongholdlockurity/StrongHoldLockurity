import Script from "next/script";
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
    default: "Stronghold Lockurity — Security hardware, access control and locksmithing in Atlanta, GA",
    template: "%s | Stronghold Lockurity",
  },
  description:
    "Stronghold Lockurity secures Atlanta homes, businesses, facilities and vehicles with physical security hardware, electronic access control, smart security, structured cabling, IT services and professional locksmithing. Operating since 2018. 24/7 emergency service.",
  applicationName: "Stronghold Lockurity",
  authors: [{ name: "Stronghold Lockurity", url: "https://strongholdlockurity.com" }],
  creator: "Stronghold Lockurity",
  publisher: "Stronghold Lockurity",
  keywords: [
    "locksmith Atlanta",
    "access control Atlanta",
    "commercial locksmith Atlanta",
    "security hardware",
    "electronic access control",
    "smart locks Atlanta",
    "master key systems",
    "structured cabling Atlanta",
    "automotive locksmith Atlanta",
    "emergency locksmith 30318",
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
    title: "Stronghold Lockurity — Security hardware, access control and locksmithing in Atlanta, GA",
    description:
      "Physical security hardware, electronic access control, smart security, structured cabling, IT services and professional locksmithing across Atlanta, GA.",
    images: [
      {
        url: "/assets/access-control-reader-commercial-entry-door-atlanta.jpg",
        width: 1200,
        height: 630,
        alt: "Stronghold Lockurity commercial access control and security hardware in Atlanta, GA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stronghold Lockurity — Security hardware, access control and locksmithing in Atlanta, GA",
    description: "Physical security hardware, electronic access control, structured cabling and professional locksmithing in Atlanta, GA.",
    images: ["/assets/access-control-reader-commercial-entry-door-atlanta.jpg"],
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
      </body>
    </html>
  );
}

