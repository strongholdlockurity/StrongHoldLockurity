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
    name: "Managed IT Support, Cloud & Cybersecurity",
    url: "/services#it-services",
    keywords: [
      "it", "managed it", "msp", "helpdesk", "network", "wifi", "wi-fi", "unifi", "meraki",
      "cisco", "comptia", "vlan", "firewall", "server", "rack", "cyber", "cybersecurity",
      "cloud", "microsoft 365", "google workspace", "workstation", "computer", "laptop",
      "windows", "mac", "linux", "vpn", "failover", "backup", "ups", "ot", "iot",
      "soc2", "hipaa", "pci", "compliance", "sla", "uptime",
    ],
    summary:
      "Our Cisco and CompTIA certified engineers deliver 24/7 proactive endpoint monitoring, Tier 1–3 helpdesk support, cloud integration (Microsoft 365 / Google Workspace), firewall hardening, and SOC2/HIPAA compliance readiness under a 99.9% uptime SLA.",
    handles: [
      "24/7/365 proactive endpoint monitoring, patch management & Tier 1–3 helpdesk",
      "Enterprise network engineering, next-gen firewalls & managed PoE switch stacks",
      "Cloud migrations (Microsoft 365 & Google Workspace), SSO & MFA enforcement",
      "VLAN segmentation isolating corporate data, VoIP, IoT, cameras & access control",
      "SOC2, HIPAA & PCI compliance readiness, vulnerability scans & endpoint protection",
      "Cross-platform workstation provisioning & support (Windows, macOS, Linux)",
    ],
  },
  {
    id: "cabling",
    name: "Structured Cabling & Network Infrastructure",
    url: "/services#cabling",
    keywords: [
      "cabling", "cable", "cat6", "cat6a", "fiber", "cat5", "ethernet", "low voltage",
      "low-voltage", "patch panel", "wiring", "wire", "data run", "camera run", "poe", "termination",
    ],
    summary:
      "We pull, terminate, certify, and label structured Cat6/Fiber backbone and low-voltage cabling for offices, server racks, high-density Wi-Fi 6/7 access points, IP cameras, and door controllers.",
    handles: [
      "Structured Cat6, Cat6A and fiber-optic backbone cabling",
      "Server room rack buildouts, patch panel termination & closet cleanups",
      "High-density commercial Wi-Fi heatmapping & access point deployment",
      "Low-voltage PoE runs for IP access control readers, controllers & 4K cameras",
    ],
  },
  {
    id: "access-control",
    name: "Electronic Access Control & Smart Security",
    url: "/services#access-control",
    keywords: [
      "access control", "keypad", "fob", "key fob", "card reader", "badge",
      "credential", "keyless", "smart lock", "electronic lock", "maglock",
      "electric strike", "door controller", "audit trail", "schedule", "biometric", "cctv", "camera",
    ],
    summary:
      "We install IP-connected door controllers, mobile/fob/biometric readers, and 4K cloud video surveillance synced with your user directory (Entra ID / Active Directory / Google) so access is granted, scheduled, or revoked in seconds with full compliance audit logs.",
    handles: [
      "Cloud and on-premise IP access control systems & multi-door controllers",
      "Mobile credentials, encrypted key fobs, badges, PIN keypads & biometrics",
      "Active Directory / M365 / Google Workspace sync for instant onboarding & offboarding",
      "4K AI cloud video surveillance & door-event video verification",
      "Audit logs & physical access reporting for SOC2 and HIPAA compliance",
    ],
  },
  {
    id: "commercial",
    name: "Commercial Door Hardware & B2B Locksmithing",
    url: "/services#commercial",
    keywords: [
      "commercial", "business", "office", "retail", "storefront", "master key",
      "panic bar", "push bar", "exit device", "closer", "door closer", "b2b",
      "tenant", "warehouse", "restricted key", "key control", "aluminium door", "aluminum door",
    ],
    summary:
      "The physical half of our hybrid model — our in-house specialists install and service Grade-1 commercial locks, electrified strikes, maglocks, code-compliant panic bars, heavy-duty closers, and restricted master key systems.",
    handles: [
      "Electrified strikes, maglocks & power-transfer hinges for access control doors",
      "Grade-1 commercial lock installation, repair & reinforcement",
      "Restricted keyways & multi-tier master key system architecture",
      "Code-compliant panic bars, fire-rated exit devices & hydraulic door closers",
      "Storefront aluminum/glass door hardware & 24/7 facility lockout response",
    ],
  },
  {
    id: "residential",
    name: "Residential Physical Security & Smart Home",
    url: "/services#residential",
    keywords: [
      "house", "home", "residential", "deadbolt", "rekey", "re-key", "moved in",
      "new house", "strike plate", "frame", "mortise", "patio", "sliding door",
      "mailbox", "safe", "door reinforcement", "front door", "apartment", "condo",
    ],
    summary:
      "We pair whole-home Wi-Fi coverage and smart locks with commercial-grade door and frame reinforcement, high-security deadbolts, and single-key home rekeying.",
    handles: [
      "Smart lock installation integrated with whole-home Wi-Fi & mobile apps",
      "High-security deadbolt installation and strike/frame reinforcement",
      "Whole-home rekeying after purchasing a home or tenant turnover",
      "Restoration-grade mortise lock service for historic Atlanta homes",
    ],
  },
  {
    id: "automotive",
    name: "Commercial Fleet & Mobile Automotive Security",
    url: "/services#automotive",
    keywords: [
      "car", "vehicle", "auto", "automotive", "truck", "van", "fleet",
      "ignition", "transponder", "car key", "keys locked in", "spare key",
    ],
    summary:
      "Our mobile automotive units come directly to your fleet yard, office, or roadside location across metro Atlanta for commercial fleet key administration, transponder/fob programming, ignition service, and vehicle lockouts.",
    handles: [
      "Commercial fleet key duplication, transponder programming & key tracking",
      "On-site smart key, fob and remote replacement",
      "Mobile vehicle lockout response across metro Atlanta",
      "Ignition repair and worn cylinder service on site",
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
  if (/\b(price|pricing|cost|how much|quote|estimate|estimator|calculator|rate|charge|fee|assessment|audit|proposal)\b/i.test(lower)) {
    parts.push(
      `For Managed IT Support, our baseline packages start at $75/user/month (Business Managed IT — 8am–6pm Helpdesk, patch management, cloud backups & endpoint security) and $110/user/month (24/7 SOC & Compliance Enterprise with SOC2/HIPAA support), with optional add-ons for Managed Wi-Fi 6 ($150/mo), IP Access Control management ($200/mo), and Cloud CCTV ($180/mo).\n\nYou can use our interactive IT Scope & Cost Estimator right on the homepage (/#estimator), or share a few details here to schedule a comprehensive IT & Security Audit!`
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

