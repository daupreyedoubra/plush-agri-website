---
name: Plush Agri Solutions
description: Credentialed veterinary advisory for smallholder and commercial farmers across Northern Nigeria.
colors:
  field-authority: "#1F4D36"
  growth-green: "#5E8B3D"
  vet-trust: "#163A70"
  soft-sage: "#DCE8D7"
  cream-neutral: "#F6F2E8"
  white: "#FFFFFF"
  ink: "#111827"
  body-text: "#4B5563"
  error: "#EF4444"
typography:
  display:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Poppins, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.25em"
  accent-italic:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
rounded:
  sharp: "4px"
  none: "0px"
spacing:
  section-compact: "80px"
  section-default: "112px"
  section-tall: "160px"
  container-px: "24px"
  container-px-lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.field-authority}"
    textColor: "{colors.white}"
    rounded: "{rounded.sharp}"
    height: "48px"
    padding: "0 32px"
  button-primary-hover:
    backgroundColor: "#1a4230"
    textColor: "{colors.white}"
    rounded: "{rounded.sharp}"
  button-trust:
    backgroundColor: "{colors.vet-trust}"
    textColor: "{colors.white}"
    rounded: "{rounded.sharp}"
    height: "48px"
    padding: "0 32px"
  button-trust-hover:
    backgroundColor: "#112f5e"
    textColor: "{colors.white}"
    rounded: "{rounded.sharp}"
  input-default:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sharp}"
    padding: "12px 16px"
  input-focus:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sharp}"
---

# Design System: Plush Agri Solutions

## 1. Overview

**Creative North Star: "The Field Report"**

This system looks like a professional advisory document that arrived from the field, not from a design agency. The typography is disciplined and hierarchical — everything has a clear rank and function. Color is applied with restraint on light sections and with full commitment on dark ones. The overall impression is institutional authority earned through specificity, not through visual noise.

The system operates in three distinct registers across sections: light (white + cream neutral backgrounds, deep green and body-gray text), dark (Field Authority green backgrounds, white and sage text), and trust blue (Veterinary Trust backgrounds for mission and institutional content). These zones are navigated deliberately — each switch signals a different emotional register. Light is informational. Dark is values and commitment. Blue is institutional partnership.

This system explicitly rejects the agri-NGO charity aesthetic: no teal-and-orange palettes, no stock-photo smiling farmers, no development-speak layout conventions. It also rejects the multinational agribusiness tone: no clinical white corporate distance, no product-catalogue grid, no Western-green "eco brand" clichés. The palette is not "eco." It is authoritative. There is a meaningful difference.

**Key Characteristics:**
- Single typeface (Poppins), all authority carried through weight, size, and case — not font variety
- Three background registers alternating through the page: white, cream neutral, field authority green, and trust blue
- Flat elevation system — no shadows; depth through background shifts and hairline borders
- Bilingual by design: Hausa translations in Poppins italic are typographic elements, not footnotes
- Motion is choreographed entrance (fade + Y lift), not decoration — each section reveal matches what it reveals
- All interactive elements are sharp-edged (4px radius), 48px tall — tools for people who make decisions, not decorative affordances

## 2. Colors: The Authority Palette

Three saturated primaries (forest, olive, navy), two neutrals (sage, cream), and white. No lime greens. No sky blues. No bright primaries. Applied with discipline.

### Primary
- **Field Authority Green** (`#1F4D36`): The dominant brand color. Used for primary buttons, all headings on light backgrounds, dark section backgrounds (values, footer), and the navbar CTA. This is the color of institutional credibility. It appears on approximately 40% of any given page surface.

### Secondary
- **Growth Green** (`#5E8B3D`): Lighter olive-green. Used exclusively for eyebrow labels, accent callouts, success indicators, and the founder name callout. Never on backgrounds larger than a chip or tag. Its job is to signal "active" or "noted" without commanding the space Field Authority owns.
- **Veterinary Trust Blue** (`#163A70`): Deep navy. Used for the mission/vision section backgrounds, the partnership/trust CTA button, and any institutional-register content. Signals alignment with development partners and formal stakeholders. Switch to this register deliberately.

### Tertiary
- **Soft Sage** (`#DCE8D7`): The connective tissue of the system. Used as the 1px border color on all cards, forms, and separators; as the navbar top/bottom border; and as the text color on deep green backgrounds. It is never a background color except as the accent strip in header cards.

### Neutral
- **Cream Neutral** (`#F6F2E8`): The warm section background. Alternates with white to create zone separation without lines. Justified by the brand — this is the official PAS palette from the brand guidelines, not an AI cream default. Used for problem sections, contact forms, partnerships, and any section that should feel informational rather than declarative.
- **White** (`#FFFFFF`): Primary page base, form surfaces, card backgrounds, the navbar. Not decorative — functional.
- **Ink** (`#111827`): Body text on white and cream backgrounds. Full-weight dark for high legibility.
- **Body Text** (`#4B5563`): Descriptive paragraph text and secondary copy on white/cream. Do not use on field-authority or trust-blue backgrounds — use white or soft sage instead.

### Named Rules
**The No-Platform Rule.** Never use a color outside the six-color palette (field-authority, growth-green, vet-trust, soft-sage, cream-neutral, white). No lime greens, no sky blues, no warm oranges, no gradients. The brand guidelines state this explicitly and so does this system.

**The Approved Combinations Rule.** Five approved text-on-background pairings from the brand identity: (1) field-authority on cream, (2) growth-green on white, (3) white on field-authority, (4) white on vet-trust, (5) field-authority on soft-sage. Every text application must be one of these five, or body-text/ink on white/cream. Nothing else.

## 3. Typography

**Display / Body Font:** Poppins (Google Fonts; weights 400, 500, 600, 700; normal and italic)

**Character:** A single geometric sans-serif that performs across Latin and Hausa scripts without compromise. The system extracts all its typographic range from weight contrast and size contrast — not from pairing a second family. Bold at large sizes commands; regular at body size advises. Italic is reserved for Hausa translations and field-honest asides.

### Hierarchy
- **Display** (Bold 700, `clamp(2.5rem, 5vw, 4.5rem)`, line-height 1.1, letter-spacing −0.02em): Hero headlines only. One per page. Maximum 6rem per brand-register ceiling. Used with `text-wrap: balance`.
- **Headline** (Bold 700, `clamp(1.875rem, 4vw, 3rem)`, line-height 1.15, letter-spacing −0.02em): Section h2s. The primary question or statement each section poses. Used with `text-wrap: balance`.
- **Title** (Bold 700, `clamp(1.25rem, 2vw, 1.5rem)`, line-height 1.3): Component h3s, card headings, value names.
- **Body** (Regular 400, 1rem, line-height 1.7): Advisory copy, field notes, descriptions. Max 65–75ch line length on desktop. Use `text-wrap: pretty` on prose. Color: body-text (`#4B5563`) on light backgrounds, white/70 opacity on dark backgrounds.
- **Label** (SemiBold 600, 0.75rem, tracking 0.25em, uppercase): Section eyebrow labels — used sparingly, not above every heading. Form field labels (same weight/size, tracking reduced to `0.05em`). Navigation links (tracking reduced, normal case).
- **Accent Italic** (Regular 400, 1rem, italic, soft-sage or white/70): Hausa translations only. This is a deliberate brand choice — bilingual voice, not a translation disclaimer.

### Named Rules
**The Single Voice Rule.** One typeface, one system. All hierarchy is expressed through size and weight contrast within Poppins. Never introduce a second family for "visual interest" — that interest is served by the palette and imagery instead.

**The Hausa Rule.** Italic is not decoration in this system. It belongs to the Hausa language. Do not italicize English copy for emphasis — use weight instead.

## 4. Elevation

This system is flat by design. There are no box shadows anywhere in the codebase, and none should be introduced. Depth and separation are communicated through three mechanisms:

1. **Background register shifts**: white → cream neutral → field authority green → trust blue. Each background change is the visual equivalent of a new chapter. This is the primary separation system.
2. **Hairline borders** (`1px solid #DCE8D7`): Used on cards, form containers, and the navbar. Defines the boundary of a surface without casting a shadow over the content below.
3. **Transparency layers on dark surfaces**: Cards on the field-authority-green background use `rgba(255, 255, 255, 0.04)` — barely perceptible, just enough surface to create a contained zone.

### Named Rules
**The No-Shadow Rule.** Shadows are prohibited. A shadow here reads as decorative sophistication the brand has not claimed. If content needs visual separation, use a background shift or a hairline border.

## 5. Components

### Buttons
Sharp and decisive — tools for people who act.
- **Shape:** Subtly rounded (4px). Square enough to feel institutional, soft enough to not feel aggressive.
- **Primary (Field Authority):** Background `#1F4D36`, white text, `Poppins SemiBold 14px`, height 48px, padding `0 32px`. Active state: `scale(0.97)` for press feedback. Hover: background `#1a4230`. Transition: 200ms cubic-bezier(0.25, 0, 0, 1) on color and transform.
- **Trust (Veterinary Blue):** Background `#163A70`, white text, same shape. Used for partnership CTAs.
- **Ghost / Outline:** Not in the current system. If needed, use field-authority border + text on transparent, 1px, same shape.
- **Disabled:** Opacity 60%, cursor not-allowed.

### Forms / Inputs
- **Style:** 1px solid `#DCE8D7` (soft-sage) border, white background, `Poppins Regular 14px`, height min 40px, padding `12px 16px`, 4px radius.
- **Labels:** `Poppins SemiBold 12px`, tracking `0.05em`, color field-authority. Always above the input, never inside.
- **Focus:** Border color switches to field-authority (`#1F4D36`), no box shadow, 200ms transition.
- **Error:** Red border (`#EF4444`), `text-xs text-red-500` error message below the field with `role="alert"`.
- **Textarea:** Same style as input, `resize: none`, minimum 5 rows.
- **Select:** Identical to input, native chevron retained.
- **Form containers:** White background, `border border-soft-sage`, padding 32px desktop / 48px large desktop, 0px outer radius (sharp containers).

### Navigation
- **Style:** Sticky, `background: white`, `border-top + border-bottom: 1px solid #DCE8D7`, height 80px.
- **Links:** `Poppins Medium 14px`, color `#4B5563` default, `#1F4D36` on hover and active. Active state adds a 2px bottom border in field-authority.
- **CTA:** Primary button (field-authority), same spec as button component.
- **Mobile:** Animated drawer below the nav bar, height auto, `border-top: 1px solid #DCE8D7`. Links become full-width rows at 16px, separated by sage hairlines.

### Cards / Containers
- **Light surface cards:** White background, `1px solid #DCE8D7` border, 0px radius (sharp), padding 32px–48px. No shadow. Used for forms and content containers.
- **Dark surface cards (Values section):** `rgba(255, 255, 255, 0.04)` background on field-authority green, padding 40px–56px. Hover: expanding sage accent line from 40px → full width (500ms ease-out). Large ghost numbers (`rgba(255,255,255,0.05)`) as background decoration.
- **Avoid nested cards.** If content needs grouping inside a card, use spacing and typographic hierarchy — not a second card.

### Tabbed Navigation (Contact)
- **Style:** `border-bottom: 1px solid #DCE8D7`, tab items with `2px bottom border` as active indicator (field-authority).
- **Inactive tabs:** `#9CA3AF` text, transparent border.
- **Active tab:** `#1F4D36` text, `#1F4D36` 2px bottom border.
- **Tab panel transitions:** AnimatePresence, fade + 12px Y lift on enter, 8px Y drop on exit, 250ms.

### Image Blocks
- **Aspect ratio:** 4:3 default for editorial images within sections.
- **Hover:** `scale(1.02)` over 700ms ease-out. No border-radius on images.
- **Alt text:** Specific and contextual — describes people, conditions, and geography. "Cattle herd at risk from livestock disease in Northern Nigeria" not "animals".

### Footer
- **Background:** Field Authority green (`#1F4D36`).
- **Text:** `rgba(255,255,255,0.7)` for secondary links, white for headings.
- **Section labels:** `0.75rem SemiBold`, tracking `0.15em`, uppercase, `rgba(255,255,255,0.4)`.
- **Bottom bar:** `border-top: 1px solid rgba(255,255,255,0.1)`.

## 6. Do's and Don'ts

### Do:
- **Do** use the five approved color combinations from the brand identity: field-authority on cream, growth-green on white, white on field-authority, white on vet-trust, field-authority on soft-sage.
- **Do** shift background registers (white → cream → field-authority green → trust blue) to create section rhythm. This is the primary visual separation mechanism.
- **Do** write Hausa translations in Poppins italic. It is a typographic voice, not an afterthought — position it as a second line under the English, visually distinct and intentional.
- **Do** make every button 48px tall with 4px radius. No pills, no rounded-full, no outlined ghosts unless building an explicitly secondary-action pattern.
- **Do** use `text-wrap: balance` on h1–h3 and `text-wrap: pretty` on body paragraphs.
- **Do** cap body line length at 65–75ch on desktop. Long lines of body text at full content width are prohibited.
- **Do** animate section reveals with fade + Y-lift (0→1 opacity, 40px→0 translateY), eased with `cubic-bezier(0.25, 0, 0, 1)`, with stagger on grid children.
- **Do** include `@media (prefers-reduced-motion: reduce)` alternatives — crossfade or instant transition — on every animation.
- **Do** use `object-cover` on all farm photography. Images are field evidence, not decoration.

### Don't:
- **Don't** use any color outside the six-color palette. No lime greens, sky blues, warm oranges, or gradients — the brand guidelines state this explicitly.
- **Don't** use box shadows. Not on cards, not on buttons, not on modals. The elevation system is flat. Shadows read as borrowed sophistication the brand has not claimed.
- **Don't** use `background-clip: text` with gradients. Emphasis through weight, not gradient text effects.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe. Rewrite with full borders, background tints, or nothing.
- **Don't** put an uppercase tracked eyebrow label above every section heading. The label-eyebrow pattern appears rarely and with specific purpose — not as section grammar. Sections can open directly with a headline.
- **Don't** reach for the generic agri-NGO charity aesthetic: teal-and-orange palettes, stock photography of smiling farmers holding tablets in temperate fields, or development-speak copy structures ("Empowering communities through…"). PAS is a professional advisory firm.
- **Don't** produce the multinational agribusiness feel: clinical white backgrounds, product-catalogue grid layouts, corporate distance. PAS comes to the farm — the design follows them.
- **Don't** use body-text gray (`#4B5563`) on field-authority or trust-blue backgrounds. Use white or soft-sage — gray on colored backgrounds looks washed out.
- **Don't** use placeholder text at muted-gray defaults on white or cream. Ensure placeholder contrast meets 4.5:1 (use `#6B7280` minimum against white).
- **Don't** introduce a second typeface. All typographic contrast is achieved through Poppins weight and size. Adding a serif for "warmth" or a mono for "technical feel" breaks the single-voice system.
- **Don't** use the hero-metric template (big number, small label, supporting stats, gradient accent). This is a SaaS cliché — not appropriate for a field-based advisory firm.
