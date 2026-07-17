# PAS WEBSITE REDESIGN — MASTER BRIEF
Read this entire file before writing any code. Then implement it section by section, verifying each in the browser before moving on. This brief is the single source of truth. Where the existing codebase conflicts with this brief, this brief wins.

## 0. FIRST ACTIONS
1. Inspect the existing project. Identify framework, styling system, routing, and where images live. Report the stack back before changing anything.
2. Create a branch: `redesign-2026`.
3. List every page/section in the current site. Anything not in the sitemap below gets deleted, not hidden.

## 1. NON-NEGOTIABLE CONTENT RULES
- Use ONLY the figures in section 6. Do not invent, round up, or reuse any number from older files, old components, or old copy. If an old component contains "1,200+", "70–80", "151+", "53+", "4 rabies campaigns", or "Tudun Biri" — delete it.
- No testimonials section. No partner-logo section. These do not exist yet.
- Never fabricate quotes, stats, awards, or press mentions.
- All copy in plain, warm, concrete English. No "empowering", "unlock", "leverage", "innovative solutions". No em dashes. No rule-of-three verb stacks ("advancing, strengthening, improving").

## 2. AESTHETIC LOCK
Reference feel: a warm, photo-led agri landing page (golden-hour field photography, soft cream surfaces, one bright accent) combined with a clean card-based services layout and a deep-green footer. Confident NGO-meets-startup, not corporate template.

**Colors (exact, no substitutions):**
- Navy `#16365C` (primary text on light, hero overlay tint, footer alt)
- Bright green `#7AC143` (accent ONLY: CTAs, highlights, one stat card, small labels)
- Olive `#5C8A3C` (secondary accents, icons)
- Dark green `#1F4A30` (deep sections, footer background)
- Cream `#F5F0E4` (default page background — not pure white)
- White `#FFFFFF` (cards)
Banned: purple, gradients as decoration, pure-black text.

**Type:**
- Headings: Poppins, weights 600/700 only. H1 clamp(2.4rem, 5vw, 4rem), tight leading (1.1).
- Body: Figtree (Google Fonts), 400/500, 1.05–1.125rem, leading 1.65, max-width 65ch.
- Small labels: Poppins 600, 0.78rem, letter-spacing 0.12em, uppercase, olive.

**Spacing & shape:** 8px spacing scale. Section padding 96–128px desktop / 56px mobile. Cards radius 16px, subtle shadow (0 4px 24px rgba(22,54,92,0.08)). Buttons radius 999px (pill), padding 14px 28px.

**Imagery rule:** real PAS field photography only, full-color, never desaturated, never below 60% opacity. No stock photos of laptops, handshakes, or non-Nigerian farms. Photos live in `/public/images/`. If a required photo is missing, insert a clearly labeled `<!-- PHOTO NEEDED: description -->` placeholder block with a cream background — do not pull stock.

**Contrast rule:** every text/background pair must pass WCAG AA. No pale-green-on-white numbers. Stats render in Navy `#16365C` at full opacity.

**Motion:** subtle only. Fade-up on scroll (max 24px translate, 0.5s, once). No parallax, no autoplay carousels.

## 3. SITEMAP
- `/` Home (sections below)
- `/about` (story, founder, team)
- `/services`
- `/cohi` (Community One Health Initiative)
- `/blog` (+ 3 starter posts)
- `/contact`
Nav: Home, About, Services, COHI, Blog, Contact + pill button "Partner With Us" (scrolls to partner door). Mobile: hamburger, full-screen cream menu.

## 4. HOME PAGE STRUCTURE (in order)
**4.1 Hero.** Full-bleed real field photo (brightest, warmest available; person in frame). Navy tint overlay max 35% for text legibility, left-aligned.
- Label: `VETERINARY CARE · KADUNA STATE`
- H1: `Livestock health advisory that shows up at the farm gate.`
- Sub: `Plush Agri Solutions is a DVM-led One Health organisation working with livestock-dependent communities in Kaduna State, starting from our pilot community in Danhonu 1.`
- Two buttons: `Partner With Us` (bright green pill → partner door) and `Message a Vet on WhatsApp` (white outline pill → https://wa.me/2348087702906).
- Bottom-right of hero, a small glass card (blur, white 80%): `Our pilot: Danhonu 1, Chikun LGA · 29 farmers under advisory · ₦7M in project funds managed` .

**4.2 The problem.** Cream background. Label `THE PROBLEM`. Short intro (2 sentences max, navy, large): expert guidance reaches smallholder farmers late, generic, or not at all. Three compact cards (white): Livestock loss / Poor input decisions / No one to ask. One line each. Keep existing copy if it matches this tone.

**4.3 What we do.** Four service cards in a grid (style: white cards, icon in olive circle, one card highlighted bright green like the reference layout): Farm Advisory Visits · Training & Capacity Building · Input Supply · Partnership Delivery. Two-line descriptions from existing site copy, tightened. Each links to `/services`.

**4.4 How we work.** Dark green `#1F4A30` band. Four numbered steps in a row (numbers in bright green, Poppins 700): Community entry → Field diagnostics → Integrated advisory → Follow-up loop. One line each. White text, full opacity.

**4.5 The Danhonu 1 Pilot (proof section — story-led, NOT a stat wall).** Cream. Label `OUR PILOT`. H2: `We started where the need is real: Danhonu 1.`
Left: 4 short paragraphs — why Danhonu 1, what has happened since launch (May 2026 brand launch, community engagement, farm visits, One Health education in the local school), what comes next (expansion across Kaduna State).
Right: photo stack (2–3 real photos).
Below: one horizontal strip of four dated pilot metrics, rendered modestly (Poppins 700, navy, ~2rem — NOT hero-sized): `29 farmers under advisory` · `31 people trained` · `7 farm visits completed` · `₦7M project funds managed` — each with `as at July 2026` in small text. 

**4.6 COHI banner.** Navy band, photo right (schoolchildren session). Label `FLAGSHIP INITIATIVE`. H2: `Community One Health Initiative`. Two lines: One Health in action, one community at a time; sustained engagement in Danhonu 1 across farmers, households, and schools. Button (bright green): `Explore COHI` → `/cohi`. Include the Hausa line in italic: `Tare da manoma. An tabbatar a gonar.`

**4.7 Two doors.** Cream. H2: `Work with us.` Two large cards side by side:
- FOR PARTNERS (navy card, white text): `NGOs, government, and development partners: we co-design and deliver community One Health programmes in Kaduna State.` Button: `Email us` → mailto:plushagrisolutions@gmail.com. Secondary link: phone 0803 367 0509.
- FOR FARMERS (white card, navy text): `Farm advisory, animal health support, and training. Hausa da English.` Button (green): `WhatsApp a Vet` → https://wa.me/2348087702906.

**4.8 Footer.** Dark green. Logo (white version), one-line description, nav links, contact block: GF11 Nakadi Plaza, Millennium City, Kaduna State · plushagrisolutions@gmail.com · 0803 367 0509. Social icons linking EXACTLY to:
- Facebook: https://www.facebook.com/Plushagrisolutions
- Instagram: https://www.instagram.com/plushagrisolutions/
- LinkedIn: https://www.linkedin.com/company/plush-agri-solutions/
Tagline line: `Practical Solutions for Real Farm Problems.` + `Tare da manoma. An tabbatar a gonar.` © 2026.

## 5. ABOUT PAGE
- Story section: how PAS started (source: founder letter tone — began with school visit to a Fulani settlement in Mando, Kaduna; career in veterinary field work; the question of sustained community engagement).
- Founder block (photo IMG_9817): **Dr. Rukayyah Abdulsalam, DVM — Founder & Lead Veterinarian.** Bio (use verbatim, may trim): `Dr. Rukayyah Abdulsalam is the Founder of Plush Agri Solutions (PAS) and the Community One Health Initiative (COHI). A veterinarian with over seven years of experience in veterinary practice, animal health, disease surveillance, and community-based development, she is passionate about advancing One Health through preventive solutions that improve livestock productivity, public health, and rural livelihoods.`
- Pull-quote (large, navy, bright-green left border): `"The reason I started PAS is simple: I want veterinary care to be accessible to everyone, including the smallholder farmer in the most underserved community."`
- Team grid (photo cards; where no photo exists use a navy tile with white initials — consistent size):
  - Nafisah Abdulsalam — COO (B.Sc. Statistics) — photo available
  - Emmanuel Ochekpe — Finance Officer — no photo (initials tile)
  - Mujahid Yahaya — Field Assistant — photo available

## 6. OFFICIAL FIGURES (the ONLY numbers allowed anywhere)
As at July 2026: farmers under advisory **29** · training attendees **31** · farm visits **7** · vaccination/rabies campaigns **0 (do not display)** · active communities **Danhonu 1, Chikun LGA** · project funds managed **₦7,000,000**.

## 7. BLOG
Scaffold `/blog` with 3 posts (outline + ~300-word draft each, marked DRAFT in frontmatter, byline Dr. Rukayyah Abdulsalam):
1. Antimicrobial resistance, and why farmers should care
2. The future of veterinary services: from reactive to preventive care
3. A One Health approach to disease outbreak investigation
Plain language, farmer-readable, no academic jargon.

## 8. MECHANICAL FIXES
- Favicon: rebuild from the cow-mark ONLY (crop the wordmark out of the logo file). Export SVG + 32px + 180px apple-touch + 512px. Wire correctly for the framework in use. The full horizontal logo must never be used as favicon.
- Replace the broken footer logo `alt` fallback (currently renders as text "Plush Agri Solutions" over a missing image) with the white logo file.
- Verify every social link resolves to the URLs in 4.8.
- SEO: title `Plush Agri Solutions | Veterinary & One Health Advisory, Kaduna`, meta description mentioning Danhonu 1 pilot, OpenGraph image from a real field photo. JSON-LD Organization schema with the contact details above.

## 9. QUALITY GATES (run before declaring done)
1. Mobile 375px: no horizontal scroll, hero readable, doors stack cleanly.
2. Every number on the site appears in section 6. Grep the build for `1,200|1200|70–80|151|53+|Tudun` — must return nothing.
3. Lighthouse: Performance ≥ 85, Accessibility ≥ 95 on Home.
4. All links clicked and verified (WhatsApp deep link opens chat with 08087702906).
5. Screenshot Home at 1440px and 375px and present both for review.
