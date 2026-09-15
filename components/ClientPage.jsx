"use client";
import dynamic from "next/dynamic";

/**
 * The design system ships as a compiled browser script that reads window.React
 * and writes its components onto window. None of that exists during a server
 * render, so every page module is loaded with ssr: false and mounts in the
 * browser only. src/boot.js owns the load order.
 *
 * The consequence worth knowing: page markup is client-rendered. Crawlers get
 * the metadata and JSON-LD from the server, then the body once JS runs — the
 * same arrangement the previous static build had.
 */
const PAGES = {
  home: dynamic(() => import("@/src/home"), { ssr: false }),
  services: dynamic(() => import("@/src/services"), { ssr: false }),
  about: dynamic(() => import("@/src/about"), { ssr: false }),
  contact: dynamic(() => import("@/src/contact"), { ssr: false }),
  areas: dynamic(() => import("@/src/areas-index"), { ssr: false }),
  area: dynamic(() => import("@/src/area"), { ssr: false }),
};

export default function ClientPage({ name, ...props }) {
  const Page = PAGES[name];
  if (!Page) return null;
  return <Page {...props} />;
}
