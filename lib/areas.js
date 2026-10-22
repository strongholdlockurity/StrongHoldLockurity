/**
 * Service areas.
 *
 * Plain data, no React and no browser globals, so both the server (route
 * metadata, static params, sitemap) and the client page module can import it.
 *
 * Content note: `character` and `focus` describe building stock and the
 * hardware problems that follow from it. They deliberately contain no
 * response-time promises, job counts or per-area claims, because none were
 * supplied. `services` holds ids from SERVICES in site.jsx.
 */

export const AREAS = [
  {
    slug: "grant-park",
    name: "Grant Park",
    kind: "neighborhood",
    where: "Atlanta, GA",
    lead: "Grant Park's housing runs from 1880s Victorians to early Craftsman bungalows, and a great deal of it still carries the doors it was built with.",
    character:
      "Much of the neighborhood sits inside a designated historic district, which shapes what can be changed on a street-facing door. Original mortise locks, non-standard door thicknesses, and frames that have shifted over a century mean stock hardware frequently will not fit without modification. The park and Zoo Atlanta also put steady foot traffic past front doors that were never designed with that in mind.",
    focus: [
      "Mortise lock service and rebuilding, rather than replacing an original lock case with a modern bore",
      "Fitting a deadbolt into a century-old door without wrecking the stile or the finish",
      "Strike and frame reinforcement on doors that have dropped out of square",
      "Hardware finishes appropriate to a historic street frontage",
    ],
    services: ["residential", "commercial"],
    image: "/assets/service-area-historic-victorian-porch-entry-door-atlanta.png",
    imageAlt: "Victorian cottage porch and original wooden front door in a historic Atlanta neighborhood at dusk",
  },
  {
    slug: "west-end",
    name: "West End",
    kind: "neighborhood",
    where: "Atlanta, GA",
    lead: "One of Atlanta's oldest neighborhoods, with Victorian housing stock and a lot of it mid-renovation.",
    character:
      "West End's grand older homes are being worked on continuously, and renovation is where key control quietly breaks down. Contractors, subs and agents accumulate keys over a project, and the house changes hands with no record of who still holds one. Several of the larger houses have also been divided into separate units, which turns one front door into a keying question about who reaches which floor.",
    focus: [
      "Rekeying at the end of a renovation, once every trade has finished",
      "Separate keying for converted multi-unit houses and their common doors",
      "Turnover rekeys on rentals without replacing serviceable hardware",
      "Bringing original entry doors up to a real security standard",
    ],
    services: ["residential", "commercial"],
    image: "/assets/security-technician-access-control-installation-atlanta.jpg",
    imageAlt: "Security technician fitting door hardware during a renovation",
  },
  {
    slug: "buckhead",
    name: "Buckhead",
    kind: "neighborhood",
    where: "Atlanta, GA",
    lead: "High-rise towers, office buildings and large houses on wooded lots — three different security problems inside one district.",
    character:
      "In the towers, the lock is rarely the point: access runs on fobs, readers and a management company's credential list, and work has to be coordinated with the building rather than done at the unit door alone. The single-family side is the opposite problem — large houses with many exterior openings, a gate, a garage, and often a safe, where the weak point is whichever door nobody thought about.",
    focus: [
      "Fob and credential systems in condo and office towers, coordinated with building management",
      "Smart locks across multiple exterior doors, keyed and scheduled as one system",
      "Gate, garage and secondary entrances — the openings that get overlooked",
      "Safes and in-home secure storage",
    ],
    services: ["access-control", "residential", "commercial", "it-services"],
    image: "/assets/service-area-highrise-lobby-access-control-reader-buckhead.png",
    imageAlt: "High-rise residential tower entrance at dusk with an electronic access control reader beside glass doors",
  },
  {
    slug: "virginia-highland",
    name: "Virginia-Highland",
    kind: "neighborhood",
    where: "Atlanta, GA",
    lead: "1920s bungalows on the residential streets, and a dense commercial strip that closes late.",
    character:
      "The bungalows share a pattern: solid original doors, decades of paint, and hardware that has been replaced piecemeal by whoever owned the house at the time. The commercial frontage along North Highland is a different job entirely — restaurants and bars with glass storefronts, exit devices that have to stay code-compliant while taking hundreds of pushes a night, and closing procedures that depend on the hardware actually working at 2am.",
    focus: [
      "Bungalow entry upgrades where the original door is worth keeping",
      "Storefront exit devices and closers under heavy nightly use",
      "Panic hardware that satisfies egress requirements without leaving a door unsecured",
      "Rental turnover on the streets closest to the commercial strip",
    ],
    services: ["commercial", "residential"],
    image: "/assets/home-security-entry-door-hardware-smart-lock-atlanta.jpg",
    imageAlt: "Residential entry door hardware with a smart lock installed on a painted wood door",
  },
  {
    slug: "inman-park",
    name: "Inman Park",
    kind: "neighborhood",
    where: "Atlanta, GA",
    lead: "Atlanta's first planned suburb, with large Victorians and the Eastside Trail running along its edge.",
    character:
      "These are substantial houses whose owners generally want the appearance left alone. That rules out the usual approach of swapping in whatever modern hardware fits, and rules in restoration-grade work: servicing what is there, matching finishes, and putting the security into the parts nobody sees. The BeltLine frontage also changes the back of the property — rear and side doors that were once private now face a public trail.",
    focus: [
      "Restoration-grade hardware service on original doors and period locks",
      "Security that does not change how the front of the house looks",
      "Rear and side entrances facing the Eastside Trail",
      "High-security cylinders retrofitted into existing hardware",
    ],
    services: ["residential", "access-control"],
    image: "/assets/residential-locksmith-atlanta-high-security-deadbolt.jpg",
    imageAlt: "High-security deadbolt fitted to a residential entry door",
  },
  {
    slug: "old-fourth-ward",
    name: "Old Fourth Ward",
    kind: "neighborhood",
    where: "Atlanta, GA",
    lead: "Converted industrial buildings, new mid-rise apartments and ground-floor commercial, all turning over tenants.",
    character:
      "Old Fourth Ward is mostly a credential-management problem rather than a lock problem. Loft and apartment buildings have common doors, package rooms, garages and amenity spaces, each with its own list of who should get in, and that list changes every month. The building fabric adds its own difficulty: heavy steel and industrial doors that were built for freight, not for a reader and a schedule.",
    focus: [
      "Access control across common doors, garages and amenity spaces",
      "Credential issue and revocation as residents and tenants turn over",
      "Heavy steel and original industrial doors retrofitted with electronic hardware",
      "Ground-floor commercial spaces changing hands",
    ],
    services: ["access-control", "commercial", "cabling", "it-services"],
    image: "/assets/electronic-access-control-panel-installation-atlanta.jpg",
    imageAlt: "Electronic access control panel being installed in a commercial building",
  },
  {
    slug: "cabbagetown",
    name: "Cabbagetown",
    kind: "neighborhood",
    where: "Atlanta, GA",
    lead: "Shotgun cottages built for mill workers, and the mill itself, now lofts.",
    character:
      "The cottages are small, old and tightly built, with narrow doors and shallow stiles that leave very little material to work with — a standard deadbolt installation can be genuinely tight. The neighborhood's character also means visible hardware choices matter to people. The converted mill is the other half of the work: a large residential building with common entrances, stairwells and parking that all need controlled access.",
    focus: [
      "Deadbolt and lock fitting in narrow original doors with minimal stile depth",
      "Common entrance, stairwell and parking access for the loft building",
      "Hardware that suits the neighborhood's visible character",
      "Rekeys on cottages that have changed hands repeatedly",
    ],
    services: ["residential", "access-control"],
    image: "/assets/keyless-entry-access-control-keypad-atlanta.jpg",
    imageAlt: "Keypad entry unit mounted beside a building door for keyless access",
  },
  {
    slug: "smyrna",
    name: "Smyrna",
    kind: "city",
    where: "Cobb County, GA",
    lead: "Suburban subdivisions, mid-century ranches and newer construction, plus the commercial corridors between them.",
    character:
      "Newer Smyrna houses almost all arrive with builder-grade locks — the cheapest hardware that satisfied the certificate of occupancy, often keyed alike across a whole phase of the subdivision. Upgrading that is the most common residential job here. The ranches are the older problem: original doors, worn strikes, and additions whose doors were never brought up to the same standard as the front.",
    focus: [
      "Replacing builder-grade hardware that came with a new-build house",
      "Keypads and smart locks for households with children or regular visitors",
      "Small commercial along the corridors — retail, offices and service businesses",
      "Mobile automotive service, at home or wherever the vehicle is",
    ],
    services: ["residential", "commercial", "automotive"],
    image: "/assets/commercial-locksmith-atlanta-exit-device-panic-bar.jpg",
    imageAlt: "Commercial exit device push bar fitted to a glass storefront door",
  },
  {
    slug: "decatur",
    name: "Decatur",
    kind: "city",
    where: "DeKalb County, GA",
    lead: "Its own downtown square and a genuinely walkable commercial district, surrounded by bungalows and new infill.",
    character:
      "Decatur's commercial core is small businesses in older buildings — restaurants, shops and offices around the square, frequently with more staff than they have keys to track. Master keying is the recurring request: an owner who can open everything, managers who can open most of it, and staff who can open only what their shift needs. The residential side is steady rekey work as bungalows and infill houses turn over.",
    focus: [
      "Master key systems sized to how a small business actually staffs itself",
      "Restaurant and retail storefront hardware, closers and exit devices",
      "Key control when staff leave and keys do not come back",
      "Residential rekeys on purchase and on tenant turnover",
    ],
    services: ["commercial", "residential", "access-control"],
    image: "/assets/commercial-locksmith-atlanta-door-hardware.jpg",
    imageAlt: "Commercial door hardware on a storefront entrance",
  },
  {
    slug: "sandy-springs",
    name: "Sandy Springs",
    kind: "city",
    where: "Fulton County, GA",
    lead: "An office and medical corridor, apartment communities, and large residential streets behind them.",
    character:
      "The office and medical buildings drive most of the work: suite-level keying for tenants who come and go, readers on doors that need different schedules for staff, cleaners and after-hours access, and the low-voltage cabling that all of it runs on. Because readers, cameras and door controllers share the same infrastructure, the cabling and the hardware are usually one job rather than two vendors.",
    focus: [
      "Suite-level keying and tenant changes in multi-tenant office buildings",
      "Access schedules that differ for staff, cleaning crews and after-hours entry",
      "Structured cabling for readers, controllers and cameras",
      "Apartment community common areas, gates and amenity doors",
    ],
    services: ["access-control", "cabling", "commercial", "it-services"],
    image: "/assets/low-voltage-structured-cabling-installation-atlanta.jpg",
    imageAlt: "Low-voltage structured cabling installation in a commercial ceiling space",
  },
];

export const NEIGHBORHOODS = AREAS.filter((a) => a.kind === "neighborhood");
export const CITIES = AREAS.filter((a) => a.kind === "city");

export const areaBySlug = (slug) => AREAS.find((a) => a.slug === slug);

/** Metadata is generated from the same record, so it cannot drift from the page. */
export function areaMeta(area) {
  const place = area.kind === "city" ? `${area.name}, GA` : `${area.name}, Atlanta`;
  return {
    title: `${area.name} locksmith & security — ${place} | Stronghold Lockurity`,
    description: `${area.lead} Stronghold Lockurity provides locksmithing, door hardware and electronic access control in ${area.name}. Operating since 2018, with 24/7 emergency service.`,
    canonical: `/service-areas/${area.slug}`,
  };
}
