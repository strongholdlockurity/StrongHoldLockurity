import "../_ds/stronghold-lockurity-design-system-5c361a51-16d5-4db7-91a5-7a04bc936501/tokens/fonts.css";
import "../_ds/stronghold-lockurity-design-system-5c361a51-16d5-4db7-91a5-7a04bc936501/tokens/colors.css";
import "../_ds/stronghold-lockurity-design-system-5c361a51-16d5-4db7-91a5-7a04bc936501/tokens/typography.css";
import "../_ds/stronghold-lockurity-design-system-5c361a51-16d5-4db7-91a5-7a04bc936501/tokens/spacing.css";
import "../_ds/stronghold-lockurity-design-system-5c361a51-16d5-4db7-91a5-7a04bc936501/tokens/shape.css";
import "../_ds/stronghold-lockurity-design-system-5c361a51-16d5-4db7-91a5-7a04bc936501/tokens/elevation.css";
import "../_ds/stronghold-lockurity-design-system-5c361a51-16d5-4db7-91a5-7a04bc936501/styles.css";
import "../site.css";

export const metadata = {
  metadataBase: new URL("https://strongholdlockurity.com"),
  title: "Stronghold Lockurity",
  robots: { index: true, follow: true },
  icons: { icon: "/assets/stronghold-lockurity-favicon.png" },
  openGraph: { type: "website", siteName: "Stronghold Lockurity", locale: "en_US" },
  twitter: { card: "summary_large_image" },
};

export const viewport = { themeColor: "#101010" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="sh-skip" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
