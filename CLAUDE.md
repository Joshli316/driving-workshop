# Driving & Delivery Workshop (Workshop 16)

Bilingual (Simplified Chinese primary, English subtitle) workshop slide deck and resource page for Chinatown Service Center. For use by Employment Outreach Specialist — projected on screen, 30-minute session.

## Tech Stack
Vanilla HTML/CSS/JS — no build step, no framework.

## Structure
```
index.html       — 13-slide projection deck (click + keyboard navigation)
resources.html   — bilingual resource reference page
styles.css       — shared design system (CSS variables, typography, components)
print.css        — print-friendly styles for resources page
qrcode.min.js    — client-side QR code generator (local copy)
sw.js            — service worker (cache-first, offline support)
sitemap.xml      — for search engine discovery
_headers         — Cloudflare Pages security headers (CSP, frame-options)
robots.txt       — crawl rules
```

## Entry Point
`index.html`

## Slides (13 total, linear flow)
1. Title: 驾驶与外卖配送 / Driving & Delivery Jobs
2. Agenda (3 topics: License / Gig Apps / Full-Time)
3. Types of Driving Jobs (gig, delivery, CDL, paratransit/school bus)
4. AB 60 License — required documents
5. Activity: Which App Pays Most? (4-card pay compare, two-phase reveal)
6. DoorDash / Uber Eats signup (5-step phone walkthrough)
7. Car Insurance — gap between personal & gig coverage
8. Taxes for Gig Workers — 1099, quarterly estimates, deductions
9. True/False Quiz (multi-phase reveal: Q1 → answer → Q2 → answer)
10. Full-Time Driving Jobs (USPS, Amazon DSP, Access Services, school bus)
11. CDL-A Trucking (3 steps + LA training schools)
12. CSC Services
13. Resources + QR code → resources.html

## Navigation
- Click anywhere → advance (regular slides)
- Arrow keys ← → also navigate
- Interactive slides (5, 9): must click reveal button before advancing

## Visual Design
Deep orange + amber palette — distinct from suite siblings (forest green, navy, etc.)
- Background: #fff7ed (warm orange-tint)
- Primary: #c2410c (deep orange)
- Accent: #f59e0b (amber, used for backgrounds/borders)
- Accent-text: #b45309 (darker amber, AA-compliant text on white)
- Text: #1c1917 (near-black, warm undertone)
- Text-sub: #57534e (stone-600, AA-compliant on bg)
- Cards: 8px border-radius; QR code: sharp (border-radius: 0) for sharp/soft contrast
- Activity match colors: `--match-1` orange / `--match-2` amber / `--match-3` brown / `--match-4` green (DoorDash winner)

## Icons
All icons are inline Lucide SVGs — no emoji in icon positions.
- Agenda cards (slide 2): 40px, `color: var(--accent)`
- Topic badges: 16px, inherits `--primary-dark`
- Phone-step / Type-card / CDL-step / Job-card icons: 28–32px, `color: var(--primary)`
- Service cards (slide 12): 32px, `color: var(--primary)`
Use `aria-hidden="true"` on every SVG; `stroke-width="1.5"` for icons ≥32px, `2` for smaller.

## Responsive
`@media (max-width: 768px)` block at end of styles.css:
- All multi-column grids collapse appropriately
- 4-col pay-compare → 2-col; 5-col phone-steps → 2-col; all info-grids → 1-col
- `main-title` 64px → 40px; `zh-headline` 48px → 32px
- Slide padding reduced to 20px 16px

## Animations
- Slide fade-in: `@keyframes slideFadeIn` (220ms ease-out) on `.slide.active`
- `@media (prefers-reduced-motion: reduce)` block disables all transitions/animations

## Bilingual
- Language toggle stored in `localStorage` key `ddw_lang`
- `body.zh` class switches `.en`/`.zh` spans via CSS (`display: none`)
- Simplified Chinese (zh-CN); font: PingFang SC, Noto Sans SC, Microsoft YaHei
- Chinese text: 28–32px body, 48px headings; English: 16–18px body, 22px subtitles

## Deployment
Cloudflare Pages → `driving-workshop.pages.dev`
Deploy: `wrangler pages deploy . --project-name driving-workshop`

**Before deploying:** bump `CACHE` version in `sw.js` (e.g. `v1` → `v2`) to invalidate cached assets on all visitor devices.

## Hub
This workshop is part of the CSC workshop suite. The hub at `csc-workshops.pages.dev` lists all workshops — add a card there after this one is deployed and verified.

## Key Content
- **AB 60 License:** immigrants without legal status can get a CA driver's license. Required docs, fees, 3-step process. Cannot be used for federal ID or air travel.
- **Gig Apps:** DoorDash, Uber Eats, Lyft, Instacart, Amazon Flex. ITIN accepted (no SSN required). Average $15–25/hr after tips, before gas.
- **Insurance Gap:** Personal insurance doesn't cover gig work. App-provided coverage only active during delivery, not while waiting. Recommend rideshare endorsement ($20–40/mo).
- **Taxes:** 1099-NEC contractor. ~15.3% self-employment + income tax. Quarterly estimates Apr/Jun/Sep/Jan. Mileage deduction 67¢/mile (2024). VITA free tax help.
- **Full-Time:** USPS, Amazon DSP, Access Services (paratransit), LA school bus — stable pay + benefits, no CDL required.
- **CDL-A:** 4–7 week training, $3K–7K, many carriers reimburse. Requires SSN and work authorization (AB 60 not eligible).
