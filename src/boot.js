/**
 * Design-system bootstrap. Import order is load order and is significant:
 *
 *   1. react-globals.js  puts React / ReactDOM on window
 *   2. _ds_bundle.js     a plain browser script; reads window.React and
 *                        writes window.StrongholdLockurityDesignSystem_5c361a
 *   3. site.jsx          reads that global and republishes the shared
 *                        components (Header, Footer, Shot, SITE, SERVICES...)
 *
 * Only ever reached in the browser — the page modules that import this are
 * loaded through next/dynamic with ssr: false, because none of the above
 * exists on the server.
 */
import "./react-globals.js";
import "../_ds/stronghold-lockurity-design-system-5c361a51-16d5-4db7-91a5-7a04bc936501/_ds_bundle.js";
import "../site.jsx";
