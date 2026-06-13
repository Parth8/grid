/* ============================================================
   GRID — Main JS
   Renders all sections, wires up every interaction.
   No frameworks. Plain DOM. Editorial energy.
   ============================================================ */

(function() {
  'use strict';

  const $ = (s, c=document) => c.querySelector(s);
  const $$ = (s, c=document) => Array.from(c.querySelectorAll(s));

  /* ------------------------------------------------------------
     §01 — COMPARE (2025 vs 2026)
     ------------------------------------------------------------ */
  function renderCompare() {
    const wrap = $('.compare');
    if (!wrap) return;
    // Keep the three header cells, append rows after them
    const rows = F1.changes.map(c => `
      <div class="compare-key">${c.key}<span class="sub">${c.sub}</span></div>
      <div class="compare-old">${c.old}</div>
      <div class="compare-new"><span class="arrow">→</span>${c.new}</div>
    `).join('');
    wrap.insertAdjacentHTML('beforeend', rows);
  }

  /* ------------------------------------------------------------
     §02 — ANATOMY callouts
     ------------------------------------------------------------ */
  function renderAnatomy() {
    const wrap = $('#anatomyCallouts');
    if (!wrap) return;
    wrap.innerHTML = F1.anatomy.map(a => `
      <div class="callout" data-cid="${a.id}">
        <div class="callout-num">${a.id}</div>
        <div class="callout-text">
          <div class="name">${a.name}</div>
          <div class="desc">${a.desc}</div>
        </div>
      </div>
    `).join('');

    const markers = $$('.anatomy-marker');
    const callouts = $$('.callout', wrap);

    function setActive(id) {
      markers.forEach(m => m.classList.toggle('active', m.dataset.cid === String(id)));
      callouts.forEach(c => c.classList.toggle('active', c.dataset.cid === String(id)));
    }

    markers.forEach(m => {
      m.style.cursor = 'pointer';
      m.addEventListener('mouseenter', () => setActive(m.dataset.cid));
      m.addEventListener('click', () => setActive(m.dataset.cid));
    });
    callouts.forEach(c => {
      c.addEventListener('mouseenter', () => setActive(c.dataset.cid));
      c.addEventListener('click', () => setActive(c.dataset.cid));
    });

    setActive(1); // default active
  }

  // Add CSS for active anatomy marker
  const style = document.createElement('style');
  style.textContent = `
    .anatomy-marker { transition: all 0.15s var(--ease); }
    .anatomy-marker.active circle { fill: var(--red) !important; stroke: var(--red) !important; }
    .anatomy-marker.active text { fill: var(--paper) !important; }
    .anatomy-marker:hover circle { stroke-width: 1.5; }
  `;
  document.head.appendChild(style);

  /* ------------------------------------------------------------
     §03 — TEAMS TABLE
     ------------------------------------------------------------ */
  function renderTeams() {
    const wrap = $('#teamsTable');
    if (!wrap) return;

    const header = `
      <div class="tt-row head">
        <div>#</div>
        <div></div>
        <div>Team</div>
        <div>Drivers</div>
        <div>Engine</div>
        <div>Base</div>
        <div>Titles</div>
        <div></div>
      </div>
    `;

    const rows = F1.teams.map((t, i) => {
      const drivers = F1.driversFor(t.id);
      return `
        <div class="tt-row" data-team="${t.id}">
          <div class="tt-pos">${String(i+1).padStart(2,'0')}</div>
          <div class="tt-swatch" style="--team-c:${t.color};"></div>
          <div class="tt-name">${t.name}<span class="full">${t.full}</span></div>
          <div class="tt-drivers">
            ${drivers.map(d => `<span><span class="num">${d.num}</span>${d.short}</span>`).join(' · ')}
          </div>
          <div class="tt-engine">${t.engine}</div>
          <div class="tt-base">${t.base.split(',')[0]}</div>
          <div class="tt-titles"><strong>${t.titles}</strong></div>
          <div class="tt-arrow">→</div>
        </div>
      `;
    }).join('');

    wrap.innerHTML = header + rows;

    $$('.tt-row[data-team]', wrap).forEach(row => {
      row.addEventListener('click', () => openTeamModal(row.dataset.team));
    });
  }

  /* ------------------------------------------------------------
     §04 — DRIVERS TABLE
     ------------------------------------------------------------ */
  function renderDrivers(filter='all') {
    const wrap = $('#drvTable');
    if (!wrap) return;

    let drivers = F1.drivers.slice();
    if (filter === 'champions') drivers = drivers.filter(d => d.titles > 0);
    if (filter === 'rookies')   drivers = drivers.filter(d => d.age < 24);
    if (filter === 'veterans')  drivers = drivers.filter(d => d.age >= 30);

    const header = `
      <div class="drv-row head">
        <div>#</div>
        <div></div>
        <div>Driver</div>
        <div>Team</div>
        <div>Titles</div>
        <div>Wins</div>
        <div>Age</div>
        <div></div>
      </div>
    `;

    const rows = drivers.map(d => {
      const team = F1.getTeam(d.team);
      const cls = d.titles > 0 ? 'champion' : (d.debut === 2026 ? 'rookie' : '');
      return `
        <div class="drv-row ${cls}" data-driver="${d.id}">
          <div class="drv-num">${d.num}</div>
          <div class="drv-flag">${d.flag}</div>
          <div class="drv-name">${d.name}</div>
          <div class="drv-team"><span class="drv-team-dot" style="background:${team.color};"></span>${team.name}</div>
          <div class="drv-titles"><strong>${d.titles}</strong></div>
          <div class="drv-wins"><strong>${d.wins}</strong></div>
          <div class="drv-age">${d.age}</div>
          <div class="drv-arrow">→</div>
        </div>
      `;
    }).join('');

    wrap.innerHTML = header + rows;

    $$('.drv-row[data-driver]', wrap).forEach(row => {
      row.addEventListener('click', () => openDriverModal(row.dataset.driver));
    });
  }

  function initDriverFilters() {
    $$('.drv-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.drv-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderDrivers(btn.dataset.filter);
      });
    });
  }

  /* ------------------------------------------------------------
     §05 — CALENDAR with track SVG silhouettes
     ------------------------------------------------------------ */
  // Schematic, abstract track paths — each is a stylised closed loop.
  // Not literal corner-for-corner; intentionally compressed shapes
  // that read as "track silhouettes" in a uniform grid.
  const TRACK_PATHS = {
    'Albert Park':           'M 30 75 Q 28 35 80 30 L 175 35 Q 220 50 220 90 Q 220 130 175 135 L 100 138 Q 30 135 30 75 Z',
    'Shanghai Intl':         'M 30 95 Q 30 30 90 30 Q 140 35 150 70 Q 155 100 120 105 Q 90 110 100 130 Q 130 145 200 135 Q 230 115 215 80 Q 195 50 215 90 Q 230 130 195 138 L 80 140 Q 30 130 30 95 Z',
    'Suzuka':                'M 30 75 Q 25 35 75 30 Q 130 30 140 70 Q 140 100 110 105 Q 80 105 90 85 Q 110 70 145 80 Q 195 95 220 75 Q 235 50 230 90 Q 225 130 185 138 Q 110 140 60 130 Q 30 110 30 75 Z',
    'Miami Intl':            'M 30 80 Q 32 32 90 32 Q 145 35 160 70 Q 165 95 135 100 L 110 100 Q 95 105 100 120 Q 125 138 190 138 Q 225 130 225 95 Q 220 60 190 55 Q 175 35 220 38 Q 240 60 230 100 Q 220 138 140 140 Q 50 140 30 80 Z',
    'Circuit Gilles V.':     'M 30 85 L 38 50 L 90 40 L 200 45 L 235 70 L 235 110 L 220 135 L 170 140 L 110 130 L 105 100 L 75 105 L 30 85 Z',
    'Monaco':                'M 35 90 Q 28 50 70 40 Q 105 38 130 60 L 150 90 Q 160 120 135 130 Q 110 130 100 110 Q 95 95 130 100 Q 175 110 215 105 Q 240 90 235 65 Q 215 45 230 80 Q 240 130 195 138 L 90 140 Q 38 140 35 90 Z',
    'Catalunya':             'M 30 75 Q 28 30 90 30 L 195 35 Q 235 50 235 80 Q 235 115 210 125 Q 180 130 165 110 Q 155 90 180 90 Q 215 90 225 110 Q 230 138 180 140 L 75 140 Q 30 135 30 75 Z',
    'Red Bull Ring':         'M 45 100 Q 38 50 95 40 L 200 45 Q 240 60 235 100 Q 220 138 165 138 Q 95 138 75 118 Q 55 105 45 100 Z',
    'Silverstone':           'M 30 85 Q 28 30 95 35 Q 165 40 180 70 L 200 110 Q 220 138 175 140 Q 130 140 110 118 Q 100 100 130 100 Q 175 105 220 90 Q 250 70 240 100 Q 230 138 170 140 L 65 140 Q 30 130 30 85 Z',
    'Spa-Francorchamps':     'M 30 110 Q 25 70 70 60 Q 110 55 120 90 Q 125 115 100 115 Q 70 110 90 80 Q 130 50 180 60 Q 225 75 235 110 Q 235 138 175 138 L 70 140 Q 30 140 30 110 Z',
    'Hungaroring':           'M 40 75 Q 35 35 90 35 Q 145 35 150 70 Q 150 105 125 105 Q 100 105 100 80 Q 100 60 140 70 Q 195 85 235 75 Q 250 60 245 100 Q 235 138 185 140 L 80 140 Q 35 138 40 75 Z',
    'Zandvoort':             'M 30 90 Q 28 40 80 35 Q 140 35 160 75 L 195 110 Q 225 138 195 140 Q 130 140 110 115 Q 95 90 130 95 Q 175 105 220 90 Q 250 75 240 110 Q 220 138 170 140 L 60 140 Q 30 130 30 90 Z',
    'Monza':                 'M 40 130 L 60 50 L 215 40 L 245 70 L 220 110 L 130 115 L 110 90 L 195 90 L 230 100 L 235 135 L 80 140 Z',
    'Madrid':                'M 30 60 L 70 30 L 195 35 L 240 70 L 230 130 L 175 138 L 110 135 L 90 110 L 130 95 L 190 100 L 195 80 L 110 75 L 60 100 Z',
    'Baku City':             'M 40 130 L 30 85 L 50 40 L 215 35 L 250 70 L 245 110 L 195 115 L 100 110 L 90 90 L 195 85 L 225 100 L 215 138 L 60 140 Z',
    'Marina Bay':            'M 30 100 Q 30 50 80 40 L 195 45 Q 240 60 240 100 Q 240 138 195 140 L 130 138 Q 90 130 100 110 L 130 95 Q 175 95 190 110 Q 195 130 160 130 Q 100 130 30 100 Z',
    'COTA':                  'M 30 90 Q 28 40 80 35 Q 145 30 145 70 L 145 110 Q 150 138 100 138 Q 60 138 90 115 Q 140 90 195 105 Q 240 120 240 90 Q 240 50 215 50 Q 235 90 250 130 Q 235 138 195 140 Z',
    'Hermanos Rodríguez':    'M 40 80 L 60 40 L 145 35 L 195 50 L 225 90 L 215 130 L 175 140 L 100 140 L 60 130 L 40 100 Z',
    'Interlagos':            'M 30 80 Q 38 35 90 38 L 195 42 Q 245 60 235 100 L 220 130 Q 180 140 130 140 Q 80 138 60 118 L 50 100 Z',
    'Las Vegas Strip':       'M 30 110 L 60 50 L 235 45 L 255 80 L 235 138 L 80 140 Z',
    'Lusail Intl':           'M 30 90 Q 35 35 100 35 Q 165 35 185 70 Q 195 110 165 118 Q 130 122 130 100 Q 130 85 165 90 Q 215 95 240 80 Q 255 60 250 100 Q 240 138 180 140 L 70 140 Q 30 130 30 90 Z',
    'Yas Marina':            'M 30 90 Q 30 40 80 35 L 175 40 Q 225 55 245 90 Q 245 130 215 138 L 140 140 Q 80 140 60 122 L 40 110 Z'
  };

  function trackSVG(t) {
    const path = TRACK_PATHS[t.name] || 'M 50 90 Q 30 40 100 40 L 195 45 Q 240 60 235 100 L 215 138 Q 130 140 60 130 Z';
    return `
      <svg viewBox="0 0 280 175" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path class="cal-track-path" d="${path}"/>
        <circle cx="40" cy="80" r="3" fill="var(--red)"/>
      </svg>
    `;
  }

  function renderCalendar(region='all') {
    const wrap = $('#calGrid');
    if (!wrap) return;
    let tracks = F1.tracks.slice();
    if (region === 'sprint') tracks = tracks.filter(t => t.sprint);
    else if (region !== 'all') tracks = tracks.filter(t => t.region === region);

    wrap.innerHTML = tracks.map(t => `
      <div class="cal-cell${t.sprint ? ' sprint' : ''}">
        <div class="cal-round">R${String(t.round).padStart(2,'0')}</div>
        <div class="cal-date">${t.date}</div>
        <div class="cal-track-svg">${trackSVG(t)}</div>
        <div class="cal-name">${t.name}</div>
        <div class="cal-city">${t.city}, ${t.short}</div>
        <div class="cal-meta">
          <div><span class="lbl">L</span>${t.length}km</div>
          <div><span class="lbl">T</span>${t.turns}</div>
          <div><span class="lbl">R</span>${t.lapRecord}</div>
        </div>
      </div>
    `).join('');
  }

  function initCalendarFilters() {
    $$('.cal-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.cal-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderCalendar(btn.dataset.region);
      });
    });
  }

  /* ------------------------------------------------------------
     §06 — RACE WEEKEND TIMELINE
     ------------------------------------------------------------ */
  let activeSession = null;
  function renderWeekend() {
    const wrap = $('#weekendBox');
    if (!wrap) return;
    const days = [
      ['Friday',   'friday'],
      ['Saturday', 'saturday'],
      ['Sunday',   'sunday']
    ];

    const sessionsHtml = days.map(([label, key]) => {
      const list = F1.weekend[key];
      const items = list.map(s => `
        <div class="weekend-session" data-key="${s.code}">
          <div class="ws-code">${s.code}</div>
          <div class="ws-name">${s.name}${s.sprintOnly ? '<span style="font-family:var(--mono);font-size:9px;color:var(--red);margin-left:6px;letter-spacing:0.08em;">SPRINT WK</span>' : ''}${s.notSprint ? '<span style="font-family:var(--mono);font-size:9px;color:var(--ink-3);margin-left:6px;letter-spacing:0.08em;">STD ONLY</span>' : ''}</div>
          <div class="ws-duration">${s.duration}</div>
        </div>
      `).join('');
      return `
        <div class="weekend-day">
          <div class="weekend-day-label">Day · ${key === 'friday' ? '01' : key === 'saturday' ? '02' : '03'}</div>
          <div class="weekend-day-name">${label}</div>
          <div class="weekend-sessions">${items}</div>
        </div>
      `;
    }).join('');

    wrap.innerHTML = `
      <div class="weekend-days">${sessionsHtml}</div>
      <div class="weekend-detail" id="weekendDetail"></div>
    `;

    $$('.weekend-session', wrap).forEach(s => {
      s.addEventListener('click', () => selectSession(s.dataset.key));
    });

    selectSession('GP'); // default
  }

  function selectSession(code) {
    activeSession = code;
    $$('.weekend-session').forEach(s => s.classList.toggle('active', s.dataset.key === code));
    // Find session in data
    let found = null;
    for (const day of ['friday','saturday','sunday']) {
      for (const s of F1.weekend[day]) {
        if (s.code === code) { found = s; break; }
      }
      if (found) break;
    }
    if (!found) return;

    const detail = $('#weekendDetail');
    detail.innerHTML = `
      <div>
        <div class="label">Session</div>
        <div class="meta-list">
          <div><span class="k">Code</span><span>${found.code}</span></div>
          <div><span class="k">Length</span><span>${found.duration}</span></div>
          <div><span class="k">Day</span><span>${
            F1.weekend.friday.includes(found) ? 'Friday' :
            F1.weekend.saturday.includes(found) ? 'Saturday' : 'Sunday'
          }</span></div>
        </div>
      </div>
      <div>
        <h4>${found.name}<em>.</em></h4>
        <p>${found.desc}</p>
      </div>
    `;
  }

  /* ------------------------------------------------------------
     §07 — ACTIVE AERO
     ------------------------------------------------------------ */
  function aeroSVG(mode) {
    // Two airfoil cross-sections, in technical-drawing style.
    // No full car. Just the two wings, in detail, with dimension annotations.
    const isX = mode === 'x';
    const accent = '#E10600';

    // Front wing: upper flap rotates from -12° (closed/Z) to 0° (flat/X)
    // Rear wing: upper flap rotates from 0° (closed/Z) to -52° (open/X)
    const frontAngle = isX ? 0 : -12;
    const rearAngle  = isX ? -52 : 0;

    // Helper for airfoil profile (a stylised aerofoil cross-section as a path)
    const frontMainPath = 'M 0 4 Q 30 0 60 2 Q 100 4 130 8 L 130 12 Q 80 14 0 10 Z';
    const rearMainPath  = 'M 0 5 Q 25 0 55 2 Q 85 5 110 10 L 110 14 Q 70 16 0 12 Z';
    // Upper flap profiles (thinner)
    const frontFlapPath = 'M 0 2 Q 30 -1 60 0 Q 90 2 120 5 L 120 8 Q 70 10 0 6 Z';
    const rearFlapPath  = 'M 0 2 Q 25 -1 50 0 Q 75 2 100 5 L 100 8 Q 60 10 0 6 Z';

    return `
      <svg viewBox="0 0 720 380" xmlns="http://www.w3.org/2000/svg" aria-label="2026 active aero — wing cross-sections in ${isX ? 'X-mode' : 'Z-mode'}">

        <!-- Plate label -->
        <text x="36" y="28" font-family="JetBrains Mono" font-size="10" fill="#918D80" letter-spacing="1.2" text-transform="uppercase">DETAIL · ACTIVE AERODYNAMIC ASSEMBLIES</text>
        <text x="684" y="28" text-anchor="end" font-family="JetBrains Mono" font-size="10" fill="#918D80" letter-spacing="1.2">SCALE · 1:6</text>

        <!-- Frame line under header -->
        <line x1="36" y1="38" x2="684" y2="38" stroke="#14130E" stroke-width="0.5"/>

        <!-- LEFT PANEL — FRONT WING ASSEMBLY -->
        <g transform="translate(60, 80)">
          <text x="0" y="0" font-family="JetBrains Mono" font-size="11" fill="#14130E" letter-spacing="0.8" font-weight="500">A · FRONT WING</text>
          <text x="0" y="16" font-family="JetBrains Mono" font-size="10" fill="#918D80" letter-spacing="0.4">Cross-section · forward of front axle</text>

          <!-- Direction of travel arrow -->
          <g stroke="#918D80" stroke-width="0.6" fill="none">
            <line x1="0" y1="40" x2="60" y2="40"/>
            <polyline points="55,36 60,40 55,44"/>
          </g>
          <text x="64" y="43" font-family="JetBrains Mono" font-size="9" fill="#918D80" letter-spacing="0.4">AIRFLOW</text>

          <!-- Endplate (vertical reference) -->
          <line x1="0" y1="80" x2="0" y2="200" stroke="#14130E" stroke-width="1"/>
          <line x1="-4" y1="80" x2="4" y2="80" stroke="#14130E" stroke-width="1"/>
          <line x1="-4" y1="200" x2="4" y2="200" stroke="#14130E" stroke-width="1"/>

          <!-- Upper flap (movable) — rotates around its leading edge -->
          <g transform="translate(10, 100) rotate(${frontAngle}, 0, 5)" style="transition: transform 0.6s var(--ease);">
            <path d="${frontFlapPath}" fill="${accent}" fill-opacity="0.92" stroke="${accent}" stroke-width="0.6"/>
          </g>
          <text x="135" y="100" font-family="JetBrains Mono" font-size="9" fill="${accent}" letter-spacing="0.4">UPPER FLAP · MOVABLE</text>

          <!-- Gap arrow showing slot between flap and main -->
          <line x1="138" y1="110" x2="148" y2="118" stroke="#918D80" stroke-width="0.5" stroke-dasharray="2 2"/>
          <text x="152" y="121" font-family="JetBrains Mono" font-size="8" fill="#918D80">SLOT</text>

          <!-- Main plane (fixed) -->
          <g transform="translate(10, 130)">
            <path d="${frontMainPath}" fill="none" stroke="#14130E" stroke-width="1"/>
          </g>
          <text x="145" y="142" font-family="JetBrains Mono" font-size="9" fill="#14130E" letter-spacing="0.4">MAIN PLANE · FIXED</text>

          <!-- Ground line -->
          <line x1="0" y1="200" x2="240" y2="200" stroke="#14130E" stroke-width="0.5" stroke-dasharray="3 3"/>
          <text x="240" y="212" font-family="JetBrains Mono" font-size="8" fill="#918D80" text-anchor="end">GROUND PLANE</text>

          <!-- Angle annotation -->
          <text x="0" y="240" font-family="JetBrains Mono" font-size="10" fill="#14130E" letter-spacing="0.4">FLAP ANGLE · <tspan fill="${accent}" font-weight="500">${frontAngle === 0 ? '0°' : Math.abs(frontAngle) + '°'}</tspan></text>
          <text x="0" y="256" font-family="JetBrains Mono" font-size="10" fill="#14130E" letter-spacing="0.4">STATE · <tspan fill="${accent}" font-weight="500">${isX ? 'FLAT (X-MODE)' : 'CLOSED (Z-MODE)'}</tspan></text>
        </g>

        <!-- Vertical separator -->
        <line x1="360" y1="60" x2="360" y2="350" stroke="#D8D2C2" stroke-width="0.5"/>

        <!-- RIGHT PANEL — REAR WING ASSEMBLY -->
        <g transform="translate(400, 80)">
          <text x="0" y="0" font-family="JetBrains Mono" font-size="11" fill="#14130E" letter-spacing="0.8" font-weight="500">B · REAR WING</text>
          <text x="0" y="16" font-family="JetBrains Mono" font-size="10" fill="#918D80" letter-spacing="0.4">Cross-section · behind rear axle</text>

          <!-- Airflow arrow -->
          <g stroke="#918D80" stroke-width="0.6" fill="none">
            <line x1="0" y1="40" x2="60" y2="40"/>
            <polyline points="55,36 60,40 55,44"/>
          </g>
          <text x="64" y="43" font-family="JetBrains Mono" font-size="9" fill="#918D80" letter-spacing="0.4">AIRFLOW</text>

          <!-- Endplate -->
          <line x1="0" y1="60" x2="0" y2="200" stroke="#14130E" stroke-width="1"/>
          <line x1="-4" y1="60" x2="4" y2="60" stroke="#14130E" stroke-width="1"/>
          <line x1="-4" y1="200" x2="4" y2="200" stroke="#14130E" stroke-width="1"/>

          <!-- Upper flap (movable) rotated -->
          <g transform="translate(10, 70) rotate(${rearAngle}, 0, 5)" style="transition: transform 0.6s var(--ease);">
            <path d="${rearFlapPath}" fill="${accent}" fill-opacity="0.92" stroke="${accent}" stroke-width="0.6"/>
          </g>
          <text x="125" y="70" font-family="JetBrains Mono" font-size="9" fill="${accent}" letter-spacing="0.4">UPPER FLAP · MOVABLE</text>
          <line x1="123" y1="74" x2="113" y2="80" stroke="#918D80" stroke-width="0.5"/>

          <!-- Slot annotation -->
          <line x1="130" y1="105" x2="120" y2="115" stroke="#918D80" stroke-width="0.5" stroke-dasharray="2 2"/>
          <text x="134" y="108" font-family="JetBrains Mono" font-size="8" fill="#918D80">SLOT</text>

          <!-- Main plane -->
          <g transform="translate(10, 120)">
            <path d="${rearMainPath}" fill="none" stroke="#14130E" stroke-width="1"/>
          </g>
          <text x="125" y="132" font-family="JetBrains Mono" font-size="9" fill="#14130E" letter-spacing="0.4">MAIN PLANE · FIXED</text>

          <!-- Beam wing (lower fixed element) -->
          <g transform="translate(10, 170)">
            <rect x="0" y="0" width="100" height="4" fill="none" stroke="#14130E" stroke-width="1"/>
          </g>
          <text x="125" y="178" font-family="JetBrains Mono" font-size="9" fill="#14130E" letter-spacing="0.4">BEAM WING</text>

          <!-- Reference line -->
          <line x1="0" y1="200" x2="240" y2="200" stroke="#14130E" stroke-width="0.5" stroke-dasharray="3 3"/>
          <text x="240" y="212" font-family="JetBrains Mono" font-size="8" fill="#918D80" text-anchor="end">DIFFUSER EXIT</text>

          <!-- Speed indicator (X-mode only) -->
          ${isX ? `
          <g opacity="0.7">
            <line x1="180" y1="50" x2="270" y2="50" stroke="${accent}" stroke-width="1.2"/>
            <polyline points="262,46 270,50 262,54" fill="none" stroke="${accent}" stroke-width="1.2"/>
            <text x="225" y="44" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="${accent}" letter-spacing="0.4" font-weight="500">+30 km/h</text>
          </g>
          ` : ''}

          <text x="0" y="240" font-family="JetBrains Mono" font-size="10" fill="#14130E" letter-spacing="0.4">FLAP ANGLE · <tspan fill="${accent}" font-weight="500">${rearAngle === 0 ? '0°' : Math.abs(rearAngle) + '°'}</tspan></text>
          <text x="0" y="256" font-family="JetBrains Mono" font-size="10" fill="#14130E" letter-spacing="0.4">STATE · <tspan fill="${accent}" font-weight="500">${isX ? 'OPEN (X-MODE)' : 'CLOSED (Z-MODE)'}</tspan></text>
        </g>

        <!-- Footer plate -->
        <line x1="36" y1="350" x2="684" y2="350" stroke="#14130E" stroke-width="0.5"/>
        <text x="36" y="368" font-family="JetBrains Mono" font-size="9" fill="#918D80" letter-spacing="0.6">DRAWING · ACTIVE AERO / 2026 / TECHNICAL REGULATION 3.10</text>
        <text x="684" y="368" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#918D80" letter-spacing="0.6">${isX ? 'X-MODE — STRAIGHT' : 'Z-MODE — CORNER'}</text>
      </svg>
    `;
  }

  function setAero(mode) {
    const display = $('#aeroDisplay');
    if (!display) return;
    display.innerHTML = aeroSVG(mode);
    $$('.aero-mode').forEach(b => b.classList.toggle('active', b.dataset.mode === mode));

    const isX = mode === 'x';
    $('#aeroTitle').innerHTML = isX ? 'X-Mode <em>— low drag.</em>' : 'Z-Mode <em>— maximum grip.</em>';
    $('#aeroDesc').textContent = isX
      ? 'On designated straights, the driver opens both wing flaps — the rear rotates flat, the front goes neutral. Drag collapses. Top speed climbs to ~350 km/h. Every driver, every lap, every straight.'
      : 'In corners, both wing flaps stay closed at their default angle. Maximum downforce, maximum grip. The car can attack the apex without sliding wide.';

    $('#aeroFront').textContent = isX ? 'Flat' : 'Closed';
    $('#aeroRear').textContent  = isX ? 'Open' : 'Closed';
    $('#aeroSpeed').textContent = isX ? '~350 km/h' : '~320 km/h';
    $('#aeroDrag').textContent  = isX ? 'Low' : 'High';

    const dSpeed = $('#aeroSpeedDelta');
    const dDrag = $('#aeroDragDelta');
    if (dSpeed) {
      dSpeed.textContent = isX ? '+30 km/h vs Z-mode' : 'Cornering bias';
      dSpeed.classList.toggle('gain', isX);
    }
    if (dDrag) {
      dDrag.textContent = isX ? 'Replaces DRS' : 'Penalty on straights';
      dDrag.classList.toggle('gain', isX);
    }
  }

  function initAero() {
    setAero('z');
    $$('.aero-mode').forEach(btn => {
      btn.addEventListener('click', () => setAero(btn.dataset.mode));
    });
  }

  /* ------------------------------------------------------------
     §08 — TYRES
     ------------------------------------------------------------ */
  function renderTyres() {
    const list = $('#tyresList');
    if (!list) return;
    list.innerHTML = F1.tyres.map(t => `
      <div class="tyres-row">
        <div class="tyre-label">
          <span class="tyre-dot" style="--tyre-c:${t.color};"></span>
          <span class="tyre-name">${t.name}</span>
        </div>
        <div class="bar-cell">
          <div class="bar"><div class="bar-fill" style="width:${(t.pace/10)*100}%; background:${t.color};"></div></div>
          <div class="bar-val">${t.pace.toFixed(1)}</div>
        </div>
        <div class="bar-cell">
          <div class="bar"><div class="bar-fill" style="width:${(t.life/10)*100}%;"></div></div>
          <div class="bar-val">${t.life.toFixed(1)}</div>
        </div>
        <div class="tyre-use">${t.use}</div>
      </div>
    `).join('');
  }

  /* ------------------------------------------------------------
     §09 — STRATEGY SIMULATOR
     ------------------------------------------------------------ */
  const TYRE_BY_NAME = Object.fromEntries(F1.tyres.map(t => [t.name, t]));
  const RACE_LAPS = 60;
  const BASE_LAP_TIME = 90;
  const PIT_STOP_TIME = 22;

  let stints = [
    { tyre: 'Medium', laps: 22 },
    { tyre: 'Hard',   laps: 26 },
    { tyre: 'Soft',   laps: 12 }
  ];

  function renderStrategy() {
    const wrap = $('#stratStints');
    if (!wrap) return;

    wrap.innerHTML = stints.map((s, i) => {
      const t = TYRE_BY_NAME[s.tyre];
      return `
        <div class="strat-stint">
          <div class="label">Stint ${i+1} · ${t.name.toLowerCase()}</div>
          <select data-idx="${i}" data-attr="tyre">
            ${F1.tyres.map(opt => `<option value="${opt.name}" ${opt.name === s.tyre ? 'selected' : ''}>${opt.name}</option>`).join('')}
          </select>
          <div class="stint-laps">${s.laps}<span class="unit">laps</span></div>
          <input type="range" min="1" max="40" value="${s.laps}" data-idx="${i}" data-attr="laps" step="1"/>
        </div>
      `;
    }).join('');

    $$('select', wrap).forEach(sel => sel.addEventListener('change', onStintChange));
    $$('input[type="range"]', wrap).forEach(rng => rng.addEventListener('input', onStintChange));

    renderStrategyBar();
    computeStrategy();
  }

  function onStintChange(e) {
    const i = parseInt(e.target.dataset.idx);
    const attr = e.target.dataset.attr;
    if (attr === 'laps') stints[i].laps = parseInt(e.target.value);
    else stints[i][attr] = e.target.value;
    renderStrategy();
  }

  function renderStrategyBar() {
    const bar = $('#stratBar');
    if (!bar) return;
    const totalLaps = stints.reduce((s, st) => s + st.laps, 0) || 1;
    bar.innerHTML = stints.map((s, i) => {
      const t = TYRE_BY_NAME[s.tyre];
      const pct = (s.laps / totalLaps) * 100;
      const isDark = t.color === '#F4D72E' || t.color === '#FFFFFF';
      return `
        <div class="strat-bar-seg" style="width:${pct}%; background:${t.color}; color:${isDark ? 'var(--ink)' : 'var(--paper)'}; border-right: ${i < stints.length-1 ? '2px solid var(--ink)' : '0'};">${s.tyre.charAt(0)} · ${s.laps}</div>
      `;
    }).join('');
  }

  function computeStrategy() {
    let totalTime = 0;
    const usedDry = new Set();
    const totalLaps = stints.reduce((s, st) => s + st.laps, 0);
    const dryTyres = ['Soft','Medium','Hard'];

    stints.forEach((stint, idx) => {
      const t = TYRE_BY_NAME[stint.tyre];
      if (dryTyres.includes(t.name)) usedDry.add(t.name);
      const paceBonus = (10 - t.pace) * 0.45;
      const baseLap = BASE_LAP_TIME + paceBonus;
      for (let lap = 1; lap <= stint.laps; lap++) {
        const wear = Math.max(0, (lap - t.life)) * 0.22;
        totalTime += baseLap + wear;
      }
      if (idx < stints.length - 1) totalTime += PIT_STOP_TIME;
    });

    const mins = Math.floor(totalTime / 60);
    const secs = (totalTime % 60).toFixed(1);
    $('#stratTime').textContent = `${mins}:${secs.padStart(4,'0')}`;
    $('#stratStops').textContent = stints.length - 1;

    const validEl = $('#stratValid');
    const lapsOk = totalLaps === RACE_LAPS;
    const dryOk = usedDry.size >= 2;
    if (lapsOk && dryOk) {
      validEl.textContent = 'Legal';
      validEl.classList.remove('warning');
    } else if (!lapsOk) {
      validEl.textContent = `${totalLaps} / ${RACE_LAPS} laps`;
      validEl.classList.add('warning');
    } else {
      validEl.textContent = 'Need 2 dry';
      validEl.classList.add('warning');
    }
  }

  /* ------------------------------------------------------------
     §10 — PIT STOP REACTION GAME
     ------------------------------------------------------------ */
  const PIT_BEST_KEY = 'grid-pit-best-v2';
  const WHEELS = ['fl','fr','rl','rr'];

  let pit = {
    running: false,
    sequence: [],
    idx: 0,
    startTime: 0,
    raf: null
  };

  function initPit() {
    const btn = $('#pitStart');
    const bestEl = $('#pitBest');
    if (bestEl) {
      const stored = localStorage.getItem(PIT_BEST_KEY);
      if (stored) bestEl.textContent = parseFloat(stored).toFixed(2);
    }
    if (btn) btn.addEventListener('click', startPit);
    $$('.wheel-target').forEach(w => {
      w.addEventListener('click', () => handleWheelClick(w));
      w.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleWheelClick(w);
        }
      });
    });
  }

  function startPit() {
    if (pit.running) return;
    const btn = $('#pitStart');
    const status = $('#pitStatus');
    const timer = $('#pitTimer');

    $$('.wheel-target').forEach(w => w.classList.remove('ready','done'));

    pit.sequence = [...WHEELS].sort(() => Math.random() - 0.5);
    pit.idx = 0;
    pit.running = true;
    timer.textContent = '0.00';
    status.textContent = 'Go. Tap each wheel as it turns red.';
    status.className = 'pit-status';
    if (btn) btn.disabled = true;
    $('#pitVerdict').textContent = 'In progress';

    // Brief anticipation
    setTimeout(() => {
      pit.startTime = performance.now();
      lightNext();
      tickTimer();
    }, 700 + Math.random() * 500);
  }

  function tickTimer() {
    if (!pit.running) return;
    const elapsed = (performance.now() - pit.startTime) / 1000;
    $('#pitTimer').textContent = elapsed.toFixed(2);
    pit.raf = requestAnimationFrame(tickTimer);
  }

  function lightNext() {
    if (pit.idx >= pit.sequence.length) return;
    const wheelId = pit.sequence[pit.idx];
    const wheel = document.querySelector(`.wheel-target[data-wheel="${wheelId}"]`);
    if (wheel) wheel.classList.add('ready');
    playTick();
  }

  function handleWheelClick(wheel) {
    if (!pit.running) return;
    if (!wheel.classList.contains('ready')) {
      // Penalty
      const status = $('#pitStatus');
      status.textContent = 'Wrong wheel · +0.5s penalty';
      status.className = 'pit-status bad';
      pit.startTime -= 500;
      playError();
      return;
    }
    wheel.classList.remove('ready');
    wheel.classList.add('done');
    pit.idx++;
    playTick();
    if (pit.idx >= pit.sequence.length) {
      endPit();
    } else {
      lightNext();
    }
  }

  function endPit() {
    cancelAnimationFrame(pit.raf);
    pit.running = false;
    const elapsed = (performance.now() - pit.startTime) / 1000;
    $('#pitTimer').textContent = elapsed.toFixed(2);
    const status = $('#pitStatus');
    const verdict = $('#pitVerdict');
    const btn = $('#pitStart');
    const bestEl = $('#pitBest');

    let verdictText, statusText, klass;
    if (elapsed < 2.5) {
      verdictText = 'F1-grade';
      statusText = `${elapsed.toFixed(2)}s — F1 mechanic territory.`;
      klass = 'win';
      playSuccess();
    } else if (elapsed < 4) {
      verdictText = 'Solid';
      statusText = `${elapsed.toFixed(2)}s — solid pit stop.`;
      klass = 'meh';
    } else if (elapsed < 8) {
      verdictText = 'Friday practice';
      statusText = `${elapsed.toFixed(2)}s — that's a practice stop.`;
      klass = 'meh';
    } else {
      verdictText = 'Lost places';
      statusText = `${elapsed.toFixed(2)}s — your driver lost positions.`;
      klass = 'bad';
    }
    verdict.textContent = verdictText;
    status.textContent = statusText;
    status.className = 'pit-status ' + klass;

    const stored = parseFloat(localStorage.getItem(PIT_BEST_KEY) || '9999');
    if (elapsed < stored) {
      localStorage.setItem(PIT_BEST_KEY, elapsed.toFixed(2));
      if (bestEl) bestEl.textContent = elapsed.toFixed(2);
    }
    if (btn) btn.disabled = false;
  }

  /* ------------------------------------------------------------
     SOUND — Web Audio, subtle
     ------------------------------------------------------------ */
  let ctx = null;
  function audio() {
    if (!ctx) {
      try { ctx = new (window.AudioContext || window.webkitAudioContext)(); }
      catch (e) { ctx = null; }
    }
    return ctx;
  }
  function playTick() {
    const c = audio(); if (!c) return;
    const o = c.createOscillator(), g = c.createGain();
    o.connect(g); g.connect(c.destination);
    o.type = 'square';
    o.frequency.value = 1100;
    g.gain.setValueAtTime(0.04, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.06);
    o.start(); o.stop(c.currentTime + 0.06);
  }
  function playError() {
    const c = audio(); if (!c) return;
    const o = c.createOscillator(), g = c.createGain();
    o.connect(g); g.connect(c.destination);
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(300, c.currentTime);
    o.frequency.exponentialRampToValueAtTime(120, c.currentTime + 0.2);
    g.gain.setValueAtTime(0.06, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.22);
    o.start(); o.stop(c.currentTime + 0.22);
  }
  function playSuccess() {
    const c = audio(); if (!c) return;
    [660, 880, 1320].forEach((f, i) => {
      const o = c.createOscillator(), g = c.createGain();
      o.connect(g); g.connect(c.destination);
      o.type = 'sine';
      o.frequency.value = f;
      g.gain.setValueAtTime(0.055, c.currentTime + i*0.07);
      g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i*0.07 + 0.16);
      o.start(c.currentTime + i*0.07);
      o.stop(c.currentTime + i*0.07 + 0.18);
    });
  }

  /* ------------------------------------------------------------
     §11 — FLAGS
     ------------------------------------------------------------ */
  function renderFlags() {
    const wrap = $('#flagsRef');
    if (!wrap) return;
    wrap.innerHTML = F1.flags.map(f => {
      let style = `background:${f.color};`;
      if (f.color === 'chequered') style = 'background: repeating-conic-gradient(#14130E 0% 25%, #F0EBE0 25% 50%) 0 0/16px 16px;';
      if (f.color === 'split-yr') style = 'background: linear-gradient(135deg, #F4D72E 50%, #E10600 50%);';
      if (f.color === 'split-bw') style = 'background: linear-gradient(135deg, #F0EBE0 50%, #14130E 50%);';
      return `
        <div class="flag-cell">
          <div class="flag-swatch" style="${style}"></div>
          <div class="flag-name">${f.name}</div>
          <div class="flag-desc">${f.desc}</div>
        </div>
      `;
    }).join('');
  }

  /* ------------------------------------------------------------
     §12 — STANDINGS
     ------------------------------------------------------------ */
  function renderStandings() {
    const wrap = $('#standingsList');
    if (!wrap) return;
    const max = F1.standings[0].pts;
    const header = `
      <div class="st-row head">
        <div>POS</div>
        <div>Driver</div>
        <div>Form</div>
        <div></div>
        <div>PTS</div>
      </div>
    `;
    const rows = F1.standings.map((s) => {
      const d = F1.getDriver(s.id);
      const team = F1.getTeam(d.team);
      const widthPct = (s.pts / max) * 100;
      return `
        <div class="st-row" data-driver="${d.id}" style="--team-c:${team.color};">
          <div class="st-pos ${s.pos <= 3 ? 'top' : ''}">P${s.pos}</div>
          <div class="st-name">${d.name}<span class="team">${team.name} · #${d.num}</span></div>
          <div class="st-pos" style="font-family:var(--mono);font-size:11px;">${d.flag}</div>
          <div class="st-team-stripe"><div class="st-fill" style="width:${widthPct}%;"></div></div>
          <div class="st-pts">${s.pts}<span class="unit">pts</span></div>
        </div>
      `;
    }).join('');
    wrap.innerHTML = header + rows;

    $$('.st-row[data-driver]', wrap).forEach(row => {
      row.addEventListener('click', () => openDriverModal(row.dataset.driver));
    });
  }

  /* ------------------------------------------------------------
     §13 — HISTORY ERAS
     ------------------------------------------------------------ */
  function renderEras() {
    const wrap = $('#erasGrid');
    if (!wrap) return;
    wrap.innerHTML = F1.eras.map(e => `
      <div class="era">
        <div class="era-range">${e.range}</div>
        <h3 class="era-name">${e.name}<em>.</em></h3>
        <p class="era-desc">${e.desc}</p>
        <div class="era-stat">
          <span class="k">${e.stat.k}</span>
          ${e.stat.v}
        </div>
      </div>
    `).join('');
  }

  /* ------------------------------------------------------------
     §14 — GLOSSARY
     ------------------------------------------------------------ */
  function renderGlossary(filter='') {
    const wrap = $('#glossList');
    if (!wrap) return;
    const list = F1.glossary
      .filter(g => !filter || g.term.toLowerCase().includes(filter.toLowerCase()) || g.def.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => a.term.localeCompare(b.term));
    if (!list.length) {
      wrap.innerHTML = '<div style="padding: 24px 0; font-family: var(--sans); font-style: italic; color: var(--ink-3); font-size: 14px;">No matching terms.</div>';
      return;
    }
    wrap.innerHTML = list.map(g => `
      <div class="gloss-row">
        <div class="gloss-term">${g.term}</div>
        <div class="gloss-def">${g.def}</div>
      </div>
    `).join('');
  }

  function initGlossSearch() {
    const input = $('#glossSearch');
    if (input) input.addEventListener('input', () => renderGlossary(input.value));
  }

  /* ------------------------------------------------------------
     MODAL — Team & Driver detail
     ------------------------------------------------------------ */
  function openModal() {
    $('#detailModal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    $('#detailModal').classList.remove('open');
    document.body.style.overflow = '';
  }
  function openTeamModal(teamId) {
    const t = F1.getTeam(teamId);
    if (!t) return;
    const drivers = F1.driversFor(teamId);
    const body = $('#detailBody');
    body.innerHTML = `
      <div class="detail-head">
        <div>
          <div class="detail-eyebrow">${t.full}</div>
          <h2 class="detail-title">${t.name}<em>.</em></h2>
        </div>
        <div class="detail-badge" style="color:${t.color};">
          ${t.titles}<span class="sub">Constructor titles</span>
        </div>
      </div>

      <p class="detail-story">${t.story}</p>
      <div class="detail-pull">${t.pull}</div>

      <div class="detail-meta">
        <div><div class="label">Base</div><div class="v">${t.base}</div></div>
        <div><div class="label">Engine</div><div class="v">${t.engine}</div></div>
        <div><div class="label">Principal</div><div class="v">${t.principal}</div></div>
        <div><div class="label">Founded</div><div class="v">${t.founded}</div></div>
        <div><div class="label">Chassis</div><div class="v">${t.chassis}</div></div>
        <div><div class="label">Color</div><div class="v" style="display:flex;align-items:center;gap:6px;"><span style="width:10px;height:10px;background:${t.color};display:inline-block;"></span>${t.color}</div></div>
      </div>

      <div class="detail-drv">
        ${drivers.map(d => `
          <div class="detail-drv-item" data-driver="${d.id}">
            <div class="detail-drv-num" style="color:${t.color};">${d.num}</div>
            <div>
              <div class="detail-drv-name">${d.name} ${d.flag}</div>
              <div class="detail-drv-meta">${d.titles} titles · ${d.wins} wins · since ${d.debut}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    body.querySelectorAll('.detail-drv-item').forEach(item => {
      item.addEventListener('click', () => {
        openDriverModal(item.dataset.driver);
      });
    });
    openModal();
  }
  function openDriverModal(driverId) {
    const d = F1.getDriver(driverId);
    if (!d) return;
    const t = F1.getTeam(d.team);
    const body = $('#detailBody');
    body.innerHTML = `
      <div class="detail-head">
        <div>
          <div class="detail-eyebrow">${d.flag} ${d.country} · debut ${d.debut} · age ${d.age}</div>
          <h2 class="detail-title">${d.name}<em>.</em></h2>
        </div>
        <div class="detail-badge" style="color:${t.color};">
          ${d.num}<span class="sub">Car number</span>
        </div>
      </div>

      <p class="detail-story">${d.fact}</p>

      <div class="detail-meta">
        <div><div class="label">Team</div><div class="v"><span style="display:inline-block;width:8px;height:8px;background:${t.color};margin-right:6px;vertical-align:middle;"></span>${t.name}</div></div>
        <div><div class="label">Titles</div><div class="v">${d.titles}</div></div>
        <div><div class="label">Wins</div><div class="v">${d.wins}</div></div>
        <div><div class="label">Born</div><div class="v">${d.dob}</div></div>
        <div><div class="label">In F1</div><div class="v">${new Date().getFullYear() - d.debut} seasons</div></div>
        <div><div class="label">Short</div><div class="v">${d.short}</div></div>
      </div>
    `;
    openModal();
  }
  function initModal() {
    $('#modalClose').addEventListener('click', closeModal);
    $('#detailModal').addEventListener('click', (e) => {
      if (e.target.id === 'detailModal') closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }

  /* ------------------------------------------------------------
     NAV — toggle + scroll active state
     ------------------------------------------------------------ */
  function initNav() {
    const toggle = $('#navToggle');
    const links = $('#navLinks');
    if (toggle && links) {
      toggle.addEventListener('click', () => {
        toggle.classList.toggle('open');
        links.classList.toggle('open');
      });
      links.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          toggle.classList.remove('open');
          links.classList.remove('open');
        });
      });
    }

    const sections = $$('section[id]');
    const navAnchors = $$('.nav-links a');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          const id = en.target.id;
          navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    sections.forEach(s => obs.observe(s));
  }

  /* ------------------------------------------------------------
     Scroll reveal
     ------------------------------------------------------------ */
  function initReveal() {
    const items = $$('.section-block');
    items.forEach(el => el.classList.add('reveal'));
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('in-view');
          obs.unobserve(en.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -10% 0px' });
    items.forEach(el => obs.observe(el));
  }

  /* ------------------------------------------------------------
     BOOT
     ------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', () => {
    renderCompare();
    renderAnatomy();
    renderTeams();
    renderDrivers();
    initDriverFilters();
    renderCalendar();
    initCalendarFilters();
    renderWeekend();
    initAero();
    renderTyres();
    renderStrategy();
    initPit();
    renderFlags();
    renderStandings();
    renderEras();
    renderGlossary();
    initGlossSearch();
    initModal();
    initNav();
    initReveal();
  });

})();
