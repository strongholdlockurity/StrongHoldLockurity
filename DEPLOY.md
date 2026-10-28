# Deploying Stronghold Lockurity

Next.js 14 (App Router) running on Node. The site is four pages plus a
contact endpoint. Hostinger runs `npm install`, then the build command, then
the start command.

| Setting | Value |
|---|---|
| Node version | 20 or newer |
| Install command | `npm install` |
| Build command | `npm run build` |
| Start command | `npm start` |
| Port | Hostinger sets `PORT`; `next start` reads it |

This needs a plan with **Node.js / Web App hosting**. Static-only shared
hosting will not run it, because the contact form is a server route.

## Before the first deploy

Create the environment variables in hPanel (not in a committed file).
`.env.example` lists every one with notes:

```
MAIL_TO       where submissions are delivered
MAIL_FROM     the From address — must be a real mailbox on the domain
SMTP_HOST     smtp.hostinger.com
SMTP_PORT     465
SMTP_USER     the mailbox address
SMTP_PASS     that mailbox's password, not the hPanel login

SUPABASE_URL                 https://qxyxwbfhfbiydumlsvti.supabase.co
SUPABASE_SERVICE_ROLE_KEY    service_role key, server-only

GOOGLE_SITE_VERIFICATION     Search Console verification string (optional)
```

Create the sending mailbox first under hPanel → Emails. Without these three
SMTP values the form returns a 503 and tells the visitor to call instead —
it fails politely rather than silently swallowing enquiries.

The service role key bypasses row-level security, so it must never carry a
`NEXT_PUBLIC_` prefix or appear in client code. Copy it from Supabase →
Project settings → API keys → `service_role`.

## Contact form storage

Submissions are written to `public.contact_submissions` in the Supabase
project **StrongHold Lockurity Backend** *before* the email is sent, then the
row is updated with whether the email went out.

That ordering is the point: an SMTP outage no longer loses an enquiry. If the
row is stored but the email fails, the visitor still sees the thank-you — the
record exists, so chasing it is your job, not theirs. The failure is logged to
the row's `email_error` and to the server console.

If `SUPABASE_*` is unset the form still works and still emails; it just stores
nothing, and logs a warning.

Read submissions in the Supabase dashboard → Table Editor. To find any that
never emailed:

```sql
select created_at, name, email, phone, need, email_error
from contact_submissions
where email_sent = false
order by created_at desc;
```

Row-level security is enabled with **no policies**, so the anon key cannot
read or write the table — only this route's service role key can. The
Supabase linter reports that as an INFO notice; it is intentional, not a
misconfiguration.

## Local check

```
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

Copy `.env.example` to `.env` and fill it in to test the form locally. Next
loads `.env` automatically.

## Post-deploy checklist

- `/`, `/services`, `/about`, `/contact` all render
- `/service-areas` lists all ten, and each area page renders
- `/service-areas/nonsense` returns the 404, not an empty page
- `/services.html` redirects to `/services` (301)
- A contact form submission arrives at `MAIL_TO`, with a working reply-to
- That same submission appears as a row in `contact_submissions`, with
  `email_sent = true`
- Deliberately failing the maths question returns the inline error
- `/robots.txt` and `/sitemap.xml` resolve
- A nonsense URL returns the styled 404
- Images load on every page
- The site is reachable over HTTPS and `http://` redirects to it

## Structure

```
app/
  layout.jsx             html shell, design-system CSS, shared metadata
  page.jsx               /          — metadata + JSON-LD, mounts src/home
  services/page.jsx      /services
  about/page.jsx         /about
  contact/page.jsx       /contact
  service-areas/
    page.jsx             /service-areas — index, ItemList JSON-LD
    [slug]/page.jsx      /service-areas/<area> — 10 static pages, Service JSON-LD
  not-found.jsx          404
  api/contact/route.js   POST /api/contact
components/
  ClientPage.jsx         loads a page module in the browser only
lib/
  areas.js               service-area content + metadata (server and client)
  supabase.js            server-only Supabase client (service role)
src/
  boot.js                design-system load order
  react-globals.js       puts React on window for the bundle
  home.jsx services.jsx about.jsx contact.jsx
  areas-index.jsx area.jsx
site.jsx                 Header, Footer, Shot, Reveal, SITE, SERVICES, NAV
site.css                 site styles on top of the design system
public/
  assets/                images
  robots.txt sitemap.xml
_ds/                     design system — imported, not served
next.config.mjs          redirects, security headers
scripts/check-env.mjs    npm run check — verifies SMTP + Supabase config
```

## Service areas

Ten pages under `/service-areas/<slug>`, generated at build time from `AREAS`
in `lib/areas.js`. Adding or removing an area means editing that one file:
the route params, the metadata, the sitemap entry and the cross-links all
derive from it.

Seven are Atlanta neighborhoods and three (Smyrna, Decatur, Sandy Springs)
are separate municipalities, which the copy and the structured data treat
differently — calling them Atlanta neighborhoods would be wrong.

Each page's content describes that area's building stock and the hardware
problems that follow from it. There are deliberately no response-time
promises, job counts or per-area claims, because none were supplied. If you
want those added, they need to come from you.

## How the design system loads

The design system ships as a compiled browser script: it reads `window.React`
and writes its components to `window`. Nothing about that works during a
server render, so each page module is loaded through `next/dynamic` with
`ssr: false` and mounts in the browser. `src/boot.js` fixes the order —
React on `window`, then the bundle, then `site.jsx`.

So page bodies are client-rendered. Titles, descriptions, canonicals, Open
Graph tags and the JSON-LD are server-rendered from each route's `metadata`
export, which is what crawlers read first. This matches how the previous
static build behaved — it also rendered its body from JavaScript.

If you later want the body itself server-rendered, the design system has to
be imported as real React modules instead of read off `window`. That is a
larger change and touches every component import.

## Changes from the previous setup

The Express server, `vite.config.js`, the four root HTML files and the
precompiled `js/` bundles are gone. Next owns routing, the build and the
dev server.

`POST /api/contact` moved to `app/api/contact/route.js`. Same spam checks —
honeypot, timing, maths question — and the same per-IP rate limiting, with
one fix: the form posts `FormData`, which the Express version could not
actually parse. The route handler reads it natively.

Rate limiting lives in process memory, so it resets on redeploy and does not
coordinate across instances. Fine at this traffic level; if it ever needs to
be strict, move the counter to Redis.

Old `.html` URLs 301 to their clean equivalents, so anything already indexed
keeps working.
