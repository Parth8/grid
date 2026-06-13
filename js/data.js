/* ============================================================
   GRID — F1 2026 reference data
   ============================================================ */

const F1 = {

  /* ---- TEAMS (11) ---- */
  teams: [
    { id:'mclaren', name:'McLaren', full:'McLaren Mastercard F1 Team', base:'Woking, UK', chassis:'MCL40', engine:'Mercedes', principal:'Andrea Stella', founded:1963, titles:10, color:'#FF8000',
      drivers:['lando-norris','oscar-piastri'],
      story:'Founded by New Zealander Bruce McLaren in 1963. The papaya orange livery honours him after his death testing his own car in 1970. McLaren are the defending Constructors&rsquo; Champions and Norris took the Drivers&rsquo; title in 2025 after a season-long fight with teammate Piastri.',
      pull:'Norris carries #1 into 2026 as reigning World Champion.' },

    { id:'ferrari', name:'Ferrari', full:'Scuderia Ferrari HP', base:'Maranello, Italy', chassis:'678', engine:'Ferrari', principal:'Frédéric Vasseur', founded:1929, titles:16, color:'#E80020',
      drivers:['charles-leclerc','lewis-hamilton'],
      story:'The only team to have raced every Formula 1 season since 1950. Enzo Ferrari founded the racing arm in 1929; the road car business came later to fund the team. Hamilton arrived in 2025 — the most consequential transfer in modern F1.',
      pull:'Seven championships and Monaco royalty, both painted red.' },

    { id:'redbull', name:'Red Bull', full:'Oracle Red Bull Racing', base:'Milton Keynes, UK', chassis:'RB22', engine:'Red Bull Ford', principal:'Laurent Mekies', founded:2005, titles:6, color:'#3671C6',
      drivers:['max-verstappen','isack-hadjar'],
      story:'Bought the failing Jaguar team in 2005 and turned an energy-drinks brand into F1&rsquo;s dominant force. Four straight Verstappen titles from 2021. Built their own engine in partnership with Ford for the 2026 era.',
      pull:'The kid passed Hamilton on the final lap of Abu Dhabi 2021.' },

    { id:'mercedes', name:'Mercedes', full:'Mercedes-AMG PETRONAS F1 Team', base:'Brackley, UK', chassis:'W17', engine:'Mercedes', principal:'Toto Wolff', founded:1954, titles:8, color:'#27F4D2',
      drivers:['george-russell','kimi-antonelli'],
      story:'Eight consecutive Constructors&rsquo; titles in the first hybrid era (2014-2021). After three transitional years they are leading the 2026 championship — Antonelli won five races in a row in May.',
      pull:'The Mercedes engine reborn. Antonelli, 19, runs the table.' },

    { id:'aston-martin', name:'Aston Martin', full:'Aston Martin Aramco F1 Team', base:'Silverstone, UK', chassis:'AMR26', engine:'Honda', principal:'Andy Cowell', founded:2021, titles:0, color:'#006F62',
      drivers:['fernando-alonso','lance-stroll'],
      story:'Lawrence Stroll bought Force India in 2018, rebranded as Aston Martin in 2021. New state-of-the-art factory, new Honda engine partnership, and Adrian Newey — F1&rsquo;s greatest designer — joined in 2025.',
      pull:'Stocked up on talent for a title push. Watching closely.' },

    { id:'alpine', name:'Alpine', full:'BWT Alpine F1 Team', base:'Enstone, UK', chassis:'A526', engine:'Mercedes', principal:'Flavio Briatore', founded:2021, titles:2, color:'#0093CC',
      drivers:['pierre-gasly','franco-colapinto'],
      story:'Renault rebadged as Alpine in 2021. Won championships in 2005 and 2006 with Alonso. Switched to Mercedes power units in 2026 after a difficult Renault engine era. Briatore is back in charge.',
      pull:'Two titles. One Crashgate scandal. Always entertaining.' },

    { id:'williams', name:'Williams', full:'Atlassian Williams Racing', base:'Grove, UK', chassis:'FW48', engine:'Mercedes', principal:'James Vowles', founded:1977, titles:9, color:'#1868DB',
      drivers:['carlos-sainz','alex-albon'],
      story:'Founded by Sir Frank Williams. The most successful independent constructor in F1 history. Sold to Dorilton Capital in 2020 and now being systematically rebuilt by ex-Mercedes strategist James Vowles.',
      pull:'Hill, Mansell, Prost, Senna and Hakkinen all drove here.' },

    { id:'racing-bulls', name:'Racing Bulls', full:'Visa Cash App Racing Bulls F1 Team', base:'Faenza, Italy', chassis:'VCARB02', engine:'Red Bull Ford', principal:'Alan Permane', founded:2006, titles:0, color:'#6692FF',
      drivers:['liam-lawson','arvid-lindblad'],
      story:'Red Bull&rsquo;s junior team. Previously Minardi → Toro Rosso → AlphaTauri → Racing Bulls. Where Verstappen, Vettel, Sainz, Gasly and Tsunoda all began their F1 careers.',
      pull:'The proving ground. Lindblad is the next product.' },

    { id:'haas', name:'Haas', full:'MoneyGram Haas F1 Team', base:'Kannapolis, USA', chassis:'VF-26', engine:'Ferrari', principal:'Ayao Komatsu', founded:2016, titles:0, color:'#B6BABD',
      drivers:['esteban-ocon','oliver-bearman'],
      story:'The grid&rsquo;s only American constructor (until Cadillac), owned by machine-tools billionaire Gene Haas. Runs on a fraction of the top teams&rsquo; budgets and routinely punches above its weight.',
      pull:'Frugal. Pragmatic. Occasionally on the podium.' },

    { id:'audi', name:'Audi', full:'Audi F1 Team', base:'Hinwil, Switzerland', chassis:'R26', engine:'Audi', principal:'Mattia Binotto', founded:1993, titles:0, color:'#52E252',
      drivers:['nico-hulkenberg','gabriel-bortoleto'],
      story:'Audi&rsquo;s full works debut, taking over the Sauber operation as both chassis and engine supplier. The four rings on the F1 grid for the first time. Ex-Ferrari Team Principal Mattia Binotto runs the show.',
      pull:'The biggest German manufacturer entry since BMW left in 2009.' },

    { id:'cadillac', name:'Cadillac', full:'Cadillac F1 Team', base:'Fishers, Indiana', chassis:'C01', engine:'Ferrari', principal:'Graeme Lowdon', founded:2026, titles:0, color:'#0B0B0D',
      drivers:['valtteri-bottas','sergio-perez'],
      story:'F1&rsquo;s eleventh team — General Motors finally on the grid after a years-long approval process. Asymmetrical half-black-half-white livery unveiled during Super Bowl LX. Plans its own engine for 2029.',
      pull:'The grid grew. The American dream made real.' }
  ],

  /* ---- DRIVERS (22) ---- */
  drivers: [
    { id:'max-verstappen',   name:'Max Verstappen',   short:'VER', num:3,  country:'NL', flag:'🇳🇱', team:'redbull',       titles:4, wins:65,  age:28, dob:'1997-09-30', debut:2015, fact:'Youngest race winner in F1 history at 18 years, 228 days. Four straight World titles 2021-2024.' },
    { id:'isack-hadjar',     name:'Isack Hadjar',     short:'HAD', num:6,  country:'FR', flag:'🇫🇷', team:'redbull',       titles:0, wins:0,   age:21, dob:'2004-09-28', debut:2025, fact:'Promoted to Red Bull after his maiden podium at the 2025 Dutch GP for Racing Bulls.' },
    { id:'lando-norris',     name:'Lando Norris',     short:'NOR', num:1,  country:'GB', flag:'🇬🇧', team:'mclaren',       titles:1, wins:11,  age:26, dob:'1999-11-13', debut:2019, fact:'Reigning World Champion. Carries #1 in 2026. Joined McLaren in 2019 and never left.' },
    { id:'oscar-piastri',    name:'Oscar Piastri',    short:'PIA', num:81, country:'AU', flag:'🇦🇺', team:'mclaren',       titles:0, wins:7,   age:25, dob:'2001-04-06', debut:2023, fact:'Won F3 and F2 championships back-to-back as a rookie in each. Lost the 2025 title fight by 2 points to teammate Norris.' },
    { id:'charles-leclerc',  name:'Charles Leclerc',  short:'LEC', num:16, country:'MC', flag:'🇲🇨', team:'ferrari',       titles:0, wins:8,   age:28, dob:'1997-10-16', debut:2018, fact:'Monaco native. Eight wins, all in Ferrari red. Long-time Maranello golden boy with a contract through 2029.' },
    { id:'lewis-hamilton',   name:'Lewis Hamilton',   short:'HAM', num:44, country:'GB', flag:'🇬🇧', team:'ferrari',       titles:7, wins:105, age:41, dob:'1985-01-07', debut:2007, fact:'Tied with Schumacher on seven titles. Holds the records for most wins (105), poles (104) and podiums.' },
    { id:'george-russell',   name:'George Russell',   short:'RUS', num:63, country:'GB', flag:'🇬🇧', team:'mercedes',      titles:0, wins:5,   age:28, dob:'1998-02-15', debut:2019, fact:'Won the season-opening 2026 Australian GP — the first race of the new era.' },
    { id:'kimi-antonelli',   name:'Kimi Antonelli',   short:'ANT', num:12, country:'IT', flag:'🇮🇹', team:'mercedes',      titles:0, wins:6,   age:19, dob:'2006-08-25', debut:2025, fact:'Hamilton&rsquo;s replacement at Mercedes. Leading the 2026 championship after five consecutive wins.' },
    { id:'fernando-alonso',  name:'Fernando Alonso',  short:'ALO', num:14, country:'ES', flag:'🇪🇸', team:'aston-martin',  titles:2, wins:32,  age:44, dob:'1981-07-29', debut:2001, fact:'The oldest active driver. World Champion 2005-2006 with Renault. Still racing 25 years after his debut.' },
    { id:'lance-stroll',     name:'Lance Stroll',     short:'STR', num:18, country:'CA', flag:'🇨🇦', team:'aston-martin',  titles:0, wins:0,   age:27, dob:'1998-10-29', debut:2017, fact:'Three career podiums. His father Lawrence owns the team. Has been in F1 since age 18.' },
    { id:'pierre-gasly',     name:'Pierre Gasly',     short:'GAS', num:10, country:'FR', flag:'🇫🇷', team:'alpine',        titles:0, wins:1,   age:30, dob:'1996-02-07', debut:2017, fact:'Won the 2020 Italian Grand Prix for AlphaTauri — one of F1&rsquo;s greatest upset victories.' },
    { id:'franco-colapinto', name:'Franco Colapinto', short:'COL', num:43, country:'AR', flag:'🇦🇷', team:'alpine',        titles:0, wins:0,   age:23, dob:'2003-05-27', debut:2024, fact:'First Argentine F1 driver since Gastón Mazzacane in 2001. Inherited Doohan&rsquo;s seat mid-2025.' },
    { id:'alex-albon',       name:'Alex Albon',       short:'ALB', num:23, country:'TH', flag:'🇹🇭', team:'williams',      titles:0, wins:0,   age:30, dob:'1996-03-23', debut:2019, fact:'British-Thai. Two podiums with Red Bull in 2020. Fifth season with Williams in 2026.' },
    { id:'carlos-sainz',     name:'Carlos Sainz',     short:'SAI', num:55, country:'ES', flag:'🇪🇸', team:'williams',      titles:0, wins:4,   age:31, dob:'1994-09-01', debut:2015, fact:'Son of two-time WRC champion Carlos Sainz Sr. Won the 2024 Australian GP days after appendix surgery.' },
    { id:'arvid-lindblad',   name:'Arvid Lindblad',   short:'LIN', num:41, country:'GB', flag:'🇬🇧', team:'racing-bulls',  titles:0, wins:0,   age:18, dob:'2007-08-08', debut:2026, fact:'The only 2026 rookie. British prodigy with a Swedish father and Indian-heritage mother.' },
    { id:'liam-lawson',      name:'Liam Lawson',      short:'LAW', num:30, country:'NZ', flag:'🇳🇿', team:'racing-bulls',  titles:0, wins:0,   age:24, dob:'2002-02-11', debut:2023, fact:'Promoted to Red Bull for early 2025 then demoted back to Racing Bulls. Still on the team.' },
    { id:'esteban-ocon',     name:'Esteban Ocon',     short:'OCO', num:31, country:'FR', flag:'🇫🇷', team:'haas',          titles:0, wins:1,   age:29, dob:'1996-09-17', debut:2016, fact:'Won the chaotic 2021 Hungarian GP in an Alpine. New to Haas for 2025.' },
    { id:'oliver-bearman',   name:'Oliver Bearman',   short:'BEA', num:87, country:'GB', flag:'🇬🇧', team:'haas',          titles:0, wins:0,   age:20, dob:'2005-05-08', debut:2024, fact:'Subbed in at Ferrari for Sainz aged 18, no notice, scored points. Now full-time at Haas.' },
    { id:'nico-hulkenberg',  name:'Nico Hülkenberg',  short:'HUL', num:27, country:'DE', flag:'🇩🇪', team:'audi',          titles:0, wins:0,   age:38, dob:'1987-08-19', debut:2010, fact:'Took his first F1 podium at the 2025 British GP on his 239th start. Record for longest wait.' },
    { id:'gabriel-bortoleto',name:'Gabriel Bortoleto',short:'BOR', num:5,  country:'BR', flag:'🇧🇷', team:'audi',          titles:0, wins:0,   age:21, dob:'2004-10-14', debut:2025, fact:'Won F3 and F2 as a rookie in consecutive years. The next great Brazilian hope.' },
    { id:'valtteri-bottas',  name:'Valtteri Bottas',  short:'BOT', num:77, country:'FI', flag:'🇫🇮', team:'cadillac',      titles:0, wins:10,  age:36, dob:'1989-08-28', debut:2013, fact:'Hamilton&rsquo;s teammate at Mercedes 2017-2021. Sat out 2025. Cadillac&rsquo;s lead driver in 2026.' },
    { id:'sergio-perez',     name:'Sergio Pérez',     short:'PER', num:11, country:'MX', flag:'🇲🇽', team:'cadillac',      titles:0, wins:6,   age:36, dob:'1990-01-26', debut:2011, fact:'Two-time championship runner-up with Red Bull. Mexican national hero. Returned for Cadillac.' }
  ],

  /* ---- TRACKS (22) ---- */
  tracks: [
    { round:1,  name:'Albert Park',           short:'Australia',     country:'Australia',   region:'oceania', city:'Melbourne',     date:'Mar 6-8',     length:5.278, turns:14, lapRecord:'1:19.813' },
    { round:2,  name:'Shanghai Intl',         short:'China',         country:'China',       region:'asia',    city:'Shanghai',      date:'Mar 13-15',   length:5.451, turns:16, lapRecord:'1:32.238', sprint:true },
    { round:3,  name:'Suzuka',                short:'Japan',         country:'Japan',       region:'asia',    city:'Suzuka',        date:'Mar 27-29',   length:5.807, turns:18, lapRecord:'1:30.983' },
    { round:4,  name:'Miami Intl',            short:'Miami',         country:'USA',         region:'americas',city:'Miami',         date:'May 1-3',     length:5.412, turns:19, lapRecord:'1:29.708', sprint:true },
    { round:5,  name:'Circuit Gilles V.',     short:'Canada',        country:'Canada',      region:'americas',city:'Montreal',      date:'May 22-24',   length:4.361, turns:14, lapRecord:'1:13.078' },
    { round:6,  name:'Monaco',                short:'Monaco',        country:'Monaco',      region:'europe',  city:'Monte Carlo',   date:'Jun 5-7',     length:3.337, turns:19, lapRecord:'1:12.909' },
    { round:7,  name:'Catalunya',             short:'Spain',         country:'Spain',       region:'europe',  city:'Barcelona',     date:'Jun 12-14',   length:4.657, turns:16, lapRecord:'1:16.330' },
    { round:8,  name:'Red Bull Ring',         short:'Austria',       country:'Austria',     region:'europe',  city:'Spielberg',     date:'Jun 26-28',   length:4.318, turns:10, lapRecord:'1:05.619' },
    { round:9,  name:'Silverstone',           short:'Britain',       country:'UK',          region:'europe',  city:'Silverstone',   date:'Jul 3-5',     length:5.891, turns:18, lapRecord:'1:27.097', sprint:true },
    { round:10, name:'Spa-Francorchamps',     short:'Belgium',       country:'Belgium',     region:'europe',  city:'Spa',           date:'Jul 17-19',   length:7.004, turns:19, lapRecord:'1:44.701' },
    { round:11, name:'Hungaroring',           short:'Hungary',       country:'Hungary',     region:'europe',  city:'Budapest',      date:'Jul 24-26',   length:4.381, turns:14, lapRecord:'1:16.627' },
    { round:12, name:'Zandvoort',             short:'Netherlands',   country:'Netherlands', region:'europe',  city:'Zandvoort',     date:'Aug 21-23',   length:4.259, turns:14, lapRecord:'1:11.097', sprint:true },
    { round:13, name:'Monza',                 short:'Italy',         country:'Italy',       region:'europe',  city:'Monza',         date:'Sep 4-6',     length:5.793, turns:11, lapRecord:'1:21.046' },
    { round:14, name:'Madrid',                short:'Madrid',        country:'Spain',       region:'europe',  city:'Madrid',        date:'Sep 11-13',   length:5.474, turns:22, lapRecord:'NEW' },
    { round:15, name:'Baku City',             short:'Azerbaijan',    country:'Azerbaijan',  region:'asia',    city:'Baku',          date:'Sep 25-27',   length:6.003, turns:20, lapRecord:'1:43.009' },
    { round:16, name:'Marina Bay',            short:'Singapore',     country:'Singapore',   region:'asia',    city:'Singapore',     date:'Oct 9-11',    length:4.940, turns:19, lapRecord:'1:34.486', sprint:true },
    { round:17, name:'COTA',                  short:'Austin',        country:'USA',         region:'americas',city:'Austin',        date:'Oct 23-25',   length:5.513, turns:20, lapRecord:'1:36.169' },
    { round:18, name:'Hermanos Rodríguez',    short:'Mexico',        country:'Mexico',      region:'americas',city:'Mexico City',   date:'Oct 30-Nov 1',length:4.304, turns:17, lapRecord:'1:17.774' },
    { round:19, name:'Interlagos',            short:'Brazil',        country:'Brazil',      region:'americas',city:'São Paulo',     date:'Nov 6-8',     length:4.309, turns:15, lapRecord:'1:10.540', sprint:true },
    { round:20, name:'Las Vegas Strip',       short:'Las Vegas',     country:'USA',         region:'americas',city:'Las Vegas',     date:'Nov 19-21',   length:6.201, turns:17, lapRecord:'1:34.876' },
    { round:21, name:'Lusail Intl',           short:'Qatar',         country:'Qatar',       region:'asia',    city:'Lusail',        date:'Nov 27-29',   length:5.419, turns:16, lapRecord:'1:22.384', sprint:true },
    { round:22, name:'Yas Marina',            short:'Abu Dhabi',     country:'UAE',         region:'asia',    city:'Abu Dhabi',     date:'Dec 4-6',     length:5.281, turns:16, lapRecord:'1:25.637' }
  ],

  /* ---- 2026 vs 2025 — what changed (compressed) ---- */
  changes: [
    { key:'Aerodynamics',       sub:'Drag management', old:'DRS — one zone, one car at a time', new:'Active Aero — wings open on straights, close in corners. Every car, every lap.' },
    { key:'Power Unit',         sub:'Engine + battery split', old:'~80% combustion / 20% electric', new:'50% combustion / 50% electric. Triple the battery deployment.' },
    { key:'Fuel',               sub:'What burns', old:'E10 — 10% bio-component petrol', new:'100% advanced sustainable fuel — drop-in road-relevant.' },
    { key:'Car size',           sub:'Chassis dimensions', old:'≈798 kg, 2000 mm wide, 5630 mm long', new:'≈768 kg, 1900 mm wide, ~5400 mm long. Smaller everywhere.' },
    { key:'Tactical boost',     sub:'Push-to-pass', old:'DRS button on straights', new:'Manual Override — extra electrical deployment available tactically.' },
    { key:'Grid size',          sub:'Number of teams', old:'10 teams, 20 cars', new:'11 teams, 22 cars. Cadillac joins. Audi takes over Sauber as a works entry.' },
    { key:'Calendar',           sub:'Races and venues', old:'24 rounds incl. Imola, Bahrain, Saudi', new:'22 rounds — Madrid debuts. Bahrain and Saudi cancelled mid-season.' },
    { key:'Safety',             sub:'Driver protection', old:'Halo + 12-tonne survival cell', new:'Halo + reinforced cell (+23% roll-hoop load) + multi-stage front impact structure.' }
  ],

  /* ---- ANATOMY callouts ---- */
  anatomy: [
    { id:1, x:128, y:90,  name:'Front wing',     desc:'Splits incoming air. Outwash directs flow around the tyres. Now with movable upper flap.' },
    { id:2, x:280, y:50,  name:'Halo',           desc:'Titanium hoop above the cockpit. Withstands 12 tonnes — the weight of a London bus.' },
    { id:3, x:280, y:122, name:'Cockpit',        desc:'Carbon-fibre survival cell. Driver sits semi-reclined behind a fire-resistant wall.' },
    { id:4, x:420, y:60,  name:'Air intake',     desc:'Feeds the V6 turbo engine. The roar you hear on a flyby comes from here.' },
    { id:5, x:430, y:122, name:'Sidepod',        desc:'Houses the radiators that cool the engine, battery and gearbox.' },
    { id:6, x:560, y:115, name:'Floor',          desc:'Where most of the downforce is generated. Ground-effect tunnels suck the car to the track.' },
    { id:7, x:670, y:50,  name:'Rear wing',      desc:'Provides corner grip. Upper flap rotates flat on straights to cut drag (Active Aero).' },
    { id:8, x:670, y:175, name:'Wheel',          desc:'Pirelli slicks. ~330 mm wide rears. Heated in tyre blankets before going on.' }
  ],

  /* ---- RACE WEEKEND sessions ---- */
  weekend: {
    friday: [
      { code:'FP1',   name:'Practice 1', duration:'60 min', desc:'First chance for drivers on the circuit this weekend. Teams gather baseline data and try new parts. Often unrepresentative of true pace.' },
      { code:'FP2',   name:'Practice 2', duration:'60 min', desc:'The most useful Friday session. Race-simulation runs, long stints on different tyres. Engineers stay up overnight analysing it.' },
      { code:'SQ',    name:'Sprint Quali', duration:'~45 min', desc:'Only on Sprint weekends — replaces FP2. Sets the grid for Saturday&rsquo;s Sprint race.', sprintOnly:true }
    ],
    saturday: [
      { code:'FP3',   name:'Practice 3', duration:'60 min', desc:'Final tune-up before qualifying. Soft-tyre runs mimicking Q3 conditions. Drivers chase one clean lap.', notSprint:true },
      { code:'SP',    name:'Sprint', duration:'~30 min', desc:'A shorter race with its own grid and points to top 8. Only at six designated Sprint weekends per year.', sprintOnly:true },
      { code:'Q',     name:'Qualifying', duration:'Q1 18m · Q2 15m · Q3 12m', desc:'Decides the starting grid. Three knockout segments — 5 drivers out after Q1, another 5 after Q2. Fastest 10 fight for pole in Q3.' }
    ],
    sunday: [
      { code:'GP',    name:'Grand Prix', duration:'~305 km · 90 min', desc:'The main event. Around 50-70 laps depending on circuit. Tyre stops, strategy, drama, glory. Winner takes 25 points, P10 takes 1.' }
    ]
  },

  /* ---- TYRES ---- */
  tyres: [
    { name:'Soft',   code:'C',  color:'#E10600', pace:9.5, life:2.5, use:'Qualifying. Short race stints.' },
    { name:'Medium', code:'C',  color:'#F4D72E', pace:7.5, life:6.0, use:'The default race compound.' },
    { name:'Hard',   code:'C',  color:'#FFFFFF', pace:5.5, life:9.0, use:'Long stints. Hot races.' },
    { name:'Inter',  code:'I',  color:'#1E9E47', pace:4.0, life:7.0, use:'Light rain. Damp track.' },
    { name:'Wet',    code:'W',  color:'#1F6FD0', pace:3.0, life:8.0, use:'Heavy rain. Standing water.' }
  ],

  /* ---- FLAGS ---- */
  flags: [
    { name:'Green',         color:'#1E9E47', desc:'Track clear. Normal racing resumes.' },
    { name:'Yellow',        color:'#F4D72E', desc:'Danger ahead. No overtaking. Single = caution; double = be ready to stop.' },
    { name:'Red',           color:'#E10600', desc:'Session stopped. All cars back to the pits.' },
    { name:'Blue',          color:'#1F6FD0', desc:'Lapped car — let the leader through. Three ignored, penalty.' },
    { name:'Yellow + Red',  color:'split-yr', desc:'Slippery surface. Oil, water or debris on track.' },
    { name:'Chequered',     color:'chequered', desc:'Session or race over. Crossing the line ends the day.' },
    { name:'Black',         color:'#14130E', desc:'You are disqualified. Shown with the driver&rsquo;s car number.' },
    { name:'Black + White', color:'split-bw', desc:'Unsportsmanlike warning. Like a yellow card in football.' }
  ],

  /* ---- STANDINGS through Monaco ---- */
  standings: [
    { pos:1,  id:'kimi-antonelli',   pts:156 },
    { pos:2,  id:'lewis-hamilton',   pts:90  },
    { pos:3,  id:'george-russell',   pts:88  },
    { pos:4,  id:'charles-leclerc',  pts:75  },
    { pos:5,  id:'oscar-piastri',    pts:60  },
    { pos:6,  id:'lando-norris',     pts:58  },
    { pos:7,  id:'max-verstappen',   pts:43  },
    { pos:8,  id:'isack-hadjar',     pts:29  },
    { pos:9,  id:'liam-lawson',      pts:26  },
    { pos:10, id:'pierre-gasly',     pts:26  }
  ],

  /* ---- HISTORY ERAS (compressed — 5 eras, not 15 events) ---- */
  eras: [
    { range:'1950 — 1979', name:'The pioneer era',     desc:'Front-engined gentlemen racers give way to mid-engined British garagistes. Fangio, Clark, Stewart, Lauda. No seat belts until 1972.', stat:{ k:'First champion', v:'Giuseppe Farina, Alfa Romeo, 1950' } },
    { range:'1980 — 1993', name:'Turbo and tobacco',   desc:'Ground-effect, turbocharging, Senna vs Prost. Money pours in via cigarette sponsors. McLaren-Honda wins 15 of 16 races in 1988.', stat:{ k:'Defining rivalry', v:'Senna 41 wins · Prost 51 wins' } },
    { range:'1994 — 2008', name:'Schumacher and safety', desc:'Senna&rsquo;s death at Imola in 1994 transforms safety. Schumacher dominates with Ferrari. Five titles in a row, 2000-2004.', stat:{ k:'Iconic stat', v:'Schumacher: 91 wins, 7 titles' } },
    { range:'2009 — 2021', name:'Hybrid hegemony',     desc:'KERS, DRS, then the 1.6L turbo-hybrid era from 2014. Mercedes wins eight constructors&rsquo; titles in a row.', stat:{ k:'Closer', v:'Abu Dhabi 2021 — final lap title.' } },
    { range:'2022 — now',  name:'Ground effect, then a reset', desc:'Underfloor tunnels return for closer racing. Red Bull then McLaren dominate. 2026 brings the biggest regulation reset in F1 history.', stat:{ k:'2025 champion', v:'Lando Norris · McLaren' } }
  ],

  /* ---- GLOSSARY (compressed, alphabetised) ---- */
  glossary: [
    { term:'Active Aero',    def:'New for 2026. Movable wing flaps that open on straights to reduce drag and close in corners for grip. Replaces DRS.' },
    { term:'Apex',           def:'The innermost geometric point of a corner. Hitting the apex means taking the fastest line.' },
    { term:'Backmarker',     def:'A car at the back of the field being lapped. Must yield to the leaders when shown blue flags.' },
    { term:'Box',            def:'Radio code for &ldquo;come into the pit lane&rdquo; — from the German <em>Boxenstopp</em>.' },
    { term:'Chicane',        def:'A tight sequence of alternating corners that slows cars down.' },
    { term:'Clean Air',      def:'Undisturbed airflow ahead of the car. Critical for downforce.' },
    { term:'Delta',          def:'Time gap to a reference lap or rival car. Positive delta = slower.' },
    { term:'Dirty Air',      def:'Turbulent air behind a leading car that reduces grip for the car behind.' },
    { term:'Downforce',      def:'Aerodynamic force pushing the car into the track. More = more cornering grip but also more drag.' },
    { term:'DRS',            def:'Drag Reduction System. 2011 — 2025. Removed for 2026 in favour of Active Aero.' },
    { term:'ERS',            def:'Energy Recovery System. Captures kinetic energy under braking, redeploys it as power.' },
    { term:'Flat Spot',      def:'A worn patch on a tyre from locking up under braking. Causes vibration.' },
    { term:'Formation Lap',  def:'The lap before the race start. Cars weave to warm tyres and brakes.' },
    { term:'Graining',       def:'When tyre rubber tears off and re-sticks to the surface, reducing grip.' },
    { term:'Halo',           def:'The titanium safety hoop above the cockpit, introduced 2018.' },
    { term:'Lockup',         def:'A wheel stops spinning under braking while the car keeps moving. Smoke, flat spots.' },
    { term:'Marbles',        def:'Loose rubber pieces off the racing line. Disastrous if you drive over them.' },
    { term:'MGU-K',          def:'Motor Generator Unit — Kinetic. Recovers braking energy, redeploys as torque.' },
    { term:'Overcut',        def:'Strategy of staying out longer than a rival before pitting.' },
    { term:'Parc Fermé',     def:'After qualifying, cars are impounded. No major setup changes before the race.' },
    { term:'Pit Wall',       def:'Where team strategists sit during the race making real-time calls.' },
    { term:'Porpoising',     def:'Violent vertical bouncing caused by ground-effect aerodynamics at speed.' },
    { term:'Q1, Q2, Q3',     def:'The three knockout segments of qualifying. 5 eliminated each in Q1 and Q2.' },
    { term:'Safety Car',     def:'A Mercedes AMG GT that leads the field at reduced speed during dangerous conditions.' },
    { term:'Slipstream',     def:'Following closely to reduce drag. Also called &ldquo;tow&rdquo;.' },
    { term:'Stewards',       def:'The officials who enforce rules during a race weekend and issue penalties.' },
    { term:'Sustainable Fuels', def:'New for 2026 — 100% advanced sustainable fuel. F1&rsquo;s Net Zero by 2030 push.' },
    { term:'Undercut',       def:'Pitting before a rival to gain advantage from fresh tyres.' },
    { term:'Understeer',     def:'Front tyres lose grip — the car pushes wide despite the steering input.' },
    { term:'Oversteer',      def:'Rear tyres lose grip — the back swings out. Can lead to a spin.' },
    { term:'VSC',            def:'Virtual Safety Car. All cars slow to a fixed delta time via GPS.' },
    { term:'X-Mode / Z-Mode',def:'2026 jargon. X-Mode = low-drag straight mode; Z-Mode = high-grip corner mode.' }
  ],

  /* ---- HELPERS ---- */
  getDriver(id) { return this.drivers.find(d => d.id === id); },
  getTeam(id)   { return this.teams.find(t => t.id === id); },
  driversFor(teamId) { return this.drivers.filter(d => d.team === teamId); }
};
