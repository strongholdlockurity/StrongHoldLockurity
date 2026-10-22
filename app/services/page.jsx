import ClientPage from "@/components/ClientPage";

export const metadata = {
  title: "Services — IT services, commercial, access control, residential, cabling and automotive | Stronghold Lockurity Atlanta",
  description: "Residential, commercial & industrial IT services, commercial locksmithing, electronic access control, residential security, structured cabling, and mobile automotive locksmithing in Atlanta, Georgia.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services", title: "Services — IT services, commercial, access control, residential, cabling and automotive | Stronghold Lockurity Atlanta", description: "Residential, commercial & industrial IT services, commercial locksmithing, electronic access control, residential security, structured cabling, and mobile automotive locksmithing in Atlanta, Georgia.",
  images: ["https://strongholdlockurity.com/assets/it-services-server-rack-infrastructure-atlanta.jpg"], },
  twitter: { title: "Services — IT services, commercial, access control, residential, cabling and automotive | Stronghold Lockurity Atlanta", description: "Residential, commercial & industrial IT services, commercial locksmithing, electronic access control, residential security, structured cabling, and mobile automotive locksmithing in Atlanta, Georgia.",
  images: ["https://strongholdlockurity.com/assets/it-services-server-rack-infrastructure-atlanta.jpg"], },
};

export default function Page() {
  return (
    <>
      <ClientPage name="services" />
    </>
  );
}
