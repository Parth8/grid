# GRID — F1 2026 reference

**An editorial reference for Formula 1 in its 2026 era. Compressed, explained, multi-page, with live data.**

Eleven teams. Twenty-two drivers. Twenty-two tracks. The biggest technical reset in F1 history just hit, and this is a primer that respects your time — split into four focused chapters plus a live data feed.

🔗 **Live:** parth8.github.io/grid (after deploy)

---

## Design brief

Built as if by an indie studio obsessed with sports, minimalism, architecture, UI/UX, and reducing cognitive load by compressing and abstracting systems.

- **Cream paper** background, warm ink, single F1 racing red accent. No dark theme, no neon, no second hue.
- **Inter Tight, Instrument Serif, JetBrains Mono.** Geometric sans for body, italic serif for punctuation accents, monospace for data.
- **§00 through §D4 section numbers**, hairline rules, dimension lines like a blueprint. Editorial, not decorative.
- **Top-down technical drawings** for the car. Two-panel airfoil cross-sections for active aero. Abstracted track silhouettes for the calendar.

---

## Architecture — five pages

```
parth8.github.io/grid/
  ├── /                  Home: primer + 2026 reset + standings preview + route cards
  ├── /the-grid/         Teams (11) + drivers (22) + calendar (22 races)
  ├── /the-car/          Anatomy + active aero + tyres + strategy + pit stop
  ├── /live/             OpenF1 — real-time session, positions, fastest lap, weather, race control
  └── /learn/            Race weekend + flags + 76 years of history + A–Z glossary
```

Plain HTML / CSS / JS, no build, no framework. One shared `styles.css`, one shared `data.js`, one shared `main.js` that dispatches per-page based on `body[data-page]`.

---

## Sections, in detail

### Home — `/`
| # | Block | What it does |
|---|---|---|
| Cover | Title plate | Edition meta, big GRID header, four headline stats (teams · drivers · races · seasons) |
| §00 | **What is Formula 1?** | Eight-cell primer: format, championships, the car-as-team, weekend, points, tyres, safety, global scale. The shortest possible introduction. |
| §01 | **The 2026 reset** | 8-row table — 2025 → 2026 by category. Engines, fuel, weight, aero, DRS, dimensions, mandatory stops, fines. |
| §02 | **Standings now** | Top 10 driver championship through Monaco GP. Team-coloured stripes, P1 highlighted red. |
| §03 | **Read on** | Four cards routing to the other pages. |

### The Grid — `/the-grid/`
- **§A1 Teams** — 11-row table, click any row for the full story modal (history, pull quote, principal, engine, base, chassis, drivers).
- **§A2 Drivers** — 22-row table with flag, team-coloured dot, titles, wins, age. Filters: All · Champions · Young (under 24) · Veterans (30+). Click any row for the driver modal.
- **§A3 Calendar** — 22 cells, each with a custom abstracted track silhouette, round number, date, lap record, turn count. Filters: All · Europe · Americas · Asia & ME · Oceania · Sprint weekends.

### The Car — `/the-car/`
- **§B1 Anatomy** — Top-down technical drawing of a 2026 F1 car, with eight numbered callouts. Wing slats, tapered nose, halo, sidepod inlets, T-cam, diffuser strakes. Hover any number or callout — both highlight in sync.
- **§B2 Active aero** — Two-panel detail plate: front-wing and rear-wing airfoil cross-sections. Toggle Z-mode (corner) vs X-mode (straight) — the flap angles rotate, dimension labels update, a "+30 km/h" speed indicator streams in X-mode. Drawn like an engineering plate, complete with "DRAWING · ACTIVE AERO / 2026 / TECHNICAL REGULATION 3.10" footer.
- **§B3 Tyres** — Five compounds (Soft · Medium · Hard · Inter · Wet) as a chart of pace and life bars.
- **§B4 Strategy** — 60-lap race simulator. Pick three stints, set their length, choose compounds. Total race time computed with tyre degradation. Validates the 2-different-dry-compounds rule.
- **§B5 Pit stop** — Top-down schematic car. Reaction game — tap each wheel as it turns red, wrong wheel = 0.5 s penalty. Times under 2.5 s register as "F1-grade". Best stored locally. F1 record (1.82 s) as benchmark.

### Live — `/live/` — **NEW**
Real-time and recent session data, pulled directly from the [OpenF1](https://openf1.org) public API.
- **§C1 Latest session** — Which session was just on (or is live now): name, type, circuit, country, start time.
- **§C2 Positions** — Top 12 by latest position. Team-coloured dots, P1 highlighted in red.
- **§C3 Fastest lap & weather** — The fastest valid lap of the session (with sector breakdown and top speed), plus a snapshot of conditions — air temp, track temp, humidity, wind, pressure, rainfall.
- **§C4 Race control** — Latest 24 race-director messages, with flag-coloured tags (Red, Yellow, VSC, SC, Green, Blue, Chequered).
- **Refresh** button at the bottom; auto-loads on page enter; graceful error UI when the API is unreachable.

Free, no API key. Direct browser fetch — no proxy.

### Learn — `/learn/`
- **§D1 Race weekend** — Three-column timeline of Friday / Saturday / Sunday sessions. Click any of 7 sessions for the detail panel.
- **§D2 Flags** — All 8 official flag types with accurate colour and one-line meaning.
- **§D3 76 years of history** — **15 era cards in a 5×3 grid**, each with a defining stat. From the 1950 pioneers through Antonelli's 2026 spring.
- **§D4 A–Z glossary** — 32 terms searchable in real time.

---

## OpenF1 integration

**Why:** Static data goes stale. The API gives the site a heartbeat — real positions, real lap times, real flags from the actual timing tower.

**How:**
- `GET /v1/sessions?session_key=latest` to find the most recent session. Falls back to current-year sessions if "latest" hasn't started yet.
- Parallel `Promise.allSettled` to `/drivers`, `/position`, `/laps`, `/weather`, `/race_control` — any one can fail without taking down the others.
- 8-second `AbortController` timeout per request.
- Failure UI shows error inline; refresh button stays enabled.

Free tier, no key, no rate limit issues at normal browsing volumes. Source repo: [github.com/br-g/openf1](https://github.com/br-g/openf1).

---

## File layout

```
.
├── index.html                  # Home
├── the-grid/index.html         # A — Teams, drivers, calendar
├── the-car/index.html          # B — Anatomy, aero, tyres, strategy, pit
├── live/index.html             # C — Live data (OpenF1)
├── learn/index.html            # D — Weekend, flags, history, glossary
├── css/styles.css              # ~2,200 lines · full design system
├── js/
│   ├── data.js                 # 2026 reference — teams, drivers, tracks, primer, eras, glossary
│   └── main.js                 # ~1,000 lines · page-aware rendering, OpenF1 fetch, all interactivity
└── README.md
```

Total payload: ~190 KB across all assets, no external dependencies beyond Google Fonts.

---

## Deploy

Drop the folder into any GitHub Pages-enabled repo. No build, no config.

```bash
cp -r grid /path/to/parth8.github.io/
cd /path/to/parth8.github.io
git add grid
git commit -m "GRID v3 · multi-page + OpenF1"
git push
```

Live at `parth8.github.io/grid` within a minute. The five pages live at `/grid/`, `/grid/the-grid/`, `/grid/the-car/`, `/grid/live/`, `/grid/learn/`.

---

## What changed in v3

- **Multi-page architecture.** Single long scroll replaced with five focused pages, each with its own URL.
- **OpenF1 live data** on `/live/`. Free, no key, no proxy. Graceful failure.
- **Rebuilt anatomy diagram.** Wing slats, brake ducts, sidepod inlets, T-cam, diffuser strakes, mirrors — reads as a technical line drawing of an F1 car, not boxes.
- **What is F1? primer** (§00) at the entry point — eight cards covering the basics for new readers.
- **History expanded to 15 entries** in a 5×3 grid.
- **Table header alignment fixed** — Titles, Wins, Age headers now right-align with their data values.

---

Not affiliated with Formula 1, the FIA, or any team. F1 marks and likenesses belong to their owners. Built by [Parth](https://parth8.github.io).
