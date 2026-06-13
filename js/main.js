/* ===================================================
   GRID — Main JS
   All interactivity, rendering, animations, sounds
   =================================================== */

(function() {
  'use strict';

  /* ============================================
     LOADER
     ============================================ */
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').classList.add('gone');
    }, 1400);
  });

  /* ============================================
     PERSONALIZATION (localStorage)
     ============================================ */
  const STORAGE_KEY = 'grid-team';
  const PIT_BEST_KEY = 'grid-pit-best';

  function applyTeamTheme(teamId) {
    const team = F1_DATA.getTeam(teamId);
    if (!team) return;
    document.documentElement.style.setProperty('--team-color', team.color);
    document.documentElement.style.setProperty('--team-color-dark', team.colorDark);
    const pill = document.getElementById('navTeamName');
    if (pill) pill.textContent = team.name;
  }

  function getStoredTeam() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function setStoredTeam(teamId) {
    localStorage.setItem(STORAGE_KEY, teamId);
    applyTeamTheme(teamId);
  }

  /* ============================================
     SVG GENERATORS
     ============================================ */

  // F1 car hero SVG — side profile
  function f1CarSVG() {
    return `
    <svg class="hero-car-svg" viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bodyGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="var(--team-color)" stop-opacity="1"/>
          <stop offset="100%" stop-color="var(--team-color-dark)" stop-opacity="1"/>
        </linearGradient>
      </defs>

      <!-- Floor shadow -->
      <ellipse cx="300" cy="200" rx="240" ry="10" fill="#000" opacity="0.4"/>

      <!-- Rear wheel -->
      <circle cx="470" cy="155" r="42" fill="#0B0B0D" stroke="#1A1A1A" stroke-width="2"/>
      <circle cx="470" cy="155" r="32" fill="#1A1A1A"/>
      <circle cx="470" cy="155" r="14" fill="#2A2A2A"/>
      <circle cx="470" cy="155" r="6" fill="var(--team-color)"/>
      <!-- spokes -->
      <line x1="470" y1="125" x2="470" y2="185" stroke="#3A3A3A" stroke-width="1.5"/>
      <line x1="445" y1="155" x2="495" y2="155" stroke="#3A3A3A" stroke-width="1.5"/>
      <line x1="450" y1="135" x2="490" y2="175" stroke="#3A3A3A" stroke-width="1.5"/>
      <line x1="490" y1="135" x2="450" y2="175" stroke="#3A3A3A" stroke-width="1.5"/>

      <!-- Front wheel -->
      <circle cx="140" cy="155" r="40" fill="#0B0B0D" stroke="#1A1A1A" stroke-width="2"/>
      <circle cx="140" cy="155" r="30" fill="#1A1A1A"/>
      <circle cx="140" cy="155" r="13" fill="#2A2A2A"/>
      <circle cx="140" cy="155" r="5" fill="var(--team-color)"/>
      <line x1="140" y1="127" x2="140" y2="183" stroke="#3A3A3A" stroke-width="1.5"/>
      <line x1="115" y1="155" x2="165" y2="155" stroke="#3A3A3A" stroke-width="1.5"/>
      <line x1="120" y1="137" x2="160" y2="173" stroke="#3A3A3A" stroke-width="1.5"/>
      <line x1="160" y1="137" x2="120" y2="173" stroke="#3A3A3A" stroke-width="1.5"/>

      <!-- Floor / sidepod base -->
      <path d="M 80 165 L 540 165 L 540 145 L 80 145 Z" fill="#1A1A1A"/>

      <!-- Sidepod -->
      <path d="M 220 145 L 420 145 L 440 110 L 240 110 Z" fill="url(#bodyGrad)"/>

      <!-- Engine cover ridge -->
      <path d="M 260 110 L 400 110 L 410 80 L 270 80 Z" fill="url(#bodyGrad)"/>

      <!-- Air intake -->
      <path d="M 280 80 L 350 80 L 360 60 L 290 60 Z" fill="#0B0B0D"/>

      <!-- Halo / cockpit area -->
      <path d="M 200 110 Q 200 70 240 65 L 280 65 Q 300 70 305 95 L 300 110 Z" fill="var(--team-color)"/>

      <!-- Halo (titanium hoop) -->
      <path d="M 220 78 Q 270 50 320 78" fill="none" stroke="#0B0B0D" stroke-width="6" stroke-linecap="round"/>
      <line x1="263" y1="68" x2="263" y2="105" stroke="#0B0B0D" stroke-width="5"/>

      <!-- Driver helmet hint -->
      <ellipse cx="263" cy="92" rx="14" ry="11" fill="#0B0B0D"/>
      <rect x="252" y="85" width="22" height="4" fill="var(--team-color)" opacity="0.9"/>

      <!-- Nose cone -->
      <path d="M 50 145 L 200 138 L 200 165 L 50 158 Z" fill="url(#bodyGrad)"/>
      <path d="M 30 152 L 50 145 L 50 158 Z" fill="var(--team-color)"/>

      <!-- Front wing -->
      <rect x="30" y="170" width="115" height="6" fill="#0B0B0D"/>
      <rect x="30" y="178" width="115" height="3" fill="var(--team-color)"/>
      <rect x="100" y="160" width="3" height="12" fill="#0B0B0D"/>
      <rect x="50" y="160" width="3" height="12" fill="#0B0B0D"/>

      <!-- Rear wing -->
      <rect x="510" y="60" width="6" height="100" fill="#0B0B0D"/>
      <rect x="495" y="55" width="40" height="6" fill="#0B0B0D"/>
      <rect x="495" y="68" width="40" height="4" fill="var(--team-color)"/>
      <!-- Beam wing -->
      <rect x="495" y="135" width="40" height="3" fill="#0B0B0D"/>

      <!-- T-cam -->
      <rect x="345" y="55" width="6" height="8" fill="#0B0B0D"/>
      <rect x="343" y="50" width="10" height="5" fill="var(--team-color)"/>

      <!-- Engine exhaust -->
      <circle cx="430" cy="100" r="5" fill="#0B0B0D"/>
      <circle cx="430" cy="100" r="3" fill="#FF6B2B"/>

      <!-- Speed accent lines -->
      <line x1="540" y1="100" x2="600" y2="100" stroke="var(--neon)" stroke-width="2" opacity="0.6"/>
      <line x1="530" y1="115" x2="580" y2="115" stroke="var(--neon)" stroke-width="1" opacity="0.4"/>
      <line x1="525" y1="130" x2="570" y2="130" stroke="var(--neon)" stroke-width="1" opacity="0.3"/>

    </svg>`;
  }

  // Driver helmet SVG — minimal stylized helmet
  function helmetSVG(team, num, size = 80) {
    const c = team ? team.color : '#BAFF39';
    const cd = team ? team.colorDark : '#8FCC2D';
    return `
    <svg viewBox="0 0 100 100" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <!-- Helmet shell -->
      <path d="M 20 55 Q 20 25 50 22 Q 80 25 80 55 L 80 70 L 75 75 L 25 75 L 20 70 Z" fill="${c}"/>
      <!-- Top stripe -->
      <path d="M 20 55 Q 20 25 50 22 Q 80 25 80 55 L 80 42 Q 80 32 50 28 Q 20 32 20 42 Z" fill="${cd}"/>
      <!-- Visor -->
      <path d="M 26 50 Q 26 42 50 40 Q 74 42 74 50 L 74 60 Q 74 64 50 65 Q 26 64 26 60 Z" fill="#0B0B0D"/>
      <!-- Visor reflection -->
      <path d="M 30 48 Q 35 45 50 44 Q 65 45 70 48 L 65 52 Q 50 50 35 52 Z" fill="#1A1A1A"/>
      <!-- Bottom chin guard -->
      <path d="M 25 70 L 75 70 L 70 78 L 30 78 Z" fill="${cd}"/>
      <!-- Number accent -->
      <text x="50" y="93" text-anchor="middle" fill="${c}" font-family="Bebas Neue" font-size="14" letter-spacing="0.5">${num}</text>
    </svg>`;
  }

  // Active aero car SVG — front-facing or 3/4 view (toggle wing position)
  function aeroSVG(mode) {
    // mode: 'z' (corner, wings closed) or 'x' (straight, wings flat/open)
    const isX = mode === 'x';
    const wingAngle = isX ? 0 : -18;
    const wingColor = isX ? 'var(--neon)' : 'var(--pink)';
    return `
    <svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 500px;">
      <defs>
        <linearGradient id="aeroBody" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="var(--team-color)"/>
          <stop offset="100%" stop-color="var(--team-color-dark)"/>
        </linearGradient>
      </defs>

      <!-- Road perspective -->
      <line x1="50" y1="240" x2="450" y2="240" stroke="rgba(240,236,226,0.1)" stroke-width="1"/>
      <line x1="100" y1="255" x2="400" y2="255" stroke="rgba(240,236,226,0.06)" stroke-width="1"/>

      <!-- Speed lines when X-mode -->
      ${isX ? `
      <line x1="0" y1="60" x2="80" y2="60" stroke="var(--neon)" stroke-width="2" opacity="0.6">
        <animate attributeName="x1" from="-80" to="500" dur="0.6s" repeatCount="indefinite"/>
        <animate attributeName="x2" from="0" to="580" dur="0.6s" repeatCount="indefinite"/>
      </line>
      <line x1="0" y1="200" x2="60" y2="200" stroke="var(--neon)" stroke-width="1" opacity="0.4">
        <animate attributeName="x1" from="-60" to="500" dur="0.4s" repeatCount="indefinite"/>
        <animate attributeName="x2" from="0" to="560" dur="0.4s" repeatCount="indefinite"/>
      </line>
      ` : ''}

      <!-- Rear wheel (back of car) -->
      <ellipse cx="380" cy="220" rx="38" ry="14" fill="#0B0B0D"/>
      <circle cx="380" cy="195" r="32" fill="#0B0B0D"/>
      <circle cx="380" cy="195" r="24" fill="#1A1A1A"/>
      <circle cx="380" cy="195" r="10" fill="#2A2A2A"/>

      <!-- Front wheel (closer) -->
      <ellipse cx="130" cy="225" rx="40" ry="15" fill="#0B0B0D"/>
      <circle cx="130" cy="200" r="36" fill="#0B0B0D"/>
      <circle cx="130" cy="200" r="27" fill="#1A1A1A"/>
      <circle cx="130" cy="200" r="11" fill="#2A2A2A"/>

      <!-- Body -->
      <path d="M 70 200 L 200 195 L 230 175 L 320 175 L 360 195 L 440 200 L 440 220 L 70 220 Z" fill="url(#aeroBody)"/>

      <!-- Sidepod -->
      <path d="M 200 200 L 360 200 L 350 170 L 220 170 Z" fill="url(#aeroBody)"/>

      <!-- Cockpit / halo -->
      <path d="M 220 175 Q 220 130 260 125 L 305 125 Q 320 130 325 165 L 320 175 Z" fill="var(--team-color)"/>
      <path d="M 235 138 Q 275 105 320 138" fill="none" stroke="#0B0B0D" stroke-width="6" stroke-linecap="round"/>
      <ellipse cx="280" cy="152" rx="13" ry="10" fill="#0B0B0D"/>

      <!-- T-cam -->
      <rect x="345" y="125" width="5" height="10" fill="#0B0B0D"/>

      <!-- Nose -->
      <path d="M 40 205 L 70 200 L 70 220 L 40 215 Z" fill="var(--team-color)"/>

      <!-- ===== FRONT WING ===== -->
      <g transform="translate(28, 232) rotate(${wingAngle})" style="transition: transform 0.6s var(--ease);">
        <rect x="0" y="0" width="120" height="6" fill="#0B0B0D" rx="1"/>
        <rect x="0" y="-3" width="120" height="3" fill="${wingColor}"/>
        <rect x="15" y="-8" width="3" height="14" fill="#0B0B0D"/>
        <rect x="60" y="-8" width="3" height="14" fill="#0B0B0D"/>
        <rect x="100" y="-8" width="3" height="14" fill="#0B0B0D"/>
      </g>

      <!-- ===== REAR WING ===== -->
      <rect x="408" y="100" width="4" height="80" fill="#0B0B0D"/>
      <rect x="438" y="100" width="4" height="80" fill="#0B0B0D"/>
      <!-- Main plane -->
      <rect x="402" y="98" width="46" height="6" fill="#0B0B0D" rx="1"/>
      <!-- Upper flap (rotates in X-mode) -->
      <g transform="translate(402, 96) rotate(${isX ? -25 : 0}, 23, 5)" style="transition: transform 0.5s var(--ease);">
        <rect x="0" y="0" width="46" height="5" fill="${wingColor}"/>
      </g>

      <!-- Mode indicator badge -->
      <g transform="translate(20, 30)">
        <rect x="0" y="0" width="92" height="34" fill="${wingColor}" rx="2"/>
        <text x="46" y="14" text-anchor="middle" fill="#0B0B0D" font-family="DM Mono" font-size="8" letter-spacing="2" font-weight="500">${isX ? 'X-MODE' : 'Z-MODE'}</text>
        <text x="46" y="27" text-anchor="middle" fill="#0B0B0D" font-family="DM Mono" font-size="7" letter-spacing="1.5">${isX ? 'LOW DRAG' : 'MAX GRIP'}</text>
      </g>

      <!-- Active aero arrows pointing to wings -->
      ${isX ? `
      <text x="55" y="270" text-anchor="middle" fill="var(--neon)" font-family="DM Mono" font-size="8" letter-spacing="1">FLAT</text>
      <text x="425" y="90" text-anchor="middle" fill="var(--neon)" font-family="DM Mono" font-size="8" letter-spacing="1">OPEN</text>
      ` : `
      <text x="55" y="270" text-anchor="middle" fill="var(--pink)" font-family="DM Mono" font-size="8" letter-spacing="1">CLOSED</text>
      <text x="425" y="90" text-anchor="middle" fill="var(--pink)" font-family="DM Mono" font-size="8" letter-spacing="1">CLOSED</text>
      `}
    </svg>`;
  }

  // Track layout SVGs — simplified path approximations of each circuit
  const TRACK_PATHS = {
    'Albert Park': 'M 30 70 Q 50 30 100 35 L 200 50 Q 240 60 250 95 Q 252 130 220 140 L 130 145 Q 70 145 50 120 Z',
    'Shanghai Intl': 'M 40 80 Q 50 30 110 30 Q 170 30 175 60 Q 175 90 145 95 Q 115 95 115 115 Q 115 135 160 130 Q 220 125 245 100 Q 260 70 230 50 Q 200 35 220 80 Q 240 130 200 145 L 80 145 Q 30 130 40 80 Z',
    'Suzuka': 'M 40 70 Q 30 40 80 35 Q 130 35 140 70 Q 145 100 120 110 Q 90 115 90 95 Q 90 75 130 85 Q 180 95 210 75 Q 250 50 245 90 Q 240 130 195 140 Q 130 145 80 130 Q 30 110 40 70 Z',
    'Miami Intl': 'M 30 80 Q 40 30 100 30 Q 160 30 175 65 Q 180 95 150 100 L 110 100 Q 90 100 100 120 Q 130 145 200 140 Q 250 130 250 95 Q 250 60 215 50 Q 200 30 250 35 Q 270 60 260 100 Q 240 145 150 145 Q 50 145 30 80 Z',
    'Circuit Gilles Villeneuve': 'M 30 90 L 40 50 L 90 40 L 200 45 L 250 70 L 260 110 L 240 140 L 180 145 L 130 130 L 120 100 L 80 105 L 30 90 Z',
    'Monaco': 'M 40 90 Q 30 50 70 40 Q 110 35 130 60 L 150 90 Q 165 120 140 130 Q 110 135 100 110 Q 95 90 130 100 Q 180 115 220 105 Q 250 90 245 60 Q 220 40 240 80 Q 260 130 200 140 L 90 145 Q 40 140 40 90 Z',
    'Circuit de Barcelona': 'M 30 70 Q 30 30 90 30 L 200 35 Q 250 45 250 80 Q 250 115 220 125 Q 180 130 160 110 Q 145 90 175 90 Q 220 90 235 110 Q 240 145 180 145 L 70 145 Q 30 135 30 70 Z',
    'Red Bull Ring': 'M 50 100 Q 40 50 100 40 L 200 45 Q 250 60 240 100 Q 220 140 160 140 Q 100 140 80 120 Q 60 105 50 100 Z',
    'Silverstone': 'M 30 80 Q 30 30 100 35 Q 170 40 180 70 L 200 110 Q 220 140 180 145 Q 130 145 110 120 Q 100 100 130 100 Q 180 105 225 90 Q 260 70 250 100 Q 235 140 175 145 L 65 145 Q 30 130 30 80 Z',
    'Spa-Francorchamps': 'M 30 110 Q 25 70 70 60 Q 110 55 120 90 Q 130 115 100 115 Q 70 110 90 80 Q 130 50 180 60 Q 230 75 240 110 Q 240 145 180 145 L 70 145 Q 30 145 30 110 Z',
    'Hungaroring': 'M 40 70 Q 35 35 90 35 Q 145 35 150 70 Q 150 105 125 105 Q 100 105 100 80 Q 100 60 140 70 Q 200 85 240 75 Q 260 60 255 100 Q 245 140 190 145 L 80 145 Q 35 140 40 70 Z',
    'Zandvoort': 'M 30 90 Q 25 40 80 35 Q 140 35 165 75 L 200 110 Q 230 140 200 145 Q 130 145 110 115 Q 95 90 130 95 Q 180 105 225 90 Q 260 75 250 110 Q 230 145 170 145 L 60 145 Q 30 130 30 90 Z',
    'Monza': 'M 40 130 L 60 50 L 220 40 L 250 70 L 220 110 L 130 115 L 110 90 L 200 90 L 235 100 L 240 140 L 80 145 Z',
    'Madrid': 'M 30 60 L 70 30 L 200 35 L 245 70 L 235 130 L 180 145 L 110 140 L 90 110 L 130 95 L 195 100 L 200 80 L 110 75 L 60 100 Z',
    'Baku City': 'M 40 130 L 30 90 L 50 40 L 220 35 L 260 70 L 250 110 L 200 115 L 100 110 L 90 90 L 200 85 L 230 100 L 220 140 L 60 145 Z',
    'Marina Bay': 'M 30 100 Q 30 50 80 40 L 200 45 Q 250 60 250 100 Q 250 140 200 145 L 130 140 Q 90 130 100 110 L 130 95 Q 180 95 195 110 Q 200 130 160 130 Q 100 130 30 100 Z',
    'COTA': 'M 30 90 Q 30 40 80 35 Q 150 30 145 70 L 145 110 Q 150 145 100 145 Q 60 145 90 115 Q 140 90 200 105 Q 250 120 250 90 Q 250 50 220 50 Q 240 90 260 130 Q 240 145 200 145 Z',
    'Autódromo Rodríguez': 'M 40 80 L 60 40 L 150 35 L 200 50 L 230 90 L 220 130 L 180 145 L 100 145 L 60 130 L 40 100 Z',
    'Interlagos': 'M 30 80 Q 40 35 90 40 L 200 45 Q 250 60 240 100 L 220 130 Q 180 145 130 145 Q 80 140 60 120 L 50 100 Z',
    'Las Vegas Strip': 'M 30 110 L 60 50 L 240 45 L 260 80 L 240 140 L 80 145 Z',
    'Lusail Intl': 'M 30 90 Q 35 35 100 35 Q 170 35 190 70 Q 200 110 170 120 Q 130 125 130 100 Q 130 85 170 90 Q 220 95 245 80 Q 260 60 255 100 Q 245 140 180 145 L 70 145 Q 30 130 30 90 Z',
    'Yas Marina': 'M 30 90 Q 30 40 80 35 L 180 40 Q 230 55 250 90 Q 250 130 220 140 L 140 145 Q 80 145 60 125 L 40 110 Z'
  };

  function trackSVG(track) {
    const path = TRACK_PATHS[track.name] || 'M 50 90 Q 30 40 100 40 L 200 45 Q 250 60 240 100 L 220 140 Q 130 145 60 130 Z';
    return `
    <svg viewBox="0 0 280 175" xmlns="http://www.w3.org/2000/svg">
      <path class="track-path" d="${path}" stroke-dasharray="0"/>
      <circle class="start-dot" cx="40" cy="80" r="4"/>
    </svg>`;
  }

  /* ============================================
     HERO — F1 car + mouse tracking
     ============================================ */
  function initHero() {
    const visual = document.getElementById('heroVisual');
    if (!visual) return;
    visual.innerHTML = f1CarSVG();
    const car = visual.querySelector('.hero-car-svg');

    // Mouse tracking tilt
    const hero = document.querySelector('.hero');
    if (hero && car) {
      hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const tiltX = (y - 0.5) * 10;
        const tiltY = (x - 0.5) * -10;
        car.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      });
      hero.addEventListener('mouseleave', () => {
        car.style.transform = 'rotateX(0) rotateY(0)';
      });
    }

    // Hero CTA — pick team button
    const picker = document.getElementById('heroPickTeam');
    if (picker) {
      picker.addEventListener('click', () => openModal('teamModal'));
    }
  }

  /* ============================================
     TEAMS
     ============================================ */
  function renderTeams() {
    const grid = document.getElementById('teamsGrid');
    if (!grid) return;

    grid.innerHTML = F1_DATA.teams.map((team, i) => {
      const drivers = F1_DATA.driversFor(team.id);
      return `
      <article class="team-card" data-team="${team.id}" style="--team-c: ${team.color};">
        <div class="team-titles-badge">
          ${team.titles}<span class="sub">${team.titles === 1 ? 'title' : 'titles'}</span>
        </div>
        <div class="team-card-top">
          <div class="team-num">CONSTRUCTOR ${String(i + 1).padStart(2, '0')}</div>
          <div class="team-name">${team.name.toUpperCase()}</div>
          <div class="team-full">${team.fullName}</div>
        </div>
        <div class="team-meta">
          <div class="team-meta-item">
            <div class="l">Base</div>
            <div class="v">${team.base.split(',')[0]}</div>
          </div>
          <div class="team-meta-item">
            <div class="l">Engine</div>
            <div class="v">${team.engine.split(' ')[0]}</div>
          </div>
          <div class="team-meta-item">
            <div class="l">Founded</div>
            <div class="v">${team.founded}</div>
          </div>
        </div>
        <div class="team-drivers-row">
          ${drivers.map(d => `
            <div class="team-driver-mini" data-driver="${d.id}">
              <span class="num">${d.num}</span>
              <div class="info">
                <div class="name">${d.short} <span class="flag">${d.flag}</span></div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="team-card-expand">
          <span>Read more</span>
          <span class="arrow">→</span>
        </div>
      </article>
      `;
    }).join('');

    // Click handlers — team detail
    grid.querySelectorAll('.team-card').forEach(card => {
      card.addEventListener('click', (e) => {
        // If clicked on a driver mini, open driver modal instead
        const dmini = e.target.closest('.team-driver-mini');
        if (dmini) {
          e.stopPropagation();
          openDriverModal(dmini.dataset.driver);
          return;
        }
        openTeamModal(card.dataset.team);
      });
    });
  }

  /* ============================================
     DRIVERS
     ============================================ */
  function renderDrivers(filter = 'all') {
    const grid = document.getElementById('driversGrid');
    if (!grid) return;

    let drivers = F1_DATA.drivers;
    if (filter === 'champions') drivers = drivers.filter(d => d.titles > 0);
    else if (filter === 'rookies') drivers = drivers.filter(d => d.age < 24);
    else if (filter === 'veterans') drivers = drivers.filter(d => d.age >= 30);

    grid.innerHTML = drivers.map(d => {
      const team = F1_DATA.getTeam(d.team);
      return `
      <article class="driver-card" data-driver="${d.id}" style="--team-c: ${team.color};">
        <div class="driver-num-big">${d.num}</div>
        ${helmetSVG(team, d.num, 60).replace('width="60" height="60"', 'class="driver-helmet"')}
        <div class="driver-name">${d.name.toUpperCase()}</div>
        <div class="driver-team-name">${team.name} <span style="margin-left: 8px;">${d.flag}</span></div>
        <div class="driver-stats">
          <div class="dstat">
            <div class="l">Titles</div>
            <div class="v">${d.titles}</div>
          </div>
          <div class="dstat">
            <div class="l">Wins</div>
            <div class="v">${d.wins}</div>
          </div>
          <div class="dstat">
            <div class="l">Age</div>
            <div class="v">${d.age}</div>
          </div>
        </div>
        <div class="driver-fact">${d.fact}</div>
      </article>
      `;
    }).join('');

    grid.querySelectorAll('.driver-card').forEach(card => {
      card.addEventListener('click', () => openDriverModal(card.dataset.driver));
    });
  }

  function initDriverFilters() {
    const filters = document.getElementById('driverFilters');
    if (!filters) return;
    filters.querySelectorAll('.dfilter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filters.querySelectorAll('.dfilter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderDrivers(btn.dataset.filter);
      });
    });
  }

  /* ============================================
     TRACKS
     ============================================ */
  const REGIONS = {
    europe: ['Monaco','Spain','Austria','UK','Belgium','Hungary','Netherlands','Italy'],
    americas: ['USA','Canada','Mexico','Brazil'],
    asia: ['China','Japan','Azerbaijan','Singapore','Qatar','Abu Dhabi'],
    oceania: ['Australia']
  };

  function renderTracks(region = 'all') {
    const grid = document.getElementById('tracksGrid');
    if (!grid) return;

    let tracks = F1_DATA.tracks;
    if (region === 'sprint') tracks = tracks.filter(t => t.sprint);
    else if (region !== 'all') tracks = tracks.filter(t => REGIONS[region]?.includes(t.country));

    grid.innerHTML = tracks.map(t => `
      <article class="track-card">
        ${t.sprint ? '<span class="track-sprint-tag">SPRINT</span>' : ''}
        <div class="track-round">ROUND ${String(t.round).padStart(2, '0')} · ${t.date}</div>
        <div class="track-name">${t.name.toUpperCase()}</div>
        <div class="track-country">${t.city}, ${t.country}</div>
        <div class="track-svg">${trackSVG(t)}</div>
        <div class="track-stats">
          <div class="track-stat">
            <div class="v">${t.length}</div>
            <div class="l">km</div>
          </div>
          <div class="track-stat">
            <div class="v">${t.turns}</div>
            <div class="l">turns</div>
          </div>
          <div class="track-stat">
            <div class="v" style="font-size: 14px; letter-spacing: 0;">${t.lapRecord}</div>
            <div class="l">record</div>
          </div>
        </div>
        <div class="track-dna">${t.dna}</div>
      </article>
    `).join('');
  }

  function initTrackTabs() {
    const tabs = document.getElementById('tracksTabs');
    if (!tabs) return;
    tabs.querySelectorAll('.tracks-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.querySelectorAll('.tracks-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderTracks(tab.dataset.region);
      });
    });
  }

  /* ============================================
     RACE WEEKEND TIMELINE
     ============================================ */
  const WEEKEND_SESSIONS = [
    { id: 'fp1', day: 'FRI', label: 'FP1', name: 'PRACTICE 1', duration: '60 minutes', detail: 'First chance for drivers to lap the circuit this weekend. Teams gather baseline data, check setups, run new parts. Often unrepresentative of true pace — many teams sandbag here.' },
    { id: 'fp2', day: 'FRI', label: 'FP2', name: 'PRACTICE 2', duration: '60 minutes', detail: 'The most useful Friday session. Teams run race simulations, long stints on different tyres. This is where the real pace picture starts to emerge. Engineers stay up most of Friday night analyzing it.' },
    { id: 'fp3', day: 'SAT', label: 'FP3', name: 'PRACTICE 3', duration: '60 minutes', detail: 'Final tune-up before qualifying. Short runs on soft tyres mimicking Q3 conditions. Drivers chase a clean qualifying lap.' },
    { id: 'q', day: 'SAT', label: 'Q', name: 'QUALIFYING', duration: 'Q1 18min · Q2 15min · Q3 12min', detail: 'Decides the starting grid. Three knockout segments — 5 drivers eliminated after Q1, another 5 after Q2. The fastest 10 fight for pole position in Q3. Sets the entire weekend narrative.' },
    { id: 'sp', day: 'SAT', label: 'SP', name: 'SPRINT', duration: '100km · ~30 min', detail: 'Only at six designated Sprint weekends. A shorter race on Saturday with its own grid (set by Sprint Qualifying on Friday). Points awarded to top 8. Less pit strategy, more all-out racing.' },
    { id: 'race', day: 'SUN', label: 'GP', name: 'GRAND PRIX', duration: '~305 km · ~90 min', detail: 'The main event. Around 50-70 laps depending on circuit. Mandatory tyre stops, strategy, drama, glory. The winner gets 25 points, second 18, third 15, sliding down to 1 point for 10th place.' }
  ];

  function renderWeekendTimeline() {
    const stops = document.getElementById('timelineStops');
    if (!stops) return;
    stops.innerHTML = WEEKEND_SESSIONS.map((s, i) => `
      <div class="timeline-stop" data-idx="${i}">
        <span class="day">${s.day}</span>
        <span class="label">${s.label}</span>
      </div>
    `).join('');
    selectWeekendSession(5); // default to GP

    stops.querySelectorAll('.timeline-stop').forEach(stop => {
      stop.addEventListener('click', () => {
        selectWeekendSession(parseInt(stop.dataset.idx));
      });
    });
  }

  function selectWeekendSession(idx) {
    const stops = document.querySelectorAll('.timeline-stop');
    stops.forEach((s, i) => s.classList.toggle('active', i === idx));
    const session = WEEKEND_SESSIONS[idx];
    const detail = document.getElementById('timelineDetail');
    if (detail) {
      detail.innerHTML = `
        <div class="timeline-detail-num">${idx + 1}</div>
        <div class="timeline-detail-content">
          <div class="duration">${session.day} · ${session.duration}</div>
          <h3>${session.name}</h3>
          <p>${session.detail}</p>
        </div>
      `;
    }
    // progress bar
    const progress = document.getElementById('timelineProgress');
    if (progress) {
      progress.style.width = `${(idx / (WEEKEND_SESSIONS.length - 1)) * 100}%`;
    }
  }

  /* ============================================
     ACTIVE AERO TOGGLE
     ============================================ */
  function renderAero(mode = 'z') {
    const visual = document.getElementById('aeroVisual');
    if (!visual) return;
    visual.innerHTML = aeroSVG(mode);

    const title = document.getElementById('aeroModeTitle');
    const body = document.getElementById('aeroModeBody');
    const drag = document.getElementById('aeroDrag');
    const down = document.getElementById('aeroDown');
    const speed = document.getElementById('aeroSpeed');
    const flap = document.getElementById('aeroFlap');

    if (mode === 'z') {
      title.textContent = 'Z-Mode — maximum grip';
      body.textContent = 'On corner entry and through the turn, both wings stay shut at their default angle. Maximum downforce, maximum grip. The car can attack the apex without sliding wide.';
      drag.textContent = 'High';
      down.textContent = 'Max';
      speed.textContent = '~320';
      flap.textContent = 'Closed';
    } else {
      title.textContent = 'X-Mode — straight line attack';
      body.textContent = 'On designated straights, the driver opens the wing flaps — the rear flap rotates up, the front goes flat. Drag collapses, top speed climbs to ~350 km/h. Available to every driver, every lap, every straight.';
      drag.textContent = 'Low';
      down.textContent = 'Min';
      speed.textContent = '~350';
      flap.textContent = 'Open';
    }
  }

  function initAeroToggle() {
    const buttons = document.querySelectorAll('.aero-toggle-btn');
    renderAero('z');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderAero(btn.dataset.mode);
      });
    });
  }

  /* ============================================
     TYRE STRATEGY BUILDER
     ============================================ */
  const TYRE_DATA = {
    soft: { name: 'Soft', color: '#FF3333', pace: 9.5, life: 2.5, isDry: true },
    medium: { name: 'Medium', color: '#FFC82E', pace: 7.5, life: 6.0, isDry: true },
    hard: { name: 'Hard', color: '#EEEEEE', pace: 5.5, life: 9.0, isDry: true },
    inter: { name: 'Inter', color: '#00CC44', pace: 4.0, life: 7.0, isDry: false },
    wet: { name: 'Wet', color: '#0088FF', pace: 3.0, life: 8.0, isDry: false }
  };

  const TOTAL_RACE_LAPS = 60;
  const PIT_STOP_TIME = 22; // seconds
  const BASE_LAP_TIME = 90; // seconds

  let stintState = [
    { tyre: 'medium', laps: 20 },
    { tyre: 'hard', laps: 25 },
    { tyre: 'soft', laps: 15 }
  ];

  function renderStrategyBuilder() {
    const container = document.getElementById('stratStints');
    if (!container) return;

    container.innerHTML = stintState.map((stint, i) => `
      <div class="strat-stint">
        <div class="strat-stint-label">STINT ${i + 1}</div>
        <select data-stint="${i}" data-attr="tyre">
          ${Object.entries(TYRE_DATA).map(([key, t]) =>
            `<option value="${key}" ${stint.tyre === key ? 'selected' : ''}>${t.name}</option>`
          ).join('')}
        </select>
        <input type="range" min="1" max="40" value="${stint.laps}" data-stint="${i}" data-attr="laps"/>
        <div class="laps-out">${stint.laps} <span style="font-family: var(--mono); font-size: 11px; color: var(--mid); letter-spacing: 1px;">LAPS</span></div>
      </div>
    `).join('');

    container.querySelectorAll('select, input[type="range"]').forEach(input => {
      input.addEventListener('input', (e) => {
        const i = parseInt(e.target.dataset.stint);
        const attr = e.target.dataset.attr;
        if (attr === 'laps') stintState[i].laps = parseInt(e.target.value);
        else stintState[i][attr] = e.target.value;
        renderStrategyBuilder();
        computeStrategy();
      });
    });

    computeStrategy();
  }

  function computeStrategy() {
    let totalTime = 0;
    let usedDry = new Set();
    const totalLaps = stintState.reduce((s, st) => s + st.laps, 0);

    stintState.forEach((stint, idx) => {
      const t = TYRE_DATA[stint.tyre];
      if (t.isDry) usedDry.add(stint.tyre);
      // Lap time model: base + degradation curve. Faster pace = lower base; lower life = quicker deg.
      const paceBonus = (10 - t.pace) * 0.5;
      const baseLap = BASE_LAP_TIME + paceBonus;
      // Degradation: as you exceed tyre life, each lap adds penalty
      for (let lap = 1; lap <= stint.laps; lap++) {
        const wear = Math.max(0, (lap - t.life) * 0.2);
        totalTime += baseLap + wear;
      }
      // Add pit stop time except for last stint
      if (idx < stintState.length - 1) totalTime += PIT_STOP_TIME;
    });

    // Display
    const timeEl = document.getElementById('stratTime');
    const stopsEl = document.getElementById('stratStops');
    const validEl = document.getElementById('stratValid');

    const mins = Math.floor(totalTime / 60);
    const secs = (totalTime % 60).toFixed(1);
    if (timeEl) timeEl.textContent = `${mins}:${secs.padStart(4, '0')}`;
    if (stopsEl) stopsEl.textContent = stintState.length - 1;
    if (validEl) {
      const lapsOk = totalLaps === TOTAL_RACE_LAPS;
      const dryOk = usedDry.size >= 2;
      if (lapsOk && dryOk) {
        validEl.textContent = 'LEGAL';
        validEl.className = 'v success';
      } else if (!lapsOk) {
        validEl.textContent = `${totalLaps}/${TOTAL_RACE_LAPS}`;
        validEl.className = 'v warning';
      } else {
        validEl.textContent = 'NEED 2 DRY';
        validEl.className = 'v warning';
      }
    }
  }

  /* ============================================
     PIT STOP GAME
     ============================================ */
  let pitState = {
    running: false,
    sequence: [],
    currentIdx: 0,
    startTime: 0,
    intervalId: null
  };

  const WHEELS = ['fl', 'fr', 'rl', 'rr'];

  function initPitStop() {
    const btn = document.getElementById('pitStartBtn');
    const result = document.getElementById('pitResult');
    const timer = document.getElementById('pitTimer');
    const bestEl = document.getElementById('pitBest');

    // Load best time
    const stored = localStorage.getItem(PIT_BEST_KEY);
    if (stored && bestEl) bestEl.textContent = parseFloat(stored).toFixed(2);

    if (btn) btn.addEventListener('click', startPitStop);

    document.querySelectorAll('.wheel-target').forEach(w => {
      w.addEventListener('click', () => handleWheelClick(w));
    });
  }

  function startPitStop() {
    const btn = document.getElementById('pitStartBtn');
    const result = document.getElementById('pitResult');
    const timer = document.getElementById('pitTimer');

    if (pitState.running) return;

    // Reset wheels
    document.querySelectorAll('.wheel-target').forEach(w => {
      w.classList.remove('ready', 'done');
    });

    // Random shuffle wheels
    pitState.sequence = [...WHEELS].sort(() => Math.random() - 0.5);
    pitState.currentIdx = 0;
    pitState.running = true;
    timer.textContent = '0.00';
    result.textContent = 'GO! Tap each red wheel.';
    result.className = 'pit-result';
    if (btn) btn.disabled = true;

    // Show first wheel after a short anticipation delay
    setTimeout(() => {
      pitState.startTime = performance.now();
      lightUpNextWheel();
      // Start timer update
      pitState.intervalId = setInterval(() => {
        const elapsed = (performance.now() - pitState.startTime) / 1000;
        timer.textContent = elapsed.toFixed(2);
      }, 16);
    }, 800);
  }

  function lightUpNextWheel() {
    if (pitState.currentIdx >= pitState.sequence.length) return;
    const wheelId = pitState.sequence[pitState.currentIdx];
    const wheel = document.querySelector(`.wheel-target[data-wheel="${wheelId}"]`);
    if (wheel) wheel.classList.add('ready');
    // Tiny sound
    playTick();
  }

  function handleWheelClick(wheel) {
    if (!pitState.running) return;
    if (!wheel.classList.contains('ready')) {
      // Wrong wheel — add penalty
      const result = document.getElementById('pitResult');
      result.textContent = '+0.5s penalty — wrong wheel!';
      result.className = 'pit-result bad';
      pitState.startTime -= 500;
      playError();
      return;
    }
    wheel.classList.remove('ready');
    wheel.classList.add('done');
    pitState.currentIdx++;
    playTick();
    if (pitState.currentIdx >= pitState.sequence.length) {
      endPitStop();
    } else {
      lightUpNextWheel();
    }
  }

  function endPitStop() {
    pitState.running = false;
    clearInterval(pitState.intervalId);
    const elapsed = (performance.now() - pitState.startTime) / 1000;
    const timer = document.getElementById('pitTimer');
    const result = document.getElementById('pitResult');
    const bestEl = document.getElementById('pitBest');
    const btn = document.getElementById('pitStartBtn');

    timer.textContent = elapsed.toFixed(2);

    // Verdict
    if (elapsed < 2.5) {
      result.textContent = `🏆 ${elapsed.toFixed(2)}s — F1 mechanic territory.`;
      result.className = 'pit-result win';
      playSuccess();
    } else if (elapsed < 4) {
      result.textContent = `${elapsed.toFixed(2)}s — solid stop. Decent crew.`;
      result.className = 'pit-result meh';
    } else if (elapsed < 8) {
      result.textContent = `${elapsed.toFixed(2)}s — that's a Friday practice stop.`;
      result.className = 'pit-result meh';
    } else {
      result.textContent = `${elapsed.toFixed(2)}s — your driver lost three places.`;
      result.className = 'pit-result bad';
    }

    // Save best
    const stored = parseFloat(localStorage.getItem(PIT_BEST_KEY) || '999');
    if (elapsed < stored) {
      localStorage.setItem(PIT_BEST_KEY, elapsed.toFixed(2));
      if (bestEl) bestEl.textContent = elapsed.toFixed(2);
    }
    if (btn) btn.disabled = false;
  }

  /* ============================================
     SOUND — Web Audio API synth
     ============================================ */
  let audioCtx = null;
  function getAudioCtx() {
    if (!audioCtx) {
      try {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) {
        audioCtx = null;
      }
    }
    return audioCtx;
  }

  function playTick() {
    const ctx = getAudioCtx();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'square';
    osc.frequency.value = 1200;
    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  }

  function playError() {
    const ctx = getAudioCtx();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(280, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    osc.start();
    osc.stop(ctx.currentTime + 0.25);
  }

  function playSuccess() {
    const ctx = getAudioCtx();
    if (!ctx) return;
    [600, 800, 1200].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.08, ctx.currentTime + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.08 + 0.18);
      osc.start(ctx.currentTime + i * 0.08);
      osc.stop(ctx.currentTime + i * 0.08 + 0.2);
    });
  }

  // Engine rev — short F1 V6 turbo simulation
  function playEngineRev() {
    const ctx = getAudioCtx();
    if (!ctx) return;
    const duration = 0.6;
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    osc1.type = 'sawtooth';
    osc2.type = 'square';
    osc1.frequency.setValueAtTime(80, ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(420, ctx.currentTime + 0.2);
    osc1.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + duration);
    osc2.frequency.setValueAtTime(160, ctx.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(820, ctx.currentTime + 0.2);
    osc2.frequency.exponentialRampToValueAtTime(360, ctx.currentTime + duration);
    filter.type = 'lowpass';
    filter.frequency.value = 2000;
    filter.Q.value = 6;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc1.start();
    osc2.start();
    osc1.stop(ctx.currentTime + duration);
    osc2.stop(ctx.currentTime + duration);
  }

  /* ============================================
     STANDINGS
     ============================================ */
  function renderStandings() {
    const list = document.getElementById('standingsList');
    if (!list) return;
    const max = F1_DATA.standings.drivers[0].pts;
    list.innerHTML = F1_DATA.standings.drivers.map((row, i) => {
      const driver = F1_DATA.getDriver(row.id);
      const team = F1_DATA.getTeam(driver.team);
      const widthPct = (row.pts / max) * 100;
      return `
        <div class="standing-row ${i < 3 ? 'top-3' : ''}" style="--team-c: ${team.color};" data-driver="${driver.id}">
          <div class="standing-pos">P${row.pos}</div>
          ${helmetSVG(team, driver.num, 32).replace('width="32" height="32"', 'class="standing-helmet"')}
          <div>
            <div class="standing-name">${driver.name.toUpperCase()}</div>
            <div class="standing-team">${team.name} · #${driver.num}</div>
          </div>
          <div class="standing-bar">
            <div class="standing-bar-fill" style="width: ${widthPct}%; background: ${team.color};"></div>
          </div>
          <div class="standing-pts">${row.pts} <span class="unit">PTS</span></div>
        </div>
      `;
    }).join('');

    list.querySelectorAll('.standing-row').forEach(row => {
      row.style.cursor = 'pointer';
      row.addEventListener('click', () => openDriverModal(row.dataset.driver));
    });
  }

  /* ============================================
     HISTORY
     ============================================ */
  function renderHistory() {
    const wrap = document.getElementById('historyWrap');
    if (!wrap) return;
    wrap.innerHTML = F1_DATA.history.map(h => `
      <article class="history-item">
        <div class="history-year">${h.year}</div>
        <div class="history-content">
          <div class="history-event">${h.event}</div>
          <div class="history-detail">${h.detail}</div>
        </div>
      </article>
    `).join('');
  }

  /* ============================================
     GLOSSARY
     ============================================ */
  function renderGlossary(filter = '') {
    const grid = document.getElementById('glossaryGrid');
    if (!grid) return;
    const filtered = F1_DATA.glossary
      .filter(g => !filter || g.term.toLowerCase().includes(filter.toLowerCase()) || g.def.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => a.term.localeCompare(b.term));
    grid.innerHTML = filtered.length ? filtered.map(g => `
      <article class="gloss-card">
        <div class="gloss-term">${g.term}</div>
        <div class="gloss-def">${g.def}</div>
      </article>
    `).join('') : '<p style="font-family: var(--serif); font-style: italic; color: var(--mid);">No matching terms — try another search.</p>';
  }

  function initGlossarySearch() {
    const input = document.getElementById('glossarySearch');
    if (!input) return;
    input.addEventListener('input', () => renderGlossary(input.value));
  }

  /* ============================================
     TEAM PICKER MODAL
     ============================================ */
  function renderTeamPicker() {
    const grid = document.getElementById('teamPickGrid');
    if (!grid) return;
    grid.innerHTML = F1_DATA.teams.map(t => `
      <div class="team-pick" data-team="${t.id}" style="--pick-c: ${t.color};">
        <div class="team-pick-swatch"></div>
        <div class="team-pick-name">${t.name.toUpperCase()}</div>
      </div>
    `).join('');
    grid.querySelectorAll('.team-pick').forEach(p => {
      p.addEventListener('click', () => {
        setStoredTeam(p.dataset.team);
        closeModal('teamModal');
        // Re-render dependent views
        renderTeams();
        renderDrivers(document.querySelector('.dfilter-btn.active')?.dataset.filter || 'all');
        renderStandings();
        renderAero(document.querySelector('.aero-toggle-btn.active')?.dataset.mode || 'z');
        const visual = document.getElementById('heroVisual');
        if (visual) visual.innerHTML = f1CarSVG();
        playEngineRev();
      });
    });
  }

  /* ============================================
     TEAM DETAIL MODAL
     ============================================ */
  function openTeamModal(teamId) {
    const team = F1_DATA.getTeam(teamId);
    if (!team) return;
    const content = document.getElementById('teamDetailContent');
    const drivers = F1_DATA.driversFor(teamId);
    content.innerHTML = `
      <button class="modal-close" data-close="teamDetailModal">×</button>
      <div class="team-modal-header" style="--team-c: ${team.color};">
        <div>
          <div class="modal-eyebrow" style="color: ${team.color};">${team.fullName}</div>
          <h2 class="team-modal-name">${team.name.toUpperCase()}</h2>
        </div>
        <div class="team-modal-titles" style="color: ${team.color};">
          ${team.titles}
          <span class="sub">Constructors Titles</span>
        </div>
      </div>
      <div class="team-modal-story">${team.story}</div>
      <div class="team-modal-moment">"${team.iconicMoment}"</div>
      <div class="team-modal-stats">
        <div class="aero-spec"><div class="l">Race Wins</div><div class="v" style="color: ${team.color};">${team.stats.wins}</div></div>
        <div class="aero-spec"><div class="l">Podiums</div><div class="v" style="color: ${team.color};">${team.stats.podiums}</div></div>
        <div class="aero-spec"><div class="l">Pole Positions</div><div class="v" style="color: ${team.color};">${team.stats.poles}</div></div>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-bottom: 20px;">
        <div class="aero-spec"><div class="l">Base</div><div class="v" style="font-size: 14px;">${team.base}</div></div>
        <div class="aero-spec"><div class="l">Engine</div><div class="v" style="font-size: 14px;">${team.engine}</div></div>
        <div class="aero-spec"><div class="l">Principal</div><div class="v" style="font-size: 14px;">${team.principal}</div></div>
      </div>
      <div class="team-modal-drivers">
        ${drivers.map(d => `
          <div class="team-driver-mini" style="--team-c: ${team.color};" data-driver="${d.id}">
            <span class="num" style="color: ${team.color};">${d.num}</span>
            <div class="info">
              <div class="name">${d.name.toUpperCase()} <span class="flag">${d.flag}</span></div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    // re-bind close
    content.querySelector('.modal-close').addEventListener('click', () => closeModal('teamDetailModal'));
    content.querySelectorAll('.team-driver-mini').forEach(dm => {
      dm.style.cursor = 'pointer';
      dm.addEventListener('click', () => {
        closeModal('teamDetailModal');
        setTimeout(() => openDriverModal(dm.dataset.driver), 250);
      });
    });
    openModal('teamDetailModal');
    playEngineRev();
  }

  /* ============================================
     DRIVER DETAIL MODAL
     ============================================ */
  function openDriverModal(driverId) {
    const driver = F1_DATA.getDriver(driverId);
    if (!driver) return;
    const team = F1_DATA.getTeam(driver.team);
    const content = document.getElementById('driverDetailContent');
    content.innerHTML = `
      <button class="modal-close" data-close="driverDetailModal">×</button>
      <div class="driver-modal-inner" style="--team-c: ${team.color};">
        <div class="driver-modal-side">
          ${helmetSVG(team, driver.num, 180).replace('width="180" height="180"', 'class="driver-modal-helmet"')}
          <div class="num" style="color: ${team.color};">${driver.num}</div>
        </div>
        <div>
          <div class="modal-eyebrow" style="color: ${team.color};">${driver.flag} ${driver.country} · DEBUTED ${driver.debut}</div>
          <h2 class="driver-modal-name">${driver.name.toUpperCase()}</h2>
          <div class="driver-modal-team">${team.name.toUpperCase()}</div>
          <div class="driver-modal-stats">
            <div class="dms-item"><div class="v" style="color: ${team.color};">${driver.titles}</div><div class="l">Titles</div></div>
            <div class="dms-item"><div class="v" style="color: ${team.color};">${driver.wins}</div><div class="l">Wins</div></div>
            <div class="dms-item"><div class="v" style="color: ${team.color};">${driver.age}</div><div class="l">Age</div></div>
            <div class="dms-item"><div class="v" style="color: ${team.color};">${new Date().getFullYear() - driver.debut}</div><div class="l">Years</div></div>
          </div>
          <div class="driver-modal-fact">${driver.fact}</div>
        </div>
      </div>
    `;
    content.querySelector('.modal-close').addEventListener('click', () => closeModal('driverDetailModal'));
    openModal('driverDetailModal');
    playEngineRev();
  }

  /* ============================================
     MODAL HELPERS
     ============================================ */
  function openModal(id) {
    const m = document.getElementById(id);
    if (m) m.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(id) {
    const m = document.getElementById(id);
    if (m) m.classList.remove('open');
    document.body.style.overflow = '';
  }

  function initModals() {
    // close on overlay click
    document.querySelectorAll('.modal-overlay').forEach(o => {
      o.addEventListener('click', (e) => {
        if (e.target === o) closeModal(o.id);
      });
    });
    // close buttons
    document.querySelectorAll('[data-close]').forEach(btn => {
      btn.addEventListener('click', () => closeModal(btn.dataset.close));
    });
    // ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.open').forEach(m => closeModal(m.id));
      }
    });

    // nav team pill
    const pill = document.getElementById('navTeamPill');
    if (pill) pill.addEventListener('click', () => openModal('teamModal'));

    // close own button on team picker
    const closeBtn = document.getElementById('teamModalClose');
    if (closeBtn) closeBtn.addEventListener('click', () => closeModal('teamModal'));
  }

  /* ============================================
     NAV — scroll active + mobile toggle
     ============================================ */
  function initNav() {
    const links = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => observer.observe(s));

    // Mobile toggle
    const toggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    if (toggle && navLinks) {
      toggle.addEventListener('click', () => {
        toggle.classList.toggle('open');
        navLinks.classList.toggle('open');
      });
      navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          toggle.classList.remove('open');
          navLinks.classList.remove('open');
        });
      });
    }
  }

  /* ============================================
     SCROLL REVEAL
     ============================================ */
  function initScrollReveal() {
    const items = document.querySelectorAll('.history-item, .brief-card, .team-card, .driver-card, .track-card, .tyre-card, .gloss-card, .flag-card, .standing-row');
    items.forEach(el => el.classList.add('reveal'));

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });

    items.forEach(el => obs.observe(el));
  }

  /* ============================================
     KEYBOARD SHORTCUTS — Easter egg
     ============================================ */
  function initKeyboardShortcuts() {
    let buffer = '';
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      buffer += e.key.toLowerCase();
      buffer = buffer.slice(-10);
      // 'lights' triggers a quick flash sequence
      if (buffer.endsWith('lights')) {
        flashLights();
        buffer = '';
      }
    });
  }

  function flashLights() {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position: fixed; inset: 0; z-index: 99999; pointer-events: none; background: var(--ink); display: flex; align-items: center; justify-content: center; gap: 16px;';
    for (let i = 0; i < 5; i++) {
      const dot = document.createElement('div');
      dot.style.cssText = 'width: 40px; height: 40px; border-radius: 50%; background: #1A1A1A; transition: background 0.1s;';
      overlay.appendChild(dot);
    }
    document.body.appendChild(overlay);
    const dots = overlay.querySelectorAll('div');
    let i = 0;
    const interval = setInterval(() => {
      if (i < 5) {
        dots[i].style.background = '#FF0000';
        playTick();
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          dots.forEach(d => d.style.background = '#1A1A1A');
          playEngineRev();
          setTimeout(() => overlay.remove(), 300);
        }, 600);
      }
    }, 700);
  }

  /* ============================================
     INIT
     ============================================ */
  document.addEventListener('DOMContentLoaded', () => {
    // Apply stored team theme
    const stored = getStoredTeam();
    if (stored) applyTeamTheme(stored);

    initHero();
    renderTeams();
    renderDrivers();
    initDriverFilters();
    renderTracks();
    initTrackTabs();
    renderWeekendTimeline();
    initAeroToggle();
    renderStrategyBuilder();
    initPitStop();
    renderStandings();
    renderHistory();
    renderGlossary();
    initGlossarySearch();
    renderTeamPicker();
    initModals();
    initNav();
    initScrollReveal();
    initKeyboardShortcuts();

    // First-visit nudge: if no team picked, gentle prompt after 4 seconds
    if (!getStoredTeam()) {
      setTimeout(() => {
        const pill = document.getElementById('navTeamPill');
        if (pill) {
          pill.style.borderColor = 'var(--neon)';
          pill.style.boxShadow = '0 0 0 4px rgba(186, 255, 57, 0.15)';
          setTimeout(() => {
            pill.style.boxShadow = '';
          }, 2500);
        }
      }, 4000);
    }
  });

})();
