import ClientPage from "@/components/ClientPage";

export const metadata = {
  title: "Stronghold Lockurity — Security hardware, access control and locksmithing in Atlanta, GA",
  description: "Stronghold Lockurity secures Atlanta homes, businesses, facilities and vehicles with physical security hardware, electronic access control, smart security, structured cabling and professional locksmithing. Operating since 2018. 24/7 emergency service.",
  alternates: { canonical: "/" },
  openGraph: { url: "/", title: "Stronghold Lockurity — Security hardware, access control and locksmithing in Atlanta, GA", description: "Stronghold Lockurity secures Atlanta homes, businesses, facilities and vehicles with physical security hardware, electronic access control, smart security, structured cabling and professional locksmithing. Operating since 2018. 24/7 emergency service.",
  images: ["https://strongholdlockurity.com/assets/access-control-reader-commercial-entry-door-atlanta.jpg"], },
  twitter: { title: "Stronghold Lockurity — Security hardware, access control and locksmithing in Atlanta, GA", description: "Stronghold Lockurity secures Atlanta homes, businesses, facilities and vehicles with physical security hardware, electronic access control, smart security, structured cabling and professional locksmithing. Operating since 2018. 24/7 emergency service.",
  images: ["https://strongholdlockurity.com/assets/access-control-reader-commercial-entry-door-atlanta.jpg"], },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Locksmith\",\"name\":\"Stronghold Lockurity\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"2454 Scottridge Dr\",\"addressLocality\":\"Atlanta\",\"addressRegion\":\"GA\",\"postalCode\":\"30318\",\"addressCountry\":\"US\"},\"telephone\":\"+1-470-827-7019\",\"email\":\"stronghold@strongholdlockurity.com\",\"foundingDate\":\"2018\",\"openingHours\":\"Mo-Sa 09:00-18:00\",\"areaServed\":\"Atlanta, Georgia\",\"description\":\"Physical security hardware, electronic access control, smart security, structured cabling and locksmithing for residential, commercial, industrial and automotive clients in Atlanta, Georgia.\"}" }} />
      <ClientPage name="home" />
    </>
  );
}
