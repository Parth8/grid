# GRID — F1 2026 reference

**An editorial reference for Formula 1 in its 2026 era. Compressed and explained.**

Eleven teams. Twenty-two drivers. Twenty-two tracks. The biggest technical reset in F1 history just hit, and this is a primer that respects your time.

🔗 **Live:** parth8.github.io/grid (after deploy)

---

## Design brief

Built as if by an indie studio obsessed with sports, minimalism, architecture, UI/UX, and reducing cognitive load by compressing and abstracting systems. Specifically not a Wikipedia-with-flair, not a sales site, not a dashboard.

The vocabulary:

- **Cream paper** background — printable warmth, not screen-blue
- **Warm ink** for text — black with brown in it, less harsh
- **Single accent — F1 racing red** — used surgically: active aero flaps, championship leader, anatomy callouts, navigation underline. No neon, no second hue.
- **Three typefaces**: Inter Tight (clean geometric sans), Instrument Serif (italic punctuation only), JetBrains Mono (data, labels, dimensions)
- **Section numbers** like §01, §02 — editorial, not decorative
- **Hairline rules** for tables — information density without weight
- **Top-down technical drawings** for the car — architectural, not stylised
- **Dimension lines** like a blueprint — 5,400mm noted, not described

Every visual choice serves the brief: make F1 legible without making it ornamental.

---

## Sections

| # | Section | What it does |
|---|---|---|
| §01 | **Reset** | 8-row comparison table — 2025 → 2026 by category. The delta in one glance. |
| §02 | **Anatomy** | Top-down technical drawing of an F1 car with 8 numbered callouts. Hover or click any number/callout, the relevant part highlights red. |
| §03 | **Teams** | Tabular layout — 11 rows, colour swatch, drivers, engine, base, titles. Click any row for the full story modal. |
| §04 | **Drivers** | Tabular — 22 rows with flag, team dot, titles, wins, age. Champions marked with a red star. Lindblad marked with a red R. Click any row for detail. |
| §05 | **Calendar** | 22-cell grid with custom abstracted track silhouettes. Filter by region or sprint weekends. |
| §06 | **Race Weekend** | Three-column day layout — Friday, Saturday, Sunday — with clickable sessions and detailed explanations. |
| §07 | **Active Aero** | Side-elevation technical drawing of an F1 car. Toggle Z-Mode (corner, max grip) vs X-Mode (straight, low drag). Wing flaps physically rotate. Speed lines stream in X-mode. |
| §08 | **Tyres** | Five compounds, pace and life as horizontal bars. The strategic core in one chart. |
| §09 | **Strategy** | 60-lap race simulator. Pick three stints, set their length, choose compounds. Total race time computed with tyre degradation. Validates the 2-different-dry-compounds rule. |
| §10 | **Pit Stop** | Top-down technical car diagram. Reaction game — tap each wheel as it turns red. Wrong wheel = 0.5s penalty. Beats stored locally. F1 record (1.82s) as benchmark. |
| §11 | **Flags** | All 8 official flag types with accurate colour and one-line meaning. |
| §12 | **Standings** | Current 2026 driver championship through Monaco. Antonelli leading on 156. Team-coloured stripes. Click any row for the driver detail modal. |
| §13 | **History** | 76 years compressed into 5 eras, each with a defining stat. Not a list of trivia. |
| §14 | **A–Z Glossary** | 32 terms searchable in real time. From Active Aero to VSC. |

---

## What's interactive

- **Two filterable tables** — drivers (4 filters), calendar (6 filters)
- **Anatomy diagram** — hover/click any of 8 markers, both the marker and the callout text highlight in sync
- **Race weekend** — click any of 7 sessions across three days
- **Active aero toggle** — flap angles rotate, speed lines stream, stats update, descriptions swap
- **Strategy simulator** — three stint sliders + dropdowns, live total race time + compliance check
- **Pit stop game** — random wheel order, reaction-time timing, local best persisted, audio cues
- **Click-anywhere modals** — team and driver detail with stats, story, pull quote
- **Sound** — synthesized Web Audio cues for the pit stop game only (subtle, not gimmicky)

---

## Tech

- Plain HTML / CSS / JS. No frameworks, no build step, no node_modules.
- Google Fonts (Inter Tight, Instrument Serif, JetBrains Mono).
- ~141 KB total payload across four files.

---

## Project structure

```
.
├── index.html          # Editorial document with §01–§14 sections
├── css/
│   └── styles.css      # ~1,800 lines · full design system
└── js/
    ├── data.js         # 2026 reference — teams, drivers, tracks, glossary, history, etc.
    └── main.js         # ~750 lines · rendering, interactivity, games, modals
```

## Deploy

Drop the folder into any GitHub Pages-enabled repo. No build, no config.

If pushing to `parth8.github.io` as a subfolder:

```bash
cp -r grid /path/to/parth8.github.io/
cd /path/to/parth8.github.io
git add grid
git commit -m "Add GRID · F1 2026 reference"
git push
```

Live at `parth8.github.io/grid` within a minute.

---

## Data

All 2026 data verified June 2026: FIA entry list, official 2026 calendar (Madrid debuts, Bahrain + Saudi cancelled), driver numbers (Norris #1 as champion, Verstappen #3, Lindblad #41), standings through Monaco GP. Eras and history compressed to five rather than the usual chronology-of-firsts.

---

Not affiliated with Formula 1, the FIA, or any team. F1 marks and likenesses belong to their owners. An educational reference made by [Parth](https://parth8.github.io).
