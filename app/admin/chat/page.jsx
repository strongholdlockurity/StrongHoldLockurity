import { Suspense } from "react";
import AdminChatConsole from "@/components/AdminChatConsole";

export const metadata = {
  title: "Live Chat Console — Admin | Stronghold Lockurity",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminChatPage() {
  return (
    <Suspense
      fallback={
        <div className="sh-admin-shell">
          <div className="sh-admin-login-card">
            <div className="sh-num">STRONGHOLD LOCKURITY</div>
            <h1 className="sh-h3" style={{ marginTop: 8 }}>Loading Live Chat Console…</h1>
          </div>
        </div>
      }
    >
      <AdminChatConsole />
    </Suspense>
  );
}

