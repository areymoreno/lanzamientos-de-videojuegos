export class Constantes {
  static readonly STAR_GAMES = [
    '007 First Light',
    'Animal Crossing: New Horizons - Nintendo Switch 2 Edition',
    'Ace Combat 8: Wings of Theve',
    'Control Resonant',
    'Diablo IV: Lord of Hatred',
    'Forza Horizon 6',
    'Gears of War: E-Day',
    'Grand Theft Auto VI',
    'LEGO Batman: Legacy of the Dark Knight',
    'Lords of the Fallen II',
    'Marvel 1943: Rise of Hydra',
    'Marvel Tokon: Fighting Souls',
    "Marvel's Wolverine",
    'Nioh 3',
    'Phantom Blade 0',
    'Pokémon Champions',
    'Pokémon Pokopia',
    'Prince of Persia: The Sands of Time',
    'Professor Layton and the New World of Steam',
    'Pragmata',
    'Yakuza Kiwami 3',
    'Yakuza Kiwami 3 & Dark Ties',
    'Resident Evil Requiem',
    'Star Wars: Galactic Racer',
    'The Duskbloods',
    'Tomb Raider: Legacy of Atlantis',
    'Tomb Raider: Catalyst',
    'Warhammer 40,000: Boltgun 2',
    'Warhammer 40,000: Dawn of War IV',
    'World of Warcraft: Midnight',
  ];

  static readonly ACTUAL_YEAR = [
    { start: '2026-01-01', end: '2026-01-31', label: 'ENE' },
    { start: '2026-02-01', end: '2026-02-28', label: 'FEB' },
    { start: '2026-03-01', end: '2026-03-30', label: 'MAR' },
    { start: '2026-04-01', end: '2026-04-30', label: 'ABR' },
    { start: '2026-05-01', end: '2026-05-31', label: 'MAY' },
    { start: '2026-06-01', end: '2026-06-29', label: 'JUN' },
    { start: '2026-07-01', end: '2026-07-31', label: 'JUL' },
    { start: '2026-08-01', end: '2026-08-31', label: 'AGO' },
    { start: '2026-09-01', end: '2026-09-29', label: 'SEP' },
    { start: '2026-10-01', end: '2026-10-31', label: 'OCT' },
    { start: '2026-11-01', end: '2026-11-30', label: 'NOV' },
    { start: '2026-12-01', end: '2026-12-30', label: 'DIC' },
  ];

  static readonly ACTUAL_TBA_YEAR = [
    { start: '2026-03-31', end: '2026-03-31', label: 'Q1TBA' },
    { start: '2026-06-30', end: '2026-06-30', label: 'Q2TBA' },
    { start: '2026-09-30', end: '2026-09-30', label: 'Q3TBA' },
    { start: '2026-12-30', end: '2027-01-01', label: 'Q4TBA' },
  ];

  static readonly NEXT_YEAR = [
    { start: '2027-01-02', end: '2027-01-31', label: 'ENENEXT' },
    { start: '2027-02-01', end: '2027-02-28', label: 'FEBNEXT' },
    { start: '2027-03-01', end: '2027-03-30', label: 'MARNEXT' },
    { start: '2027-04-01', end: '2027-04-30', label: 'ABRNEXT' },
    { start: '2027-05-01', end: '2027-05-31', label: 'MAYNEXT' },
    { start: '2027-06-01', end: '2027-06-29', label: 'JUNNEXT' },
    { start: '2027-07-01', end: '2027-07-31', label: 'JULNEXT' },
    { start: '2027-08-01', end: '2027-08-31', label: 'AGONEXT' },
    { start: '2027-09-01', end: '2027-09-30', label: 'SEPNEXT' },
    { start: '2027-10-01', end: '2027-10-31', label: 'OCTNEXT' },
    { start: '2027-11-01', end: '2027-11-30', label: 'NOVNEXT' },
    { start: '2027-12-01', end: '2027-12-30', label: 'DICNEXT' },
  ];

  static readonly NEXT_TBA_YEAR = [
    { start: '2027-03-31', end: '2027-03-31', label: 'Q1TBA' },
    { start: '2027-06-30', end: '2027-06-30', label: 'Q2TBA' },
    { start: '2027-09-30', end: '2027-09-30', label: 'Q3TBA' },
    { start: '2027-12-31', end: '2028-01-01', label: 'Q4TBA' },
  ];

  static readonly MONTHS_YEAR = [
    { opcion: 'Enero', valor: 1, append: 'ENE' },
    { opcion: 'Febrero', valor: 2, append: 'FEB' },
    { opcion: 'Marzo', valor: 3, append: 'MAR' },
    { opcion: 'Abril', valor: 4, append: 'ABR' },
    { opcion: 'Mayo', valor: 5, append: 'MAY' },
    { opcion: 'Junio', valor: 6, append: 'JUN' },
    { opcion: 'Julio', valor: 7, append: 'JUL' },
    { opcion: 'Agosto', valor: 8, append: 'AGO' },
    { opcion: 'Septiembre', valor: 9, append: 'SEP' },
    { opcion: 'Octubre', valor: 10, append: 'OCT' },
    { opcion: 'Noviembre', valor: 11, append: 'NOV' },
    { opcion: 'Diciembre', valor: 12, append: 'DIC' },
  ];

  static readonly ACTUAL_YEAR_TBA = [
    { opcion: 'Q1 2026', valor: 0, append: 'Q1TBA' },
    { opcion: 'Q2 2026', valor: 1, append: 'Q2TBA' },
    { opcion: 'Q3 2026', valor: 2, append: 'Q3TBA' },
    { opcion: 'Q4 2026', valor: 3, append: 'Q4TBA' },
  ];

  static readonly GAMES_YEAR_TBA = [
    { opcion: 'Q1 2027', valor: 0, append: 'Q1TBA' },
    { opcion: 'Q2 2027', valor: 1, append: 'Q2TBA' },
    { opcion: 'Q3 2027', valor: 2, append: 'Q3TBA' },
    { opcion: 'Q4 2027', valor: 3, append: 'Q4TBA' },
  ];

  static readonly MONTHS_NEXT_YEAR = [
    { opcion: 'Enero', valor: 1, append: 'ENENEXT' },
    { opcion: 'Febrero', valor: 2, append: 'FEBNEXT' },
    { opcion: 'Marzo', valor: 3, append: 'MARNEXT' },
    { opcion: 'Abril', valor: 4, append: 'ABRNEXT' },
    { opcion: 'Mayo', valor: 5, append: 'MAYNEXT' },
    { opcion: 'Junio', valor: 6, append: 'JUNNEXT' },
    { opcion: 'Julio', valor: 7, append: 'JULNEXT' },
    { opcion: 'Agosto', valor: 8, append: 'AGONEXT' },
    { opcion: 'Septiembre', valor: 9, append: 'SEPNEXT' },
    { opcion: 'Octubre', valor: 10, append: 'OCTNEXT' },
    { opcion: 'Noviembre', valor: 11, append: 'NOVNEXT' },
    { opcion: 'Diciembre', valor: 12, append: 'DICNEXT' },
  ];

  static readonly platformIds: { [key: string]: number[] } = {
    playstation: [48, 167],
    xbox: [49, 169],
    nintendo: [130],
    pc: [6],
    apple: [14],
    smartphone: [39, 34],
    meta: [386, 471],
    psvr2: [390],
    vr: [163],
  };
}
