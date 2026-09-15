import ClientPage from "@/components/ClientPage";

export const metadata = {
  title: "About — A twelve-person Atlanta security team | Stronghold Lockurity",
  description: "Stronghold Lockurity has secured Atlanta homes, businesses, facilities and vehicles since 2018. Twelve specialists across physical security hardware, electronic access control and locksmithing.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About — A twelve-person Atlanta security team | Stronghold Lockurity", description: "Stronghold Lockurity has secured Atlanta homes, businesses, facilities and vehicles since 2018. Twelve specialists across physical security hardware, electronic access control and locksmithing.",
  images: ["https://strongholdlockurity.com/assets/stronghold-lockurity-security-technicians-commercial-door-install.jpg"], },
  twitter: { title: "About — A twelve-person Atlanta security team | Stronghold Lockurity", description: "Stronghold Lockurity has secured Atlanta homes, businesses, facilities and vehicles since 2018. Twelve specialists across physical security hardware, electronic access control and locksmithing.",
  images: ["https://strongholdlockurity.com/assets/stronghold-lockurity-security-technicians-commercial-door-install.jpg"], },
};

export default function Page() {
  return (
    <>
      <ClientPage name="about" />
    </>
  );
}
