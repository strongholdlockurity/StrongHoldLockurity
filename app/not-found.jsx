export const metadata = {
  title: "Page not found — Stronghold Lockurity",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="nf">
      <div className="nf-in">
        <span className="nf-code">Error 404</span>
        <h1 className="sh-h2">That page is not here.</h1>
        <p className="sh-p">The address you followed does not match anything on this site. It may have moved, or the link may have been mistyped. The four pages below are the whole site.</p>
        <div className="nf-links">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <p className="sh-p-sm" style={{ color: "var(--sl-mute)" }}>If you need someone now, call <a href="tel:+14708277019" style={{ fontFamily: "var(--sl-font-mono)" }}>(470) 827-7019</a>. The line is staffed for emergencies around the clock.</p>
      </div>
    </div>
  );
}
