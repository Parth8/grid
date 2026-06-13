/* =====================================================
   F1 2026 — All data lives here.
   Updated for 2026 season: 11 teams, 22 drivers, 22 races
   ===================================================== */

const F1_DATA = {

  // ========== TEAMS ==========
  teams: [
    {
      id: 'mclaren',
      name: 'McLaren',
      fullName: 'McLaren Mastercard F1 Team',
      base: 'Woking, UK',
      chassis: 'MCL40',
      engine: 'Mercedes',
      principal: 'Andrea Stella',
      founded: 1963,
      titles: 10,
      lastTitle: 2025,
      color: '#FF8000',
      colorDark: '#CC6600',
      drivers: ['lando-norris', 'oscar-piastri'],
      story: 'Defending constructors champions. Bruce McLaren founded the team in 1963 and was killed testing his own car in 1970. The papaya orange livery is a love letter to him.',
      iconicMoment: 'Norris wins 2025 World Championship after a season-long battle with teammate Piastri.',
      stats: { wins: 192, podiums: 525, poles: 161 }
    },
    {
      id: 'ferrari',
      name: 'Ferrari',
      fullName: 'Scuderia Ferrari HP',
      base: 'Maranello, Italy',
      chassis: '678',
      engine: 'Ferrari',
      principal: 'Frédéric Vasseur',
      founded: 1929,
      titles: 16,
      lastTitle: 2008,
      color: '#E80020',
      colorDark: '#B30019',
      drivers: ['charles-leclerc', 'lewis-hamilton'],
      story: 'The only team to have raced in every F1 season since 1950. Hamilton joined in 2025 — the most significant transfer in modern F1 history.',
      iconicMoment: 'Hamilton + Leclerc — seven championships and Monaco royalty in red.',
      stats: { wins: 248, podiums: 826, poles: 252 }
    },
    {
      id: 'redbull',
      name: 'Red Bull',
      fullName: 'Oracle Red Bull Racing',
      base: 'Milton Keynes, UK',
      chassis: 'RB22',
      engine: 'Red Bull Ford',
      principal: 'Laurent Mekies',
      founded: 2005,
      titles: 6,
      lastTitle: 2023,
      color: '#3671C6',
      colorDark: '#2B5BA0',
      drivers: ['max-verstappen', 'isack-hadjar'],
      story: 'Energy drinks team turned dominant force. Built their own engine for 2026 in partnership with Ford. Verstappen took 4 consecutive titles 2021-2024.',
      iconicMoment: 'Verstappen passes Hamilton on the final lap of the 2021 Abu Dhabi finale.',
      stats: { wins: 124, podiums: 290, poles: 105 }
    },
    {
      id: 'mercedes',
      name: 'Mercedes',
      fullName: 'Mercedes-AMG PETRONAS F1 Team',
      base: 'Brackley, UK',
      chassis: 'W17',
      engine: 'Mercedes',
      principal: 'Toto Wolff',
      founded: 1954,
      titles: 8,
      lastTitle: 2021,
      color: '#27F4D2',
      colorDark: '#1FB89C',
      drivers: ['george-russell', 'kimi-antonelli'],
      story: 'Dominated the hybrid era (2014-2021) with 8 constructors titles in a row. Currently leading 2026 standings — back at the front.',
      iconicMoment: '2026 — Antonelli wins 5 consecutive races, leads championship. The Mercedes engine reborn.',
      stats: { wins: 132, podiums: 309, poles: 142 }
    },
    {
      id: 'aston-martin',
      name: 'Aston Martin',
      fullName: 'Aston Martin Aramco F1 Team',
      base: 'Silverstone, UK',
      chassis: 'AMR26',
      engine: 'Honda',
      principal: 'Andy Cowell',
      founded: 2021,
      titles: 0,
      lastTitle: null,
      color: '#006F62',
      colorDark: '#004F45',
      drivers: ['fernando-alonso', 'lance-stroll'],
      story: 'Lawrence Stroll bought the team in 2018, rebranded as Aston Martin in 2021. Building a state-of-the-art factory and signed Adrian Newey, the greatest F1 designer ever.',
      iconicMoment: 'Newey arrives in 2025. The British racing green is loading up for a title push.',
      stats: { wins: 0, podiums: 9, poles: 1 }
    },
    {
      id: 'alpine',
      name: 'Alpine',
      fullName: 'BWT Alpine F1 Team',
      base: 'Enstone, UK',
      chassis: 'A526',
      engine: 'Mercedes',
      principal: 'Flavio Briatore',
      founded: 2021,
      titles: 2,
      lastTitle: 2006,
      color: '#0093CC',
      colorDark: '#006B96',
      drivers: ['pierre-gasly', 'franco-colapinto'],
      story: 'Formerly Renault. Switched to Mercedes engines for 2026 after a difficult Renault era. The team that won with Alonso in 2005 and 2006.',
      iconicMoment: '2005 — Fernando Alonso wins his first title here. The "Crashgate" scandal of 2008 still haunts.',
      stats: { wins: 21, podiums: 105, poles: 20 }
    },
    {
      id: 'williams',
      name: 'Williams',
      fullName: 'Atlassian Williams Racing',
      base: 'Grove, UK',
      chassis: 'FW48',
      engine: 'Mercedes',
      principal: 'James Vowles',
      founded: 1977,
      titles: 9,
      lastTitle: 1997,
      color: '#1868DB',
      colorDark: '#0F4FA8',
      drivers: ['carlos-sainz', 'alex-albon'],
      story: 'Founded by Sir Frank Williams. The most successful independent constructor in F1 history. Sold to Dorilton Capital in 2020, now systematically being rebuilt by James Vowles.',
      iconicMoment: 'Hill, Mansell, Prost, Senna, Hakkinen — all drove for Williams in the 80s and 90s.',
      stats: { wins: 114, podiums: 313, poles: 128 }
    },
    {
      id: 'racing-bulls',
      name: 'Racing Bulls',
      fullName: 'Visa Cash App Racing Bulls F1 Team',
      base: 'Faenza, Italy',
      chassis: 'VCARB02',
      engine: 'Red Bull Ford',
      principal: 'Alan Permane',
      founded: 2006,
      titles: 0,
      lastTitle: null,
      color: '#6692FF',
      colorDark: '#4470DD',
      drivers: ['liam-lawson', 'arvid-lindblad'],
      story: 'Red Bull’s junior team. Previously Toro Rosso, AlphaTauri. Where Verstappen, Vettel, Sainz, Gasly, and Tsunoda all started. The proving ground.',
      iconicMoment: 'Sebastian Vettel wins the 2008 Italian GP in the wet — Toro Rosso’s only F1 victory.',
      stats: { wins: 1, podiums: 4, poles: 1 }
    },
    {
      id: 'haas',
      name: 'Haas',
      fullName: 'MoneyGram Haas F1 Team',
      base: 'Kannapolis, USA',
      chassis: 'VF-26',
      engine: 'Ferrari',
      principal: 'Ayao Komatsu',
      founded: 2016,
      titles: 0,
      lastTitle: null,
      color: '#B6BABD',
      colorDark: '#8A8E91',
      drivers: ['esteban-ocon', 'oliver-bearman'],
      story: 'The only American team on the grid. Owned by Gene Haas, the machine tools billionaire. Punches above its weight on a tight budget.',
      iconicMoment: 'Kevin Magnussen passes Lewis Hamilton through Eau Rouge at 280 km/h at Spa 2022.',
      stats: { wins: 0, podiums: 0, poles: 1 }
    },
    {
      id: 'audi',
      name: 'Audi',
      fullName: 'Audi F1 Team',
      base: 'Hinwil, Switzerland',
      chassis: 'R26',
      engine: 'Audi',
      principal: 'Mattia Binotto',
      founded: 1993,
      titles: 0,
      lastTitle: null,
      color: '#52E252',
      colorDark: '#3AB23A',
      drivers: ['nico-hulkenberg', 'gabriel-bortoleto'],
      story: 'Audi’s full works debut — taking over the Sauber operation. The four rings finally in F1. Ex-Ferrari boss Binotto runs the show.',
      iconicMoment: '2026 — Audi’s first race. The biggest German manufacturer entry since BMW left in 2009.',
      stats: { wins: 1, podiums: 27, poles: 1 }
    },
    {
      id: 'cadillac',
      name: 'Cadillac',
      fullName: 'Cadillac F1 Team',
      base: 'Fishers, Indiana, USA',
      chassis: 'C01',
      engine: 'Ferrari',
      principal: 'Graeme Lowdon',
      founded: 2026,
      titles: 0,
      lastTitle: null,
      color: '#000000',
      colorDark: '#1A1A1A',
      drivers: ['valtteri-bottas', 'sergio-perez'],
      story: 'F1’s 11th team — General Motors finally on the grid. Asymmetrical half-black-half-white livery unveiled at the Super Bowl. The American dream made real.',
      iconicMoment: 'March 2026, Melbourne — Cadillac’s first F1 Grand Prix. A new chapter for American motorsport.',
      stats: { wins: 0, podiums: 0, poles: 0 }
    }
  ],

  // ========== DRIVERS ==========
  drivers: [
    { id: 'max-verstappen', name: 'Max Verstappen', short: 'VER', num: 3, country: 'NL', flag: '🇳🇱', team: 'redbull', titles: 4, wins: 65, age: 28, dob: '1997-09-30', debut: 2015, fact: 'Youngest race winner in F1 history at 18.' },
    { id: 'isack-hadjar', name: 'Isack Hadjar', short: 'HAD', num: 6, country: 'FR', flag: '🇫🇷', team: 'redbull', titles: 0, wins: 0, age: 21, dob: '2004-09-28', debut: 2025, fact: 'Promoted to Red Bull after a podium at the 2025 Dutch GP.' },
    { id: 'lando-norris', name: 'Lando Norris', short: 'NOR', num: 1, country: 'GB', flag: '🇬🇧', team: 'mclaren', titles: 1, wins: 11, age: 26, dob: '1999-11-13', debut: 2019, fact: 'Reigning World Champion. Carries #1 in 2026.' },
    { id: 'oscar-piastri', name: 'Oscar Piastri', short: 'PIA', num: 81, country: 'AU', flag: '🇦🇺', team: 'mclaren', titles: 0, wins: 7, age: 25, dob: '2001-04-06', debut: 2023, fact: 'Won F3 and F2 championships back-to-back as a rookie in each.' },
    { id: 'charles-leclerc', name: 'Charles Leclerc', short: 'LEC', num: 16, country: 'MC', flag: '🇲🇨', team: 'ferrari', titles: 0, wins: 8, age: 28, dob: '1997-10-16', debut: 2018, fact: 'Has eight F1 wins, all in Ferrari red. Long-time Maranello golden boy.' },
    { id: 'lewis-hamilton', name: 'Lewis Hamilton', short: 'HAM', num: 44, country: 'GB', flag: '🇬🇧', team: 'ferrari', titles: 7, wins: 105, age: 41, dob: '1985-01-07', debut: 2007, fact: 'Tied with Schumacher on 7 titles. Most race wins, poles, and podiums ever.' },
    { id: 'george-russell', name: 'George Russell', short: 'RUS', num: 63, country: 'GB', flag: '🇬🇧', team: 'mercedes', titles: 0, wins: 5, age: 28, dob: '1998-02-15', debut: 2019, fact: 'Won the 2026 Australian GP — opener of the new era.' },
    { id: 'kimi-antonelli', name: 'Kimi Antonelli', short: 'ANT', num: 12, country: 'IT', flag: '🇮🇹', team: 'mercedes', titles: 0, wins: 6, age: 19, dob: '2006-08-25', debut: 2025, fact: 'Hamilton’s replacement. Leading the 2026 championship with 5 consecutive wins.' },
    { id: 'fernando-alonso', name: 'Fernando Alonso', short: 'ALO', num: 14, country: 'ES', flag: '🇪🇸', team: 'aston-martin', titles: 2, wins: 32, age: 44, dob: '1981-07-29', debut: 2001, fact: 'The oldest active driver. Won championships in 2005 and 2006 with Renault.' },
    { id: 'lance-stroll', name: 'Lance Stroll', short: 'STR', num: 18, country: 'CA', flag: '🇨🇦', team: 'aston-martin', titles: 0, wins: 0, age: 27, dob: '1998-10-29', debut: 2017, fact: 'Three podiums to his name. Father Lawrence owns Aston Martin.' },
    { id: 'pierre-gasly', name: 'Pierre Gasly', short: 'GAS', num: 10, country: 'FR', flag: '🇫🇷', team: 'alpine', titles: 0, wins: 1, age: 30, dob: '1996-02-07', debut: 2017, fact: 'Won the 2020 Italian GP in a Toro Rosso — one of the great upsets.' },
    { id: 'franco-colapinto', name: 'Franco Colapinto', short: 'COL', num: 43, country: 'AR', flag: '🇦🇷', team: 'alpine', titles: 0, wins: 0, age: 23, dob: '2003-05-27', debut: 2024, fact: 'First Argentine F1 driver since Gastón Mazzacane in 2001.' },
    { id: 'alex-albon', name: 'Alex Albon', short: 'ALB', num: 23, country: 'TH', flag: '🇹🇭', team: 'williams', titles: 0, wins: 0, age: 30, dob: '1996-03-23', debut: 2019, fact: 'British-Thai. Twice on the F1 podium with Red Bull in 2020.' },
    { id: 'carlos-sainz', name: 'Carlos Sainz', short: 'SAI', num: 55, country: 'ES', flag: '🇪🇸', team: 'williams', titles: 0, wins: 4, age: 31, dob: '1994-09-01', debut: 2015, fact: 'Son of double WRC champion Carlos Sainz Sr. Won the 2024 Australian GP days after surgery.' },
    { id: 'arvid-lindblad', name: 'Arvid Lindblad', short: 'LIN', num: 41, country: 'GB', flag: '🇬🇧', team: 'racing-bulls', titles: 0, wins: 0, age: 18, dob: '2007-08-08', debut: 2026, fact: 'The only 2026 rookie. British prodigy with Swedish-Indian heritage.' },
    { id: 'liam-lawson', name: 'Liam Lawson', short: 'LAW', num: 30, country: 'NZ', flag: '🇳🇿', team: 'racing-bulls', titles: 0, wins: 0, age: 24, dob: '2002-02-11', debut: 2023, fact: 'New Zealander. Got two races at Red Bull in early 2025 before being swapped back.' },
    { id: 'esteban-ocon', name: 'Esteban Ocon', short: 'OCO', num: 31, country: 'FR', flag: '🇫🇷', team: 'haas', titles: 0, wins: 1, age: 29, dob: '1996-09-17', debut: 2016, fact: 'Won the chaotic 2021 Hungarian GP in an Alpine.' },
    { id: 'oliver-bearman', name: 'Oliver Bearman', short: 'BEA', num: 87, country: 'GB', flag: '🇬🇧', team: 'haas', titles: 0, wins: 0, age: 20, dob: '2005-05-08', debut: 2024, fact: 'Subbed for Sainz at Ferrari aged 18 with zero notice, scored points.' },
    { id: 'nico-hulkenberg', name: 'Nico Hülkenberg', short: 'HUL', num: 27, country: 'DE', flag: '🇩🇪', team: 'audi', titles: 0, wins: 0, age: 38, dob: '1987-08-19', debut: 2010, fact: 'Got his first F1 podium at Silverstone 2025 — his 239th race start.' },
    { id: 'gabriel-bortoleto', name: 'Gabriel Bortoleto', short: 'BOR', num: 5, country: 'BR', flag: '🇧🇷', team: 'audi', titles: 0, wins: 0, age: 21, dob: '2004-10-14', debut: 2025, fact: 'Won F3 and F2 in consecutive years. The next Brazilian hope.' },
    { id: 'valtteri-bottas', name: 'Valtteri Bottas', short: 'BOT', num: 77, country: 'FI', flag: '🇫🇮', team: 'cadillac', titles: 0, wins: 10, age: 36, dob: '1989-08-28', debut: 2013, fact: 'Hamilton’s wingman at Mercedes 2017-2021. Now Cadillac’s lead driver.' },
    { id: 'sergio-perez', name: 'Sergio Pérez', short: 'PER', num: 11, country: 'MX', flag: '🇲🇽', team: 'cadillac', titles: 0, wins: 6, age: 36, dob: '1990-01-26', debut: 2011, fact: 'Mexican hero. Two-time championship runner-up with Red Bull.' }
  ],

  // ========== TRACKS (2026 Calendar - 22 races) ==========
  tracks: [
    { round: 1, name: 'Albert Park', country: 'Australia', city: 'Melbourne', date: 'Mar 6-8', length: 5.278, turns: 14, lapRecord: '1:19.813', recordHolder: 'Norris', type: 'street', dna: 'Fast and flowing. Springtime in Melbourne, season opener.' },
    { round: 2, name: 'Shanghai Intl', country: 'China', city: 'Shanghai', date: 'Mar 13-15', length: 5.451, turns: 16, lapRecord: '1:32.238', recordHolder: 'Hamilton', type: 'permanent', dna: 'The spiral. Turn 1 is one of F1’s most unique corners.', sprint: true },
    { round: 3, name: 'Suzuka', country: 'Japan', city: 'Suzuka', date: 'Mar 27-29', length: 5.807, turns: 18, lapRecord: '1:30.983', recordHolder: 'Hamilton', type: 'permanent', dna: 'F1’s only figure-eight layout. Drivers’ favourite. Cherry blossoms.' },
    { round: 4, name: 'Miami Intl', country: 'USA', city: 'Miami', date: 'May 1-3', length: 5.412, turns: 19, lapRecord: '1:29.708', recordHolder: 'Verstappen', type: 'street', dna: 'Hard Rock Stadium. Champagne and yacht parties.', sprint: true },
    { round: 5, name: 'Circuit Gilles Villeneuve', country: 'Canada', city: 'Montreal', date: 'May 22-24', length: 4.361, turns: 14, lapRecord: '1:13.078', recordHolder: 'Bottas', type: 'street', dna: 'The Wall of Champions. Chicane after chicane.' },
    { round: 6, name: 'Monaco', country: 'Monaco', city: 'Monte Carlo', date: 'Jun 5-7', length: 3.337, turns: 19, lapRecord: '1:12.909', recordHolder: 'Verstappen', type: 'street', dna: 'The jewel. F1’s slowest, most prestigious race. Started 1929.' },
    { round: 7, name: 'Circuit de Barcelona', country: 'Spain', city: 'Barcelona', date: 'Jun 12-14', length: 4.657, turns: 16, lapRecord: '1:16.330', recordHolder: 'Verstappen', type: 'permanent', dna: 'The teams know this track better than any other. Test track.' },
    { round: 8, name: 'Red Bull Ring', country: 'Austria', city: 'Spielberg', date: 'Jun 26-28', length: 4.318, turns: 10, lapRecord: '1:05.619', recordHolder: 'Sainz', type: 'permanent', dna: 'Short and high-altitude. Set in the Styrian mountains.' },
    { round: 9, name: 'Silverstone', country: 'UK', city: 'Silverstone', date: 'Jul 3-5', length: 5.891, turns: 18, lapRecord: '1:27.097', recordHolder: 'Verstappen', type: 'permanent', dna: 'F1’s spiritual home. First ever World Championship race, 1950.', sprint: true },
    { round: 10, name: 'Spa-Francorchamps', country: 'Belgium', city: 'Spa', date: 'Jul 17-19', length: 7.004, turns: 19, lapRecord: '1:44.701', recordHolder: 'Hamilton', type: 'permanent', dna: 'Eau Rouge. Raidillon. The longest, most beautiful track on the calendar.' },
    { round: 11, name: 'Hungaroring', country: 'Hungary', city: 'Budapest', date: 'Jul 24-26', length: 4.381, turns: 14, lapRecord: '1:16.627', recordHolder: 'Russell', type: 'permanent', dna: 'Twisty Monaco-without-walls. Track position is everything.' },
    { round: 12, name: 'Zandvoort', country: 'Netherlands', city: 'Zandvoort', date: 'Aug 21-23', length: 4.259, turns: 14, lapRecord: '1:11.097', recordHolder: 'Russell', type: 'permanent', dna: 'Banked corners, sand dunes, an orange army for Verstappen.', sprint: true },
    { round: 13, name: 'Monza', country: 'Italy', city: 'Monza', date: 'Sep 4-6', length: 5.793, turns: 11, lapRecord: '1:21.046', recordHolder: 'Barrichello', type: 'permanent', dna: 'The Temple of Speed. Lowest downforce, highest top speeds.' },
    { round: 14, name: 'Madrid', country: 'Spain', city: 'Madrid', date: 'Sep 11-13', length: 5.474, turns: 22, lapRecord: 'NEW', recordHolder: 'TBD', type: 'street', dna: 'Brand new for 2026. IFEMA convention centre street circuit. Replaces Imola.' },
    { round: 15, name: 'Baku City', country: 'Azerbaijan', city: 'Baku', date: 'Sep 25-27', length: 6.003, turns: 20, lapRecord: '1:43.009', recordHolder: 'Leclerc', type: 'street', dna: 'Tight castle section, world’s longest F1 straight at over 2.2km.' },
    { round: 16, name: 'Marina Bay', country: 'Singapore', city: 'Singapore', date: 'Oct 9-11', length: 4.940, turns: 19, lapRecord: '1:34.486', recordHolder: 'Russell', type: 'street', dna: 'Night race. Brutal humidity. The hardest physical race of the year.', sprint: true },
    { round: 17, name: 'COTA', country: 'USA', city: 'Austin', date: 'Oct 23-25', length: 5.513, turns: 20, lapRecord: '1:36.169', recordHolder: 'Leclerc', type: 'permanent', dna: 'Turn 1 — uphill blind crest. Borrows corners from every great circuit.' },
    { round: 18, name: 'Autódromo Rodríguez', country: 'Mexico', city: 'Mexico City', date: 'Oct 30-Nov 1', length: 4.304, turns: 17, lapRecord: '1:17.774', recordHolder: 'Bottas', type: 'permanent', dna: 'Highest altitude race. Stadium section through old baseball stands.' },
    { round: 19, name: 'Interlagos', country: 'Brazil', city: 'São Paulo', date: 'Nov 6-8', length: 4.309, turns: 15, lapRecord: '1:10.540', recordHolder: 'Bottas', type: 'permanent', dna: 'Senna’s home. Anti-clockwise. Always delivers drama.', sprint: true },
    { round: 20, name: 'Las Vegas Strip', country: 'USA', city: 'Las Vegas', date: 'Nov 19-21', length: 6.201, turns: 17, lapRecord: '1:34.876', recordHolder: 'Russell', type: 'street', dna: 'Saturday-night street race past the Sphere and the Bellagio.' },
    { round: 21, name: 'Lusail Intl', country: 'Qatar', city: 'Lusail', date: 'Nov 27-29', length: 5.419, turns: 16, lapRecord: '1:22.384', recordHolder: 'Norris', type: 'permanent', dna: 'High-speed sweepers. Brutal on the body and the tyres.', sprint: true },
    { round: 22, name: 'Yas Marina', country: 'Abu Dhabi', city: 'Abu Dhabi', date: 'Dec 4-6', length: 5.281, turns: 16, lapRecord: '1:25.637', recordHolder: 'Norris', type: 'permanent', dna: 'Season finale. Twilight start, fireworks finish.' }
  ],

  // ========== HISTORY ==========
  history: [
    { year: 1950, event: 'F1 begins', detail: 'Giuseppe Farina wins the first World Championship race at Silverstone in an Alfa Romeo.' },
    { year: 1958, event: 'Constructors’ Cup', detail: 'Vanwall wins the first Constructors’ Championship. Now teams compete too, not just drivers.' },
    { year: 1968, event: 'Sponsorship era', detail: 'Lotus paints their car in Gold Leaf cigarette colours. Money pours in.' },
    { year: 1978, event: 'Ground effect revolution', detail: 'Lotus 79 uses shaped underbody tunnels to glue itself to the track. Everyone copies.' },
    { year: 1988, event: 'Senna vs Prost', detail: 'McLaren-Honda wins 15 of 16 races. The greatest rivalry in motorsport begins.' },
    { year: 1994, event: 'F1’s darkest weekend', detail: 'Senna and Ratzenberger die at Imola. F1 safety transforms forever.' },
    { year: 2000, event: 'Schumacher era', detail: 'Michael Schumacher wins his first Ferrari title. Five in a row will follow.' },
    { year: 2007, event: 'Hamilton arrives', detail: 'Lewis Hamilton’s rookie season. Misses the title by one point. The future king.' },
    { year: 2014, event: 'Hybrid era begins', detail: '1.6L V6 turbo-hybrids replace V8s. Mercedes dominates the next 8 years.' },
    { year: 2021, event: 'Abu Dhabi 2021', detail: 'Verstappen passes Hamilton on the final lap for his first title. F1’s most contested finish.' },
    { year: 2022, event: 'Ground effect returns', detail: 'New regulations bring back floor tunnels. Goal: closer racing.' },
    { year: 2023, event: 'Cost cap fines', detail: 'Red Bull fined and have wind tunnel time cut for breaching the 2021 budget cap.' },
    { year: 2025, event: 'Hamilton to Ferrari', detail: 'The transfer of the decade. Seven-time champion in red.' },
    { year: 2025, event: 'McLaren back on top', detail: 'Norris wins the championship. McLaren wins back-to-back constructors titles.' },
    { year: 2026, event: 'The biggest reset', detail: 'New engines, active aero, sustainable fuels, 11th team (Cadillac), Audi arrives. Total reinvention.' }
  ],

  // ========== GLOSSARY ==========
  glossary: [
    { term: 'Active Aero', def: 'New for 2026 — front and rear wing flaps that open on straights to reduce drag, close in corners for grip. Replaces DRS.' },
    { term: 'Apex', def: 'The innermost geometric point of a corner. Hitting the apex means taking the optimal racing line.' },
    { term: 'Backmarker', def: 'A car at the back of the field being lapped by the leaders. Must yield when shown blue flags.' },
    { term: 'Box', def: 'Radio code for "come into the pit lane." From the German "boxenstopp."' },
    { term: 'Chicane', def: 'A tight sequence of alternating corners designed to slow cars down.' },
    { term: 'Clean Air', def: 'Undisturbed airflow ahead of the car. Critical for downforce.' },
    { term: 'Delta', def: 'Time gap to a reference lap or another car. A positive delta means slower.' },
    { term: 'Dirty Air', def: 'Turbulent air behind a car that reduces the following car’s downforce and grip.' },
    { term: 'Downforce', def: 'Aerodynamic force pushing the car into the track. More downforce = more cornering grip, more drag.' },
    { term: 'DRS', def: 'Drag Reduction System. 2011-2025. Removed for 2026 in favour of Active Aero.' },
    { term: 'ERS', def: 'Energy Recovery System. Captures kinetic and (until 2026) heat energy, redeploys it as power.' },
    { term: 'Flat Spot', def: 'A worn patch on a tyre from locking up under braking. Causes vibration.' },
    { term: 'Formation Lap', def: 'The lap before the race start. Cars weave to warm tyres and brakes.' },
    { term: 'Graining', def: 'When tyre rubber tears off and re-sticks to the surface, reducing grip.' },
    { term: 'Halo', def: 'The titanium safety hoop above the cockpit, introduced 2018. Withstands 12 tonnes of force.' },
    { term: 'Lockup', def: 'A wheel stops spinning under braking while the car keeps moving. Smoke, flat spots.' },
    { term: 'Marbles', def: 'Loose rubber pieces off the racing line. Disastrous for grip if you drive over them.' },
    { term: 'MGU-K', def: 'Motor Generator Unit — Kinetic. Recovers energy from braking, redeploys it as torque.' },
    { term: 'Overcut', def: 'Strategy of staying out longer than a rival before pitting, using fast laps on an empty track.' },
    { term: 'Parc Fermé', def: 'After qualifying, cars are impounded. No major setup changes allowed before the race.' },
    { term: 'Pit Wall', def: 'Where team strategists sit during the race making real-time calls.' },
    { term: 'Porpoising', def: 'Violent vertical bouncing caused by ground effect aerodynamics at speed.' },
    { term: 'Q1, Q2, Q3', def: 'The three knockout segments of qualifying — 5 cars eliminated after each of Q1 and Q2.' },
    { term: 'Safety Car', def: 'A Mercedes AMG GT that leads the field at reduced speed during dangerous conditions.' },
    { term: 'Slipstream', def: 'Following closely to reduce drag. Also called "tow." Essential for overtaking on straights.' },
    { term: 'Stewards', def: 'The officials who enforce rules during a race weekend and issue penalties.' },
    { term: 'Sustainable Fuels', def: 'New for 2026 — 100% advanced sustainable fuel, made from non-food bio matter or atmospheric carbon.' },
    { term: 'Undercut', def: 'Pitting before a rival to gain advantage from fresh tyres. The most common strategic move.' },
    { term: 'Understeer', def: 'Front tyres lose grip and the car pushes wide. The driver turns the wheel but the nose doesn’t follow.' },
    { term: 'Oversteer', def: 'Rear tyres lose grip and the back swings out. Can lead to a spin if not caught.' },
    { term: 'VSC', def: 'Virtual Safety Car. All cars slow to a delta time via GPS without a physical car leading.' },
    { term: 'X-Mode / Z-Mode', def: '2026 jargon. X-Mode = high power on straights, Z-Mode = override / push-to-pass.' }
  ],

  // ========== 2026 STANDINGS (Live as of Monaco GP) ==========
  standings: {
    drivers: [
      { pos: 1, id: 'kimi-antonelli', pts: 156 },
      { pos: 2, id: 'lewis-hamilton', pts: 90 },
      { pos: 3, id: 'george-russell', pts: 88 },
      { pos: 4, id: 'charles-leclerc', pts: 75 },
      { pos: 5, id: 'oscar-piastri', pts: 60 },
      { pos: 6, id: 'lando-norris', pts: 58 },
      { pos: 7, id: 'max-verstappen', pts: 43 },
      { pos: 8, id: 'isack-hadjar', pts: 29 },
      { pos: 9, id: 'liam-lawson', pts: 26 },
      { pos: 10, id: 'pierre-gasly', pts: 26 }
    ]
  }
};

// Helper: get driver by id
F1_DATA.getDriver = function(id) {
  return this.drivers.find(d => d.id === id);
};

// Helper: get team by id
F1_DATA.getTeam = function(id) {
  return this.teams.find(t => t.id === id);
};

// Helper: drivers per team
F1_DATA.driversFor = function(teamId) {
  return this.drivers.filter(d => d.team === teamId);
};
