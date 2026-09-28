const I18N = {
en: {
  "contact.addr": "Address",
  "contact.cta": "Call now to book",
  "contact.hours": "Hours",
  "contact.hoursVal": "Mon / Wed / Fri: 9:00 AM – 5:00 PM<br>Tue · Thu · Sat · Sun: closed",
  "contact.kicker": "Get in touch",
  "contact.phone": "Phone",
  "contact.title": "Book your visit",
  "faq.a1": "Monday, Wednesday and Friday, 9:00 AM to 5:00 PM. Closed Tuesday, Thursday and weekends.",
  "faq.a2": "General repairs, panel upgrades, lighting, wiring and rewiring, outlets and switches, and ceiling fans for Salt Lake City homes.",
  "faq.a3": "Yes — every job is done to current electrical code and tested before we leave.",
  "faq.a4": "Call (801) 486-6551 during opening hours — Monday, Wednesday or Friday.",
  "faq.kicker": "Good to know",
  "faq.q1": "What are your opening hours?",
  "faq.q2": "What electrical services do you handle?",
  "faq.q3": "Is your work code-compliant?",
  "faq.q4": "How do I book a visit?",
  "faq.title": "Frequently asked questions",
  "footer.tag": "Residential electrician · Salt Lake City, Utah",
  "gallery.c1": "Panel upgrades, done to code",
  "gallery.c2": "Lighting installed with care",
  "gallery.c3": "Wiring, neat and safe",
  "gallery.kicker": "On the job",
  "gallery.title": "Clean work, safe homes",
  "hero.cta1": "Book a visit",
  "hero.cta2": "See services",
  "hero.kicker": "Salt Lake City, Utah · Residential electrical work",
  "hero.sub": "Shawco Electric brings 36 years of experience to Salt Lake City homes — safe, code-compliant electrical work from a local shop you can trust.",
  "hero.title": "Power done<br>right.",
  "nav.call": "(801) 486-6551",
  "nav.contact": "Contact",
  "nav.faq": "FAQ",
  "nav.gallery": "Gallery",
  "nav.reviews": "Reviews",
  "nav.services": "Services",
  "nav.why": "Why us",
  "reviews.kicker": "Word on the street",
  "reviews.more": "Serving Salt Lake City for 36 years — find us on Google Maps and see our reviews",
  "reviews.title": "36 years of trusted work",
  "services.kicker": "What we do",
  "services.s1d": "Troubleshooting and repair for outlets, switches, circuits and more.",
  "services.s1t": "General Electrical Repairs",
  "services.s2d": "Panel replacements and upgrades for safer, modern power.",
  "services.s2t": "Breaker Panel Upgrades",
  "services.s3d": "Indoor and outdoor lighting installed cleanly and correctly.",
  "services.s3t": "Lighting Installation",
  "services.s4d": "New wiring and rewiring done to code, neatly and safely.",
  "services.s4t": "Wiring & Rewiring",
  "services.s5d": "New outlets, dimmers and switches — including GFCI protection.",
  "services.s5t": "Outlets & Switches",
  "services.s6d": "Ceiling fan installation wired safely and balanced for quiet running.",
  "services.s6t": "Ceiling Fans",
  "services.title": "Residential electrical, done properly",
  "stats.diag": "code-compliant work",
  "stats.diagNum": "Safe",
  "stats.hours": "9am to 5pm",
  "stats.hoursNum": "Mon/Wed/Fri",
  "stats.makes": "years of experience",
  "stats.makesNum": "36",
  "stats.quote": "upfront pricing",
  "stats.quoteNum": "Clear",
  "walkin.w1d": "9am – 5pm",
  "walkin.w1t": "Mon · Wed · Fri",
  "walkin.w2d": "of electrical experience",
  "walkin.w2t": "36 years",
  "walkin.w3d": "Residential electrical work",
  "walkin.w3t": "Homes",
  "why.intro": "Shawco Electric has wired Salt Lake City homes for over three decades. Safe work, done to code, explained in plain English — that's why neighbors keep the number.",
  "why.kicker": "Why choose us",
  "why.l1d": "36 years in the trade — we've seen it all and fixed it all.",
  "why.l1t": "Experienced hands",
  "why.l2d": "Every job done to code, tested before we leave.",
  "why.l2t": "Safe & code-compliant",
  "why.l3d": "The price is confirmed before any work begins.",
  "why.l3t": "Clear pricing",
  "why.l4d": "On S Lake St — a real local business, not a call center.",
  "why.l4t": "Local Salt Lake shop",
  "why.title": "36 years of trusted electrical work"
}};

const lang = "en";

function applyLang() {
  document.documentElement.lang = "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N.en[key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.title = "Shawco Electric — Electrician in Salt Lake City, UT | Trusted Electrical Work";
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang();
