# GRID — F1 2026 Explained

**A design-forward, single-page guide to Formula 1 — built for absolute beginners and seasoned fans.**

Live focus: 2026 season — the biggest regulation reset in F1 history. New engines, new chassis, new aero, sustainable fuel, 11 teams (Cadillac just arrived), Audi factory entry, and a wide-open championship.

🔗 **Live demo:** `parth8.github.io/grid` (after deploy)

---

## What's inside

| Section | What it does |
|---|---|
| **Hero** | Animated SVG F1 car that tilts with your mouse. The site's heartbeat. |
| **2026 Briefing** | 8 cards explaining everything that changed: Active Aero, 50-50 hybrid, sustainable fuel, smaller cars, Cadillac, Audi, Manual Override, Madrid. |
| **The Grid** | All 11 teams. Click any card for the full story — history, base, principal, iconic moment, drivers. |
| **Drivers** | All 22 drivers. Filter by champions / rookies / veterans. Click for the full bio with helmet SVG in their team colors. |
| **Tracks** | Every 2026 circuit with an SVG track layout. Filter by region or sprint weekend. |
| **Race Weekend** | Interactive timeline. Click any session (FP1 → Sprint → GP) to see what happens and why. |
| **Active Aero** | Interactive SVG car. Toggle Z-Mode (corner, max grip) vs X-Mode (straight, low drag). Watch the wing flaps move. |
| **Tyres & Strategy** | Pick 3 stints, drag the lap sliders. Game checks if you used 2 different dry compounds. Computes total race time with pit stops + tyre degradation. |
| **Pit Stop Game** | Click each wheel as it turns red. Race against the F1 record (1.82s). Best time saved in localStorage. |
| **Flags** | All 8 official flags with waving animation + clear definitions. |
| **2026 Standings** | Current championship through Monaco. Antonelli leading after 5 straight wins. |
| **History** | 76 years of F1 in 15 moments. Scroll-revealed timeline. |
| **Glossary A-Z** | 32 terms searchable. From Active Aero to VSC. |

## Personalization 🎨

Click "Pick your team" — the **entire site themes itself** to your team's color. Persisted in localStorage so it remembers next visit.

## Features that earn the build

- 🎨 **Custom SVG illustrations** — F1 car, driver helmets, all 22 track layouts, the lot. No stock images.
- 🔊 **Web Audio API engine sounds** — synthesized V6 turbo rev on every team selection. Synthesized clicks during pit stop game.
- ⚡ **Active Aero animation** — wing flaps actually rotate when you toggle modes. Speed lines stream in X-Mode.
- 🎮 **Two interactive games** — Pit Stop reaction game + Tyre Strategy Builder with real(ish) lap time math.
- 📱 **Fully responsive** — mobile nav, restructured grids on tablet/phone.
- ♿ **Accessible** — reduced-motion media query, semantic HTML, ARIA labels on game buttons.
- ⌨️ **Easter egg** — type `lights` anywhere on the page. 🚦

## Tech

- Pure **HTML / CSS / JS**. No frameworks, no build step.
- Google Fonts (Bebas Neue, DM Serif Text, DM Mono).
- ~165 KB total, single page.

## Project structure

```
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── data.js     # All 2026 F1 data (teams, drivers, tracks, history, glossary)
│   └── main.js     # Rendering, interactions, games, sound
└── README.md
```

## Deploy to GitHub Pages

1. **Push to a repo** (e.g., `parth8/grid` or as a subfolder of `parth8.github.io`).
2. **Enable Pages**: Settings → Pages → Source: `main` branch / root → Save.
3. **Live at** `https://<your-username>.github.io/<repo-name>/`.

Or drop these files into a subfolder of an existing `username.github.io` repo — works the same way (e.g., `parth8.github.io/grid`).

No build step. No package.json. Just static files.

## Data sources

All 2026 data verified via web sources around June 2026: FIA entry list, official F1 calendar, championship standings through Monaco GP. Driver numbers reflect 2026 reality (Norris #1 as reigning champion, Verstappen #3, Lindblad #41).

## Credits

Built by **Parth** as part of the [parth8.github.io](https://parth8.github.io) portfolio.

Not affiliated with Formula 1, the FIA, or any team. This is an educational fan project. F1, FIA, team names and likenesses belong to their respective owners.

---

*Lights out and away we go.* 🏁
