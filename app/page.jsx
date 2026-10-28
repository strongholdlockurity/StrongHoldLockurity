import ClientPage from "@/components/ClientPage";
import { getLocalBusinessSchema } from "@/lib/seo";

export const metadata = {
  title: "Stronghold Lockurity — Security hardware, access control and locksmithing in Atlanta, GA",
  description:
    "Stronghold Lockurity secures Atlanta homes, businesses, facilities and vehicles with physical security hardware, electronic access control, smart security, structured cabling, IT services and professional locksmithing. Operating since 2018. 24/7 emergency service.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Stronghold Lockurity — Security hardware, access control and locksmithing in Atlanta, GA",
    description:
      "Stronghold Lockurity secures Atlanta homes, businesses, facilities and vehicles with physical security hardware, electronic access control, smart security, structured cabling, IT services and professional locksmithing. Operating since 2018. 24/7 emergency service.",
    images: ["https://strongholdlockurity.com/assets/access-control-reader-commercial-entry-door-atlanta.jpg"],
  },
  twitter: {
    title: "Stronghold Lockurity — Security hardware, access control and locksmithing in Atlanta, GA",
    description:
      "Stronghold Lockurity secures Atlanta homes, businesses, facilities and vehicles with physical security hardware, electronic access control, smart security, structured cabling, IT services and professional locksmithing. Operating since 2018. 24/7 emergency service.",
    images: ["https://strongholdlockurity.com/assets/access-control-reader-commercial-entry-door-atlanta.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
      />
      <ClientPage name="home" />
    </>
  );
}

