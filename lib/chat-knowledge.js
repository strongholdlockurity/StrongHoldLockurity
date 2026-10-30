/**
 * Site-content knowledge engine for Stronghold Lockurity Live Chat.
 *
 * Answers visitor questions directly from the site's actual service catalog,
 * service areas (`lib/areas.js`), and company information (`site.jsx`, `src/about.jsx`).
 * Automatically steps aside once a human team member replies in the thread.
 */
import { AREAS } from "@/lib/areas";

export const SITE_INFO = {
  name: "Stronghold Lockurity",
  phone: "(470) 827-7019",
  email: "stronghold@strongholdlockurity.com",
  address: "2454 Scottridge Dr, Atlanta, GA 30318",
  hours: "Monday – Saturday, 9:00 AM – 6:00 PM",
  emergency: "24/7 emergency service",
  founded: 2018,
  teamSize: 12,
};

export const SITE_SERVICES = [
  {
    id: "it-services",
    name: "Residential, Commercial & Industrial IT Services",
    url: "/services#it-services",
    keywords: [
      "it", "network", "wifi", "wi-fi", "unifi", "meraki", "vlan", "firewall",
      "server", "rack", "cyber", "cybersecurity", "cloud", "microsoft 365",
      "google workspace", "workstation", "computer", "laptop", "windows", "mac",
      "linux", "vpn", "failover", "backup", "ups", "ot", "iot",
    ],
    summary:
      "We engineer, deploy, and support hardened network architectures, cybersecurity, cloud implementations (Microsoft 365 / Google Workspace), and workstation support (Windows, macOS, Linux) for homes, offices, and industrial facilities.",
    handles: [
      "Commercial network engineering, firewalls & managed PoE switches (UniFi / Meraki)",
      "VLAN segmentation for IoT, access control, cameras & guest networks",
      "Dual-WAN, 5G cellular automated failover & backup power (UPS)",
      "Cyber-security hardening, zero-trust VPNs & endpoint protection",
      "Cloud migrations (Microsoft 365 & Google Workspace), SSO & MFA",
      "Cross-platform workstation support (Windows, Linux, macOS)",
    ],
  },
  {
    id: "commercial",
    name: "Commercial & B2B Locksmithing",
    url: "/services#commercial",
    keywords: [
      "commercial", "business", "office", "retail", "storefront", "master key",
      "panic bar", "push bar", "exit device", "closer", "door closer", "b2b",
      "tenant", "warehouse", "restricted key", "key control", "aluminium door", "aluminum door",
    ],
    summary:
      "We survey commercial openings, design master key systems you can actually administer, and install commercial-grade locks, closers, and exit hardware built for heavy daily traffic.",
    handles: [
      "Commercial lock installation, repair & replacement",
      "Rekeying & master key system design (owners, managers, shift staff)",
      "Exit devices, panic bars, door closers & code-compliant egress hardware",
      "Storefront and aluminum/glass door hardware",
      "Key control and restricted keyways",
    ],
  },
  {
    id: "access-control",
    name: "Electronic Access Control & Smart Security",
    url: "/services#access-control",
    keywords: [
      "access control", "keypad", "fob", "key fob", "card reader", "badge",
      "credential", "keyless", "smart lock", "electronic lock", "maglock",
      "electric strike", "door controller", "audit trail", "schedule",
    ],
    summary:
      "We install electronic locks, keypads, and badge/fob/mobile readers so you can grant, schedule, and revoke access in seconds with a full audit log instead of rekeying metal keys.",
    handles: [
      "Access control systems and multi-door controllers",
      "Credentials — cards, key fobs, PIN codes & mobile phone access",
      "Smart locks for residential and commercial doors",
      "Integration with existing door hardware and low-voltage cabling",
      "Credential audits and staff handover training",
    ],
  },
  {
    id: "residential",
    name: "Residential Physical Security & Locksmithing",
    url: "/services#residential",
    keywords: [
      "house", "home", "residential", "deadbolt", "rekey", "re-key", "moved in",
      "new house", "strike plate", "frame", "mortise", "patio", "sliding door",
      "mailbox", "safe", "door reinforcement", "front door", "apartment", "condo",
    ],
    summary:
      "We look at the entire residential opening — door, frame, strike plate, hinges, and lock — and upgrade the parts that actually carry the load, or rekey your home so every door works on one key.",
    handles: [
      "High-security deadbolt and lock installation",
      "Whole-home rekeying after moving in, tenant turnover, or a lost key",
      "Strike plate, long-screw, and door frame reinforcement",
      "Historic mortise lock service and restoration-grade fitting",
      "Smart lock setup, patio/sliding door locks & interior locks",
    ],
  },
  {
    id: "cabling",
    name: "Structured Cabling & Low-Voltage",
    url: "/services#cabling",
    keywords: [
      "cabling", "cable", "cat6", "cat5", "ethernet", "low voltage", "low-voltage",
      "patch panel", "wiring", "wire", "data run", "camera run", "poe", "termination",
    ],
    summary:
      "We pull, terminate, test, and label structured data and low-voltage cabling for access control readers, security cameras, Wi-Fi access points, and server racks.",
    handles: [
      "Structured cabling (Cat6 / data / network runs)",
      "Low-voltage wiring for door readers, controllers & IP cameras",
      "Patch panel termination, certification testing & full labeling",
      "Server rack and network closet cleanups for new builds or retrofits",
    ],
  },
  {
    id: "automotive",
    name: "Mobile Automotive Security & Locksmithing",
    url: "/services#automotive",
    keywords: [
      "car", "vehicle", "auto", "automotive", "truck", "van", "fleet",
      "ignition", "transponder", "car key", "keys locked in", "spare key",
    ],
    summary:
      "Our mobile automotive locksmiths come directly to your vehicle anywhere in metro Atlanta for vehicle lockouts, replacement/spare keys, and ignition work on site.",
    handles: [
      "Mobile vehicle lockout response on site",
      "Replacement and spare car keys",
      "Ignition repair and key-turn issues",
      "Fleet and commercial vehicle security",
    ],
  },
];

function findMatchingAreas(q) {
  const lower = q.toLowerCase();
  return AREAS.filter((a) => {
    const slugWords = a.slug.replace(/-/g, " ");
    return (
      lower.includes(a.name.toLowerCase()) ||
      lower.includes(slugWords) ||
      (a.slug === "virginia-highland" && (lower.includes("va-hi") || lower.includes("vahi"))) ||
      (a.slug === "old-fourth-ward" && lower.includes("o4w"))
    );
  });
}

function findMatchingServices(q) {
  const lower = q.toLowerCase();
  const scored = SITE_SERVICES.map((svc) => {
    let score = 0;
    for (const kw of svc.keywords) {
      if (lower.includes(kw)) {
        score += kw.includes(" ") ? 3 : 2;
      }
    }
    return { svc, score };
  }).filter((item) => item.score > 0);

  scored.sort((a, b) => b.score - a.score);
  return scored.map((item) => item.svc);
}

/**
 * Generates an immediate, accurate answer grounded in the website's content.
 * Returns null if a human admin has already joined the conversation.
 */
export async function generateSiteAssistantReply(userText, session) {
  const messages = session?.messages || [];
  const humanAdminReplied = messages.some((m) => m.sender === "admin" && !m.auto);

  const q = String(userText || "").trim();
  if (!q) return null;
  const lower = q.toLowerCase();

  // Optional Gemini API integration if GEMINI_API_KEY is configured
  const geminiKey = (process.env.GEMINI_API_KEY || "").trim();
  if (geminiKey) {
    try {
      const kbContext = [
        `Company: ${SITE_INFO.name}, operating in Atlanta since ${SITE_INFO.founded}. Twelve-person in-house team (not a franchise or call center).`,
        `Phone: ${SITE_INFO.phone} (${SITE_INFO.emergency}). Scheduled hours: ${SITE_INFO.hours}. Address: ${SITE_INFO.address}. Email: ${SITE_INFO.email}.`,
        `Services:\n` +
          SITE_SERVICES.map(
            (s) => `- ${s.name}: ${s.summary} (${s.handles.join("; ")})`
          ).join("\n"),
        `Service Areas:\n` +
          AREAS.map((a) => `- ${a.name} (${a.where}): ${a.lead} Focus: ${a.focus.join("; ")}`).join("\n"),
      ].join("\n\n");

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(geminiKey)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            systemInstruction: {
              parts: [
                {
                  text: `You are the live chat assistant for Stronghold Lockurity on strongholdlockurity.com. Answer visitor questions concisely (2–4 short sentences) using ONLY the facts in this site knowledge base. Never invent prices, response times, or claims not in the knowledge base. Remind them a live team member has been notified and can jump into this chat anytime, or they can call ${SITE_INFO.phone} for 24/7 emergencies.\n\n${kbContext}`,
                },
              ],
            },
            contents: [{ role: "user", parts: [{ text: q }] }],
          }),
        }
      );
      if (res.ok) {
        const data = await res.json();
        const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
        if (aiText) return aiText;
      }
    } catch {
      // Fall through to deterministic site-content engine
    }
  }

  const parts = [];

  // 1. Check for emergency / lockout urgency
  const isEmergency =
    /\b(locked out|lockout|emergency|urgent|broken into|break-in|break in|stuck outside|lost my keys|right now|asap)\b/i.test(
      lower
    );
  if (isEmergency) {
    parts.push(
      `For an urgent lockout or emergency, please call us directly at ${SITE_INFO.phone} — our emergency line is staffed 24/7. We have also just alerted our team here in the chat.`
    );
  }

  // 2. Check for matching service areas from lib/areas.js
  const matchedAreas = findMatchingAreas(lower);
  if (matchedAreas.length > 0) {
    const area = matchedAreas[0];
    parts.push(
      `Yes — we serve ${area.name} (${area.where}). ${area.lead} Common work we handle in ${area.name} includes:\n• ${area.focus.slice(0, 3).join("\n• ")}`
    );
  } else if (
    /\b(where do you|service area|areas|locations|atlanta|metro|cover|come to|travel)\b/i.test(
      lower
    )
  ) {
    const names = AREAS.map((a) => a.name).join(", ");
    parts.push(
      `We serve Atlanta and the surrounding metro area (based at ${SITE_INFO.address}), with dedicated service across ${names}, and surrounding communities.`
    );
  }

  // 3. Check for general "what services do you offer" overview vs specific service
  const isGeneralServicesOverview =
    /\b(what services|all services|services do you offer|what do you do|how can you help)\b/i.test(
      lower
    );

  const matchedServices = findMatchingServices(lower);
  if (isGeneralServicesOverview) {
    const bulletList = SITE_SERVICES.map(
      (s, idx) => `0${idx + 1}. ${s.name} — ${s.summary}`
    ).join("\n");
    parts.push(
      `Stronghold Lockurity covers six core security and infrastructure disciplines across Atlanta:\n\n${bulletList}`
    );
  } else if (matchedServices.length > 0) {
    const top = matchedServices[0];
    parts.push(
      `${top.name}: ${top.summary}\n• ${top.handles.slice(0, 4).join("\n• ")}`
    );
    if (top.id === "automotive" && !lower.includes("year")) {
      parts.push(
        `Tip: Let us know your vehicle's year, make, and model (and where the vehicle is located) so our technician can confirm the exact key/equipment needed.`
      );
    }
  }

  // 4. Check for hours / open / address questions
  if (/\b(hour|hours|open|close|when are you|schedule|weekend|sunday|saturday|address|located)\b/i.test(lower)) {
    parts.push(
      `Our scheduled service hours are ${SITE_INFO.hours}, and we provide ${SITE_INFO.emergency} at ${SITE_INFO.phone}. Our base is at ${SITE_INFO.address}.`
    );
  }

  // 5. Check for pricing / cost / quote / estimate questions
  if (/\b(price|pricing|cost|how much|quote|estimate|rate|charge|fee|assessment)\b/i.test(lower)) {
    parts.push(
      `Before quoting, we look at the whole opening (door, frame, strike, hinges, and lock) or your specific network/vehicle details so we give an accurate recommendation rather than a generic upsell. Share a few details here (or the number of doors / vehicle year-make-model) and our technician will follow up with you shortly!`
    );
  }

  // 6. Check for company background / who we are
  if (/\b(who are you|how long|years|licensed|team|franchise|company|about you)\b/i.test(lower) && parts.length === 0) {
    parts.push(
      `Stronghold Lockurity has operated in Atlanta since ${SITE_INFO.founded}. We are a ${SITE_INFO.teamSize}-person in-house team of physical security, access control, low-voltage cabling, IT, and automotive locksmith specialists — not a franchise or a call-center dispatch board.`
    );
  }

  // Fallback if the message was a general greeting or custom request
  if (parts.length === 0) {
    // If a live human admin is already in the conversation and the visitor wrote
    // a conversational reply (not a site-knowledge question), don't interrupt.
    if (humanAdminReplied) {
      return null;
    }
    const allServiceNames = SITE_SERVICES.map((s) => s.name).join(", ");
    parts.push(
      `Thanks for reaching out to Stronghold Lockurity! We've notified our team by email and someone will reply here shortly (and by email if provided).\n\nIn the meantime, feel free to ask me about any of our services (${allServiceNames}), our Atlanta & metro service areas, or call ${SITE_INFO.phone} for 24/7 urgent assistance.`
    );
  } else if (!isEmergency && !humanAdminReplied) {
    parts.push(
      `Our team has also been notified of your message and can jump right into this chat to help with specifics.`
    );
  }

  return parts.join("\n\n");
}

