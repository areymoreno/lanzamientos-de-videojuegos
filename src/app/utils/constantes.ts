export class Constantes {

  static readonly STAR_GAMES = [
    "2XKO",
    "Ace Attorney Investigations Collection",
    "Anno 117: Pax Romana",
    "Apollo Justice: Ace Attorney Trilogy",
    "Assassin's Creed Shadows",
    "Avowed",
    "Bravely Default: Flying Fairy - HD Remaster",
    "Borderlands 4",
    "Clair Obscur: Expedition 33",
    "Days Gone Remastered",
    "Dave the Diver: Ichiban's Holiday",
    "Death Stranding 2: On The Beach",
    "Dune: Awakening",
    "Doom: The Dark Ages",
    "Donkey Kong Country Returns HD",
    "Donkey Kong: Bananza",
    "Dragon Quest I & II: HD-2D Remake",
    "Elden Ring: Nightreign",
    "Ghost of Yotei",
    "Grand Theft Auto VI",
    "Hollow Knight: Silksong",
    "Hyrule Warriors: Age of Imprisonment",
    "Inazuma Eleven: Victory Road",
    "Kingdom Come: Deliverance II",
    "Kirby and the Forgotten Land: Nintendo Switch 2 Edition + Star-Crossed World",
    "Kirby Air Riders",
    "Like a Dragon: Pirate Yakuza in Hawaii",
    "Little Nightmares III",
    "Mafia: The Old Country",
    "Mario & Luigi: Brothership",
    "Monster Hunter Wilds",
    "Mario Kart World",
    "Metal Gear Solid Delta: Snake Eater",
    "Metroid Prime 4: Beyond",
    "Marvel 1943: Rise of Hydra",
    "Metal Gear Solid Delta: Snake Eater",
    "Monster Hunter Wilds",
    "Nintendo Switch 2 Welcome Tour",
    "Pokémon Legends: Z-A",
    "Professor Layton and the New World of Steam",
    "Sid Meier's Civilization VII",
    "Sniper Elite: Resistance",
    "Suikoden I & II HD Remaster: Gate Rune and Dunan Unification Wars",
    "Teenage Mutant Ninja Turtles: Tactical Takedown",
    "The Legend of Zelda: Breath of the Wild - Nintendo Switch 2 Edition",
    "The Legend of Zelda: Tears of the Kingdom - Nintendo Switch 2 Edition",
    "The Wolf Among Us 2",
    "Tom Clancy's The Division: Resurgence",
    "Xenoblade Chronicles X: Definitive Edition",
];

  static readonly STAR_DLC = [
    "Alan Wake II: The Lake House",
    "Darkest Dungeon II: Kingdoms",
    "Diablo IV: Vessel of Hatred",
    "Fallout 4: Next-Gen Update",
    "Guild Wars 2: Janthir Wilds",
    "V Rising: Legacy of Castlevania",
    "Vampire Survivors: Operation Guns",
    "Persona 3 Reload: Episode Aigis",
    "Final Fantasy XIV: Dawntrail",
    "The Crew: Motorfest - Season 5",
    "World of Warcraft: The War Within"
  ]

  static readonly ACTUAL_YEAR = [
    { start: "2025-01-01", end: "2025-01-31", label: "ENE" },
    { start: "2025-02-01", end: "2025-02-28", label: "FEB" },
    { start: "2025-03-01", end: "2025-03-30", label: "MAR" },
    { start: "2025-04-01", end: "2025-04-30", label: "ABR" },
    { start: "2025-05-01", end: "2025-05-31", label: "MAY" },
    { start: "2025-06-01", end: "2025-06-29", label: "JUN" },
    { start: "2025-07-01", end: "2025-07-31", label: "JUL" },
    { start: "2025-08-01", end: "2025-08-31", label: "AGO" },
    { start: "2025-09-01", end: "2025-09-29", label: "SEP" },
    { start: "2025-10-01", end: "2025-10-31", label: "OCT" },
    { start: "2025-11-01", end: "2025-11-30", label: "NOV" },
    { start: "2025-12-01", end: "2025-12-30", label: "DIC" }
  ];

  static readonly ACTUAL_TBA_YEAR = [
    { start: "2026-01-31", end: "2026-01-31", label: "Q1TBA" },
    { start: "2025-06-30", end: "2025-06-30", label: "Q2TBA" },
    { start: "2025-09-30", end: "2025-09-30", label: "Q3TBA" },
    { start: "2025-12-31", end: "2025-12-31", label: "Q4TBA" }
  ];

  static readonly NEXT_YEAR = [
    { start: "2026-01-01", end: "2026-01-31", label: "ENETBA" },
    { start: "2026-02-01", end: "2026-02-29", label: "FEBTBA" },
    { start: "2026-03-01", end: "2026-03-30", label: "MARTBA" },
    { start: "2026-04-01", end: "2026-04-30", label: "ABRTBA" },
    { start: "2026-05-01", end: "2026-05-31", label: "MAYTBA" },
    { start: "2026-06-01", end: "2026-06-29", label: "JUNTBA" },
    { start: "2026-07-01", end: "2026-07-31", label: "JULTBA" },
    { start: "2026-08-01", end: "2026-08-31", label: "AGOTBA" },
    { start: "2026-09-01", end: "2026-09-30", label: "SEPTBA" },
    { start: "2026-10-01", end: "2026-10-31", label: "OCTTBA" },
    { start: "2026-11-01", end: "2026-11-30", label: "NOVTBA" },
    { start: "2026-12-01", end: "2026-12-30", label: "DICTBA" }
  ];

  static readonly NEXT_TBA_YEAR = [
    { start: "2026-03-31", end: "2026-01-31", label: "Q1TBA" },
    { start: "2026-06-30", end: "2026-06-30", label: "Q2TBA" },
    { start: "2026-09-30", end: "2026-09-30", label: "Q3TBA" },
    { start: "2026-12-31", end: "2026-12-31", label: "Q4TBA" }
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
  ]

  static readonly ACTUAL_YEAR_TBA = [
    { opcion: 'Q1 2025', valor: 0, append: 'Q1TBA'},
    { opcion: 'Q2 2025', valor: 1, append: 'Q2TBA'},
    { opcion: 'Q3 2025', valor: 2, append: 'Q3TBA'},
    { opcion: 'Q4 2025', valor: 3, append: 'Q4TBA'}
  ]

  static readonly GAMES_YEAR_TBA = [
    { opcion: 'Q1 2026', valor: 0, append: 'Q1TBA'},
    { opcion: 'Q2 2026', valor: 1, append: 'Q2TBA'},
    { opcion: 'Q3 2026', valor: 2, append: 'Q3TBA'},
    { opcion: 'Q4 2026', valor: 3, append: 'Q4TBA'}
  ]

  static readonly MONTHS_YEAR_TBA = [
    { opcion: 'Enero', valor: 1, append: 'ENETBA' },
    { opcion: 'Febrero', valor: 2, append: 'FEBTBA' },
    { opcion: 'Marzo', valor: 3, append: 'MARTBA' },
    { opcion: 'Abril', valor: 4, append: 'ABRTBA' },
    { opcion: 'Mayo', valor: 5, append: 'MAYTBA' },
    { opcion: 'Junio', valor: 6, append: 'JUNTBA' },
    { opcion: 'Julio', valor: 7, append: 'JULTBA' },
    { opcion: 'Agosto', valor: 8, append: 'AGOTBA' },
    { opcion: 'Septiembre', valor: 9, append: 'SEPTBA' },
    { opcion: 'Octubre', valor: 10, append: 'OCTTBA' },
    { opcion: 'Noviembre', valor: 11, append: 'NOVTBA' },
    { opcion: 'Diciembre', valor: 12, append: 'DICTBA' }
  ]

  static readonly platformIds: { [key: string]: number[] } = {
    playstation: [48, 167],
    xbox: [49, 169],
    nintendo: [130],
    pc: [6],
    apple: [14],
    smartphone: [39, 34],
    meta: [386, 471],
    psvr2: [390],
    vr: [163]
  };
}