export class Constantes {

  static readonly STAR_GAMES = [
    "2XKO",
    "Anno 117: Pax Romana",
    "Ace Attorney Investigations Collection",
    "Assassin's Creed Shadows",
    "Avowed",
    "Apollo Justice: Ace Attorney Trilogy",
    "Batman: Arkham Shadow",
    "Call of Duty: Black Ops 6",
    "Death Stranding 2: On The Beach",
    "Dragon Ball: Sparking! Zero",
    "Dragon Age: The Veilguard",
    "Doom: The Dark Ages",
    "EA Sports FC 25",
    "Grand Theft Auto VI",
    "Horizon Zero Dawn Remastered",
    "Indiana Jones and the Great Circle",
    "Inazuma Eleven: Victory Road",
    "Just Dance VR",
    "Just Dance 2025 Edition",
    "Kingdom Come: Deliverance II",
    "LEGO Horizon Adventures",
    "Like a Dragon: Pirate Yakuza in Hawaii",
    "Little Nightmares III",
    "Luigi's Mansion 2 HD",
    "Metro Awakening VR",
    "Mafia: The Old Country",
    "Mario & Luigi: Brothership",
    "Marvel 1943: Rise of Hydra",
    "Metaphor: ReFantazio",
    "Metal Gear Solid Delta: Snake Eater",
    "Monster Hunter Wilds",
    "Pokémon Legends: Z-A",
    "Professor Layton and the New World of Steam",
    "Sid Meier's Civilization VII",
    "S.T.A.L.K.E.R. 2: Heart of Chornobyl",
    "Sonic X Shadow Generations",
    "The Legend of Zelda: Echoes of Wisdom",
    "The Wolf Among Us 2",
    "Tom Clancy's The Division: Resurgence",
    "Until Dawn"
  ];

  static readonly STAR_DLC = [
    "Alan Wake II: The Lake House",
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
    { start: "2024-01-01", end: "2024-01-31", label: "ENE" },
    { start: "2024-02-01", end: "2024-02-29", label: "FEB" },
    { start: "2024-03-01", end: "2024-03-30", label: "MAR" },
    { start: "2024-04-01", end: "2024-04-30", label: "ABR" },
    { start: "2024-05-01", end: "2024-05-31", label: "MAY" },
    { start: "2024-06-01", end: "2024-06-29", label: "JUN" },
    { start: "2024-07-01", end: "2024-07-31", label: "JUL" },
    { start: "2024-08-01", end: "2024-08-31", label: "AGO" },
    { start: "2024-09-01", end: "2024-09-30", label: "SEP" },
    { start: "2024-10-01", end: "2024-10-31", label: "OCT" },
    { start: "2024-11-01", end: "2024-11-30", label: "NOV" },
    { start: "2024-12-01", end: "2024-12-30", label: "DIC" }
  ];

  static readonly ACTUAL_TBA_YEAR = [
    { start: "2024-03-31", end: "2024-01-31", label: "Q1TBA" },
    { start: "2024-06-30", end: "2024-06-30", label: "Q2TBA" },
    { start: "2024-09-30", end: "2024-09-30", label: "Q3TBA" },
    { start: "2024-12-31", end: "2024-12-31", label: "Q4TBA" }
  ];

  static readonly NEXT_YEAR = [
    { start: "2025-01-01", end: "2025-01-31", label: "ENE" },
    { start: "2025-02-01", end: "2025-02-29", label: "FEB" },
    { start: "2025-03-01", end: "2025-03-30", label: "MAR" },
    { start: "2025-04-01", end: "2025-04-30", label: "ABR" },
    { start: "2025-05-01", end: "2025-05-31", label: "MAY" },
    { start: "2025-06-01", end: "2025-06-29", label: "JUN" },
    { start: "2025-07-01", end: "2025-07-31", label: "JUL" },
    { start: "2025-08-01", end: "2025-08-31", label: "AGO" },
    { start: "2025-09-01", end: "2025-09-30", label: "SEP" },
    { start: "2025-10-01", end: "2025-10-31", label: "OCT" },
    { start: "2025-11-01", end: "2025-11-30", label: "NOV" },
    { start: "2025-12-01", end: "2025-12-30", label: "DIC" }
  ];

  static readonly NEXT_TBA_YEAR = [
    { start: "2025-03-31", end: "2025-01-31", label: "Q1TBA" },
    { start: "2025-06-30", end: "2025-06-30", label: "Q2TBA" },
    { start: "2025-09-30", end: "2025-09-30", label: "Q3TBA" },
    { start: "2025-12-31", end: "2025-12-31", label: "Q4TBA" }
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

  static readonly GAMES_YEAR_TBA = [
    { opcion: 'Q1 2025', valor: 0, append: 'Q1TBA'},
    { opcion: 'Q2 2025', valor: 1, append: 'Q2TBA'},
    { opcion: 'Q3 2025', valor: 2, append: 'Q3TBA'},
    { opcion: 'Q4 2025', valor: 3, append: 'Q4TBA'}
  ]

  static readonly ACTUAL_YEAR_TBA = [
    { opcion: 'Q1 2024', valor: 0, append: 'Q1TBA'},
    { opcion: 'Q2 2024', valor: 1, append: 'Q2TBA'},
    { opcion: 'Q3 2024', valor: 2, append: 'Q3TBA'},
    { opcion: 'Q4 2024', valor: 3, append: 'Q4TBA'}
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