\---

name: redesign-existing-projects

description: Upgrades existing websites and apps to premium quality. Audits current design, identifies generic AI patterns, and applies high-end design standards without breaking functionality. Works with any CSS framework or vanilla CSS.

\---



\# Redesign Skill



\## How This Works



When applied to an existing project, follow this sequence:



1\. \*\*Scan\*\* — Read the codebase. Identify the framework, styling method (Tailwind, vanilla CSS, styled-components, etc.), and current design patterns.

2\. \*\*Diagnose\*\* — Run through the audit below. List every generic pattern, weak point, and missing state you find.

3\. \*\*Fix\*\* — Apply targeted upgrades working with the existing stack. Do not rewrite from scratch. Improve what's there.



\## Design Audit



\### Typography



Check for these problems and fix them:



\- \*\*Browser default fonts or Inter everywhere.\*\* Replace with a font that has character. Good options: `Geist`, `Outfit`, `Cabinet Grotesk`, `Satoshi`. For editorial/creative projects, pair a serif header with a sans-serif body.

\- \*\*Headlines lack presence.\*\* Increase size for display text, tighten letter-spacing, reduce line-height. Headlines should feel heavy and intentional.

\- \*\*Body text too wide.\*\* Limit paragraph width to roughly 65 characters. Increase line-height for readability.

\- \*\*Only Regular (400) and Bold (700) weights used.\*\* Introduce Medium (500) and SemiBold (600) for more subtle hierarchy.

\- \*\*Numbers in proportional font.\*\* Use a monospace font or enable tabular figures (`font-variant-numeric: tabular-nums`) for data-heavy interfaces.

\- \*\*Missing letter-spacing adjustments.\*\* Use negative tracking for large headers, positive tracking for small caps or labels.

\- \*\*All-caps subheaders everywhere.\*\* Try lowercase italics, sentence case, or small-caps instead.

\- \*\*Orphaned words.\*\* Single words sitting alone on the last line. Fix with `text-wrap: balance` or `text-wrap: pretty`.



\### Color and Surfaces



\- \*\*Pure `#000000` background.\*\* Replace with off-black, dark charcoal, or tinted dark (`#0a0a0a`, `#121212`, or a dark navy).

\- \*\*Oversaturated accent colors.\*\* Keep saturation below 80%. Desaturate accents so they blend with neutrals instead of screaming.

\- \*\*More than one accent color.\*\* Pick one. Remove the rest. Consistency beats variety.

\- \*\*Mixing warm and cool grays.\*\* Stick to one gray family. Tint all grays with a consistent hue (warm or cool, not both).

\- \*\*Purple/blue "AI gradient" aesthetic.\*\* This is the most common AI design fingerprint. Replace with neutral bases and a single, considered accent.

\- \*\*Generic `box-shadow`.\*\* Tint shadows to match the background hue. Use colored shadows instead of pure black at low opacity.

\- \*\*Flat design with zero texture.\*\* Add subtle noise, grain, or micro-patterns to backgrounds.

\- \*\*Perfectly even gradients.\*\* Break the uniformity with radial gradients or noise overlays.

\- \*\*Inconsistent lighting direction.\*\* Audit all shadows to ensure they suggest a single, consistent light source.

\- \*\*Random dark sections in a light mode page.\*\* Either commit to a full dark mode or keep a consistent background tone. If contrast is needed, use a slightly darker shade of the same palette.

\- \*\*Empty, flat sections with no visual depth.\*\* Add high-quality background imagery, subtle patterns, or ambient gradients.



\### Layout



\- \*\*Everything centered and symmetrical.\*\* Break symmetry with offset margins, mixed aspect ratios, or left-aligned headers.

\- \*\*Three equal card columns as feature row.\*\* Replace with a 2-column zig-zag, asymmetric grid, or horizontal scroll.

\- \*\*Using `height: 100vh` for full-screen sections.\*\* Replace with `min-height: 100dvh`.

\- \*\*No max-width container.\*\* Add a container constraint around 1200-1440px with auto margins.

\- \*\*Uniform border-radius on everything.\*\* Vary the radius: tighter on inner elements, softer on containers.

\- \*\*No overlap or depth.\*\* Use negative margins to create layering and visual depth.

\- \*\*Missing whitespace.\*\* Double the spacing. Let the design breathe.

\- \*\*Buttons not bottom-aligned in card groups.\*\* Pin buttons to the bottom of each card.

\- \*\*Inconsistent vertical rhythm in side-by-side elements.\*\* Align shared elements across all items.



\### Interactivity and States



\- \*\*No hover states on buttons.\*\* Add background shift, slight scale, or translate on hover.

\- \*\*No active/pressed feedback.\*\* Add a subtle `scale(0.98)` on press.

\- \*\*Instant transitions with zero duration.\*\* Add smooth transitions 200-300ms to all interactive elements.

\- \*\*Missing focus ring.\*\* Ensure visible focus indicators for keyboard navigation.

\- \*\*No loading states.\*\* Replace generic spinners with skeleton loaders.

\- \*\*No empty states.\*\* Design a composed getting started view.

\- \*\*No error states.\*\* Add clear inline error messages for forms.

\- \*\*Dead links.\*\* Buttons that link to #. Either link to real destinations or visually disable them.

\- \*\*No indication of current page in navigation.\*\* Style the active nav link differently.

\- \*\*Scroll jumping.\*\* Add `scroll-behavior: smooth`.



\### Content



\- \*\*AI copywriting cliches.\*\* Never use "Elevate", "Seamless", "Unleash", "Next-Gen", "Game-changer", "Delve", "Tapestry". Write plain specific language.

\- \*\*Exclamation marks in success messages.\*\* Remove them. Be confident not loud.

\- \*\*Passive voice.\*\* Use active voice throughout.

\- \*\*Lorem Ipsum.\*\* Never use placeholder latin text.

\- \*\*Title Case On Every Header.\*\* Use sentence case instead.



\### Component Patterns



\- \*\*Generic card look (border + shadow + white background).\*\* Remove the border, or use only background color, or use only spacing.

\- \*\*3-card carousel testimonials with dots.\*\* Replace with a masonry wall or single rotating quote.

\- \*\*Modals for everything.\*\* Use inline editing or slide-over panels instead.

\- \*\*Footer link farm with 4 columns.\*\* Simplify. Focus on main navigational paths.



\### Iconography



\- \*\*Lucide or Feather icons exclusively.\*\* These are the default AI icon choice. Use Phosphor or Heroicons for differentiation.

\- \*\*Missing favicon.\*\* Always include a branded favicon.

\- \*\*Stock diverse team photos.\*\* Use real team photos or a consistent illustration style.



\### Code Quality



\- \*\*Div soup.\*\* Use semantic HTML: nav, main, article, aside, section.

\- \*\*Missing alt text on images.\*\* Describe image content for screen readers.

\- \*\*Commented-out dead code.\*\* Remove all debug artifacts before shipping.

\- \*\*Missing meta tags.\*\* Add proper title, description, og:image, and social sharing meta tags.



\### Strategic Omissions



\- \*\*No legal links.\*\* Add privacy policy and terms of service links in the footer.

\- \*\*No custom 404 page.\*\* Design a helpful branded page not found experience.

\- \*\*No form validation.\*\* Add client-side validation for emails, required fields, and format checks.

\- \*\*No "skip to content" link.\*\* Essential for keyboard users.



\## Fix Priority



Apply changes in this order:



1\. Font swap — biggest instant improvement, lowest risk

2\. Color palette cleanup — remove clashing or oversaturated colors

3\. Hover and active states — makes the interface feel alive

4\. Layout and spacing — proper grid, max-width, consistent padding

5\. Replace generic components — swap cliche patterns for modern alternatives

6\. Add loading, empty, and error states — makes it feel finished

7\. Polish typography scale and spacing — the premium final touch



\## Rules



\- Work with the existing tech stack. Do not migrate frameworks or styling libraries.

\- Do not break existing functionality. Test after every change.

\- Before importing any new library, check the project dependency file first.

\- If the project uses Tailwind, check the version before modifying config.

\- Keep changes reviewable and focused. Small targeted improvements over big rewrites.

