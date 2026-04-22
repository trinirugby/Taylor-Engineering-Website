# Taylor Engineering Agencies Limited — Developer Handoff
# tayeng.com | Website Build Context

---

## 1. PROJECT OVERVIEW

Build a professional, modern business website for Taylor Engineering Agencies Limited (TEAL).
The site will be built from scratch using Claude Code + Wix CLI (Headless) and deployed to Wix.

**Live domain:** tayeng.com
**Platform:** Wix Headless (custom frontend, Wix backend/APIs)
**Stack:** React / Next.js (Wix CLI scaffold), global.css design system, Google Fonts

---

## 2. COMPANY BACKGROUND

- Full name: Taylor Engineering Agencies Limited
- Founded: 1984 by Liston Taylor (Chief Engineer, 20+ years dockyard experience)
- Type: Family-owned, third-generation marine surveying firm
- HQ: Port of Spain, Trinidad and Tobago
- Local content: 100% owned and staffed by nationals of Trinidad and Tobago
- Team: 9 staff surveyors + 4 cargo technicians
- Leadership: Paul Taylor (MD & Principal Surveyor), Andrew Taylor (Senior Surveyor & Ops Manager, UK MCA Master Mariner Unlimited)
- Status: Most diversified marine surveying and consultancy company in the Caribbean
- Clients: P&I clubs, oil majors, container lines, underwriters, shipowners, charterers

---

## 3. BRAND IDENTITY

### Colours
| Name        | Hex       | Usage                              |
|-------------|-----------|------------------------------------|
| Orange      | #F47920   | Primary CTA, accents, eyebrows     |
| Orange Dark | #d96818   | Hover states for orange elements   |
| Blue        | #1B72B8   | Secondary accent, borders, icons   |
| Light Blue  | #7EC8E3   | Hero em text, nav subtitle, dots   |
| Navy        | #0D1B2A   | Dark section backgrounds, headings |
| Gray        | #58595B   | Body text, labels                  |
| Gray Light  | #F5F5F3   | Section backgrounds, card fills    |
| Border      | #E2E2DE   | Card and input borders             |
| Text        | #3A3A3A   | General body text                  |

### Typography
- Headings: `Cormorant Garamond` (Google Fonts) — weights 400, 500, 600, 700, italic 400
- Body: `DM Sans` (Google Fonts) — weights 300, 400, 500
- Import URL: https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap

### Logo
- Full wordmark: "Taylor Engineering Agencies Limited" with abstract marine/sunrise icon
- Orange (#F47920) and Blue (#1B72B8 + #7EC8E3) in the mark
- Charcoal Gray (#58595B) wordmark text
- File: WhatsApp_Image_2026-02-25_at_12_08_57.jpeg (in project assets)
- NEVER alter the logo, add effects, or place on clashing backgrounds

### Design Aesthetic
- Dark navy backgrounds for hero, services, why-us, footer sections
- White/light gray backgrounds for about, team, contact sections
- Alternating dark/light section rhythm throughout the page
- Sharp geometry — border-radius: 2px (buttons/inputs), 4px (cards)
- Orange left-border accents on callout cards
- Gradient accent bar (orange to blue, vertical) on left edge of hero
- Decorative concentric rings (border-only circles) in hero background
- Bottom-edge orange underline animation on service cards (hover)
- Section eyebrows: 11px, uppercase, letter-spacing 0.18em, orange, with left rule

---

## 4. SITE STRUCTURE & PAGES

### Single-page layout with smooth scroll anchors:

| Section     | Anchor      | Background  | Notes                               |
|-------------|-------------|-------------|-------------------------------------|
| Navigation  | —           | Navy 96%    | Fixed, blur backdrop, 68px height   |
| Hero        | #hero       | Navy        | Full viewport, stats bar at bottom  |
| About       | #about      | White       | 2-col grid: text left, stat cards right |
| Services    | #services   | Navy        | 3-col grid of 6 service cards       |
| Coverage    | #coverage   | Gray Light  | 2-col: text/callouts + region list  |
| Team        | #team       | White       | 3-col team cards + CTA bar          |
| Why Us      | (no anchor) | Navy        | 4-col why cards                     |
| Contact     | #contact    | Gray Light  | 2-col: contact details + form       |
| Footer      | —           | Navy        | 4-col grid + bottom bar             |

---

## 5. CONTENT — DO NOT FABRICATE

All content must come only from these approved sources. No filler, no placeholder text in production.

### Company History (verbatim from company profile doc):
"Taylor Engineering Agencies Limited is a family-owned firm of marine surveyors operating since 1984. Founded by Liston Taylor, a Chief Engineer with two decades of experience in dockyards..."

### Services (from Scope of Surveys document):

**01 — Marine Assurance & Compliance**
- Vessel assurance audits (Flag, Class, SOLAS, MARPOL, ISM, ISPS)
- ISM compliance reviews
- OVID / CMID inspections
- DP assurance surveys
- Navigation equipment surveys
- Hull and structural surveys
- Accident & incident investigation

**02 — Cargo Operations & Loadout Oversight**
- Fuel (MGO/IFO) loadouts & ROB surveys
- Dry bulk (cement, barite) loadouts
- Liquid bulk & brine (CaCl₂, NaBr) loadouts
- Specialty liquids — methanol, DMO
- Chain-of-custody, calibrated equipment, signed reports

**03 — Hull & Machinery Surveys**
- Hull plating, decks, internal structures
- Ultrasonic thickness measurement
- Hatch weathertight testing (ultrasonic)
- Structural damage with photographic reports

**04 — P&I & Cargo Surveys**
- Cargo damage investigations
- Draft surveys (bill of lading verification)
- On/off-hire surveys
- Quantity & quality dispute resolution
- DRI/HBI/Fines specialist loading (15+ years expertise)

**05 — Tank Cleaning & Inspection**
- Tank cleaning oversight (timeline matrix)
- Post-cleaning certification
- Borescope inspection of cargo lines, manifolds, crossovers
- Waste quantification and documentation

**06 — Marine Consultancy & Claims**
- Accident & incident investigation, root cause analysis
- Claims handling & settlement (cargo damage, delay, pollution, personal injury)
- Crew medical emergencies, complex repatriation
- Stowaway repatriation
- Environmental & MARPOL compliance
- Ballast water management surveys

### Coverage:
- HQ: Trinidad & Tobago
- Active: Guyana, Suriname, Barbados, St. Maarten, Eastern Caribbean
- Offshore: Trinidad oil majors, Guyana FPSO operations
- Range: As far north as St. Maarten, as far south as Suriname and Guyana

### Team:
- Paul Taylor — Principal Surveyor & Managing Director
- Andrew Taylor — Senior Surveyor & Operations Manager (UK MCA Master Mariner Unlimited, 3rd generation)
- Survey Team — 9 staff surveyors, 4 cargo technicians, all T&T nationals

### Key Stats:
- 40+ years in operation
- 9 staff surveyors
- 3rd generation leadership
- 13 total team members
- 100% Trinidadian owned and staffed

---

## 6. CSS DESIGN SYSTEM (global.css)

A complete global.css file has been produced and is included in the repo.
All component classes follow this naming convention:

```
.nav, .nav__brand, .nav__links, .nav__cta         — Navigation
.hero, .hero__content, .hero__stats, .hero__ring  — Hero
.eyebrow, .section-title, .section-lead, .divider — Shared typography
.btn, .btn-primary, .btn-secondary, .btn-ghost     — Buttons
.about, .about__grid, .about__stat-card            — About
.services, .services__grid, .service-card          — Services
.coverage, .coverage__grid, .coverage__map         — Coverage
.team, .team__grid, .team-card                     — Team
.why, .why__grid, .why-card                        — Why Us
.contact, .contact__grid, .contact__form           — Contact
.footer, .footer__top, .footer__links              — Footer
.tag, .callout, .callout--blue, .callout--dark     — Utilities
.form-group, .form-row, .form-submit               — Forms
```

CSS custom properties (all defined in :root):
```css
--color-orange, --color-orange-dark
--color-blue, --color-blue-light
--color-navy, --color-navy-mid
--color-gray, --color-gray-light
--color-border, --color-text, --color-white
--font-heading, --font-body
--space-xs through --space-2xl
--radius-sm (2px), --radius-md (4px)
--transition-fast, --transition-base, --transition-slow
```

---

## 7. WIX CLI SETUP

### Prerequisites
- Node.js v20.11.0 or higher
- Wix account with access to tayeng.com project

### Commands
```bash
npm install -g @wix/cli   # Install Wix CLI globally
wix dev                    # Local dev server with hot reload
wix build                  # Compile assets
wix preview                # Push to staging URL for review
wix release                # Deploy to production (follow prompts)
```

### Project type
Use the Headless scaffold. This gives you:
- React / Next.js frontend (you own the UI completely)
- Wix CMS, Forms, and APIs available via SDK
- Deploy to Wix's infrastructure via CLI

### Wix SDK packages installed
```bash
@wix/sdk
@wix/forms        # For contact form submission
```

---

## 8. CONTACT FORM

The contact form on the site should POST to Wix Forms or a Wix backend function.
Fields required:
- First Name (text)
- Last Name (text)
- Email (email, required)
- Company / Organisation (text)
- Service Required (select dropdown — 7 options including "General Enquiry")
- Message (textarea)

Dropdown options:
1. Marine Assurance & Compliance
2. Cargo Operations & Loadout Oversight
3. Hull & Machinery Survey
4. P&I & Cargo Survey
5. Tank Cleaning & Inspection
6. Marine Consultancy & Claims
7. General Enquiry

Use Wix Forms API or a backend HTTP function to handle submissions.
Send confirmation to info@tayeng.com (update with real address).

---

## 9. PLACEHOLDER DATA TO UPDATE BEFORE GO-LIVE

The following are placeholder values in the current build that must be replaced with real data from Andrew Taylor before launch:

| Field            | Placeholder                     |
|------------------|---------------------------------|
| Phone number     | +1 (868) 000-0000               |
| Email address    | info@taylorengineering.com      |
| Physical address | Port of Spain, Trinidad (confirm full address) |
| Footer copyright | © 2025 (update year if needed) |
| Team photos      | Placeholder initials — replace with real headshots when available |

---

## 10. PHOTOGRAPHY & IMAGE RULES

- Maritime imagery only — vessels, ports, offshore platforms, open water
- No AI-generated people or stock photo "businessmen on deck" imagery
- No altered or stretched versions of the TEAL logo
- Preferred sources: real TEAL survey photos, licensed maritime stock
- No imagery that depicts competitors or other surveying firms

---

## 11. RESPONSIVE BREAKPOINTS

| Breakpoint   | Behaviour                                          |
|--------------|----------------------------------------------------|
| > 1100px     | Full desktop layout, 3-col services/team           |
| 768–1100px   | 2-col services grid, 2-col team, 2-col footer      |
| < 768px      | All grids collapse to 1-col, hamburger nav visible |
| < 480px      | Stat cards stack, footer single column             |

---

## 12. FUTURE SCOPE (not in v1)

Andrew has a second site to follow: tealpandi.com (TEAL P&I and Marine Services Limited).
This is a separate brand and will be a separate project.

Other group companies for awareness:
- Amazon Offshore Marine Surveyors
- Jupiter Marine Services Ltd.
- Jupiter Logistics Ltd.

These do NOT appear on the tayeng.com site.

---

## 13. USEFUL REFERENCES

- Wix CLI docs: https://dev.wix.com/docs/wix-cli
- Wix Headless quickstart: https://dev.wix.com/docs/wix-cli/guides/get-started/quick-start-a-headless-project
- Wix build & deploy: https://dev.wix.com/docs/wix-cli/guides/development/build-and-deploy-a-project
- Wix SDK reference: https://dev.wix.com/docs/sdk
- Google Fonts: https://fonts.google.com (Cormorant Garamond + DM Sans)

---

## 14. FILES IN THIS REPO

```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx      ← root layout: Google Fonts, global.css, metadata
│   │   └── page.tsx        ← assembles all section components
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Coverage.tsx
│   │   ├── Team.tsx
│   │   ├── WhyUs.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── styles/
│       └── global.css      ← complete design system
├── public/
│   └── assets/
│       └── logo.jpeg       ← Taylor Engineering logo (add manually)
├── HANDOFF.md              ← this document
├── package.json
├── next.config.ts
└── tsconfig.json
```

---

## 15. CONTACT FOR QUESTIONS

Project owner: Andrew Taylor
Role: Operations Manager & Senior Surveyor, Taylor Engineering Agencies Limited
Company: Taylor Engineering Agencies Limited / tayeng.com
All brand, content, and design decisions go through Andrew.
