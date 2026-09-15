import ClientPage from "@/components/ClientPage";

export const metadata = {
  title: "Services — Commercial, access control, residential, cabling and automotive security | Stronghold Lockurity Atlanta",
  description: "Commercial and B2B locksmithing, electronic access control and smart security, residential physical security, structured cabling and low-voltage, and mobile automotive locksmithing in Atlanta, Georgia.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services", title: "Services — Commercial, access control, residential, cabling and automotive security | Stronghold Lockurity Atlanta", description: "Commercial and B2B locksmithing, electronic access control and smart security, residential physical security, structured cabling and low-voltage, and mobile automotive locksmithing in Atlanta, Georgia.",
  images: ["https://strongholdlockurity.com/assets/commercial-locksmith-atlanta-exit-device-panic-bar.jpg"], },
  twitter: { title: "Services — Commercial, access control, residential, cabling and automotive security | Stronghold Lockurity Atlanta", description: "Commercial and B2B locksmithing, electronic access control and smart security, residential physical security, structured cabling and low-voltage, and mobile automotive locksmithing in Atlanta, Georgia.",
  images: ["https://strongholdlockurity.com/assets/commercial-locksmith-atlanta-exit-device-panic-bar.jpg"], },
};

export default function Page() {
  return (
    <>
      <ClientPage name="services" />
    </>
  );
}
