# Stronghold Lockurity Design System

A dark-canvas design system for a developer-facing AI agent engineering platform. One near-black surface, one electric-green accent, hairline borders instead of shadows, and a two-face type pairing (Inter for narrative, SF Mono for anything typeable at a terminal). The whole system reads like polished documentation that also happens to sell something.

## Sources

Everything here is derived from **one written brand specification supplied in chat** (colors, type scale, spacing, elevation, shape and component inventory, plus do's and don'ts). No other source material was provided:

- No codebase, repository or local folder was attached.
- No Figma file or link was supplied.
- No slide deck, screenshots, logo files or font binaries were supplied.

Two consequences worth knowing before you extend this system:

1. **The brand name and the product description in the brief do not match.** The project brief is titled "Stronghold Lockurity Design System" (and the requesting domain is `strongholdlockurity.com`), while the accompanying notes describe a platform called Voltagent. This system is built as **Stronghold Lockurity** using the supplied design values; no Voltagent logo, wordmark, product screen or marketing copy has been reproduced. If the intent was to document Voltagent's own system, that needs to come from Voltagent's own repo or Figma.
2. **No logo exists in this system.** Nothing was supplied, and a brand mark is not something to invent or reconstruct from memory. Everywhere a mark would go, the brand name is set in plain Inter (600 or 700). See the "Wordmark" card under Brand.

## Content fundamentals

**Tone.** Engineered and matter-of-fact. Copy explains what a thing does and what it costs you; it does not sell excitement. Assume the reader has shipped software before.

**Casing.** Sentence case everywhere — headlines, buttons, table headers in prose, card titles. The single exception is the eyebrow label, which is uppercase with 2.52px tracking. Write eyebrow copy sentence-case in source and let CSS uppercase it.

- Headline: "Build, observe and ship AI agents"
- Not: "Build, Observe And Ship AI Agents"
- Eyebrow: `EVERYTHING YOU NEED`, `FROM LOCALHOST TO PRODUCTION`

**Person.** Second person for instructions ("Run `stronghold deploy`", "Update your environment before rotating"). First-person plural only for company commitments ("Self-hosting is available on every plan"). Never first-person singular.

**Sentence shape.** Full sentences, moderate length, one idea each. Statements of fact over promises: "Every run writes a span tree you can open on localhost before anything ships." Avoid superlatives, avoid "revolutionary / seamless / effortless", avoid rhetorical questions as headings.

**Numbers.** Always concrete and always in mono: `412ms`, `4.2M traces / day`, `99.98% uptime`, `$610.00`. A number never appears as a vague claim ("blazing fast").

**Commands and identifiers.** Anything a developer could type goes in mono — `npx stronghold init`, `STRONGHOLD_SINK`, `proj_9f2c41`, `run_8c21`. Inline in prose it takes the `CodeChip` treatment; multi-line it takes `CodeMockup` with a copy button.

**Emoji.** Never. Not in copy, not in cards, not in nav. There are no decorative glyphs standing in for meaning.

**Labels.** Buttons are verb-first and short: "Start free", "Read the docs", "Rotate key", "Talk to us". Status words are single-word: Live, Beta, Paused, Draft, Retried.

**Fine print.** 12px mute grey, factual, one line: "Billed monthly on the 1st. Cancel any time." / "No credit card. Self-host or run on our infrastructure."

## Visual foundations

**Surface.** One page surface, `#101010`, edge to edge, with no light-mode counterpart. `#1a1a1a` (canvas-soft) is the only second fill and it marks *inputs and code* — never a section band. Bands do not alternate background colour; section change is signalled by rules, not fills.

**Colour.** A single accent, electric green `#00d992`. It appears as: primary CTA fill, live/status dots and pills, the 2px active indicator in product navigation, the 2px green divider band, the copied-state flash, and data bars in a trace tree. It is never body text, never a heading colour, never a large fill behind copy. `#2fd6a1` (soft) is for ghost buttons and focus/tooltip cues; `#10b981` (deep) is the inline link colour in prose. There is no second accent and no error/warning palette on marketing surfaces — success is green, missing is mute grey.

**Type.** Inter 400/500/600/700 with `"calt"` and `"rlig"` on. Display sits *calm*: 60px at weight 400 with -0.65px tracking for the hero, 36px/400/-0.9px for section headlines, 24px/700/-0.6px and 20px/600 for card titles. Body is 16px/26px, and long-form prose runs at line-height 1.65. SF Mono covers code, commands, terminal mockups and numeric counters, including the unusual 549/550 "almost-bold" weight for emphasised inline code. Never set a headline at 700+; never set inline code in Inter.

**Backgrounds.** Flat. No gradient mesh, no atmospheric glow, no hero image, no repeating pattern, no texture, no grain, no illustration suite. There is no photography anywhere in the brand — code-editor mockups do the work an image would do elsewhere.

**Borders and cards.** A card is a 1px `#3d3a39` rectangle at 8px radius with 24px interior padding on the same canvas as the page. That is the entire card language: no fill, no shadow, no coloured left border. Emphasis is a 3px hairline; "featured" or "active" is a 2px green border.

**Elevation.** Four levels, and the useful ones are the first two. Level 0 is flat (full-bleed bands). Level 1 is the hairline — the default for every card and button. Level 2 is a faint outer glow, `0 0 15px rgba(92,88,85,0.2)`, for hover and featured cards. Level 3 (`0 20px 60px rgba(0,0,0,0.7)` plus a 1px inset ring) is a real drop shadow and is restricted to in-product modals. Material-style shadows on cards are wrong here.

**Ornament.** Exactly one decorative line: `1px dashed rgba(79, 93, 117, 0.4)`, used between section bands and around the empty-state glyph circle. The 2px green divider band is the only chromatic rule and appears at most once or twice per page.

**Radii.** 0 for full-bleed bands, 4px for the smallest inline chips, 6px for buttons and inputs, 8px for cards and code chrome, 9999px for inline status pills and circular icon containers only. Buttons are tight rectangles; a pill-shaped button is off-brand.

**Spacing.** 4px base. Tokens run 2 / 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64. Bands pad 48px vertical and 32px horizontal; cards pad 24px; code blocks pad 20px. The marketing container centres at 1280–1400px.

**Layout.** Feature grids are 3-up at ≥1024px, 2-up at 768–1023px, 1-up below. Nav is sticky with a bottom hairline and collapses to a hamburger below 768px, keeping the green CTA pinned at the bottom of the overlay. Hero type scales 60px → 32px at mobile. Product screens use a fixed 232px sidebar with a hairline right edge and a sticky top bar.

**Transparency and blur.** Almost none. Modal scrims are a flat `rgba(0,0,0,0.6)`; there is no frosted glass, no backdrop blur, no translucent card. Disabled controls drop to 0.45 opacity — the only place alpha touches a component.

**Motion.** Restrained: 160ms ease on colour, border and background transitions. Hover brightens (grey text → ink; transparent row → canvas-soft) or adds the Level 2 glow; it never scales, lifts or bounces. Press states darken rather than shrink. There are no entrance animations, no parallax, no scroll-triggered reveals. The copied-state flash on a code block — green for 1.4s — is the most animated moment in the system.

**Hover / press summary.** Links: grey → ink (never green). Nav rows: transparent → canvas-soft with a green 2px indicator when active. Cards: add glow, keep the hairline. Buttons: primary keeps its fill and darkens slightly; outline brightens its label; ghost brightens from primary-soft toward primary.

**Imagery.** None to describe — no photography, no illustration, no icon-driven hero art. If an image is unavoidable, the brand's own precedent is a code-editor card with a copy button.

## Iconography

No icon set, icon font, SVG sprite or PNG icons were supplied with the brief, and none could be copied from a source.

- **Substitution (flagged):** [Lucide](https://lucide.dev) is loaded from CDN (`https://unpkg.com/lucide@0.544.0/dist/umd/lucide.min.js`) in the console UI kit, drawn at 16px with `stroke-width: 1.75`. It is the closest free match to the thin, geometric, outline-only style the brand's chrome implies. Please supply the real icon set if one exists — this is the one substitution most likely to read as "not us".
- **Style rules that do hold, from the spec:** icons are monochrome and inherit text colour (`--sl-mute` at rest, `--sl-primary` only when a row is active). They are never multicolour, never filled, never containerised in a coloured tile. Circular icon containers use `--sl-radius-full` with a hairline or dashed border and no fill.
- **Emoji are never used** as icons or decoration.
- **Unicode as icons** is used sparingly and only where a glyph is genuinely typographic: `×` for modal close, `—` for a null value or a list bullet in pricing features.
- **No hand-drawn SVG** has been added to this system. If a glyph is missing, use Lucide or leave the slot empty rather than drawing an approximation.

## Substitutions and gaps

| Item | Status |
|---|---|
| Inter | Loaded from Google Fonts (the brand's real face; no self-hosted binaries were supplied). |
| SF Mono | **Substituted** with JetBrains Mono from Google Fonts. SF Mono is Apple-system and cannot be redistributed. The 549/550 weights are declared in tokens but resolve to the nearest available weight. |
| Logo / wordmark | **Missing.** Brand name set in Inter; no mark drawn. |
| Icon set | **Substituted** with Lucide from CDN. |
| Imagery / illustration | None supplied and none invented; code mockups stand in. |
| Error / warning palette | Deliberately absent from marketing surfaces per the spec. |

### Intentional additions

- `DashedRule` — the spec describes the dashed section divider as a brand motif but names no component for it; this is a one-element wrapper so the value is not retyped.
- `Eyebrow` — the tracked uppercase label is specified as a typography role; it is componentised because every band uses it.
- `Icon` (in the console kit only, not a system component) — a wrapper around the substituted Lucide set.

## Index

**Root**
- `styles.css` — the single entry point consumers link. Imports only.
- `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `elevation.css` — all custom properties, prefixed `--sl-`.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent Skills wrapper for use outside this project.
- `readme.md` — this file.

**Foundations** (`guidelines/`, 15 specimen cards)
Colors: Brand Accent, Surface, Text, Green In Use · Type: Display Scale, Body Scale, Eyebrow Labels, Mono & Code, Font Pairing · Spacing: Spacing Tokens, Spacing In Use · Shape: Radius Scale, Elevation Levels · Brand: Rules & Dividers, Wordmark.

**Components** (`components/`, 22 primitives)
- `buttons/` — `Button` (primary / outline / ghost), `PillTag`
- `cards/` — `Card`, `CodeMockup`, `CodeChip`
- `forms/` — `TextInput`
- `navigation/` — `NavBar`, `NavLink`, `Footer`
- `layout/` — `HeroBand`, `ContentBand`, `GreenDividerBand`, `DashedRule`, `Eyebrow`
- `examples/` — `PricingTier`, `IncludedSummary`, `SubscriptionSummary`, `AppShellRow`, `DataTable`, `AuthFormCard`, `ModalCard`, `EmptyState`, `Toast`

Each directory carries a `@dsCard` HTML showing its states; each component has a `.d.ts` props contract and a `.prompt.md` usage note.

**UI kits**
- `ui_kits/marketing/` — the public marketing page (hero, green divider band, feature grid, deploy section, pricing, footer). Interactive: nav switches product/pricing, feature cards select, code blocks copy.
- `ui_kits/console/` — the in-product console (sign-in, overview, agents, traces, evals, API keys, billing) with dialogs and toasts.

No slide template was supplied, so no sample slides were created.
