import ClientPage from "@/components/ClientPage";

export const metadata = {
  title: "Contact — Request a security assessment | Stronghold Lockurity Atlanta",
  description: "Tell Stronghold Lockurity what you need secured. Locksmithing, access control, door hardware and vehicle security in Atlanta, Georgia. Call (470) 827-7019 or send the form.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "Contact — Request a security assessment | Stronghold Lockurity Atlanta", description: "Tell Stronghold Lockurity what you need secured. Locksmithing, access control, door hardware and vehicle security in Atlanta, Georgia. Call (470) 827-7019 or send the form.",
  images: ["https://strongholdlockurity.com/assets/stronghold-lockurity-atlanta-georgia-security-company.jpg"], },
  twitter: { title: "Contact — Request a security assessment | Stronghold Lockurity Atlanta", description: "Tell Stronghold Lockurity what you need secured. Locksmithing, access control, door hardware and vehicle security in Atlanta, Georgia. Call (470) 827-7019 or send the form.",
  images: ["https://strongholdlockurity.com/assets/stronghold-lockurity-atlanta-georgia-security-company.jpg"], },
};

export default function Page() {
  return (
    <>
      <ClientPage name="contact" />
    </>
  );
}
