const pokemonData = [
  {
    name: '???',
    types: [
      9,
      255
    ]
  },
  {
    name: 'Bulbasaur',
    types: [
      22,
      3
    ]
  },
  {
    name: 'Ivysaur',
    types: [
      22,
      3
    ]
  },
  {
    name: 'Venusaur',
    types: [
      22,
      3
    ]
  },
  {
    name: 'Charmander',
    types: [
      20
    ]
  },
  {
    name: 'Charmeleon',
    types: [
      20
    ]
  },
  {
    name: 'Charizard',
    types: [
      20,
      2
    ]
  },
  {
    name: 'Squirtle',
    types: [
      21
    ]
  },
  {
    name: 'Wartortle',
    types: [
      21
    ]
  },
  {
    name: 'Blastoise',
    types: [
      21
    ]
  },
  {
    name: 'Caterpie',
    types: [
      7
    ]
  },
  {
    name: 'Metapod',
    types: [
      7
    ]
  },
  {
    name: 'Butterfree',
    types: [
      7,
      2
    ]
  },
  {
    name: 'Weedle',
    types: [
      7,
      3
    ]
  },
  {
    name: 'Kakuna',
    types: [
      7,
      3
    ]
  },
  {
    name: 'Beedrill',
    types: [
      7,
      3
    ]
  },
  {
    name: 'Pidgey',
    types: [
      0,
      2
    ]
  },
  {
    name: 'Pidgeotto',
    types: [
      0,
      2
    ]
  },
  {
    name: 'Pidgeot',
    types: [
      0,
      2
    ]
  },
  {
    name: 'Rattata',
    types: [
      0
    ]
  },
  {
    name: 'Raticate',
    types: [
      0
    ]
  },
  {
    name: 'Spearow',
    types: [
      0,
      2
    ]
  },
  {
    name: 'Fearow',
    types: [
      0,
      2
    ]
  },
  {
    name: 'Ekans',
    types: [
      3
    ]
  },
  {
    name: 'Arbok',
    types: [
      3
    ]
  },
  {
    name: 'Pikachu',
    types: [
      23
    ]
  },
  {
    name: 'Raichu',
    types: [
      23
    ]
  },
  {
    name: 'Sandshrew',
    types: [
      4
    ]
  },
  {
    name: 'Sandslash',
    types: [
      4
    ]
  },
  {
    name: 'Nidoran♀',
    types: [
      3
    ]
  },
  {
    name: 'Nidorina',
    types: [
      3
    ]
  },
  {
    name: 'Nidoqueen',
    types: [
      3,
      4
    ]
  },
  {
    name: 'Nidoran♂',
    types: [
      3
    ]
  },
  {
    name: 'Nidorino',
    types: [
      3
    ]
  },
  {
    name: 'Nidoking',
    types: [
      3,
      4
    ]
  },
  {
    name: 'Clefairy',
    types: [
      0
    ]
  },
  {
    name: 'Clefable',
    types: [
      0
    ]
  },
  {
    name: 'Vulpix',
    types: [
      20
    ]
  },
  {
    name: 'Ninetales',
    types: [
      20
    ]
  },
  {
    name: 'Jigglypuff',
    types: [
      0
    ]
  },
  {
    name: 'Wigglytuff',
    types: [
      0
    ]
  },
  {
    name: 'Zubat',
    types: [
      3,
      2
    ]
  },
  {
    name: 'Golbat',
    types: [
      3,
      2
    ]
  },
  {
    name: 'Oddish',
    types: [
      22,
      3
    ]
  },
  {
    name: 'Gloom',
    types: [
      22,
      3
    ]
  },
  {
    name: 'Vileplume',
    types: [
      22,
      3
    ]
  },
  {
    name: 'Paras',
    types: [
      7,
      22
    ]
  },
  {
    name: 'Parasect',
    types: [
      7,
      22
    ]
  },
  {
    name: 'Venonat',
    types: [
      7,
      3
    ]
  },
  {
    name: 'Venomoth',
    types: [
      7,
      3
    ]
  },
  {
    name: 'Diglett',
    types: [
      4
    ]
  },
  {
    name: 'Dugtrio',
    types: [
      4
    ]
  },
  {
    name: 'Meowth',
    types: [
      0
    ]
  },
  {
    name: 'Persian',
    types: [
      0
    ]
  },
  {
    name: 'Psyduck',
    types: [
      21
    ]
  },
  {
    name: 'Golduck',
    types: [
      21
    ]
  },
  {
    name: 'Mankey',
    types: [
      1
    ]
  },
  {
    name: 'Primeape',
    types: [
      1
    ]
  },
  {
    name: 'Growlithe',
    types: [
      20
    ]
  },
  {
    name: 'Arcanine',
    types: [
      20
    ]
  },
  {
    name: 'Poliwag',
    types: [
      21
    ]
  },
  {
    name: 'Poliwhirl',
    types: [
      21
    ]
  },
  {
    name: 'Poliwrath',
    types: [
      21,
      1
    ]
  },
  {
    name: 'Abra',
    types: [
      24
    ]
  },
  {
    name: 'Kadabra',
    types: [
      24
    ]
  },
  {
    name: 'Alakazam',
    types: [
      24
    ]
  },
  {
    name: 'Machop',
    types: [
      1
    ]
  },
  {
    name: 'Machoke',
    types: [
      1
    ]
  },
  {
    name: 'Machamp',
    types: [
      1
    ]
  },
  {
    name: 'Bellsprout',
    types: [
      22,
      3
    ]
  },
  {
    name: 'Weepinbell',
    types: [
      22,
      3
    ]
  },
  {
    name: 'Victreebel',
    types: [
      22,
      3
    ]
  },
  {
    name: 'Tentacool',
    types: [
      21,
      3
    ]
  },
  {
    name: 'Tentacruel',
    types: [
      21,
      3
    ]
  },
  {
    name: 'Geodude',
    types: [
      5,
      4
    ]
  },
  {
    name: 'Graveler',
    types: [
      5,
      4
    ]
  },
  {
    name: 'Golem',
    types: [
      5,
      4
    ]
  },
  {
    name: 'Ponyta',
    types: [
      20
    ]
  },
  {
    name: 'Rapidash',
    types: [
      20
    ]
  },
  {
    name: 'Slowpoke',
    types: [
      21,
      24
    ]
  },
  {
    name: 'Slowbro',
    types: [
      21,
      24
    ]
  },
  {
    name: 'Magnemite',
    types: [
      23,
      9
    ]
  },
  {
    name: 'Magneton',
    types: [
      23,
      9
    ]
  },
  {
    name: "Farfetch'd",
    types: [
      0,
      2
    ]
  },
  {
    name: 'Doduo',
    types: [
      0,
      2
    ]
  },
  {
    name: 'Dodrio',
    types: [
      0,
      2
    ]
  },
  {
    name: 'Seel',
    types: [
      21
    ]
  },
  {
    name: 'Dewgong',
    types: [
      21,
      25
    ]
  },
  {
    name: 'Grimer',
    types: [
      3
    ]
  },
  {
    name: 'Muk',
    types: [
      3
    ]
  },
  {
    name: 'Shellder',
    types: [
      21
    ]
  },
  {
    name: 'Cloyster',
    types: [
      21,
      25
    ]
  },
  {
    name: 'Gastly',
    types: [
      8,
      3
    ]
  },
  {
    name: 'Haunter',
    types: [
      8,
      3
    ]
  },
  {
    name: 'Gengar',
    types: [
      8,
      3
    ]
  },
  {
    name: 'Onix',
    types: [
      5,
      4
    ]
  },
  {
    name: 'Drowzee',
    types: [
      24
    ]
  },
  {
    name: 'Hypno',
    types: [
      24
    ]
  },
  {
    name: 'Krabby',
    types: [
      21
    ]
  },
  {
    name: 'Kingler',
    types: [
      21
    ]
  },
  {
    name: 'Voltorb',
    types: [
      23
    ]
  },
  {
    name: 'Electrode',
    types: [
      23
    ]
  },
  {
    name: 'Exeggcute',
    types: [
      22,
      24
    ]
  },
  {
    name: 'Exeggutor',
    types: [
      22,
      24
    ]
  },
  {
    name: 'Cubone',
    types: [
      4
    ]
  },
  {
    name: 'Marowak',
    types: [
      4
    ]
  },
  {
    name: 'Hitmonlee',
    types: [
      1
    ]
  },
  {
    name: 'Hitmonchan',
    types: [
      1
    ]
  },
  {
    name: 'Lickitung',
    types: [
      0
    ]
  },
  {
    name: 'Koffing',
    types: [
      3
    ]
  },
  {
    name: 'Weezing',
    types: [
      3
    ]
  },
  {
    name: 'Rhyhorn',
    types: [
      4,
      5
    ]
  },
  {
    name: 'Rhydon',
    types: [
      4,
      5
    ]
  },
  {
    name: 'Chansey',
    types: [
      0
    ]
  },
  {
    name: 'Tangela',
    types: [
      22
    ]
  },
  {
    name: 'Kangaskhan',
    types: [
      0
    ]
  },
  {
    name: 'Horsea',
    types: [
      21
    ]
  },
  {
    name: 'Seadra',
    types: [
      21
    ]
  },
  {
    name: 'Goldeen',
    types: [
      21
    ]
  },
  {
    name: 'Seaking',
    types: [
      21
    ]
  },
  {
    name: 'Staryu',
    types: [
      21
    ]
  },
  {
    name: 'Starmie',
    types: [
      21,
      24
    ]
  },
  {
    name: 'Mr. Mime',
    types: [
      24
    ]
  },
  {
    name: 'Scyther',
    types: [
      7,
      2
    ]
  },
  {
    name: 'Jynx',
    types: [
      25,
      24
    ]
  },
  {
    name: 'Electabuzz',
    types: [
      23
    ]
  },
  {
    name: 'Magmar',
    types: [
      20
    ]
  },
  {
    name: 'Pinsir',
    types: [
      7
    ]
  },
  {
    name: 'Tauros',
    types: [
      0
    ]
  },
  {
    name: 'Magikarp',
    types: [
      21
    ]
  },
  {
    name: 'Gyarados',
    types: [
      21,
      2
    ]
  },
  {
    name: 'Lapras',
    types: [
      21,
      25
    ]
  },
  {
    name: 'Ditto',
    types: [
      0
    ]
  },
  {
    name: 'Eevee',
    types: [
      0
    ]
  },
  {
    name: 'Vaporeon',
    types: [
      21
    ]
  },
  {
    name: 'Jolteon',
    types: [
      23
    ]
  },
  {
    name: 'Flareon',
    types: [
      20
    ]
  },
  {
    name: 'Porygon',
    types: [
      0
    ]
  },
  {
    name: 'Omanyte',
    types: [
      5,
      21
    ]
  },
  {
    name: 'Omastar',
    types: [
      5,
      21
    ]
  },
  {
    name: 'Kabuto',
    types: [
      5,
      21
    ]
  },
  {
    name: 'Kabutops',
    types: [
      5,
      21
    ]
  },
  {
    name: 'Aerodactyl',
    types: [
      5,
      2
    ]
  },
  {
    name: 'Snorlax',
    types: [
      0
    ]
  },
  {
    name: 'Articuno',
    types: [
      25,
      2
    ]
  },
  {
    name: 'Zapdos',
    types: [
      23,
      2
    ]
  },
  {
    name: 'Moltres',
    types: [
      20,
      2
    ]
  },
  {
    name: 'Dratini',
    types: [
      26
    ]
  },
  {
    name: 'Dragonair',
    types: [
      26
    ]
  },
  {
    name: 'Dragonite',
    types: [
      26,
      2
    ]
  },
  {
    name: 'Mewtwo',
    types: [
      24
    ]
  },
  {
    name: 'Mew',
    types: [
      24
    ]
  },
  {
    name: 'Chikorita',
    types: [
      22
    ]
  },
  {
    name: 'Bayleef',
    types: [
      22
    ]
  },
  {
    name: 'Meganium',
    types: [
      22
    ]
  },
  {
    name: 'Cyndaquil',
    types: [
      20
    ]
  },
  {
    name: 'Quilava',
    types: [
      20
    ]
  },
  {
    name: 'Typhlosion',
    types: [
      20
    ]
  },
  {
    name: 'Totodile',
    types: [
      21
    ]
  },
  {
    name: 'Croconaw',
    types: [
      21
    ]
  },
  {
    name: 'Feraligatr',
    types: [
      21
    ]
  },
  {
    name: 'Sentret',
    types: [
      0
    ]
  },
  {
    name: 'Furret',
    types: [
      0
    ]
  },
  {
    name: 'Hoothoot',
    types: [
      0,
      2
    ]
  },
  {
    name: 'Noctowl',
    types: [
      0,
      2
    ]
  },
  {
    name: 'Ledyba',
    types: [
      7,
      2
    ]
  },
  {
    name: 'Ledian',
    types: [
      7,
      2
    ]
  },
  {
    name: 'Spinarak',
    types: [
      7,
      3
    ]
  },
  {
    name: 'Ariados',
    types: [
      7,
      3
    ]
  },
  {
    name: 'Crobat',
    types: [
      3,
      2
    ]
  },
  {
    name: 'Chinchou',
    types: [
      21,
      23
    ]
  },
  {
    name: 'Lanturn',
    types: [
      21,
      23
    ]
  },
  {
    name: 'Pichu',
    types: [
      23
    ]
  },
  {
    name: 'Cleffa',
    types: [
      0
    ]
  },
  {
    name: 'Igglybuff',
    types: [
      0
    ]
  },
  {
    name: 'Togepi',
    types: [
      0
    ]
  },
  {
    name: 'Togetic',
    types: [
      0,
      2
    ]
  },
  {
    name: 'Natu',
    types: [
      24,
      2
    ]
  },
  {
    name: 'Xatu',
    types: [
      24,
      2
    ]
  },
  {
    name: 'Mareep',
    types: [
      23
    ]
  },
  {
    name: 'Flaaffy',
    types: [
      23
    ]
  },
  {
    name: 'Ampharos',
    types: [
      23
    ]
  },
  {
    name: 'Bellossom',
    types: [
      22
    ]
  },
  {
    name: 'Marill',
    types: [
      21
    ]
  },
  {
    name: 'Azumarill',
    types: [
      21
    ]
  },
  {
    name: 'Sudowoodo',
    types: [
      5
    ]
  },
  {
    name: 'Politoed',
    types: [
      21
    ]
  },
  {
    name: 'Hoppip',
    types: [
      22,
      2
    ]
  },
  {
    name: 'Skiploom',
    types: [
      22,
      2
    ]
  },
  {
    name: 'Jumpluff',
    types: [
      22,
      2
    ]
  },
  {
    name: 'Aipom',
    types: [
      0
    ]
  },
  {
    name: 'Sunkern',
    types: [
      22
    ]
  },
  {
    name: 'Sunflora',
    types: [
      22
    ]
  },
  {
    name: 'Yanma',
    types: [
      7,
      2
    ]
  },
  {
    name: 'Wooper',
    types: [
      21,
      4
    ]
  },
  {
    name: 'Quagsire',
    types: [
      21,
      4
    ]
  },
  {
    name: 'Espeon',
    types: [
      24
    ]
  },
  {
    name: 'Umbreon',
    types: [
      27
    ]
  },
  {
    name: 'Murkrow',
    types: [
      27,
      2
    ]
  },
  {
    name: 'Slowking',
    types: [
      21,
      24
    ]
  },
  {
    name: 'Misdreavus',
    types: [
      8
    ]
  },
  {
    name: 'Unown',
    types: [
      24
    ]
  },
  {
    name: 'Wobbuffet',
    types: [
      24
    ]
  },
  {
    name: 'Girafarig',
    types: [
      0,
      24
    ]
  },
  {
    name: 'Pineco',
    types: [
      7
    ]
  },
  {
    name: 'Forretress',
    types: [
      7,
      9
    ]
  },
  {
    name: 'Dunsparce',
    types: [
      0
    ]
  },
  {
    name: 'Gligar',
    types: [
      4,
      2
    ]
  },
  {
    name: 'Steelix',
    types: [
      9,
      4
    ]
  },
  {
    name: 'Snubbull',
    types: [
      0
    ]
  },
  {
    name: 'Granbull',
    types: [
      0
    ]
  },
  {
    name: 'Qwilfish',
    types: [
      21,
      3
    ]
  },
  {
    name: 'Scizor',
    types: [
      7,
      9
    ]
  },
  {
    name: 'Shuckle',
    types: [
      7,
      5
    ]
  },
  {
    name: 'Heracross',
    types: [
      7,
      1
    ]
  },
  {
    name: 'Sneasel',
    types: [
      27,
      25
    ]
  },
  {
    name: 'Teddiursa',
    types: [
      0
    ]
  },
  {
    name: 'Ursaring',
    types: [
      0
    ]
  },
  {
    name: 'Slugma',
    types: [
      20
    ]
  },
  {
    name: 'Magcargo',
    types: [
      20,
      5
    ]
  },
  {
    name: 'Swinub',
    types: [
      25,
      4
    ]
  },
  {
    name: 'Piloswine',
    types: [
      25,
      4
    ]
  },
  {
    name: 'Corsola',
    types: [
      21,
      5
    ]
  },
  {
    name: 'Remoraid',
    types: [
      21
    ]
  },
  {
    name: 'Octillery',
    types: [
      21
    ]
  },
  {
    name: 'Delibird',
    types: [
      25,
      2
    ]
  },
  {
    name: 'Mantine',
    types: [
      21,
      2
    ]
  },
  {
    name: 'Skarmory',
    types: [
      9,
      2
    ]
  },
  {
    name: 'Houndour',
    types: [
      27,
      20
    ]
  },
  {
    name: 'Houndoom',
    types: [
      27,
      20
    ]
  },
  {
    name: 'Kingdra',
    types: [
      21,
      26
    ]
  },
  {
    name: 'Phanpy',
    types: [
      4
    ]
  },
  {
    name: 'Donphan',
    types: [
      4
    ]
  },
  {
    name: 'Porygon2',
    types: [
      0
    ]
  },
  {
    name: 'Stantler',
    types: [
      0
    ]
  },
  {
    name: 'Smeargle',
    types: [
      0
    ]
  },
  {
    name: 'Tyrogue',
    types: [
      1
    ]
  },
  {
    name: 'Hitmontop',
    types: [
      1
    ]
  },
  {
    name: 'Smoochum',
    types: [
      25,
      24
    ]
  },
  {
    name: 'Elekid',
    types: [
      23
    ]
  },
  {
    name: 'Magby',
    types: [
      20
    ]
  },
  {
    name: 'Miltank',
    types: [
      0
    ]
  },
  {
    name: 'Blissey',
    types: [
      0
    ]
  },
  {
    name: 'Raikou',
    types: [
      23
    ]
  },
  {
    name: 'Entei',
    types: [
      20
    ]
  },
  {
    name: 'Suicune',
    types: [
      21
    ]
  },
  {
    name: 'Larvitar',
    types: [
      5,
      4
    ]
  },
  {
    name: 'Pupitar',
    types: [
      5,
      4
    ]
  },
  {
    name: 'Tyranitar',
    types: [
      5,
      27
    ]
  },
  {
    name: 'Lugia',
    types: [
      24,
      2
    ]
  },
  {
    name: 'Ho-Oh',
    types: [
      20,
      2
    ]
  },
  {
    name: 'Celebi',
    types: [
      24,
      22
    ]
  }
]

const typeMatchups = [[0, 8, 0], [1, 8, 0], [0, 5, 5], [0, 9, 5], [20, 20, 5], [20, 21, 5], [20, 22, 20], [20, 25, 20], [20, 7, 20], [20, 5, 5], [20, 26, 5], [20, 9, 20], [21, 20, 20], [21, 21, 5], [21, 22, 5], [21, 4, 20], [21, 5, 20], [21, 26, 5], [23, 21, 20], [23, 23, 5], [23, 22, 5], [23, 4, 0], [23, 2, 20], [23, 26, 5], [22, 20, 5], [22, 21, 20], [22, 22, 5], [22, 3, 5], [22, 4, 20], [22, 2, 5], [22, 7, 5], [22, 5, 20], [22, 26, 5], [22, 9, 5], [25, 21, 5], [25, 22, 20], [25, 25, 5], [25, 4, 20], [25, 2, 20], [25, 26, 20], [25, 9, 5], [25, 20, 5], [1, 0, 20], [1, 25, 20], [1, 3, 5], [1, 2, 5], [1, 24, 5], [1, 7, 5], [1, 5, 20], [1, 27, 20], [1, 9, 20], [3, 22, 20], [3, 3, 5], [3, 4, 5], [3, 5, 5], [3, 8, 5], [3, 9, 0], [4, 20, 20], [4, 23, 20], [4, 22, 5], [4, 3, 20], [4, 2, 0], [4, 7, 5], [4, 5, 20], [4, 9, 20], [2, 23, 5], [2, 22, 20], [2, 1, 20], [2, 7, 20], [2, 5, 5], [2, 9, 5], [24, 1, 20], [24, 3, 20], [24, 24, 5], [24, 27, 0], [24, 9, 5], [7, 20, 5], [7, 22, 20], [7, 1, 5], [7, 3, 5], [7, 2, 5], [7, 24, 20], [7, 8, 5], [7, 27, 20], [7, 9, 5], [5, 20, 20], [5, 25, 20], [5, 1, 5], [5, 4, 5], [5, 2, 20], [5, 7, 20], [5, 9, 5], [8, 0, 0], [8, 24, 20], [8, 27, 5], [8, 9, 5], [8, 8, 20], [26, 26, 20], [26, 9, 5], [27, 1, 5], [27, 24, 20], [27, 8, 20], [27, 27, 5], [27, 9, 5], [9, 20, 5], [9, 21, 5], [9, 23, 5], [9, 25, 20], [9, 5, 20], [9, 9, 5]]

const moveData = [
  {
    name: '-',
    power: 69,
    type: 70,
    accuracy: 71,
    secondaryEffectChance: 0
  },
  {
    name: 'Pound',
    power: 40,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Karate Chop',
    power: 50,
    type: 1,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'DoubleSlap',
    power: 15,
    type: 0,
    accuracy: 216,
    secondaryEffectChance: 0
  },
  {
    name: 'Comet Punch',
    power: 18,
    type: 0,
    accuracy: 216,
    secondaryEffectChance: 0
  },
  {
    name: 'Mega Punch',
    power: 80,
    type: 0,
    accuracy: 216,
    secondaryEffectChance: 0
  },
  {
    name: 'Pay Day',
    power: 40,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Fire Punch',
    power: 75,
    type: 20,
    accuracy: 255,
    secondaryEffectChance: 25
  },
  {
    name: 'Ice Punch',
    power: 75,
    type: 25,
    accuracy: 255,
    secondaryEffectChance: 25
  },
  {
    name: 'ThunderPunch',
    power: 75,
    type: 23,
    accuracy: 255,
    secondaryEffectChance: 25
  },
  {
    name: 'Scratch',
    power: 40,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'ViceGrip',
    power: 55,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Guillotine',
    power: 0,
    type: 0,
    accuracy: 76,
    secondaryEffectChance: 0
  },
  {
    name: 'Razor Wind',
    power: 80,
    type: 0,
    accuracy: 191,
    secondaryEffectChance: 0
  },
  {
    name: 'Swords Dance',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Cut',
    power: 50,
    type: 0,
    accuracy: 242,
    secondaryEffectChance: 0
  },
  {
    name: 'Gust',
    power: 40,
    type: 2,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Wing Attack',
    power: 60,
    type: 2,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Whirlwind',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Fly',
    power: 70,
    type: 2,
    accuracy: 242,
    secondaryEffectChance: 0
  },
  {
    name: 'Bind',
    power: 15,
    type: 0,
    accuracy: 191,
    secondaryEffectChance: 0
  },
  {
    name: 'Slam',
    power: 80,
    type: 0,
    accuracy: 191,
    secondaryEffectChance: 0
  },
  {
    name: 'Vine Whip',
    power: 35,
    type: 22,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Stomp',
    power: 65,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 76
  },
  {
    name: 'Double Kick',
    power: 30,
    type: 1,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Mega Kick',
    power: 120,
    type: 0,
    accuracy: 191,
    secondaryEffectChance: 0
  },
  {
    name: 'Jump Kick',
    power: 70,
    type: 1,
    accuracy: 242,
    secondaryEffectChance: 0
  },
  {
    name: 'Rolling Kick',
    power: 60,
    type: 1,
    accuracy: 216,
    secondaryEffectChance: 76
  },
  {
    name: 'Sand-Attack',
    power: 0,
    type: 4,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Headbutt',
    power: 70,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 76
  },
  {
    name: 'Horn Attack',
    power: 65,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Fury Attack',
    power: 15,
    type: 0,
    accuracy: 216,
    secondaryEffectChance: 0
  },
  {
    name: 'Horn Drill',
    power: 1,
    type: 0,
    accuracy: 76,
    secondaryEffectChance: 0
  },
  {
    name: 'Tackle',
    power: 35,
    type: 0,
    accuracy: 242,
    secondaryEffectChance: 0
  },
  {
    name: 'Body Slam',
    power: 85,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 76
  },
  {
    name: 'Wrap',
    power: 15,
    type: 0,
    accuracy: 216,
    secondaryEffectChance: 0
  },
  {
    name: 'Take Down',
    power: 90,
    type: 0,
    accuracy: 216,
    secondaryEffectChance: 0
  },
  {
    name: 'Thrash',
    power: 90,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Double-Edge',
    power: 120,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Tail Whip',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Poison Sting',
    power: 15,
    type: 3,
    accuracy: 255,
    secondaryEffectChance: 76
  },
  {
    name: 'Twineedle',
    power: 25,
    type: 7,
    accuracy: 255,
    secondaryEffectChance: 51
  },
  {
    name: 'Pin Missile',
    power: 14,
    type: 7,
    accuracy: 216,
    secondaryEffectChance: 0
  },
  {
    name: 'Leer',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Bite',
    power: 60,
    type: 27,
    accuracy: 255,
    secondaryEffectChance: 76
  },
  {
    name: 'Growl',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Roar',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Sing',
    power: 0,
    type: 0,
    accuracy: 140,
    secondaryEffectChance: 0
  },
  {
    name: 'Supersonic',
    power: 0,
    type: 0,
    accuracy: 140,
    secondaryEffectChance: 0
  },
  {
    name: 'SonicBoom',
    power: 20,
    type: 0,
    accuracy: 229,
    secondaryEffectChance: 0
  },
  {
    name: 'Disable',
    power: 0,
    type: 0,
    accuracy: 140,
    secondaryEffectChance: 0
  },
  {
    name: 'Acid',
    power: 40,
    type: 3,
    accuracy: 255,
    secondaryEffectChance: 25
  },
  {
    name: 'Ember',
    power: 40,
    type: 20,
    accuracy: 255,
    secondaryEffectChance: 25
  },
  {
    name: 'Flamethrower',
    power: 95,
    type: 20,
    accuracy: 255,
    secondaryEffectChance: 25
  },
  {
    name: 'Mist',
    power: 0,
    type: 25,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Water Gun',
    power: 40,
    type: 21,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Hydro Pump',
    power: 120,
    type: 21,
    accuracy: 204,
    secondaryEffectChance: 0
  },
  {
    name: 'Surf',
    power: 95,
    type: 21,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Ice Beam',
    power: 95,
    type: 25,
    accuracy: 255,
    secondaryEffectChance: 25
  },
  {
    name: 'Blizzard',
    power: 120,
    type: 25,
    accuracy: 178,
    secondaryEffectChance: 25
  },
  {
    name: 'Psybeam',
    power: 65,
    type: 24,
    accuracy: 255,
    secondaryEffectChance: 25
  },
  {
    name: 'BubbleBeam',
    power: 65,
    type: 21,
    accuracy: 255,
    secondaryEffectChance: 25
  },
  {
    name: 'Aurora Beam',
    power: 65,
    type: 25,
    accuracy: 255,
    secondaryEffectChance: 25
  },
  {
    name: 'Hyper Beam',
    power: 150,
    type: 0,
    accuracy: 229,
    secondaryEffectChance: 0
  },
  {
    name: 'Peck',
    power: 35,
    type: 2,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Drill Peck',
    power: 80,
    type: 2,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Submission',
    power: 80,
    type: 1,
    accuracy: 204,
    secondaryEffectChance: 0
  },
  {
    name: 'Low Kick',
    power: 50,
    type: 1,
    accuracy: 229,
    secondaryEffectChance: 76
  },
  {
    name: 'Counter',
    power: 1,
    type: 1,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Seismic Toss',
    power: 1,
    type: 1,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Strength',
    power: 80,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Absorb',
    power: 20,
    type: 22,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Mega Drain',
    power: 40,
    type: 22,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Leech Seed',
    power: 0,
    type: 22,
    accuracy: 229,
    secondaryEffectChance: 0
  },
  {
    name: 'Growth',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Razor Leaf',
    power: 55,
    type: 22,
    accuracy: 242,
    secondaryEffectChance: 0
  },
  {
    name: 'SolarBeam',
    power: 120,
    type: 22,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'PoisonPowder',
    power: 0,
    type: 3,
    accuracy: 191,
    secondaryEffectChance: 0
  },
  {
    name: 'Stun Spore',
    power: 0,
    type: 22,
    accuracy: 191,
    secondaryEffectChance: 0
  },
  {
    name: 'Sleep Powder',
    power: 0,
    type: 22,
    accuracy: 191,
    secondaryEffectChance: 0
  },
  {
    name: 'Petal Dance',
    power: 70,
    type: 22,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'String Shot',
    power: 0,
    type: 7,
    accuracy: 242,
    secondaryEffectChance: 0
  },
  {
    name: 'Dragon Rage',
    power: 40,
    type: 26,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Fire Spin',
    power: 15,
    type: 20,
    accuracy: 178,
    secondaryEffectChance: 0
  },
  {
    name: 'ThunderShock',
    power: 40,
    type: 23,
    accuracy: 255,
    secondaryEffectChance: 25
  },
  {
    name: 'Thunderbolt',
    power: 95,
    type: 23,
    accuracy: 255,
    secondaryEffectChance: 25
  },
  {
    name: 'Thunder Wave',
    power: 0,
    type: 23,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Thunder',
    power: 120,
    type: 23,
    accuracy: 178,
    secondaryEffectChance: 76
  },
  {
    name: 'Rock Throw',
    power: 50,
    type: 5,
    accuracy: 229,
    secondaryEffectChance: 0
  },
  {
    name: 'Earthquake',
    power: 100,
    type: 4,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Fissure',
    power: 1,
    type: 4,
    accuracy: 76,
    secondaryEffectChance: 0
  },
  {
    name: 'Dig',
    power: 60,
    type: 4,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Toxic',
    power: 0,
    type: 3,
    accuracy: 216,
    secondaryEffectChance: 0
  },
  {
    name: 'Confusion',
    power: 50,
    type: 24,
    accuracy: 255,
    secondaryEffectChance: 25
  },
  {
    name: 'Psychic',
    power: 90,
    type: 24,
    accuracy: 255,
    secondaryEffectChance: 25
  },
  {
    name: 'Hypnosis',
    power: 0,
    type: 24,
    accuracy: 153,
    secondaryEffectChance: 0
  },
  {
    name: 'Meditate',
    power: 0,
    type: 24,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Agility',
    power: 0,
    type: 24,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Quick Attack',
    power: 40,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Rage',
    power: 20,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Teleport',
    power: 0,
    type: 24,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Night Shade',
    power: 1,
    type: 8,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Mimic',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Screech',
    power: 0,
    type: 0,
    accuracy: 216,
    secondaryEffectChance: 0
  },
  {
    name: 'Double Team',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Recover',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Harden',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Minimize',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'SmokeScreen',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Confuse Ray',
    power: 0,
    type: 8,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Withdraw',
    power: 0,
    type: 21,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Defense Curl',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Barrier',
    power: 0,
    type: 24,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Light Screen',
    power: 0,
    type: 24,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Haze',
    power: 0,
    type: 25,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Reflect',
    power: 0,
    type: 24,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Focus Energy',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Bide',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Metronome',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Mirror Move',
    power: 0,
    type: 2,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Selfdestruct',
    power: 200,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Egg Bomb',
    power: 100,
    type: 0,
    accuracy: 191,
    secondaryEffectChance: 0
  },
  {
    name: 'Lick',
    power: 20,
    type: 8,
    accuracy: 255,
    secondaryEffectChance: 76
  },
  {
    name: 'Smog',
    power: 20,
    type: 3,
    accuracy: 178,
    secondaryEffectChance: 102
  },
  {
    name: 'Sludge',
    power: 65,
    type: 3,
    accuracy: 255,
    secondaryEffectChance: 76
  },
  {
    name: 'Bone Club',
    power: 65,
    type: 4,
    accuracy: 216,
    secondaryEffectChance: 25
  },
  {
    name: 'Fire Blast',
    power: 120,
    type: 20,
    accuracy: 216,
    secondaryEffectChance: 25
  },
  {
    name: 'Waterfall',
    power: 80,
    type: 21,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Clamp',
    power: 35,
    type: 21,
    accuracy: 191,
    secondaryEffectChance: 0
  },
  {
    name: 'Swift',
    power: 60,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Skull Bash',
    power: 100,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Spike Cannon',
    power: 20,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Constrict',
    power: 10,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 25
  },
  {
    name: 'Amnesia',
    power: 0,
    type: 24,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Kinesis',
    power: 0,
    type: 24,
    accuracy: 204,
    secondaryEffectChance: 0
  },
  {
    name: 'Softboiled',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Hi Jump Kick',
    power: 85,
    type: 1,
    accuracy: 229,
    secondaryEffectChance: 0
  },
  {
    name: 'Glare',
    power: 0,
    type: 0,
    accuracy: 191,
    secondaryEffectChance: 0
  },
  {
    name: 'Dream Eater',
    power: 100,
    type: 24,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Poison Gas',
    power: 0,
    type: 3,
    accuracy: 140,
    secondaryEffectChance: 0
  },
  {
    name: 'Barrage',
    power: 15,
    type: 0,
    accuracy: 216,
    secondaryEffectChance: 0
  },
  {
    name: 'Leech Life',
    power: 20,
    type: 7,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Lovely Kiss',
    power: 0,
    type: 0,
    accuracy: 191,
    secondaryEffectChance: 0
  },
  {
    name: 'Sky Attack',
    power: 140,
    type: 2,
    accuracy: 229,
    secondaryEffectChance: 0
  },
  {
    name: 'Transform',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Bubble',
    power: 20,
    type: 21,
    accuracy: 255,
    secondaryEffectChance: 25
  },
  {
    name: 'Dizzy Punch',
    power: 70,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 51
  },
  {
    name: 'Spore',
    power: 0,
    type: 22,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Flash',
    power: 0,
    type: 0,
    accuracy: 178,
    secondaryEffectChance: 0
  },
  {
    name: 'Psywave',
    power: 1,
    type: 24,
    accuracy: 204,
    secondaryEffectChance: 0
  },
  {
    name: 'Splash',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Acid Armor',
    power: 0,
    type: 3,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Crabhammer',
    power: 90,
    type: 21,
    accuracy: 216,
    secondaryEffectChance: 0
  },
  {
    name: 'Explosion',
    power: 250,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Fury Swipes',
    power: 18,
    type: 0,
    accuracy: 204,
    secondaryEffectChance: 0
  },
  {
    name: 'Bonemerang',
    power: 50,
    type: 4,
    accuracy: 229,
    secondaryEffectChance: 0
  },
  {
    name: 'Rest',
    power: 0,
    type: 24,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Rock Slide',
    power: 75,
    type: 5,
    accuracy: 229,
    secondaryEffectChance: 76
  },
  {
    name: 'Hyper Fang',
    power: 80,
    type: 0,
    accuracy: 229,
    secondaryEffectChance: 25
  },
  {
    name: 'Sharpen',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Conversion',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Tri Attack',
    power: 80,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 51
  },
  {
    name: 'Super Fang',
    power: 1,
    type: 0,
    accuracy: 229,
    secondaryEffectChance: 0
  },
  {
    name: 'Slash',
    power: 70,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Substitute',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Struggle',
    power: 50,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Sketch',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Triple Kick',
    power: 10,
    type: 1,
    accuracy: 229,
    secondaryEffectChance: 0
  },
  {
    name: 'Thief',
    power: 40,
    type: 27,
    accuracy: 255,
    secondaryEffectChance: 255
  },
  {
    name: 'Spider Web',
    power: 0,
    type: 7,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Mind Reader',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Nightmare',
    power: 0,
    type: 8,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Flame Wheel',
    power: 60,
    type: 20,
    accuracy: 255,
    secondaryEffectChance: 25
  },
  {
    name: 'Snore',
    power: 40,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 76
  },
  {
    name: 'Curse',
    power: 0,
    type: 19,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Flail',
    power: 1,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Conversion 2',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Aeroblast',
    power: 100,
    type: 2,
    accuracy: 242,
    secondaryEffectChance: 0
  },
  {
    name: 'Cotton Spore',
    power: 0,
    type: 22,
    accuracy: 216,
    secondaryEffectChance: 0
  },
  {
    name: 'Reversal',
    power: 1,
    type: 1,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Spite',
    power: 0,
    type: 8,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Powder Snow',
    power: 40,
    type: 25,
    accuracy: 255,
    secondaryEffectChance: 25
  },
  {
    name: 'Protect',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Mach Punch',
    power: 40,
    type: 1,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Scary Face',
    power: 0,
    type: 0,
    accuracy: 229,
    secondaryEffectChance: 0
  },
  {
    name: 'Faint Attack',
    power: 60,
    type: 27,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Sweet Kiss',
    power: 0,
    type: 0,
    accuracy: 191,
    secondaryEffectChance: 0
  },
  {
    name: 'Belly Drum',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Sludge Bomb',
    power: 90,
    type: 3,
    accuracy: 255,
    secondaryEffectChance: 76
  },
  {
    name: 'Mud-Slap',
    power: 20,
    type: 4,
    accuracy: 255,
    secondaryEffectChance: 255
  },
  {
    name: 'Octazooka',
    power: 65,
    type: 21,
    accuracy: 216,
    secondaryEffectChance: 127
  },
  {
    name: 'Spikes',
    power: 0,
    type: 4,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Zap Cannon',
    power: 100,
    type: 23,
    accuracy: 127,
    secondaryEffectChance: 255
  },
  {
    name: 'Foresight',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Destiny Bond',
    power: 0,
    type: 8,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Perish Song',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Icy Wind',
    power: 55,
    type: 25,
    accuracy: 242,
    secondaryEffectChance: 255
  },
  {
    name: 'Detect',
    power: 0,
    type: 1,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Bone Rush',
    power: 25,
    type: 4,
    accuracy: 204,
    secondaryEffectChance: 0
  },
  {
    name: 'Lock-On',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Outrage',
    power: 90,
    type: 26,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Sandstorm',
    power: 0,
    type: 5,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Giga Drain',
    power: 60,
    type: 22,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Endure',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Charm',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Rollout',
    power: 30,
    type: 5,
    accuracy: 229,
    secondaryEffectChance: 0
  },
  {
    name: 'False Swipe',
    power: 40,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Swagger',
    power: 0,
    type: 0,
    accuracy: 229,
    secondaryEffectChance: 255
  },
  {
    name: 'Milk Drink',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Spark',
    power: 65,
    type: 23,
    accuracy: 255,
    secondaryEffectChance: 76
  },
  {
    name: 'Fury Cutter',
    power: 10,
    type: 7,
    accuracy: 242,
    secondaryEffectChance: 0
  },
  {
    name: 'Steel Wing',
    power: 70,
    type: 9,
    accuracy: 229,
    secondaryEffectChance: 25
  },
  {
    name: 'Mean Look',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Attract',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Sleep Talk',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Heal Bell',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Return',
    power: 1,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Present',
    power: 1,
    type: 0,
    accuracy: 229,
    secondaryEffectChance: 0
  },
  {
    name: 'Frustration',
    power: 1,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Safeguard',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Pain Split',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Sacred Fire',
    power: 100,
    type: 20,
    accuracy: 242,
    secondaryEffectChance: 127
  },
  {
    name: 'Magnitude',
    power: 1,
    type: 4,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'DynamicPunch',
    power: 100,
    type: 1,
    accuracy: 127,
    secondaryEffectChance: 255
  },
  {
    name: 'Megahorn',
    power: 120,
    type: 7,
    accuracy: 216,
    secondaryEffectChance: 0
  },
  {
    name: 'DragonBreath',
    power: 60,
    type: 26,
    accuracy: 255,
    secondaryEffectChance: 76
  },
  {
    name: 'Baton Pass',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Encore',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Pursuit',
    power: 40,
    type: 27,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Rapid Spin',
    power: 20,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Sweet Scent',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Iron Tail',
    power: 100,
    type: 9,
    accuracy: 191,
    secondaryEffectChance: 76
  },
  {
    name: 'Metal Claw',
    power: 50,
    type: 9,
    accuracy: 242,
    secondaryEffectChance: 25
  },
  {
    name: 'Vital Throw',
    power: 70,
    type: 1,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Morning Sun',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Synthesis',
    power: 0,
    type: 22,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Moonlight',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Hidden Power',
    power: 1,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Cross Chop',
    power: 100,
    type: 1,
    accuracy: 204,
    secondaryEffectChance: 0
  },
  {
    name: 'Twister',
    power: 40,
    type: 26,
    accuracy: 255,
    secondaryEffectChance: 51
  },
  {
    name: 'Rain Dance',
    power: 0,
    type: 21,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Sunny Day',
    power: 0,
    type: 20,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Crunch',
    power: 80,
    type: 27,
    accuracy: 255,
    secondaryEffectChance: 51
  },
  {
    name: 'Mirror Coat',
    power: 1,
    type: 24,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'Psych Up',
    power: 0,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'ExtremeSpeed',
    power: 80,
    type: 0,
    accuracy: 255,
    secondaryEffectChance: 0
  },
  {
    name: 'AncientPower',
    power: 60,
    type: 5,
    accuracy: 255,
    secondaryEffectChance: 25
  },
  {
    name: 'Shadow Ball',
    power: 80,
    type: 8,
    accuracy: 255,
    secondaryEffectChance: 51
  },
  {
    name: 'Future Sight',
    power: 80,
    type: 24,
    accuracy: 229,
    secondaryEffectChance: 0
  },
  {
    name: 'Rock Smash',
    power: 20,
    type: 1,
    accuracy: 255,
    secondaryEffectChance: 127
  },
  {
    name: 'Whirlpool',
    power: 15,
    type: 21,
    accuracy: 178,
    secondaryEffectChance: 0
  },
  {
    name: 'Beat Up',
    power: 10,
    type: 27,
    accuracy: 255,
    secondaryEffectChance: 0
  }
]

const itemNames = ['-', 'Master Ball', 'Ultra Ball', 'BrightPowder', 'Great Ball', 'Poké Ball', 'Teru-sama', 'Bicycle', 'Moon Stone', 'Antidote', 'Burn Heal', 'Ice Heal', 'Awakening', 'Parlyz Heal', 'Full Restore', 'Max Potion', 'Hyper Potion', 'Super Potion', 'Potion', 'Escape Rope', 'Repel', 'Max Elixer', 'Fire Stone', 'Thunderstone', 'Water Stone', 'Teru-sama', 'HP Up', 'Protein', 'Iron', 'Carbos', 'Lucky Punch', 'Calcium', 'Rare Candy', 'X Accuracy', 'Leaf Stone', 'Metal Powder', 'Nugget', 'Poké Doll', 'Full Heal', 'Revive', 'Max Revive', 'Guard Spec.', 'Super Repel', 'Max Repel', 'Dire Hit', 'Teru-sama', 'Fresh Water', 'Soda Pop', 'Lemonade', 'X Attack', 'Teru-sama', 'X Defend', 'X Speed', 'X Special', 'Coin Case', 'Itemfinder', 'Teru-sama', 'Exp.Share', 'Old Rod', 'Good Rod', 'Silver Leaf', 'Super Rod', 'PP Up', 'Ether', 'Max Ether', 'Elixer', 'Red Scale', 'SecretPotion', 'S.S. Ticket', 'Mystery Egg', 'Clear Bell', 'Silver Wing', 'Moomoo Milk', 'Quick Claw', 'PSNCureBerry', 'Gold Leaf', 'Soft Sand', 'Sharp Beak', 'PRZCureBerry', 'Burnt Berry', 'Ice Berry', 'Poison Barb', "King's Rock", 'Bitter Berry', 'Mint Berry', 'Red Apricorn', 'TinyMushroom', 'Big Mushroom', 'SilverPowder', 'Blu Apricorn', 'Teru-sama', 'Amulet Coin', 'Ylw Apricorn', 'Grn Apricorn', 'Cleanse Tag', 'Mystic Water', 'TwistedSpoon', 'Wht Apricorn', 'Blackbelt', 'Blk Apricorn', 'Teru-sama', 'Pnk Apricorn', 'BlackGlasses', 'SlowpokeTail', 'Pink Bow', 'Stick', 'Smoke Ball', 'NeverMeltIce', 'Magnet', 'MiracleBerry', 'Pearl', 'Big Pearl', 'Everstone', 'Spell Tag', 'RageCandyBar', 'GS Ball', 'Blue Card', 'Miracle Seed', 'Thick Club', 'Focus Band', 'Teru-sama', 'EnergyPowder', 'Energy Root', 'Heal Powder', 'Revival Herb', 'Hard Stone', 'Lucky Egg', 'Card Key', 'Machine Part', 'Egg Ticket', 'Lost Item', 'Stardust', 'Star Piece', 'Basement Key', 'Pass', 'Teru-sama', 'Teru-sama', 'Teru-sama', 'Charcoal', 'Berry Juice', 'Scope Lens', 'Teru-sama', 'Teru-sama', 'Metal Coat', 'Dragon Fang', 'Teru-sama', 'Leftovers', 'Teru-sama', 'Teru-sama', 'Teru-sama', 'MysteryBerry', 'Dragon Scale', 'Berserk Gene', 'Teru-sama', 'Teru-sama', 'Teru-sama', 'Sacred Ash', 'Heavy Ball', 'Flower Mail', 'Level Ball', 'Lure Ball', 'Fast Ball', 'Teru-sama', 'Light Ball', 'Friend Ball', 'Moon Ball', 'Love Ball', 'Normal Box', 'Gorgeous Box', 'Sun Stone', 'Polkadot Bow', 'Teru-sama', 'Up-Grade', 'Berry', 'Gold Berry', 'SquirtBottle', 'Teru-sama', 'Park Ball', 'Rainbow Wing', 'Teru-sama', 'Brick Piece', 'Surf Mail', 'Litebluemail', 'Portraitmail', 'Lovely Mail', 'Eon Mail', 'Morph Mail', 'Bluesky Mail', 'Music Mail', 'Mirage Mail', 'Teru-sama', 'TM01', 'TM02', 'TM03', 'TM04', 'TM04', 'TM05', 'TM06', 'TM07', 'TM08', 'TM09', 'TM10', 'TM11', 'TM12', 'TM13', 'TM14', 'TM15', 'TM16', 'TM17', 'TM18', 'TM19', 'TM20', 'TM21', 'TM22', 'TM23', 'TM24', 'TM25', 'TM26', 'TM27', 'TM28', 'TM28', 'TM29', 'TM30', 'TM31', 'TM32', 'TM33', 'TM34', 'TM35', 'TM36', 'TM37', 'TM38', 'TM39', 'TM40', 'TM41', 'TM42', 'TM43', 'TM44', 'TM45', 'TM46', 'TM47', 'TM48', 'TM49', 'TM50', 'HM01', 'HM02', 'HM03', 'HM04', 'HM05', 'HM06', 'HM07', 'HM08', 'HM09', 'HM10', 'HM11', 'HM12', 'Cancel']

const cupData = {
  'poke-poke-r1': [
    {
      name: 'Bug Catcher Nelson',
      ai: {
        randomFitness: true,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 165,
          gender: '♀',
          item: 73,
          moves: [
            38,
            97,
            129,
            219
          ],
          stats: {
            hp: 128,
            attack: 52,
            defense: 61,
            spclAtk: 71,
            spclDef: 111,
            speed: 86
          },
          friendship: 180
        },
        {
          level: 50,
          species: 167,
          gender: '♂',
          item: 78,
          moves: [
            103,
            169,
            101,
            40
          ],
          stats: {
            hp: 111,
            attack: 81,
            defense: 55,
            spclAtk: 56,
            spclDef: 56,
            speed: 46
          },
          friendship: 128
        },
        {
          level: 50,
          species: 10,
          gender: '♀',
          item: 79,
          moves: [
            33,
            81,
            0,
            0
          ],
          stats: {
            hp: 116,
            attack: 45,
            defense: 50,
            spclAtk: 36,
            spclDef: 36,
            speed: 61
          },
          friendship: 128
        },
        {
          level: 50,
          species: 13,
          gender: '♂',
          item: 119,
          moves: [
            40,
            81,
            0,
            0
          ],
          stats: {
            hp: 117,
            attack: 57,
            defense: 51,
            spclAtk: 42,
            spclDef: 42,
            speed: 71
          },
          friendship: 128
        },
        {
          level: 50,
          species: 193,
          gender: '♂',
          item: 83,
          moves: [
            48,
            197,
            129,
            104
          ],
          stats: {
            hp: 142,
            attack: 87,
            defense: 66,
            spclAtk: 97,
            spclDef: 67,
            speed: 116
          },
          friendship: 128
        },
        {
          level: 50,
          species: 48,
          gender: '♀',
          item: 117,
          moves: [
            94,
            48,
            193,
            78
          ],
          stats: {
            hp: 131,
            attack: 70,
            defense: 65,
            spclAtk: 56,
            spclDef: 71,
            speed: 61
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Swimmer♂ Bruce',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 153,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 118,
          gender: '♀',
          item: 173,
          moves: [
            32,
            175,
            240,
            127
          ],
          stats: {
            hp: 115,
            attack: 84,
            defense: 75,
            spclAtk: 50,
            spclDef: 65,
            speed: 79
          },
          friendship: 128
        },
        {
          level: 51,
          species: 86,
          gender: '♂',
          item: 107,
          moves: [
            219,
            58,
            36,
            240
          ],
          stats: {
            hp: 135,
            attack: 67,
            defense: 73,
            spclAtk: 63,
            spclDef: 89,
            speed: 63
          },
          friendship: 128
        },
        {
          level: 50,
          species: 120,
          gender: '',
          item: 95,
          moves: [
            240,
            129,
            105,
            56
          ],
          stats: {
            hp: 103,
            attack: 60,
            defense: 71,
            spclAtk: 86,
            spclDef: 71,
            speed: 100
          },
          friendship: 128
        },
        {
          level: 50,
          species: 90,
          gender: '♂',
          item: 82,
          moves: [
            240,
            182,
            128,
            48
          ],
          stats: {
            hp: 98,
            attack: 86,
            defense: 117,
            spclAtk: 62,
            spclDef: 42,
            speed: 57
          },
          friendship: 128
        },
        {
          level: 51,
          species: 223,
          gender: '♂',
          item: 119,
          moves: [
            199,
            60,
            62,
            240
          ],
          stats: {
            hp: 105,
            attack: 88,
            defense: 53,
            spclAtk: 84,
            spclDef: 53,
            speed: 84
          },
          friendship: 128
        },
        {
          level: 50,
          species: 61,
          gender: '♀',
          item: 146,
          moves: [
            95,
            34,
            187,
            57
          ],
          stats: {
            hp: 138,
            attack: 80,
            defense: 81,
            spclAtk: 66,
            spclDef: 66,
            speed: 105
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Hiker Chester',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 178,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          143,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 51,
          species: 66,
          gender: '♂',
          item: 98,
          moves: [
            116,
            69,
            238,
            7
          ],
          stats: {
            hp: 148,
            attack: 101,
            defense: 70,
            spclAtk: 54,
            spclDef: 54,
            speed: 56
          },
          friendship: 0
        },
        {
          level: 53,
          species: 95,
          gender: '♂',
          item: 76,
          moves: [
            201,
            20,
            92,
            21
          ],
          stats: {
            hp: 111,
            attack: 72,
            defense: 190,
            spclAtk: 52,
            spclDef: 68,
            speed: 95
          },
          friendship: 0
        },
        {
          level: 51,
          species: 75,
          gender: '♂',
          item: 73,
          moves: [
            111,
            205,
            89,
            120
          ],
          stats: {
            hp: 128,
            attack: 121,
            defense: 137,
            spclAtk: 66,
            spclDef: 66,
            speed: 56
          },
          friendship: 0
        },
        {
          level: 51,
          species: 185,
          gender: '♂',
          item: 119,
          moves: [
            205,
            157,
            102,
            185
          ],
          stats: {
            hp: 143,
            attack: 126,
            defense: 137,
            spclAtk: 50,
            spclDef: 86,
            speed: 50
          },
          friendship: 0
        },
        {
          level: 51,
          species: 111,
          gender: '♂',
          item: 82,
          moves: [
            205,
            32,
            184,
            23
          ],
          stats: {
            hp: 153,
            attack: 111,
            defense: 117,
            spclAtk: 50,
            spclDef: 50,
            speed: 45
          },
          friendship: 0
        },
        {
          level: 53,
          species: 231,
          gender: '♂',
          item: 109,
          moves: [
            111,
            205,
            175,
            38
          ],
          stats: {
            hp: 170,
            attack: 88,
            defense: 84,
            spclAtk: 63,
            spclDef: 63,
            speed: 63
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Super Nerd Clifford',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 178,
        weightToSecondaryEffects: 198,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 153,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 178,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          178
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 81,
          gender: '',
          item: 143,
          moves: [
            199,
            192,
            48,
            103
          ],
          stats: {
            hp: 101,
            attack: 55,
            defense: 89,
            spclAtk: 114,
            spclDef: 74,
            speed: 65
          },
          friendship: 0
        },
        {
          level: 50,
          species: 93,
          gender: '♂',
          item: 113,
          moves: [
            122,
            174,
            180,
            101
          ],
          stats: {
            hp: 116,
            attack: 74,
            defense: 65,
            spclAtk: 135,
            spclDef: 75,
            speed: 115
          },
          friendship: 0
        },
        {
          level: 55,
          species: 137,
          gender: '',
          item: 73,
          moves: [
            160,
            161,
            207,
            60
          ],
          stats: {
            hp: 154,
            attack: 87,
            defense: 97,
            spclAtk: 113,
            spclDef: 102,
            speed: 65
          },
          friendship: 0
        },
        {
          level: 50,
          species: 180,
          gender: '♀',
          item: 108,
          moves: [
            86,
            87,
            178,
            231
          ],
          stats: {
            hp: 146,
            attack: 75,
            defense: 74,
            spclAtk: 99,
            spclDef: 79,
            speed: 65
          },
          friendship: 0
        },
        {
          level: 50,
          species: 23,
          gender: '♂',
          item: 81,
          moves: [
            137,
            35,
            44,
            188
          ],
          stats: {
            hp: 106,
            attack: 84,
            defense: 64,
            spclAtk: 60,
            spclDef: 74,
            speed: 75
          },
          friendship: 0
        },
        {
          level: 55,
          species: 101,
          gender: '',
          item: 109,
          moves: [
            103,
            120,
            49,
            243
          ],
          stats: {
            hp: 148,
            attack: 76,
            defense: 97,
            spclAtk: 108,
            spclDef: 108,
            speed: 175
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Beauty Alissa',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: true,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 103,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 178,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 52,
          species: 241,
          gender: '♀',
          item: 82,
          moves: [
            213,
            23,
            34,
            218
          ],
          stats: {
            hp: 166,
            attack: 92,
            defense: 117,
            spclAtk: 49,
            spclDef: 80,
            speed: 113
          },
          friendship: 70
        },
        {
          level: 51,
          species: 209,
          gender: '♀',
          item: 83,
          moves: [
            213,
            36,
            204,
            44
          ],
          stats: {
            hp: 140,
            attack: 103,
            defense: 71,
            spclAtk: 61,
            spclDef: 61,
            speed: 52
          },
          friendship: 0
        },
        {
          level: 52,
          species: 211,
          gender: '♀',
          item: 139,
          moves: [
            213,
            56,
            36,
            42
          ],
          stats: {
            hp: 147,
            attack: 120,
            defense: 99,
            spclAtk: 78,
            spclDef: 78,
            speed: 110
          },
          friendship: 0
        },
        {
          level: 51,
          species: 222,
          gender: '♀',
          item: 73,
          moves: [
            213,
            246,
            243,
            94
          ],
          stats: {
            hp: 134,
            attack: 77,
            defense: 107,
            spclAtk: 87,
            spclDef: 107,
            speed: 57
          },
          friendship: 0
        },
        {
          level: 52,
          species: 188,
          gender: '♀',
          item: 119,
          moves: [
            213,
            73,
            207,
            72
          ],
          stats: {
            hp: 137,
            attack: 68,
            defense: 73,
            spclAtk: 67,
            spclDef: 88,
            speed: 105
          },
          friendship: 0
        },
        {
          level: 51,
          species: 113,
          gender: '♀',
          item: 104,
          moves: [
            213,
            47,
            121,
            196
          ],
          stats: {
            hp: 333,
            attack: 26,
            defense: 25,
            spclAtk: 56,
            spclDef: 127,
            speed: 72
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Burglar Jensen',
      ai: {
        randomFitness: false,
        usesRandomLead: true,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 53,
          gender: '♀',
          item: 0,
          moves: [
            168,
            44,
            6,
            247
          ],
          stats: {
            hp: 143,
            attack: 92,
            defense: 81,
            spclAtk: 86,
            spclDef: 86,
            speed: 137
          },
          friendship: 128
        },
        {
          level: 53,
          species: 5,
          gender: '♂',
          item: 144,
          moves: [
            53,
            83,
            225,
            184
          ],
          stats: {
            hp: 144,
            attack: 91,
            defense: 83,
            spclAtk: 107,
            spclDef: 91,
            speed: 108
          },
          friendship: 128
        },
        {
          level: 52,
          species: 228,
          gender: '♀',
          item: 0,
          moves: [
            168,
            53,
            242,
            46
          ],
          stats: {
            hp: 128,
            attack: 85,
            defense: 53,
            spclAtk: 105,
            spclDef: 74,
            speed: 90
          },
          friendship: 128
        },
        {
          level: 53,
          species: 125,
          gender: '♂',
          item: 0,
          moves: [
            168,
            9,
            129,
            103
          ],
          stats: {
            hp: 146,
            attack: 115,
            defense: 83,
            spclAtk: 124,
            spclDef: 113,
            speed: 134
          },
          friendship: 128
        },
        {
          level: 50,
          species: 156,
          gender: '♂',
          item: 138,
          moves: [
            172,
            98,
            189,
            104
          ],
          stats: {
            hp: 136,
            attack: 86,
            defense: 79,
            spclAtk: 101,
            spclDef: 86,
            speed: 102
          },
          friendship: 128
        },
        {
          level: 52,
          species: 207,
          gender: '♂',
          item: 0,
          moves: [
            168,
            163,
            185,
            103
          ],
          stats: {
            hp: 143,
            attack: 105,
            defense: 132,
            spclAtk: 59,
            spclDef: 90,
            speed: 111
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Boarder Claude',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 178,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 51,
          species: 225,
          gender: '♀',
          item: 139,
          moves: [
            217,
            19,
            196,
            216
          ],
          stats: {
            hp: 127,
            attack: 78,
            defense: 67,
            spclAtk: 88,
            spclDef: 67,
            speed: 98
          },
          friendship: 255
        },
        {
          level: 51,
          species: 215,
          gender: '♀',
          item: 82,
          moves: [
            163,
            185,
            8,
            196
          ],
          stats: {
            hp: 138,
            attack: 119,
            defense: 77,
            spclAtk: 57,
            spclDef: 98,
            speed: 139
          },
          friendship: 0
        },
        {
          level: 51,
          species: 73,
          gender: '♀',
          item: 109,
          moves: [
            196,
            35,
            92,
            57
          ],
          stats: {
            hp: 158,
            attack: 89,
            defense: 83,
            spclAtk: 98,
            spclDef: 139,
            speed: 118
          },
          friendship: 0
        },
        {
          level: 52,
          species: 128,
          gender: '♂',
          item: 78,
          moves: [
            87,
            57,
            70,
            196
          ],
          stats: {
            hp: 153,
            attack: 118,
            defense: 112,
            spclAtk: 55,
            spclDef: 86,
            speed: 128
          },
          friendship: 0
        },
        {
          level: 51,
          species: 216,
          gender: '♀',
          item: 173,
          moves: [
            122,
            223,
            210,
            7
          ],
          stats: {
            hp: 143,
            attack: 104,
            defense: 72,
            spclAtk: 72,
            spclDef: 72,
            speed: 62
          },
          friendship: 0
        },
        {
          level: 52,
          species: 134,
          gender: '♂',
          item: 95,
          moves: [
            44,
            196,
            114,
            247
          ],
          stats: {
            hp: 214,
            attack: 86,
            defense: 80,
            spclAtk: 132,
            spclDef: 116,
            speed: 85
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Psychic Mason',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 51,
          species: 235,
          gender: '♀',
          item: 73,
          moves: [
            147,
            109,
            177,
            69
          ],
          stats: {
            hp: 142,
            attack: 45,
            defense: 59,
            spclAtk: 44,
            spclDef: 69,
            speed: 101
          },
          friendship: 0
        },
        {
          level: 52,
          species: 79,
          gender: '♂',
          item: 83,
          moves: [
            94,
            91,
            174,
            57
          ],
          stats: {
            hp: 177,
            attack: 96,
            defense: 92,
            spclAtk: 66,
            spclDef: 66,
            speed: 40
          },
          friendship: 0
        },
        {
          level: 52,
          species: 26,
          gender: '♀',
          item: 119,
          moves: [
            85,
            86,
            231,
            223
          ],
          stats: {
            hp: 149,
            attack: 118,
            defense: 81,
            spclAtk: 117,
            spclDef: 107,
            speed: 129
          },
          friendship: 0
        },
        {
          level: 51,
          species: 58,
          gender: '♂',
          item: 150,
          moves: [
            53,
            225,
            129,
            91
          ],
          stats: {
            hp: 142,
            attack: 96,
            defense: 69,
            spclAtk: 95,
            spclDef: 74,
            speed: 86
          },
          friendship: 0
        },
        {
          level: 52,
          species: 177,
          gender: '♂',
          item: 174,
          moves: [
            109,
            101,
            203,
            182
          ],
          stats: {
            hp: 125,
            attack: 80,
            defense: 72,
            spclAtk: 98,
            spclDef: 72,
            speed: 98
          },
          friendship: 0
        },
        {
          level: 52,
          species: 36,
          gender: '♀',
          item: 84,
          moves: [
            9,
            247,
            8,
            213
          ],
          stats: {
            hp: 186,
            attack: 98,
            defense: 100,
            spclAtk: 112,
            spclDef: 117,
            speed: 87
          },
          friendship: 0
        }
      ]
    }
  ],
  'poke-great-r1': [
    {
      name: 'Pokéfan Carmen',
      ai: {
        randomFitness: true,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 52,
          species: 25,
          gender: '♀',
          item: 163,
          moves: [
            85,
            86,
            104,
            223
          ],
          stats: {
            hp: 129,
            attack: 88,
            defense: 61,
            spclAtk: 81,
            spclDef: 71,
            speed: 124
          },
          friendship: 180
        },
        {
          level: 52,
          species: 52,
          gender: '♀',
          item: 73,
          moves: [
            6,
            185,
            103,
            168
          ],
          stats: {
            hp: 134,
            attack: 77,
            defense: 66,
            spclAtk: 71,
            spclDef: 71,
            speed: 124
          },
          friendship: 128
        },
        {
          level: 51,
          species: 35,
          gender: '♀',
          item: 74,
          moves: [
            227,
            118,
            47,
            236
          ],
          stats: {
            hp: 163,
            attack: 76,
            defense: 78,
            spclAtk: 90,
            spclDef: 95,
            speed: 66
          },
          friendship: 128
        },
        {
          level: 51,
          species: 213,
          gender: '♂',
          item: 84,
          moves: [
            227,
            219,
            207,
            35
          ],
          stats: {
            hp: 103,
            attack: 43,
            defense: 264,
            spclAtk: 39,
            spclDef: 264,
            speed: 35
          },
          friendship: 128
        },
        {
          level: 51,
          species: 175,
          gender: '♂',
          item: 82,
          moves: [
            186,
            227,
            118,
            204
          ],
          stats: {
            hp: 126,
            attack: 54,
            defense: 99,
            spclAtk: 75,
            spclDef: 100,
            speed: 53
          },
          friendship: 128
        },
        {
          level: 51,
          species: 122,
          gender: '♀',
          item: 119,
          moves: [
            60,
            227,
            164,
            115
          ],
          stats: {
            hp: 132,
            attack: 76,
            defense: 95,
            spclAtk: 131,
            spclDef: 151,
            speed: 122
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Youngster Wyatt',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: true,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 51,
          species: 2,
          gender: '♂',
          item: 73,
          moves: [
            75,
            73,
            235,
            230
          ],
          stats: {
            hp: 138,
            attack: 83,
            defense: 83,
            spclAtk: 100,
            spclDef: 100,
            speed: 81
          },
          friendship: 128
        },
        {
          level: 51,
          species: 188,
          gender: '♀',
          item: 78,
          moves: [
            73,
            178,
            72,
            79
          ],
          stats: {
            hp: 133,
            attack: 66,
            defense: 70,
            spclAtk: 65,
            spclDef: 85,
            speed: 101
          },
          friendship: 128
        },
        {
          level: 51,
          species: 17,
          gender: '♂',
          item: 77,
          moves: [
            119,
            28,
            18,
            17
          ],
          stats: {
            hp: 136,
            attack: 85,
            defense: 76,
            spclAtk: 71,
            spclDef: 71,
            speed: 92
          },
          friendship: 128
        },
        {
          level: 51,
          species: 30,
          gender: '♀',
          item: 83,
          moves: [
            29,
            24,
            231,
            44
          ],
          stats: {
            hp: 148,
            attack: 85,
            defense: 89,
            spclAtk: 77,
            spclDef: 77,
            speed: 79
          },
          friendship: 128
        },
        {
          level: 51,
          species: 132,
          gender: '',
          item: 119,
          moves: [
            144,
            0,
            0,
            0
          ],
          stats: {
            hp: 126,
            attack: 71,
            defense: 70,
            spclAtk: 70,
            spclDef: 70,
            speed: 71
          },
          friendship: 128
        },
        {
          level: 51,
          species: 214,
          gender: '♀',
          item: 88,
          moves: [
            210,
            179,
            29,
            68
          ],
          stats: {
            hp: 158,
            attack: 147,
            defense: 95,
            spclAtk: 60,
            spclDef: 116,
            speed: 107
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Firebreather Cliff',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 153,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 51,
          species: 78,
          gender: '♂',
          item: 139,
          moves: [
            241,
            83,
            23,
            92
          ],
          stats: {
            hp: 140,
            attack: 127,
            defense: 93,
            spclAtk: 103,
            spclDef: 103,
            speed: 128
          },
          friendship: 0
        },
        {
          level: 50,
          species: 126,
          gender: '♂',
          item: 73,
          moves: [
            241,
            109,
            53,
            249
          ],
          stats: {
            hp: 144,
            attack: 118,
            defense: 81,
            spclAtk: 124,
            spclDef: 109,
            speed: 117
          },
          friendship: 0
        },
        {
          level: 53,
          species: 104,
          gender: '♀',
          item: 76,
          moves: [
            241,
            37,
            198,
            7
          ],
          stats: {
            hp: 139,
            attack: 76,
            defense: 123,
            spclAtk: 64,
            spclDef: 75,
            speed: 60
          },
          friendship: 0
        },
        {
          level: 51,
          species: 38,
          gender: '♀',
          item: 173,
          moves: [
            241,
            109,
            53,
            83
          ],
          stats: {
            hp: 148,
            attack: 103,
            defense: 98,
            spclAtk: 104,
            spclDef: 123,
            speed: 123
          },
          friendship: 0
        },
        {
          level: 50,
          species: 162,
          gender: '♂',
          item: 82,
          moves: [
            241,
            21,
            7,
            8
          ],
          stats: {
            hp: 157,
            attack: 101,
            defense: 85,
            spclAtk: 66,
            spclDef: 76,
            speed: 111
          },
          friendship: 0
        },
        {
          level: 53,
          species: 45,
          gender: '♂',
          item: 109,
          moves: [
            241,
            78,
            76,
            51
          ],
          stats: {
            hp: 155,
            attack: 111,
            defense: 112,
            spclAtk: 128,
            spclDef: 117,
            speed: 75
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Biker Dillon',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: true,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 178,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 178,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 178,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 178,
        desireToInflictInfatuation: 178,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 70,
          gender: '♀',
          item: 117,
          moves: [
            92,
            35,
            75,
            230
          ],
          stats: {
            hp: 142,
            attack: 111,
            defense: 70,
            spclAtk: 105,
            spclDef: 65,
            speed: 76
          },
          friendship: 0
        },
        {
          level: 50,
          species: 168,
          gender: '♀',
          item: 119,
          moves: [
            101,
            184,
            91,
            213
          ],
          stats: {
            hp: 149,
            attack: 113,
            defense: 94,
            spclAtk: 84,
            spclDef: 84,
            speed: 64
          },
          friendship: 0
        },
        {
          level: 50,
          species: 28,
          gender: '♀',
          item: 83,
          moves: [
            189,
            89,
            168,
            249
          ],
          stats: {
            hp: 152,
            attack: 121,
            defense: 132,
            spclAtk: 67,
            spclDef: 77,
            speed: 86
          },
          friendship: 0
        },
        {
          level: 50,
          species: 109,
          gender: '♀',
          item: 73,
          moves: [
            153,
            194,
            124,
            114
          ],
          stats: {
            hp: 117,
            attack: 86,
            defense: 117,
            spclAtk: 82,
            spclDef: 67,
            speed: 56
          },
          friendship: 0
        },
        {
          level: 55,
          species: 206,
          gender: '♀',
          item: 146,
          moves: [
            137,
            103,
            205,
            207
          ],
          stats: {
            hp: 194,
            attack: 102,
            defense: 101,
            spclAtk: 95,
            spclDef: 95,
            speed: 74
          },
          friendship: 0
        },
        {
          level: 55,
          species: 181,
          gender: '♀',
          item: 108,
          moves: [
            9,
            86,
            231,
            29
          ],
          stats: {
            hp: 178,
            attack: 103,
            defense: 102,
            spclAtk: 146,
            spclDef: 118,
            speed: 81
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Teacher Molly',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: true,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 153,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          178,
          128,
          128,
          128,
          153
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 203,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 51,
          species: 166,
          gender: '♀',
          item: 119,
          moves: [
            226,
            48,
            97,
            8
          ],
          stats: {
            hp: 135,
            attack: 58,
            defense: 74,
            spclAtk: 79,
            spclDef: 136,
            speed: 109
          },
          friendship: 0
        },
        {
          level: 51,
          species: 64,
          gender: '♂',
          item: 78,
          moves: [
            60,
            248,
            115,
            105
          ],
          stats: {
            hp: 120,
            attack: 58,
            defense: 54,
            spclAtk: 146,
            spclDef: 95,
            speed: 129
          },
          friendship: 0
        },
        {
          level: 52,
          species: 190,
          gender: '♀',
          item: 173,
          moves: [
            226,
            97,
            247,
            207
          ],
          stats: {
            hp: 143,
            attack: 97,
            defense: 82,
            spclAtk: 66,
            spclDef: 82,
            speed: 112
          },
          friendship: 0
        },
        {
          level: 51,
          species: 203,
          gender: '♂',
          item: 73,
          moves: [
            226,
            97,
            104,
            60
          ],
          stats: {
            hp: 146,
            attack: 108,
            defense: 89,
            spclAtk: 114,
            spclDef: 89,
            speed: 109
          },
          friendship: 0
        },
        {
          level: 52,
          species: 226,
          gender: '♀',
          item: 139,
          moves: [
            109,
            57,
            36,
            17
          ],
          stats: {
            hp: 154,
            attack: 65,
            defense: 96,
            spclAtk: 106,
            spclDef: 168,
            speed: 97
          },
          friendship: 0
        },
        {
          level: 51,
          species: 148,
          gender: '♂',
          item: 82,
          moves: [
            225,
            86,
            29,
            126
          ],
          stats: {
            hp: 144,
            attack: 112,
            defense: 90,
            spclAtk: 95,
            spclDef: 95,
            speed: 95
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Sage Chen',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 153,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 167,
          gender: '♂',
          item: 109,
          moves: [
            169,
            103,
            207,
            101
          ],
          stats: {
            hp: 115,
            attack: 86,
            defense: 60,
            spclAtk: 60,
            spclDef: 60,
            speed: 51
          },
          friendship: 0
        },
        {
          level: 53,
          species: 124,
          gender: '♀',
          item: 73,
          moves: [
            212,
            142,
            171,
            181
          ],
          stats: {
            hp: 148,
            attack: 80,
            defense: 58,
            spclAtk: 143,
            spclDef: 122,
            speed: 123
          },
          friendship: 0
        },
        {
          level: 52,
          species: 93,
          gender: '♂',
          item: 102,
          moves: [
            212,
            109,
            174,
            194
          ],
          stats: {
            hp: 123,
            attack: 79,
            defense: 67,
            spclAtk: 141,
            spclDef: 79,
            speed: 119
          },
          friendship: 0
        },
        {
          level: 50,
          species: 200,
          gender: '♂',
          item: 119,
          moves: [
            212,
            109,
            220,
            92
          ],
          stats: {
            hp: 135,
            attack: 86,
            defense: 80,
            spclAtk: 105,
            spclDef: 105,
            speed: 106
          },
          friendship: 0
        },
        {
          level: 53,
          species: 198,
          gender: '♂',
          item: 0,
          moves: [
            212,
            228,
            185,
            168
          ],
          stats: {
            hp: 143,
            attack: 117,
            defense: 65,
            spclAtk: 111,
            spclDef: 65,
            speed: 118
          },
          friendship: 0
        },
        {
          level: 52,
          species: 41,
          gender: '♂',
          item: 82,
          moves: [
            212,
            109,
            114,
            202
          ],
          stats: {
            hp: 119,
            attack: 74,
            defense: 57,
            spclAtk: 52,
            spclDef: 62,
            speed: 79
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Pokéfan Baxter',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 178,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 153,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 153,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 192,
          gender: '♀',
          item: 117,
          moves: [
            80,
            235,
            188,
            72
          ],
          stats: {
            hp: 156,
            attack: 100,
            defense: 81,
            spclAtk: 131,
            spclDef: 111,
            speed: 56
          },
          friendship: 128
        },
        {
          level: 53,
          species: 108,
          gender: '♀',
          item: 119,
          moves: [
            48,
            103,
            89,
            57
          ],
          stats: {
            hp: 184,
            attack: 83,
            defense: 106,
            spclAtk: 90,
            spclDef: 106,
            speed: 57
          },
          friendship: 128
        },
        {
          level: 51,
          species: 171,
          gender: '♀',
          item: 83,
          moves: [
            109,
            209,
            56,
            36
          ],
          stats: {
            hp: 208,
            attack: 83,
            defense: 84,
            spclAtk: 102,
            spclDef: 102,
            speed: 92
          },
          friendship: 128
        },
        {
          level: 50,
          species: 219,
          gender: '♂',
          item: 109,
          moves: [
            157,
            53,
            133,
            123
          ],
          stats: {
            hp: 124,
            attack: 77,
            defense: 143,
            spclAtk: 103,
            spclDef: 103,
            speed: 53
          },
          friendship: 128
        },
        {
          level: 53,
          species: 224,
          gender: '♀',
          item: 82,
          moves: [
            60,
            190,
            216,
            62
          ],
          stats: {
            hp: 167,
            attack: 136,
            defense: 106,
            spclAtk: 136,
            spclDef: 105,
            speed: 74
          },
          friendship: 128
        },
        {
          level: 51,
          species: 204,
          gender: '♀',
          item: 104,
          moves: [
            38,
            182,
            153,
            229
          ],
          stats: {
            hp: 132,
            attack: 92,
            defense: 116,
            spclAtk: 61,
            spclDef: 61,
            speed: 40
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Pokémaniac Pedro',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 153,
        desireToInflictFlinch: 153,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 52,
          species: 117,
          gender: '♀',
          item: 95,
          moves: [
            57,
            239,
            97,
            108
          ],
          stats: {
            hp: 141,
            attack: 93,
            defense: 126,
            spclAtk: 126,
            spclDef: 74,
            speed: 115
          },
          friendship: 0
        },
        {
          level: 51,
          species: 247,
          gender: '♂',
          item: 73,
          moves: [
            242,
            157,
            89,
            201
          ],
          stats: {
            hp: 147,
            attack: 113,
            defense: 95,
            spclAtk: 90,
            spclDef: 95,
            speed: 75
          },
          friendship: 0
        },
        {
          level: 51,
          species: 34,
          gender: '♂',
          item: 119,
          moves: [
            9,
            7,
            8,
            46
          ],
          stats: {
            hp: 168,
            attack: 118,
            defense: 102,
            spclAtk: 110,
            spclDef: 100,
            speed: 111
          },
          friendship: 0
        },
        {
          level: 52,
          species: 20,
          gender: '♀',
          item: 140,
          moves: [
            162,
            158,
            228,
            104
          ],
          stats: {
            hp: 139,
            attack: 108,
            defense: 87,
            spclAtk: 77,
            spclDef: 98,
            speed: 125
          },
          friendship: 0
        },
        {
          level: 52,
          species: 164,
          gender: '♀',
          item: 143,
          moves: [
            95,
            193,
            211,
            93
          ],
          stats: {
            hp: 191,
            attack: 77,
            defense: 76,
            spclAtk: 103,
            spclDef: 124,
            speed: 98
          },
          friendship: 0
        },
        {
          level: 51,
          species: 114,
          gender: '♂',
          item: 109,
          moves: [
            72,
            78,
            21,
            216
          ],
          stats: {
            hp: 142,
            attack: 84,
            defense: 141,
            spclAtk: 125,
            spclDef: 64,
            speed: 85
          },
          friendship: 180
        }
      ]
    }
  ],
  'poke-ultra-r1': [
    {
      name: 'Bug Catcher Nelson',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: true,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          153,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 51,
          species: 123,
          gender: '♂',
          item: 82,
          moves: [
            14,
            228,
            211,
            210
          ],
          stats: {
            hp: 150,
            attack: 138,
            defense: 104,
            spclAtk: 78,
            spclDef: 104,
            speed: 130
          },
          friendship: 180
        },
        {
          level: 52,
          species: 12,
          gender: '♂',
          item: 73,
          moves: [
            48,
            60,
            16,
            79
          ],
          stats: {
            hp: 142,
            attack: 73,
            defense: 75,
            spclAtk: 106,
            spclDef: 106,
            speed: 97
          },
          friendship: 128
        },
        {
          level: 52,
          species: 47,
          gender: '♂',
          item: 74,
          moves: [
            147,
            202,
            188,
            91
          ],
          stats: {
            hp: 142,
            attack: 125,
            defense: 106,
            spclAtk: 85,
            spclDef: 106,
            speed: 55
          },
          friendship: 128
        },
        {
          level: 52,
          species: 206,
          gender: '♂',
          item: 78,
          moves: [
            137,
            91,
            207,
            244
          ],
          stats: {
            hp: 184,
            attack: 99,
            defense: 96,
            spclAtk: 90,
            spclDef: 90,
            speed: 71
          },
          friendship: 128
        },
        {
          level: 52,
          species: 214,
          gender: '♂',
          item: 119,
          moves: [
            179,
            203,
            29,
            237
          ],
          stats: {
            hp: 163,
            attack: 156,
            defense: 101,
            spclAtk: 64,
            spclDef: 122,
            speed: 112
          },
          friendship: 128
        },
        {
          level: 51,
          species: 127,
          gender: '♂',
          item: 88,
          moves: [
            14,
            210,
            70,
            69
          ],
          stats: {
            hp: 145,
            attack: 153,
            defense: 124,
            spclAtk: 78,
            spclDef: 94,
            speed: 110
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Swimmer♂ Bruce',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 87,
          gender: '♀',
          item: 173,
          moves: [
            240,
            250,
            92,
            36
          ],
          stats: {
            hp: 167,
            attack: 93,
            defense: 102,
            spclAtk: 92,
            spclDef: 117,
            speed: 93
          },
          friendship: 128
        },
        {
          level: 51,
          species: 62,
          gender: '♂',
          item: 82,
          moves: [
            240,
            34,
            187,
            127
          ],
          stats: {
            hp: 165,
            attack: 112,
            defense: 118,
            spclAtk: 93,
            spclDef: 113,
            speed: 93
          },
          friendship: 128
        },
        {
          level: 54,
          species: 195,
          gender: '♀',
          item: 95,
          moves: [
            240,
            57,
            89,
            188
          ],
          stats: {
            hp: 185,
            attack: 116,
            defense: 115,
            spclAtk: 94,
            spclDef: 94,
            speed: 62
          },
          friendship: 128
        },
        {
          level: 50,
          species: 82,
          gender: '',
          item: 143,
          moves: [
            86,
            87,
            129,
            103
          ],
          stats: {
            hp: 127,
            attack: 83,
            defense: 117,
            spclAtk: 142,
            spclDef: 92,
            speed: 93
          },
          friendship: 128
        },
        {
          level: 51,
          species: 141,
          gender: '♂',
          item: 73,
          moves: [
            240,
            72,
            57,
            218
          ],
          stats: {
            hp: 140,
            attack: 141,
            defense: 129,
            spclAtk: 89,
            spclDef: 94,
            speed: 105
          },
          friendship: 128
        },
        {
          level: 54,
          species: 80,
          gender: '♀',
          item: 109,
          moves: [
            240,
            57,
            237,
            94
          ],
          stats: {
            hp: 185,
            attack: 103,
            defense: 140,
            spclAtk: 129,
            spclDef: 108,
            speed: 55
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Hiker Chester',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          178,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 76,
          gender: '♂',
          item: 173,
          moves: [
            205,
            111,
            222,
            153
          ],
          stats: {
            hp: 160,
            attack: 136,
            defense: 149,
            spclAtk: 74,
            spclDef: 84,
            speed: 64
          },
          friendship: 0
        },
        {
          level: 55,
          species: 232,
          gender: '♂',
          item: 76,
          moves: [
            205,
            111,
            229,
            175
          ],
          stats: {
            hp: 186,
            attack: 160,
            defense: 152,
            spclAtk: 86,
            spclDef: 86,
            speed: 75
          },
          friendship: 0
        },
        {
          level: 50,
          species: 217,
          gender: '♂',
          item: 119,
          moves: [
            205,
            111,
            9,
            122
          ],
          stats: {
            hp: 170,
            attack: 156,
            defense: 94,
            spclAtk: 94,
            spclDef: 94,
            speed: 74
          },
          friendship: 0
        },
        {
          level: 50,
          species: 138,
          gender: '♂',
          item: 79,
          moves: [
            205,
            246,
            57,
            44
          ],
          stats: {
            hp: 115,
            attack: 66,
            defense: 119,
            spclAtk: 109,
            spclDef: 74,
            speed: 54
          },
          friendship: 0
        },
        {
          level: 50,
          species: 205,
          gender: '♂',
          item: 104,
          moves: [
            205,
            111,
            117,
            153
          ],
          stats: {
            hp: 155,
            attack: 116,
            defense: 159,
            spclAtk: 79,
            spclDef: 79,
            speed: 59
          },
          friendship: 0
        },
        {
          level: 55,
          species: 208,
          gender: '♂',
          item: 143,
          moves: [
            205,
            111,
            231,
            103
          ],
          stats: {
            hp: 170,
            attack: 122,
            defense: 240,
            spclAtk: 81,
            spclDef: 92,
            speed: 53
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Super Nerd Clifford',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 178,
        weightToSecondaryEffects: 198,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 153,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 178,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          178
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 181,
          gender: '♂',
          item: 73,
          moves: [
            104,
            87,
            129,
            86
          ],
          stats: {
            hp: 163,
            attack: 101,
            defense: 95,
            spclAtk: 135,
            spclDef: 110,
            speed: 75
          },
          friendship: 0
        },
        {
          level: 52,
          species: 222,
          gender: '♀',
          item: 74,
          moves: [
            243,
            94,
            105,
            89
          ],
          stats: {
            hp: 143,
            attack: 81,
            defense: 111,
            spclAtk: 90,
            spclDef: 111,
            speed: 60
          },
          friendship: 0
        },
        {
          level: 53,
          species: 233,
          gender: '',
          item: 109,
          moves: [
            176,
            161,
            94,
            192
          ],
          stats: {
            hp: 178,
            attack: 109,
            defense: 118,
            spclAtk: 134,
            spclDef: 124,
            speed: 88
          },
          friendship: 0
        },
        {
          level: 50,
          species: 202,
          gender: '♀',
          item: 119,
          moves: [
            68,
            243,
            194,
            219
          ],
          stats: {
            hp: 268,
            attack: 57,
            defense: 81,
            spclAtk: 56,
            spclDef: 81,
            speed: 57
          },
          friendship: 0
        },
        {
          level: 52,
          species: 73,
          gender: '♂',
          item: 95,
          moves: [
            92,
            35,
            57,
            182
          ],
          stats: {
            hp: 166,
            attack: 100,
            defense: 87,
            spclAtk: 103,
            spclDef: 144,
            speed: 124
          },
          friendship: 0
        },
        {
          level: 53,
          species: 227,
          gender: '♂',
          item: 143,
          moves: [
            207,
            211,
            201,
            19
          ],
          stats: {
            hp: 153,
            attack: 112,
            defense: 168,
            spclAtk: 62,
            spclDef: 94,
            speed: 94
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Beauty Alissa',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: true,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 103,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 178,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 53,
          species: 241,
          gender: '♀',
          item: 82,
          moves: [
            213,
            34,
            247,
            215
          ],
          stats: {
            hp: 184,
            attack: 111,
            defense: 134,
            spclAtk: 65,
            spclDef: 97,
            speed: 132
          },
          friendship: 0
        },
        {
          level: 51,
          species: 189,
          gender: '♂',
          item: 119,
          moves: [
            213,
            73,
            78,
            72
          ],
          stats: {
            hp: 159,
            attack: 84,
            defense: 94,
            spclAtk: 78,
            spclDef: 109,
            speed: 135
          },
          friendship: 0
        },
        {
          level: 51,
          species: 53,
          gender: '♀',
          item: 0,
          moves: [
            213,
            44,
            168,
            103
          ],
          stats: {
            hp: 147,
            attack: 97,
            defense: 84,
            spclAtk: 89,
            spclDef: 89,
            speed: 143
          },
          friendship: 0
        },
        {
          level: 51,
          species: 108,
          gender: '♂',
          item: 173,
          moves: [
            213,
            89,
            48,
            126
          ],
          stats: {
            hp: 169,
            attack: 84,
            defense: 98,
            spclAtk: 83,
            spclDef: 98,
            speed: 53
          },
          friendship: 0
        },
        {
          level: 51,
          species: 226,
          gender: '♀',
          item: 107,
          moves: [
            213,
            196,
            59,
            57
          ],
          stats: {
            hp: 147,
            attack: 66,
            defense: 94,
            spclAtk: 104,
            spclDef: 165,
            speed: 97
          },
          friendship: 0
        },
        {
          level: 53,
          species: 40,
          gender: '♀',
          item: 73,
          moves: [
            213,
            34,
            9,
            94
          ],
          stats: {
            hp: 234,
            attack: 103,
            defense: 71,
            spclAtk: 103,
            spclDef: 76,
            speed: 71
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Burglar Jensen',
      ai: {
        randomFitness: false,
        usesRandomLead: true,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 51,
          species: 157,
          gender: '♂',
          item: 82,
          moves: [
            108,
            172,
            91,
            9
          ],
          stats: {
            hp: 160,
            attack: 109,
            defense: 102,
            spclAtk: 134,
            spclDef: 109,
            speed: 125
          },
          friendship: 128
        },
        {
          level: 51,
          species: 229,
          gender: '♀',
          item: 0,
          moves: [
            168,
            242,
            53,
            129
          ],
          stats: {
            hp: 157,
            attack: 115,
            defense: 73,
            spclAtk: 135,
            spclDef: 104,
            speed: 120
          },
          friendship: 128
        },
        {
          level: 52,
          species: 219,
          gender: '♂',
          item: 73,
          moves: [
            34,
            53,
            88,
            203
          ],
          stats: {
            hp: 134,
            attack: 80,
            defense: 148,
            spclAtk: 106,
            spclDef: 106,
            speed: 55
          },
          friendship: 128
        },
        {
          level: 52,
          species: 51,
          gender: '♀',
          item: 0,
          moves: [
            168,
            222,
            92,
            189
          ],
          stats: {
            hp: 118,
            attack: 107,
            defense: 75,
            spclAtk: 75,
            spclDef: 96,
            speed: 149
          },
          friendship: 128
        },
        {
          level: 52,
          species: 234,
          gender: '♂',
          item: 0,
          moves: [
            168,
            207,
            244,
            36
          ],
          stats: {
            hp: 158,
            attack: 127,
            defense: 87,
            spclAtk: 111,
            spclDef: 90,
            speed: 110
          },
          friendship: 128
        },
        {
          level: 52,
          species: 207,
          gender: '♀',
          item: 0,
          moves: [
            168,
            185,
            29,
            12
          ],
          stats: {
            hp: 149,
            attack: 102,
            defense: 132,
            spclAtk: 59,
            spclDef: 90,
            speed: 112
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Boarder Claude',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 52,
          species: 215,
          gender: '♀',
          item: 119,
          moves: [
            185,
            8,
            247,
            103
          ],
          stats: {
            hp: 145,
            attack: 125,
            defense: 84,
            spclAtk: 63,
            spclDef: 105,
            speed: 145
          },
          friendship: 0
        },
        {
          level: 52,
          species: 225,
          gender: '♀',
          item: 109,
          moves: [
            217,
            129,
            59,
            218
          ],
          stats: {
            hp: 135,
            attack: 83,
            defense: 74,
            spclAtk: 94,
            spclDef: 74,
            speed: 104
          },
          friendship: 0
        },
        {
          level: 52,
          species: 9,
          gender: '♂',
          item: 73,
          moves: [
            196,
            56,
            44,
            89
          ],
          stats: {
            hp: 165,
            attack: 111,
            defense: 130,
            spclAtk: 114,
            spclDef: 135,
            speed: 106
          },
          friendship: 0
        },
        {
          level: 51,
          species: 135,
          gender: '♂',
          item: 3,
          moves: [
            44,
            192,
            92,
            42
          ],
          stats: {
            hp: 148,
            attack: 91,
            defense: 87,
            spclAtk: 138,
            spclDef: 122,
            speed: 157
          },
          friendship: 0
        },
        {
          level: 51,
          species: 134,
          gender: '♂',
          item: 107,
          moves: [
            196,
            57,
            231,
            216
          ],
          stats: {
            hp: 214,
            attack: 91,
            defense: 87,
            spclAtk: 138,
            spclDef: 122,
            speed: 91
          },
          friendship: 180
        },
        {
          level: 51,
          species: 136,
          gender: '♂',
          item: 138,
          moves: [
            126,
            189,
            46,
            29
          ],
          stats: {
            hp: 148,
            attack: 157,
            defense: 87,
            spclAtk: 122,
            spclDef: 138,
            speed: 91
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Psychic Mason',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 115,
          gender: '♀',
          item: 119,
          moves: [
            146,
            179,
            7,
            57
          ],
          stats: {
            hp: 186,
            attack: 120,
            defense: 104,
            spclAtk: 64,
            spclDef: 104,
            speed: 113
          },
          friendship: 0
        },
        {
          level: 52,
          species: 97,
          gender: '♀',
          item: 73,
          moves: [
            95,
            248,
            244,
            247
          ],
          stats: {
            hp: 172,
            attack: 102,
            defense: 98,
            spclAtk: 101,
            spclDef: 144,
            speed: 93
          },
          friendship: 0
        },
        {
          level: 53,
          species: 59,
          gender: '♂',
          item: 104,
          moves: [
            172,
            245,
            225,
            44
          ],
          stats: {
            hp: 181,
            attack: 143,
            defense: 110,
            spclAtk: 131,
            spclDef: 110,
            speed: 125
          },
          friendship: 0
        },
        {
          level: 50,
          species: 26,
          gender: '♂',
          item: 109,
          moves: [
            85,
            86,
            223,
            104
          ],
          stats: {
            hp: 138,
            attack: 119,
            defense: 80,
            spclAtk: 113,
            spclDef: 103,
            speed: 124
          },
          friendship: 0
        },
        {
          level: 52,
          species: 235,
          gender: '♂',
          item: 82,
          moves: [
            213,
            186,
            137,
            29
          ],
          stats: {
            hp: 141,
            attack: 51,
            defense: 63,
            spclAtk: 46,
            spclDef: 72,
            speed: 104
          },
          friendship: 0
        },
        {
          level: 53,
          species: 178,
          gender: '♀',
          item: 146,
          moves: [
            109,
            94,
            101,
            19
          ],
          stats: {
            hp: 154,
            attack: 106,
            defense: 99,
            spclAtk: 126,
            spclDef: 99,
            speed: 125
          },
          friendship: 0
        }
      ]
    }
  ],
  'poke-master-r1': [
    {
      name: 'Pokéfan Carmen',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 53,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 178,
        desireToInflictPoison: 178,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 178,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 203,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 51,
          species: 182,
          gender: '♀',
          item: 83,
          moves: [
            80,
            216,
            213,
            92
          ],
          stats: {
            hp: 155,
            attack: 103,
            defense: 107,
            spclAtk: 112,
            spclDef: 122,
            speed: 72
          },
          friendship: 180
        },
        {
          level: 51,
          species: 184,
          gender: '♀',
          item: 73,
          moves: [
            57,
            8,
            213,
            38
          ],
          stats: {
            hp: 180,
            attack: 72,
            defense: 102,
            spclAtk: 71,
            spclDef: 102,
            speed: 72
          },
          friendship: 128
        },
        {
          level: 51,
          species: 53,
          gender: '♂',
          item: 174,
          moves: [
            44,
            29,
            168,
            192
          ],
          stats: {
            hp: 145,
            attack: 97,
            defense: 82,
            spclAtk: 87,
            spclDef: 87,
            speed: 139
          },
          friendship: 128
        },
        {
          level: 51,
          species: 36,
          gender: '♀',
          item: 104,
          moves: [
            47,
            227,
            118,
            94
          ],
          stats: {
            hp: 175,
            attack: 93,
            defense: 95,
            spclAtk: 107,
            spclDef: 112,
            speed: 83
          },
          friendship: 128
        },
        {
          level: 51,
          species: 176,
          gender: '♂',
          item: 119,
          moves: [
            227,
            186,
            19,
            118
          ],
          stats: {
            hp: 134,
            attack: 62,
            defense: 107,
            spclAtk: 102,
            spclDef: 127,
            speed: 62
          },
          friendship: 128
        },
        {
          level: 51,
          species: 26,
          gender: '♂',
          item: 150,
          moves: [
            86,
            85,
            213,
            231
          ],
          stats: {
            hp: 140,
            attack: 117,
            defense: 76,
            spclAtk: 112,
            spclDef: 102,
            speed: 123
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Youngster Wyatt',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: true,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 178,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          178,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 18,
          gender: '♀',
          item: 152,
          moves: [
            19,
            211,
            119,
            92
          ],
          stats: {
            hp: 160,
            attack: 101,
            defense: 95,
            spclAtk: 90,
            spclDef: 90,
            speed: 112
          },
          friendship: 128
        },
        {
          level: 53,
          species: 31,
          gender: '♀',
          item: 119,
          moves: [
            34,
            89,
            57,
            9
          ],
          stats: {
            hp: 176,
            attack: 109,
            defense: 113,
            spclAtk: 100,
            spclDef: 111,
            speed: 103
          },
          friendship: 128
        },
        {
          level: 50,
          species: 132,
          gender: '',
          item: 73,
          moves: [
            144,
            0,
            0,
            0
          ],
          stats: {
            hp: 125,
            attack: 69,
            defense: 68,
            spclAtk: 68,
            spclDef: 68,
            speed: 69
          },
          friendship: 128
        },
        {
          level: 52,
          species: 20,
          gender: '♂',
          item: 104,
          moves: [
            162,
            158,
            247,
            46
          ],
          stats: {
            hp: 137,
            attack: 110,
            defense: 83,
            spclAtk: 73,
            spclDef: 93,
            speed: 123
          },
          friendship: 128
        },
        {
          level: 52,
          species: 127,
          gender: '♀',
          item: 88,
          moves: [
            66,
            12,
            14,
            210
          ],
          stats: {
            hp: 147,
            attack: 152,
            defense: 125,
            spclAtk: 78,
            spclDef: 93,
            speed: 110
          },
          friendship: 128
        },
        {
          level: 53,
          species: 57,
          gender: '♂',
          item: 98,
          moves: [
            103,
            238,
            69,
            87
          ],
          stats: {
            hp: 150,
            attack: 138,
            defense: 85,
            spclAtk: 85,
            spclDef: 95,
            speed: 123
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Firebreather Cliff',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 153,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 126,
          gender: '♂',
          item: 174,
          moves: [
            241,
            94,
            53,
            9
          ],
          stats: {
            hp: 143,
            attack: 117,
            defense: 78,
            spclAtk: 121,
            spclDef: 106,
            speed: 115
          },
          friendship: 0
        },
        {
          level: 51,
          species: 105,
          gender: '♀',
          item: 76,
          moves: [
            89,
            126,
            9,
            196
          ],
          stats: {
            hp: 141,
            attack: 104,
            defense: 134,
            spclAtk: 72,
            spclDef: 103,
            speed: 68
          },
          friendship: 0
        },
        {
          level: 54,
          species: 85,
          gender: '♀',
          item: 104,
          moves: [
            161,
            65,
            228,
            211
          ],
          stats: {
            hp: 148,
            attack: 142,
            defense: 98,
            spclAtk: 87,
            spclDef: 87,
            speed: 131
          },
          friendship: 0
        },
        {
          level: 50,
          species: 229,
          gender: '♀',
          item: 119,
          moves: [
            241,
            53,
            242,
            231
          ],
          stats: {
            hp: 153,
            attack: 112,
            defense: 71,
            spclAtk: 131,
            spclDef: 101,
            speed: 117
          },
          friendship: 0
        },
        {
          level: 51,
          species: 103,
          gender: '♀',
          item: 109,
          moves: [
            241,
            76,
            78,
            94
          ],
          stats: {
            hp: 176,
            attack: 119,
            defense: 108,
            spclAtk: 149,
            spclDef: 88,
            speed: 78
          },
          friendship: 0
        },
        {
          level: 54,
          species: 59,
          gender: '♂',
          item: 146,
          moves: [
            245,
            225,
            91,
            97
          ],
          stats: {
            hp: 181,
            attack: 142,
            defense: 109,
            spclAtk: 130,
            spclDef: 109,
            speed: 126
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Biker Dillon',
      ai: {
        randomFitness: false,
        usesRandomLead: true,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 203,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 178,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 178
      },
      team: [
        {
          level: 52,
          species: 110,
          gender: '♀',
          item: 170,
          moves: [
            188,
            153,
            87,
            126
          ],
          stats: {
            hp: 150,
            attack: 116,
            defense: 149,
            spclAtk: 112,
            spclDef: 97,
            speed: 86
          },
          friendship: 0
        },
        {
          level: 51,
          species: 91,
          gender: '♀',
          item: 73,
          moves: [
            57,
            92,
            128,
            182
          ],
          stats: {
            hp: 131,
            attack: 119,
            defense: 207,
            spclAtk: 109,
            spclDef: 68,
            speed: 95
          },
          friendship: 0
        },
        {
          level: 52,
          species: 208,
          gender: '♀',
          item: 76,
          moves: [
            92,
            20,
            225,
            89
          ],
          stats: {
            hp: 159,
            attack: 111,
            defense: 232,
            spclAtk: 81,
            spclDef: 91,
            speed: 54
          },
          friendship: 0
        },
        {
          level: 52,
          species: 112,
          gender: '♀',
          item: 104,
          moves: [
            231,
            59,
            57,
            63
          ],
          stats: {
            hp: 190,
            attack: 158,
            defense: 149,
            spclAtk: 71,
            spclDef: 71,
            speed: 64
          },
          friendship: 0
        },
        {
          level: 52,
          species: 3,
          gender: '♂',
          item: 119,
          moves: [
            92,
            73,
            202,
            203
          ],
          stats: {
            hp: 164,
            attack: 108,
            defense: 110,
            spclAtk: 128,
            spclDef: 128,
            speed: 106
          },
          friendship: 0
        },
        {
          level: 51,
          species: 24,
          gender: '♀',
          item: 109,
          moves: [
            92,
            35,
            182,
            91
          ],
          stats: {
            hp: 141,
            attack: 109,
            defense: 94,
            spclAtk: 90,
            spclDef: 104,
            speed: 104
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Teacher Molly',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 153,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          153,
          128,
          128,
          128,
          153
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 228,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 203,
          gender: '♂',
          item: 146,
          moves: [
            97,
            104,
            226,
            60
          ],
          stats: {
            hp: 149,
            attack: 108,
            defense: 90,
            spclAtk: 114,
            spclDef: 89,
            speed: 109
          },
          friendship: 0
        },
        {
          level: 52,
          species: 122,
          gender: '♀',
          item: 73,
          moves: [
            115,
            96,
            94,
            226
          ],
          stats: {
            hp: 129,
            attack: 72,
            defense: 92,
            spclAtk: 128,
            spclDef: 149,
            speed: 119
          },
          friendship: 0
        },
        {
          level: 53,
          species: 131,
          gender: '♂',
          item: 109,
          moves: [
            58,
            34,
            156,
            173
          ],
          stats: {
            hp: 218,
            attack: 119,
            defense: 109,
            spclAtk: 115,
            spclDef: 125,
            speed: 89
          },
          friendship: 0
        },
        {
          level: 50,
          species: 190,
          gender: '♀',
          item: 119,
          moves: [
            97,
            226,
            104,
            129
          ],
          stats: {
            hp: 140,
            attack: 95,
            defense: 79,
            spclAtk: 64,
            spclDef: 79,
            speed: 110
          },
          friendship: 0
        },
        {
          level: 52,
          species: 171,
          gender: '♀',
          item: 174,
          moves: [
            109,
            209,
            57,
            36
          ],
          stats: {
            hp: 218,
            attack: 86,
            defense: 85,
            spclAtk: 103,
            spclDef: 103,
            speed: 95
          },
          friendship: 0
        },
        {
          level: 53,
          species: 186,
          gender: '♀',
          item: 82,
          moves: [
            34,
            57,
            89,
            8
          ],
          stats: {
            hp: 184,
            attack: 105,
            defense: 104,
            spclAtk: 120,
            spclDef: 131,
            speed: 100
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Sage Chen',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 153,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 51,
          species: 200,
          gender: '♂',
          item: 146,
          moves: [
            212,
            195,
            109,
            182
          ],
          stats: {
            hp: 140,
            attack: 90,
            defense: 86,
            spclAtk: 112,
            spclDef: 112,
            speed: 111
          },
          friendship: 70
        },
        {
          level: 52,
          species: 169,
          gender: '♂',
          item: 109,
          moves: [
            212,
            109,
            197,
            92
          ],
          stats: {
            hp: 172,
            attack: 123,
            defense: 110,
            spclAtk: 99,
            spclDef: 110,
            speed: 161
          },
          friendship: 70
        },
        {
          level: 51,
          species: 94,
          gender: '♀',
          item: 78,
          moves: [
            212,
            109,
            194,
            101
          ],
          stats: {
            hp: 143,
            attack: 91,
            defense: 85,
            spclAtk: 156,
            spclDef: 100,
            speed: 137
          },
          friendship: 70
        },
        {
          level: 52,
          species: 124,
          gender: '♀',
          item: 73,
          moves: [
            212,
            142,
            195,
            59
          ],
          stats: {
            hp: 151,
            attack: 77,
            defense: 61,
            spclAtk: 144,
            spclDef: 123,
            speed: 124
          },
          friendship: 70
        },
        {
          level: 52,
          species: 198,
          gender: '♀',
          item: 139,
          moves: [
            212,
            247,
            101,
            218
          ],
          stats: {
            hp: 145,
            attack: 114,
            defense: 68,
            spclAtk: 114,
            spclDef: 69,
            speed: 120
          },
          friendship: 70
        },
        {
          level: 52,
          species: 197,
          gender: '♂',
          item: 119,
          moves: [
            212,
            109,
            103,
            44
          ],
          stats: {
            hp: 182,
            attack: 93,
            defense: 139,
            spclAtk: 87,
            spclDef: 159,
            speed: 93
          },
          friendship: 70
        }
      ]
    },
    {
      name: 'Pokéfan Baxter',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 52,
          species: 160,
          gender: '♂',
          item: 140,
          moves: [
            57,
            99,
            163,
            89
          ],
          stats: {
            hp: 173,
            attack: 136,
            defense: 132,
            spclAtk: 110,
            spclDef: 114,
            speed: 108
          },
          friendship: 128
        },
        {
          level: 52,
          species: 157,
          gender: '♂',
          item: 119,
          moves: [
            53,
            91,
            223,
            129
          ],
          stats: {
            hp: 166,
            attack: 114,
            defense: 109,
            spclAtk: 141,
            spclDef: 116,
            speed: 131
          },
          friendship: 128
        },
        {
          level: 51,
          species: 154,
          gender: '♂',
          item: 139,
          moves: [
            241,
            76,
            34,
            231
          ],
          stats: {
            hp: 165,
            attack: 110,
            defense: 129,
            spclAtk: 112,
            spclDef: 129,
            speed: 108
          },
          friendship: 128
        },
        {
          level: 51,
          species: 210,
          gender: '♀',
          item: 82,
          moves: [
            184,
            44,
            7,
            36
          ],
          stats: {
            hp: 172,
            attack: 149,
            defense: 103,
            spclAtk: 88,
            spclDef: 88,
            speed: 71
          },
          friendship: 128
        },
        {
          level: 51,
          species: 242,
          gender: '♀',
          item: 146,
          moves: [
            121,
            213,
            87,
            59
          ],
          stats: {
            hp: 340,
            attack: 37,
            defense: 37,
            spclAtk: 103,
            spclDef: 164,
            speed: 82
          },
          friendship: 128
        },
        {
          level: 52,
          species: 237,
          gender: '♂',
          item: 73,
          moves: [
            167,
            68,
            92,
            197
          ],
          stats: {
            hp: 137,
            attack: 126,
            defense: 127,
            spclAtk: 64,
            spclDef: 142,
            speed: 100
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Pokémaniac Pedro',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: true,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 153,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 153,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 142,
          gender: '♂',
          item: 82,
          moves: [
            246,
            63,
            44,
            19
          ],
          stats: {
            hp: 163,
            attack: 132,
            defense: 93,
            spclAtk: 88,
            spclDef: 103,
            speed: 157
          },
          friendship: 70
        },
        {
          level: 50,
          species: 68,
          gender: '♂',
          item: 140,
          moves: [
            238,
            69,
            193,
            89
          ],
          stats: {
            hp: 173,
            attack: 157,
            defense: 108,
            spclAtk: 93,
            spclDef: 113,
            speed: 82
          },
          friendship: 70
        },
        {
          level: 50,
          species: 230,
          gender: '♀',
          item: 144,
          moves: [
            57,
            225,
            59,
            207
          ],
          stats: {
            hp: 158,
            attack: 122,
            defense: 123,
            spclAtk: 123,
            spclDef: 123,
            speed: 112
          },
          friendship: 255
        },
        {
          level: 55,
          species: 149,
          gender: '♀',
          item: 119,
          moves: [
            200,
            127,
            87,
            216
          ],
          stats: {
            hp: 190,
            attack: 177,
            defense: 135,
            spclAtk: 140,
            spclDef: 140,
            speed: 117
          },
          friendship: 255
        },
        {
          level: 55,
          species: 248,
          gender: '♀',
          item: 73,
          moves: [
            242,
            157,
            218,
            231
          ],
          stats: {
            hp: 200,
            attack: 177,
            defense: 151,
            spclAtk: 135,
            spclDef: 140,
            speed: 96
          },
          friendship: 0
        },
        {
          level: 50,
          species: 6,
          gender: '♂',
          item: 109,
          moves: [
            126,
            19,
            223,
            91
          ],
          stats: {
            hp: 161,
            attack: 111,
            defense: 106,
            spclAtk: 137,
            spclDef: 113,
            speed: 127
          },
          friendship: 70
        }
      ]
    }
  ],
  'little-r1': [
    {
      name: 'Youngster Bernie',
      ai: {
        randomFitness: true,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 5,
          species: 175,
          gender: '♂',
          item: 119,
          moves: [
            227,
            118,
            204,
            29
          ],
          stats: {
            hp: 19,
            attack: 7,
            defense: 11,
            spclAtk: 9,
            spclDef: 11,
            speed: 7
          },
          friendship: 128
        },
        {
          level: 5,
          species: 138,
          gender: '♂',
          item: 82,
          moves: [
            246,
            44,
            57,
            132
          ],
          stats: {
            hp: 19,
            attack: 9,
            defense: 15,
            spclAtk: 14,
            spclDef: 10,
            speed: 8
          },
          friendship: 128
        },
        {
          level: 5,
          species: 191,
          gender: '♀',
          item: 117,
          moves: [
            241,
            74,
            72,
            71
          ],
          stats: {
            hp: 19,
            attack: 8,
            defense: 8,
            spclAtk: 8,
            spclDef: 8,
            speed: 8
          },
          friendship: 128
        },
        {
          level: 5,
          species: 218,
          gender: '♀',
          item: 173,
          moves: [
            53,
            88,
            123,
            106
          ],
          stats: {
            hp: 20,
            attack: 9,
            defense: 9,
            spclAtk: 12,
            spclDef: 9,
            speed: 7
          },
          friendship: 128
        },
        {
          level: 5,
          species: 7,
          gender: '♂',
          item: 95,
          moves: [
            44,
            229,
            70,
            57
          ],
          stats: {
            hp: 19,
            attack: 10,
            defense: 11,
            spclAtk: 10,
            spclDef: 11,
            speed: 9
          },
          friendship: 128
        },
        {
          level: 5,
          species: 56,
          gender: '♀',
          item: 104,
          moves: [
            238,
            9,
            7,
            8
          ],
          stats: {
            hp: 20,
            attack: 13,
            defense: 8,
            spclAtk: 8,
            spclDef: 9,
            speed: 12
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Picnicker Stacy',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 203,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 5,
          species: 174,
          gender: '♀',
          item: 139,
          moves: [
            186,
            126,
            111,
            205
          ],
          stats: {
            hp: 24,
            attack: 8,
            defense: 6,
            spclAtk: 9,
            spclDef: 7,
            speed: 6
          },
          friendship: 170
        },
        {
          level: 5,
          species: 209,
          gender: '♀',
          item: 173,
          moves: [
            122,
            36,
            44,
            184
          ],
          stats: {
            hp: 21,
            attack: 13,
            defense: 10,
            spclAtk: 9,
            spclDef: 9,
            speed: 8
          },
          friendship: 128
        },
        {
          level: 5,
          species: 52,
          gender: '♀',
          item: 73,
          moves: [
            103,
            29,
            44,
            87
          ],
          stats: {
            hp: 19,
            attack: 9,
            defense: 8,
            spclAtk: 9,
            spclDef: 9,
            speed: 14
          },
          friendship: 128
        },
        {
          level: 5,
          species: 16,
          gender: '♀',
          item: 174,
          moves: [
            119,
            211,
            16,
            189
          ],
          stats: {
            hp: 19,
            attack: 9,
            defense: 9,
            spclAtk: 8,
            spclDef: 8,
            speed: 10
          },
          friendship: 128
        },
        {
          level: 5,
          species: 19,
          gender: '♀',
          item: 3,
          moves: [
            98,
            158,
            116,
            91
          ],
          stats: {
            hp: 18,
            attack: 10,
            defense: 8,
            spclAtk: 7,
            spclDef: 8,
            speed: 12
          },
          friendship: 128
        },
        {
          level: 5,
          species: 216,
          gender: '♀',
          item: 119,
          moves: [
            122,
            154,
            185,
            9
          ],
          stats: {
            hp: 21,
            attack: 13,
            defense: 10,
            spclAtk: 10,
            spclDef: 10,
            speed: 9
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Camper Grant',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 228,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 5,
          species: 152,
          gender: '♂',
          item: 82,
          moves: [
            207,
            115,
            75,
            29
          ],
          stats: {
            hp: 20,
            attack: 10,
            defense: 12,
            spclAtk: 10,
            spclDef: 12,
            speed: 10
          },
          friendship: 0
        },
        {
          level: 5,
          species: 158,
          gender: '♂',
          item: 119,
          moves: [
            207,
            163,
            57,
            103
          ],
          stats: {
            hp: 21,
            attack: 12,
            defense: 12,
            spclAtk: 10,
            spclDef: 10,
            speed: 10
          },
          friendship: 0
        },
        {
          level: 5,
          species: 155,
          gender: '♂',
          item: 73,
          moves: [
            207,
            172,
            91,
            98
          ],
          stats: {
            hp: 20,
            attack: 11,
            defense: 10,
            spclAtk: 11,
            spclDef: 10,
            speed: 12
          },
          friendship: 0
        },
        {
          level: 5,
          species: 50,
          gender: '♀',
          item: 139,
          moves: [
            207,
            188,
            222,
            28
          ],
          stats: {
            hp: 17,
            attack: 11,
            defense: 8,
            spclAtk: 9,
            spclDef: 10,
            speed: 15
          },
          friendship: 0
        },
        {
          level: 5,
          species: 170,
          gender: '♀',
          item: 173,
          moves: [
            109,
            209,
            86,
            36
          ],
          stats: {
            hp: 23,
            attack: 10,
            defense: 10,
            spclAtk: 11,
            spclDef: 11,
            speed: 13
          },
          friendship: 127
        },
        {
          level: 5,
          species: 69,
          gender: '♀',
          item: 109,
          moves: [
            21,
            78,
            75,
            207
          ],
          stats: {
            hp: 21,
            attack: 13,
            defense: 9,
            spclAtk: 12,
            spclDef: 8,
            speed: 9
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Pokéfan Janet',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 5,
          species: 236,
          gender: '♂',
          item: 119,
          moves: [
            104,
            249,
            218,
            168
          ],
          stats: {
            hp: 20,
            attack: 9,
            defense: 9,
            spclAtk: 9,
            spclDef: 9,
            speed: 9
          },
          friendship: 45
        },
        {
          level: 5,
          species: 46,
          gender: '♀',
          item: 84,
          moves: [
            147,
            163,
            104,
            188
          ],
          stats: {
            hp: 20,
            attack: 12,
            defense: 11,
            spclAtk: 10,
            spclDef: 11,
            speed: 8
          },
          friendship: 128
        },
        {
          level: 5,
          species: 74,
          gender: '♂',
          item: 76,
          moves: [
            104,
            222,
            88,
            120
          ],
          stats: {
            hp: 19,
            attack: 14,
            defense: 15,
            spclAtk: 8,
            spclDef: 8,
            speed: 7
          },
          friendship: 128
        },
        {
          level: 5,
          species: 167,
          gender: '♂',
          item: 117,
          moves: [
            104,
            188,
            94,
            169
          ],
          stats: {
            hp: 20,
            attack: 12,
            defense: 9,
            spclAtk: 9,
            spclDef: 9,
            speed: 9
          },
          friendship: 0
        },
        {
          level: 5,
          species: 41,
          gender: '♀',
          item: 73,
          moves: [
            104,
            92,
            17,
            141
          ],
          stats: {
            hp: 20,
            attack: 10,
            defense: 9,
            spclAtk: 8,
            spclDef: 9,
            speed: 11
          },
          friendship: 128
        },
        {
          level: 5,
          species: 27,
          gender: '♀',
          item: 83,
          moves: [
            104,
            129,
            91,
            201
          ],
          stats: {
            hp: 21,
            attack: 13,
            defense: 14,
            spclAtk: 7,
            spclDef: 8,
            speed: 9
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Schoolboy Clark',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 5,
          species: 179,
          gender: '♂',
          item: 108,
          moves: [
            237,
            29,
            86,
            87
          ],
          stats: {
            hp: 21,
            attack: 10,
            defense: 10,
            spclAtk: 12,
            spclDef: 10,
            speed: 9
          },
          friendship: 0
        },
        {
          level: 5,
          species: 23,
          gender: '♀',
          item: 81,
          moves: [
            237,
            182,
            35,
            92
          ],
          stats: {
            hp: 19,
            attack: 12,
            defense: 10,
            spclAtk: 9,
            spclDef: 11,
            speed: 11
          },
          friendship: 0
        },
        {
          level: 5,
          species: 177,
          gender: '♀',
          item: 173,
          moves: [
            237,
            207,
            244,
            109
          ],
          stats: {
            hp: 20,
            attack: 11,
            defense: 10,
            spclAtk: 12,
            spclDef: 10,
            speed: 13
          },
          friendship: 0
        },
        {
          level: 5,
          species: 58,
          gender: '♂',
          item: 109,
          moves: [
            237,
            36,
            91,
            172
          ],
          stats: {
            hp: 21,
            attack: 13,
            defense: 10,
            spclAtk: 12,
            spclDef: 10,
            speed: 11
          },
          friendship: 0
        },
        {
          level: 5,
          species: 238,
          gender: '♀',
          item: 73,
          moves: [
            237,
            94,
            47,
            186
          ],
          stats: {
            hp: 20,
            attack: 9,
            defense: 7,
            spclAtk: 14,
            spclDef: 12,
            speed: 12
          },
          friendship: 0
        },
        {
          level: 5,
          species: 246,
          gender: '♂',
          item: 119,
          moves: [
            237,
            44,
            201,
            89
          ],
          stats: {
            hp: 22,
            attack: 12,
            defense: 10,
            spclAtk: 10,
            spclDef: 10,
            speed: 9
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Swimmer♀ Cora',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: true,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 153,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 153,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 5,
          species: 173,
          gender: '♀',
          item: 139,
          moves: [
            213,
            29,
            192,
            186
          ],
          stats: {
            hp: 21,
            attack: 8,
            defense: 9,
            spclAtk: 10,
            spclDef: 11,
            speed: 7
          },
          friendship: 0
        },
        {
          level: 5,
          species: 147,
          gender: '♂',
          item: 82,
          moves: [
            57,
            213,
            59,
            225
          ],
          stats: {
            hp: 20,
            attack: 13,
            defense: 10,
            spclAtk: 11,
            spclDef: 11,
            speed: 11
          },
          friendship: 0
        },
        {
          level: 5,
          species: 163,
          gender: '♂',
          item: 3,
          moves: [
            95,
            213,
            211,
            216
          ],
          stats: {
            hp: 22,
            attack: 9,
            defense: 9,
            spclAtk: 9,
            spclDef: 11,
            speed: 11
          },
          friendship: 200
        },
        {
          level: 5,
          species: 43,
          gender: '♀',
          item: 173,
          moves: [
            78,
            188,
            213,
            202
          ],
          stats: {
            hp: 21,
            attack: 11,
            defense: 11,
            spclAtk: 13,
            spclDef: 12,
            speed: 9
          },
          friendship: 0
        },
        {
          level: 5,
          species: 194,
          gender: '♀',
          item: 140,
          moves: [
            89,
            188,
            213,
            231
          ],
          stats: {
            hp: 22,
            attack: 10,
            defense: 10,
            spclAtk: 8,
            spclDef: 8,
            speed: 7
          },
          friendship: 0
        },
        {
          level: 5,
          species: 140,
          gender: '♂',
          item: 73,
          moves: [
            246,
            72,
            213,
            207
          ],
          stats: {
            hp: 19,
            attack: 14,
            defense: 15,
            spclAtk: 11,
            spclDef: 10,
            speed: 11
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Teacher Tina',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 5,
          species: 239,
          gender: '♂',
          item: 108,
          moves: [
            85,
            223,
            98,
            103
          ],
          stats: {
            hp: 20,
            attack: 12,
            defense: 9,
            spclAtk: 12,
            spclDef: 11,
            speed: 15
          },
          friendship: 0
        },
        {
          level: 5,
          species: 161,
          gender: '♂',
          item: 152,
          moves: [
            98,
            7,
            91,
            8
          ],
          stats: {
            hp: 19,
            attack: 11,
            defense: 9,
            spclAtk: 9,
            spclDef: 10,
            speed: 8
          },
          friendship: 0
        },
        {
          level: 5,
          species: 37,
          gender: '♀',
          item: 82,
          moves: [
            109,
            98,
            53,
            219
          ],
          stats: {
            hp: 20,
            attack: 10,
            defense: 10,
            spclAtk: 11,
            spclDef: 12,
            speed: 12
          },
          friendship: 0
        },
        {
          level: 5,
          species: 133,
          gender: '♂',
          item: 173,
          moves: [
            98,
            44,
            231,
            28
          ],
          stats: {
            hp: 22,
            attack: 11,
            defense: 11,
            spclAtk: 10,
            spclDef: 12,
            speed: 11
          },
          friendship: 128
        },
        {
          level: 5,
          species: 123,
          gender: '♂',
          item: 119,
          moves: [
            98,
            17,
            104,
            116
          ],
          stats: {
            hp: 23,
            attack: 17,
            defense: 14,
            spclAtk: 11,
            spclDef: 14,
            speed: 16
          },
          friendship: 128
        },
        {
          level: 5,
          species: 220,
          gender: '♀',
          item: 3,
          moves: [
            59,
            36,
            54,
            203
          ],
          stats: {
            hp: 21,
            attack: 11,
            defense: 10,
            spclAtk: 9,
            spclDef: 9,
            speed: 11
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Pokéfan Rex',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 5,
          species: 172,
          gender: '♂',
          item: 119,
          moves: [
            87,
            186,
            213,
            216
          ],
          stats: {
            hp: 18,
            attack: 10,
            defense: 7,
            spclAtk: 9,
            spclDef: 9,
            speed: 12
          },
          friendship: 255
        },
        {
          level: 5,
          species: 92,
          gender: '♀',
          item: 82,
          moves: [
            95,
            109,
            94,
            247
          ],
          stats: {
            hp: 19,
            attack: 9,
            defense: 9,
            spclAtk: 16,
            spclDef: 9,
            speed: 14
          },
          friendship: 0
        },
        {
          level: 5,
          species: 240,
          gender: '♂',
          item: 73,
          moves: [
            109,
            126,
            29,
            231
          ],
          stats: {
            hp: 20,
            attack: 13,
            defense: 10,
            spclAtk: 13,
            spclDef: 11,
            speed: 14
          },
          friendship: 0
        },
        {
          level: 5,
          species: 113,
          gender: '♀',
          item: 104,
          moves: [
            196,
            121,
            87,
            231
          ],
          stats: {
            hp: 41,
            attack: 6,
            defense: 6,
            spclAtk: 9,
            spclDef: 16,
            speed: 11
          },
          friendship: 0
        },
        {
          level: 5,
          species: 60,
          gender: '♂',
          item: 107,
          moves: [
            95,
            34,
            59,
            57
          ],
          stats: {
            hp: 20,
            attack: 11,
            defense: 10,
            spclAtk: 10,
            spclDef: 10,
            speed: 15
          },
          friendship: 0
        },
        {
          level: 5,
          species: 63,
          gender: '♂',
          item: 174,
          moves: [
            94,
            192,
            237,
            7
          ],
          stats: {
            hp: 18,
            attack: 8,
            defense: 7,
            spclAtk: 16,
            spclDef: 11,
            speed: 15
          },
          friendship: 0
        }
      ]
    }
  ],
  'prime-r1': [
    {
      name: 'Lass Terry',
      ai: {
        randomFitness: true,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 100,
          species: 182,
          gender: '♀',
          item: 119,
          moves: [
            202,
            77,
            76,
            203
          ],
          stats: {
            hp: 300,
            attack: 203,
            defense: 211,
            spclAtk: 221,
            spclDef: 241,
            speed: 143
          },
          friendship: 180
        },
        {
          level: 100,
          species: 184,
          gender: '♂',
          item: 73,
          moves: [
            57,
            216,
            213,
            39
          ],
          stats: {
            hp: 340,
            attack: 151,
            defense: 203,
            spclAtk: 143,
            spclDef: 203,
            speed: 143
          },
          friendship: 255
        },
        {
          level: 100,
          species: 181,
          gender: '♂',
          item: 108,
          moves: [
            192,
            86,
            7,
            113
          ],
          stats: {
            hp: 320,
            attack: 201,
            defense: 193,
            spclAtk: 273,
            spclDef: 223,
            speed: 153
          },
          friendship: 128
        },
        {
          level: 100,
          species: 162,
          gender: '♀',
          item: 139,
          moves: [
            21,
            91,
            57,
            8
          ],
          stats: {
            hp: 320,
            attack: 195,
            defense: 169,
            spclAtk: 131,
            spclDef: 151,
            speed: 223
          },
          friendship: 128
        },
        {
          level: 100,
          species: 40,
          gender: '♀',
          item: 104,
          moves: [
            182,
            34,
            47,
            50
          ],
          stats: {
            hp: 426,
            attack: 179,
            defense: 129,
            spclAtk: 191,
            spclDef: 141,
            speed: 131
          },
          friendship: 128
        },
        {
          level: 100,
          species: 176,
          gender: '♂',
          item: 77,
          moves: [
            19,
            38,
            129,
            219
          ],
          stats: {
            hp: 256,
            attack: 119,
            defense: 209,
            spclAtk: 201,
            spclDef: 251,
            speed: 121
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Blackbelt Yang',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 178,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 78,
        desireToInflictSleep: 128,
        desireToInflictPoison: 178,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 78
      },
      team: [
        {
          level: 100,
          species: 202,
          gender: '♂',
          item: 119,
          moves: [
            219,
            68,
            243,
            194
          ],
          stats: {
            hp: 525,
            attack: 118,
            defense: 160,
            spclAtk: 110,
            spclDef: 160,
            speed: 112
          },
          friendship: 128
        },
        {
          level: 100,
          species: 57,
          gender: '♂',
          item: 152,
          moves: [
            197,
            238,
            69,
            103
          ],
          stats: {
            hp: 271,
            attack: 262,
            defense: 164,
            spclAtk: 164,
            spclDef: 184,
            speed: 234
          },
          friendship: 128
        },
        {
          level: 100,
          species: 107,
          gender: '♂',
          item: 98,
          moves: [
            197,
            9,
            183,
            223
          ],
          stats: {
            hp: 251,
            attack: 254,
            defense: 200,
            spclAtk: 112,
            spclDef: 262,
            speed: 196
          },
          friendship: 128
        },
        {
          level: 100,
          species: 106,
          gender: '♂',
          item: 73,
          moves: [
            197,
            179,
            25,
            136
          ],
          stats: {
            hp: 255,
            attack: 284,
            defense: 152,
            spclAtk: 112,
            spclDef: 262,
            speed: 216
          },
          friendship: 128
        },
        {
          level: 100,
          species: 237,
          gender: '♂',
          item: 84,
          moves: [
            197,
            167,
            91,
            68
          ],
          stats: {
            hp: 255,
            attack: 234,
            defense: 236,
            spclAtk: 112,
            spclDef: 262,
            speed: 182
          },
          friendship: 128
        },
        {
          level: 100,
          species: 34,
          gender: '♂',
          item: 83,
          moves: [
            197,
            92,
            24,
            32
          ],
          stats: {
            hp: 317,
            attack: 228,
            defense: 200,
            spclAtk: 212,
            spclDef: 192,
            speed: 212
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Bird Keeper Adam',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 68,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 78,
        desireToInflictPoison: 178,
        desireToInflictBurn: 78,
        desireToInflictFreeze: 78,
        desireToInflictPara: 78,
        desireToInflictFlinch: 78,
        desireToInflictConfusion: 78,
        desireToInflictInfatuation: 178,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 78,
        desireForMist: 78,
        desireForFocusEnergy: 78,
        desireForReflect: 78,
        desireForDisable: 78,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 100,
          species: 6,
          gender: '♂',
          item: 82,
          moves: [
            163,
            53,
            91,
            231
          ],
          stats: {
            hp: 319,
            attack: 216,
            defense: 202,
            spclAtk: 264,
            spclDef: 216,
            speed: 248
          },
          friendship: 0
        },
        {
          level: 100,
          species: 207,
          gender: '♀',
          item: 81,
          moves: [
            188,
            231,
            92,
            185
          ],
          stats: {
            hp: 287,
            attack: 196,
            defense: 258,
            spclAtk: 114,
            spclDef: 174,
            speed: 214
          },
          friendship: 0
        },
        {
          level: 100,
          species: 142,
          gender: '♂',
          item: 119,
          moves: [
            246,
            126,
            89,
            63
          ],
          stats: {
            hp: 333,
            attack: 258,
            defense: 178,
            spclAtk: 164,
            spclDef: 194,
            speed: 304
          },
          friendship: 0
        },
        {
          level: 100,
          species: 22,
          gender: '♀',
          item: 140,
          moves: [
            189,
            65,
            119,
            97
          ],
          stats: {
            hp: 287,
            attack: 226,
            defense: 178,
            spclAtk: 166,
            spclDef: 166,
            speed: 244
          },
          friendship: 0
        },
        {
          level: 100,
          species: 198,
          gender: '♂',
          item: 77,
          moves: [
            19,
            101,
            213,
            185
          ],
          stats: {
            hp: 263,
            attack: 224,
            defense: 130,
            spclAtk: 216,
            spclDef: 130,
            speed: 228
          },
          friendship: 0
        },
        {
          level: 100,
          species: 85,
          gender: '♂',
          item: 104,
          moves: [
            92,
            161,
            237,
            65
          ],
          stats: {
            hp: 263,
            attack: 274,
            defense: 186,
            spclAtk: 166,
            spclDef: 166,
            speed: 246
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Cooltrainer♀ Floria',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: true,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 70,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 198,
        desireToInflictSleep: 198,
        desireToInflictPoison: 178,
        desireToInflictBurn: 103,
        desireToInflictFreeze: 103,
        desireToInflictPara: 103,
        desireToInflictFlinch: 103,
        desireToInflictConfusion: 178,
        desireToInflictInfatuation: 178,
        desireToRaiseStats: [
          78,
          78,
          78,
          78,
          78,
          78,
          78
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 100,
          species: 234,
          gender: '♂',
          item: 73,
          moves: [
            95,
            216,
            89,
            237
          ],
          stats: {
            hp: 290,
            attack: 245,
            defense: 171,
            spclAtk: 217,
            spclDef: 177,
            speed: 217
          },
          friendship: 200
        },
        {
          level: 100,
          species: 97,
          gender: '♂',
          item: 119,
          moves: [
            95,
            94,
            247,
            138
          ],
          stats: {
            hp: 314,
            attack: 201,
            defense: 187,
            spclAtk: 193,
            spclDef: 277,
            speed: 181
          },
          friendship: 0
        },
        {
          level: 100,
          species: 103,
          gender: '♂',
          item: 109,
          moves: [
            95,
            73,
            188,
            202
          ],
          stats: {
            hp: 334,
            attack: 245,
            defense: 217,
            spclAtk: 297,
            spclDef: 177,
            speed: 157
          },
          friendship: 0
        },
        {
          level: 100,
          species: 36,
          gender: '♀',
          item: 146,
          moves: [
            47,
            9,
            237,
            126
          ],
          stats: {
            hp: 344,
            attack: 187,
            defense: 191,
            spclAtk: 215,
            spclDef: 225,
            speed: 167
          },
          friendship: 0
        },
        {
          level: 100,
          species: 71,
          gender: '♀',
          item: 117,
          moves: [
            79,
            207,
            188,
            21
          ],
          stats: {
            hp: 314,
            attack: 257,
            defense: 175,
            spclAtk: 245,
            spclDef: 165,
            speed: 187
          },
          friendship: 128
        },
        {
          level: 100,
          species: 62,
          gender: '♀',
          item: 119,
          moves: [
            95,
            66,
            57,
            34
          ],
          stats: {
            hp: 334,
            attack: 217,
            defense: 235,
            spclAtk: 185,
            spclDef: 225,
            speed: 187
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Fisherman Chase',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 148,
        desireToInflictSleep: 148,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 178,
        desireToInflictInfatuation: 178,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 100,
          species: 130,
          gender: '♀',
          item: 119,
          moves: [
            240,
            56,
            44,
            239
          ],
          stats: {
            hp: 350,
            attack: 299,
            defense: 209,
            spclAtk: 167,
            spclDef: 247,
            speed: 209
          },
          friendship: 128
        },
        {
          level: 100,
          species: 226,
          gender: '♂',
          item: 107,
          moves: [
            127,
            17,
            29,
            196
          ],
          stats: {
            hp: 290,
            attack: 137,
            defense: 191,
            spclAtk: 211,
            spclDef: 331,
            speed: 191
          },
          friendship: 128
        },
        {
          level: 100,
          species: 171,
          gender: '♀',
          item: 109,
          moves: [
            86,
            209,
            57,
            250
          ],
          stats: {
            hp: 410,
            attack: 165,
            defense: 167,
            spclAtk: 199,
            spclDef: 199,
            speed: 181
          },
          friendship: 128
        },
        {
          level: 100,
          species: 195,
          gender: '♀',
          item: 95,
          moves: [
            114,
            57,
            91,
            223
          ],
          stats: {
            hp: 350,
            attack: 219,
            defense: 221,
            spclAtk: 177,
            spclDef: 177,
            speed: 117
          },
          friendship: 128
        },
        {
          level: 100,
          species: 87,
          gender: '♂',
          item: 150,
          moves: [
            156,
            214,
            58,
            29
          ],
          stats: {
            hp: 326,
            attack: 197,
            defense: 209,
            spclAtk: 189,
            spclDef: 239,
            speed: 189
          },
          friendship: 128
        },
        {
          level: 100,
          species: 149,
          gender: '♂',
          item: 82,
          moves: [
            200,
            196,
            237,
            231
          ],
          stats: {
            hp: 328,
            attack: 325,
            defense: 239,
            spclAtk: 249,
            spclDef: 249,
            speed: 209
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Scientist Craig',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 48,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 178,
        desireToInflictBurn: 51,
        desireToInflictFreeze: 51,
        desireToInflictPara: 51,
        desireToInflictFlinch: 51,
        desireToInflictConfusion: 178,
        desireToInflictInfatuation: 178,
        desireToRaiseStats: [
          78,
          78,
          78,
          78,
          78,
          78,
          78
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 100,
          species: 205,
          gender: '♀',
          item: 73,
          moves: [
            153,
            207,
            38,
            92
          ],
          stats: {
            hp: 314,
            attack: 233,
            defense: 331,
            spclAtk: 171,
            spclDef: 171,
            speed: 131
          },
          friendship: 0
        },
        {
          level: 100,
          species: 53,
          gender: '♀',
          item: 83,
          moves: [
            207,
            103,
            231,
            163
          ],
          stats: {
            hp: 294,
            attack: 197,
            defense: 179,
            spclAtk: 189,
            spclDef: 189,
            speed: 289
          },
          friendship: 0
        },
        {
          level: 100,
          species: 101,
          gender: '',
          item: 84,
          moves: [
            207,
            153,
            192,
            103
          ],
          stats: {
            hp: 300,
            attack: 159,
            defense: 199,
            spclAtk: 219,
            spclDef: 219,
            speed: 339
          },
          friendship: 0
        },
        {
          level: 100,
          species: 215,
          gender: '♀',
          item: 109,
          moves: [
            207,
            91,
            8,
            57
          ],
          stats: {
            hp: 288,
            attack: 249,
            defense: 169,
            spclAtk: 123,
            spclDef: 203,
            speed: 289
          },
          friendship: 0
        },
        {
          level: 100,
          species: 169,
          gender: '♀',
          item: 82,
          moves: [
            109,
            19,
            103,
            44
          ],
          stats: {
            hp: 334,
            attack: 233,
            defense: 211,
            spclAtk: 191,
            spclDef: 211,
            speed: 311
          },
          friendship: 0
        },
        {
          level: 100,
          species: 38,
          gender: '♀',
          item: 119,
          moves: [
            109,
            53,
            203,
            83
          ],
          stats: {
            hp: 320,
            attack: 207,
            defense: 205,
            spclAtk: 219,
            spclDef: 257,
            speed: 257
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Skier Kathy',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 53,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 168,
        desireToInflictPoison: 168,
        desireToInflictBurn: 30,
        desireToInflictFreeze: 30,
        desireToInflictPara: 30,
        desireToInflictFlinch: 30,
        desireToInflictConfusion: 30,
        desireToInflictInfatuation: 30,
        desireToRaiseStats: [
          53,
          53,
          53,
          53,
          53,
          53,
          93
        ],
        desireForLightScreen: 53,
        desireForMist: 53,
        desireForFocusEnergy: 53,
        desireForReflect: 53,
        desireForDisable: 53,
        desireForBatonPass: 189,
        desireToLowerStatTenPercentChance: 53
      },
      team: [
        {
          level: 100,
          species: 124,
          gender: '♀',
          item: 174,
          moves: [
            94,
            142,
            59,
            218
          ],
          stats: {
            hp: 299,
            attack: 158,
            defense: 126,
            spclAtk: 286,
            spclDef: 246,
            speed: 246
          },
          friendship: 0
        },
        {
          level: 100,
          species: 131,
          gender: '♂',
          item: 119,
          moves: [
            34,
            58,
            225,
            196
          ],
          stats: {
            hp: 413,
            attack: 234,
            defense: 216,
            spclAtk: 226,
            spclDef: 246,
            speed: 176
          },
          friendship: 0
        },
        {
          level: 100,
          species: 199,
          gender: '♂',
          item: 146,
          moves: [
            8,
            94,
            247,
            231
          ],
          stats: {
            hp: 343,
            attack: 214,
            defense: 216,
            spclAtk: 256,
            spclDef: 276,
            speed: 116
          },
          friendship: 0
        },
        {
          level: 100,
          species: 221,
          gender: '♀',
          item: 139,
          moves: [
            59,
            89,
            36,
            196
          ],
          stats: {
            hp: 369,
            attack: 258,
            defense: 216,
            spclAtk: 176,
            spclDef: 176,
            speed: 156
          },
          friendship: 0
        },
        {
          level: 100,
          species: 122,
          gender: '♀',
          item: 73,
          moves: [
            115,
            104,
            226,
            60
          ],
          stats: {
            hp: 249,
            attack: 148,
            defense: 186,
            spclAtk: 256,
            spclDef: 296,
            speed: 236
          },
          friendship: 0
        },
        {
          level: 100,
          species: 160,
          gender: '♂',
          item: 109,
          moves: [
            163,
            103,
            44,
            196
          ],
          stats: {
            hp: 339,
            attack: 268,
            defense: 256,
            spclAtk: 214,
            spclDef: 222,
            speed: 212
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Cooltrainer♂ Marty',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 178,
        weightToSecondaryEffects: 48,
        desireToInflictSleep: 178,
        desireToInflictPoison: 53,
        desireToInflictBurn: 53,
        desireToInflictFreeze: 53,
        desireToInflictPara: 53,
        desireToInflictFlinch: 53,
        desireToInflictConfusion: 178,
        desireToInflictInfatuation: 178,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 100,
          species: 151,
          gender: '',
          item: 109,
          moves: [
            94,
            89,
            59,
            9
          ],
          stats: {
            hp: 363,
            attack: 256,
            defense: 258,
            spclAtk: 258,
            spclDef: 258,
            speed: 256
          },
          friendship: 0
        },
        {
          level: 100,
          species: 217,
          gender: '♂',
          item: 146,
          moves: [
            163,
            7,
            223,
            63
          ],
          stats: {
            hp: 333,
            attack: 324,
            defense: 206,
            spclAtk: 206,
            spclDef: 206,
            speed: 166
          },
          friendship: 0
        },
        {
          level: 100,
          species: 121,
          gender: '',
          item: 3,
          moves: [
            129,
            57,
            94,
            113
          ],
          stats: {
            hp: 283,
            attack: 206,
            defense: 228,
            spclAtk: 258,
            spclDef: 228,
            speed: 286
          },
          friendship: 0
        },
        {
          level: 100,
          species: 197,
          gender: '♂',
          item: 102,
          moves: [
            109,
            94,
            247,
            185
          ],
          stats: {
            hp: 353,
            attack: 186,
            defense: 278,
            spclAtk: 178,
            spclDef: 318,
            speed: 186
          },
          friendship: 0
        },
        {
          level: 100,
          species: 89,
          gender: '♂',
          item: 119,
          moves: [
            103,
            213,
            188,
            237
          ],
          stats: {
            hp: 363,
            attack: 274,
            defense: 206,
            spclAtk: 186,
            spclDef: 256,
            speed: 156
          },
          friendship: 0
        },
        {
          level: 100,
          species: 248,
          gender: '♀',
          item: 73,
          moves: [
            157,
            89,
            242,
            126
          ],
          stats: {
            hp: 369,
            attack: 326,
            defense: 276,
            spclAtk: 246,
            spclDef: 256,
            speed: 178
          },
          friendship: 0
        }
      ]
    }
  ],
  'violet-r1': [
    {
      name: 'Bird Keeper Matt',
      ai: {
        randomFitness: true,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 16,
          gender: '♂',
          item: 173,
          moves: [
            19,
            97,
            98,
            129
          ],
          stats: {
            hp: 125,
            attack: 78,
            defense: 70,
            spclAtk: 65,
            spclDef: 65,
            speed: 85
          },
          friendship: 128
        },
        {
          level: 50,
          species: 163,
          gender: '♀',
          item: 74,
          moves: [
            64,
            193,
            93,
            148
          ],
          stats: {
            hp: 145,
            attack: 59,
            defense: 60,
            spclAtk: 66,
            spclDef: 86,
            speed: 79
          },
          friendship: 128
        },
        {
          level: 50,
          species: 21,
          gender: '♀',
          item: 80,
          moves: [
            19,
            97,
            31,
            119
          ],
          stats: {
            hp: 125,
            attack: 89,
            defense: 60,
            spclAtk: 61,
            spclDef: 61,
            speed: 99
          },
          friendship: 128
        },
        {
          level: 50,
          species: 177,
          gender: '♀',
          item: 84,
          moves: [
            64,
            43,
            203,
            148
          ],
          stats: {
            hp: 125,
            attack: 79,
            defense: 75,
            spclAtk: 100,
            spclDef: 75,
            speed: 99
          },
          friendship: 128
        },
        {
          level: 50,
          species: 84,
          gender: '♂',
          item: 83,
          moves: [
            64,
            97,
            31,
            161
          ],
          stats: {
            hp: 120,
            attack: 118,
            defense: 75,
            spclAtk: 65,
            spclDef: 65,
            speed: 104
          },
          friendship: 128
        },
        {
          level: 50,
          species: 17,
          gender: '♂',
          item: 78,
          moves: [
            16,
            97,
            98,
            129
          ],
          stats: {
            hp: 148,
            attack: 93,
            defense: 85,
            spclAtk: 80,
            spclDef: 80,
            speed: 100
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Falkner',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 130,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 168,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 18,
          gender: '♂',
          item: 78,
          moves: [
            19,
            189,
            98,
            18
          ],
          stats: {
            hp: 167,
            attack: 117,
            defense: 108,
            spclAtk: 103,
            spclDef: 103,
            speed: 123
          },
          friendship: 255
        },
        {
          level: 50,
          species: 83,
          gender: '♂',
          item: 105,
          moves: [
            19,
            163,
            189,
            206
          ],
          stats: {
            hp: 136,
            attack: 100,
            defense: 88,
            spclAtk: 91,
            spclDef: 95,
            speed: 92
          },
          friendship: 128
        },
        {
          level: 50,
          species: 164,
          gender: '♀',
          item: 84,
          moves: [
            19,
            93,
            36,
            189
          ],
          stats: {
            hp: 192,
            attack: 82,
            defense: 83,
            spclAtk: 109,
            spclDef: 129,
            speed: 102
          },
          friendship: 128
        },
        {
          level: 50,
          species: 225,
          gender: '♀',
          item: 83,
          moves: [
            217,
            189,
            29,
            59
          ],
          stats: {
            hp: 137,
            attack: 87,
            defense: 78,
            spclAtk: 98,
            spclDef: 78,
            speed: 107
          },
          friendship: 128
        },
        {
          level: 50,
          species: 22,
          gender: '♂',
          item: 77,
          moves: [
            65,
            189,
            119,
            129
          ],
          stats: {
            hp: 149,
            attack: 125,
            defense: 98,
            spclAtk: 94,
            spclDef: 94,
            speed: 132
          },
          friendship: 128
        },
        {
          level: 50,
          species: 176,
          gender: '♂',
          item: 79,
          moves: [
            19,
            38,
            94,
            126
          ],
          stats: {
            hp: 139,
            attack: 75,
            defense: 118,
            spclAtk: 113,
            spclDef: 138,
            speed: 72
          },
          friendship: 128
        }
      ]
    }
  ],
  'azalea-r1': [
    {
      name: 'Bug Catcher Chaz',
      ai: {
        randomFitness: true,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 193,
          gender: '♀',
          item: 78,
          moves: [
            129,
            193,
            98,
            49
          ],
          stats: {
            hp: 151,
            attack: 95,
            defense: 76,
            spclAtk: 106,
            spclDef: 76,
            speed: 125
          },
          friendship: 128
        },
        {
          level: 50,
          species: 167,
          gender: '♂',
          item: 74,
          moves: [
            94,
            101,
            184,
            91
          ],
          stats: {
            hp: 126,
            attack: 94,
            defense: 71,
            spclAtk: 71,
            spclDef: 71,
            speed: 60
          },
          friendship: 128
        },
        {
          level: 50,
          species: 213,
          gender: '♀',
          item: 79,
          moves: [
            205,
            132,
            249,
            117
          ],
          stats: {
            hp: 106,
            attack: 40,
            defense: 261,
            spclAtk: 41,
            spclDef: 261,
            speed: 35
          },
          friendship: 180
        },
        {
          level: 50,
          species: 19,
          gender: '♂',
          item: 84,
          moves: [
            158,
            98,
            116,
            91
          ],
          stats: {
            hp: 116,
            attack: 90,
            defense: 66,
            spclAtk: 56,
            spclDef: 66,
            speed: 102
          },
          friendship: 128
        },
        {
          level: 50,
          species: 46,
          gender: '♂',
          item: 88,
          moves: [
            163,
            141,
            91,
            78
          ],
          stats: {
            hp: 121,
            attack: 104,
            defense: 86,
            spclAtk: 76,
            spclDef: 86,
            speed: 55
          },
          friendship: 128
        },
        {
          level: 50,
          species: 74,
          gender: '♀',
          item: 125,
          moves: [
            91,
            106,
            88,
            33
          ],
          stats: {
            hp: 126,
            attack: 110,
            defense: 131,
            spclAtk: 61,
            spclDef: 61,
            speed: 50
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Twins Min & Lyn',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 130,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 200,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 165,
          gender: '♀',
          item: 78,
          moves: [
            230,
            4,
            48,
            38
          ],
          stats: {
            hp: 126,
            attack: 50,
            defense: 61,
            spclAtk: 71,
            spclDef: 111,
            speed: 85
          },
          friendship: 128
        },
        {
          level: 50,
          species: 191,
          gender: '♂',
          item: 84,
          moves: [
            230,
            72,
            71,
            74
          ],
          stats: {
            hp: 116,
            attack: 64,
            defense: 61,
            spclAtk: 61,
            spclDef: 61,
            speed: 60
          },
          friendship: 128
        },
        {
          level: 50,
          species: 39,
          gender: '♀',
          item: 83,
          moves: [
            204,
            34,
            50,
            171
          ],
          stats: {
            hp: 209,
            attack: 78,
            defense: 51,
            spclAtk: 76,
            spclDef: 56,
            speed: 50
          },
          friendship: 128
        },
        {
          level: 50,
          species: 187,
          gender: '♂',
          item: 117,
          moves: [
            230,
            72,
            33,
            178
          ],
          stats: {
            hp: 121,
            attack: 69,
            defense: 71,
            spclAtk: 66,
            spclDef: 86,
            speed: 80
          },
          friendship: 128
        },
        {
          level: 50,
          species: 25,
          gender: '♂',
          item: 163,
          moves: [
            204,
            84,
            86,
            129
          ],
          stats: {
            hp: 121,
            attack: 89,
            defense: 61,
            spclAtk: 81,
            spclDef: 71,
            speed: 120
          },
          friendship: 128
        },
        {
          level: 50,
          species: 35,
          gender: '♀',
          item: 74,
          moves: [
            204,
            3,
            118,
            113
          ],
          stats: {
            hp: 156,
            attack: 79,
            defense: 79,
            spclAtk: 91,
            spclDef: 96,
            speed: 65
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Bugsy',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 178,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 123,
          gender: '♂',
          item: 78,
          moves: [
            210,
            17,
            163,
            63
          ],
          stats: {
            hp: 162,
            attack: 148,
            defense: 113,
            spclAtk: 88,
            spclDef: 113,
            speed: 137
          },
          friendship: 255
        },
        {
          level: 50,
          species: 12,
          gender: '♀',
          item: 74,
          moves: [
            94,
            202,
            16,
            171
          ],
          stats: {
            hp: 152,
            attack: 77,
            defense: 83,
            spclAtk: 113,
            spclDef: 113,
            speed: 102
          },
          friendship: 128
        },
        {
          level: 50,
          species: 15,
          gender: '♂',
          item: 84,
          moves: [
            41,
            40,
            188,
            15
          ],
          stats: {
            hp: 149,
            attack: 115,
            defense: 73,
            spclAtk: 78,
            spclDef: 113,
            speed: 107
          },
          friendship: 128
        },
        {
          level: 50,
          species: 70,
          gender: '♀',
          item: 173,
          moves: [
            75,
            188,
            15,
            35
          ],
          stats: {
            hp: 157,
            attack: 122,
            defense: 83,
            spclAtk: 118,
            spclDef: 78,
            speed: 87
          },
          friendship: 128
        },
        {
          level: 50,
          species: 127,
          gender: '♂',
          item: 83,
          moves: [
            70,
            66,
            20,
            69
          ],
          stats: {
            hp: 149,
            attack: 160,
            defense: 133,
            spclAtk: 88,
            spclDef: 103,
            speed: 117
          },
          friendship: 128
        },
        {
          level: 50,
          species: 247,
          gender: '♂',
          item: 80,
          moves: [
            157,
            89,
            29,
            214
          ],
          stats: {
            hp: 154,
            attack: 119,
            defense: 103,
            spclAtk: 98,
            spclDef: 103,
            speed: 83
          },
          friendship: 128
        }
      ]
    }
  ],
  'goldenrod-r1': [
    {
      name: 'Lass Lois',
      ai: {
        randomFitness: true,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 216,
          gender: '♂',
          item: 74,
          moves: [
            163,
            15,
            122,
            154
          ],
          stats: {
            hp: 146,
            attack: 114,
            defense: 81,
            spclAtk: 81,
            spclDef: 81,
            speed: 70
          },
          friendship: 128
        },
        {
          level: 50,
          species: 183,
          gender: '♀',
          item: 95,
          moves: [
            57,
            38,
            8,
            39
          ],
          stats: {
            hp: 156,
            attack: 50,
            defense: 81,
            spclAtk: 51,
            spclDef: 81,
            speed: 70
          },
          friendship: 128
        },
        {
          level: 50,
          species: 52,
          gender: '♂',
          item: 84,
          moves: [
            163,
            189,
            6,
            154
          ],
          stats: {
            hp: 126,
            attack: 79,
            defense: 66,
            spclAtk: 71,
            spclDef: 71,
            speed: 120
          },
          friendship: 128
        },
        {
          level: 50,
          species: 231,
          gender: '♂',
          item: 76,
          moves: [
            89,
            38,
            205,
            70
          ],
          stats: {
            hp: 176,
            attack: 94,
            defense: 91,
            spclAtk: 71,
            spclDef: 71,
            speed: 70
          },
          friendship: 128
        },
        {
          level: 50,
          species: 60,
          gender: '♂',
          item: 78,
          moves: [
            57,
            59,
            34,
            94
          ],
          stats: {
            hp: 126,
            attack: 84,
            defense: 71,
            spclAtk: 71,
            spclDef: 71,
            speed: 120
          },
          friendship: 128
        },
        {
          level: 50,
          species: 209,
          gender: '♀',
          item: 104,
          moves: [
            36,
            46,
            8,
            9
          ],
          stats: {
            hp: 146,
            attack: 110,
            defense: 81,
            spclAtk: 71,
            spclDef: 71,
            speed: 60
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Beauty Rita',
      ai: {
        randomFitness: true,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 50,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 225,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 225,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 190,
          gender: '♀',
          item: 84,
          moves: [
            213,
            129,
            97,
            154
          ],
          stats: {
            hp: 141,
            attack: 100,
            defense: 86,
            spclAtk: 71,
            spclDef: 86,
            speed: 115
          },
          friendship: 128
        },
        {
          level: 50,
          species: 179,
          gender: '♂',
          item: 108,
          moves: [
            213,
            84,
            33,
            113
          ],
          stats: {
            hp: 141,
            attack: 74,
            defense: 71,
            spclAtk: 96,
            spclDef: 76,
            speed: 65
          },
          friendship: 128
        },
        {
          level: 50,
          species: 50,
          gender: '♂',
          item: 78,
          moves: [
            213,
            222,
            45,
            163
          ],
          stats: {
            hp: 96,
            attack: 89,
            defense: 56,
            spclAtk: 66,
            spclDef: 76,
            speed: 125
          },
          friendship: 128
        },
        {
          level: 50,
          species: 77,
          gender: '♀',
          item: 138,
          moves: [
            213,
            52,
            23,
            97
          ],
          stats: {
            hp: 136,
            attack: 115,
            defense: 86,
            spclAtk: 96,
            spclDef: 96,
            speed: 120
          },
          friendship: 128
        },
        {
          level: 50,
          species: 223,
          gender: '♀',
          item: 173,
          moves: [
            213,
            60,
            62,
            61
          ],
          stats: {
            hp: 121,
            attack: 95,
            defense: 66,
            spclAtk: 96,
            spclDef: 66,
            speed: 95
          },
          friendship: 128
        },
        {
          level: 50,
          species: 161,
          gender: '♂',
          item: 83,
          moves: [
            213,
            21,
            98,
            133
          ],
          stats: {
            hp: 121,
            attack: 80,
            defense: 65,
            spclAtk: 66,
            spclDef: 76,
            speed: 50
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Whitney',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 153,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 153,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 241,
          gender: '♀',
          item: 78,
          moves: [
            23,
            89,
            205,
            117
          ],
          stats: {
            hp: 181,
            attack: 110,
            defense: 136,
            spclAtk: 71,
            spclDef: 101,
            speed: 130
          },
          friendship: 255
        },
        {
          level: 50,
          species: 36,
          gender: '♀',
          item: 84,
          moves: [
            3,
            94,
            87,
            126
          ],
          stats: {
            hp: 181,
            attack: 100,
            defense: 104,
            spclAtk: 116,
            spclDef: 121,
            speed: 90
          },
          friendship: 128
        },
        {
          level: 50,
          species: 40,
          gender: '♀',
          item: 74,
          moves: [
            38,
            94,
            9,
            8
          ],
          stats: {
            hp: 226,
            attack: 104,
            defense: 76,
            spclAtk: 106,
            spclDef: 81,
            speed: 75
          },
          friendship: 128
        },
        {
          level: 50,
          species: 44,
          gender: '♀',
          item: 83,
          moves: [
            80,
            188,
            76,
            202
          ],
          stats: {
            hp: 146,
            attack: 95,
            defense: 101,
            spclAtk: 116,
            spclDef: 106,
            speed: 70
          },
          friendship: 128
        },
        {
          level: 50,
          species: 85,
          gender: '♂',
          item: 79,
          moves: [
            65,
            161,
            31,
            214
          ],
          stats: {
            hp: 146,
            attack: 144,
            defense: 101,
            spclAtk: 91,
            spclDef: 91,
            speed: 130
          },
          friendship: 128
        },
        {
          level: 50,
          species: 234,
          gender: '♂',
          item: 80,
          moves: [
            36,
            94,
            29,
            129
          ],
          stats: {
            hp: 159,
            attack: 129,
            defense: 93,
            spclAtk: 116,
            spclDef: 96,
            speed: 115
          },
          friendship: 255
        }
      ]
    }
  ],
  'ecruteak-r1': [
    {
      name: 'Medium Holly',
      ai: {
        randomFitness: true,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 69,
          gender: '♀',
          item: 173,
          moves: [
            22,
            74,
            15,
            51
          ],
          stats: {
            hp: 137,
            attack: 106,
            defense: 67,
            spclAtk: 102,
            spclDef: 62,
            speed: 71
          },
          friendship: 128
        },
        {
          level: 50,
          species: 163,
          gender: '♂',
          item: 74,
          moves: [
            93,
            193,
            45,
            64
          ],
          stats: {
            hp: 147,
            attack: 65,
            defense: 62,
            spclAtk: 68,
            spclDef: 88,
            speed: 81
          },
          friendship: 128
        },
        {
          level: 50,
          species: 166,
          gender: '♀',
          item: 79,
          moves: [
            4,
            219,
            115,
            113
          ],
          stats: {
            hp: 142,
            attack: 66,
            defense: 82,
            spclAtk: 87,
            spclDef: 142,
            speed: 116
          },
          friendship: 128
        },
        {
          level: 50,
          species: 132,
          gender: '',
          item: 35,
          moves: [
            144,
            0,
            0,
            0
          ],
          stats: {
            hp: 145,
            attack: 80,
            defense: 80,
            spclAtk: 80,
            spclDef: 80,
            speed: 80
          },
          friendship: 128
        },
        {
          level: 50,
          species: 30,
          gender: '♀',
          item: 81,
          moves: [
            33,
            24,
            154,
            40
          ],
          stats: {
            hp: 157,
            attack: 93,
            defense: 99,
            spclAtk: 87,
            spclDef: 87,
            speed: 87
          },
          friendship: 128
        },
        {
          level: 50,
          species: 201,
          gender: '',
          item: 78,
          moves: [
            237,
            0,
            0,
            0
          ],
          stats: {
            hp: 143,
            attack: 108,
            defense: 76,
            spclAtk: 104,
            spclDef: 80,
            speed: 79
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Sage Ty',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 30,
        weightToDamageByPlayer: 90,
        weightToSecondaryEffects: 240,
        desireToInflictSleep: 128,
        desireToInflictPoison: 250,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 180,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 41,
          gender: '♂',
          item: 79,
          moves: [
            92,
            212,
            17,
            141
          ],
          stats: {
            hp: 127,
            attack: 80,
            defense: 71,
            spclAtk: 66,
            spclDef: 76,
            speed: 86
          },
          friendship: 180
        },
        {
          level: 50,
          species: 238,
          gender: '♀',
          item: 78,
          moves: [
            195,
            212,
            122,
            59
          ],
          stats: {
            hp: 132,
            attack: 61,
            defense: 51,
            spclAtk: 121,
            spclDef: 101,
            speed: 96
          },
          friendship: 128
        },
        {
          level: 50,
          species: 92,
          gender: '♂',
          item: 173,
          moves: [
            174,
            212,
            180,
            122
          ],
          stats: {
            hp: 117,
            attack: 70,
            defense: 66,
            spclAtk: 136,
            spclDef: 71,
            speed: 111
          },
          friendship: 128
        },
        {
          level: 50,
          species: 42,
          gender: '♂',
          item: 84,
          moves: [
            92,
            212,
            17,
            129
          ],
          stats: {
            hp: 162,
            attack: 115,
            defense: 106,
            spclAtk: 101,
            spclDef: 111,
            speed: 121
          },
          friendship: 128
        },
        {
          level: 50,
          species: 200,
          gender: '♀',
          item: 74,
          moves: [
            195,
            212,
            180,
            60
          ],
          stats: {
            hp: 147,
            attack: 91,
            defense: 96,
            spclAtk: 121,
            spclDef: 121,
            speed: 116
          },
          friendship: 128
        },
        {
          level: 50,
          species: 93,
          gender: '♀',
          item: 83,
          moves: [
            174,
            212,
            180,
            101
          ],
          stats: {
            hp: 132,
            attack: 81,
            defense: 81,
            spclAtk: 151,
            spclDef: 91,
            speed: 126
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Morty',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 160,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 94,
          gender: '♂',
          item: 83,
          moves: [
            247,
            94,
            101,
            7
          ],
          stats: {
            hp: 155,
            attack: 103,
            defense: 92,
            spclAtk: 162,
            spclDef: 107,
            speed: 141
          },
          friendship: 255
        },
        {
          level: 50,
          species: 168,
          gender: '♀',
          item: 79,
          moves: [
            188,
            94,
            91,
            101
          ],
          stats: {
            hp: 157,
            attack: 121,
            defense: 102,
            spclAtk: 92,
            spclDef: 92,
            speed: 71
          },
          friendship: 128
        },
        {
          level: 50,
          species: 185,
          gender: '♂',
          item: 173,
          moves: [
            157,
            67,
            70,
            89
          ],
          stats: {
            hp: 157,
            attack: 135,
            defense: 147,
            spclAtk: 62,
            spclDef: 97,
            speed: 61
          },
          friendship: 128
        },
        {
          level: 50,
          species: 105,
          gender: '♀',
          item: 84,
          moves: [
            155,
            125,
            29,
            231
          ],
          stats: {
            hp: 147,
            attack: 111,
            defense: 142,
            spclAtk: 82,
            spclDef: 112,
            speed: 76
          },
          friendship: 128
        },
        {
          level: 50,
          species: 203,
          gender: '♂',
          item: 78,
          moves: [
            60,
            129,
            87,
            171
          ],
          stats: {
            hp: 157,
            attack: 115,
            defense: 97,
            spclAtk: 122,
            spclDef: 97,
            speed: 116
          },
          friendship: 128
        },
        {
          level: 50,
          species: 164,
          gender: '♀',
          item: 74,
          moves: [
            19,
            93,
            36,
            193
          ],
          stats: {
            hp: 187,
            attack: 81,
            defense: 82,
            spclAtk: 108,
            spclDef: 128,
            speed: 101
          },
          friendship: 128
        }
      ]
    }
  ],
  'cianwood-r1': [
    {
      name: 'Blackbelt Nick',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 20,
        weightToDamageByPlayer: 220,
        weightToSecondaryEffects: 230,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 237,
          gender: '♂',
          item: 98,
          moves: [
            167,
            229,
            91,
            68
          ],
          stats: {
            hp: 142,
            attack: 127,
            defense: 128,
            spclAtk: 68,
            spclDef: 143,
            speed: 102
          },
          friendship: 128
        },
        {
          level: 50,
          species: 33,
          gender: '♂',
          item: 78,
          moves: [
            32,
            40,
            31,
            30
          ],
          stats: {
            hp: 153,
            attack: 104,
            defense: 90,
            spclAtk: 88,
            spclDef: 88,
            speed: 97
          },
          friendship: 128
        },
        {
          level: 50,
          species: 51,
          gender: '♀',
          item: 80,
          moves: [
            90,
            10,
            249,
            222
          ],
          stats: {
            hp: 127,
            attack: 114,
            defense: 83,
            spclAtk: 83,
            spclDef: 103,
            speed: 152
          },
          friendship: 128
        },
        {
          level: 50,
          species: 106,
          gender: '♂',
          item: 84,
          moves: [
            26,
            25,
            27,
            193
          ],
          stats: {
            hp: 142,
            attack: 152,
            defense: 86,
            spclAtk: 68,
            spclDef: 143,
            speed: 119
          },
          friendship: 128
        },
        {
          level: 50,
          species: 119,
          gender: '♀',
          item: 83,
          moves: [
            32,
            127,
            203,
            175
          ],
          stats: {
            hp: 172,
            attack: 124,
            defense: 98,
            spclAtk: 98,
            spclDef: 113,
            speed: 100
          },
          friendship: 128
        },
        {
          level: 50,
          species: 111,
          gender: '♀',
          item: 79,
          moves: [
            32,
            31,
            91,
            30
          ],
          stats: {
            hp: 172,
            attack: 117,
            defense: 128,
            spclAtk: 63,
            spclDef: 63,
            speed: 57
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Chuck',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 30,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 250,
        desireToInflictSleep: 100,
        desireToInflictPoison: 100,
        desireToInflictBurn: 100,
        desireToInflictFreeze: 100,
        desireToInflictPara: 100,
        desireToInflictFlinch: 100,
        desireToInflictConfusion: 255,
        desireToInflictInfatuation: 100,
        desireToRaiseStats: [
          100,
          100,
          100,
          100,
          100,
          100,
          100
        ],
        desireForLightScreen: 100,
        desireForMist: 100,
        desireForFocusEnergy: 100,
        desireForReflect: 100,
        desireForDisable: 100,
        desireForBatonPass: 100,
        desireToLowerStatTenPercentChance: 100
      },
      team: [
        {
          level: 50,
          species: 62,
          gender: '♂',
          item: 119,
          moves: [
            223,
            56,
            89,
            94
          ],
          stats: {
            hp: 187,
            attack: 127,
            defense: 131,
            spclAtk: 106,
            spclDef: 126,
            speed: 105
          },
          friendship: 255
        },
        {
          level: 50,
          species: 210,
          gender: '♂',
          item: 78,
          moves: [
            223,
            70,
            247,
            46
          ],
          stats: {
            hp: 179,
            attack: 161,
            defense: 111,
            spclAtk: 96,
            spclDef: 96,
            speed: 80
          },
          friendship: 128
        },
        {
          level: 50,
          species: 67,
          gender: '♂',
          item: 80,
          moves: [
            223,
            233,
            89,
            69
          ],
          stats: {
            hp: 169,
            attack: 139,
            defense: 106,
            spclAtk: 86,
            spclDef: 96,
            speed: 80
          },
          friendship: 128
        },
        {
          level: 50,
          species: 107,
          gender: '♂',
          item: 74,
          moves: [
            223,
            183,
            5,
            4
          ],
          stats: {
            hp: 139,
            attack: 144,
            defense: 115,
            spclAtk: 71,
            spclDef: 146,
            speed: 111
          },
          friendship: 128
        },
        {
          level: 50,
          species: 28,
          gender: '♂',
          item: 84,
          moves: [
            223,
            91,
            163,
            205
          ],
          stats: {
            hp: 164,
            attack: 139,
            defense: 146,
            spclAtk: 81,
            spclDef: 91,
            speed: 100
          },
          friendship: 128
        },
        {
          level: 50,
          species: 57,
          gender: '♂',
          item: 83,
          moves: [
            223,
            91,
            29,
            69
          ],
          stats: {
            hp: 154,
            attack: 144,
            defense: 96,
            spclAtk: 96,
            spclDef: 106,
            speed: 130
          },
          friendship: 128
        }
      ]
    }
  ],
  'olivine-r1': [
    {
      name: 'Gym Leader Jasmine',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 200,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 100,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 208,
          gender: '♂',
          item: 140,
          moves: [
            231,
            89,
            88,
            70
          ],
          stats: {
            hp: 171,
            attack: 124,
            defense: 235,
            spclAtk: 90,
            spclDef: 100,
            speed: 64
          },
          friendship: 255
        },
        {
          level: 50,
          species: 222,
          gender: '♀',
          item: 83,
          moves: [
            61,
            246,
            131,
            94
          ],
          stats: {
            hp: 143,
            attack: 89,
            defense: 120,
            spclAtk: 100,
            spclDef: 120,
            speed: 69
          },
          friendship: 128
        },
        {
          level: 50,
          species: 82,
          gender: '',
          item: 84,
          moves: [
            84,
            129,
            87,
            49
          ],
          stats: {
            hp: 138,
            attack: 94,
            defense: 130,
            spclAtk: 155,
            spclDef: 105,
            speed: 104
          },
          friendship: 128
        },
        {
          level: 50,
          species: 226,
          gender: '♀',
          item: 78,
          moves: [
            57,
            17,
            36,
            214
          ],
          stats: {
            hp: 153,
            attack: 74,
            defense: 105,
            spclAtk: 115,
            spclDef: 175,
            speed: 104
          },
          friendship: 128
        },
        {
          level: 50,
          species: 227,
          gender: '♂',
          item: 143,
          moves: [
            211,
            19,
            129,
            31
          ],
          stats: {
            hp: 153,
            attack: 116,
            defense: 175,
            spclAtk: 75,
            spclDef: 105,
            speed: 104
          },
          friendship: 128
        },
        {
          level: 50,
          species: 205,
          gender: '♀',
          item: 74,
          moves: [
            38,
            205,
            202,
            229
          ],
          stats: {
            hp: 163,
            attack: 124,
            defense: 175,
            spclAtk: 95,
            spclDef: 95,
            speed: 74
          },
          friendship: 128
        }
      ]
    }
  ],
  'team-rocket-r1': [
    {
      name: 'Rocket Grunt ♂',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 180,
        weightToDamageByPlayer: 70,
        weightToSecondaryEffects: 70,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 74,
          gender: '♂',
          item: 74,
          moves: [
            89,
            88,
            70,
            153
          ],
          stats: {
            hp: 127,
            attack: 117,
            defense: 134,
            spclAtk: 64,
            spclDef: 64,
            speed: 51
          },
          friendship: 128
        },
        {
          level: 50,
          species: 109,
          gender: '♀',
          item: 79,
          moves: [
            124,
            192,
            123,
            153
          ],
          stats: {
            hp: 135,
            attack: 99,
            defense: 129,
            spclAtk: 94,
            spclDef: 79,
            speed: 66
          },
          friendship: 128
        },
        {
          level: 50,
          species: 204,
          gender: '♂',
          item: 80,
          moves: [
            38,
            202,
            229,
            153
          ],
          stats: {
            hp: 137,
            attack: 102,
            defense: 124,
            spclAtk: 69,
            spclDef: 69,
            speed: 46
          },
          friendship: 128
        },
        {
          level: 50,
          species: 75,
          gender: '♂',
          item: 84,
          moves: [
            222,
            88,
            70,
            153
          ],
          stats: {
            hp: 142,
            attack: 132,
            defense: 149,
            spclAtk: 79,
            spclDef: 79,
            speed: 66
          },
          friendship: 128
        },
        {
          level: 50,
          species: 110,
          gender: '♀',
          item: 78,
          moves: [
            124,
            192,
            139,
            153
          ],
          stats: {
            hp: 160,
            attack: 124,
            defense: 154,
            spclAtk: 119,
            spclDef: 104,
            speed: 91
          },
          friendship: 128
        },
        {
          level: 50,
          species: 101,
          gender: '',
          item: 83,
          moves: [
            87,
            129,
            49,
            153
          ],
          stats: {
            hp: 147,
            attack: 87,
            defense: 104,
            spclAtk: 114,
            spclDef: 114,
            speed: 171
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Rocket Grunt ♀',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 30,
        weightToDamageByPlayer: 180,
        weightToSecondaryEffects: 210,
        desireToInflictSleep: 128,
        desireToInflictPoison: 200,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 170
      },
      team: [
        {
          level: 50,
          species: 198,
          gender: '♂',
          item: 102,
          moves: [
            92,
            197,
            228,
            19
          ],
          stats: {
            hp: 147,
            attack: 120,
            defense: 78,
            spclAtk: 121,
            spclDef: 78,
            speed: 122
          },
          friendship: 128
        },
        {
          level: 50,
          species: 96,
          gender: '♂',
          item: 80,
          moves: [
            92,
            182,
            93,
            1
          ],
          stats: {
            hp: 147,
            attack: 83,
            defense: 81,
            spclAtk: 79,
            spclDef: 126,
            speed: 73
          },
          friendship: 128
        },
        {
          level: 50,
          species: 167,
          gender: '♀',
          item: 74,
          moves: [
            92,
            182,
            141,
            132
          ],
          stats: {
            hp: 127,
            attack: 91,
            defense: 76,
            spclAtk: 76,
            spclDef: 76,
            speed: 61
          },
          friendship: 128
        },
        {
          level: 50,
          species: 206,
          gender: '♀',
          item: 83,
          moves: [
            92,
            182,
            228,
            91
          ],
          stats: {
            hp: 187,
            attack: 101,
            defense: 106,
            spclAtk: 101,
            spclDef: 101,
            speed: 76
          },
          friendship: 128
        },
        {
          level: 50,
          species: 41,
          gender: '♀',
          item: 84,
          moves: [
            92,
            197,
            141,
            17
          ],
          stats: {
            hp: 127,
            attack: 76,
            defense: 71,
            spclAtk: 66,
            spclDef: 76,
            speed: 86
          },
          friendship: 128
        },
        {
          level: 50,
          species: 228,
          gender: '♂',
          item: 78,
          moves: [
            92,
            197,
            44,
            52
          ],
          stats: {
            hp: 132,
            attack: 95,
            defense: 66,
            spclAtk: 116,
            spclDef: 86,
            speed: 96
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Rocket Executive ♀',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 200,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 200,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 215,
          gender: '♀',
          item: 0,
          moves: [
            168,
            163,
            171,
            218
          ],
          stats: {
            hp: 140,
            attack: 124,
            defense: 85,
            spclAtk: 65,
            spclDef: 105,
            speed: 144
          },
          friendship: 55
        },
        {
          level: 50,
          species: 89,
          gender: '♂',
          item: 0,
          moves: [
            168,
            188,
            126,
            218
          ],
          stats: {
            hp: 190,
            attack: 138,
            defense: 105,
            spclAtk: 95,
            spclDef: 130,
            speed: 79
          },
          friendship: 55
        },
        {
          level: 50,
          species: 108,
          gender: '♀',
          item: 0,
          moves: [
            168,
            89,
            59,
            218
          ],
          stats: {
            hp: 175,
            attack: 84,
            defense: 105,
            spclAtk: 90,
            spclDef: 105,
            speed: 59
          },
          friendship: 30
        },
        {
          level: 50,
          species: 45,
          gender: '♀',
          item: 78,
          moves: [
            202,
            51,
            15,
            218
          ],
          stats: {
            hp: 160,
            attack: 109,
            defense: 115,
            spclAtk: 130,
            spclDef: 120,
            speed: 79
          },
          friendship: 40
        },
        {
          level: 50,
          species: 20,
          gender: '♂',
          item: 0,
          moves: [
            168,
            91,
            162,
            218
          ],
          stats: {
            hp: 140,
            attack: 114,
            defense: 90,
            spclAtk: 80,
            spclDef: 100,
            speed: 126
          },
          friendship: 70
        },
        {
          level: 50,
          species: 24,
          gender: '♂',
          item: 0,
          moves: [
            168,
            188,
            214,
            218
          ],
          stats: {
            hp: 145,
            attack: 118,
            defense: 99,
            spclAtk: 95,
            spclDef: 109,
            speed: 109
          },
          friendship: 40
        }
      ]
    },
    {
      name: 'Rocket Executive ♂',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 100,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 170,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 160,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 229,
          gender: '♂',
          item: 140,
          moves: [
            242,
            241,
            53,
            76
          ],
          stats: {
            hp: 162,
            attack: 125,
            defense: 82,
            spclAtk: 142,
            spclDef: 112,
            speed: 126
          },
          friendship: 255
        },
        {
          level: 50,
          species: 42,
          gender: '♂',
          item: 79,
          moves: [
            44,
            17,
            202,
            109
          ],
          stats: {
            hp: 162,
            attack: 115,
            defense: 102,
            spclAtk: 97,
            spclDef: 107,
            speed: 121
          },
          friendship: 128
        },
        {
          level: 50,
          species: 53,
          gender: '♂',
          item: 74,
          moves: [
            163,
            185,
            231,
            87
          ],
          stats: {
            hp: 152,
            attack: 105,
            defense: 92,
            spclAtk: 97,
            spclDef: 97,
            speed: 146
          },
          friendship: 128
        },
        {
          level: 50,
          species: 200,
          gender: '♀',
          item: 84,
          moves: [
            247,
            94,
            174,
            220
          ],
          stats: {
            hp: 147,
            attack: 91,
            defense: 92,
            spclAtk: 117,
            spclDef: 117,
            speed: 116
          },
          friendship: 128
        },
        {
          level: 50,
          species: 71,
          gender: '♂',
          item: 78,
          moves: [
            75,
            188,
            241,
            76
          ],
          stats: {
            hp: 167,
            attack: 140,
            defense: 97,
            spclAtk: 132,
            spclDef: 92,
            speed: 101
          },
          friendship: 128
        },
        {
          level: 50,
          species: 202,
          gender: '♀',
          item: 83,
          moves: [
            219,
            68,
            243,
            194
          ],
          stats: {
            hp: 287,
            attack: 61,
            defense: 90,
            spclAtk: 65,
            spclDef: 90,
            speed: 61
          },
          friendship: 128
        }
      ]
    }
  ],
  'mahogany-r1': [
    {
      name: 'Boarder Alvin',
      ai: {
        randomFitness: true,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 86,
          gender: '♀',
          item: 173,
          moves: [
            62,
            203,
            219,
            214
          ],
          stats: {
            hp: 152,
            attack: 76,
            defense: 87,
            spclAtk: 77,
            spclDef: 102,
            speed: 76
          },
          friendship: 128
        },
        {
          level: 50,
          species: 220,
          gender: '♂',
          item: 74,
          moves: [
            181,
            203,
            46,
            54
          ],
          stats: {
            hp: 137,
            attack: 85,
            defense: 72,
            spclAtk: 62,
            spclDef: 62,
            speed: 81
          },
          friendship: 128
        },
        {
          level: 50,
          species: 90,
          gender: '♂',
          item: 83,
          moves: [
            250,
            62,
            203,
            110
          ],
          stats: {
            hp: 117,
            attack: 100,
            defense: 132,
            spclAtk: 77,
            spclDef: 57,
            speed: 71
          },
          friendship: 128
        },
        {
          level: 50,
          species: 238,
          gender: '♀',
          item: 107,
          moves: [
            93,
            181,
            122,
            1
          ],
          stats: {
            hp: 132,
            attack: 61,
            defense: 47,
            spclAtk: 117,
            spclDef: 97,
            speed: 96
          },
          friendship: 128
        },
        {
          level: 50,
          species: 99,
          gender: '♂',
          item: 78,
          moves: [
            152,
            59,
            23,
            11
          ],
          stats: {
            hp: 142,
            attack: 165,
            defense: 147,
            spclAtk: 82,
            spclDef: 82,
            speed: 106
          },
          friendship: 128
        },
        {
          level: 50,
          species: 180,
          gender: '♀',
          item: 84,
          moves: [
            9,
            33,
            231,
            45
          ],
          stats: {
            hp: 157,
            attack: 86,
            defense: 87,
            spclAtk: 112,
            spclDef: 92,
            speed: 76
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Skier Carol',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 40,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 250,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 225,
          gender: '♀',
          item: 78,
          moves: [
            196,
            29,
            217,
            19
          ],
          stats: {
            hp: 132,
            attack: 86,
            defense: 77,
            spclAtk: 97,
            spclDef: 77,
            speed: 106
          },
          friendship: 128
        },
        {
          level: 50,
          species: 184,
          gender: '♂',
          item: 84,
          moves: [
            196,
            29,
            57,
            38
          ],
          stats: {
            hp: 187,
            attack: 85,
            defense: 112,
            spclAtk: 82,
            spclDef: 112,
            speed: 81
          },
          friendship: 128
        },
        {
          level: 50,
          species: 104,
          gender: '♂',
          item: 83,
          moves: [
            196,
            29,
            198,
            45
          ],
          stats: {
            hp: 137,
            attack: 85,
            defense: 127,
            spclAtk: 72,
            spclDef: 82,
            speed: 66
          },
          friendship: 128
        },
        {
          level: 50,
          species: 211,
          gender: '♀',
          item: 173,
          moves: [
            196,
            29,
            36,
            42
          ],
          stats: {
            hp: 152,
            attack: 126,
            defense: 107,
            spclAtk: 87,
            spclDef: 87,
            speed: 116
          },
          friendship: 128
        },
        {
          level: 50,
          species: 147,
          gender: '♂',
          item: 74,
          moves: [
            196,
            29,
            82,
            21
          ],
          stats: {
            hp: 128,
            attack: 99,
            defense: 77,
            spclAtk: 82,
            spclDef: 82,
            speed: 81
          },
          friendship: 128
        },
        {
          level: 50,
          species: 117,
          gender: '♀',
          item: 83,
          moves: [
            196,
            29,
            108,
            57
          ],
          stats: {
            hp: 142,
            attack: 96,
            defense: 127,
            spclAtk: 127,
            spclDef: 77,
            speed: 116
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Pryce',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 140,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 200,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 221,
          gender: '♂',
          item: 73,
          moves: [
            59,
            89,
            36,
            214
          ],
          stats: {
            hp: 187,
            attack: 137,
            defense: 112,
            spclAtk: 98,
            spclDef: 98,
            speed: 81
          },
          friendship: 255
        },
        {
          level: 50,
          species: 87,
          gender: '♀',
          item: 84,
          moves: [
            57,
            58,
            36,
            219
          ],
          stats: {
            hp: 177,
            attack: 101,
            defense: 112,
            spclAtk: 102,
            spclDef: 127,
            speed: 101
          },
          friendship: 128
        },
        {
          level: 50,
          species: 91,
          gender: '♂',
          item: 78,
          moves: [
            58,
            57,
            131,
            129
          ],
          stats: {
            hp: 137,
            attack: 130,
            defense: 212,
            spclAtk: 117,
            spclDef: 77,
            speed: 101
          },
          friendship: 128
        },
        {
          level: 50,
          species: 217,
          gender: '♀',
          item: 83,
          moves: [
            37,
            91,
            185,
            9
          ],
          stats: {
            hp: 177,
            attack: 161,
            defense: 107,
            spclAtk: 107,
            spclDef: 107,
            speed: 86
          },
          friendship: 128
        },
        {
          level: 50,
          species: 232,
          gender: '♂',
          item: 80,
          moves: [
            38,
            89,
            205,
            173
          ],
          stats: {
            hp: 177,
            attack: 155,
            defense: 152,
            spclAtk: 92,
            spclDef: 92,
            speed: 81
          },
          friendship: 128
        },
        {
          level: 50,
          species: 124,
          gender: '♀',
          item: 109,
          moves: [
            8,
            94,
            247,
            37
          ],
          stats: {
            hp: 152,
            attack: 81,
            defense: 67,
            spclAtk: 147,
            spclDef: 127,
            speed: 126
          },
          friendship: 128
        }
      ]
    }
  ],
  'blackthorn-r1': [
    {
      name: 'Cooltrainer♀ Gloria',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 150,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 200,
        desireToInflictSleep: 200,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 39,
          gender: '♀',
          item: 78,
          moves: [
            47,
            111,
            205,
            38
          ],
          stats: {
            hp: 199,
            attack: 80,
            defense: 53,
            spclAtk: 78,
            spclDef: 58,
            speed: 52
          },
          friendship: 128
        },
        {
          level: 50,
          species: 48,
          gender: '♂',
          item: 79,
          moves: [
            79,
            94,
            202,
            193
          ],
          stats: {
            hp: 144,
            attack: 90,
            defense: 83,
            spclAtk: 73,
            spclDef: 88,
            speed: 77
          },
          friendship: 128
        },
        {
          level: 50,
          species: 188,
          gender: '♀',
          item: 83,
          moves: [
            79,
            72,
            178,
            29
          ],
          stats: {
            hp: 147,
            attack: 77,
            defense: 83,
            spclAtk: 78,
            spclDef: 98,
            speed: 112
          },
          friendship: 128
        },
        {
          level: 50,
          species: 35,
          gender: '♀',
          item: 80,
          moves: [
            47,
            1,
            126,
            87
          ],
          stats: {
            hp: 154,
            attack: 80,
            defense: 81,
            spclAtk: 93,
            spclDef: 98,
            speed: 67
          },
          friendship: 128
        },
        {
          level: 50,
          species: 102,
          gender: '♂',
          item: 84,
          moves: [
            79,
            72,
            188,
            140
          ],
          stats: {
            hp: 144,
            attack: 75,
            defense: 113,
            spclAtk: 93,
            spclDef: 78,
            speed: 72
          },
          friendship: 128
        },
        {
          level: 50,
          species: 43,
          gender: '♂',
          item: 139,
          moves: [
            79,
            71,
            51,
            15
          ],
          stats: {
            hp: 129,
            attack: 85,
            defense: 88,
            spclAtk: 108,
            spclDef: 98,
            speed: 62
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Cooltrainer♂ Vince',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 180,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 100,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 1,
          gender: '♂',
          item: 80,
          moves: [
            75,
            29,
            202,
            73
          ],
          stats: {
            hp: 137,
            attack: 81,
            defense: 82,
            spclAtk: 98,
            spclDef: 98,
            speed: 77
          },
          friendship: 128
        },
        {
          level: 50,
          species: 7,
          gender: '♀',
          item: 83,
          moves: [
            57,
            44,
            59,
            231
          ],
          stats: {
            hp: 136,
            attack: 76,
            defense: 98,
            spclAtk: 83,
            spclDef: 97,
            speed: 75
          },
          friendship: 128
        },
        {
          level: 50,
          species: 4,
          gender: '♂',
          item: 74,
          moves: [
            53,
            163,
            82,
            91
          ],
          stats: {
            hp: 131,
            attack: 84,
            defense: 76,
            spclAtk: 93,
            spclDef: 83,
            speed: 97
          },
          friendship: 128
        },
        {
          level: 50,
          species: 152,
          gender: '♀',
          item: 84,
          moves: [
            75,
            34,
            213,
            189
          ],
          stats: {
            hp: 137,
            attack: 77,
            defense: 98,
            spclAtk: 82,
            spclDef: 98,
            speed: 77
          },
          friendship: 128
        },
        {
          level: 50,
          species: 158,
          gender: '♂',
          item: 78,
          moves: [
            57,
            44,
            163,
            184
          ],
          stats: {
            hp: 142,
            attack: 97,
            defense: 97,
            spclAtk: 77,
            spclDef: 81,
            speed: 75
          },
          friendship: 128
        },
        {
          level: 50,
          species: 155,
          gender: '♂',
          item: 139,
          moves: [
            172,
            108,
            129,
            231
          ],
          stats: {
            hp: 131,
            attack: 84,
            defense: 76,
            spclAtk: 93,
            spclDef: 83,
            speed: 97
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Clair',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 180,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 100,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 160,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 230,
          gender: '♀',
          item: 140,
          moves: [
            225,
            56,
            29,
            59
          ],
          stats: {
            hp: 162,
            attack: 126,
            defense: 127,
            spclAtk: 127,
            spclDef: 127,
            speed: 116
          },
          friendship: 255
        },
        {
          level: 50,
          species: 181,
          gender: '♀',
          item: 84,
          moves: [
            9,
            29,
            231,
            129
          ],
          stats: {
            hp: 177,
            attack: 106,
            defense: 107,
            spclAtk: 147,
            spclDef: 122,
            speed: 86
          },
          friendship: 128
        },
        {
          level: 50,
          species: 148,
          gender: '♂',
          item: 144,
          moves: [
            200,
            57,
            59,
            87
          ],
          stats: {
            hp: 148,
            attack: 119,
            defense: 97,
            spclAtk: 102,
            spclDef: 102,
            speed: 101
          },
          friendship: 128
        },
        {
          level: 50,
          species: 112,
          gender: '♂',
          item: 74,
          moves: [
            89,
            205,
            231,
            223
          ],
          stats: {
            hp: 192,
            attack: 165,
            defense: 152,
            spclAtk: 77,
            spclDef: 77,
            speed: 71
          },
          friendship: 128
        },
        {
          level: 50,
          species: 59,
          gender: '♂',
          item: 83,
          moves: [
            53,
            82,
            91,
            245
          ],
          stats: {
            hp: 177,
            attack: 145,
            defense: 112,
            spclAtk: 132,
            spclDef: 112,
            speed: 126
          },
          friendship: 128
        },
        {
          level: 50,
          species: 131,
          gender: '♀',
          item: 78,
          moves: [
            225,
            57,
            58,
            94
          ],
          stats: {
            hp: 217,
            attack: 116,
            defense: 112,
            spclAtk: 117,
            spclDef: 127,
            speed: 91
          },
          friendship: 128
        }
      ]
    }
  ],
  'elite-four-r1': [
    {
      name: 'Elite Four Will',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 200,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 100,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 178,
          gender: '♂',
          item: 82,
          moves: [
            94,
            19,
            202,
            101
          ],
          stats: {
            hp: 148,
            attack: 109,
            defense: 100,
            spclAtk: 125,
            spclDef: 100,
            speed: 124
          },
          friendship: 255
        },
        {
          level: 50,
          species: 64,
          gender: '♀',
          item: 84,
          moves: [
            94,
            7,
            9,
            247
          ],
          stats: {
            hp: 131,
            attack: 64,
            defense: 60,
            spclAtk: 150,
            spclDef: 100,
            speed: 134
          },
          friendship: 128
        },
        {
          level: 50,
          species: 203,
          gender: '♀',
          item: 78,
          moves: [
            60,
            89,
            247,
            23
          ],
          stats: {
            hp: 161,
            attack: 109,
            defense: 95,
            spclAtk: 120,
            spclDef: 95,
            speed: 114
          },
          friendship: 128
        },
        {
          level: 50,
          species: 36,
          gender: '♀',
          item: 83,
          moves: [
            94,
            59,
            87,
            126
          ],
          stats: {
            hp: 178,
            attack: 104,
            defense: 103,
            spclAtk: 115,
            spclDef: 120,
            speed: 89
          },
          friendship: 128
        },
        {
          level: 50,
          species: 103,
          gender: '♂',
          item: 79,
          moves: [
            94,
            202,
            70,
            188
          ],
          stats: {
            hp: 178,
            attack: 129,
            defense: 115,
            spclAtk: 155,
            spclDef: 95,
            speed: 84
          },
          friendship: 128
        },
        {
          level: 50,
          species: 124,
          gender: '♀',
          item: 80,
          moves: [
            8,
            94,
            34,
            3
          ],
          stats: {
            hp: 156,
            attack: 79,
            defense: 65,
            spclAtk: 145,
            spclDef: 125,
            speed: 124
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Elite Four Koga',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 40,
        weightToDamageByPlayer: 120,
        weightToSecondaryEffects: 200,
        desireToInflictSleep: 90,
        desireToInflictPoison: 120,
        desireToInflictBurn: 90,
        desireToInflictFreeze: 90,
        desireToInflictPara: 90,
        desireToInflictFlinch: 90,
        desireToInflictConfusion: 90,
        desireToInflictInfatuation: 90,
        desireToRaiseStats: [
          90,
          90,
          90,
          90,
          90,
          90,
          200
        ],
        desireForLightScreen: 90,
        desireForMist: 90,
        desireForFocusEnergy: 90,
        desireForReflect: 90,
        desireForDisable: 90,
        desireForBatonPass: 90,
        desireToLowerStatTenPercentChance: 90
      },
      team: [
        {
          level: 50,
          species: 49,
          gender: '♀',
          item: 119,
          moves: [
            104,
            92,
            202,
            60
          ],
          stats: {
            hp: 157,
            attack: 94,
            defense: 98,
            spclAtk: 128,
            spclDef: 113,
            speed: 119
          },
          friendship: 255
        },
        {
          level: 50,
          species: 168,
          gender: '♂',
          item: 80,
          moves: [
            104,
            169,
            92,
            91
          ],
          stats: {
            hp: 152,
            attack: 125,
            defense: 107,
            spclAtk: 97,
            spclDef: 97,
            speed: 69
          },
          friendship: 128
        },
        {
          level: 50,
          species: 42,
          gender: '♀',
          item: 78,
          moves: [
            104,
            92,
            17,
            197
          ],
          stats: {
            hp: 157,
            attack: 109,
            defense: 107,
            spclAtk: 102,
            spclDef: 112,
            speed: 119
          },
          friendship: 128
        },
        {
          level: 50,
          species: 207,
          gender: '♂',
          item: 84,
          moves: [
            104,
            92,
            201,
            231
          ],
          stats: {
            hp: 147,
            attack: 110,
            defense: 142,
            spclAtk: 72,
            spclDef: 102,
            speed: 114
          },
          friendship: 128
        },
        {
          level: 50,
          species: 101,
          gender: '',
          item: 83,
          moves: [
            104,
            92,
            87,
            243
          ],
          stats: {
            hp: 142,
            attack: 85,
            defense: 107,
            spclAtk: 117,
            spclDef: 117,
            speed: 169
          },
          friendship: 128
        },
        {
          level: 50,
          species: 89,
          gender: '♀',
          item: 79,
          moves: [
            104,
            92,
            188,
            126
          ],
          stats: {
            hp: 187,
            attack: 134,
            defense: 112,
            spclAtk: 102,
            spclDef: 137,
            speed: 79
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Elite Four Bruno',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 200,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 100,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 68,
          gender: '♂',
          item: 140,
          moves: [
            238,
            70,
            69,
            89
          ],
          stats: {
            hp: 174,
            attack: 167,
            defense: 111,
            spclAtk: 96,
            spclDef: 116,
            speed: 85
          },
          friendship: 255
        },
        {
          level: 50,
          species: 76,
          gender: '♀',
          item: 83,
          moves: [
            88,
            222,
            29,
            249
          ],
          stats: {
            hp: 172,
            attack: 140,
            defense: 161,
            spclAtk: 86,
            spclDef: 96,
            speed: 75
          },
          friendship: 128
        },
        {
          level: 50,
          species: 115,
          gender: '♀',
          item: 74,
          moves: [
            146,
            44,
            179,
            249
          ],
          stats: {
            hp: 197,
            attack: 125,
            defense: 111,
            spclAtk: 71,
            spclDef: 111,
            speed: 120
          },
          friendship: 128
        },
        {
          level: 50,
          species: 9,
          gender: '♂',
          item: 78,
          moves: [
            57,
            29,
            8,
            223
          ],
          stats: {
            hp: 171,
            attack: 113,
            defense: 131,
            spclAtk: 116,
            spclDef: 136,
            speed: 108
          },
          friendship: 128
        },
        {
          level: 50,
          species: 214,
          gender: '♀',
          item: 84,
          moves: [
            179,
            68,
            30,
            89
          ],
          stats: {
            hp: 172,
            attack: 155,
            defense: 106,
            spclAtk: 71,
            spclDef: 126,
            speed: 115
          },
          friendship: 128
        },
        {
          level: 50,
          species: 95,
          gender: '♂',
          item: 79,
          moves: [
            88,
            91,
            21,
            99
          ],
          stats: {
            hp: 119,
            attack: 82,
            defense: 191,
            spclAtk: 61,
            spclDef: 76,
            speed: 100
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Elite Four Karen',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 60,
        weightToDamageByPlayer: 200,
        weightToSecondaryEffects: 220,
        desireToInflictSleep: 90,
        desireToInflictPoison: 90,
        desireToInflictBurn: 90,
        desireToInflictFreeze: 90,
        desireToInflictPara: 240,
        desireToInflictFlinch: 90,
        desireToInflictConfusion: 240,
        desireToInflictInfatuation: 240,
        desireToRaiseStats: [
          90,
          90,
          90,
          90,
          90,
          90,
          90
        ],
        desireForLightScreen: 90,
        desireForMist: 90,
        desireForFocusEnergy: 90,
        desireForReflect: 90,
        desireForDisable: 90,
        desireForBatonPass: 90,
        desireToLowerStatTenPercentChance: 90
      },
      team: [
        {
          level: 50,
          species: 197,
          gender: '♀',
          item: 73,
          moves: [
            109,
            213,
            228,
            94
          ],
          stats: {
            hp: 189,
            attack: 92,
            defense: 141,
            spclAtk: 91,
            spclDef: 161,
            speed: 95
          },
          friendship: 255
        },
        {
          level: 50,
          species: 71,
          gender: '♀',
          item: 84,
          moves: [
            78,
            213,
            51,
            75
          ],
          stats: {
            hp: 166,
            attack: 135,
            defense: 96,
            spclAtk: 131,
            spclDef: 91,
            speed: 100
          },
          friendship: 128
        },
        {
          level: 50,
          species: 198,
          gender: '♂',
          item: 83,
          moves: [
            213,
            189,
            19,
            185
          ],
          stats: {
            hp: 146,
            attack: 119,
            defense: 73,
            spclAtk: 116,
            spclDef: 73,
            speed: 121
          },
          friendship: 128
        },
        {
          level: 50,
          species: 126,
          gender: '♂',
          item: 0,
          moves: [
            109,
            213,
            7,
            168
          ],
          stats: {
            hp: 151,
            attack: 125,
            defense: 88,
            spclAtk: 131,
            spclDef: 116,
            speed: 123
          },
          friendship: 128
        },
        {
          level: 50,
          species: 94,
          gender: '♂',
          item: 78,
          moves: [
            109,
            213,
            94,
            122
          ],
          stats: {
            hp: 146,
            attack: 99,
            defense: 91,
            spclAtk: 161,
            spclDef: 106,
            speed: 140
          },
          friendship: 128
        },
        {
          level: 50,
          species: 45,
          gender: '♀',
          item: 80,
          moves: [
            213,
            78,
            202,
            188
          ],
          stats: {
            hp: 161,
            attack: 110,
            defense: 116,
            spclAtk: 131,
            spclDef: 121,
            speed: 80
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Champion Lance',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 190,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 100,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 149,
          gender: '♂',
          item: 119,
          moves: [
            225,
            211,
            87,
            63
          ],
          stats: {
            hp: 178,
            attack: 169,
            defense: 127,
            spclAtk: 132,
            spclDef: 132,
            speed: 111
          },
          friendship: 255
        },
        {
          level: 50,
          species: 248,
          gender: '♀',
          item: 83,
          moves: [
            157,
            242,
            225,
            63
          ],
          stats: {
            hp: 187,
            attack: 165,
            defense: 142,
            spclAtk: 127,
            spclDef: 132,
            speed: 92
          },
          friendship: 128
        },
        {
          level: 50,
          species: 6,
          gender: '♂',
          item: 84,
          moves: [
            53,
            19,
            91,
            63
          ],
          stats: {
            hp: 165,
            attack: 119,
            defense: 110,
            spclAtk: 141,
            spclDef: 117,
            speed: 131
          },
          friendship: 128
        },
        {
          level: 50,
          species: 142,
          gender: '♂',
          item: 74,
          moves: [
            246,
            17,
            89,
            63
          ],
          stats: {
            hp: 167,
            attack: 136,
            defense: 97,
            spclAtk: 92,
            spclDef: 107,
            speed: 161
          },
          friendship: 128
        },
        {
          level: 50,
          species: 208,
          gender: '♀',
          item: 80,
          moves: [
            231,
            89,
            225,
            63
          ],
          stats: {
            hp: 162,
            attack: 116,
            defense: 232,
            spclAtk: 87,
            spclDef: 97,
            speed: 61
          },
          friendship: 128
        },
        {
          level: 50,
          species: 130,
          gender: '♀',
          item: 78,
          moves: [
            57,
            225,
            214,
            63
          ],
          stats: {
            hp: 182,
            attack: 156,
            defense: 111,
            spclAtk: 92,
            spclDef: 132,
            speed: 112
          },
          friendship: 128
        }
      ]
    }
  ],
  'kanto-r1': [
    {
      name: 'Gym Leader Brock',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 90,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 140,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 95,
          gender: '♂',
          item: 73,
          moves: [
            88,
            89,
            70,
            117
          ],
          stats: {
            hp: 119,
            attack: 82,
            defense: 193,
            spclAtk: 63,
            spclDef: 78,
            speed: 102
          },
          friendship: 255
        },
        {
          level: 50,
          species: 76,
          gender: '♂',
          item: 140,
          moves: [
            88,
            222,
            111,
            205
          ],
          stats: {
            hp: 164,
            attack: 145,
            defense: 163,
            spclAtk: 88,
            spclDef: 98,
            speed: 77
          },
          friendship: 128
        },
        {
          level: 50,
          species: 139,
          gender: '♂',
          item: 109,
          moves: [
            246,
            57,
            59,
            44
          ],
          stats: {
            hp: 162,
            attack: 92,
            defense: 158,
            spclAtk: 148,
            spclDef: 103,
            speed: 87
          },
          friendship: 128
        },
        {
          level: 50,
          species: 127,
          gender: '♂',
          item: 119,
          moves: [
            210,
            70,
            69,
            66
          ],
          stats: {
            hp: 157,
            attack: 161,
            defense: 133,
            spclAtk: 88,
            spclDef: 103,
            speed: 117
          },
          friendship: 128
        },
        {
          level: 50,
          species: 205,
          gender: '♀',
          item: 84,
          moves: [
            36,
            202,
            111,
            205
          ],
          stats: {
            hp: 167,
            attack: 124,
            defense: 173,
            spclAtk: 93,
            spclDef: 93,
            speed: 72
          },
          friendship: 255
        },
        {
          level: 50,
          species: 141,
          gender: '♂',
          item: 78,
          moves: [
            246,
            57,
            163,
            214
          ],
          stats: {
            hp: 152,
            attack: 147,
            defense: 138,
            spclAtk: 98,
            spclDef: 103,
            speed: 112
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Misty',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 130,
        weightToDamageByPlayer: 90,
        weightToSecondaryEffects: 170,
        desireToInflictSleep: 90,
        desireToInflictPoison: 90,
        desireToInflictBurn: 90,
        desireToInflictFreeze: 90,
        desireToInflictPara: 90,
        desireToInflictFlinch: 90,
        desireToInflictConfusion: 90,
        desireToInflictInfatuation: 90,
        desireToRaiseStats: [
          90,
          90,
          90,
          90,
          90,
          90,
          90
        ],
        desireForLightScreen: 90,
        desireForMist: 90,
        desireForFocusEnergy: 90,
        desireForReflect: 90,
        desireForDisable: 90,
        desireForBatonPass: 90,
        desireToLowerStatTenPercentChance: 90
      },
      team: [
        {
          level: 50,
          species: 121,
          gender: '',
          item: 82,
          moves: [
            94,
            57,
            87,
            240
          ],
          stats: {
            hp: 148,
            attack: 111,
            defense: 120,
            spclAtk: 135,
            spclDef: 120,
            speed: 149
          },
          friendship: 255
        },
        {
          level: 50,
          species: 176,
          gender: '♂',
          item: 78,
          moves: [
            38,
            227,
            118,
            240
          ],
          stats: {
            hp: 144,
            attack: 75,
            defense: 121,
            spclAtk: 116,
            spclDef: 141,
            speed: 75
          },
          friendship: 255
        },
        {
          level: 50,
          species: 55,
          gender: '♂',
          item: 109,
          moves: [
            56,
            216,
            91,
            240
          ],
          stats: {
            hp: 168,
            attack: 118,
            defense: 113,
            spclAtk: 130,
            spclDef: 115,
            speed: 119
          },
          friendship: 255
        },
        {
          level: 50,
          species: 192,
          gender: '♀',
          item: 140,
          moves: [
            75,
            72,
            188,
            15
          ],
          stats: {
            hp: 163,
            attack: 109,
            defense: 90,
            spclAtk: 140,
            spclDef: 120,
            speed: 64
          },
          friendship: 128
        },
        {
          level: 50,
          species: 61,
          gender: '♀',
          item: 119,
          moves: [
            56,
            89,
            34,
            240
          ],
          stats: {
            hp: 153,
            attack: 99,
            defense: 100,
            spclAtk: 85,
            spclDef: 85,
            speed: 124
          },
          friendship: 128
        },
        {
          level: 50,
          species: 195,
          gender: '♀',
          item: 73,
          moves: [
            57,
            89,
            70,
            240
          ],
          stats: {
            hp: 183,
            attack: 119,
            defense: 120,
            spclAtk: 100,
            spclDef: 100,
            speed: 69
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Lt. Surge',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 100,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 150,
        desireToInflictSleep: 90,
        desireToInflictPoison: 90,
        desireToInflictBurn: 150,
        desireToInflictFreeze: 150,
        desireToInflictPara: 150,
        desireToInflictFlinch: 90,
        desireToInflictConfusion: 90,
        desireToInflictInfatuation: 90,
        desireToRaiseStats: [
          90,
          90,
          90,
          90,
          90,
          90,
          90
        ],
        desireForLightScreen: 90,
        desireForMist: 90,
        desireForFocusEnergy: 90,
        desireForReflect: 90,
        desireForDisable: 90,
        desireForBatonPass: 90,
        desireToLowerStatTenPercentChance: 90
      },
      team: [
        {
          level: 50,
          species: 26,
          gender: '♂',
          item: 109,
          moves: [
            85,
            86,
            69,
            57
          ],
          stats: {
            hp: 144,
            attack: 125,
            defense: 88,
            spclAtk: 123,
            spclDef: 113,
            speed: 132
          },
          friendship: 180
        },
        {
          level: 50,
          species: 171,
          gender: '♀',
          item: 140,
          moves: [
            57,
            209,
            86,
            36
          ],
          stats: {
            hp: 217,
            attack: 90,
            defense: 91,
            spclAtk: 109,
            spclDef: 109,
            speed: 99
          },
          friendship: 128
        },
        {
          level: 50,
          species: 125,
          gender: '♂',
          item: 73,
          moves: [
            85,
            70,
            94,
            8
          ],
          stats: {
            hp: 157,
            attack: 115,
            defense: 90,
            spclAtk: 128,
            spclDef: 118,
            speed: 137
          },
          friendship: 128
        },
        {
          level: 50,
          species: 101,
          gender: '',
          item: 82,
          moves: [
            87,
            205,
            243,
            153
          ],
          stats: {
            hp: 152,
            attack: 82,
            defense: 103,
            spclAtk: 113,
            spclDef: 113,
            speed: 172
          },
          friendship: 128
        },
        {
          level: 50,
          species: 137,
          gender: '',
          item: 78,
          moves: [
            160,
            237,
            60,
            161
          ],
          stats: {
            hp: 161,
            attack: 98,
            defense: 106,
            spclAtk: 118,
            spclDef: 108,
            speed: 72
          },
          friendship: 128
        },
        {
          level: 50,
          species: 82,
          gender: '',
          item: 119,
          moves: [
            87,
            86,
            49,
            214
          ],
          stats: {
            hp: 142,
            attack: 92,
            defense: 128,
            spclAtk: 153,
            spclDef: 103,
            speed: 102
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Erika',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: true,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 65,
        weightToDamageByPlayer: 150,
        weightToSecondaryEffects: 150,
        desireToInflictSleep: 200,
        desireToInflictPoison: 90,
        desireToInflictBurn: 90,
        desireToInflictFreeze: 90,
        desireToInflictPara: 90,
        desireToInflictFlinch: 90,
        desireToInflictConfusion: 90,
        desireToInflictInfatuation: 90,
        desireToRaiseStats: [
          90,
          90,
          90,
          90,
          90,
          90,
          90
        ],
        desireForLightScreen: 90,
        desireForMist: 90,
        desireForFocusEnergy: 90,
        desireForReflect: 90,
        desireForDisable: 90,
        desireForBatonPass: 90,
        desireToLowerStatTenPercentChance: 90
      },
      team: [
        {
          level: 50,
          species: 182,
          gender: '♀',
          item: 119,
          moves: [
            202,
            79,
            216,
            236
          ],
          stats: {
            hp: 167,
            attack: 112,
            defense: 118,
            spclAtk: 123,
            spclDef: 133,
            speed: 82
          },
          friendship: 255
        },
        {
          level: 50,
          species: 114,
          gender: '♀',
          item: 73,
          moves: [
            202,
            79,
            76,
            21
          ],
          stats: {
            hp: 157,
            attack: 87,
            defense: 148,
            spclAtk: 133,
            spclDef: 73,
            speed: 92
          },
          friendship: 128
        },
        {
          level: 50,
          species: 3,
          gender: '♀',
          item: 78,
          moves: [
            75,
            79,
            73,
            15
          ],
          stats: {
            hp: 172,
            attack: 110,
            defense: 116,
            spclAtk: 133,
            spclDef: 133,
            speed: 112
          },
          friendship: 128
        },
        {
          level: 50,
          species: 113,
          gender: '♀',
          item: 30,
          moves: [
            94,
            47,
            59,
            135
          ],
          stats: {
            hp: 342,
            attack: 37,
            defense: 38,
            spclAtk: 68,
            spclDef: 138,
            speed: 82
          },
          friendship: 128
        },
        {
          level: 50,
          species: 189,
          gender: '♀',
          item: 0,
          moves: [
            76,
            79,
            73,
            235
          ],
          stats: {
            hp: 167,
            attack: 87,
            defense: 103,
            spclAtk: 88,
            spclDef: 118,
            speed: 142
          },
          friendship: 127
        },
        {
          level: 50,
          species: 134,
          gender: '♀',
          item: 140,
          moves: [
            57,
            44,
            214,
            156
          ],
          stats: {
            hp: 222,
            attack: 93,
            defense: 93,
            spclAtk: 143,
            spclDef: 128,
            speed: 97
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Janine',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 40,
        weightToDamageByPlayer: 90,
        weightToSecondaryEffects: 200,
        desireToInflictSleep: 90,
        desireToInflictPoison: 180,
        desireToInflictBurn: 90,
        desireToInflictFreeze: 90,
        desireToInflictPara: 90,
        desireToInflictFlinch: 120,
        desireToInflictConfusion: 250,
        desireToInflictInfatuation: 220,
        desireToRaiseStats: [
          90,
          90,
          90,
          90,
          90,
          90,
          90
        ],
        desireForLightScreen: 90,
        desireForMist: 90,
        desireForFocusEnergy: 90,
        desireForReflect: 90,
        desireForDisable: 90,
        desireForBatonPass: 90,
        desireToLowerStatTenPercentChance: 90
      },
      team: [
        {
          level: 50,
          species: 169,
          gender: '♀',
          item: 82,
          moves: [
            109,
            212,
            92,
            44
          ],
          stats: {
            hp: 173,
            attack: 124,
            defense: 115,
            spclAtk: 105,
            spclDef: 115,
            speed: 164
          },
          friendship: 180
        },
        {
          level: 50,
          species: 168,
          gender: '♀',
          item: 73,
          moves: [
            207,
            169,
            92,
            91
          ],
          stats: {
            hp: 158,
            attack: 124,
            defense: 105,
            spclAtk: 95,
            spclDef: 95,
            speed: 74
          },
          friendship: 128
        },
        {
          level: 50,
          species: 110,
          gender: '♂',
          item: 119,
          moves: [
            207,
            213,
            92,
            205
          ],
          stats: {
            hp: 153,
            attack: 126,
            defense: 155,
            spclAtk: 120,
            spclDef: 105,
            speed: 94
          },
          friendship: 128
        },
        {
          level: 50,
          species: 234,
          gender: '♂',
          item: 140,
          moves: [
            109,
            213,
            92,
            29
          ],
          stats: {
            hp: 161,
            attack: 131,
            defense: 97,
            spclAtk: 120,
            spclDef: 100,
            speed: 119
          },
          friendship: 128
        },
        {
          level: 50,
          species: 207,
          gender: '♀',
          item: 78,
          moves: [
            207,
            213,
            92,
            163
          ],
          stats: {
            hp: 153,
            attack: 109,
            defense: 140,
            spclAtk: 70,
            spclDef: 100,
            speed: 119
          },
          friendship: 128
        },
        {
          level: 50,
          species: 73,
          gender: '♀',
          item: 109,
          moves: [
            48,
            213,
            92,
            57
          ],
          stats: {
            hp: 168,
            attack: 104,
            defense: 100,
            spclAtk: 115,
            spclDef: 155,
            speed: 134
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Sabrina',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: true,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 45,
        weightToDamageByPlayer: 90,
        weightToSecondaryEffects: 250,
        desireToInflictSleep: 90,
        desireToInflictPoison: 90,
        desireToInflictBurn: 90,
        desireToInflictFreeze: 90,
        desireToInflictPara: 90,
        desireToInflictFlinch: 90,
        desireToInflictConfusion: 90,
        desireToInflictInfatuation: 90,
        desireToRaiseStats: [
          90,
          90,
          90,
          90,
          90,
          90,
          90
        ],
        desireForLightScreen: 90,
        desireForMist: 90,
        desireForFocusEnergy: 90,
        desireForReflect: 90,
        desireForDisable: 90,
        desireForBatonPass: 90,
        desireToLowerStatTenPercentChance: 90
      },
      team: [
        {
          level: 50,
          species: 65,
          gender: '♂',
          item: 82,
          moves: [
            94,
            8,
            247,
            248
          ],
          stats: {
            hp: 147,
            attack: 82,
            defense: 78,
            spclAtk: 168,
            spclDef: 118,
            speed: 152
          },
          friendship: 180
        },
        {
          level: 50,
          species: 122,
          gender: '♀',
          item: 119,
          moves: [
            94,
            9,
            8,
            7
          ],
          stats: {
            hp: 132,
            attack: 77,
            defense: 98,
            spclAtk: 133,
            spclDef: 153,
            speed: 122
          },
          friendship: 128
        },
        {
          level: 50,
          species: 97,
          gender: '♂',
          item: 140,
          moves: [
            94,
            29,
            171,
            248
          ],
          stats: {
            hp: 169,
            attack: 108,
            defense: 103,
            spclAtk: 106,
            spclDef: 148,
            speed: 99
          },
          friendship: 128
        },
        {
          level: 50,
          species: 40,
          gender: '♀',
          item: 73,
          moves: [
            94,
            38,
            76,
            247
          ],
          stats: {
            hp: 232,
            attack: 102,
            defense: 78,
            spclAtk: 108,
            spclDef: 83,
            speed: 77
          },
          friendship: 128
        },
        {
          level: 50,
          species: 162,
          gender: '♀',
          item: 109,
          moves: [
            98,
            223,
            91,
            231
          ],
          stats: {
            hp: 177,
            attack: 108,
            defense: 97,
            spclAtk: 78,
            spclDef: 88,
            speed: 122
          },
          friendship: 128
        },
        {
          level: 50,
          species: 80,
          gender: '♀',
          item: 78,
          moves: [
            57,
            94,
            89,
            126
          ],
          stats: {
            hp: 187,
            attack: 107,
            defense: 143,
            spclAtk: 133,
            spclDef: 113,
            speed: 62
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Blaine',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 150,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 140,
        desireToInflictSleep: 90,
        desireToInflictPoison: 90,
        desireToInflictBurn: 110,
        desireToInflictFreeze: 90,
        desireToInflictPara: 90,
        desireToInflictFlinch: 120,
        desireToInflictConfusion: 90,
        desireToInflictInfatuation: 90,
        desireToRaiseStats: [
          90,
          90,
          90,
          90,
          90,
          90,
          90
        ],
        desireForLightScreen: 90,
        desireForMist: 90,
        desireForFocusEnergy: 90,
        desireForReflect: 90,
        desireForDisable: 90,
        desireForBatonPass: 90,
        desireToLowerStatTenPercentChance: 90
      },
      team: [
        {
          level: 50,
          species: 78,
          gender: '♂',
          item: 82,
          moves: [
            126,
            23,
            97,
            241
          ],
          stats: {
            hp: 153,
            attack: 138,
            defense: 105,
            spclAtk: 115,
            spclDef: 115,
            speed: 139
          },
          friendship: 255
        },
        {
          level: 50,
          species: 38,
          gender: '♀',
          item: 140,
          moves: [
            126,
            98,
            91,
            241
          ],
          stats: {
            hp: 161,
            attack: 110,
            defense: 110,
            spclAtk: 116,
            spclDef: 135,
            speed: 134
          },
          friendship: 128
        },
        {
          level: 50,
          species: 47,
          gender: '♂',
          item: 73,
          moves: [
            202,
            163,
            241,
            76
          ],
          stats: {
            hp: 156,
            attack: 132,
            defense: 115,
            spclAtk: 95,
            spclDef: 115,
            speed: 64
          },
          friendship: 128
        },
        {
          level: 50,
          species: 136,
          gender: '♂',
          item: 109,
          moves: [
            126,
            36,
            247,
            241
          ],
          stats: {
            hp: 153,
            attack: 164,
            defense: 95,
            spclAtk: 130,
            spclDef: 145,
            speed: 99
          },
          friendship: 128
        },
        {
          level: 50,
          species: 224,
          gender: '♀',
          item: 119,
          moves: [
            190,
            60,
            61,
            58
          ],
          stats: {
            hp: 163,
            attack: 139,
            defense: 110,
            spclAtk: 140,
            spclDef: 110,
            speed: 79
          },
          friendship: 128
        },
        {
          level: 50,
          species: 219,
          gender: '♀',
          item: 78,
          moves: [
            126,
            157,
            89,
            241
          ],
          stats: {
            hp: 138,
            attack: 84,
            defense: 155,
            spclAtk: 115,
            spclDef: 115,
            speed: 64
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Blue',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 175,
        weightToDamageByPlayer: 150,
        weightToSecondaryEffects: 150,
        desireToInflictSleep: 90,
        desireToInflictPoison: 90,
        desireToInflictBurn: 90,
        desireToInflictFreeze: 90,
        desireToInflictPara: 90,
        desireToInflictFlinch: 90,
        desireToInflictConfusion: 90,
        desireToInflictInfatuation: 90,
        desireToRaiseStats: [
          90,
          90,
          90,
          90,
          90,
          90,
          90
        ],
        desireForLightScreen: 90,
        desireForMist: 90,
        desireForFocusEnergy: 90,
        desireForReflect: 145,
        desireForDisable: 90,
        desireForBatonPass: 90,
        desireToLowerStatTenPercentChance: 90
      },
      team: [
        {
          level: 50,
          species: 18,
          gender: '♀',
          item: 78,
          moves: [
            17,
            119,
            18,
            211
          ],
          stats: {
            hp: 175,
            attack: 112,
            defense: 108,
            spclAtk: 103,
            spclDef: 103,
            speed: 123
          },
          friendship: 180
        },
        {
          level: 50,
          species: 65,
          gender: '♂',
          item: 109,
          moves: [
            94,
            7,
            115,
            105
          ],
          stats: {
            hp: 147,
            attack: 82,
            defense: 78,
            spclAtk: 168,
            spclDef: 118,
            speed: 152
          },
          friendship: 128
        },
        {
          level: 50,
          species: 112,
          gender: '♂',
          item: 119,
          moves: [
            89,
            205,
            231,
            223
          ],
          stats: {
            hp: 189,
            attack: 165,
            defense: 153,
            spclAtk: 78,
            spclDef: 78,
            speed: 72
          },
          friendship: 128
        },
        {
          level: 50,
          species: 130,
          gender: '♀',
          item: 140,
          moves: [
            57,
            225,
            44,
            175
          ],
          stats: {
            hp: 187,
            attack: 157,
            defense: 112,
            spclAtk: 93,
            spclDef: 133,
            speed: 113
          },
          friendship: 128
        },
        {
          level: 50,
          species: 103,
          gender: '♀',
          item: 73,
          moves: [
            202,
            94,
            188,
            171
          ],
          stats: {
            hp: 187,
            attack: 127,
            defense: 118,
            spclAtk: 158,
            spclDef: 98,
            speed: 87
          },
          friendship: 128
        },
        {
          level: 50,
          species: 59,
          gender: '♂',
          item: 82,
          moves: [
            53,
            44,
            245,
            91
          ],
          stats: {
            hp: 174,
            attack: 145,
            defense: 113,
            spclAtk: 133,
            spclDef: 113,
            speed: 127
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Pokémon Trainer Red',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 160,
        weightToDamageByPlayer: 150,
        weightToSecondaryEffects: 140,
        desireToInflictSleep: 90,
        desireToInflictPoison: 90,
        desireToInflictBurn: 90,
        desireToInflictFreeze: 90,
        desireToInflictPara: 120,
        desireToInflictFlinch: 90,
        desireToInflictConfusion: 90,
        desireToInflictInfatuation: 90,
        desireToRaiseStats: [
          90,
          90,
          90,
          90,
          90,
          90,
          90
        ],
        desireForLightScreen: 90,
        desireForMist: 90,
        desireForFocusEnergy: 90,
        desireForReflect: 90,
        desireForDisable: 90,
        desireForBatonPass: 90,
        desireToLowerStatTenPercentChance: 90
      },
      team: [
        {
          level: 50,
          species: 154,
          gender: '♀',
          item: 84,
          moves: [
            75,
            34,
            202,
            235
          ],
          stats: {
            hp: 172,
            attack: 110,
            defense: 133,
            spclAtk: 116,
            spclDef: 133,
            speed: 112
          },
          friendship: 180
        },
        {
          level: 50,
          species: 160,
          gender: '♂',
          item: 109,
          moves: [
            57,
            163,
            59,
            44
          ],
          stats: {
            hp: 169,
            attack: 140,
            defense: 133,
            spclAtk: 112,
            spclDef: 116,
            speed: 110
          },
          friendship: 128
        },
        {
          level: 50,
          species: 157,
          gender: '♂',
          item: 119,
          moves: [
            53,
            98,
            9,
            91
          ],
          stats: {
            hp: 162,
            attack: 119,
            defense: 111,
            spclAtk: 142,
            spclDef: 118,
            speed: 132
          },
          friendship: 128
        },
        {
          level: 50,
          species: 135,
          gender: '♀',
          item: 82,
          moves: [
            87,
            44,
            86,
            98
          ],
          stats: {
            hp: 157,
            attack: 93,
            defense: 93,
            spclAtk: 143,
            spclDef: 128,
            speed: 162
          },
          friendship: 128
        },
        {
          level: 50,
          species: 212,
          gender: '♂',
          item: 73,
          moves: [
            232,
            163,
            98,
            214
          ],
          stats: {
            hp: 154,
            attack: 165,
            defense: 133,
            spclAtk: 88,
            spclDef: 113,
            speed: 97
          },
          friendship: 128
        },
        {
          level: 50,
          species: 128,
          gender: '♂',
          item: 140,
          moves: [
            29,
            89,
            231,
            63
          ],
          stats: {
            hp: 159,
            attack: 135,
            defense: 128,
            spclAtk: 73,
            spclDef: 103,
            speed: 142
          },
          friendship: 128
        }
      ]
    }
  ],
  'poke-poke-r2': [
    {
      name: 'Bug Catcher Nelson',
      ai: {
        randomFitness: true,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 193,
          gender: '♂',
          item: 83,
          moves: [
            29,
            202,
            49,
            203
          ],
          stats: {
            hp: 147,
            attack: 93,
            defense: 72,
            spclAtk: 102,
            spclDef: 72,
            speed: 122
          },
          friendship: 180
        },
        {
          level: 50,
          species: 123,
          gender: '♀',
          item: 84,
          moves: [
            211,
            17,
            14,
            163
          ],
          stats: {
            hp: 155,
            attack: 137,
            defense: 106,
            spclAtk: 81,
            spclDef: 106,
            speed: 132
          },
          friendship: 128
        },
        {
          level: 50,
          species: 165,
          gender: '♂',
          item: 78,
          moves: [
            9,
            8,
            115,
            97
          ],
          stats: {
            hp: 122,
            attack: 48,
            defense: 57,
            spclAtk: 67,
            spclDef: 107,
            speed: 82
          },
          friendship: 128
        },
        {
          level: 50,
          species: 14,
          gender: '♂',
          item: 79,
          moves: [
            106,
            40,
            0,
            0
          ],
          stats: {
            hp: 129,
            attack: 54,
            defense: 78,
            spclAtk: 54,
            spclDef: 54,
            speed: 63
          },
          friendship: 128
        },
        {
          level: 50,
          species: 168,
          gender: '♂',
          item: 139,
          moves: [
            101,
            94,
            132,
            184
          ],
          stats: {
            hp: 152,
            attack: 118,
            defense: 97,
            spclAtk: 87,
            spclDef: 87,
            speed: 67
          },
          friendship: 128
        },
        {
          level: 50,
          species: 70,
          gender: '♀',
          item: 117,
          moves: [
            75,
            78,
            21,
            230
          ],
          stats: {
            hp: 150,
            attack: 117,
            defense: 76,
            spclAtk: 111,
            spclDef: 71,
            speed: 82
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Swimmer♂ Bruce',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 178,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          178,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 51,
          species: 119,
          gender: '♂',
          item: 140,
          moves: [
            57,
            97,
            240,
            129
          ],
          stats: {
            hp: 166,
            attack: 123,
            defense: 94,
            spclAtk: 94,
            spclDef: 110,
            speed: 97
          },
          friendship: 128
        },
        {
          level: 50,
          species: 184,
          gender: '♀',
          item: 174,
          moves: [
            57,
            240,
            38,
            231
          ],
          stats: {
            hp: 181,
            attack: 77,
            defense: 108,
            spclAtk: 78,
            spclDef: 108,
            speed: 77
          },
          friendship: 128
        },
        {
          level: 51,
          species: 171,
          gender: '♂',
          item: 95,
          moves: [
            109,
            209,
            240,
            57
          ],
          stats: {
            hp: 211,
            attack: 88,
            defense: 87,
            spclAtk: 105,
            spclDef: 105,
            speed: 96
          },
          friendship: 128
        },
        {
          level: 50,
          species: 211,
          gender: '♀',
          item: 82,
          moves: [
            57,
            240,
            188,
            42
          ],
          stats: {
            hp: 145,
            attack: 122,
            defense: 103,
            spclAtk: 82,
            spclDef: 82,
            speed: 112
          },
          friendship: 128
        },
        {
          level: 51,
          species: 87,
          gender: '♂',
          item: 73,
          moves: [
            57,
            240,
            58,
            29
          ],
          stats: {
            hp: 176,
            attack: 100,
            defense: 110,
            spclAtk: 99,
            spclDef: 125,
            speed: 99
          },
          friendship: 128
        },
        {
          level: 50,
          species: 117,
          gender: '♀',
          item: 119,
          moves: [
            57,
            240,
            58,
            38
          ],
          stats: {
            hp: 136,
            attack: 92,
            defense: 123,
            spclAtk: 123,
            spclDef: 73,
            speed: 112
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Hiker Chester',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 51,
          species: 28,
          gender: '♂',
          item: 125,
          moves: [
            205,
            231,
            210,
            89
          ],
          stats: {
            hp: 162,
            attack: 133,
            defense: 142,
            spclAtk: 75,
            spclDef: 86,
            speed: 96
          },
          friendship: 0
        },
        {
          level: 51,
          species: 192,
          gender: '♂',
          item: 82,
          moves: [
            241,
            76,
            235,
            218
          ],
          stats: {
            hp: 162,
            attack: 107,
            defense: 86,
            spclAtk: 137,
            spclDef: 116,
            speed: 60
          },
          friendship: 0
        },
        {
          level: 51,
          species: 141,
          gender: '♂',
          item: 78,
          moves: [
            205,
            91,
            57,
            210
          ],
          stats: {
            hp: 145,
            attack: 146,
            defense: 137,
            spclAtk: 96,
            spclDef: 101,
            speed: 110
          },
          friendship: 0
        },
        {
          level: 51,
          species: 12,
          gender: '♂',
          item: 83,
          moves: [
            219,
            60,
            78,
            129
          ],
          stats: {
            hp: 147,
            attack: 76,
            defense: 80,
            spclAtk: 111,
            spclDef: 111,
            speed: 101
          },
          friendship: 0
        },
        {
          level: 51,
          species: 75,
          gender: '♂',
          item: 119,
          moves: [
            205,
            89,
            120,
            7
          ],
          stats: {
            hp: 142,
            attack: 127,
            defense: 147,
            spclAtk: 75,
            spclDef: 75,
            speed: 65
          },
          friendship: 0
        },
        {
          level: 51,
          species: 107,
          gender: '♂',
          item: 73,
          moves: [
            183,
            223,
            7,
            9
          ],
          stats: {
            hp: 134,
            attack: 136,
            defense: 110,
            spclAtk: 65,
            spclDef: 142,
            speed: 106
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Super Nerd Clifford',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 53,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 153,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 203,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 153
      },
      team: [
        {
          level: 51,
          species: 137,
          gender: '',
          item: 139,
          moves: [
            207,
            244,
            161,
            92
          ],
          stats: {
            hp: 155,
            attack: 91,
            defense: 100,
            spclAtk: 115,
            spclDef: 105,
            speed: 70
          },
          friendship: 0
        },
        {
          level: 52,
          species: 204,
          gender: '♀',
          item: 119,
          moves: [
            207,
            182,
            104,
            202
          ],
          stats: {
            hp: 142,
            attack: 98,
            defense: 123,
            spclAtk: 65,
            spclDef: 65,
            speed: 46
          },
          friendship: 0
        },
        {
          level: 51,
          species: 101,
          gender: '',
          item: 82,
          moves: [
            207,
            86,
            103,
            153
          ],
          stats: {
            hp: 150,
            attack: 80,
            defense: 100,
            spclAtk: 110,
            spclDef: 110,
            speed: 172
          },
          friendship: 0
        },
        {
          level: 52,
          species: 247,
          gender: '♂',
          item: 174,
          moves: [
            207,
            103,
            201,
            29
          ],
          stats: {
            hp: 160,
            attack: 118,
            defense: 103,
            spclAtk: 98,
            spclDef: 103,
            speed: 83
          },
          friendship: 0
        },
        {
          level: 51,
          species: 241,
          gender: '♀',
          item: 78,
          moves: [
            207,
            244,
            23,
            57
          ],
          stats: {
            hp: 180,
            attack: 110,
            defense: 137,
            spclAtk: 70,
            spclDef: 101,
            speed: 130
          },
          friendship: 0
        },
        {
          level: 52,
          species: 200,
          gender: '♂',
          item: 73,
          moves: [
            109,
            103,
            87,
            220
          ],
          stats: {
            hp: 149,
            attack: 93,
            defense: 92,
            spclAtk: 118,
            spclDef: 118,
            speed: 118
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Beauty Alissa',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 28,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 198,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 178,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 51,
          species: 185,
          gender: '♂',
          item: 109,
          moves: [
            213,
            7,
            8,
            9
          ],
          stats: {
            hp: 158,
            attack: 134,
            defense: 148,
            spclAtk: 61,
            spclDef: 97,
            speed: 61
          },
          friendship: 0
        },
        {
          level: 50,
          species: 40,
          gender: '♀',
          item: 83,
          moves: [
            204,
            87,
            94,
            213
          ],
          stats: {
            hp: 223,
            attack: 99,
            defense: 75,
            spclAtk: 105,
            spclDef: 80,
            speed: 74
          },
          friendship: 0
        },
        {
          level: 54,
          species: 225,
          gender: '♀',
          item: 73,
          moves: [
            62,
            217,
            19,
            213
          ],
          stats: {
            hp: 137,
            attack: 90,
            defense: 81,
            spclAtk: 102,
            spclDef: 81,
            speed: 112
          },
          friendship: 0
        },
        {
          level: 51,
          species: 176,
          gender: '♂',
          item: 119,
          moves: [
            213,
            247,
            126,
            211
          ],
          stats: {
            hp: 141,
            attack: 70,
            defense: 117,
            spclAtk: 112,
            spclDef: 138,
            speed: 70
          },
          friendship: 0
        },
        {
          level: 50,
          species: 17,
          gender: '♀',
          item: 174,
          moves: [
            92,
            213,
            17,
            98
          ],
          stats: {
            hp: 146,
            attack: 89,
            defense: 85,
            spclAtk: 80,
            spclDef: 80,
            speed: 100
          },
          friendship: 0
        },
        {
          level: 54,
          species: 105,
          gender: '♂',
          item: 76,
          moves: [
            99,
            130,
            198,
            213
          ],
          stats: {
            hp: 156,
            attack: 120,
            defense: 151,
            spclAtk: 86,
            spclDef: 118,
            speed: 81
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Burglar Jensen',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: true,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 53,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 207,
          gender: '♀',
          item: 0,
          moves: [
            168,
            185,
            231,
            98
          ],
          stats: {
            hp: 149,
            attack: 105,
            defense: 136,
            spclAtk: 66,
            spclDef: 96,
            speed: 115
          },
          friendship: 128
        },
        {
          level: 50,
          species: 206,
          gender: '♂',
          item: 0,
          moves: [
            168,
            137,
            231,
            29
          ],
          stats: {
            hp: 186,
            attack: 102,
            defense: 101,
            spclAtk: 96,
            spclDef: 96,
            speed: 76
          },
          friendship: 128
        },
        {
          level: 50,
          species: 156,
          gender: '♂',
          item: 73,
          moves: [
            172,
            189,
            231,
            29
          ],
          stats: {
            hp: 145,
            attack: 97,
            defense: 90,
            spclAtk: 112,
            spclDef: 97,
            speed: 112
          },
          friendship: 128
        },
        {
          level: 55,
          species: 38,
          gender: '♀',
          item: 83,
          moves: [
            109,
            219,
            231,
            91
          ],
          stats: {
            hp: 172,
            attack: 116,
            defense: 116,
            spclAtk: 123,
            spclDef: 144,
            speed: 143
          },
          friendship: 128
        },
        {
          level: 50,
          species: 78,
          gender: '♀',
          item: 3,
          moves: [
            129,
            23,
            172,
            231
          ],
          stats: {
            hp: 149,
            attack: 130,
            defense: 101,
            spclAtk: 111,
            spclDef: 111,
            speed: 135
          },
          friendship: 128
        },
        {
          level: 55,
          species: 208,
          gender: '♂',
          item: 119,
          moves: [
            242,
            88,
            231,
            189
          ],
          stats: {
            hp: 176,
            attack: 128,
            defense: 254,
            spclAtk: 94,
            spclDef: 105,
            speed: 67
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Boarder Claude',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 53,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 203,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 215,
          gender: '♂',
          item: 146,
          moves: [
            196,
            185,
            115,
            247
          ],
          stats: {
            hp: 141,
            attack: 127,
            defense: 86,
            spclAtk: 66,
            spclDef: 106,
            speed: 146
          },
          friendship: 0
        },
        {
          level: 52,
          species: 115,
          gender: '♀',
          item: 174,
          moves: [
            5,
            25,
            34,
            9
          ],
          stats: {
            hp: 197,
            attack: 130,
            defense: 115,
            spclAtk: 73,
            spclDef: 114,
            speed: 126
          },
          friendship: 0
        },
        {
          level: 53,
          species: 113,
          gender: '♀',
          item: 119,
          moves: [
            196,
            69,
            231,
            70
          ],
          stats: {
            hp: 355,
            attack: 37,
            defense: 38,
            spclAtk: 69,
            spclDef: 143,
            speed: 86
          },
          friendship: 0
        },
        {
          level: 50,
          species: 148,
          gender: '♂',
          item: 78,
          moves: [
            127,
            239,
            225,
            196
          ],
          stats: {
            hp: 147,
            attack: 116,
            defense: 96,
            spclAtk: 101,
            spclDef: 101,
            speed: 101
          },
          friendship: 0
        },
        {
          level: 52,
          species: 36,
          gender: '♀',
          item: 84,
          moves: [
            204,
            5,
            25,
            59
          ],
          stats: {
            hp: 186,
            attack: 104,
            defense: 108,
            spclAtk: 120,
            spclDef: 126,
            speed: 93
          },
          friendship: 0
        },
        {
          level: 53,
          species: 122,
          gender: '♂',
          item: 139,
          moves: [
            227,
            115,
            8,
            60
          ],
          stats: {
            hp: 133,
            attack: 81,
            defense: 101,
            spclAtk: 139,
            spclDef: 160,
            speed: 128
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Psychic Mason',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 178,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 178,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 178,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 153,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 52,
          species: 80,
          gender: '♀',
          item: 104,
          moves: [
            94,
            161,
            86,
            57
          ],
          stats: {
            hp: 190,
            attack: 111,
            defense: 149,
            spclAtk: 138,
            spclDef: 117,
            speed: 65
          },
          friendship: 0
        },
        {
          level: 51,
          species: 234,
          gender: '♂',
          item: 83,
          moves: [
            95,
            94,
            23,
            109
          ],
          stats: {
            hp: 164,
            attack: 131,
            defense: 97,
            spclAtk: 120,
            spclDef: 100,
            speed: 120
          },
          friendship: 0
        },
        {
          level: 52,
          species: 57,
          gender: '♀',
          item: 78,
          moves: [
            67,
            231,
            29,
            238
          ],
          stats: {
            hp: 157,
            attack: 142,
            defense: 97,
            spclAtk: 97,
            spclDef: 107,
            speed: 132
          },
          friendship: 0
        },
        {
          level: 51,
          species: 195,
          gender: '♀',
          item: 119,
          moves: [
            57,
            188,
            91,
            231
          ],
          stats: {
            hp: 185,
            attack: 119,
            defense: 120,
            spclAtk: 99,
            spclDef: 99,
            speed: 69
          },
          friendship: 0
        },
        {
          level: 52,
          species: 154,
          gender: '♂',
          item: 117,
          moves: [
            219,
            115,
            75,
            246
          ],
          stats: {
            hp: 172,
            attack: 118,
            defense: 138,
            spclAtk: 120,
            spclDef: 138,
            speed: 116
          },
          friendship: 0
        },
        {
          level: 52,
          species: 235,
          gender: '♀',
          item: 73,
          moves: [
            147,
            162,
            221,
            177
          ],
          stats: {
            hp: 146,
            attack: 54,
            defense: 71,
            spclAtk: 55,
            spclDef: 81,
            speed: 111
          },
          friendship: 0
        }
      ]
    }
  ],
  'poke-great-r2': [
    {
      name: 'Pokéfan Carmen',
      ai: {
        randomFitness: true,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 51,
          species: 192,
          gender: '♀',
          item: 119,
          moves: [
            216,
            188,
            235,
            75
          ],
          stats: {
            hp: 164,
            attack: 105,
            defense: 86,
            spclAtk: 137,
            spclDef: 116,
            speed: 61
          },
          friendship: 128
        },
        {
          level: 51,
          species: 114,
          gender: '♂',
          item: 117,
          moves: [
            79,
            29,
            74,
            72
          ],
          stats: {
            hp: 154,
            attack: 87,
            defense: 147,
            spclAtk: 131,
            spclDef: 70,
            speed: 92
          },
          friendship: 128
        },
        {
          level: 51,
          species: 213,
          gender: '♀',
          item: 139,
          moves: [
            227,
            117,
            218,
            91
          ],
          stats: {
            hp: 108,
            attack: 39,
            defense: 264,
            spclAtk: 40,
            spclDef: 264,
            speed: 36
          },
          friendship: 128
        },
        {
          level: 52,
          species: 211,
          gender: '♂',
          item: 83,
          moves: [
            92,
            107,
            188,
            56
          ],
          stats: {
            hp: 157,
            attack: 130,
            defense: 108,
            spclAtk: 87,
            spclDef: 87,
            speed: 119
          },
          friendship: 128
        },
        {
          level: 52,
          species: 164,
          gender: '♂',
          item: 174,
          moves: [
            115,
            36,
            148,
            19
          ],
          stats: {
            hp: 192,
            attack: 83,
            defense: 82,
            spclAtk: 110,
            spclDef: 131,
            speed: 103
          },
          friendship: 128
        },
        {
          level: 52,
          species: 224,
          gender: '♀',
          item: 173,
          moves: [
            190,
            199,
            189,
            129
          ],
          stats: {
            hp: 167,
            attack: 138,
            defense: 108,
            spclAtk: 139,
            spclDef: 108,
            speed: 78
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Youngster Wyatt',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 53,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 51,
          species: 210,
          gender: '♀',
          item: 102,
          moves: [
            44,
            122,
            29,
            184
          ],
          stats: {
            hp: 180,
            attack: 154,
            defense: 107,
            spclAtk: 92,
            spclDef: 92,
            speed: 77
          },
          friendship: 128
        },
        {
          level: 50,
          species: 168,
          gender: '♂',
          item: 98,
          moves: [
            188,
            76,
            101,
            184
          ],
          stats: {
            hp: 157,
            attack: 121,
            defense: 100,
            spclAtk: 90,
            spclDef: 90,
            speed: 71
          },
          friendship: 128
        },
        {
          level: 54,
          species: 99,
          gender: '♀',
          item: 119,
          moves: [
            152,
            91,
            189,
            70
          ],
          stats: {
            hp: 153,
            attack: 171,
            defense: 156,
            spclAtk: 86,
            spclDef: 86,
            speed: 114
          },
          friendship: 128
        },
        {
          level: 51,
          species: 132,
          gender: '',
          item: 73,
          moves: [
            144,
            0,
            0,
            0
          ],
          stats: {
            hp: 138,
            attack: 80,
            defense: 79,
            spclAtk: 79,
            spclDef: 79,
            speed: 80
          },
          friendship: 128
        },
        {
          level: 50,
          species: 22,
          gender: '♂',
          item: 83,
          moves: [
            184,
            211,
            119,
            203
          ],
          stats: {
            hp: 152,
            attack: 121,
            defense: 95,
            spclAtk: 91,
            spclDef: 91,
            speed: 131
          },
          friendship: 128
        },
        {
          level: 54,
          species: 111,
          gender: '♂',
          item: 3,
          moves: [
            29,
            87,
            184,
            179
          ],
          stats: {
            hp: 180,
            attack: 125,
            defense: 135,
            spclAtk: 64,
            spclDef: 64,
            speed: 60
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Firebreather Cliff',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: true,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 178,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 55,
          species: 126,
          gender: '♂',
          item: 174,
          moves: [
            241,
            53,
            2,
            108
          ],
          stats: {
            hp: 166,
            attack: 136,
            defense: 95,
            spclAtk: 143,
            spclDef: 126,
            speed: 136
          },
          friendship: 0
        },
        {
          level: 50,
          species: 219,
          gender: '♂',
          item: 73,
          moves: [
            241,
            53,
            151,
            89
          ],
          stats: {
            hp: 137,
            attack: 81,
            defense: 150,
            spclAtk: 110,
            spclDef: 110,
            speed: 61
          },
          friendship: 0
        },
        {
          level: 50,
          species: 108,
          gender: '♂',
          item: 146,
          moves: [
            241,
            126,
            247,
            122
          ],
          stats: {
            hp: 177,
            attack: 86,
            defense: 105,
            spclAtk: 90,
            spclDef: 105,
            speed: 61
          },
          friendship: 0
        },
        {
          level: 55,
          species: 38,
          gender: '♀',
          item: 83,
          moves: [
            241,
            126,
            109,
            91
          ],
          stats: {
            hp: 175,
            attack: 117,
            defense: 115,
            spclAtk: 122,
            spclDef: 143,
            speed: 144
          },
          friendship: 0
        },
        {
          level: 50,
          species: 237,
          gender: '♂',
          item: 152,
          moves: [
            241,
            237,
            27,
            183
          ],
          stats: {
            hp: 127,
            attack: 127,
            defense: 125,
            spclAtk: 61,
            spclDef: 136,
            speed: 98
          },
          friendship: 0
        },
        {
          level: 50,
          species: 182,
          gender: '♀',
          item: 84,
          moves: [
            241,
            76,
            78,
            38
          ],
          stats: {
            hp: 162,
            attack: 109,
            defense: 115,
            spclAtk: 120,
            spclDef: 130,
            speed: 81
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Biker Dillon',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 178,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 178
      },
      team: [
        {
          level: 52,
          species: 110,
          gender: '♀',
          item: 174,
          moves: [
            92,
            182,
            120,
            126
          ],
          stats: {
            hp: 159,
            attack: 125,
            defense: 157,
            spclAtk: 120,
            spclDef: 105,
            speed: 96
          },
          friendship: 0
        },
        {
          level: 51,
          species: 227,
          gender: '♂',
          item: 73,
          moves: [
            92,
            182,
            228,
            237
          ],
          stats: {
            hp: 156,
            attack: 114,
            defense: 174,
            spclAtk: 72,
            spclDef: 103,
            speed: 104
          },
          friendship: 0
        },
        {
          level: 52,
          species: 34,
          gender: '♂',
          item: 146,
          moves: [
            92,
            247,
            182,
            251
          ],
          stats: {
            hp: 175,
            attack: 129,
            defense: 112,
            spclAtk: 120,
            spclDef: 110,
            speed: 122
          },
          friendship: 0
        },
        {
          level: 51,
          species: 181,
          gender: '♀',
          item: 78,
          moves: [
            92,
            85,
            182,
            70
          ],
          stats: {
            hp: 181,
            attack: 107,
            defense: 108,
            spclAtk: 149,
            spclDef: 123,
            speed: 89
          },
          friendship: 0
        },
        {
          level: 52,
          species: 91,
          gender: '♂',
          item: 3,
          moves: [
            48,
            128,
            92,
            182
          ],
          stats: {
            hp: 143,
            attack: 132,
            defense: 219,
            spclAtk: 120,
            spclDef: 79,
            speed: 106
          },
          friendship: 0
        },
        {
          level: 51,
          species: 47,
          gender: '♀',
          item: 84,
          moves: [
            147,
            103,
            188,
            91
          ],
          stats: {
            hp: 151,
            attack: 127,
            defense: 113,
            spclAtk: 93,
            spclDef: 113,
            speed: 63
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Teacher Molly',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 53,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 255,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 190,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 78,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          178,
          128,
          128,
          128,
          138
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 203,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 52,
          species: 122,
          gender: '♀',
          item: 119,
          moves: [
            226,
            95,
            104,
            60
          ],
          stats: {
            hp: 133,
            attack: 78,
            defense: 100,
            spclAtk: 137,
            spclDef: 157,
            speed: 127
          },
          friendship: 0
        },
        {
          level: 50,
          species: 203,
          gender: '♂',
          item: 73,
          moves: [
            226,
            97,
            104,
            23
          ],
          stats: {
            hp: 159,
            attack: 113,
            defense: 97,
            spclAtk: 122,
            spclDef: 97,
            speed: 118
          },
          friendship: 0
        },
        {
          level: 53,
          species: 49,
          gender: '♀',
          item: 82,
          moves: [
            226,
            78,
            202,
            104
          ],
          stats: {
            hp: 167,
            attack: 101,
            defense: 97,
            spclAtk: 129,
            spclDef: 113,
            speed: 130
          },
          friendship: 0
        },
        {
          level: 52,
          species: 28,
          gender: '♂',
          item: 76,
          moves: [
            91,
            129,
            223,
            68
          ],
          stats: {
            hp: 170,
            attack: 138,
            defense: 147,
            spclAtk: 79,
            spclDef: 90,
            speed: 101
          },
          friendship: 0
        },
        {
          level: 50,
          species: 234,
          gender: '♀',
          item: 174,
          moves: [
            109,
            23,
            89,
            115
          ],
          stats: {
            hp: 162,
            attack: 126,
            defense: 94,
            spclAtk: 117,
            spclDef: 97,
            speed: 118
          },
          friendship: 0
        },
        {
          level: 53,
          species: 235,
          gender: '♂',
          item: 139,
          moves: [
            85,
            59,
            224,
            136
          ],
          stats: {
            hp: 152,
            attack: 55,
            defense: 70,
            spclAtk: 54,
            spclDef: 81,
            speed: 114
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Sage Chen',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 28,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 203,
        desireToInflictSleep: 128,
        desireToInflictPoison: 203,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 153,
        desireToInflictConfusion: 203,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 203
      },
      team: [
        {
          level: 52,
          species: 200,
          gender: '♂',
          item: 78,
          moves: [
            212,
            195,
            182,
            29
          ],
          stats: {
            hp: 155,
            attack: 97,
            defense: 96,
            spclAtk: 122,
            spclDef: 122,
            speed: 123
          },
          friendship: 0
        },
        {
          level: 52,
          species: 42,
          gender: '♀',
          item: 119,
          moves: [
            212,
            109,
            17,
            168
          ],
          stats: {
            hp: 171,
            attack: 116,
            defense: 106,
            spclAtk: 101,
            spclDef: 112,
            speed: 128
          },
          friendship: 0
        },
        {
          level: 52,
          species: 73,
          gender: '♂',
          item: 83,
          moves: [
            35,
            92,
            188,
            57
          ],
          stats: {
            hp: 176,
            attack: 107,
            defense: 101,
            spclAtk: 117,
            spclDef: 158,
            speed: 139
          },
          friendship: 0
        },
        {
          level: 51,
          species: 87,
          gender: '♀',
          item: 174,
          moves: [
            250,
            195,
            58,
            29
          ],
          stats: {
            hp: 183,
            attack: 103,
            defense: 115,
            spclAtk: 104,
            spclDef: 130,
            speed: 105
          },
          friendship: 0
        },
        {
          level: 51,
          species: 89,
          gender: '♂',
          item: 73,
          moves: [
            212,
            207,
            103,
            188
          ],
          stats: {
            hp: 198,
            attack: 141,
            defense: 110,
            spclAtk: 99,
            spclDef: 135,
            speed: 85
          },
          friendship: 0
        },
        {
          level: 51,
          species: 197,
          gender: '♂',
          item: 96,
          moves: [
            212,
            92,
            197,
            94
          ],
          stats: {
            hp: 188,
            attack: 100,
            defense: 145,
            spclAtk: 94,
            spclDef: 166,
            speed: 100
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Pokéfan Baxter',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 178,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 178,
        desireToInflictFlinch: 178,
        desireToInflictConfusion: 178,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 3,
          gender: '♂',
          item: 83,
          moves: [
            75,
            29,
            113,
            230
          ],
          stats: {
            hp: 169,
            attack: 117,
            defense: 117,
            spclAtk: 134,
            spclDef: 134,
            speed: 114
          },
          friendship: 180
        },
        {
          level: 54,
          species: 226,
          gender: '♂',
          item: 73,
          moves: [
            57,
            17,
            109,
            29
          ],
          stats: {
            hp: 167,
            attack: 80,
            defense: 111,
            spclAtk: 122,
            spclDef: 187,
            speed: 113
          },
          friendship: 128
        },
        {
          level: 51,
          species: 82,
          gender: '',
          item: 108,
          moves: [
            86,
            87,
            129,
            49
          ],
          stats: {
            hp: 143,
            attack: 96,
            defense: 131,
            spclAtk: 156,
            spclDef: 105,
            speed: 107
          },
          friendship: 128
        },
        {
          level: 50,
          species: 113,
          gender: '♀',
          item: 3,
          moves: [
            126,
            47,
            196,
            29
          ],
          stats: {
            hp: 341,
            attack: 40,
            defense: 39,
            spclAtk: 69,
            spclDef: 139,
            speed: 85
          },
          friendship: 128
        },
        {
          level: 54,
          species: 64,
          gender: '♂',
          item: 140,
          moves: [
            115,
            7,
            29,
            248
          ],
          stats: {
            hp: 140,
            attack: 75,
            defense: 68,
            spclAtk: 165,
            spclDef: 111,
            speed: 150
          },
          friendship: 128
        },
        {
          level: 51,
          species: 141,
          gender: '♂',
          item: 82,
          moves: [
            202,
            57,
            91,
            246
          ],
          stats: {
            hp: 153,
            attack: 152,
            defense: 141,
            spclAtk: 100,
            spclDef: 105,
            speed: 117
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Pokémaniac Pedro',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: true,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 53,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 153,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 178,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 55,
          species: 149,
          gender: '♂',
          item: 174,
          moves: [
            86,
            17,
            9,
            216
          ],
          stats: {
            hp: 199,
            attack: 185,
            defense: 141,
            spclAtk: 147,
            spclDef: 147,
            speed: 126
          },
          friendship: 200
        },
        {
          level: 50,
          species: 134,
          gender: '♂',
          item: 3,
          moves: [
            57,
            62,
            114,
            231
          ],
          stats: {
            hp: 221,
            attack: 100,
            defense: 94,
            spclAtk: 144,
            spclDef: 129,
            speed: 100
          },
          friendship: 0
        },
        {
          level: 50,
          species: 232,
          gender: '♂',
          item: 73,
          moves: [
            34,
            189,
            63,
            89
          ],
          stats: {
            hp: 181,
            attack: 155,
            defense: 154,
            spclAtk: 94,
            spclDef: 94,
            speed: 85
          },
          friendship: 0
        },
        {
          level: 55,
          species: 103,
          gender: '♀',
          item: 119,
          moves: [
            78,
            188,
            202,
            94
          ],
          stats: {
            hp: 204,
            attack: 140,
            defense: 130,
            spclAtk: 174,
            spclDef: 108,
            speed: 99
          },
          friendship: 0
        },
        {
          level: 50,
          species: 106,
          gender: '♂',
          item: 139,
          moves: [
            183,
            136,
            193,
            92
          ],
          stats: {
            hp: 141,
            attack: 155,
            defense: 87,
            spclAtk: 69,
            spclDef: 144,
            speed: 122
          },
          friendship: 0
        },
        {
          level: 50,
          species: 217,
          gender: '♀',
          item: 146,
          moves: [
            163,
            69,
            7,
            185
          ],
          stats: {
            hp: 181,
            attack: 163,
            defense: 109,
            spclAtk: 109,
            spclDef: 109,
            speed: 90
          },
          friendship: 0
        }
      ]
    }
  ],
  'poke-ultra-r2': [
    {
      name: 'Bug Catcher Nelson',
      ai: {
        randomFitness: true,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 51,
          species: 166,
          gender: '♀',
          item: 83,
          moves: [
            48,
            9,
            115,
            202
          ],
          stats: {
            hp: 145,
            attack: 65,
            defense: 82,
            spclAtk: 87,
            spclDef: 143,
            speed: 116
          },
          friendship: 180
        },
        {
          level: 53,
          species: 139,
          gender: '♂',
          item: 73,
          moves: [
            57,
            34,
            102,
            246
          ],
          stats: {
            hp: 166,
            attack: 94,
            defense: 164,
            spclAtk: 153,
            spclDef: 106,
            speed: 89
          },
          friendship: 128
        },
        {
          level: 51,
          species: 85,
          gender: '♀',
          item: 108,
          moves: [
            48,
            161,
            19,
            228
          ],
          stats: {
            hp: 150,
            attack: 142,
            defense: 102,
            spclAtk: 92,
            spclDef: 92,
            speed: 131
          },
          friendship: 128
        },
        {
          level: 53,
          species: 193,
          gender: '♂',
          item: 3,
          moves: [
            29,
            197,
            202,
            179
          ],
          stats: {
            hp: 155,
            attack: 100,
            defense: 78,
            spclAtk: 110,
            spclDef: 78,
            speed: 132
          },
          friendship: 128
        },
        {
          level: 51,
          species: 49,
          gender: '♀',
          item: 82,
          moves: [
            94,
            16,
            202,
            79
          ],
          stats: {
            hp: 160,
            attack: 96,
            defense: 92,
            spclAtk: 122,
            spclDef: 107,
            speed: 121
          },
          friendship: 128
        },
        {
          level: 51,
          species: 15,
          gender: '♂',
          item: 140,
          moves: [
            41,
            202,
            188,
            116
          ],
          stats: {
            hp: 150,
            attack: 112,
            defense: 70,
            spclAtk: 75,
            spclDef: 111,
            speed: 107
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Swimmer♂ Bruce',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 178,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 178,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 53,
          species: 226,
          gender: '♀',
          item: 95,
          moves: [
            240,
            56,
            36,
            92
          ],
          stats: {
            hp: 161,
            attack: 73,
            defense: 106,
            spclAtk: 116,
            spclDef: 180,
            speed: 105
          },
          friendship: 128
        },
        {
          level: 52,
          species: 222,
          gender: '♀',
          item: 83,
          moves: [
            240,
            57,
            89,
            94
          ],
          stats: {
            hp: 142,
            attack: 88,
            defense: 118,
            spclAtk: 98,
            spclDef: 118,
            speed: 67
          },
          friendship: 128
        },
        {
          level: 50,
          species: 26,
          gender: '♀',
          item: 174,
          moves: [
            240,
            87,
            86,
            70
          ],
          stats: {
            hp: 147,
            attack: 119,
            defense: 85,
            spclAtk: 120,
            spclDef: 110,
            speed: 129
          },
          friendship: 128
        },
        {
          level: 53,
          species: 206,
          gender: '♂',
          item: 119,
          moves: [
            137,
            207,
            244,
            216
          ],
          stats: {
            hp: 192,
            attack: 106,
            defense: 105,
            spclAtk: 99,
            spclDef: 99,
            speed: 79
          },
          friendship: 128
        },
        {
          level: 52,
          species: 91,
          gender: '♀',
          item: 104,
          moves: [
            240,
            57,
            58,
            153
          ],
          stats: {
            hp: 142,
            attack: 129,
            defense: 218,
            spclAtk: 119,
            spclDef: 78,
            speed: 103
          },
          friendship: 128
        },
        {
          level: 50,
          species: 119,
          gender: '♂',
          item: 107,
          moves: [
            240,
            218,
            57,
            175
          ],
          stats: {
            hp: 162,
            attack: 122,
            defense: 94,
            spclAtk: 94,
            spclDef: 109,
            speed: 98
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Hiker Chester',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 178,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 178,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 162,
          gender: '♀',
          item: 108,
          moves: [
            116,
            9,
            29,
            205
          ],
          stats: {
            hp: 173,
            attack: 106,
            defense: 95,
            spclAtk: 76,
            spclDef: 86,
            speed: 120
          },
          friendship: 0
        },
        {
          level: 51,
          species: 108,
          gender: '♀',
          item: 174,
          moves: [
            85,
            156,
            214,
            89
          ],
          stats: {
            hp: 181,
            attack: 87,
            defense: 108,
            spclAtk: 93,
            spclDef: 108,
            speed: 61
          },
          friendship: 0
        },
        {
          level: 54,
          species: 199,
          gender: '♂',
          item: 84,
          moves: [
            156,
            214,
            38,
            94
          ],
          stats: {
            hp: 191,
            attack: 114,
            defense: 118,
            spclAtk: 140,
            spclDef: 151,
            speed: 66
          },
          friendship: 0
        },
        {
          level: 50,
          species: 36,
          gender: '♂',
          item: 109,
          moves: [
            156,
            173,
            247,
            231
          ],
          stats: {
            hp: 178,
            attack: 105,
            defense: 103,
            spclAtk: 115,
            spclDef: 120,
            speed: 89
          },
          friendship: 0
        },
        {
          level: 51,
          species: 184,
          gender: '♂',
          item: 82,
          moves: [
            223,
            156,
            214,
            57
          ],
          stats: {
            hp: 186,
            attack: 83,
            defense: 112,
            spclAtk: 82,
            spclDef: 112,
            speed: 83
          },
          friendship: 0
        },
        {
          level: 54,
          species: 78,
          gender: '♂',
          item: 119,
          moves: [
            32,
            115,
            231,
            34
          ],
          stats: {
            hp: 159,
            attack: 141,
            defense: 108,
            spclAtk: 118,
            spclDef: 118,
            speed: 147
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Super Nerd Clifford',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: true,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 53,
        weightToDamageByPlayer: 153,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 178,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 178,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 178,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 178,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 55,
          species: 233,
          gender: '',
          item: 104,
          moves: [
            85,
            161,
            105,
            86
          ],
          stats: {
            hp: 190,
            attack: 121,
            defense: 133,
            spclAtk: 150,
            spclDef: 139,
            speed: 99
          },
          friendship: 0
        },
        {
          level: 50,
          species: 20,
          gender: '♂',
          item: 170,
          moves: [
            158,
            231,
            92,
            59
          ],
          stats: {
            hp: 139,
            attack: 113,
            defense: 93,
            spclAtk: 83,
            spclDef: 103,
            speed: 129
          },
          friendship: 0
        },
        {
          level: 50,
          species: 205,
          gender: '♀',
          item: 140,
          moves: [
            92,
            182,
            202,
            153
          ],
          stats: {
            hp: 164,
            attack: 121,
            defense: 172,
            spclAtk: 92,
            spclDef: 92,
            speed: 71
          },
          friendship: 0
        },
        {
          level: 50,
          species: 171,
          gender: '♂',
          item: 139,
          moves: [
            109,
            85,
            57,
            36
          ],
          stats: {
            hp: 214,
            attack: 91,
            defense: 90,
            spclAtk: 108,
            spclDef: 108,
            speed: 100
          },
          friendship: 0
        },
        {
          level: 55,
          species: 82,
          gender: '',
          item: 174,
          moves: [
            85,
            86,
            36,
            115
          ],
          stats: {
            hp: 151,
            attack: 99,
            defense: 139,
            spclAtk: 166,
            spclDef: 111,
            speed: 110
          },
          friendship: 0
        },
        {
          level: 50,
          species: 51,
          gender: '♂',
          item: 119,
          moves: [
            89,
            163,
            189,
            104
          ],
          stats: {
            hp: 124,
            attack: 113,
            defense: 82,
            spclAtk: 82,
            spclDef: 102,
            speed: 153
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Beauty Alissa',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 178,
        desireToInflictInfatuation: 198,
        desireToRaiseStats: [
          153,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 52,
          species: 40,
          gender: '♀',
          item: 104,
          moves: [
            9,
            213,
            34,
            186
          ],
          stats: {
            hp: 233,
            attack: 106,
            defense: 79,
            spclAtk: 111,
            spclDef: 85,
            speed: 80
          },
          friendship: 0
        },
        {
          level: 52,
          species: 136,
          gender: '♂',
          item: 109,
          moves: [
            38,
            247,
            213,
            126
          ],
          stats: {
            hp: 160,
            attack: 168,
            defense: 96,
            spclAtk: 132,
            spclDef: 148,
            speed: 100
          },
          friendship: 0
        },
        {
          level: 52,
          species: 31,
          gender: '♀',
          item: 139,
          moves: [
            213,
            89,
            24,
            157
          ],
          stats: {
            hp: 186,
            attack: 118,
            defense: 124,
            spclAtk: 112,
            spclDef: 122,
            speed: 112
          },
          friendship: 0
        },
        {
          level: 52,
          species: 45,
          gender: '♀',
          item: 117,
          moves: [
            213,
            188,
            14,
            75
          ],
          stats: {
            hp: 171,
            attack: 116,
            defense: 122,
            spclAtk: 138,
            spclDef: 127,
            speed: 85
          },
          friendship: 0
        },
        {
          level: 51,
          species: 189,
          gender: '♀',
          item: 119,
          moves: [
            213,
            202,
            29,
            73
          ],
          stats: {
            hp: 168,
            attack: 88,
            defense: 104,
            spclAtk: 89,
            spclDef: 120,
            speed: 144
          },
          friendship: 0
        },
        {
          level: 51,
          species: 186,
          gender: '♂',
          item: 73,
          moves: [
            94,
            213,
            57,
            114
          ],
          stats: {
            hp: 183,
            attack: 111,
            defense: 110,
            spclAtk: 125,
            spclDef: 135,
            speed: 105
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Burglar Jensen',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          178,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 153
      },
      team: [
        {
          level: 51,
          species: 53,
          gender: '♀',
          item: 0,
          moves: [
            168,
            34,
            231,
            95
          ],
          stats: {
            hp: 158,
            attack: 104,
            defense: 95,
            spclAtk: 100,
            spclDef: 100,
            speed: 150
          },
          friendship: 128
        },
        {
          level: 51,
          species: 208,
          gender: '♂',
          item: 170,
          moves: [
            201,
            34,
            157,
            153
          ],
          stats: {
            hp: 169,
            attack: 122,
            defense: 238,
            spclAtk: 90,
            spclDef: 100,
            speed: 66
          },
          friendship: 128
        },
        {
          level: 53,
          species: 198,
          gender: '♂',
          item: 0,
          moves: [
            168,
            247,
            119,
            101
          ],
          stats: {
            hp: 159,
            attack: 126,
            defense: 80,
            spclAtk: 125,
            spclDef: 80,
            speed: 133
          },
          friendship: 128
        },
        {
          level: 51,
          species: 127,
          gender: '♀',
          item: 0,
          moves: [
            168,
            14,
            218,
            66
          ],
          stats: {
            hp: 158,
            attack: 161,
            defense: 136,
            spclAtk: 90,
            spclDef: 105,
            speed: 120
          },
          friendship: 80
        },
        {
          level: 51,
          species: 130,
          gender: '♂',
          item: 73,
          moves: [
            44,
            126,
            56,
            63
          ],
          stats: {
            hp: 189,
            attack: 163,
            defense: 115,
            spclAtk: 95,
            spclDef: 136,
            speed: 118
          },
          friendship: 128
        },
        {
          level: 53,
          species: 146,
          gender: '',
          item: 119,
          moves: [
            115,
            126,
            143,
            197
          ],
          stats: {
            hp: 191,
            attack: 140,
            defense: 131,
            spclAtk: 168,
            spclDef: 125,
            speed: 130
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Boarder Claude',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 180,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 178,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 178,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 215,
          gender: '♂',
          item: 83,
          moves: [
            207,
            247,
            29,
            57
          ],
          stats: {
            hp: 141,
            attack: 129,
            defense: 88,
            spclAtk: 68,
            spclDef: 108,
            speed: 149
          },
          friendship: 0
        },
        {
          level: 52,
          species: 144,
          gender: '',
          item: 73,
          moves: [
            196,
            58,
            216,
            237
          ],
          stats: {
            hp: 188,
            attack: 123,
            defense: 139,
            spclAtk: 134,
            spclDef: 165,
            speed: 123
          },
          friendship: 180
        },
        {
          level: 53,
          species: 242,
          gender: '♀',
          item: 146,
          moves: [
            85,
            115,
            196,
            69
          ],
          stats: {
            hp: 366,
            attack: 45,
            defense: 46,
            spclAtk: 115,
            spclDef: 179,
            speed: 93
          },
          friendship: 0
        },
        {
          level: 50,
          species: 55,
          gender: '♂',
          item: 174,
          moves: [
            95,
            94,
            57,
            238
          ],
          stats: {
            hp: 166,
            attack: 116,
            defense: 111,
            spclAtk: 128,
            spclDef: 113,
            speed: 119
          },
          friendship: 0
        },
        {
          level: 52,
          species: 115,
          gender: '♀',
          item: 82,
          moves: [
            196,
            247,
            89,
            179
          ],
          stats: {
            hp: 203,
            attack: 133,
            defense: 118,
            spclAtk: 77,
            spclDef: 118,
            speed: 128
          },
          friendship: 0
        },
        {
          level: 53,
          species: 145,
          gender: '',
          item: 3,
          moves: [
            86,
            85,
            65,
            211
          ],
          stats: {
            hp: 191,
            attack: 130,
            defense: 126,
            spclAtk: 168,
            spclDef: 131,
            speed: 141
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Psychic Mason',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 178,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 153,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 198,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 51,
          species: 178,
          gender: '♀',
          item: 73,
          moves: [
            109,
            101,
            244,
            65
          ],
          stats: {
            hp: 161,
            attack: 112,
            defense: 108,
            spclAtk: 134,
            spclDef: 108,
            speed: 133
          },
          friendship: 0
        },
        {
          level: 54,
          species: 196,
          gender: '♂',
          item: 109,
          moves: [
            94,
            115,
            34,
            234
          ],
          stats: {
            hp: 170,
            attack: 108,
            defense: 103,
            spclAtk: 179,
            spclDef: 141,
            speed: 156
          },
          friendship: 0
        },
        {
          level: 50,
          species: 135,
          gender: '♂',
          item: 163,
          moves: [
            86,
            85,
            44,
            42
          ],
          stats: {
            hp: 158,
            attack: 100,
            defense: 96,
            spclAtk: 146,
            spclDef: 131,
            speed: 165
          },
          friendship: 0
        },
        {
          level: 51,
          species: 9,
          gender: '♂',
          item: 174,
          moves: [
            89,
            243,
            58,
            114
          ],
          stats: {
            hp: 175,
            attack: 120,
            defense: 139,
            spclAtk: 123,
            spclDef: 144,
            speed: 115
          },
          friendship: 0
        },
        {
          level: 54,
          species: 214,
          gender: '♂',
          item: 119,
          moves: [
            89,
            224,
            179,
            237
          ],
          stats: {
            hp: 185,
            attack: 173,
            defense: 120,
            spclAtk: 83,
            spclDef: 143,
            speed: 130
          },
          friendship: 0
        },
        {
          level: 50,
          species: 57,
          gender: '♀',
          item: 82,
          moves: [
            238,
            69,
            85,
            157
          ],
          stats: {
            hp: 158,
            attack: 140,
            defense: 96,
            spclAtk: 96,
            spclDef: 106,
            speed: 130
          },
          friendship: 0
        }
      ]
    }
  ],
  'poke-master-r2': [
    {
      name: 'Pokéfan Carmen',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: true,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 53,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 153,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 178,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 75,
        desireToRaiseStats: [
          75,
          75,
          75,
          75,
          75,
          75,
          75
        ],
        desireForLightScreen: 75,
        desireForMist: 75,
        desireForFocusEnergy: 75,
        desireForReflect: 75,
        desireForDisable: 75,
        desireForBatonPass: 75,
        desireToLowerStatTenPercentChance: 75
      },
      team: [
        {
          level: 50,
          species: 221,
          gender: '♀',
          item: 174,
          moves: [
            89,
            196,
            58,
            237
          ],
          stats: {
            hp: 189,
            attack: 131,
            defense: 112,
            spclAtk: 92,
            spclDef: 92,
            speed: 81
          },
          friendship: 128
        },
        {
          level: 55,
          species: 97,
          gender: '♀',
          item: 82,
          moves: [
            118,
            95,
            248,
            7
          ],
          stats: {
            hp: 190,
            attack: 114,
            defense: 112,
            spclAtk: 115,
            spclDef: 161,
            speed: 107
          },
          friendship: 128
        },
        {
          level: 50,
          species: 87,
          gender: '♂',
          item: 119,
          moves: [
            219,
            227,
            196,
            29
          ],
          stats: {
            hp: 174,
            attack: 102,
            defense: 111,
            spclAtk: 101,
            spclDef: 126,
            speed: 102
          },
          friendship: 128
        },
        {
          level: 50,
          species: 71,
          gender: '♀',
          item: 117,
          moves: [
            79,
            75,
            227,
            218
          ],
          stats: {
            hp: 169,
            attack: 136,
            defense: 97,
            spclAtk: 132,
            spclDef: 92,
            speed: 101
          },
          friendship: 128
        },
        {
          level: 50,
          species: 76,
          gender: '♂',
          item: 139,
          moves: [
            118,
            88,
            153,
            34
          ],
          stats: {
            hp: 164,
            attack: 142,
            defense: 161,
            spclAtk: 86,
            spclDef: 96,
            speed: 77
          },
          friendship: 128
        },
        {
          level: 55,
          species: 36,
          gender: '♀',
          item: 73,
          moves: [
            118,
            227,
            236,
            216
          ],
          stats: {
            hp: 201,
            attack: 111,
            defense: 115,
            spclAtk: 128,
            spclDef: 134,
            speed: 100
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Youngster Wyatt',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 11,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          198,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 52,
          species: 210,
          gender: '♀',
          item: 102,
          moves: [
            242,
            9,
            247,
            184
          ],
          stats: {
            hp: 186,
            attack: 157,
            defense: 111,
            spclAtk: 96,
            spclDef: 96,
            speed: 79
          },
          friendship: 128
        },
        {
          level: 52,
          species: 168,
          gender: '♀',
          item: 73,
          moves: [
            101,
            94,
            202,
            184
          ],
          stats: {
            hp: 165,
            attack: 126,
            defense: 106,
            spclAtk: 96,
            spclDef: 96,
            speed: 74
          },
          friendship: 128
        },
        {
          level: 51,
          species: 160,
          gender: '♂',
          item: 104,
          moves: [
            242,
            163,
            91,
            184
          ],
          stats: {
            hp: 177,
            attack: 139,
            defense: 135,
            spclAtk: 113,
            spclDef: 117,
            speed: 111
          },
          friendship: 128
        },
        {
          level: 52,
          species: 22,
          gender: '♂',
          item: 83,
          moves: [
            161,
            119,
            65,
            184
          ],
          stats: {
            hp: 155,
            attack: 127,
            defense: 102,
            spclAtk: 98,
            spclDef: 98,
            speed: 137
          },
          friendship: 128
        },
        {
          level: 51,
          species: 112,
          gender: '♀',
          item: 3,
          moves: [
            157,
            58,
            69,
            184
          ],
          stats: {
            hp: 198,
            attack: 164,
            defense: 155,
            spclAtk: 78,
            spclDef: 78,
            speed: 72
          },
          friendship: 128
        },
        {
          level: 52,
          species: 128,
          gender: '♂',
          item: 119,
          moves: [
            38,
            85,
            89,
            184
          ],
          stats: {
            hp: 170,
            attack: 136,
            defense: 132,
            spclAtk: 75,
            spclDef: 106,
            speed: 146
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Firebreather Cliff',
      ai: {
        randomFitness: false,
        usesRandomLead: true,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: true,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 53,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 178,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 53,
          species: 6,
          gender: '♂',
          item: 82,
          moves: [
            187,
            63,
            231,
            126
          ],
          stats: {
            hp: 178,
            attack: 123,
            defense: 118,
            spclAtk: 151,
            spclDef: 125,
            speed: 140
          },
          friendship: 0
        },
        {
          level: 53,
          species: 157,
          gender: '♂',
          item: 3,
          moves: [
            241,
            53,
            179,
            91
          ],
          stats: {
            hp: 178,
            attack: 123,
            defense: 118,
            spclAtk: 151,
            spclDef: 125,
            speed: 140
          },
          friendship: 0
        },
        {
          level: 51,
          species: 199,
          gender: '♀',
          item: 146,
          moves: [
            126,
            94,
            57,
            247
          ],
          stats: {
            hp: 189,
            attack: 110,
            defense: 116,
            spclAtk: 136,
            spclDef: 146,
            speed: 64
          },
          friendship: 0
        },
        {
          level: 51,
          species: 242,
          gender: '♀',
          item: 73,
          moves: [
            241,
            126,
            85,
            76
          ],
          stats: {
            hp: 352,
            attack: 43,
            defense: 44,
            spclAtk: 111,
            spclDef: 172,
            speed: 89
          },
          friendship: 0
        },
        {
          level: 51,
          species: 31,
          gender: '♀',
          item: 174,
          moves: [
            89,
            126,
            223,
            59
          ],
          stats: {
            hp: 184,
            attack: 117,
            defense: 123,
            spclAtk: 111,
            spclDef: 121,
            speed: 111
          },
          friendship: 0
        },
        {
          level: 51,
          species: 103,
          gender: '♂',
          item: 119,
          moves: [
            241,
            76,
            235,
            29
          ],
          stats: {
            hp: 189,
            attack: 132,
            defense: 121,
            spclAtk: 162,
            spclDef: 100,
            speed: 91
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Biker Dillon',
      ai: {
        randomFitness: false,
        usesRandomLead: true,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 53,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 178,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          153,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 153,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 153
      },
      team: [
        {
          level: 50,
          species: 241,
          gender: '♀',
          item: 82,
          moves: [
            89,
            92,
            34,
            247
          ],
          stats: {
            hp: 187,
            attack: 114,
            defense: 140,
            spclAtk: 75,
            spclDef: 105,
            speed: 134
          },
          friendship: 0
        },
        {
          level: 55,
          species: 134,
          gender: '♂',
          item: 146,
          moves: [
            44,
            57,
            92,
            114
          ],
          stats: {
            hp: 243,
            attack: 108,
            defense: 104,
            spclAtk: 159,
            spclDef: 142,
            speed: 108
          },
          friendship: 0
        },
        {
          level: 50,
          species: 110,
          gender: '♀',
          item: 104,
          moves: [
            153,
            188,
            126,
            114
          ],
          stats: {
            hp: 157,
            attack: 124,
            defense: 155,
            spclAtk: 120,
            spclDef: 105,
            speed: 94
          },
          friendship: 0
        },
        {
          level: 50,
          species: 227,
          gender: '♂',
          item: 143,
          moves: [
            92,
            65,
            211,
            97
          ],
          stats: {
            hp: 157,
            attack: 116,
            defense: 175,
            spclAtk: 75,
            spclDef: 105,
            speed: 106
          },
          friendship: 0
        },
        {
          level: 55,
          species: 89,
          gender: '♂',
          item: 81,
          moves: [
            92,
            188,
            202,
            182
          ],
          stats: {
            hp: 215,
            attack: 154,
            defense: 120,
            spclAtk: 109,
            spclDef: 148,
            speed: 94
          },
          friendship: 0
        },
        {
          level: 50,
          species: 181,
          gender: '♂',
          item: 119,
          moves: [
            92,
            85,
            115,
            34
          ],
          stats: {
            hp: 182,
            attack: 111,
            defense: 110,
            spclAtk: 150,
            spclDef: 125,
            speed: 91
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Teacher Molly',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 53,
        weightToDamageByPlayer: 90,
        weightToSecondaryEffects: 200,
        desireToInflictSleep: 255,
        desireToInflictPoison: 78,
        desireToInflictBurn: 78,
        desireToInflictFreeze: 78,
        desireToInflictPara: 78,
        desireToInflictFlinch: 78,
        desireToInflictConfusion: 103,
        desireToInflictInfatuation: 78,
        desireToRaiseStats: [
          81,
          78,
          205,
          78,
          78,
          78,
          180
        ],
        desireForLightScreen: 78,
        desireForMist: 78,
        desireForFocusEnergy: 78,
        desireForReflect: 78,
        desireForDisable: 78,
        desireForBatonPass: 220,
        desireToLowerStatTenPercentChance: 78
      },
      team: [
        {
          level: 51,
          species: 122,
          gender: '♀',
          item: 174,
          moves: [
            95,
            94,
            104,
            226
          ],
          stats: {
            hp: 135,
            attack: 82,
            defense: 103,
            spclAtk: 139,
            spclDef: 159,
            speed: 127
          },
          friendship: 0
        },
        {
          level: 50,
          species: 212,
          gender: '♂',
          item: 73,
          moves: [
            97,
            211,
            14,
            226
          ],
          stats: {
            hp: 163,
            attack: 167,
            defense: 136,
            spclAtk: 91,
            spclDef: 116,
            speed: 102
          },
          friendship: 0
        },
        {
          level: 54,
          species: 59,
          gender: '♂',
          item: 104,
          moves: [
            245,
            126,
            91,
            242
          ],
          stats: {
            hp: 197,
            attack: 156,
            defense: 125,
            spclAtk: 147,
            spclDef: 125,
            speed: 140
          },
          friendship: 0
        },
        {
          level: 51,
          species: 203,
          gender: '♂',
          item: 109,
          moves: [
            97,
            104,
            89,
            226
          ],
          stats: {
            hp: 166,
            attack: 119,
            defense: 103,
            spclAtk: 128,
            spclDef: 103,
            speed: 124
          },
          friendship: 0
        },
        {
          level: 50,
          species: 20,
          gender: '♂',
          item: 82,
          moves: [
            158,
            162,
            247,
            196
          ],
          stats: {
            hp: 142,
            attack: 117,
            defense: 97,
            spclAtk: 86,
            spclDef: 106,
            speed: 133
          },
          friendship: 0
        },
        {
          level: 54,
          species: 195,
          gender: '♂',
          item: 119,
          moves: [
            207,
            216,
            57,
            58
          ],
          stats: {
            hp: 197,
            attack: 130,
            defense: 129,
            spclAtk: 108,
            spclDef: 108,
            speed: 76
          },
          friendship: 255
        }
      ]
    },
    {
      name: 'Sage Chen',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 53,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 203,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 178,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 169,
          gender: '♀',
          item: 82,
          moves: [
            109,
            212,
            44,
            92
          ],
          stats: {
            hp: 178,
            attack: 125,
            defense: 116,
            spclAtk: 106,
            spclDef: 116,
            speed: 165
          },
          friendship: 0
        },
        {
          level: 52,
          species: 197,
          gender: '♂',
          item: 174,
          moves: [
            109,
            212,
            185,
            94
          ],
          stats: {
            hp: 195,
            attack: 104,
            defense: 152,
            spclAtk: 100,
            spclDef: 172,
            speed: 104
          },
          friendship: 0
        },
        {
          level: 53,
          species: 244,
          gender: '',
          item: 109,
          moves: [
            23,
            76,
            126,
            63
          ],
          stats: {
            hp: 220,
            attack: 159,
            defense: 128,
            spclAtk: 133,
            spclDef: 117,
            speed: 143
          },
          friendship: 0
        },
        {
          level: 50,
          species: 124,
          gender: '♀',
          item: 73,
          moves: [
            212,
            195,
            59,
            182
          ],
          stats: {
            hp: 158,
            attack: 85,
            defense: 71,
            spclAtk: 151,
            spclDef: 131,
            speed: 130
          },
          friendship: 0
        },
        {
          level: 52,
          species: 200,
          gender: '♂',
          item: 119,
          moves: [
            109,
            195,
            60,
            212
          ],
          stats: {
            hp: 154,
            attack: 100,
            defense: 99,
            spclAtk: 125,
            spclDef: 125,
            speed: 126
          },
          friendship: 0
        },
        {
          level: 53,
          species: 131,
          gender: '♀',
          item: 146,
          moves: [
            85,
            94,
            250,
            195
          ],
          stats: {
            hp: 236,
            attack: 127,
            defense: 123,
            spclAtk: 128,
            spclDef: 139,
            speed: 100
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Pokéfan Baxter',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 53,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 178,
        desireToInflictFlinch: 178,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 178,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 178,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 52,
          species: 78,
          gender: '♀',
          item: 146,
          moves: [
            23,
            34,
            126,
            32
          ],
          stats: {
            hp: 166,
            attack: 142,
            defense: 112,
            spclAtk: 122,
            spclDef: 122,
            speed: 147
          },
          friendship: 180
        },
        {
          level: 51,
          species: 245,
          gender: '',
          item: 104,
          moves: [
            57,
            196,
            91,
            216
          ],
          stats: {
            hp: 198,
            attack: 114,
            defense: 155,
            spclAtk: 130,
            spclDef: 155,
            speed: 124
          },
          friendship: 255
        },
        {
          level: 52,
          species: 65,
          gender: '♂',
          item: 170,
          moves: [
            9,
            7,
            94,
            115
          ],
          stats: {
            hp: 155,
            attack: 90,
            defense: 86,
            spclAtk: 179,
            spclDef: 127,
            speed: 163
          },
          friendship: 128
        },
        {
          level: 52,
          species: 142,
          gender: '♂',
          item: 3,
          moves: [
            29,
            44,
            102,
            89
          ],
          stats: {
            hp: 181,
            attack: 147,
            defense: 106,
            spclAtk: 101,
            spclDef: 117,
            speed: 173
          },
          friendship: 128
        },
        {
          level: 52,
          species: 105,
          gender: '♀',
          item: 118,
          moves: [
            89,
            53,
            157,
            231
          ],
          stats: {
            hp: 160,
            attack: 121,
            defense: 153,
            spclAtk: 91,
            spclDef: 122,
            speed: 85
          },
          friendship: 128
        },
        {
          level: 51,
          species: 101,
          gender: '',
          item: 140,
          moves: [
            29,
            86,
            153,
            85
          ],
          stats: {
            hp: 157,
            attack: 88,
            defense: 110,
            spclAtk: 120,
            spclDef: 120,
            speed: 180
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Pokémaniac Pedro',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 52,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 100,
        desireToInflictSleep: 105,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 178,
        desireToInflictFlinch: 153,
        desireToInflictConfusion: 178,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          38,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 94,
          gender: '♀',
          item: 73,
          moves: [
            109,
            101,
            66,
            194
          ],
          stats: {
            hp: 155,
            attack: 102,
            defense: 98,
            spclAtk: 168,
            spclDef: 113,
            speed: 147
          },
          friendship: 0
        },
        {
          level: 50,
          species: 121,
          gender: '',
          item: 119,
          moves: [
            109,
            57,
            85,
            94
          ],
          stats: {
            hp: 155,
            attack: 112,
            defense: 123,
            spclAtk: 138,
            spclDef: 123,
            speed: 152
          },
          friendship: 0
        },
        {
          level: 55,
          species: 143,
          gender: '♂',
          item: 146,
          moves: [
            156,
            173,
            187,
            89
          ],
          stats: {
            hp: 280,
            attack: 161,
            defense: 113,
            spclAtk: 113,
            spclDef: 162,
            speed: 73
          },
          friendship: 0
        },
        {
          level: 50,
          species: 125,
          gender: '♂',
          item: 109,
          moves: [
            85,
            94,
            238,
            7
          ],
          stats: {
            hp: 160,
            attack: 120,
            defense: 95,
            spclAtk: 133,
            spclDef: 123,
            speed: 142
          },
          friendship: 0
        },
        {
          level: 50,
          species: 68,
          gender: '♂',
          item: 98,
          moves: [
            238,
            89,
            69,
            157
          ],
          stats: {
            hp: 185,
            attack: 167,
            defense: 118,
            spclAtk: 103,
            spclDef: 123,
            speed: 92
          },
          friendship: 0
        },
        {
          level: 55,
          species: 149,
          gender: '♂',
          item: 82,
          moves: [
            245,
            53,
            85,
            58
          ],
          stats: {
            hp: 198,
            attack: 189,
            defense: 145,
            spclAtk: 150,
            spclDef: 150,
            speed: 129
          },
          friendship: 0
        }
      ]
    }
  ],
  'little-r2': [
    {
      name: 'Youngster Bernie',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 70,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 160,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 170,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 150,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 5,
          species: 48,
          gender: '♀',
          item: 88,
          moves: [
            141,
            72,
            60,
            115
          ],
          stats: {
            hp: 21,
            attack: 10,
            defense: 10,
            spclAtk: 9,
            spclDef: 11,
            speed: 9
          },
          friendship: 128
        },
        {
          level: 5,
          species: 204,
          gender: '♂',
          item: 170,
          moves: [
            38,
            205,
            202,
            115
          ],
          stats: {
            hp: 20,
            attack: 12,
            defense: 14,
            spclAtk: 9,
            spclDef: 9,
            speed: 6
          },
          friendship: 128
        },
        {
          level: 5,
          species: 100,
          gender: '',
          item: 108,
          moves: [
            85,
            33,
            129,
            243
          ],
          stats: {
            hp: 19,
            attack: 8,
            defense: 10,
            spclAtk: 11,
            spclDef: 11,
            speed: 15
          },
          friendship: 128
        },
        {
          level: 5,
          species: 66,
          gender: '♂',
          item: 98,
          moves: [
            233,
            91,
            113,
            68
          ],
          stats: {
            hp: 22,
            attack: 13,
            defense: 10,
            spclAtk: 9,
            spclDef: 9,
            speed: 8
          },
          friendship: 128
        },
        {
          level: 5,
          species: 102,
          gender: '♀',
          item: 117,
          moves: [
            72,
            93,
            246,
            115
          ],
          stats: {
            hp: 21,
            attack: 9,
            defense: 13,
            spclAtk: 11,
            spclDef: 10,
            speed: 9
          },
          friendship: 128
        },
        {
          level: 5,
          species: 111,
          gender: '♀',
          item: 76,
          moves: [
            222,
            157,
            31,
            68
          ],
          stats: {
            hp: 23,
            attack: 13,
            defense: 15,
            spclAtk: 8,
            spclDef: 8,
            speed: 7
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Picnicker Stacy',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 60,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 150,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          200,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 160,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 5,
          species: 116,
          gender: '♀',
          item: 84,
          moves: [
            56,
            130,
            59,
            97
          ],
          stats: {
            hp: 19,
            attack: 10,
            defense: 13,
            spclAtk: 13,
            spclDef: 8,
            speed: 12
          },
          friendship: 128
        },
        {
          level: 5,
          species: 231,
          gender: '♂',
          item: 173,
          moves: [
            89,
            205,
            116,
            46
          ],
          stats: {
            hp: 25,
            attack: 12,
            defense: 12,
            spclAtk: 10,
            spclDef: 10,
            speed: 10
          },
          friendship: 128
        },
        {
          level: 5,
          species: 1,
          gender: '♂',
          item: 109,
          moves: [
            76,
            130,
            13,
            73
          ],
          stats: {
            hp: 20,
            attack: 10,
            defense: 11,
            spclAtk: 12,
            spclDef: 12,
            speed: 10
          },
          friendship: 128
        },
        {
          level: 5,
          species: 118,
          gender: '♀',
          item: 74,
          moves: [
            56,
            59,
            97,
            114
          ],
          stats: {
            hp: 20,
            attack: 12,
            defense: 12,
            spclAtk: 9,
            spclDef: 11,
            speed: 12
          },
          friendship: 128
        },
        {
          level: 5,
          species: 21,
          gender: '♂',
          item: 78,
          moves: [
            143,
            161,
            211,
            97
          ],
          stats: {
            hp: 20,
            attack: 12,
            defense: 9,
            spclAtk: 9,
            spclDef: 9,
            speed: 13
          },
          friendship: 128
        },
        {
          level: 5,
          species: 155,
          gender: '♂',
          item: 83,
          moves: [
            126,
            231,
            91,
            193
          ],
          stats: {
            hp: 20,
            attack: 11,
            defense: 10,
            spclAtk: 12,
            spclDef: 11,
            speed: 12
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Camper Grant',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 100,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 180,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 250,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          160,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 190,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 5,
          species: 187,
          gender: '♀',
          item: 119,
          moves: [
            207,
            202,
            133,
            115
          ],
          stats: {
            hp: 20,
            attack: 9,
            defense: 10,
            spclAtk: 10,
            spclDef: 12,
            speed: 11
          },
          friendship: 128
        },
        {
          level: 5,
          species: 194,
          gender: '♂',
          item: 73,
          moves: [
            207,
            39,
            57,
            89
          ],
          stats: {
            hp: 21,
            attack: 11,
            defense: 11,
            spclAtk: 9,
            spclDef: 9,
            speed: 7
          },
          friendship: 128
        },
        {
          level: 5,
          species: 50,
          gender: '♂',
          item: 3,
          moves: [
            207,
            103,
            222,
            246
          ],
          stats: {
            hp: 17,
            attack: 12,
            defense: 9,
            spclAtk: 10,
            spclDef: 11,
            speed: 15
          },
          friendship: 128
        },
        {
          level: 5,
          species: 216,
          gender: '♀',
          item: 173,
          moves: [
            207,
            43,
            249,
            232
          ],
          stats: {
            hp: 22,
            attack: 14,
            defense: 11,
            spclAtk: 11,
            spclDef: 11,
            speed: 10
          },
          friendship: 128
        },
        {
          level: 5,
          species: 52,
          gender: '♂',
          item: 109,
          moves: [
            207,
            103,
            163,
            247
          ],
          stats: {
            hp: 20,
            attack: 11,
            defense: 10,
            spclAtk: 10,
            spclDef: 10,
            speed: 15
          },
          friendship: 128
        },
        {
          level: 5,
          species: 54,
          gender: '♀',
          item: 140,
          moves: [
            207,
            103,
            94,
            58
          ],
          stats: {
            hp: 21,
            attack: 11,
            defense: 11,
            spclAtk: 13,
            spclDef: 11,
            speed: 11
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Pokéfan Janet',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 90,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 180,
        desireToInflictSleep: 128,
        desireToInflictPoison: 180,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 160,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          190,
          128,
          128,
          128,
          220
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 170,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 5,
          species: 165,
          gender: '♀',
          item: 3,
          moves: [
            104,
            97,
            226,
            8
          ],
          stats: {
            hp: 20,
            attack: 8,
            defense: 10,
            spclAtk: 11,
            spclDef: 15,
            speed: 11
          },
          friendship: 128
        },
        {
          level: 5,
          species: 81,
          gender: '',
          item: 146,
          moves: [
            104,
            199,
            192,
            205
          ],
          stats: {
            hp: 19,
            attack: 9,
            defense: 14,
            spclAtk: 16,
            spclDef: 12,
            speed: 10
          },
          friendship: 128
        },
        {
          level: 5,
          species: 92,
          gender: '♀',
          item: 139,
          moves: [
            104,
            212,
            174,
            94
          ],
          stats: {
            hp: 20,
            attack: 10,
            defense: 10,
            spclAtk: 17,
            spclDef: 10,
            speed: 14
          },
          friendship: 128
        },
        {
          level: 5,
          species: 228,
          gender: '♂',
          item: 119,
          moves: [
            104,
            83,
            92,
            44
          ],
          stats: {
            hp: 21,
            attack: 12,
            defense: 10,
            spclAtk: 15,
            spclDef: 12,
            speed: 12
          },
          friendship: 128
        },
        {
          level: 5,
          species: 167,
          gender: '♂',
          item: 73,
          moves: [
            104,
            169,
            226,
            188
          ],
          stats: {
            hp: 20,
            attack: 12,
            defense: 11,
            spclAtk: 11,
            spclDef: 11,
            speed: 9
          },
          friendship: 128
        },
        {
          level: 5,
          species: 86,
          gender: '♀',
          item: 109,
          moves: [
            104,
            250,
            195,
            57
          ],
          stats: {
            hp: 23,
            attack: 10,
            defense: 12,
            spclAtk: 11,
            spclDef: 14,
            speed: 10
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Schoolboy Clark',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 90,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 150,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 5,
          species: 172,
          gender: '♂',
          item: 139,
          moves: [
            237,
            87,
            231,
            216
          ],
          stats: {
            hp: 19,
            attack: 11,
            defense: 8,
            spclAtk: 10,
            spclDef: 10,
            speed: 13
          },
          friendship: 200
        },
        {
          level: 5,
          species: 152,
          gender: '♂',
          item: 173,
          moves: [
            237,
            202,
            34,
            246
          ],
          stats: {
            hp: 21,
            attack: 12,
            defense: 13,
            spclAtk: 12,
            spclDef: 13,
            speed: 11
          },
          friendship: 255
        },
        {
          level: 5,
          species: 173,
          gender: '♀',
          item: 73,
          moves: [
            237,
            94,
            126,
            247
          ],
          stats: {
            hp: 21,
            attack: 9,
            defense: 10,
            spclAtk: 11,
            spclDef: 12,
            speed: 8
          },
          friendship: 255
        },
        {
          level: 5,
          species: 183,
          gender: '♂',
          item: 174,
          moves: [
            237,
            57,
            231,
            8
          ],
          stats: {
            hp: 23,
            attack: 9,
            defense: 12,
            spclAtk: 9,
            spclDef: 12,
            speed: 11
          },
          friendship: 255
        },
        {
          level: 5,
          species: 37,
          gender: '♀',
          item: 3,
          moves: [
            237,
            53,
            91,
            185
          ],
          stats: {
            hp: 20,
            attack: 11,
            defense: 11,
            spclAtk: 12,
            spclDef: 13,
            speed: 13
          },
          friendship: 255
        },
        {
          level: 5,
          species: 161,
          gender: '♂',
          item: 119,
          moves: [
            237,
            179,
            247,
            57
          ],
          stats: {
            hp: 20,
            attack: 11,
            defense: 10,
            spclAtk: 10,
            spclDef: 11,
            speed: 9
          },
          friendship: 255
        }
      ]
    },
    {
      name: 'Swimmer♀ Cora',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 60,
        weightToDamageByPlayer: 150,
        weightToSecondaryEffects: 190,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 190,
        desireToInflictFlinch: 170,
        desireToInflictConfusion: 190,
        desireToInflictInfatuation: 240,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 5,
          species: 60,
          gender: '♀',
          item: 139,
          moves: [
            213,
            196,
            29,
            56
          ],
          stats: {
            hp: 21,
            attack: 12,
            defense: 11,
            spclAtk: 11,
            spclDef: 11,
            speed: 16
          },
          friendship: 128
        },
        {
          level: 5,
          species: 63,
          gender: '♂',
          item: 82,
          moves: [
            213,
            86,
            29,
            94
          ],
          stats: {
            hp: 20,
            attack: 9,
            defense: 8,
            spclAtk: 17,
            spclDef: 12,
            speed: 16
          },
          friendship: 128
        },
        {
          level: 5,
          species: 179,
          gender: '♀',
          item: 174,
          moves: [
            213,
            86,
            29,
            85
          ],
          stats: {
            hp: 22,
            attack: 11,
            defense: 11,
            spclAtk: 13,
            spclDef: 11,
            speed: 10
          },
          friendship: 128
        },
        {
          level: 5,
          species: 104,
          gender: '♂',
          item: 119,
          moves: [
            213,
            196,
            157,
            125
          ],
          stats: {
            hp: 21,
            attack: 12,
            defense: 16,
            spclAtk: 11,
            spclDef: 12,
            speed: 10
          },
          friendship: 128
        },
        {
          level: 5,
          species: 147,
          gender: '♀',
          item: 140,
          moves: [
            213,
            86,
            239,
            58
          ],
          stats: {
            hp: 21,
            attack: 13,
            defense: 11,
            spclAtk: 12,
            spclDef: 12,
            speed: 12
          },
          friendship: 128
        },
        {
          level: 5,
          species: 4,
          gender: '♂',
          item: 109,
          moves: [
            213,
            184,
            44,
            53
          ],
          stats: {
            hp: 21,
            attack: 12,
            defense: 11,
            spclAtk: 13,
            spclDef: 12,
            speed: 13
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Teacher Tina',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 90,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 180,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 5,
          species: 133,
          gender: '♂',
          item: 174,
          moves: [
            98,
            44,
            175,
            174
          ],
          stats: {
            hp: 23,
            attack: 12,
            defense: 12,
            spclAtk: 11,
            spclDef: 13,
            speed: 12
          },
          friendship: 128
        },
        {
          level: 5,
          species: 177,
          gender: '♀',
          item: 3,
          moves: [
            98,
            94,
            202,
            174
          ],
          stats: {
            hp: 21,
            attack: 12,
            defense: 11,
            spclAtk: 14,
            spclDef: 11,
            speed: 14
          },
          friendship: 128
        },
        {
          level: 5,
          species: 77,
          gender: '♀',
          item: 139,
          moves: [
            98,
            172,
            24,
            174
          ],
          stats: {
            hp: 22,
            attack: 15,
            defense: 12,
            spclAtk: 13,
            spclDef: 13,
            speed: 16
          },
          friendship: 128
        },
        {
          level: 5,
          species: 19,
          gender: '♀',
          item: 109,
          moves: [
            98,
            162,
            91,
            174
          ],
          stats: {
            hp: 20,
            attack: 12,
            defense: 10,
            spclAtk: 9,
            spclDef: 10,
            speed: 14
          },
          friendship: 128
        },
        {
          level: 5,
          species: 84,
          gender: '♀',
          item: 140,
          moves: [
            98,
            65,
            211,
            174
          ],
          stats: {
            hp: 21,
            attack: 15,
            defense: 11,
            spclAtk: 10,
            spclDef: 10,
            speed: 14
          },
          friendship: 128
        },
        {
          level: 5,
          species: 236,
          gender: '♂',
          item: 82,
          moves: [
            183,
            70,
            189,
            174
          ],
          stats: {
            hp: 21,
            attack: 11,
            defense: 11,
            spclAtk: 11,
            spclDef: 11,
            speed: 11
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Pokéfan Rex',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 120,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 180,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 5,
          species: 239,
          gender: '♂',
          item: 139,
          moves: [
            85,
            94,
            8,
            238
          ],
          stats: {
            hp: 22,
            attack: 13,
            defense: 11,
            spclAtk: 13,
            spclDef: 12,
            speed: 16
          },
          friendship: 128
        },
        {
          level: 5,
          species: 137,
          gender: '',
          item: 73,
          moves: [
            160,
            161,
            94,
            105
          ],
          stats: {
            hp: 24,
            attack: 13,
            defense: 14,
            spclAtk: 15,
            spclDef: 14,
            speed: 11
          },
          friendship: 128
        },
        {
          level: 5,
          species: 95,
          gender: '♂',
          item: 140,
          moves: [
            89,
            157,
            34,
            231
          ],
          stats: {
            hp: 21,
            attack: 11,
            defense: 23,
            spclAtk: 10,
            spclDef: 11,
            speed: 14
          },
          friendship: 128
        },
        {
          level: 5,
          species: 79,
          gender: '♀',
          item: 174,
          moves: [
            57,
            94,
            89,
            58
          ],
          stats: {
            hp: 26,
            attack: 13,
            defense: 13,
            spclAtk: 11,
            spclDef: 11,
            speed: 8
          },
          friendship: 128
        },
        {
          level: 5,
          species: 123,
          gender: '♂',
          item: 82,
          moves: [
            17,
            211,
            179,
            63
          ],
          stats: {
            hp: 23,
            attack: 18,
            defense: 15,
            spclAtk: 12,
            spclDef: 15,
            speed: 17
          },
          friendship: 128
        },
        {
          level: 5,
          species: 113,
          gender: '♀',
          item: 119,
          moves: [
            85,
            58,
            68,
            135
          ],
          stats: {
            hp: 42,
            attack: 7,
            defense: 7,
            spclAtk: 10,
            spclDef: 17,
            speed: 12
          },
          friendship: 128
        }
      ]
    }
  ],
  'prime-r2': [
    {
      name: 'Lass Terry',
      ai: {
        randomFitness: true,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 128,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 100,
          species: 182,
          gender: '♂',
          item: 83,
          moves: [
            80,
            216,
            213,
            102
          ],
          stats: {
            hp: 320,
            attack: 231,
            defense: 239,
            spclAtk: 249,
            spclDef: 269,
            speed: 171
          },
          friendship: 180
        },
        {
          level: 100,
          species: 242,
          gender: '♀',
          item: 73,
          moves: [
            86,
            115,
            213,
            94
          ],
          stats: {
            hp: 680,
            attack: 91,
            defense: 89,
            spclAtk: 219,
            spclDef: 339,
            speed: 181
          },
          friendship: 128
        },
        {
          level: 100,
          species: 232,
          gender: '♂',
          item: 108,
          moves: [
            213,
            89,
            237,
            36
          ],
          stats: {
            hp: 340,
            attack: 309,
            defense: 311,
            spclAtk: 191,
            spclDef: 191,
            speed: 169
          },
          friendship: 128
        },
        {
          level: 100,
          species: 208,
          gender: '♂',
          item: 3,
          moves: [
            70,
            91,
            213,
            242
          ],
          stats: {
            hp: 320,
            attack: 241,
            defense: 469,
            spclAtk: 179,
            spclDef: 199,
            speed: 131
          },
          friendship: 128
        },
        {
          level: 100,
          species: 189,
          gender: '♀',
          item: 82,
          moves: [
            202,
            29,
            213,
            78
          ],
          stats: {
            hp: 320,
            attack: 169,
            defense: 209,
            spclAtk: 179,
            spclDef: 239,
            speed: 291
          },
          friendship: 128
        },
        {
          level: 100,
          species: 241,
          gender: '♀',
          item: 140,
          moves: [
            70,
            69,
            213,
            215
          ],
          stats: {
            hp: 350,
            attack: 229,
            defense: 281,
            spclAtk: 151,
            spclDef: 211,
            speed: 269
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Blackbelt Yang',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: true,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 53,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 100,
          species: 202,
          gender: '♀',
          item: 102,
          moves: [
            68,
            243,
            194,
            219
          ],
          stats: {
            hp: 550,
            attack: 125,
            defense: 185,
            spclAtk: 135,
            spclDef: 185,
            speed: 137
          },
          friendship: 128
        },
        {
          level: 100,
          species: 9,
          gender: '♂',
          item: 146,
          moves: [
            68,
            70,
            89,
            231
          ],
          stats: {
            hp: 328,
            attack: 237,
            defense: 269,
            spclAtk: 239,
            spclDef: 279,
            speed: 227
          },
          friendship: 128
        },
        {
          level: 100,
          species: 73,
          gender: '♂',
          item: 3,
          moves: [
            243,
            56,
            188,
            112
          ],
          stats: {
            hp: 320,
            attack: 209,
            defense: 201,
            spclAtk: 231,
            spclDef: 311,
            speed: 269
          },
          friendship: 128
        },
        {
          level: 100,
          species: 57,
          gender: '♀',
          item: 83,
          moves: [
            238,
            68,
            87,
            103
          ],
          stats: {
            hp: 300,
            attack: 269,
            defense: 189,
            spclAtk: 189,
            spclDef: 209,
            speed: 261
          },
          friendship: 128
        },
        {
          level: 100,
          species: 214,
          gender: '♂',
          item: 119,
          moves: [
            224,
            179,
            29,
            203
          ],
          stats: {
            hp: 330,
            attack: 321,
            defense: 219,
            spclAtk: 149,
            spclDef: 259,
            speed: 241
          },
          friendship: 128
        },
        {
          level: 100,
          species: 62,
          gender: '♂',
          item: 73,
          moves: [
            66,
            170,
            90,
            57
          ],
          stats: {
            hp: 340,
            attack: 239,
            defense: 261,
            spclAtk: 211,
            spclDef: 251,
            speed: 209
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Bird Keeper Adam',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 153,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 153,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 100,
          species: 149,
          gender: '♂',
          item: 109,
          moves: [
            85,
            58,
            245,
            63
          ],
          stats: {
            hp: 355,
            attack: 342,
            defense: 262,
            spclAtk: 272,
            spclDef: 272,
            speed: 234
          },
          friendship: 255
        },
        {
          level: 100,
          species: 178,
          gender: '♂',
          item: 119,
          moves: [
            94,
            109,
            101,
            65
          ],
          stats: {
            hp: 293,
            attack: 222,
            defense: 214,
            spclAtk: 264,
            spclDef: 214,
            speed: 262
          },
          friendship: 0
        },
        {
          level: 100,
          species: 142,
          gender: '♂',
          item: 174,
          moves: [
            126,
            231,
            89,
            63
          ],
          stats: {
            hp: 323,
            attack: 282,
            defense: 204,
            spclAtk: 194,
            spclDef: 224,
            speed: 332
          },
          friendship: 0
        },
        {
          level: 100,
          species: 146,
          gender: '',
          item: 77,
          moves: [
            126,
            143,
            63,
            211
          ],
          stats: {
            hp: 353,
            attack: 274,
            defense: 252,
            spclAtk: 322,
            spclDef: 242,
            speed: 254
          },
          friendship: 0
        },
        {
          level: 100,
          species: 145,
          gender: '',
          item: 73,
          moves: [
            85,
            65,
            86,
            189
          ],
          stats: {
            hp: 343,
            attack: 252,
            defense: 244,
            spclAtk: 324,
            spclDef: 254,
            speed: 272
          },
          friendship: 0
        },
        {
          level: 100,
          species: 144,
          gender: '',
          item: 146,
          moves: [
            59,
            115,
            211,
            196
          ],
          stats: {
            hp: 343,
            attack: 242,
            defense: 270,
            spclAtk: 260,
            spclDef: 320,
            speed: 242
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Cooltrainer♀ Floria',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 53,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 178,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 178,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 100,
          species: 97,
          gender: '♀',
          item: 119,
          moves: [
            95,
            94,
            161,
            69
          ],
          stats: {
            hp: 347,
            attack: 212,
            defense: 216,
            spclAtk: 222,
            spclDef: 306,
            speed: 208
          },
          friendship: 0
        },
        {
          level: 100,
          species: 103,
          gender: '♀',
          item: 117,
          moves: [
            79,
            94,
            72,
            235
          ],
          stats: {
            hp: 373,
            attack: 256,
            defense: 244,
            spclAtk: 324,
            spclDef: 204,
            speed: 186
          },
          friendship: 0
        },
        {
          level: 100,
          species: 78,
          gender: '♂',
          item: 104,
          moves: [
            95,
            126,
            34,
            115
          ],
          stats: {
            hp: 309,
            attack: 274,
            defense: 216,
            spclAtk: 234,
            spclDef: 234,
            speed: 288
          },
          friendship: 0
        },
        {
          level: 100,
          species: 186,
          gender: '♂',
          item: 73,
          moves: [
            95,
            94,
            56,
            89
          ],
          stats: {
            hp: 359,
            attack: 224,
            defense: 226,
            spclAtk: 254,
            spclDef: 274,
            speed: 218
          },
          friendship: 0
        },
        {
          level: 100,
          species: 122,
          gender: '♂',
          item: 174,
          moves: [
            95,
            94,
            85,
            7
          ],
          stats: {
            hp: 259,
            attack: 164,
            defense: 206,
            spclAtk: 274,
            spclDef: 314,
            speed: 258
          },
          friendship: 0
        },
        {
          level: 100,
          species: 196,
          gender: '♂',
          item: 96,
          moves: [
            94,
            44,
            204,
            234
          ],
          stats: {
            hp: 309,
            attack: 204,
            defense: 196,
            spclAtk: 334,
            spclDef: 264,
            speed: 298
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Fisherman Chase',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 53,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 153,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 100,
          species: 139,
          gender: '♂',
          item: 3,
          moves: [
            58,
            69,
            246,
            240
          ],
          stats: {
            hp: 322,
            attack: 197,
            defense: 329,
            spclAtk: 307,
            spclDef: 217,
            speed: 191
          },
          friendship: 128
        },
        {
          level: 100,
          species: 160,
          gender: '♂',
          item: 119,
          moves: [
            240,
            56,
            157,
            242
          ],
          stats: {
            hp: 352,
            attack: 287,
            defense: 279,
            spclAtk: 235,
            spclDef: 243,
            speed: 237
          },
          friendship: 128
        },
        {
          level: 100,
          species: 171,
          gender: '♂',
          item: 140,
          moves: [
            240,
            87,
            56,
            86
          ],
          stats: {
            hp: 432,
            attack: 193,
            defense: 195,
            spclAtk: 229,
            spclDef: 229,
            speed: 215
          },
          friendship: 128
        },
        {
          level: 100,
          species: 110,
          gender: '♂',
          item: 73,
          moves: [
            87,
            153,
            194,
            188
          ],
          stats: {
            hp: 312,
            attack: 257,
            defense: 319,
            spclAtk: 247,
            spclDef: 217,
            speed: 201
          },
          friendship: 128
        },
        {
          level: 100,
          species: 195,
          gender: '♂',
          item: 146,
          moves: [
            240,
            89,
            57,
            8
          ],
          stats: {
            hp: 372,
            attack: 247,
            defense: 249,
            spclAtk: 207,
            spclDef: 207,
            speed: 151
          },
          friendship: 128
        },
        {
          level: 100,
          species: 80,
          gender: '♀',
          item: 95,
          moves: [
            86,
            57,
            34,
            240
          ],
          stats: {
            hp: 372,
            attack: 219,
            defense: 299,
            spclAtk: 281,
            spclDef: 241,
            speed: 137
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Scientist Craig',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 53,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 178,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 178,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 178,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 100,
          species: 121,
          gender: '',
          item: 109,
          moves: [
            85,
            94,
            58,
            109
          ],
          stats: {
            hp: 290,
            attack: 229,
            defense: 247,
            spclAtk: 281,
            spclDef: 251,
            speed: 309
          },
          friendship: 0
        },
        {
          level: 100,
          species: 197,
          gender: '♂',
          item: 3,
          moves: [
            109,
            34,
            44,
            94
          ],
          stats: {
            hp: 360,
            attack: 209,
            defense: 301,
            spclAtk: 197,
            spclDef: 337,
            speed: 209
          },
          friendship: 0
        },
        {
          level: 100,
          species: 200,
          gender: '♀',
          item: 174,
          moves: [
            109,
            94,
            212,
            194
          ],
          stats: {
            hp: 310,
            attack: 189,
            defense: 197,
            spclAtk: 247,
            spclDef: 247,
            speed: 251
          },
          friendship: 0
        },
        {
          level: 100,
          species: 234,
          gender: '♂',
          item: 146,
          moves: [
            109,
            89,
            218,
            115
          ],
          stats: {
            hp: 320,
            attack: 269,
            defense: 205,
            spclAtk: 251,
            spclDef: 211,
            speed: 247
          },
          friendship: 0
        },
        {
          level: 100,
          species: 169,
          gender: '♂',
          item: 119,
          moves: [
            109,
            103,
            72,
            44
          ],
          stats: {
            hp: 350,
            attack: 257,
            defense: 239,
            spclAtk: 219,
            spclDef: 239,
            speed: 341
          },
          friendship: 0
        },
        {
          level: 100,
          species: 101,
          gender: '',
          item: 82,
          moves: [
            86,
            85,
            207,
            153
          ],
          stats: {
            hp: 302,
            attack: 177,
            defense: 219,
            spclAtk: 241,
            spclDef: 241,
            speed: 357
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Skier Kathy',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 53,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 153,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          153,
          128,
          153,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 153,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 100,
          species: 245,
          gender: '',
          item: 95,
          moves: [
            196,
            59,
            57,
            243
          ],
          stats: {
            hp: 389,
            attack: 230,
            defense: 314,
            spclAtk: 260,
            spclDef: 310,
            speed: 252
          },
          friendship: 0
        },
        {
          level: 100,
          species: 248,
          gender: '♂',
          item: 109,
          moves: [
            242,
            58,
            126,
            63
          ],
          stats: {
            hp: 377,
            attack: 350,
            defense: 300,
            spclAtk: 270,
            spclDef: 280,
            speed: 206
          },
          friendship: 0
        },
        {
          level: 100,
          species: 143,
          gender: '♂',
          item: 146,
          moves: [
            94,
            216,
            85,
            89
          ],
          stats: {
            hp: 505,
            attack: 300,
            defense: 212,
            spclAtk: 214,
            spclDef: 304,
            speed: 140
          },
          friendship: 251
        },
        {
          level: 100,
          species: 230,
          gender: '♀',
          item: 119,
          moves: [
            225,
            58,
            196,
            57
          ],
          stats: {
            hp: 339,
            attack: 262,
            defense: 270,
            spclAtk: 270,
            spclDef: 270,
            speed: 256
          },
          friendship: 0
        },
        {
          level: 100,
          species: 212,
          gender: '♂',
          item: 174,
          moves: [
            14,
            179,
            211,
            97
          ],
          stats: {
            hp: 313,
            attack: 338,
            defense: 284,
            spclAtk: 194,
            spclDef: 244,
            speed: 212
          },
          friendship: 0
        },
        {
          level: 100,
          species: 135,
          gender: '♂',
          item: 82,
          moves: [
            85,
            86,
            44,
            115
          ],
          stats: {
            hp: 303,
            attack: 208,
            defense: 204,
            spclAtk: 304,
            spclDef: 274,
            speed: 342
          },
          friendship: 0
        }
      ]
    },
    {
      name: 'Cooltrainer♂ Marty',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 53,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 178,
        desireToInflictSleep: 153,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 153,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 153,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 153,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 100,
          species: 251,
          gender: '',
          item: 109,
          moves: [
            202,
            73,
            94,
            237
          ],
          stats: {
            hp: 371,
            attack: 284,
            defense: 284,
            spclAtk: 286,
            spclDef: 286,
            speed: 282
          },
          friendship: 0
        },
        {
          level: 100,
          species: 53,
          gender: '♀',
          item: 82,
          moves: [
            95,
            34,
            85,
            44
          ],
          stats: {
            hp: 318,
            attack: 215,
            defense: 205,
            spclAtk: 217,
            spclDef: 217,
            speed: 317
          },
          friendship: 0
        },
        {
          level: 100,
          species: 94,
          gender: '♂',
          item: 78,
          moves: [
            109,
            101,
            95,
            194
          ],
          stats: {
            hp: 308,
            attack: 213,
            defense: 205,
            spclAtk: 347,
            spclDef: 237,
            speed: 307
          },
          friendship: 0
        },
        {
          level: 100,
          species: 68,
          gender: '♂',
          item: 119,
          moves: [
            238,
            63,
            89,
            193
          ],
          stats: {
            hp: 368,
            attack: 343,
            defense: 245,
            spclAtk: 217,
            spclDef: 257,
            speed: 197
          },
          friendship: 0
        },
        {
          level: 100,
          species: 131,
          gender: '♀',
          item: 146,
          moves: [
            109,
            34,
            85,
            156
          ],
          stats: {
            hp: 452,
            attack: 245,
            defense: 243,
            spclAtk: 253,
            spclDef: 273,
            speed: 205
          },
          friendship: 0
        },
        {
          level: 100,
          species: 243,
          gender: '',
          item: 73,
          moves: [
            85,
            91,
            115,
            242
          ],
          stats: {
            hp: 368,
            attack: 253,
            defense: 235,
            spclAtk: 317,
            spclDef: 287,
            speed: 317
          },
          friendship: 0
        }
      ]
    }
  ],
  'violet-r2': [
    {
      name: 'Bird Keeper Matt',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 100,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 140,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 17,
          gender: '♂',
          item: 77,
          moves: [
            119,
            16,
            98,
            211
          ],
          stats: {
            hp: 147,
            attack: 95,
            defense: 92,
            spclAtk: 87,
            spclDef: 87,
            speed: 101
          },
          friendship: 128
        },
        {
          level: 50,
          species: 176,
          gender: '♂',
          item: 78,
          moves: [
            119,
            94,
            126,
            192
          ],
          stats: {
            hp: 147,
            attack: 70,
            defense: 122,
            spclAtk: 117,
            spclDef: 142,
            speed: 70
          },
          friendship: 128
        },
        {
          level: 50,
          species: 22,
          gender: '♀',
          item: 84,
          moves: [
            119,
            65,
            161,
            98
          ],
          stats: {
            hp: 157,
            attack: 120,
            defense: 102,
            spclAtk: 98,
            spclDef: 98,
            speed: 130
          },
          friendship: 128
        },
        {
          level: 50,
          species: 83,
          gender: '♂',
          item: 105,
          moves: [
            119,
            19,
            163,
            175
          ],
          stats: {
            hp: 136,
            attack: 100,
            defense: 92,
            spclAtk: 95,
            spclDef: 99,
            speed: 90
          },
          friendship: 128
        },
        {
          level: 50,
          species: 164,
          gender: '♀',
          item: 143,
          moves: [
            119,
            36,
            211,
            93
          ],
          stats: {
            hp: 192,
            attack: 80,
            defense: 87,
            spclAtk: 113,
            spclDef: 133,
            speed: 100
          },
          friendship: 128
        },
        {
          level: 50,
          species: 198,
          gender: '♀',
          item: 102,
          moves: [
            119,
            65,
            185,
            98
          ],
          stats: {
            hp: 152,
            attack: 115,
            defense: 79,
            spclAtk: 122,
            spclDef: 79,
            speed: 121
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Falkner',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: true,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 100,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 180,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 18,
          gender: '♂',
          item: 78,
          moves: [
            189,
            38,
            211,
            143
          ],
          stats: {
            hp: 179,
            attack: 119,
            defense: 110,
            spclAtk: 105,
            spclDef: 105,
            speed: 125
          },
          friendship: 255
        },
        {
          level: 50,
          species: 85,
          gender: '♂',
          item: 109,
          moves: [
            189,
            161,
            65,
            143
          ],
          stats: {
            hp: 148,
            attack: 146,
            defense: 105,
            spclAtk: 95,
            spclDef: 95,
            speed: 134
          },
          friendship: 128
        },
        {
          level: 50,
          species: 207,
          gender: '♀',
          item: 119,
          moves: [
            17,
            232,
            188,
            98
          ],
          stats: {
            hp: 153,
            attack: 109,
            defense: 140,
            spclAtk: 70,
            spclDef: 100,
            speed: 119
          },
          friendship: 128
        },
        {
          level: 50,
          species: 6,
          gender: '♂',
          item: 140,
          moves: [
            189,
            53,
            19,
            89
          ],
          stats: {
            hp: 166,
            attack: 118,
            defense: 113,
            spclAtk: 144,
            spclDef: 120,
            speed: 134
          },
          friendship: 128
        },
        {
          level: 50,
          species: 227,
          gender: '♀',
          item: 73,
          moves: [
            189,
            211,
            65,
            143
          ],
          stats: {
            hp: 153,
            attack: 114,
            defense: 175,
            spclAtk: 75,
            spclDef: 105,
            speed: 104
          },
          friendship: 128
        },
        {
          level: 50,
          species: 145,
          gender: '',
          item: 3,
          moves: [
            189,
            85,
            65,
            143
          ],
          stats: {
            hp: 178,
            attack: 128,
            defense: 120,
            spclAtk: 160,
            spclDef: 125,
            speed: 134
          },
          friendship: 255
        }
      ]
    }
  ],
  'azalea-r2': [
    {
      name: 'Bug Catcher Chaz',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 55,
        weightToSecondaryEffects: 170,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 140,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 15,
          gender: '♀',
          item: 83,
          moves: [
            41,
            38,
            188,
            97
          ],
          stats: {
            hp: 157,
            attack: 112,
            defense: 73,
            spclAtk: 78,
            spclDef: 113,
            speed: 107
          },
          friendship: 255
        },
        {
          level: 50,
          species: 192,
          gender: '♂',
          item: 81,
          moves: [
            75,
            188,
            202,
            74
          ],
          stats: {
            hp: 159,
            attack: 110,
            defense: 88,
            spclAtk: 138,
            spclDef: 118,
            speed: 62
          },
          friendship: 128
        },
        {
          level: 50,
          species: 12,
          gender: '♀',
          item: 78,
          moves: [
            60,
            16,
            202,
            18
          ],
          stats: {
            hp: 152,
            attack: 77,
            defense: 83,
            spclAtk: 113,
            spclDef: 113,
            speed: 102
          },
          friendship: 128
        },
        {
          level: 50,
          species: 27,
          gender: '♂',
          item: 76,
          moves: [
            89,
            163,
            231,
            68
          ],
          stats: {
            hp: 134,
            attack: 110,
            defense: 118,
            spclAtk: 53,
            spclDef: 63,
            speed: 72
          },
          friendship: 128
        },
        {
          level: 50,
          species: 193,
          gender: '♂',
          item: 82,
          moves: [
            17,
            129,
            179,
            193
          ],
          stats: {
            hp: 149,
            attack: 100,
            defense: 78,
            spclAtk: 108,
            spclDef: 78,
            speed: 127
          },
          friendship: 128
        },
        {
          level: 50,
          species: 206,
          gender: '♀',
          item: 84,
          moves: [
            91,
            53,
            85,
            137
          ],
          stats: {
            hp: 192,
            attack: 102,
            defense: 103,
            spclAtk: 98,
            spclDef: 98,
            speed: 77
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Twins Min & Lyn',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 130,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 180,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 166,
          gender: '♂',
          item: 78,
          moves: [
            230,
            205,
            202,
            113
          ],
          stats: {
            hp: 139,
            attack: 70,
            defense: 87,
            spclAtk: 92,
            spclDef: 147,
            speed: 115
          },
          friendship: 128
        },
        {
          level: 50,
          species: 133,
          gender: '♂',
          item: 113,
          moves: [
            204,
            247,
            38,
            175
          ],
          stats: {
            hp: 147,
            attack: 85,
            defense: 87,
            spclAtk: 82,
            spclDef: 102,
            speed: 85
          },
          friendship: 128
        },
        {
          level: 50,
          species: 77,
          gender: '♂',
          item: 143,
          moves: [
            204,
            126,
            36,
            231
          ],
          stats: {
            hp: 134,
            attack: 120,
            defense: 92,
            spclAtk: 102,
            spclDef: 102,
            speed: 120
          },
          friendship: 128
        },
        {
          level: 50,
          species: 204,
          gender: '♂',
          item: 84,
          moves: [
            230,
            205,
            202,
            115
          ],
          stats: {
            hp: 134,
            attack: 100,
            defense: 127,
            spclAtk: 72,
            spclDef: 72,
            speed: 45
          },
          friendship: 128
        },
        {
          level: 50,
          species: 209,
          gender: '♀',
          item: 170,
          moves: [
            204,
            242,
            29,
            122
          ],
          stats: {
            hp: 152,
            attack: 110,
            defense: 87,
            spclAtk: 77,
            spclDef: 77,
            speed: 60
          },
          friendship: 128
        },
        {
          level: 50,
          species: 30,
          gender: '♀',
          item: 83,
          moves: [
            204,
            34,
            24,
            50
          ],
          stats: {
            hp: 162,
            attack: 92,
            defense: 104,
            spclAtk: 92,
            spclDef: 92,
            speed: 86
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Bugsy',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 120,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 100,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 123,
          gender: '♂',
          item: 82,
          moves: [
            17,
            211,
            179,
            63
          ],
          stats: {
            hp: 160,
            attack: 150,
            defense: 117,
            spclAtk: 94,
            spclDef: 119,
            speed: 142
          },
          friendship: 255
        },
        {
          level: 50,
          species: 214,
          gender: '♂',
          item: 119,
          moves: [
            224,
            179,
            36,
            89
          ],
          stats: {
            hp: 176,
            attack: 164,
            defense: 110,
            spclAtk: 79,
            spclDef: 134,
            speed: 119
          },
          friendship: 128
        },
        {
          level: 50,
          species: 127,
          gender: '♂',
          item: 140,
          moves: [
            210,
            66,
            34,
            69
          ],
          stats: {
            hp: 161,
            attack: 164,
            defense: 135,
            spclAtk: 94,
            spclDef: 109,
            speed: 119
          },
          friendship: 128
        },
        {
          level: 50,
          species: 195,
          gender: '♀',
          item: 3,
          moves: [
            57,
            89,
            246,
            114
          ],
          stats: {
            hp: 183,
            attack: 119,
            defense: 120,
            spclAtk: 100,
            spclDef: 100,
            speed: 69
          },
          friendship: 128
        },
        {
          level: 50,
          species: 185,
          gender: '♀',
          item: 73,
          moves: [
            157,
            89,
            67,
            70
          ],
          stats: {
            hp: 158,
            attack: 134,
            defense: 150,
            spclAtk: 65,
            spclDef: 100,
            speed: 64
          },
          friendship: 128
        },
        {
          level: 50,
          species: 20,
          gender: '♀',
          item: 109,
          moves: [
            158,
            162,
            179,
            46
          ],
          stats: {
            hp: 143,
            attack: 115,
            defense: 95,
            spclAtk: 85,
            spclDef: 105,
            speed: 131
          },
          friendship: 128
        }
      ]
    }
  ],
  'goldenrod-r2': [
    {
      name: 'Lass Lois',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 128,
        weightToDamageByPlayer: 128,
        weightToSecondaryEffects: 180,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 162,
          gender: '♂',
          item: 84,
          moves: [
            21,
            179,
            91,
            98
          ],
          stats: {
            hp: 169,
            attack: 111,
            defense: 97,
            spclAtk: 78,
            spclDef: 88,
            speed: 122
          },
          friendship: 128
        },
        {
          level: 50,
          species: 137,
          gender: '',
          item: 108,
          moves: [
            161,
            160,
            94,
            85
          ],
          stats: {
            hp: 149,
            attack: 95,
            defense: 103,
            spclAtk: 118,
            spclDef: 108,
            speed: 72
          },
          friendship: 128
        },
        {
          level: 50,
          species: 51,
          gender: '♂',
          item: 83,
          moves: [
            222,
            161,
            157,
            28
          ],
          stats: {
            hp: 119,
            attack: 115,
            defense: 83,
            spclAtk: 83,
            spclDef: 103,
            speed: 152
          },
          friendship: 128
        },
        {
          level: 50,
          species: 189,
          gender: '♀',
          item: 78,
          moves: [
            202,
            29,
            93,
            76
          ],
          stats: {
            hp: 167,
            attack: 87,
            defense: 103,
            spclAtk: 88,
            spclDef: 118,
            speed: 142
          },
          friendship: 128
        },
        {
          level: 50,
          species: 222,
          gender: '♀',
          item: 119,
          moves: [
            61,
            157,
            94,
            243
          ],
          stats: {
            hp: 147,
            attack: 87,
            defense: 118,
            spclAtk: 98,
            spclDef: 118,
            speed: 67
          },
          friendship: 128
        },
        {
          level: 50,
          species: 190,
          gender: '♀',
          item: 117,
          moves: [
            129,
            231,
            247,
            68
          ],
          stats: {
            hp: 147,
            attack: 102,
            defense: 88,
            spclAtk: 73,
            spclDef: 88,
            speed: 117
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Beauty Rita',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 100,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 180,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 150,
        desireToInflictInfatuation: 250,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          170
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 150,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 25,
          gender: '♂',
          item: 84,
          moves: [
            213,
            217,
            98,
            104
          ],
          stats: {
            hp: 127,
            attack: 98,
            defense: 63,
            spclAtk: 83,
            spclDef: 73,
            speed: 122
          },
          friendship: 128
        },
        {
          level: 50,
          species: 176,
          gender: '♂',
          item: 79,
          moves: [
            213,
            217,
            227,
            104
          ],
          stats: {
            hp: 139,
            attack: 84,
            defense: 118,
            spclAtk: 113,
            spclDef: 138,
            speed: 72
          },
          friendship: 128
        },
        {
          level: 50,
          species: 36,
          gender: '♀',
          item: 78,
          moves: [
            213,
            217,
            247,
            107
          ],
          stats: {
            hp: 187,
            attack: 111,
            defense: 106,
            spclAtk: 118,
            spclDef: 123,
            speed: 92
          },
          friendship: 128
        },
        {
          level: 50,
          species: 40,
          gender: '♀',
          item: 83,
          moves: [
            213,
            217,
            247,
            104
          ],
          stats: {
            hp: 232,
            attack: 111,
            defense: 78,
            spclAtk: 108,
            spclDef: 83,
            speed: 77
          },
          friendship: 128
        },
        {
          level: 50,
          species: 184,
          gender: '♂',
          item: 74,
          moves: [
            213,
            217,
            250,
            104
          ],
          stats: {
            hp: 192,
            attack: 91,
            defense: 113,
            spclAtk: 83,
            spclDef: 113,
            speed: 82
          },
          friendship: 128
        },
        {
          level: 50,
          species: 225,
          gender: '♂',
          item: 139,
          moves: [
            213,
            217,
            174,
            104
          ],
          stats: {
            hp: 137,
            attack: 98,
            defense: 78,
            spclAtk: 98,
            spclDef: 78,
            speed: 107
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Whitney',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 90,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 150,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          170,
          128,
          128,
          128,
          128,
          128,
          240
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 170,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 241,
          gender: '♀',
          item: 82,
          moves: [
            23,
            89,
            179,
            208
          ],
          stats: {
            hp: 191,
            attack: 117,
            defense: 140,
            spclAtk: 75,
            spclDef: 105,
            speed: 134
          },
          friendship: 255
        },
        {
          level: 50,
          species: 55,
          gender: '♂',
          item: 3,
          moves: [
            57,
            94,
            58,
            238
          ],
          stats: {
            hp: 168,
            attack: 118,
            defense: 113,
            spclAtk: 130,
            spclDef: 115,
            speed: 119
          },
          friendship: 128
        },
        {
          level: 50,
          species: 53,
          gender: '♂',
          item: 140,
          moves: [
            163,
            247,
            85,
            46
          ],
          stats: {
            hp: 153,
            attack: 106,
            defense: 95,
            spclAtk: 100,
            spclDef: 100,
            speed: 149
          },
          friendship: 128
        },
        {
          level: 50,
          species: 232,
          gender: '♀',
          item: 73,
          moves: [
            89,
            246,
            38,
            175
          ],
          stats: {
            hp: 178,
            attack: 154,
            defense: 155,
            spclAtk: 95,
            spclDef: 95,
            speed: 84
          },
          friendship: 128
        },
        {
          level: 50,
          species: 122,
          gender: '♀',
          item: 109,
          moves: [
            94,
            104,
            96,
            226
          ],
          stats: {
            hp: 128,
            attack: 79,
            defense: 100,
            spclAtk: 135,
            spclDef: 155,
            speed: 124
          },
          friendship: 128
        },
        {
          level: 50,
          species: 128,
          gender: '♂',
          item: 119,
          moves: [
            23,
            89,
            231,
            184
          ],
          stats: {
            hp: 163,
            attack: 136,
            defense: 130,
            spclAtk: 75,
            spclDef: 105,
            speed: 144
          },
          friendship: 128
        }
      ]
    }
  ],
  'ecruteak-r2': [
    {
      name: 'Medium Holly',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 55,
        weightToSecondaryEffects: 170,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 140,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 92,
          gender: '♀',
          item: 113,
          moves: [
            94,
            101,
            202,
            180
          ],
          stats: {
            hp: 118,
            attack: 69,
            defense: 65,
            spclAtk: 135,
            spclDef: 70,
            speed: 114
          },
          friendship: 255
        },
        {
          level: 50,
          species: 164,
          gender: '♂',
          item: 78,
          moves: [
            36,
            17,
            185,
            193
          ],
          stats: {
            hp: 188,
            attack: 86,
            defense: 85,
            spclAtk: 111,
            spclDef: 131,
            speed: 104
          },
          friendship: 128
        },
        {
          level: 50,
          species: 70,
          gender: '♀',
          item: 84,
          moves: [
            75,
            227,
            21,
            188
          ],
          stats: {
            hp: 153,
            attack: 124,
            defense: 85,
            spclAtk: 120,
            spclDef: 80,
            speed: 89
          },
          friendship: 128
        },
        {
          level: 50,
          species: 211,
          gender: '♀',
          item: 83,
          moves: [
            57,
            188,
            58,
            175
          ],
          stats: {
            hp: 153,
            attack: 129,
            defense: 110,
            spclAtk: 90,
            spclDef: 90,
            speed: 119
          },
          friendship: 128
        },
        {
          level: 50,
          species: 119,
          gender: '♂',
          item: 174,
          moves: [
            127,
            30,
            60,
            114
          ],
          stats: {
            hp: 168,
            attack: 128,
            defense: 100,
            spclAtk: 100,
            spclDef: 115,
            speed: 102
          },
          friendship: 128
        },
        {
          level: 50,
          species: 132,
          gender: '',
          item: 35,
          moves: [
            144,
            0,
            0,
            0
          ],
          stats: {
            hp: 146,
            attack: 83,
            defense: 83,
            spclAtk: 83,
            spclDef: 83,
            speed: 83
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Sage Ty',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 30,
        weightToDamageByPlayer: 70,
        weightToSecondaryEffects: 240,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          240
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 93,
          gender: '♀',
          item: 78,
          moves: [
            104,
            212,
            174,
            247
          ],
          stats: {
            hp: 138,
            attack: 81,
            defense: 83,
            spclAtk: 153,
            spclDef: 93,
            speed: 126
          },
          friendship: 128
        },
        {
          level: 50,
          species: 88,
          gender: '♂',
          item: 84,
          moves: [
            189,
            212,
            192,
            8
          ],
          stats: {
            hp: 165,
            attack: 116,
            defense: 88,
            spclAtk: 78,
            spclDef: 88,
            speed: 56
          },
          friendship: 128
        },
        {
          level: 50,
          species: 124,
          gender: '♀',
          item: 80,
          moves: [
            189,
            212,
            223,
            247
          ],
          stats: {
            hp: 158,
            attack: 81,
            defense: 73,
            spclAtk: 153,
            spclDef: 133,
            speed: 126
          },
          friendship: 128
        },
        {
          level: 50,
          species: 42,
          gender: '♂',
          item: 83,
          moves: [
            104,
            212,
            211,
            185
          ],
          stats: {
            hp: 160,
            attack: 116,
            defense: 108,
            spclAtk: 103,
            spclDef: 113,
            speed: 121
          },
          friendship: 128
        },
        {
          level: 50,
          species: 89,
          gender: '♂',
          item: 79,
          moves: [
            189,
            212,
            192,
            8
          ],
          stats: {
            hp: 190,
            attack: 141,
            defense: 113,
            spclAtk: 103,
            spclDef: 138,
            speed: 81
          },
          friendship: 128
        },
        {
          level: 50,
          species: 198,
          gender: '♀',
          item: 74,
          moves: [
            189,
            212,
            101,
            65
          ],
          stats: {
            hp: 153,
            attack: 116,
            defense: 80,
            spclAtk: 123,
            spclDef: 80,
            speed: 122
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Morty',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 80,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 170,
        desireToInflictSleep: 150,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 140,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 150,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 94,
          gender: '♂',
          item: 82,
          moves: [
            94,
            85,
            7,
            109
          ],
          stats: {
            hp: 146,
            attack: 102,
            defense: 99,
            spclAtk: 169,
            spclDef: 114,
            speed: 148
          },
          friendship: 255
        },
        {
          level: 50,
          species: 226,
          gender: '♀',
          item: 3,
          moves: [
            57,
            17,
            58,
            109
          ],
          stats: {
            hp: 153,
            attack: 74,
            defense: 105,
            spclAtk: 115,
            spclDef: 175,
            speed: 104
          },
          friendship: 128
        },
        {
          level: 50,
          species: 210,
          gender: '♀',
          item: 140,
          moves: [
            36,
            247,
            188,
            122
          ],
          stats: {
            hp: 178,
            attack: 156,
            defense: 110,
            spclAtk: 95,
            spclDef: 95,
            speed: 79
          },
          friendship: 128
        },
        {
          level: 50,
          species: 131,
          gender: '♀',
          item: 109,
          moves: [
            57,
            58,
            85,
            34
          ],
          stats: {
            hp: 218,
            attack: 119,
            defense: 115,
            spclAtk: 120,
            spclDef: 130,
            speed: 94
          },
          friendship: 128
        },
        {
          level: 50,
          species: 200,
          gender: '♀',
          item: 119,
          moves: [
            247,
            85,
            94,
            109
          ],
          stats: {
            hp: 148,
            attack: 94,
            defense: 95,
            spclAtk: 120,
            spclDef: 120,
            speed: 119
          },
          friendship: 128
        },
        {
          level: 50,
          species: 103,
          gender: '♂',
          item: 73,
          moves: [
            94,
            202,
            38,
            78
          ],
          stats: {
            hp: 183,
            attack: 131,
            defense: 120,
            spclAtk: 160,
            spclDef: 100,
            speed: 89
          },
          friendship: 128
        }
      ]
    }
  ],
  'cianwood-r2': [
    {
      name: 'Blackbelt Nick',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 110,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 140,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 67,
          gender: '♂',
          item: 84,
          moves: [
            90,
            157,
            156,
            214
          ],
          stats: {
            hp: 170,
            attack: 136,
            defense: 109,
            spclAtk: 89,
            spclDef: 99,
            speed: 80
          },
          friendship: 128
        },
        {
          level: 50,
          species: 75,
          gender: '♂',
          item: 125,
          moves: [
            90,
            157,
            156,
            214
          ],
          stats: {
            hp: 145,
            attack: 131,
            defense: 154,
            spclAtk: 84,
            spclDef: 84,
            speed: 70
          },
          friendship: 128
        },
        {
          level: 50,
          species: 99,
          gender: '♀',
          item: 150,
          moves: [
            12,
            152,
            156,
            214
          ],
          stats: {
            hp: 153,
            attack: 159,
            defense: 154,
            spclAtk: 89,
            spclDef: 89,
            speed: 110
          },
          friendship: 128
        },
        {
          level: 50,
          species: 24,
          gender: '♂',
          item: 78,
          moves: [
            90,
            157,
            156,
            214
          ],
          stats: {
            hp: 150,
            attack: 121,
            defense: 108,
            spclAtk: 104,
            spclDef: 118,
            speed: 115
          },
          friendship: 128
        },
        {
          level: 50,
          species: 148,
          gender: '♀',
          item: 151,
          moves: [
            32,
            225,
            156,
            214
          ],
          stats: {
            hp: 159,
            attack: 113,
            defense: 104,
            spclAtk: 109,
            spclDef: 109,
            speed: 105
          },
          friendship: 128
        },
        {
          level: 50,
          species: 127,
          gender: '♀',
          item: 83,
          moves: [
            12,
            210,
            156,
            214
          ],
          stats: {
            hp: 163,
            attack: 154,
            defense: 139,
            spclAtk: 94,
            spclDef: 109,
            speed: 120
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Chuck',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 180,
        weightToDamageByPlayer: 250,
        weightToSecondaryEffects: 250,
        desireToInflictSleep: 100,
        desireToInflictPoison: 100,
        desireToInflictBurn: 100,
        desireToInflictFreeze: 100,
        desireToInflictPara: 100,
        desireToInflictFlinch: 100,
        desireToInflictConfusion: 220,
        desireToInflictInfatuation: 100,
        desireToRaiseStats: [
          250,
          100,
          100,
          100,
          100,
          100,
          100
        ],
        desireForLightScreen: 100,
        desireForMist: 100,
        desireForFocusEnergy: 100,
        desireForReflect: 100,
        desireForDisable: 100,
        desireForBatonPass: 100,
        desireToLowerStatTenPercentChance: 100
      },
      team: [
        {
          level: 50,
          species: 62,
          gender: '♂',
          item: 84,
          moves: [
            223,
            187,
            156,
            214
          ],
          stats: {
            hp: 177,
            attack: 130,
            defense: 136,
            spclAtk: 112,
            spclDef: 132,
            speed: 111
          },
          friendship: 255
        },
        {
          level: 50,
          species: 28,
          gender: '♂',
          item: 140,
          moves: [
            223,
            89,
            157,
            232
          ],
          stats: {
            hp: 171,
            attack: 142,
            defense: 149,
            spclAtk: 84,
            spclDef: 94,
            speed: 105
          },
          friendship: 128
        },
        {
          level: 50,
          species: 217,
          gender: '♂',
          item: 73,
          moves: [
            223,
            163,
            89,
            242
          ],
          stats: {
            hp: 186,
            attack: 172,
            defense: 114,
            spclAtk: 114,
            spclDef: 114,
            speed: 95
          },
          friendship: 128
        },
        {
          level: 50,
          species: 181,
          gender: '♂',
          item: 3,
          moves: [
            223,
            85,
            7,
            113
          ],
          stats: {
            hp: 186,
            attack: 117,
            defense: 114,
            spclAtk: 154,
            spclDef: 129,
            speed: 95
          },
          friendship: 128
        },
        {
          level: 50,
          species: 107,
          gender: '♂',
          item: 82,
          moves: [
            223,
            5,
            183,
            228
          ],
          stats: {
            hp: 146,
            attack: 147,
            defense: 118,
            spclAtk: 74,
            spclDef: 149,
            speed: 116
          },
          friendship: 128
        },
        {
          level: 50,
          species: 97,
          gender: '♂',
          item: 78,
          moves: [
            223,
            94,
            247,
            113
          ],
          stats: {
            hp: 181,
            attack: 115,
            defense: 109,
            spclAtk: 112,
            spclDef: 154,
            speed: 107
          },
          friendship: 128
        }
      ]
    }
  ],
  'olivine-r2': [
    {
      name: 'Gym Leader Jasmine',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 200,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 100,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 208,
          gender: '♂',
          item: 73,
          moves: [
            231,
            89,
            157,
            216
          ],
          stats: {
            hp: 162,
            attack: 127,
            defense: 240,
            spclAtk: 95,
            spclDef: 105,
            speed: 69
          },
          friendship: 255
        },
        {
          level: 50,
          species: 234,
          gender: '♀',
          item: 78,
          moves: [
            94,
            89,
            113,
            46
          ],
          stats: {
            hp: 171,
            attack: 132,
            defense: 101,
            spclAtk: 124,
            spclDef: 104,
            speed: 123
          },
          friendship: 128
        },
        {
          level: 50,
          species: 9,
          gender: '♂',
          item: 109,
          moves: [
            57,
            89,
            58,
            243
          ],
          stats: {
            hp: 169,
            attack: 121,
            defense: 139,
            spclAtk: 124,
            spclDef: 144,
            speed: 116
          },
          friendship: 128
        },
        {
          level: 50,
          species: 80,
          gender: '♀',
          item: 3,
          moves: [
            57,
            94,
            89,
            58
          ],
          stats: {
            hp: 193,
            attack: 112,
            defense: 149,
            spclAtk: 139,
            spclDef: 119,
            speed: 68
          },
          friendship: 128
        },
        {
          level: 50,
          species: 78,
          gender: '♂',
          item: 82,
          moves: [
            53,
            24,
            23,
            231
          ],
          stats: {
            hp: 155,
            attack: 138,
            defense: 109,
            spclAtk: 119,
            spclDef: 119,
            speed: 143
          },
          friendship: 128
        },
        {
          level: 50,
          species: 212,
          gender: '♀',
          item: 119,
          moves: [
            232,
            179,
            17,
            163
          ],
          stats: {
            hp: 168,
            attack: 167,
            defense: 139,
            spclAtk: 94,
            spclDef: 119,
            speed: 103
          },
          friendship: 128
        }
      ]
    }
  ],
  'team-rocket-r2': [
    {
      name: 'Rocket Grunt ♂',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 150,
        weightToDamageByPlayer: 70,
        weightToSecondaryEffects: 180,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 100,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 110,
          gender: '♂',
          item: 83,
          moves: [
            153,
            124,
            60,
            103
          ],
          stats: {
            hp: 153,
            attack: 126,
            defense: 155,
            spclAtk: 120,
            spclDef: 105,
            speed: 94
          },
          friendship: 128
        },
        {
          level: 50,
          species: 101,
          gender: '',
          item: 84,
          moves: [
            153,
            85,
            243,
            103
          ],
          stats: {
            hp: 156,
            attack: 89,
            defense: 105,
            spclAtk: 115,
            spclDef: 115,
            speed: 174
          },
          friendship: 128
        },
        {
          level: 50,
          species: 91,
          gender: '♂',
          item: 107,
          moves: [
            153,
            58,
            57,
            103
          ],
          stats: {
            hp: 138,
            attack: 131,
            defense: 215,
            spclAtk: 120,
            spclDef: 80,
            speed: 104
          },
          friendship: 128
        },
        {
          level: 50,
          species: 185,
          gender: '♀',
          item: 78,
          moves: [
            120,
            157,
            89,
            185
          ],
          stats: {
            hp: 166,
            attack: 135,
            defense: 150,
            spclAtk: 65,
            spclDef: 100,
            speed: 64
          },
          friendship: 128
        },
        {
          level: 50,
          species: 205,
          gender: '♀',
          item: 88,
          moves: [
            153,
            42,
            202,
            38
          ],
          stats: {
            hp: 171,
            attack: 125,
            defense: 175,
            spclAtk: 95,
            spclDef: 95,
            speed: 74
          },
          friendship: 128
        },
        {
          level: 50,
          species: 76,
          gender: '♀',
          item: 119,
          moves: [
            153,
            222,
            157,
            70
          ],
          stats: {
            hp: 176,
            attack: 145,
            defense: 165,
            spclAtk: 90,
            spclDef: 100,
            speed: 79
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Rocket Grunt ♀',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 30,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 250,
        desireToInflictSleep: 128,
        desireToInflictPoison: 250,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 140
      },
      team: [
        {
          level: 50,
          species: 228,
          gender: '♂',
          item: 138,
          moves: [
            92,
            83,
            53,
            197
          ],
          stats: {
            hp: 128,
            attack: 96,
            defense: 68,
            spclAtk: 118,
            spclDef: 88,
            speed: 97
          },
          friendship: 128
        },
        {
          level: 50,
          species: 213,
          gender: '♂',
          item: 74,
          moves: [
            92,
            35,
            91,
            182
          ],
          stats: {
            hp: 103,
            attack: 46,
            defense: 268,
            spclAtk: 48,
            spclDef: 268,
            speed: 37
          },
          friendship: 128
        },
        {
          level: 50,
          species: 184,
          gender: '♀',
          item: 95,
          moves: [
            195,
            250,
            57,
            182
          ],
          stats: {
            hp: 183,
            attack: 82,
            defense: 118,
            spclAtk: 88,
            spclDef: 118,
            speed: 82
          },
          friendship: 128
        },
        {
          level: 50,
          species: 90,
          gender: '♀',
          item: 84,
          moves: [
            92,
            128,
            58,
            182
          ],
          stats: {
            hp: 113,
            attack: 97,
            defense: 138,
            spclAtk: 83,
            spclDef: 63,
            speed: 72
          },
          friendship: 128
        },
        {
          level: 50,
          species: 95,
          gender: '♂',
          item: 83,
          moves: [
            92,
            20,
            89,
            182
          ],
          stats: {
            hp: 118,
            attack: 81,
            defense: 198,
            spclAtk: 68,
            spclDef: 83,
            speed: 102
          },
          friendship: 128
        },
        {
          level: 50,
          species: 87,
          gender: '♂',
          item: 78,
          moves: [
            195,
            250,
            62,
            182
          ],
          stats: {
            hp: 173,
            attack: 106,
            defense: 118,
            spclAtk: 108,
            spclDef: 133,
            speed: 102
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Rocket Executive ♀',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 100,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 150,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 45,
          gender: '♀',
          item: 109,
          moves: [
            75,
            188,
            80,
            218
          ],
          stats: {
            hp: 164,
            attack: 115,
            defense: 121,
            spclAtk: 136,
            spclDef: 126,
            speed: 85
          },
          friendship: 5
        },
        {
          level: 50,
          species: 24,
          gender: '♂',
          item: 0,
          moves: [
            168,
            89,
            157,
            218
          ],
          stats: {
            hp: 149,
            attack: 122,
            defense: 105,
            spclAtk: 101,
            spclDef: 115,
            speed: 115
          },
          friendship: 5
        },
        {
          level: 50,
          species: 219,
          gender: '♀',
          item: 84,
          moves: [
            53,
            157,
            89,
            218
          ],
          stats: {
            hp: 139,
            attack: 85,
            defense: 156,
            spclAtk: 116,
            spclDef: 116,
            speed: 65
          },
          friendship: 5
        },
        {
          level: 50,
          species: 141,
          gender: '♂',
          item: 152,
          moves: [
            168,
            57,
            246,
            218
          ],
          stats: {
            hp: 149,
            attack: 152,
            defense: 141,
            spclAtk: 101,
            spclDef: 106,
            speed: 115
          },
          friendship: 5
        },
        {
          level: 50,
          species: 71,
          gender: '♂',
          item: 78,
          moves: [
            75,
            188,
            202,
            218
          ],
          stats: {
            hp: 169,
            attack: 142,
            defense: 101,
            spclAtk: 136,
            spclDef: 96,
            speed: 105
          },
          friendship: 5
        },
        {
          level: 50,
          species: 42,
          gender: '♀',
          item: 0,
          moves: [
            168,
            17,
            114,
            218
          ],
          stats: {
            hp: 164,
            attack: 115,
            defense: 106,
            spclAtk: 101,
            spclDef: 111,
            speed: 125
          },
          friendship: 5
        }
      ]
    },
    {
      name: 'Rocket Executive ♂',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 60,
        weightToDamageByPlayer: 60,
        weightToSecondaryEffects: 150,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 180,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 170,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 229,
          gender: '♀',
          item: 109,
          moves: [
            242,
            241,
            126,
            76
          ],
          stats: {
            hp: 171,
            attack: 128,
            defense: 89,
            spclAtk: 149,
            spclDef: 119,
            speed: 133
          },
          friendship: 255
        },
        {
          level: 50,
          species: 224,
          gender: '♀',
          item: 140,
          moves: [
            57,
            60,
            207,
            103
          ],
          stats: {
            hp: 165,
            attack: 141,
            defense: 112,
            spclAtk: 142,
            spclDef: 112,
            speed: 81
          },
          friendship: 128
        },
        {
          level: 50,
          species: 202,
          gender: '♀',
          item: 119,
          moves: [
            68,
            243,
            219,
            194
          ],
          stats: {
            hp: 280,
            attack: 69,
            defense: 95,
            spclAtk: 70,
            spclDef: 95,
            speed: 69
          },
          friendship: 128
        },
        {
          level: 50,
          species: 97,
          gender: '♂',
          item: 78,
          moves: [
            94,
            247,
            9,
            207
          ],
          stats: {
            hp: 175,
            attack: 111,
            defense: 107,
            spclAtk: 110,
            spclDef: 152,
            speed: 103
          },
          friendship: 128
        },
        {
          level: 50,
          species: 47,
          gender: '♂',
          item: 3,
          moves: [
            202,
            188,
            207,
            78
          ],
          stats: {
            hp: 150,
            attack: 133,
            defense: 117,
            spclAtk: 97,
            spclDef: 117,
            speed: 66
          },
          friendship: 128
        },
        {
          level: 50,
          species: 248,
          gender: '♂',
          item: 73,
          moves: [
            157,
            89,
            207,
            103
          ],
          stats: {
            hp: 190,
            attack: 172,
            defense: 147,
            spclAtk: 132,
            spclDef: 137,
            speed: 97
          },
          friendship: 128
        }
      ]
    }
  ],
  'mahogany-r2': [
    {
      name: 'Boarder Alvin',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 78,
        weightToDamageByPlayer: 55,
        weightToSecondaryEffects: 170,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 140,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 86,
          gender: '♀',
          item: 78,
          moves: [
            57,
            58,
            227,
            50
          ],
          stats: {
            hp: 155,
            attack: 81,
            defense: 92,
            spclAtk: 82,
            spclDef: 107,
            speed: 81
          },
          friendship: 128
        },
        {
          level: 50,
          species: 64,
          gender: '♂',
          item: 96,
          moves: [
            60,
            8,
            227,
            50
          ],
          stats: {
            hp: 130,
            attack: 71,
            defense: 67,
            spclAtk: 157,
            spclDef: 107,
            speed: 141
          },
          friendship: 128
        },
        {
          level: 50,
          species: 225,
          gender: '♀',
          item: 84,
          moves: [
            19,
            59,
            98,
            229
          ],
          stats: {
            hp: 135,
            attack: 91,
            defense: 82,
            spclAtk: 102,
            spclDef: 82,
            speed: 111
          },
          friendship: 128
        },
        {
          level: 50,
          species: 82,
          gender: '',
          item: 74,
          moves: [
            85,
            161,
            205,
            102
          ],
          stats: {
            hp: 140,
            attack: 96,
            defense: 132,
            spclAtk: 157,
            spclDef: 107,
            speed: 106
          },
          friendship: 128
        },
        {
          level: 50,
          species: 3,
          gender: '♂',
          item: 83,
          moves: [
            75,
            34,
            115,
            46
          ],
          stats: {
            hp: 170,
            attack: 118,
            defense: 120,
            spclAtk: 137,
            spclDef: 137,
            speed: 116
          },
          friendship: 128
        },
        {
          level: 50,
          species: 215,
          gender: '♂',
          item: 80,
          moves: [
            163,
            58,
            247,
            68
          ],
          stats: {
            hp: 145,
            attack: 133,
            defense: 92,
            spclAtk: 72,
            spclDef: 112,
            speed: 151
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Skier Carol',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 120,
        weightToDamageByPlayer: 50,
        weightToSecondaryEffects: 145,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 190,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 117,
          gender: '♀',
          item: 82,
          moves: [
            196,
            239,
            29,
            59
          ],
          stats: {
            hp: 145,
            attack: 101,
            defense: 132,
            spclAtk: 132,
            spclDef: 82,
            speed: 121
          },
          friendship: 128
        },
        {
          level: 50,
          species: 20,
          gender: '♂',
          item: 78,
          moves: [
            196,
            44,
            158,
            59
          ],
          stats: {
            hp: 145,
            attack: 119,
            defense: 97,
            spclAtk: 87,
            spclDef: 107,
            speed: 133
          },
          friendship: 128
        },
        {
          level: 50,
          species: 139,
          gender: '♂',
          item: 84,
          moves: [
            196,
            29,
            44,
            59
          ],
          stats: {
            hp: 160,
            attack: 98,
            defense: 162,
            spclAtk: 152,
            spclDef: 107,
            speed: 91
          },
          friendship: 128
        },
        {
          level: 50,
          species: 105,
          gender: '♀',
          item: 79,
          moves: [
            196,
            157,
            29,
            59
          ],
          stats: {
            hp: 150,
            attack: 116,
            defense: 147,
            spclAtk: 87,
            spclDef: 117,
            speed: 81
          },
          friendship: 128
        },
        {
          level: 50,
          species: 61,
          gender: '♂',
          item: 83,
          moves: [
            196,
            29,
            250,
            59
          ],
          stats: {
            hp: 155,
            attack: 103,
            defense: 102,
            spclAtk: 87,
            spclDef: 87,
            speed: 126
          },
          friendship: 128
        },
        {
          level: 50,
          species: 53,
          gender: '♀',
          item: 74,
          moves: [
            196,
            29,
            44,
            46
          ],
          stats: {
            hp: 155,
            attack: 106,
            defense: 97,
            spclAtk: 102,
            spclDef: 102,
            speed: 151
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Pryce',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: true,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 150,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 170,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 140,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 221,
          gender: '♂',
          item: 73,
          moves: [
            89,
            58,
            246,
            34
          ],
          stats: {
            hp: 196,
            attack: 142,
            defense: 119,
            spclAtk: 103,
            spclDef: 103,
            speed: 88
          },
          friendship: 255
        },
        {
          level: 50,
          species: 195,
          gender: '♀',
          item: 3,
          moves: [
            57,
            89,
            58,
            231
          ],
          stats: {
            hp: 191,
            attack: 123,
            defense: 124,
            spclAtk: 104,
            spclDef: 104,
            speed: 73
          },
          friendship: 128
        },
        {
          level: 50,
          species: 237,
          gender: '♂',
          item: 109,
          moves: [
            136,
            70,
            91,
            68
          ],
          stats: {
            hp: 146,
            attack: 133,
            defense: 134,
            spclAtk: 74,
            spclDef: 149,
            speed: 108
          },
          friendship: 128
        },
        {
          level: 50,
          species: 73,
          gender: '♀',
          item: 119,
          moves: [
            57,
            58,
            115,
            243
          ],
          stats: {
            hp: 176,
            attack: 108,
            defense: 104,
            spclAtk: 119,
            spclDef: 159,
            speed: 138
          },
          friendship: 128
        },
        {
          level: 50,
          species: 203,
          gender: '♀',
          item: 78,
          moves: [
            29,
            94,
            89,
            247
          ],
          stats: {
            hp: 166,
            attack: 118,
            defense: 104,
            spclAtk: 129,
            spclDef: 104,
            speed: 123
          },
          friendship: 128
        },
        {
          level: 50,
          species: 144,
          gender: '',
          item: 140,
          moves: [
            58,
            19,
            38,
            61
          ],
          stats: {
            hp: 186,
            attack: 127,
            defense: 141,
            spclAtk: 136,
            spclDef: 166,
            speed: 125
          },
          friendship: 128
        }
      ]
    }
  ],
  'blackthorn-r2': [
    {
      name: 'Cooltrainer♀ Gloria',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 40,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 220,
        desireToInflictSleep: 180,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 235,
          gender: '♂',
          item: 119,
          moves: [
            169,
            147,
            171,
            162
          ],
          stats: {
            hp: 141,
            attack: 57,
            defense: 70,
            spclAtk: 55,
            spclDef: 80,
            speed: 109
          },
          friendship: 128
        },
        {
          level: 50,
          species: 114,
          gender: '♀',
          item: 83,
          moves: [
            20,
            79,
            72,
            188
          ],
          stats: {
            hp: 159,
            attack: 89,
            defense: 150,
            spclAtk: 135,
            spclDef: 75,
            speed: 94
          },
          friendship: 128
        },
        {
          level: 50,
          species: 124,
          gender: '♀',
          item: 80,
          moves: [
            212,
            142,
            138,
            8
          ],
          stats: {
            hp: 159,
            attack: 84,
            defense: 70,
            spclAtk: 150,
            spclDef: 130,
            speed: 129
          },
          friendship: 128
        },
        {
          level: 50,
          species: 55,
          gender: '♂',
          item: 78,
          moves: [
            250,
            95,
            94,
            66
          ],
          stats: {
            hp: 166,
            attack: 119,
            defense: 113,
            spclAtk: 130,
            spclDef: 115,
            speed: 119
          },
          friendship: 128
        },
        {
          level: 50,
          species: 93,
          gender: '♂',
          item: 84,
          moves: [
            212,
            95,
            171,
            101
          ],
          stats: {
            hp: 131,
            attack: 87,
            defense: 80,
            spclAtk: 150,
            spclDef: 90,
            speed: 129
          },
          friendship: 128
        },
        {
          level: 50,
          species: 38,
          gender: '♀',
          item: 79,
          moves: [
            83,
            95,
            185,
            53
          ],
          stats: {
            hp: 167,
            attack: 110,
            defense: 110,
            spclAtk: 116,
            spclDef: 135,
            speed: 134
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Cooltrainer♂ Vince',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: true,
        weightToDamageByAi: 100,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 120,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 2,
          gender: '♂',
          item: 79,
          moves: [
            75,
            15,
            73,
            115
          ],
          stats: {
            hp: 158,
            attack: 104,
            defense: 106,
            spclAtk: 123,
            spclDef: 123,
            speed: 102
          },
          friendship: 128
        },
        {
          level: 50,
          species: 8,
          gender: '♀',
          item: 78,
          moves: [
            56,
            59,
            115,
            243
          ],
          stats: {
            hp: 157,
            attack: 97,
            defense: 123,
            spclAtk: 108,
            spclDef: 123,
            speed: 100
          },
          friendship: 128
        },
        {
          level: 50,
          species: 5,
          gender: '♂',
          item: 84,
          moves: [
            126,
            163,
            91,
            68
          ],
          stats: {
            hp: 156,
            attack: 106,
            defense: 101,
            spclAtk: 123,
            spclDef: 108,
            speed: 122
          },
          friendship: 128
        },
        {
          level: 50,
          species: 153,
          gender: '♀',
          item: 83,
          moves: [
            75,
            34,
            68,
            113
          ],
          stats: {
            hp: 158,
            attack: 96,
            defense: 123,
            spclAtk: 106,
            spclDef: 123,
            speed: 102
          },
          friendship: 128
        },
        {
          level: 50,
          species: 159,
          gender: '♂',
          item: 174,
          moves: [
            56,
            242,
            163,
            91
          ],
          stats: {
            hp: 163,
            attack: 122,
            defense: 123,
            spclAtk: 102,
            spclDef: 106,
            speed: 100
          },
          friendship: 128
        },
        {
          level: 50,
          species: 156,
          gender: '♂',
          item: 74,
          moves: [
            126,
            91,
            179,
            46
          ],
          stats: {
            hp: 156,
            attack: 106,
            defense: 101,
            spclAtk: 123,
            spclDef: 108,
            speed: 122
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Clair',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 100,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 140,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 140,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 230,
          gender: '♂',
          item: 3,
          moves: [
            225,
            56,
            216,
            58
          ],
          stats: {
            hp: 161,
            attack: 136,
            defense: 132,
            spclAtk: 134,
            spclDef: 134,
            speed: 121
          },
          friendship: 250
        },
        {
          level: 50,
          species: 181,
          gender: '♀',
          item: 73,
          moves: [
            85,
            86,
            7,
            34
          ],
          stats: {
            hp: 184,
            attack: 111,
            defense: 112,
            spclAtk: 152,
            spclDef: 127,
            speed: 91
          },
          friendship: 128
        },
        {
          level: 50,
          species: 34,
          gender: '♂',
          item: 140,
          moves: [
            89,
            24,
            247,
            34
          ],
          stats: {
            hp: 167,
            attack: 131,
            defense: 114,
            spclAtk: 122,
            spclDef: 112,
            speed: 121
          },
          friendship: 128
        },
        {
          level: 50,
          species: 112,
          gender: '♀',
          item: 119,
          moves: [
            157,
            89,
            34,
            46
          ],
          stats: {
            hp: 197,
            attack: 166,
            defense: 157,
            spclAtk: 86,
            spclDef: 86,
            speed: 81
          },
          friendship: 128
        },
        {
          level: 50,
          species: 6,
          gender: '♂',
          item: 82,
          moves: [
            53,
            17,
            89,
            34
          ],
          stats: {
            hp: 164,
            attack: 123,
            defense: 115,
            spclAtk: 146,
            spclDef: 122,
            speed: 136
          },
          friendship: 128
        },
        {
          level: 50,
          species: 130,
          gender: '♀',
          item: 109,
          moves: [
            127,
            38,
            58,
            225
          ],
          stats: {
            hp: 189,
            attack: 161,
            defense: 116,
            spclAtk: 97,
            spclDef: 137,
            speed: 117
          },
          friendship: 128
        }
      ]
    }
  ],
  'elite-four-r2': [
    {
      name: 'Elite Four Will',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 100,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 160,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 178,
          gender: '♂',
          item: 3,
          moves: [
            94,
            65,
            202,
            185
          ],
          stats: {
            hp: 155,
            attack: 115,
            defense: 107,
            spclAtk: 132,
            spclDef: 107,
            speed: 131
          },
          friendship: 255
        },
        {
          level: 50,
          species: 125,
          gender: '♂',
          item: 82,
          moves: [
            85,
            94,
            8,
            27
          ],
          stats: {
            hp: 154,
            attack: 120,
            defense: 93,
            spclAtk: 131,
            spclDef: 121,
            speed: 140
          },
          friendship: 128
        },
        {
          level: 50,
          species: 226,
          gender: '♀',
          item: 109,
          moves: [
            127,
            17,
            58,
            114
          ],
          stats: {
            hp: 154,
            attack: 75,
            defense: 106,
            spclAtk: 116,
            spclDef: 176,
            speed: 105
          },
          friendship: 128
        },
        {
          level: 50,
          species: 136,
          gender: '♂',
          item: 73,
          moves: [
            126,
            34,
            247,
            46
          ],
          stats: {
            hp: 154,
            attack: 167,
            defense: 96,
            spclAtk: 131,
            spclDef: 146,
            speed: 100
          },
          friendship: 128
        },
        {
          level: 50,
          species: 113,
          gender: '♀',
          item: 119,
          moves: [
            94,
            58,
            85,
            68
          ],
          stats: {
            hp: 339,
            attack: 40,
            defense: 41,
            spclAtk: 71,
            spclDef: 141,
            speed: 85
          },
          friendship: 128
        },
        {
          level: 50,
          species: 97,
          gender: '♀',
          item: 140,
          moves: [
            94,
            247,
            66,
            8
          ],
          stats: {
            hp: 174,
            attack: 108,
            defense: 106,
            spclAtk: 109,
            spclDef: 151,
            speed: 102
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Elite Four Koga',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 60,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 180,
        desireToInflictSleep: 128,
        desireToInflictPoison: 190,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 180,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          215
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 180,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 49,
          gender: '♀',
          item: 3,
          moves: [
            104,
            92,
            226,
            60
          ],
          stats: {
            hp: 156,
            attack: 100,
            defense: 103,
            spclAtk: 133,
            spclDef: 118,
            speed: 125
          },
          friendship: 255
        },
        {
          level: 50,
          species: 126,
          gender: '♂',
          item: 109,
          moves: [
            104,
            92,
            109,
            53
          ],
          stats: {
            hp: 155,
            attack: 129,
            defense: 98,
            spclAtk: 141,
            spclDef: 126,
            speed: 127
          },
          friendship: 128
        },
        {
          level: 50,
          species: 131,
          gender: '♀',
          item: 146,
          moves: [
            104,
            92,
            109,
            57
          ],
          stats: {
            hp: 220,
            attack: 119,
            defense: 121,
            spclAtk: 126,
            spclDef: 136,
            speed: 94
          },
          friendship: 128
        },
        {
          level: 50,
          species: 234,
          gender: '♂',
          item: 150,
          moves: [
            104,
            92,
            109,
            89
          ],
          stats: {
            hp: 163,
            attack: 133,
            defense: 103,
            spclAtk: 126,
            spclDef: 106,
            speed: 119
          },
          friendship: 128
        },
        {
          level: 50,
          species: 171,
          gender: '♂',
          item: 73,
          moves: [
            104,
            92,
            109,
            85
          ],
          stats: {
            hp: 215,
            attack: 96,
            defense: 99,
            spclAtk: 117,
            spclDef: 117,
            speed: 101
          },
          friendship: 128
        },
        {
          level: 50,
          species: 168,
          gender: '♂',
          item: 119,
          moves: [
            104,
            169,
            226,
            60
          ],
          stats: {
            hp: 160,
            attack: 128,
            defense: 111,
            spclAtk: 101,
            spclDef: 101,
            speed: 74
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Elite Four Bruno',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 100,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 130,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 68,
          gender: '♂',
          item: 73,
          moves: [
            238,
            89,
            157,
            90
          ],
          stats: {
            hp: 181,
            attack: 173,
            defense: 120,
            spclAtk: 105,
            spclDef: 125,
            speed: 94
          },
          friendship: 255
        },
        {
          level: 50,
          species: 76,
          gender: '♀',
          item: 3,
          moves: [
            157,
            222,
            66,
            90
          ],
          stats: {
            hp: 178,
            attack: 147,
            defense: 169,
            spclAtk: 94,
            spclDef: 104,
            speed: 83
          },
          friendship: 128
        },
        {
          level: 50,
          species: 57,
          gender: '♂',
          item: 119,
          moves: [
            238,
            157,
            179,
            68
          ],
          stats: {
            hp: 155,
            attack: 147,
            defense: 99,
            spclAtk: 99,
            spclDef: 109,
            speed: 133
          },
          friendship: 128
        },
        {
          level: 50,
          species: 210,
          gender: '♀',
          item: 78,
          moves: [
            70,
            247,
            188,
            223
          ],
          stats: {
            hp: 188,
            attack: 161,
            defense: 114,
            spclAtk: 99,
            spclDef: 99,
            speed: 83
          },
          friendship: 128
        },
        {
          level: 50,
          species: 103,
          gender: '♂',
          item: 109,
          moves: [
            202,
            94,
            246,
            153
          ],
          stats: {
            hp: 185,
            attack: 137,
            defense: 122,
            spclAtk: 162,
            spclDef: 102,
            speed: 91
          },
          friendship: 128
        },
        {
          level: 50,
          species: 217,
          gender: '♀',
          item: 140,
          moves: [
            163,
            89,
            242,
            68
          ],
          stats: {
            hp: 188,
            attack: 167,
            defense: 114,
            spclAtk: 114,
            spclDef: 114,
            speed: 93
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Elite Four Karen',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 90,
        weightToDamageByPlayer: 120,
        weightToSecondaryEffects: 180,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 190,
        desireToInflictFlinch: 170,
        desireToInflictConfusion: 230,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 197,
          gender: '♂',
          item: 119,
          moves: [
            207,
            103,
            185,
            94
          ],
          stats: {
            hp: 186,
            attack: 104,
            defense: 152,
            spclAtk: 102,
            spclDef: 172,
            speed: 100
          },
          friendship: 255
        },
        {
          level: 50,
          species: 53,
          gender: '♂',
          item: 3,
          moves: [
            207,
            103,
            29,
            247
          ],
          stats: {
            hp: 156,
            attack: 109,
            defense: 102,
            spclAtk: 107,
            spclDef: 107,
            speed: 150
          },
          friendship: 128
        },
        {
          level: 50,
          species: 198,
          gender: '♂',
          item: 140,
          moves: [
            207,
            212,
            244,
            65
          ],
          stats: {
            hp: 151,
            attack: 124,
            defense: 84,
            spclAtk: 127,
            spclDef: 84,
            speed: 126
          },
          friendship: 128
        },
        {
          level: 50,
          species: 80,
          gender: '♀',
          item: 73,
          moves: [
            207,
            86,
            57,
            66
          ],
          stats: {
            hp: 186,
            attack: 110,
            defense: 152,
            spclAtk: 142,
            spclDef: 122,
            speed: 65
          },
          friendship: 128
        },
        {
          level: 50,
          species: 200,
          gender: '♀',
          item: 150,
          moves: [
            212,
            195,
            220,
            94
          ],
          stats: {
            hp: 151,
            attack: 95,
            defense: 102,
            spclAtk: 127,
            spclDef: 127,
            speed: 120
          },
          friendship: 128
        },
        {
          level: 50,
          species: 101,
          gender: '',
          item: 82,
          moves: [
            207,
            86,
            29,
            85
          ],
          stats: {
            hp: 159,
            attack: 92,
            defense: 112,
            spclAtk: 122,
            spclDef: 122,
            speed: 175
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Champion Lance',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 190,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 100,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 149,
          gender: '♂',
          item: 140,
          moves: [
            225,
            58,
            85,
            63
          ],
          stats: {
            hp: 187,
            attack: 174,
            defense: 136,
            spclAtk: 141,
            spclDef: 141,
            speed: 120
          },
          friendship: 255
        },
        {
          level: 50,
          species: 142,
          gender: '♂',
          item: 82,
          moves: [
            246,
            17,
            89,
            63
          ],
          stats: {
            hp: 176,
            attack: 145,
            defense: 106,
            spclAtk: 101,
            spclDef: 116,
            speed: 170
          },
          friendship: 128
        },
        {
          level: 50,
          species: 160,
          gender: '♂',
          item: 95,
          moves: [
            57,
            89,
            59,
            63
          ],
          stats: {
            hp: 181,
            attack: 145,
            defense: 141,
            spclAtk: 120,
            spclDef: 124,
            speed: 118
          },
          friendship: 128
        },
        {
          level: 50,
          species: 115,
          gender: '♀',
          item: 3,
          moves: [
            66,
            89,
            157,
            63
          ],
          stats: {
            hp: 201,
            attack: 135,
            defense: 121,
            spclAtk: 81,
            spclDef: 121,
            speed: 130
          },
          friendship: 128
        },
        {
          level: 50,
          species: 59,
          gender: '♂',
          item: 109,
          moves: [
            53,
            245,
            242,
            63
          ],
          stats: {
            hp: 186,
            attack: 150,
            defense: 121,
            spclAtk: 141,
            spclDef: 121,
            speed: 135
          },
          friendship: 128
        },
        {
          level: 50,
          species: 248,
          gender: '♀',
          item: 73,
          moves: [
            242,
            157,
            89,
            63
          ],
          stats: {
            hp: 196,
            attack: 172,
            defense: 151,
            spclAtk: 136,
            spclDef: 141,
            speed: 101
          },
          friendship: 128
        }
      ]
    }
  ],
  'kanto-r2': [
    {
      name: 'Gym Leader Pewter',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 90,
        weightToDamageByPlayer: 150,
        weightToSecondaryEffects: 200,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 208,
          gender: '♂',
          item: 140,
          moves: [
            157,
            89,
            216,
            90
          ],
          stats: {
            hp: 174,
            attack: 128,
            defense: 244,
            spclAtk: 99,
            spclDef: 109,
            speed: 73
          },
          friendship: 255
        },
        {
          level: 50,
          species: 214,
          gender: '♂',
          item: 119,
          moves: [
            224,
            179,
            68,
            89
          ],
          stats: {
            hp: 177,
            attack: 166,
            defense: 117,
            spclAtk: 82,
            spclDef: 137,
            speed: 126
          },
          friendship: 128
        },
        {
          level: 50,
          species: 112,
          gender: '♀',
          item: 73,
          moves: [
            157,
            89,
            38,
            90
          ],
          stats: {
            hp: 202,
            attack: 169,
            defense: 162,
            spclAtk: 87,
            spclDef: 87,
            speed: 81
          },
          friendship: 128
        },
        {
          level: 50,
          species: 80,
          gender: '♀',
          item: 3,
          moves: [
            57,
            94,
            53,
            90
          ],
          stats: {
            hp: 192,
            attack: 114,
            defense: 152,
            spclAtk: 142,
            spclDef: 122,
            speed: 71
          },
          friendship: 128
        },
        {
          level: 50,
          species: 217,
          gender: '♂',
          item: 84,
          moves: [
            111,
            205,
            163,
            116
          ],
          stats: {
            hp: 187,
            attack: 171,
            defense: 117,
            spclAtk: 117,
            spclDef: 117,
            speed: 96
          },
          friendship: 128
        },
        {
          level: 50,
          species: 213,
          gender: '♂',
          item: 146,
          moves: [
            111,
            205,
            219,
            35
          ],
          stats: {
            hp: 113,
            attack: 57,
            defense: 271,
            spclAtk: 52,
            spclDef: 272,
            speed: 46
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Misty',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 130,
        weightToDamageByPlayer: 95,
        weightToSecondaryEffects: 100,
        desireToInflictSleep: 90,
        desireToInflictPoison: 90,
        desireToInflictBurn: 90,
        desireToInflictFreeze: 90,
        desireToInflictPara: 20,
        desireToInflictFlinch: 90,
        desireToInflictConfusion: 90,
        desireToInflictInfatuation: 90,
        desireToRaiseStats: [
          90,
          90,
          90,
          90,
          90,
          90,
          90
        ],
        desireForLightScreen: 90,
        desireForMist: 90,
        desireForFocusEnergy: 90,
        desireForReflect: 90,
        desireForDisable: 90,
        desireForBatonPass: 90,
        desireToLowerStatTenPercentChance: 90
      },
      team: [
        {
          level: 50,
          species: 121,
          gender: '',
          item: 82,
          moves: [
            57,
            94,
            87,
            240
          ],
          stats: {
            hp: 159,
            attack: 118,
            defense: 129,
            spclAtk: 146,
            spclDef: 131,
            speed: 158
          },
          friendship: 255
        },
        {
          level: 50,
          species: 40,
          gender: '♀',
          item: 73,
          moves: [
            38,
            58,
            87,
            240
          ],
          stats: {
            hp: 237,
            attack: 111,
            defense: 87,
            spclAtk: 117,
            spclDef: 92,
            speed: 86
          },
          friendship: 128
        },
        {
          level: 50,
          species: 31,
          gender: '♀',
          item: 140,
          moves: [
            89,
            57,
            87,
            240
          ],
          stats: {
            hp: 187,
            attack: 123,
            defense: 129,
            spclAtk: 117,
            spclDef: 127,
            speed: 117
          },
          friendship: 128
        },
        {
          level: 50,
          species: 181,
          gender: '♂',
          item: 3,
          moves: [
            87,
            113,
            115,
            240
          ],
          stats: {
            hp: 187,
            attack: 116,
            defense: 117,
            spclAtk: 157,
            spclDef: 132,
            speed: 96
          },
          friendship: 128
        },
        {
          level: 50,
          species: 148,
          gender: '♂',
          item: 83,
          moves: [
            58,
            57,
            87,
            240
          ],
          stats: {
            hp: 159,
            attack: 125,
            defense: 107,
            spclAtk: 119,
            spclDef: 119,
            speed: 111
          },
          friendship: 128
        },
        {
          level: 50,
          species: 186,
          gender: '♂',
          item: 119,
          moves: [
            56,
            89,
            58,
            240
          ],
          stats: {
            hp: 189,
            attack: 118,
            defense: 119,
            spclAtk: 134,
            spclDef: 144,
            speed: 113
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Lt. Surge',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: true,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 100,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 150,
        desireToInflictSleep: 90,
        desireToInflictPoison: 90,
        desireToInflictBurn: 150,
        desireToInflictFreeze: 150,
        desireToInflictPara: 150,
        desireToInflictFlinch: 90,
        desireToInflictConfusion: 90,
        desireToInflictInfatuation: 90,
        desireToRaiseStats: [
          90,
          90,
          90,
          90,
          90,
          90,
          90
        ],
        desireForLightScreen: 90,
        desireForMist: 90,
        desireForFocusEnergy: 90,
        desireForReflect: 90,
        desireForDisable: 90,
        desireForBatonPass: 90,
        desireToLowerStatTenPercentChance: 90
      },
      team: [
        {
          level: 50,
          species: 26,
          gender: '♂',
          item: 119,
          moves: [
            85,
            86,
            179,
            57
          ],
          stats: {
            hp: 157,
            attack: 131,
            defense: 97,
            spclAtk: 132,
            spclDef: 122,
            speed: 141
          },
          friendship: 255
        },
        {
          level: 50,
          species: 71,
          gender: '♀',
          item: 109,
          moves: [
            75,
            188,
            34,
            78
          ],
          stats: {
            hp: 177,
            attack: 144,
            defense: 107,
            spclAtk: 142,
            spclDef: 102,
            speed: 111
          },
          friendship: 128
        },
        {
          level: 50,
          species: 233,
          gender: '',
          item: 73,
          moves: [
            176,
            161,
            94,
            59
          ],
          stats: {
            hp: 182,
            attack: 121,
            defense: 132,
            spclAtk: 147,
            spclDef: 137,
            speed: 101
          },
          friendship: 128
        },
        {
          level: 50,
          species: 195,
          gender: '♀',
          item: 3,
          moves: [
            57,
            89,
            246,
            58
          ],
          stats: {
            hp: 192,
            attack: 124,
            defense: 127,
            spclAtk: 107,
            spclDef: 107,
            speed: 76
          },
          friendship: 128
        },
        {
          level: 50,
          species: 85,
          gender: '♀',
          item: 140,
          moves: [
            65,
            161,
            228,
            211
          ],
          stats: {
            hp: 157,
            attack: 149,
            defense: 112,
            spclAtk: 102,
            spclDef: 102,
            speed: 141
          },
          friendship: 128
        },
        {
          level: 50,
          species: 135,
          gender: '♂',
          item: 82,
          moves: [
            85,
            237,
            46,
            86
          ],
          stats: {
            hp: 167,
            attack: 109,
            defense: 102,
            spclAtk: 153,
            spclDef: 138,
            speed: 172
          },
          friendship: 255
        }
      ]
    },
    {
      name: 'Gym Leader Erika',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 110,
        weightToDamageByPlayer: 130,
        weightToSecondaryEffects: 200,
        desireToInflictSleep: 220,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 200,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          60,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 182,
          gender: '♀',
          item: 73,
          moves: [
            75,
            216,
            79,
            78
          ],
          stats: {
            hp: 174,
            attack: 121,
            defense: 129,
            spclAtk: 134,
            spclDef: 144,
            speed: 93
          },
          friendship: 255
        },
        {
          level: 50,
          species: 105,
          gender: '♀',
          item: 118,
          moves: [
            155,
            187,
            156,
            173
          ],
          stats: {
            hp: 157,
            attack: 119,
            defense: 152,
            spclAtk: 92,
            spclDef: 122,
            speed: 86
          },
          friendship: 128
        },
        {
          level: 50,
          species: 38,
          gender: '♀',
          item: 3,
          moves: [
            53,
            34,
            231,
            95
          ],
          stats: {
            hp: 170,
            attack: 117,
            defense: 117,
            spclAtk: 123,
            spclDef: 142,
            speed: 141
          },
          friendship: 128
        },
        {
          level: 50,
          species: 226,
          gender: '♀',
          item: 84,
          moves: [
            57,
            58,
            156,
            214
          ],
          stats: {
            hp: 162,
            attack: 73,
            defense: 112,
            spclAtk: 122,
            spclDef: 182,
            speed: 111
          },
          friendship: 128
        },
        {
          level: 50,
          species: 242,
          gender: '♀',
          item: 109,
          moves: [
            47,
            94,
            115,
            113
          ],
          stats: {
            hp: 352,
            attack: 51,
            defense: 52,
            spclAtk: 117,
            spclDef: 177,
            speed: 96
          },
          friendship: 128
        },
        {
          level: 50,
          species: 103,
          gender: '♀',
          item: 119,
          moves: [
            202,
            94,
            79,
            78
          ],
          stats: {
            hp: 192,
            attack: 128,
            defense: 127,
            spclAtk: 167,
            spclDef: 107,
            speed: 96
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Janine',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 60,
        weightToDamageByPlayer: 200,
        weightToSecondaryEffects: 220,
        desireToInflictSleep: 128,
        desireToInflictPoison: 190,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 250,
        desireToInflictInfatuation: 240,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          250
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 245,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 169,
          gender: '♂',
          item: 82,
          moves: [
            109,
            212,
            92,
            44
          ],
          stats: {
            hp: 176,
            attack: 132,
            defense: 126,
            spclAtk: 116,
            spclDef: 126,
            speed: 171
          },
          friendship: 255
        },
        {
          level: 50,
          species: 154,
          gender: '♂',
          item: 73,
          moves: [
            213,
            92,
            73,
            75
          ],
          stats: {
            hp: 177,
            attack: 121,
            defense: 144,
            spclAtk: 127,
            spclDef: 144,
            speed: 119
          },
          friendship: 128
        },
        {
          level: 50,
          species: 89,
          gender: '♀',
          item: 119,
          moves: [
            207,
            212,
            92,
            7
          ],
          stats: {
            hp: 202,
            attack: 144,
            defense: 119,
            spclAtk: 109,
            spclDef: 144,
            speed: 89
          },
          friendship: 128
        },
        {
          level: 50,
          species: 134,
          gender: '♂',
          item: 3,
          moves: [
            104,
            226,
            57,
            58
          ],
          stats: {
            hp: 219,
            attack: 105,
            defense: 104,
            spclAtk: 154,
            spclDef: 139,
            speed: 104
          },
          friendship: 128
        },
        {
          level: 50,
          species: 205,
          gender: '♂',
          item: 140,
          moves: [
            207,
            191,
            201,
            38
          ],
          stats: {
            hp: 164,
            attack: 130,
            defense: 184,
            spclAtk: 104,
            spclDef: 104,
            speed: 79
          },
          friendship: 128
        },
        {
          level: 50,
          species: 203,
          gender: '♀',
          item: 109,
          moves: [
            104,
            226,
            94,
            242
          ],
          stats: {
            hp: 167,
            attack: 119,
            defense: 109,
            spclAtk: 134,
            spclDef: 109,
            speed: 124
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Sabrina',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: true,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 110,
        weightToDamageByPlayer: 90,
        weightToSecondaryEffects: 172,
        desireToInflictSleep: 90,
        desireToInflictPoison: 90,
        desireToInflictBurn: 90,
        desireToInflictFreeze: 90,
        desireToInflictPara: 90,
        desireToInflictFlinch: 90,
        desireToInflictConfusion: 90,
        desireToInflictInfatuation: 90,
        desireToRaiseStats: [
          90,
          90,
          90,
          90,
          90,
          90,
          90
        ],
        desireForLightScreen: 90,
        desireForMist: 90,
        desireForFocusEnergy: 90,
        desireForReflect: 90,
        desireForDisable: 90,
        desireForBatonPass: 90,
        desireToLowerStatTenPercentChance: 90
      },
      team: [
        {
          level: 50,
          species: 65,
          gender: '♂',
          item: 82,
          moves: [
            94,
            9,
            7,
            248
          ],
          stats: {
            hp: 154,
            attack: 93,
            defense: 89,
            spclAtk: 179,
            spclDef: 129,
            speed: 163
          },
          friendship: 255
        },
        {
          level: 50,
          species: 212,
          gender: '♂',
          item: 109,
          moves: [
            232,
            163,
            113,
            179
          ],
          stats: {
            hp: 167,
            attack: 171,
            defense: 142,
            spclAtk: 97,
            spclDef: 122,
            speed: 106
          },
          friendship: 128
        },
        {
          level: 50,
          species: 157,
          gender: '♂',
          item: 119,
          moves: [
            53,
            89,
            9,
            179
          ],
          stats: {
            hp: 175,
            attack: 125,
            defense: 120,
            spclAtk: 151,
            spclDef: 127,
            speed: 141
          },
          friendship: 128
        },
        {
          level: 50,
          species: 106,
          gender: '♂',
          item: 140,
          moves: [
            223,
            25,
            193,
            170
          ],
          stats: {
            hp: 147,
            attack: 159,
            defense: 95,
            spclAtk: 77,
            spclDef: 152,
            speed: 128
          },
          friendship: 128
        },
        {
          level: 50,
          species: 28,
          gender: '♀',
          item: 3,
          moves: [
            89,
            163,
            157,
            66
          ],
          stats: {
            hp: 172,
            attack: 139,
            defense: 152,
            spclAtk: 87,
            spclDef: 97,
            speed: 106
          },
          friendship: 128
        },
        {
          level: 50,
          species: 199,
          gender: '♂',
          item: 73,
          moves: [
            94,
            57,
            89,
            248
          ],
          stats: {
            hp: 192,
            attack: 116,
            defense: 122,
            spclAtk: 142,
            spclDef: 152,
            speed: 71
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Gym Leader Blaine',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: true,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 135,
        weightToDamageByPlayer: 70,
        weightToSecondaryEffects: 220,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 150,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 59,
          gender: '♂',
          item: 82,
          moves: [
            241,
            126,
            245,
            46
          ],
          stats: {
            hp: 187,
            attack: 151,
            defense: 122,
            spclAtk: 142,
            spclDef: 122,
            speed: 136
          },
          friendship: 255
        },
        {
          level: 50,
          species: 122,
          gender: '♂',
          item: 140,
          moves: [
            241,
            7,
            76,
            94
          ],
          stats: {
            hp: 137,
            attack: 86,
            defense: 107,
            spclAtk: 142,
            spclDef: 162,
            speed: 131
          },
          friendship: 128
        },
        {
          level: 50,
          species: 113,
          gender: '♀',
          item: 109,
          moves: [
            241,
            126,
            76,
            68
          ],
          stats: {
            hp: 347,
            attack: 46,
            defense: 47,
            spclAtk: 77,
            spclDef: 147,
            speed: 91
          },
          friendship: 128
        },
        {
          level: 50,
          species: 36,
          gender: '♀',
          item: 119,
          moves: [
            241,
            126,
            76,
            236
          ],
          stats: {
            hp: 192,
            attack: 111,
            defense: 115,
            spclAtk: 127,
            spclDef: 132,
            speed: 101
          },
          friendship: 128
        },
        {
          level: 50,
          species: 45,
          gender: '♂',
          item: 73,
          moves: [
            241,
            76,
            188,
            235
          ],
          stats: {
            hp: 172,
            attack: 121,
            defense: 127,
            spclAtk: 142,
            spclDef: 132,
            speed: 91
          },
          friendship: 128
        },
        {
          level: 50,
          species: 146,
          gender: '',
          item: 3,
          moves: [
            241,
            126,
            17,
            211
          ],
          stats: {
            hp: 189,
            attack: 143,
            defense: 134,
            spclAtk: 169,
            spclDef: 129,
            speed: 133
          },
          friendship: 255
        }
      ]
    },
    {
      name: 'Gym Leader Blue',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: false,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 150,
        weightToDamageByPlayer: 100,
        weightToSecondaryEffects: 100,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 123,
          gender: '♂',
          item: 3,
          moves: [
            14,
            97,
            226,
            17
          ],
          stats: {
            hp: 168,
            attack: 156,
            defense: 123,
            spclAtk: 98,
            spclDef: 123,
            speed: 147
          },
          friendship: 128
        },
        {
          level: 50,
          species: 241,
          gender: '♀',
          item: 109,
          moves: [
            34,
            89,
            179,
            247
          ],
          stats: {
            hp: 193,
            attack: 122,
            defense: 148,
            spclAtk: 83,
            spclDef: 113,
            speed: 142
          },
          friendship: 128
        },
        {
          level: 50,
          species: 94,
          gender: '♂',
          item: 82,
          moves: [
            94,
            8,
            7,
            85
          ],
          stats: {
            hp: 158,
            attack: 107,
            defense: 103,
            spclAtk: 173,
            spclDef: 118,
            speed: 152
          },
          friendship: 128
        },
        {
          level: 50,
          species: 229,
          gender: '♂',
          item: 119,
          moves: [
            53,
            242,
            231,
            179
          ],
          stats: {
            hp: 173,
            attack: 132,
            defense: 93,
            spclAtk: 153,
            spclDef: 123,
            speed: 137
          },
          friendship: 128
        },
        {
          level: 50,
          species: 221,
          gender: '♂',
          item: 73,
          moves: [
            58,
            89,
            157,
            46
          ],
          stats: {
            hp: 191,
            attack: 145,
            defense: 123,
            spclAtk: 106,
            spclDef: 106,
            speed: 92
          },
          friendship: 128
        },
        {
          level: 50,
          species: 230,
          gender: '♀',
          item: 140,
          moves: [
            57,
            225,
            58,
            175
          ],
          stats: {
            hp: 173,
            attack: 135,
            defense: 138,
            spclAtk: 138,
            spclDef: 138,
            speed: 127
          },
          friendship: 128
        }
      ]
    },
    {
      name: 'Pokémon Trainer Red',
      ai: {
        randomFitness: false,
        usesRandomLead: false,
        penaliseBestFitnessPokeLead: true,
        mustUseFirstPoke: false,
        doesNotReorderTeam: false,
        mustNotUseBothBestPokes: false,
        mustUseLastPoke: false,
        mustUseFromAllColumns: false,
        weightToDamageByAi: 90,
        weightToDamageByPlayer: 130,
        weightToSecondaryEffects: 200,
        desireToInflictSleep: 128,
        desireToInflictPoison: 128,
        desireToInflictBurn: 128,
        desireToInflictFreeze: 128,
        desireToInflictPara: 128,
        desireToInflictFlinch: 128,
        desireToInflictConfusion: 128,
        desireToInflictInfatuation: 128,
        desireToRaiseStats: [
          128,
          128,
          128,
          128,
          128,
          128,
          128
        ],
        desireForLightScreen: 128,
        desireForMist: 128,
        desireForFocusEnergy: 128,
        desireForReflect: 128,
        desireForDisable: 128,
        desireForBatonPass: 128,
        desireToLowerStatTenPercentChance: 128
      },
      team: [
        {
          level: 50,
          species: 243,
          gender: '',
          item: 119,
          moves: [
            85,
            44,
            231,
            237
          ],
          stats: {
            hp: 193,
            attack: 129,
            defense: 121,
            spclAtk: 159,
            spclDef: 144,
            speed: 159
          },
          friendship: 128
        },
        {
          level: 50,
          species: 244,
          gender: '',
          item: 140,
          moves: [
            126,
            44,
            231,
            237
          ],
          stats: {
            hp: 210,
            attack: 160,
            defense: 129,
            spclAtk: 134,
            spclDef: 119,
            speed: 144
          },
          friendship: 128
        },
        {
          level: 50,
          species: 245,
          gender: '',
          item: 3,
          moves: [
            57,
            58,
            46,
            237
          ],
          stats: {
            hp: 191,
            attack: 118,
            defense: 162,
            spclAtk: 134,
            spclDef: 159,
            speed: 129
          },
          friendship: 128
        },
        {
          level: 50,
          species: 149,
          gender: '♂',
          item: 109,
          moves: [
            19,
            34,
            86,
            237
          ],
          stats: {
            hp: 179,
            attack: 179,
            defense: 140,
            spclAtk: 143,
            spclDef: 143,
            speed: 123
          },
          friendship: 128
        },
        {
          level: 50,
          species: 143,
          gender: '♂',
          item: 73,
          moves: [
            34,
            89,
            247,
            237
          ],
          stats: {
            hp: 252,
            attack: 155,
            defense: 111,
            spclAtk: 108,
            spclDef: 153,
            speed: 73
          },
          friendship: 128
        },
        {
          level: 50,
          species: 196,
          gender: '♂',
          item: 82,
          moves: [
            94,
            44,
            115,
            237
          ],
          stats: {
            hp: 153,
            attack: 108,
            defense: 105,
            spclAtk: 173,
            spclDef: 138,
            speed: 153
          },
          friendship: 128
        }
      ]
    }
  ]
}

const rentals = {
  little: [
    {
      level: 5,
      species: 1,
      gender: '♂',
      stats: {
        hp: 20,
        attack: 10,
        defense: 10,
        spclAtk: 12,
        spclDef: 12,
        speed: 10
      },
      friendship: 128,
      learnableMoves: [
        13,
        14,
        15,
        22,
        29,
        33,
        34,
        36,
        38,
        45,
        72,
        73,
        74,
        75,
        76,
        77,
        79,
        80,
        92,
        99,
        102,
        104,
        111,
        113,
        115,
        117,
        130,
        148,
        156,
        164,
        173,
        174,
        182,
        189,
        202,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        219,
        230,
        235,
        237,
        241
      ]
    },
    {
      level: 5,
      species: 4,
      gender: '♂',
      stats: {
        hp: 19,
        attack: 10,
        defense: 9,
        spclAtk: 11,
        spclDef: 10,
        speed: 12
      },
      friendship: 128,
      learnableMoves: [
        5,
        7,
        10,
        14,
        15,
        25,
        29,
        34,
        36,
        38,
        43,
        44,
        45,
        52,
        53,
        66,
        68,
        69,
        70,
        82,
        83,
        91,
        92,
        99,
        102,
        104,
        108,
        111,
        115,
        117,
        126,
        129,
        130,
        156,
        157,
        163,
        164,
        173,
        174,
        182,
        184,
        187,
        189,
        200,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        223,
        225,
        231,
        237,
        241,
        246,
        249,
        251
      ]
    },
    {
      level: 5,
      species: 7,
      gender: '♂',
      stats: {
        hp: 20,
        attack: 10,
        defense: 12,
        spclAtk: 10,
        spclDef: 12,
        speed: 9
      },
      friendship: 128,
      learnableMoves: [
        5,
        8,
        25,
        29,
        33,
        34,
        36,
        38,
        39,
        44,
        54,
        55,
        56,
        57,
        58,
        59,
        61,
        66,
        68,
        69,
        70,
        91,
        92,
        93,
        99,
        102,
        104,
        110,
        111,
        114,
        115,
        117,
        127,
        130,
        145,
        156,
        164,
        173,
        174,
        175,
        182,
        189,
        193,
        196,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        223,
        229,
        231,
        237,
        240,
        243,
        249,
        250
      ]
    },
    {
      level: 5,
      species: 10,
      gender: '♂',
      stats: {
        hp: 20,
        attack: 9,
        defense: 9,
        spclAtk: 8,
        spclDef: 8,
        speed: 10
      },
      friendship: 128,
      learnableMoves: [
        33,
        81
      ]
    },
    {
      level: 5,
      species: 13,
      gender: '♂',
      stats: {
        hp: 20,
        attack: 9,
        defense: 9,
        spclAtk: 8,
        spclDef: 8,
        speed: 11
      },
      friendship: 128,
      learnableMoves: [
        40,
        81
      ]
    },
    {
      level: 5,
      species: 16,
      gender: '♂',
      stats: {
        hp: 19,
        attack: 10,
        defense: 9,
        spclAtk: 9,
        spclDef: 9,
        speed: 11
      },
      friendship: 200,
      learnableMoves: [
        13,
        16,
        17,
        18,
        19,
        28,
        33,
        36,
        38,
        92,
        97,
        98,
        99,
        102,
        104,
        115,
        117,
        119,
        129,
        143,
        156,
        164,
        168,
        173,
        174,
        182,
        185,
        189,
        193,
        197,
        203,
        207,
        211,
        213,
        214,
        216,
        218,
        228,
        237,
        241
      ]
    },
    {
      level: 5,
      species: 19,
      gender: '♂',
      stats: {
        hp: 18,
        attack: 11,
        defense: 9,
        spclAtk: 8,
        spclDef: 9,
        speed: 13
      },
      friendship: 128,
      learnableMoves: [
        29,
        33,
        34,
        36,
        38,
        39,
        44,
        55,
        59,
        61,
        68,
        85,
        87,
        91,
        92,
        98,
        99,
        102,
        103,
        104,
        111,
        116,
        117,
        129,
        130,
        154,
        156,
        158,
        162,
        164,
        168,
        172,
        173,
        174,
        179,
        182,
        189,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        228,
        231,
        237,
        241,
        247,
        249
      ]
    },
    {
      level: 5,
      species: 21,
      gender: '♂',
      stats: {
        hp: 19,
        attack: 11,
        defense: 8,
        spclAtk: 9,
        spclDef: 9,
        speed: 12
      },
      friendship: 60,
      learnableMoves: [
        13,
        18,
        19,
        31,
        36,
        38,
        43,
        45,
        64,
        65,
        92,
        97,
        98,
        99,
        102,
        104,
        117,
        119,
        129,
        143,
        156,
        161,
        164,
        168,
        173,
        174,
        182,
        184,
        185,
        189,
        197,
        203,
        206,
        207,
        211,
        213,
        214,
        216,
        218,
        228,
        237,
        241
      ]
    },
    {
      level: 5,
      species: 23,
      gender: '♀',
      stats: {
        hp: 19,
        attack: 11,
        defense: 10,
        spclAtk: 9,
        spclDef: 11,
        speed: 11
      },
      friendship: 128,
      learnableMoves: [
        21,
        29,
        34,
        35,
        36,
        38,
        40,
        43,
        44,
        51,
        70,
        72,
        89,
        90,
        91,
        92,
        99,
        102,
        103,
        104,
        114,
        117,
        130,
        137,
        156,
        157,
        164,
        168,
        173,
        174,
        180,
        182,
        188,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        228,
        237,
        241,
        242,
        251
      ]
    },
    {
      level: 5,
      species: 27,
      gender: '♀',
      stats: {
        hp: 20,
        attack: 13,
        defense: 14,
        spclAtk: 7,
        spclDef: 8,
        speed: 9
      },
      friendship: 128,
      learnableMoves: [
        10,
        14,
        15,
        28,
        29,
        34,
        36,
        38,
        40,
        66,
        68,
        69,
        70,
        89,
        90,
        91,
        92,
        99,
        102,
        104,
        111,
        117,
        129,
        130,
        154,
        156,
        157,
        163,
        164,
        168,
        173,
        174,
        175,
        182,
        189,
        197,
        201,
        203,
        205,
        207,
        210,
        213,
        214,
        216,
        218,
        219,
        223,
        229,
        231,
        232,
        237,
        241,
        249
      ]
    },
    {
      level: 5,
      species: 29,
      gender: '♀',
      stats: {
        hp: 21,
        attack: 10,
        defense: 10,
        spclAtk: 9,
        spclDef: 9,
        speed: 9
      },
      friendship: 128,
      learnableMoves: [
        10,
        24,
        29,
        33,
        34,
        36,
        38,
        39,
        40,
        44,
        45,
        48,
        50,
        59,
        68,
        85,
        87,
        92,
        99,
        102,
        104,
        111,
        115,
        116,
        117,
        130,
        154,
        156,
        164,
        168,
        173,
        174,
        182,
        189,
        197,
        203,
        204,
        207,
        213,
        214,
        216,
        218,
        231,
        237,
        240,
        241,
        251
      ]
    },
    {
      level: 5,
      species: 32,
      gender: '♂',
      stats: {
        hp: 20,
        attack: 11,
        defense: 9,
        spclAtk: 9,
        spclDef: 9,
        speed: 10
      },
      friendship: 128,
      learnableMoves: [
        24,
        29,
        30,
        31,
        32,
        33,
        34,
        36,
        38,
        40,
        43,
        48,
        50,
        59,
        68,
        85,
        87,
        92,
        93,
        99,
        102,
        104,
        111,
        115,
        116,
        117,
        130,
        133,
        156,
        164,
        168,
        173,
        174,
        182,
        189,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        231,
        237,
        240,
        241,
        251
      ]
    },
    {
      level: 5,
      species: 37,
      gender: '♀',
      stats: {
        hp: 19,
        attack: 9,
        defense: 9,
        spclAtk: 10,
        spclDef: 12,
        speed: 12
      },
      friendship: 128,
      learnableMoves: [
        29,
        34,
        36,
        38,
        39,
        46,
        50,
        52,
        53,
        83,
        91,
        92,
        95,
        98,
        99,
        102,
        104,
        109,
        115,
        117,
        126,
        129,
        130,
        156,
        164,
        173,
        174,
        175,
        180,
        182,
        185,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        231,
        237,
        241
      ]
    },
    {
      level: 5,
      species: 41,
      gender: '♂',
      stats: {
        hp: 19,
        attack: 10,
        defense: 9,
        spclAtk: 8,
        spclDef: 9,
        speed: 11
      },
      friendship: 128,
      learnableMoves: [
        13,
        16,
        17,
        18,
        36,
        38,
        44,
        48,
        72,
        92,
        98,
        99,
        102,
        104,
        109,
        114,
        117,
        129,
        141,
        156,
        164,
        168,
        173,
        174,
        182,
        185,
        197,
        202,
        203,
        207,
        211,
        212,
        213,
        214,
        216,
        218,
        228,
        237,
        241
      ]
    },
    {
      level: 5,
      species: 43,
      gender: '♀',
      stats: {
        hp: 19,
        attack: 10,
        defense: 11,
        spclAtk: 12,
        spclDef: 11,
        speed: 8
      },
      friendship: 128,
      learnableMoves: [
        14,
        15,
        36,
        38,
        51,
        71,
        72,
        75,
        76,
        77,
        78,
        79,
        80,
        92,
        99,
        102,
        104,
        115,
        117,
        148,
        156,
        164,
        173,
        174,
        175,
        182,
        188,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        230,
        235,
        236,
        237,
        241
      ]
    },
    {
      level: 5,
      species: 46,
      gender: '♀',
      stats: {
        hp: 19,
        attack: 12,
        defense: 11,
        spclAtk: 10,
        spclDef: 11,
        speed: 8
      },
      friendship: 128,
      learnableMoves: [
        10,
        14,
        15,
        34,
        36,
        38,
        60,
        68,
        72,
        74,
        76,
        77,
        78,
        91,
        92,
        99,
        102,
        103,
        104,
        113,
        115,
        117,
        130,
        141,
        147,
        148,
        156,
        163,
        164,
        168,
        173,
        174,
        175,
        182,
        188,
        202,
        203,
        206,
        207,
        210,
        213,
        214,
        216,
        218,
        228,
        230,
        237,
        241,
        249
      ]
    },
    {
      level: 5,
      species: 48,
      gender: '♀',
      stats: {
        hp: 21,
        attack: 11,
        defense: 10,
        spclAtk: 9,
        spclDef: 11,
        speed: 10
      },
      friendship: 128,
      learnableMoves: [
        33,
        36,
        38,
        48,
        50,
        60,
        72,
        76,
        77,
        78,
        79,
        92,
        93,
        94,
        99,
        102,
        103,
        104,
        115,
        117,
        129,
        141,
        148,
        149,
        156,
        164,
        168,
        173,
        174,
        182,
        188,
        193,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        226,
        230,
        237,
        241
      ]
    },
    {
      level: 5,
      species: 50,
      gender: '♂',
      stats: {
        hp: 16,
        attack: 11,
        defense: 8,
        spclAtk: 9,
        spclDef: 10,
        speed: 15
      },
      friendship: 128,
      learnableMoves: [
        10,
        15,
        28,
        34,
        36,
        38,
        45,
        89,
        90,
        91,
        92,
        99,
        102,
        103,
        104,
        117,
        156,
        157,
        163,
        164,
        168,
        173,
        174,
        182,
        185,
        188,
        189,
        203,
        207,
        213,
        214,
        216,
        218,
        222,
        228,
        237,
        241,
        246,
        249,
        251
      ]
    },
    {
      level: 5,
      species: 52,
      gender: '♀',
      stats: {
        hp: 19,
        attack: 10,
        defense: 9,
        spclAtk: 9,
        spclDef: 9,
        speed: 14
      },
      friendship: 128,
      learnableMoves: [
        6,
        10,
        29,
        34,
        36,
        38,
        44,
        45,
        55,
        61,
        85,
        87,
        92,
        95,
        99,
        102,
        103,
        104,
        111,
        117,
        129,
        130,
        133,
        138,
        154,
        156,
        163,
        164,
        168,
        171,
        173,
        174,
        180,
        182,
        185,
        189,
        192,
        196,
        197,
        203,
        204,
        207,
        213,
        214,
        216,
        218,
        231,
        237,
        241,
        244,
        247
      ]
    },
    {
      level: 5,
      species: 54,
      gender: '♀',
      stats: {
        hp: 20,
        attack: 10,
        defense: 10,
        spclAtk: 11,
        spclDef: 10,
        speed: 10
      },
      friendship: 128,
      learnableMoves: [
        5,
        6,
        8,
        10,
        25,
        29,
        34,
        36,
        38,
        39,
        50,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        66,
        68,
        69,
        70,
        91,
        92,
        93,
        94,
        95,
        99,
        102,
        103,
        104,
        113,
        117,
        127,
        129,
        130,
        133,
        148,
        154,
        156,
        164,
        173,
        174,
        182,
        189,
        193,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        231,
        237,
        238,
        240,
        244,
        248,
        249,
        250
      ]
    },
    {
      level: 5,
      species: 56,
      gender: '♀',
      stats: {
        hp: 19,
        attack: 13,
        defense: 9,
        spclAtk: 9,
        spclDef: 10,
        speed: 12
      },
      friendship: 128,
      learnableMoves: [
        2,
        5,
        6,
        7,
        8,
        9,
        10,
        25,
        29,
        34,
        36,
        37,
        38,
        43,
        66,
        67,
        68,
        69,
        70,
        85,
        87,
        91,
        92,
        96,
        99,
        102,
        103,
        104,
        111,
        116,
        117,
        118,
        129,
        130,
        154,
        156,
        157,
        164,
        168,
        173,
        174,
        179,
        182,
        189,
        193,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        231,
        237,
        238,
        241,
        244,
        249,
        251
      ]
    },
    {
      level: 5,
      species: 58,
      gender: '♂',
      stats: {
        hp: 21,
        attack: 12,
        defense: 10,
        spclAtk: 12,
        spclDef: 10,
        speed: 11
      },
      friendship: 128,
      learnableMoves: [
        29,
        34,
        36,
        37,
        38,
        43,
        44,
        46,
        52,
        53,
        82,
        83,
        91,
        92,
        97,
        99,
        102,
        104,
        115,
        117,
        126,
        129,
        130,
        156,
        164,
        172,
        173,
        174,
        182,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        225,
        231,
        237,
        241,
        242,
        249
      ]
    },
    {
      level: 5,
      species: 60,
      gender: '♀',
      stats: {
        hp: 19,
        attack: 10,
        defense: 9,
        spclAtk: 9,
        spclDef: 9,
        speed: 14
      },
      friendship: 128,
      learnableMoves: [
        3,
        29,
        34,
        36,
        38,
        54,
        55,
        56,
        57,
        58,
        59,
        61,
        92,
        94,
        95,
        99,
        102,
        104,
        111,
        114,
        117,
        127,
        130,
        133,
        145,
        149,
        150,
        156,
        164,
        168,
        170,
        173,
        174,
        182,
        187,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        237,
        240,
        250
      ]
    },
    {
      level: 5,
      species: 63,
      gender: '♂',
      stats: {
        hp: 18,
        attack: 7,
        defense: 7,
        spclAtk: 16,
        spclDef: 11,
        speed: 14
      },
      friendship: 128,
      learnableMoves: [
        5,
        7,
        8,
        9,
        25,
        29,
        34,
        36,
        38,
        66,
        68,
        69,
        86,
        92,
        94,
        99,
        100,
        102,
        104,
        112,
        113,
        115,
        117,
        118,
        130,
        138,
        148,
        149,
        156,
        161,
        164,
        168,
        171,
        173,
        174,
        182,
        192,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        227,
        237,
        240,
        241,
        244,
        247
      ]
    },
    {
      level: 5,
      species: 66,
      gender: '♂',
      stats: {
        hp: 22,
        attack: 13,
        defense: 10,
        spclAtk: 9,
        spclDef: 9,
        speed: 9
      },
      friendship: 128,
      learnableMoves: [
        2,
        5,
        7,
        8,
        9,
        25,
        27,
        29,
        34,
        36,
        38,
        43,
        53,
        66,
        67,
        68,
        69,
        70,
        89,
        90,
        91,
        92,
        96,
        99,
        102,
        104,
        113,
        116,
        117,
        118,
        126,
        130,
        156,
        157,
        164,
        168,
        173,
        174,
        182,
        184,
        189,
        193,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        227,
        233,
        237,
        238,
        241,
        249
      ]
    },
    {
      level: 5,
      species: 69,
      gender: '♀',
      stats: {
        hp: 20,
        attack: 13,
        defense: 9,
        spclAtk: 12,
        spclDef: 8,
        speed: 9
      },
      friendship: 128,
      learnableMoves: [
        14,
        15,
        21,
        22,
        35,
        36,
        38,
        51,
        72,
        74,
        75,
        76,
        77,
        78,
        79,
        92,
        99,
        102,
        104,
        115,
        117,
        141,
        148,
        156,
        164,
        173,
        174,
        182,
        188,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        227,
        230,
        235,
        237,
        241
      ]
    },
    {
      level: 5,
      species: 72,
      gender: '♀',
      stats: {
        hp: 19,
        attack: 9,
        defense: 9,
        spclAtk: 10,
        spclDef: 15,
        speed: 12
      },
      friendship: 128,
      learnableMoves: [
        14,
        15,
        35,
        36,
        38,
        40,
        48,
        51,
        55,
        56,
        57,
        58,
        59,
        61,
        62,
        72,
        92,
        99,
        102,
        103,
        104,
        112,
        114,
        115,
        117,
        130,
        132,
        156,
        164,
        173,
        174,
        182,
        188,
        196,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        229,
        237,
        240,
        243,
        250
      ]
    },
    {
      level: 5,
      species: 74,
      gender: '♀',
      stats: {
        hp: 19,
        attack: 13,
        defense: 15,
        spclAtk: 8,
        spclDef: 8,
        speed: 7
      },
      friendship: 128,
      learnableMoves: [
        5,
        7,
        29,
        33,
        34,
        36,
        38,
        53,
        66,
        68,
        69,
        70,
        88,
        89,
        90,
        91,
        92,
        99,
        102,
        104,
        106,
        111,
        117,
        118,
        120,
        126,
        153,
        156,
        157,
        164,
        173,
        174,
        182,
        189,
        201,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        222,
        223,
        237,
        241,
        249
      ]
    },
    {
      level: 5,
      species: 77,
      gender: '♀',
      stats: {
        hp: 20,
        attack: 13,
        defense: 11,
        spclAtk: 11,
        spclDef: 11,
        speed: 14
      },
      friendship: 128,
      learnableMoves: [
        23,
        24,
        29,
        32,
        33,
        34,
        36,
        37,
        38,
        39,
        45,
        52,
        53,
        83,
        92,
        95,
        97,
        98,
        99,
        102,
        104,
        115,
        117,
        126,
        129,
        130,
        156,
        164,
        172,
        173,
        174,
        182,
        203,
        204,
        207,
        213,
        214,
        216,
        218,
        231,
        237,
        241
      ]
    },
    {
      level: 5,
      species: 79,
      gender: '♀',
      stats: {
        hp: 24,
        attack: 12,
        defense: 12,
        spclAtk: 9,
        spclDef: 9,
        speed: 7
      },
      friendship: 128,
      learnableMoves: [
        6,
        23,
        29,
        33,
        34,
        36,
        38,
        45,
        50,
        53,
        55,
        57,
        58,
        59,
        61,
        70,
        86,
        89,
        90,
        91,
        92,
        93,
        94,
        99,
        100,
        102,
        104,
        115,
        117,
        126,
        129,
        130,
        133,
        138,
        148,
        149,
        156,
        161,
        164,
        171,
        173,
        174,
        182,
        187,
        189,
        192,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        231,
        237,
        240,
        241,
        244,
        247,
        248
      ]
    },
    {
      level: 5,
      species: 81,
      gender: '',
      stats: {
        hp: 17,
        attack: 8,
        defense: 12,
        spclAtk: 14,
        spclDef: 10,
        speed: 9
      },
      friendship: 40,
      learnableMoves: [
        33,
        36,
        38,
        48,
        49,
        84,
        85,
        86,
        87,
        92,
        99,
        100,
        102,
        103,
        104,
        115,
        117,
        129,
        148,
        156,
        164,
        173,
        174,
        182,
        192,
        199,
        203,
        205,
        207,
        214,
        216,
        218,
        237,
        240
      ]
    },
    {
      level: 5,
      species: 84,
      gender: '♀',
      stats: {
        hp: 19,
        attack: 14,
        defense: 10,
        spclAtk: 9,
        spclDef: 9,
        speed: 13
      },
      friendship: 128,
      learnableMoves: [
        18,
        19,
        31,
        34,
        36,
        38,
        45,
        48,
        64,
        65,
        92,
        97,
        98,
        99,
        102,
        104,
        114,
        115,
        117,
        129,
        130,
        143,
        156,
        161,
        164,
        168,
        173,
        174,
        175,
        182,
        185,
        189,
        203,
        207,
        211,
        213,
        214,
        216,
        218,
        228,
        237,
        241
      ]
    },
    {
      level: 5,
      species: 86,
      gender: '♀',
      stats: {
        hp: 21,
        attack: 9,
        defense: 11,
        spclAtk: 9,
        spclDef: 12,
        speed: 9
      },
      friendship: 128,
      learnableMoves: [
        6,
        21,
        29,
        32,
        34,
        36,
        38,
        45,
        50,
        55,
        57,
        58,
        59,
        61,
        62,
        64,
        70,
        92,
        99,
        102,
        104,
        117,
        122,
        127,
        130,
        156,
        164,
        173,
        174,
        182,
        195,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        227,
        237,
        240,
        250
      ]
    },
    {
      level: 5,
      species: 88,
      gender: '♀',
      stats: {
        hp: 23,
        attack: 13,
        defense: 10,
        spclAtk: 9,
        spclDef: 10,
        speed: 7
      },
      friendship: 60,
      learnableMoves: [
        1,
        7,
        8,
        9,
        34,
        50,
        53,
        72,
        85,
        87,
        92,
        99,
        102,
        103,
        104,
        106,
        107,
        114,
        117,
        120,
        122,
        124,
        126,
        139,
        151,
        153,
        156,
        164,
        168,
        173,
        174,
        182,
        188,
        189,
        192,
        202,
        203,
        207,
        212,
        213,
        214,
        216,
        218,
        223,
        237,
        241
      ]
    },
    {
      level: 5,
      species: 90,
      gender: '♀',
      stats: {
        hp: 18,
        attack: 12,
        defense: 15,
        spclAtk: 10,
        spclDef: 8,
        speed: 9
      },
      friendship: 128,
      learnableMoves: [
        33,
        36,
        38,
        43,
        48,
        55,
        57,
        58,
        59,
        61,
        62,
        92,
        99,
        100,
        102,
        103,
        104,
        110,
        112,
        115,
        117,
        120,
        128,
        129,
        153,
        156,
        161,
        164,
        173,
        174,
        182,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        229,
        237,
        240,
        250
      ]
    },
    {
      level: 5,
      species: 92,
      gender: '♀',
      stats: {
        hp: 18,
        attack: 9,
        defense: 8,
        spclAtk: 15,
        spclDef: 9,
        speed: 13
      },
      friendship: 128,
      learnableMoves: [
        72,
        85,
        87,
        92,
        94,
        95,
        99,
        101,
        102,
        104,
        109,
        114,
        117,
        120,
        122,
        138,
        149,
        153,
        156,
        164,
        168,
        171,
        173,
        174,
        180,
        182,
        192,
        194,
        195,
        202,
        203,
        207,
        212,
        213,
        214,
        216,
        218,
        237,
        240,
        241,
        244,
        247
      ]
    },
    {
      level: 5,
      species: 95,
      gender: '♀',
      stats: {
        hp: 18,
        attack: 9,
        defense: 21,
        spclAtk: 8,
        spclDef: 9,
        speed: 12
      },
      friendship: 128,
      learnableMoves: [
        20,
        21,
        29,
        33,
        34,
        36,
        38,
        46,
        70,
        88,
        89,
        90,
        91,
        92,
        99,
        102,
        103,
        104,
        106,
        117,
        120,
        130,
        153,
        156,
        157,
        164,
        173,
        174,
        175,
        182,
        189,
        201,
        203,
        207,
        213,
        214,
        216,
        218,
        231,
        237,
        241,
        249
      ]
    },
    {
      level: 5,
      species: 96,
      gender: '♀',
      stats: {
        hp: 21,
        attack: 10,
        defense: 10,
        spclAtk: 9,
        spclDef: 14,
        speed: 9
      },
      friendship: 128,
      learnableMoves: [
        1,
        5,
        7,
        8,
        9,
        25,
        29,
        34,
        36,
        38,
        50,
        66,
        68,
        69,
        86,
        92,
        93,
        94,
        95,
        96,
        99,
        100,
        102,
        104,
        112,
        113,
        115,
        117,
        118,
        130,
        138,
        139,
        148,
        149,
        156,
        161,
        164,
        171,
        173,
        174,
        182,
        192,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        237,
        240,
        241,
        244,
        247,
        248
      ]
    },
    {
      level: 5,
      species: 98,
      gender: '♀',
      stats: {
        hp: 18,
        attack: 15,
        defense: 14,
        spclAtk: 7,
        spclDef: 7,
        speed: 10
      },
      friendship: 128,
      learnableMoves: [
        11,
        12,
        14,
        15,
        21,
        23,
        34,
        36,
        38,
        43,
        55,
        57,
        58,
        59,
        61,
        70,
        91,
        92,
        99,
        102,
        104,
        106,
        114,
        117,
        133,
        145,
        152,
        156,
        164,
        168,
        173,
        174,
        175,
        182,
        189,
        196,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        237,
        240,
        249,
        250
      ]
    },
    {
      level: 5,
      species: 100,
      gender: '',
      stats: {
        hp: 19,
        attack: 8,
        defense: 10,
        spclAtk: 10,
        spclDef: 10,
        speed: 15
      },
      friendship: 128,
      learnableMoves: [
        29,
        33,
        36,
        49,
        85,
        86,
        87,
        92,
        99,
        100,
        102,
        103,
        104,
        113,
        115,
        117,
        120,
        129,
        148,
        153,
        156,
        164,
        173,
        174,
        182,
        192,
        203,
        205,
        207,
        214,
        216,
        218,
        237,
        240,
        243
      ]
    },
    {
      level: 5,
      species: 102,
      gender: '♀',
      stats: {
        hp: 21,
        attack: 9,
        defense: 13,
        spclAtk: 11,
        spclDef: 9,
        speed: 9
      },
      friendship: 128,
      learnableMoves: [
        36,
        38,
        70,
        72,
        73,
        76,
        77,
        78,
        79,
        92,
        93,
        94,
        95,
        99,
        100,
        102,
        104,
        115,
        117,
        120,
        121,
        138,
        140,
        148,
        149,
        153,
        156,
        164,
        168,
        171,
        173,
        174,
        182,
        188,
        202,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        235,
        236,
        237,
        241,
        244,
        246
      ]
    },
    {
      level: 5,
      species: 104,
      gender: '♀',
      stats: {
        hp: 20,
        attack: 10,
        defense: 15,
        spclAtk: 9,
        spclDef: 10,
        speed: 8
      },
      friendship: 128,
      learnableMoves: [
        5,
        7,
        9,
        14,
        25,
        29,
        34,
        36,
        37,
        38,
        39,
        43,
        45,
        53,
        55,
        58,
        59,
        61,
        66,
        68,
        69,
        70,
        89,
        90,
        91,
        92,
        99,
        102,
        103,
        104,
        116,
        117,
        125,
        126,
        130,
        155,
        156,
        157,
        164,
        168,
        173,
        174,
        182,
        187,
        189,
        195,
        196,
        197,
        198,
        201,
        203,
        206,
        207,
        213,
        214,
        216,
        218,
        223,
        231,
        237,
        241,
        246,
        249
      ]
    },
    {
      level: 5,
      species: 109,
      gender: '♀',
      stats: {
        hp: 19,
        attack: 11,
        defense: 15,
        spclAtk: 11,
        spclDef: 9,
        speed: 8
      },
      friendship: 128,
      learnableMoves: [
        33,
        53,
        60,
        85,
        87,
        92,
        99,
        102,
        103,
        104,
        108,
        114,
        117,
        120,
        123,
        124,
        126,
        139,
        149,
        153,
        156,
        164,
        168,
        173,
        174,
        182,
        188,
        192,
        194,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        220,
        237,
        241
      ]
    },
    {
      level: 5,
      species: 111,
      gender: '♀',
      stats: {
        hp: 23,
        attack: 13,
        defense: 15,
        spclAtk: 8,
        spclDef: 8,
        speed: 7
      },
      friendship: 128,
      learnableMoves: [
        23,
        29,
        30,
        31,
        32,
        34,
        36,
        37,
        38,
        39,
        43,
        46,
        53,
        58,
        59,
        68,
        70,
        85,
        87,
        89,
        90,
        91,
        92,
        99,
        102,
        104,
        117,
        126,
        130,
        156,
        157,
        164,
        173,
        174,
        179,
        182,
        184,
        189,
        192,
        196,
        201,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        222,
        228,
        231,
        237,
        241,
        242,
        249
      ]
    },
    {
      level: 5,
      species: 113,
      gender: '♀',
      stats: {
        hp: 40,
        attack: 5,
        defense: 5,
        spclAtk: 8,
        spclDef: 15,
        speed: 10
      },
      friendship: 128,
      learnableMoves: [
        1,
        3,
        5,
        25,
        29,
        34,
        36,
        38,
        39,
        45,
        47,
        53,
        55,
        58,
        59,
        61,
        63,
        66,
        68,
        69,
        70,
        76,
        85,
        86,
        87,
        92,
        94,
        99,
        100,
        102,
        104,
        107,
        111,
        113,
        115,
        117,
        118,
        121,
        126,
        130,
        135,
        138,
        148,
        149,
        156,
        161,
        164,
        173,
        174,
        182,
        189,
        192,
        196,
        201,
        203,
        205,
        207,
        213,
        214,
        215,
        216,
        217,
        218,
        223,
        231,
        237,
        240,
        241,
        244,
        247,
        249
      ]
    },
    {
      level: 5,
      species: 116,
      gender: '♀',
      stats: {
        hp: 18,
        attack: 9,
        defense: 12,
        spclAtk: 12,
        spclDef: 8,
        speed: 11
      },
      friendship: 128,
      learnableMoves: [
        29,
        36,
        38,
        43,
        50,
        55,
        56,
        57,
        58,
        59,
        61,
        62,
        82,
        92,
        97,
        99,
        102,
        104,
        108,
        117,
        127,
        129,
        130,
        145,
        150,
        156,
        164,
        173,
        174,
        175,
        182,
        190,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        225,
        237,
        239,
        240,
        250
      ]
    },
    {
      level: 5,
      species: 118,
      gender: '♀',
      stats: {
        hp: 19,
        attack: 12,
        defense: 11,
        spclAtk: 8,
        spclDef: 10,
        speed: 11
      },
      friendship: 128,
      learnableMoves: [
        30,
        31,
        32,
        36,
        38,
        39,
        48,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        64,
        92,
        97,
        99,
        102,
        104,
        114,
        117,
        127,
        129,
        130,
        156,
        164,
        173,
        174,
        175,
        182,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        237,
        240
      ]
    },
    {
      level: 5,
      species: 120,
      gender: '',
      stats: {
        hp: 18,
        attack: 9,
        defense: 11,
        spclAtk: 12,
        spclDef: 10,
        speed: 13
      },
      friendship: 128,
      learnableMoves: [
        33,
        36,
        38,
        55,
        56,
        57,
        58,
        59,
        61,
        85,
        86,
        87,
        92,
        94,
        99,
        100,
        102,
        104,
        105,
        106,
        107,
        113,
        115,
        117,
        127,
        129,
        130,
        148,
        149,
        156,
        161,
        164,
        173,
        174,
        182,
        192,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        229,
        237,
        240,
        244,
        250
      ]
    },
    {
      level: 5,
      species: 123,
      gender: '♀',
      stats: {
        hp: 22,
        attack: 16,
        defense: 13,
        spclAtk: 10,
        spclDef: 13,
        speed: 15
      },
      friendship: 128,
      learnableMoves: [
        13,
        14,
        15,
        17,
        29,
        36,
        38,
        43,
        63,
        68,
        92,
        97,
        98,
        99,
        102,
        104,
        113,
        116,
        117,
        129,
        130,
        156,
        163,
        164,
        168,
        173,
        174,
        179,
        182,
        197,
        203,
        206,
        207,
        210,
        211,
        213,
        214,
        216,
        218,
        219,
        226,
        228,
        237,
        241,
        249
      ]
    },
    {
      level: 5,
      species: 129,
      gender: '♂',
      stats: {
        hp: 18,
        attack: 7,
        defense: 11,
        spclAtk: 7,
        spclDef: 8,
        speed: 14
      },
      friendship: 128,
      learnableMoves: [
        33,
        82,
        150,
        175
      ]
    },
    {
      level: 5,
      species: 133,
      gender: '♂',
      stats: {
        hp: 20,
        attack: 10,
        defense: 10,
        spclAtk: 9,
        spclDef: 11,
        speed: 10
      },
      friendship: 128,
      learnableMoves: [
        28,
        29,
        33,
        34,
        36,
        38,
        39,
        44,
        45,
        92,
        98,
        99,
        102,
        104,
        115,
        116,
        117,
        129,
        130,
        156,
        164,
        173,
        174,
        175,
        182,
        189,
        197,
        203,
        204,
        207,
        213,
        214,
        216,
        218,
        226,
        231,
        237,
        240,
        241,
        247
      ]
    },
    {
      level: 5,
      species: 137,
      gender: '',
      stats: {
        hp: 21,
        attack: 11,
        defense: 12,
        spclAtk: 13,
        spclDef: 12,
        speed: 9
      },
      friendship: 128,
      learnableMoves: [
        33,
        36,
        38,
        58,
        59,
        60,
        63,
        85,
        86,
        87,
        92,
        94,
        97,
        99,
        100,
        102,
        104,
        105,
        115,
        117,
        129,
        130,
        138,
        148,
        149,
        156,
        159,
        160,
        161,
        164,
        168,
        171,
        173,
        174,
        176,
        182,
        192,
        196,
        199,
        203,
        207,
        214,
        216,
        218,
        231,
        237,
        240,
        241,
        244
      ]
    },
    {
      level: 5,
      species: 138,
      gender: '♂',
      stats: {
        hp: 18,
        attack: 9,
        defense: 15,
        spclAtk: 14,
        spclDef: 10,
        speed: 8
      },
      friendship: 128,
      learnableMoves: [
        21,
        29,
        30,
        34,
        36,
        38,
        43,
        44,
        48,
        55,
        56,
        57,
        58,
        59,
        61,
        62,
        92,
        99,
        102,
        104,
        110,
        114,
        115,
        117,
        131,
        132,
        156,
        164,
        168,
        173,
        174,
        182,
        196,
        201,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        237,
        240,
        246,
        249,
        250
      ]
    },
    {
      level: 5,
      species: 140,
      gender: '♂',
      stats: {
        hp: 18,
        attack: 13,
        defense: 14,
        spclAtk: 10,
        spclDef: 9,
        speed: 10
      },
      friendship: 180,
      learnableMoves: [
        10,
        28,
        34,
        36,
        38,
        43,
        55,
        56,
        57,
        58,
        59,
        61,
        62,
        71,
        72,
        91,
        92,
        99,
        102,
        104,
        106,
        115,
        117,
        156,
        163,
        164,
        168,
        173,
        174,
        175,
        182,
        196,
        201,
        202,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        229,
        237,
        240,
        246,
        249
      ]
    },
    {
      level: 5,
      species: 147,
      gender: '♀',
      stats: {
        hp: 19,
        attack: 12,
        defense: 10,
        spclAtk: 10,
        spclDef: 10,
        speed: 10
      },
      friendship: 128,
      learnableMoves: [
        21,
        29,
        34,
        35,
        36,
        38,
        43,
        48,
        53,
        54,
        55,
        57,
        58,
        59,
        61,
        63,
        82,
        85,
        86,
        87,
        92,
        97,
        99,
        102,
        104,
        113,
        114,
        115,
        117,
        126,
        127,
        129,
        130,
        156,
        164,
        173,
        174,
        182,
        192,
        196,
        197,
        200,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        225,
        231,
        237,
        239,
        240,
        245
      ]
    },
    {
      level: 5,
      species: 152,
      gender: '♂',
      stats: {
        hp: 20,
        attack: 10,
        defense: 12,
        spclAtk: 10,
        spclDef: 12,
        speed: 10
      },
      friendship: 128,
      learnableMoves: [
        14,
        15,
        22,
        29,
        33,
        34,
        45,
        68,
        73,
        75,
        76,
        77,
        92,
        104,
        113,
        115,
        148,
        156,
        173,
        174,
        175,
        182,
        189,
        197,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        230,
        231,
        235,
        237,
        241,
        246
      ]
    },
    {
      level: 5,
      species: 155,
      gender: '♂',
      stats: {
        hp: 19,
        attack: 10,
        defense: 9,
        spclAtk: 11,
        spclDef: 10,
        speed: 12
      },
      friendship: 128,
      learnableMoves: [
        15,
        29,
        33,
        37,
        43,
        52,
        53,
        66,
        91,
        92,
        98,
        104,
        108,
        111,
        126,
        129,
        154,
        156,
        172,
        173,
        174,
        179,
        182,
        189,
        193,
        197,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        231,
        237,
        241
      ]
    },
    {
      level: 5,
      species: 158,
      gender: '♂',
      stats: {
        hp: 20,
        attack: 12,
        defense: 12,
        spclAtk: 10,
        spclDef: 10,
        speed: 9
      },
      friendship: 128,
      learnableMoves: [
        8,
        10,
        13,
        15,
        29,
        37,
        43,
        44,
        55,
        56,
        57,
        58,
        59,
        91,
        92,
        99,
        103,
        104,
        156,
        157,
        163,
        173,
        174,
        182,
        184,
        189,
        196,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        231,
        237,
        240,
        242,
        246,
        250
      ]
    },
    {
      level: 5,
      species: 161,
      gender: '♂',
      stats: {
        hp: 19,
        attack: 10,
        defense: 9,
        spclAtk: 9,
        spclDef: 10,
        speed: 8
      },
      friendship: 128,
      learnableMoves: [
        7,
        8,
        9,
        15,
        21,
        29,
        33,
        38,
        57,
        91,
        92,
        98,
        104,
        111,
        116,
        129,
        133,
        154,
        156,
        163,
        168,
        173,
        174,
        179,
        182,
        189,
        197,
        203,
        205,
        207,
        210,
        213,
        214,
        216,
        218,
        223,
        228,
        231,
        237,
        241,
        247
      ]
    },
    {
      level: 5,
      species: 163,
      gender: '♂',
      stats: {
        hp: 21,
        attack: 8,
        defense: 8,
        spclAtk: 9,
        spclDef: 11,
        speed: 10
      },
      friendship: 128,
      learnableMoves: [
        17,
        18,
        19,
        33,
        36,
        45,
        48,
        64,
        92,
        93,
        95,
        104,
        115,
        119,
        129,
        138,
        143,
        148,
        156,
        168,
        171,
        173,
        174,
        182,
        185,
        189,
        193,
        197,
        203,
        207,
        211,
        213,
        214,
        216,
        218,
        237,
        241
      ]
    },
    {
      level: 5,
      species: 165,
      gender: '♂',
      stats: {
        hp: 19,
        attack: 7,
        defense: 8,
        spclAtk: 9,
        spclDef: 13,
        speed: 11
      },
      friendship: 128,
      learnableMoves: [
        4,
        8,
        9,
        29,
        33,
        38,
        48,
        60,
        76,
        91,
        92,
        97,
        104,
        113,
        115,
        117,
        129,
        148,
        156,
        168,
        173,
        174,
        182,
        202,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        219,
        223,
        226,
        230,
        237,
        241
      ]
    },
    {
      level: 5,
      species: 167,
      gender: '♂',
      stats: {
        hp: 19,
        attack: 11,
        defense: 9,
        spclAtk: 9,
        spclDef: 9,
        speed: 8
      },
      friendship: 128,
      learnableMoves: [
        40,
        49,
        50,
        60,
        76,
        81,
        91,
        92,
        94,
        97,
        101,
        103,
        104,
        132,
        141,
        148,
        154,
        156,
        168,
        169,
        173,
        174,
        182,
        184,
        188,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        226,
        228,
        237,
        241
      ]
    },
    {
      level: 5,
      species: 170,
      gender: '♀',
      stats: {
        hp: 22,
        attack: 9,
        defense: 9,
        spclAtk: 11,
        spclDef: 11,
        speed: 12
      },
      friendship: 128,
      learnableMoves: [
        36,
        48,
        55,
        56,
        57,
        58,
        85,
        86,
        87,
        92,
        103,
        104,
        109,
        127,
        145,
        148,
        156,
        173,
        174,
        175,
        182,
        192,
        203,
        207,
        209,
        213,
        214,
        216,
        218,
        237,
        240,
        250
      ]
    },
    {
      level: 5,
      species: 172,
      gender: '♂',
      stats: {
        hp: 18,
        attack: 10,
        defense: 7,
        spclAtk: 9,
        spclDef: 9,
        speed: 12
      },
      friendship: 128,
      learnableMoves: [
        3,
        29,
        39,
        84,
        85,
        86,
        87,
        92,
        104,
        111,
        117,
        129,
        148,
        156,
        173,
        174,
        179,
        182,
        186,
        189,
        192,
        197,
        203,
        204,
        205,
        207,
        213,
        214,
        216,
        217,
        218,
        227,
        231,
        237,
        240
      ]
    },
    {
      level: 5,
      species: 173,
      gender: '♀',
      stats: {
        hp: 21,
        attack: 8,
        defense: 8,
        spclAtk: 10,
        spclDef: 11,
        speed: 7
      },
      friendship: 128,
      learnableMoves: [
        1,
        29,
        47,
        53,
        76,
        92,
        94,
        102,
        104,
        111,
        118,
        126,
        133,
        138,
        148,
        150,
        156,
        171,
        173,
        174,
        182,
        186,
        187,
        189,
        192,
        196,
        197,
        203,
        204,
        205,
        207,
        213,
        214,
        216,
        217,
        218,
        227,
        231,
        237,
        240,
        241,
        244,
        247
      ]
    },
    {
      level: 5,
      species: 174,
      gender: '♀',
      stats: {
        hp: 25,
        attack: 9,
        defense: 7,
        spclAtk: 10,
        spclDef: 8,
        speed: 7
      },
      friendship: 128,
      learnableMoves: [
        1,
        29,
        47,
        53,
        76,
        92,
        94,
        104,
        111,
        126,
        138,
        148,
        156,
        171,
        173,
        174,
        182,
        185,
        186,
        189,
        192,
        195,
        196,
        197,
        203,
        204,
        205,
        207,
        213,
        214,
        216,
        217,
        218,
        237,
        240,
        241,
        244,
        247
      ]
    },
    {
      level: 5,
      species: 175,
      gender: '♂',
      stats: {
        hp: 19,
        attack: 7,
        defense: 12,
        spclAtk: 9,
        spclDef: 12,
        speed: 7
      },
      friendship: 128,
      learnableMoves: [
        29,
        38,
        45,
        53,
        64,
        76,
        92,
        94,
        104,
        111,
        118,
        119,
        126,
        129,
        138,
        148,
        156,
        173,
        174,
        182,
        186,
        189,
        192,
        193,
        197,
        203,
        204,
        205,
        207,
        213,
        214,
        216,
        217,
        218,
        219,
        227,
        237,
        240,
        241,
        244,
        247,
        248,
        249
      ]
    },
    {
      level: 5,
      species: 177,
      gender: '♀',
      stats: {
        hp: 19,
        attack: 10,
        defense: 10,
        spclAtk: 12,
        spclDef: 9,
        speed: 12
      },
      friendship: 128,
      learnableMoves: [
        43,
        64,
        65,
        76,
        92,
        94,
        98,
        100,
        101,
        104,
        109,
        114,
        129,
        138,
        148,
        156,
        168,
        171,
        173,
        174,
        182,
        185,
        197,
        202,
        203,
        207,
        211,
        213,
        214,
        216,
        218,
        237,
        241,
        244,
        248
      ]
    },
    {
      level: 5,
      species: 179,
      gender: '♀',
      stats: {
        hp: 21,
        attack: 9,
        defense: 9,
        spclAtk: 12,
        spclDef: 10,
        speed: 9
      },
      friendship: 140,
      learnableMoves: [
        29,
        33,
        34,
        36,
        45,
        84,
        85,
        86,
        87,
        92,
        103,
        104,
        111,
        113,
        115,
        129,
        148,
        156,
        173,
        174,
        178,
        182,
        192,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        231,
        237,
        240
      ]
    },
    {
      level: 5,
      species: 183,
      gender: '♂',
      stats: {
        hp: 22,
        attack: 7,
        defense: 10,
        spclAtk: 7,
        spclDef: 10,
        speed: 9
      },
      friendship: 128,
      learnableMoves: [
        8,
        29,
        33,
        38,
        39,
        48,
        55,
        57,
        58,
        59,
        61,
        92,
        104,
        111,
        113,
        127,
        129,
        133,
        156,
        173,
        174,
        182,
        187,
        189,
        193,
        195,
        196,
        203,
        205,
        207,
        213,
        214,
        216,
        217,
        218,
        223,
        231,
        237,
        240,
        248,
        250
      ]
    },
    {
      level: 5,
      species: 187,
      gender: '♂',
      stats: {
        hp: 19,
        attack: 9,
        defense: 9,
        spclAtk: 9,
        spclDef: 11,
        speed: 10
      },
      friendship: 128,
      learnableMoves: [
        6,
        29,
        33,
        38,
        39,
        45,
        72,
        73,
        76,
        77,
        78,
        79,
        92,
        93,
        104,
        111,
        115,
        133,
        148,
        150,
        156,
        173,
        174,
        178,
        182,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        227,
        230,
        235,
        237,
        241
      ]
    },
    {
      level: 5,
      species: 191,
      gender: '♂',
      stats: {
        hp: 19,
        attack: 9,
        defense: 9,
        spclAtk: 9,
        spclDef: 9,
        speed: 9
      },
      friendship: 128,
      learnableMoves: [
        15,
        71,
        72,
        74,
        76,
        92,
        104,
        148,
        156,
        173,
        174,
        182,
        188,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        230,
        235,
        237,
        241
      ]
    },
    {
      level: 5,
      species: 194,
      gender: '♂',
      stats: {
        hp: 21,
        attack: 10,
        defense: 10,
        spclAtk: 8,
        spclDef: 8,
        speed: 7
      },
      friendship: 128,
      learnableMoves: [
        8,
        21,
        29,
        34,
        39,
        54,
        55,
        57,
        58,
        89,
        91,
        92,
        104,
        111,
        114,
        133,
        148,
        156,
        173,
        174,
        182,
        188,
        189,
        201,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        219,
        223,
        231,
        237,
        240,
        246,
        249,
        250
      ]
    },
    {
      level: 5,
      species: 204,
      gender: '♀',
      stats: {
        hp: 20,
        attack: 12,
        defense: 14,
        spclAtk: 9,
        spclDef: 9,
        speed: 7
      },
      friendship: 128,
      learnableMoves: [
        29,
        33,
        36,
        38,
        42,
        70,
        76,
        92,
        104,
        111,
        115,
        117,
        120,
        129,
        153,
        156,
        173,
        174,
        175,
        182,
        191,
        202,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        229,
        230,
        237,
        241,
        249
      ]
    },
    {
      level: 5,
      species: 209,
      gender: '♀',
      stats: {
        hp: 21,
        attack: 13,
        defense: 10,
        spclAtk: 9,
        spclDef: 9,
        speed: 8
      },
      friendship: 128,
      learnableMoves: [
        7,
        8,
        9,
        29,
        33,
        36,
        39,
        43,
        44,
        46,
        70,
        85,
        87,
        92,
        99,
        104,
        111,
        115,
        118,
        122,
        156,
        168,
        173,
        174,
        182,
        184,
        185,
        188,
        189,
        192,
        197,
        203,
        204,
        207,
        213,
        214,
        215,
        216,
        217,
        218,
        223,
        237,
        240,
        241,
        242,
        247,
        249
      ]
    },
    {
      level: 5,
      species: 216,
      gender: '♀',
      stats: {
        hp: 21,
        attack: 13,
        defense: 10,
        spclAtk: 10,
        spclDef: 10,
        speed: 9
      },
      friendship: 128,
      learnableMoves: [
        7,
        8,
        9,
        10,
        15,
        29,
        36,
        37,
        43,
        46,
        68,
        69,
        70,
        89,
        91,
        92,
        104,
        111,
        116,
        122,
        129,
        154,
        156,
        163,
        168,
        173,
        174,
        182,
        185,
        189,
        192,
        203,
        205,
        207,
        210,
        213,
        214,
        216,
        218,
        223,
        232,
        237,
        241,
        242,
        249
      ]
    },
    {
      level: 5,
      species: 218,
      gender: '♂',
      stats: {
        hp: 19,
        attack: 9,
        defense: 9,
        spclAtk: 12,
        spclDef: 9,
        speed: 7
      },
      friendship: 128,
      learnableMoves: [
        34,
        52,
        53,
        88,
        92,
        104,
        106,
        111,
        123,
        126,
        133,
        151,
        156,
        157,
        173,
        174,
        182,
        189,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        237,
        241,
        249
      ]
    },
    {
      level: 5,
      species: 220,
      gender: '♂',
      stats: {
        hp: 20,
        attack: 10,
        defense: 9,
        spclAtk: 8,
        spclDef: 8,
        speed: 10
      },
      friendship: 128,
      learnableMoves: [
        29,
        33,
        34,
        36,
        44,
        46,
        54,
        58,
        59,
        70,
        89,
        92,
        104,
        111,
        133,
        156,
        157,
        173,
        174,
        181,
        182,
        189,
        196,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        237,
        240,
        246,
        249
      ]
    },
    {
      level: 5,
      species: 223,
      gender: '♀',
      stats: {
        hp: 19,
        attack: 12,
        defense: 9,
        spclAtk: 12,
        spclDef: 9,
        speed: 12
      },
      friendship: 120,
      learnableMoves: [
        48,
        53,
        55,
        57,
        58,
        60,
        61,
        62,
        63,
        92,
        103,
        104,
        111,
        114,
        116,
        129,
        156,
        168,
        173,
        174,
        182,
        189,
        190,
        199,
        203,
        207,
        213,
        214,
        216,
        218,
        237,
        240,
        250
      ]
    },
    {
      level: 5,
      species: 228,
      gender: '♀',
      stats: {
        hp: 19,
        attack: 11,
        defense: 8,
        spclAtk: 13,
        spclDef: 10,
        speed: 11
      },
      friendship: 128,
      learnableMoves: [
        29,
        43,
        44,
        46,
        52,
        53,
        68,
        76,
        83,
        92,
        99,
        104,
        123,
        126,
        129,
        138,
        156,
        168,
        171,
        173,
        174,
        179,
        180,
        182,
        185,
        188,
        189,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        228,
        231,
        237,
        241,
        242,
        247,
        249,
        251
      ]
    },
    {
      level: 5,
      species: 231,
      gender: '♀',
      stats: {
        hp: 24,
        attack: 11,
        defense: 11,
        spclAtk: 9,
        spclDef: 9,
        speed: 9
      },
      friendship: 128,
      learnableMoves: [
        29,
        33,
        34,
        36,
        38,
        45,
        46,
        55,
        70,
        89,
        92,
        104,
        111,
        116,
        156,
        173,
        174,
        175,
        182,
        189,
        201,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        237,
        241,
        246,
        249
      ]
    },
    {
      level: 5,
      species: 236,
      gender: '♂',
      stats: {
        hp: 19,
        attack: 9,
        defense: 9,
        spclAtk: 9,
        spclDef: 9,
        speed: 9
      },
      friendship: 128,
      learnableMoves: [
        29,
        33,
        70,
        92,
        104,
        129,
        136,
        156,
        168,
        170,
        173,
        174,
        182,
        183,
        189,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        229,
        237,
        241,
        249
      ]
    },
    {
      level: 5,
      species: 238,
      gender: '♀',
      stats: {
        hp: 20,
        attack: 8,
        defense: 7,
        spclAtk: 14,
        spclDef: 12,
        speed: 12
      },
      friendship: 128,
      learnableMoves: [
        1,
        8,
        47,
        58,
        59,
        92,
        93,
        94,
        96,
        104,
        122,
        138,
        156,
        168,
        171,
        173,
        174,
        181,
        182,
        186,
        189,
        195,
        196,
        203,
        207,
        212,
        213,
        214,
        216,
        218,
        223,
        230,
        237,
        240,
        244,
        247
      ]
    },
    {
      level: 5,
      species: 239,
      gender: '♂',
      stats: {
        hp: 19,
        attack: 11,
        defense: 9,
        spclAtk: 11,
        spclDef: 10,
        speed: 14
      },
      friendship: 128,
      learnableMoves: [
        2,
        7,
        8,
        9,
        27,
        29,
        43,
        85,
        87,
        92,
        94,
        96,
        98,
        103,
        104,
        112,
        113,
        129,
        148,
        156,
        168,
        173,
        174,
        182,
        189,
        192,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        237,
        238,
        240
      ]
    },
    {
      level: 5,
      species: 240,
      gender: '♂',
      stats: {
        hp: 19,
        attack: 12,
        defense: 9,
        spclAtk: 12,
        spclDef: 10,
        speed: 13
      },
      friendship: 128,
      learnableMoves: [
        2,
        5,
        7,
        9,
        29,
        43,
        52,
        53,
        92,
        94,
        103,
        104,
        108,
        109,
        112,
        123,
        126,
        156,
        168,
        173,
        174,
        182,
        189,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        231,
        237,
        238,
        241
      ]
    },
    {
      level: 5,
      species: 246,
      gender: '♀',
      stats: {
        hp: 20,
        attack: 12,
        defense: 10,
        spclAtk: 10,
        spclDef: 10,
        speed: 9
      },
      friendship: 128,
      learnableMoves: [
        23,
        29,
        37,
        43,
        44,
        63,
        89,
        91,
        92,
        103,
        104,
        116,
        156,
        157,
        173,
        174,
        182,
        184,
        189,
        197,
        200,
        201,
        203,
        207,
        213,
        214,
        216,
        218,
        228,
        237,
        240,
        241,
        242,
        246
      ]
    }
  ],
  primeR1: [
    {
      level: 100,
      species: 1,
      gender: '♂',
      stats: {
        hp: 271,
        attack: 174,
        defense: 176,
        spclAtk: 206,
        spclDef: 206,
        speed: 168
      },
      friendship: 128,
      learnableMoves: [
        13,
        14,
        15,
        22,
        29,
        33,
        34,
        36,
        38,
        45,
        72,
        73,
        74,
        75,
        76,
        77,
        79,
        80,
        92,
        99,
        102,
        104,
        111,
        113,
        115,
        117,
        130,
        148,
        156,
        164,
        173,
        174,
        182,
        189,
        202,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        219,
        230,
        235,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 2,
      gender: '♂',
      stats: {
        hp: 287,
        attack: 188,
        defense: 188,
        spclAtk: 222,
        spclDef: 222,
        speed: 184
      },
      friendship: 128,
      learnableMoves: [
        13,
        14,
        15,
        22,
        29,
        33,
        34,
        36,
        38,
        45,
        72,
        73,
        74,
        75,
        76,
        77,
        79,
        80,
        92,
        99,
        102,
        104,
        111,
        113,
        115,
        117,
        130,
        148,
        156,
        164,
        173,
        174,
        182,
        189,
        202,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        219,
        230,
        235,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 3,
      gender: '♂',
      stats: {
        hp: 313,
        attack: 212,
        defense: 214,
        spclAtk: 248,
        spclDef: 248,
        speed: 206
      },
      friendship: 128,
      learnableMoves: [
        13,
        14,
        15,
        22,
        29,
        33,
        34,
        36,
        38,
        45,
        46,
        63,
        72,
        73,
        74,
        75,
        76,
        77,
        79,
        80,
        92,
        99,
        102,
        104,
        111,
        113,
        115,
        117,
        130,
        148,
        156,
        164,
        173,
        174,
        182,
        189,
        202,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        219,
        230,
        235,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 4,
      gender: '♂',
      stats: {
        hp: 259,
        attack: 180,
        defense: 164,
        spclAtk: 196,
        spclDef: 176,
        speed: 208
      },
      friendship: 128,
      learnableMoves: [
        5,
        7,
        10,
        14,
        15,
        25,
        29,
        34,
        36,
        38,
        43,
        44,
        45,
        52,
        53,
        66,
        68,
        69,
        70,
        82,
        83,
        91,
        92,
        99,
        102,
        104,
        108,
        111,
        115,
        117,
        126,
        129,
        130,
        156,
        157,
        163,
        164,
        173,
        174,
        182,
        184,
        187,
        189,
        200,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        223,
        225,
        231,
        237,
        241,
        246,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 5,
      gender: '♂',
      stats: {
        hp: 283,
        attack: 192,
        defense: 178,
        spclAtk: 222,
        spclDef: 192,
        speed: 224
      },
      friendship: 128,
      learnableMoves: [
        5,
        7,
        10,
        14,
        15,
        25,
        29,
        34,
        36,
        38,
        43,
        44,
        45,
        52,
        53,
        66,
        68,
        69,
        70,
        82,
        83,
        91,
        92,
        99,
        102,
        104,
        108,
        111,
        115,
        117,
        126,
        129,
        130,
        156,
        157,
        163,
        164,
        173,
        174,
        182,
        184,
        187,
        189,
        200,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        223,
        225,
        231,
        237,
        241,
        246,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 6,
      gender: '♂',
      stats: {
        hp: 309,
        attack: 216,
        defense: 204,
        spclAtk: 266,
        spclDef: 218,
        speed: 246
      },
      friendship: 128,
      learnableMoves: [
        5,
        7,
        10,
        14,
        15,
        17,
        19,
        25,
        29,
        34,
        36,
        38,
        43,
        44,
        45,
        46,
        52,
        53,
        63,
        66,
        68,
        69,
        70,
        82,
        83,
        89,
        90,
        91,
        92,
        99,
        102,
        104,
        108,
        111,
        115,
        117,
        126,
        129,
        130,
        156,
        157,
        163,
        164,
        173,
        174,
        182,
        184,
        187,
        189,
        200,
        201,
        203,
        207,
        210,
        211,
        213,
        214,
        216,
        218,
        223,
        225,
        231,
        237,
        241,
        246,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 7,
      gender: '♂',
      stats: {
        hp: 269,
        attack: 172,
        defense: 208,
        spclAtk: 176,
        spclDef: 204,
        speed: 164
      },
      friendship: 128,
      learnableMoves: [
        5,
        8,
        25,
        29,
        33,
        34,
        36,
        38,
        39,
        44,
        54,
        55,
        56,
        57,
        58,
        59,
        61,
        66,
        68,
        69,
        70,
        91,
        92,
        93,
        99,
        102,
        104,
        110,
        111,
        114,
        115,
        117,
        127,
        130,
        145,
        156,
        164,
        173,
        174,
        175,
        182,
        189,
        193,
        196,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        223,
        229,
        231,
        237,
        240,
        243,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 8,
      gender: '♂',
      stats: {
        hp: 285,
        attack: 190,
        defense: 222,
        spclAtk: 192,
        spclDef: 222,
        speed: 180
      },
      friendship: 128,
      learnableMoves: [
        5,
        8,
        25,
        29,
        33,
        34,
        36,
        38,
        39,
        44,
        54,
        55,
        56,
        57,
        58,
        59,
        61,
        66,
        68,
        69,
        70,
        91,
        92,
        93,
        99,
        102,
        104,
        110,
        111,
        114,
        115,
        117,
        127,
        130,
        145,
        156,
        164,
        173,
        174,
        175,
        182,
        189,
        193,
        196,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        223,
        229,
        231,
        237,
        240,
        243,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 9,
      gender: '♂',
      stats: {
        hp: 311,
        attack: 214,
        defense: 248,
        spclAtk: 218,
        spclDef: 258,
        speed: 202
      },
      friendship: 128,
      learnableMoves: [
        5,
        8,
        25,
        29,
        33,
        34,
        36,
        38,
        39,
        44,
        46,
        54,
        55,
        56,
        57,
        58,
        59,
        61,
        63,
        66,
        68,
        69,
        70,
        89,
        90,
        91,
        92,
        93,
        99,
        102,
        104,
        110,
        111,
        114,
        115,
        117,
        127,
        130,
        145,
        156,
        164,
        173,
        174,
        175,
        182,
        189,
        193,
        196,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        223,
        229,
        231,
        237,
        240,
        243,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 10,
      gender: '♂',
      stats: {
        hp: 284,
        attack: 149,
        defense: 159,
        spclAtk: 133,
        spclDef: 133,
        speed: 181
      },
      friendship: 128,
      learnableMoves: [
        33,
        81
      ]
    },
    {
      level: 100,
      species: 11,
      gender: '♂',
      stats: {
        hp: 294,
        attack: 129,
        defense: 199,
        spclAtk: 143,
        spclDef: 143,
        speed: 151
      },
      friendship: 128,
      learnableMoves: [
        33,
        81,
        106
      ]
    },
    {
      level: 100,
      species: 12,
      gender: '♂',
      stats: {
        hp: 294,
        attack: 161,
        defense: 169,
        spclAtk: 229,
        spclDef: 229,
        speed: 209
      },
      friendship: 128,
      learnableMoves: [
        13,
        16,
        18,
        33,
        36,
        38,
        48,
        60,
        63,
        72,
        76,
        77,
        78,
        79,
        81,
        92,
        93,
        94,
        99,
        100,
        102,
        104,
        106,
        115,
        117,
        129,
        148,
        149,
        156,
        164,
        171,
        173,
        174,
        182,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        230,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 13,
      gender: '♂',
      stats: {
        hp: 274,
        attack: 159,
        defense: 149,
        spclAtk: 133,
        spclDef: 133,
        speed: 191
      },
      friendship: 128,
      learnableMoves: [
        40,
        81
      ]
    },
    {
      level: 100,
      species: 14,
      gender: '♂',
      stats: {
        hp: 284,
        attack: 139,
        defense: 189,
        spclAtk: 143,
        spclDef: 143,
        speed: 161
      },
      friendship: 128,
      learnableMoves: [
        40,
        81,
        106
      ]
    },
    {
      level: 100,
      species: 15,
      gender: '♂',
      stats: {
        hp: 304,
        attack: 231,
        defense: 149,
        spclAtk: 159,
        spclDef: 229,
        speed: 219
      },
      friendship: 128,
      learnableMoves: [
        14,
        15,
        31,
        36,
        38,
        40,
        41,
        42,
        63,
        72,
        81,
        92,
        97,
        99,
        102,
        104,
        106,
        115,
        116,
        117,
        129,
        130,
        156,
        164,
        173,
        174,
        182,
        188,
        202,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        228,
        230,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 16,
      gender: '♂',
      stats: {
        hp: 268,
        attack: 173,
        defense: 165,
        spclAtk: 153,
        spclDef: 153,
        speed: 195
      },
      friendship: 210,
      learnableMoves: [
        13,
        16,
        17,
        18,
        19,
        28,
        33,
        36,
        38,
        92,
        97,
        98,
        99,
        102,
        104,
        115,
        117,
        119,
        129,
        143,
        156,
        164,
        168,
        173,
        174,
        182,
        185,
        189,
        193,
        197,
        203,
        207,
        211,
        213,
        214,
        216,
        218,
        228,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 17,
      gender: '♂',
      stats: {
        hp: 307,
        attack: 196,
        defense: 188,
        spclAtk: 176,
        spclDef: 176,
        speed: 220
      },
      friendship: 72,
      learnableMoves: [
        13,
        16,
        17,
        18,
        19,
        28,
        33,
        36,
        38,
        92,
        97,
        98,
        99,
        102,
        104,
        115,
        117,
        119,
        129,
        143,
        156,
        164,
        168,
        173,
        174,
        182,
        185,
        189,
        193,
        197,
        203,
        207,
        211,
        213,
        214,
        216,
        218,
        228,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 18,
      gender: '♀',
      stats: {
        hp: 325,
        attack: 216,
        defense: 206,
        spclAtk: 194,
        spclDef: 194,
        speed: 236
      },
      friendship: 110,
      learnableMoves: [
        13,
        16,
        17,
        18,
        19,
        28,
        33,
        36,
        38,
        63,
        92,
        97,
        98,
        99,
        102,
        104,
        115,
        117,
        119,
        129,
        143,
        156,
        164,
        168,
        173,
        174,
        182,
        185,
        189,
        193,
        197,
        203,
        207,
        211,
        213,
        214,
        216,
        218,
        228,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 19,
      gender: '♂',
      stats: {
        hp: 248,
        attack: 195,
        defense: 155,
        spclAtk: 133,
        spclDef: 153,
        speed: 227
      },
      friendship: 128,
      learnableMoves: [
        29,
        33,
        34,
        36,
        38,
        39,
        44,
        55,
        59,
        61,
        68,
        85,
        87,
        91,
        92,
        98,
        99,
        102,
        103,
        104,
        111,
        116,
        117,
        129,
        130,
        154,
        156,
        158,
        162,
        164,
        168,
        172,
        173,
        174,
        179,
        182,
        189,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        228,
        231,
        237,
        241,
        247,
        249
      ]
    },
    {
      level: 100,
      species: 20,
      gender: '♀',
      stats: {
        hp: 277,
        attack: 226,
        defense: 182,
        spclAtk: 162,
        spclDef: 202,
        speed: 258
      },
      friendship: 128,
      learnableMoves: [
        15,
        29,
        33,
        34,
        36,
        38,
        39,
        44,
        46,
        55,
        58,
        59,
        61,
        63,
        68,
        70,
        85,
        87,
        91,
        92,
        98,
        99,
        102,
        103,
        104,
        111,
        116,
        117,
        129,
        130,
        154,
        156,
        158,
        162,
        164,
        168,
        172,
        173,
        174,
        179,
        182,
        184,
        189,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        228,
        231,
        237,
        241,
        247,
        249
      ]
    },
    {
      level: 100,
      species: 21,
      gender: '♂',
      stats: {
        hp: 268,
        attack: 203,
        defense: 145,
        spclAtk: 145,
        spclDef: 145,
        speed: 223
      },
      friendship: 40,
      learnableMoves: [
        13,
        18,
        19,
        31,
        36,
        38,
        43,
        45,
        64,
        65,
        92,
        97,
        98,
        99,
        102,
        104,
        117,
        119,
        129,
        143,
        156,
        161,
        164,
        168,
        173,
        174,
        182,
        184,
        185,
        189,
        197,
        203,
        206,
        207,
        211,
        213,
        214,
        216,
        218,
        228,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 22,
      gender: '♀',
      stats: {
        hp: 297,
        attack: 244,
        defense: 192,
        spclAtk: 184,
        spclDef: 184,
        speed: 264
      },
      friendship: 128,
      learnableMoves: [
        6,
        13,
        18,
        19,
        31,
        36,
        38,
        43,
        45,
        63,
        64,
        65,
        92,
        97,
        98,
        99,
        102,
        104,
        117,
        119,
        129,
        143,
        156,
        161,
        164,
        168,
        173,
        174,
        182,
        184,
        185,
        189,
        197,
        203,
        206,
        207,
        211,
        213,
        214,
        216,
        218,
        228,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 23,
      gender: '♂',
      stats: {
        hp: 258,
        attack: 203,
        defense: 173,
        spclAtk: 163,
        spclDef: 191,
        speed: 193
      },
      friendship: 128,
      learnableMoves: [
        21,
        29,
        34,
        35,
        36,
        38,
        40,
        43,
        44,
        51,
        70,
        72,
        89,
        90,
        91,
        92,
        99,
        102,
        103,
        104,
        114,
        117,
        130,
        137,
        156,
        157,
        164,
        168,
        173,
        174,
        180,
        182,
        188,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        228,
        237,
        241,
        242,
        251
      ]
    },
    {
      level: 100,
      species: 24,
      gender: '♀',
      stats: {
        hp: 287,
        attack: 234,
        defense: 200,
        spclAtk: 192,
        spclDef: 220,
        speed: 224
      },
      friendship: 128,
      learnableMoves: [
        21,
        29,
        34,
        35,
        36,
        38,
        40,
        43,
        44,
        51,
        63,
        70,
        72,
        89,
        90,
        91,
        92,
        99,
        102,
        103,
        104,
        114,
        117,
        130,
        137,
        156,
        157,
        164,
        168,
        173,
        174,
        180,
        182,
        188,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        228,
        237,
        241,
        242,
        251
      ]
    },
    {
      level: 100,
      species: 25,
      gender: '♂',
      stats: {
        hp: 251,
        attack: 186,
        defense: 138,
        spclAtk: 176,
        spclDef: 156,
        speed: 258
      },
      friendship: 128,
      learnableMoves: [
        3,
        5,
        6,
        9,
        19,
        21,
        25,
        29,
        34,
        36,
        38,
        39,
        45,
        57,
        66,
        69,
        70,
        84,
        85,
        86,
        87,
        92,
        97,
        98,
        99,
        102,
        104,
        111,
        113,
        115,
        117,
        129,
        130,
        148,
        156,
        164,
        173,
        174,
        179,
        182,
        186,
        189,
        192,
        197,
        203,
        204,
        205,
        207,
        213,
        214,
        216,
        217,
        218,
        223,
        227,
        231,
        237,
        240
      ]
    },
    {
      level: 100,
      species: 26,
      gender: '♀',
      stats: {
        hp: 279,
        attack: 236,
        defense: 166,
        spclAtk: 234,
        spclDef: 214,
        speed: 254
      },
      friendship: 128,
      learnableMoves: [
        3,
        5,
        6,
        9,
        19,
        21,
        25,
        29,
        34,
        36,
        38,
        39,
        45,
        57,
        63,
        66,
        69,
        70,
        84,
        85,
        86,
        87,
        92,
        97,
        98,
        99,
        102,
        104,
        111,
        113,
        115,
        117,
        129,
        130,
        148,
        156,
        164,
        168,
        173,
        174,
        179,
        182,
        186,
        189,
        192,
        197,
        203,
        204,
        205,
        207,
        213,
        214,
        216,
        217,
        218,
        223,
        227,
        231,
        237,
        240
      ]
    },
    {
      level: 100,
      species: 27,
      gender: '♂',
      stats: {
        hp: 281,
        attack: 226,
        defense: 248,
        spclAtk: 116,
        spclDef: 136,
        speed: 158
      },
      friendship: 128,
      learnableMoves: [
        10,
        14,
        15,
        28,
        29,
        34,
        36,
        38,
        40,
        66,
        68,
        69,
        70,
        89,
        90,
        91,
        92,
        99,
        102,
        104,
        111,
        117,
        129,
        130,
        154,
        156,
        157,
        163,
        164,
        168,
        173,
        174,
        175,
        182,
        189,
        197,
        201,
        203,
        205,
        207,
        210,
        213,
        214,
        216,
        218,
        219,
        223,
        229,
        231,
        232,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 28,
      gender: '♀',
      stats: {
        hp: 309,
        attack: 256,
        defense: 276,
        spclAtk: 144,
        spclDef: 164,
        speed: 184
      },
      friendship: 128,
      learnableMoves: [
        10,
        14,
        15,
        28,
        29,
        34,
        36,
        38,
        40,
        63,
        66,
        68,
        69,
        70,
        89,
        90,
        91,
        92,
        99,
        102,
        104,
        111,
        117,
        129,
        130,
        154,
        156,
        157,
        163,
        164,
        168,
        173,
        174,
        175,
        182,
        189,
        197,
        201,
        203,
        205,
        207,
        210,
        213,
        214,
        216,
        218,
        219,
        223,
        229,
        231,
        232,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 29,
      gender: '♀',
      stats: {
        hp: 298,
        attack: 177,
        defense: 189,
        spclAtk: 163,
        spclDef: 163,
        speed: 165
      },
      friendship: 128,
      learnableMoves: [
        10,
        24,
        29,
        33,
        34,
        36,
        38,
        39,
        40,
        44,
        45,
        48,
        50,
        59,
        68,
        85,
        87,
        92,
        99,
        102,
        104,
        111,
        115,
        116,
        117,
        130,
        154,
        156,
        164,
        168,
        173,
        174,
        182,
        189,
        197,
        203,
        204,
        207,
        213,
        214,
        216,
        218,
        231,
        237,
        240,
        241,
        251
      ]
    },
    {
      level: 100,
      species: 30,
      gender: '♀',
      stats: {
        hp: 314,
        attack: 195,
        defense: 203,
        spclAtk: 179,
        spclDef: 179,
        speed: 181
      },
      friendship: 128,
      learnableMoves: [
        10,
        24,
        29,
        32,
        33,
        34,
        36,
        38,
        39,
        40,
        44,
        45,
        48,
        50,
        55,
        58,
        59,
        61,
        68,
        70,
        85,
        87,
        92,
        99,
        102,
        104,
        111,
        115,
        116,
        117,
        130,
        154,
        156,
        164,
        168,
        173,
        174,
        182,
        189,
        197,
        203,
        204,
        207,
        213,
        214,
        216,
        218,
        231,
        237,
        240,
        241,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 31,
      gender: '♀',
      stats: {
        hp: 339,
        attack: 220,
        defense: 230,
        spclAtk: 204,
        spclDef: 224,
        speed: 206
      },
      friendship: 128,
      learnableMoves: [
        5,
        6,
        7,
        8,
        9,
        10,
        24,
        25,
        29,
        32,
        33,
        34,
        36,
        38,
        39,
        40,
        44,
        45,
        46,
        48,
        50,
        53,
        55,
        57,
        58,
        59,
        61,
        63,
        66,
        68,
        69,
        70,
        85,
        87,
        89,
        90,
        92,
        99,
        102,
        104,
        111,
        115,
        116,
        117,
        126,
        130,
        154,
        156,
        157,
        164,
        168,
        173,
        174,
        182,
        189,
        196,
        197,
        201,
        203,
        204,
        207,
        210,
        213,
        214,
        216,
        218,
        223,
        231,
        237,
        240,
        241,
        247,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 32,
      gender: '♂',
      stats: {
        hp: 280,
        attack: 197,
        defense: 165,
        spclAtk: 163,
        spclDef: 163,
        speed: 183
      },
      friendship: 128,
      learnableMoves: [
        24,
        29,
        30,
        31,
        32,
        33,
        34,
        36,
        38,
        40,
        43,
        48,
        50,
        59,
        68,
        85,
        87,
        92,
        93,
        99,
        102,
        104,
        111,
        115,
        116,
        117,
        130,
        133,
        156,
        164,
        168,
        173,
        174,
        182,
        189,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        231,
        237,
        240,
        241,
        251
      ]
    },
    {
      level: 100,
      species: 33,
      gender: '♂',
      stats: {
        hp: 296,
        attack: 215,
        defense: 183,
        spclAtk: 179,
        spclDef: 179,
        speed: 199
      },
      friendship: 128,
      learnableMoves: [
        24,
        29,
        30,
        31,
        32,
        33,
        34,
        36,
        38,
        40,
        43,
        48,
        50,
        55,
        58,
        59,
        61,
        68,
        70,
        85,
        87,
        92,
        93,
        99,
        102,
        104,
        111,
        115,
        116,
        117,
        130,
        133,
        156,
        164,
        168,
        173,
        174,
        182,
        189,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        231,
        237,
        240,
        241,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 34,
      gender: '♂',
      stats: {
        hp: 321,
        attack: 240,
        defense: 210,
        spclAtk: 224,
        spclDef: 204,
        speed: 224
      },
      friendship: 128,
      learnableMoves: [
        5,
        6,
        7,
        8,
        9,
        24,
        25,
        29,
        30,
        31,
        32,
        33,
        34,
        36,
        37,
        38,
        40,
        43,
        46,
        48,
        50,
        53,
        55,
        57,
        58,
        59,
        61,
        63,
        66,
        68,
        69,
        70,
        85,
        87,
        89,
        90,
        92,
        93,
        99,
        102,
        104,
        111,
        115,
        116,
        117,
        126,
        130,
        133,
        156,
        157,
        164,
        168,
        173,
        174,
        182,
        189,
        196,
        197,
        201,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        223,
        231,
        237,
        240,
        241,
        247,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 35,
      gender: '♀',
      stats: {
        hp: 321,
        attack: 166,
        defense: 174,
        spclAtk: 196,
        spclDef: 206,
        speed: 148
      },
      friendship: 128,
      learnableMoves: [
        1,
        3,
        5,
        7,
        8,
        9,
        25,
        29,
        34,
        36,
        38,
        45,
        47,
        53,
        55,
        58,
        59,
        61,
        66,
        68,
        69,
        70,
        76,
        85,
        86,
        87,
        92,
        94,
        99,
        100,
        102,
        104,
        107,
        111,
        113,
        115,
        117,
        118,
        126,
        130,
        133,
        138,
        148,
        149,
        150,
        156,
        161,
        164,
        171,
        173,
        174,
        182,
        186,
        187,
        189,
        192,
        196,
        197,
        203,
        204,
        205,
        207,
        213,
        214,
        216,
        217,
        218,
        223,
        227,
        231,
        236,
        237,
        240,
        241,
        244,
        247
      ]
    },
    {
      level: 100,
      species: 36,
      gender: '♀',
      stats: {
        hp: 349,
        attack: 196,
        defense: 202,
        spclAtk: 224,
        spclDef: 234,
        speed: 174
      },
      friendship: 128,
      learnableMoves: [
        1,
        3,
        5,
        7,
        8,
        9,
        25,
        29,
        34,
        36,
        38,
        45,
        47,
        53,
        55,
        58,
        59,
        61,
        63,
        66,
        68,
        69,
        70,
        76,
        85,
        86,
        87,
        92,
        94,
        99,
        100,
        102,
        104,
        107,
        111,
        113,
        115,
        117,
        118,
        126,
        130,
        133,
        138,
        148,
        149,
        150,
        156,
        161,
        164,
        171,
        173,
        174,
        182,
        186,
        187,
        189,
        192,
        196,
        197,
        203,
        204,
        205,
        207,
        213,
        214,
        216,
        217,
        218,
        223,
        227,
        231,
        236,
        237,
        240,
        241,
        244,
        247
      ]
    },
    {
      level: 100,
      species: 37,
      gender: '♀',
      stats: {
        hp: 264,
        attack: 165,
        defense: 165,
        spclAtk: 183,
        spclDef: 213,
        speed: 213
      },
      friendship: 128,
      learnableMoves: [
        29,
        34,
        36,
        38,
        39,
        46,
        50,
        52,
        53,
        83,
        91,
        92,
        95,
        98,
        99,
        102,
        104,
        109,
        115,
        117,
        126,
        129,
        130,
        156,
        164,
        173,
        174,
        175,
        180,
        182,
        185,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        231,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 38,
      gender: '♀',
      stats: {
        hp: 299,
        attack: 200,
        defense: 198,
        spclAtk: 210,
        spclDef: 248,
        speed: 246
      },
      friendship: 128,
      learnableMoves: [
        29,
        34,
        36,
        38,
        39,
        46,
        50,
        52,
        53,
        63,
        83,
        91,
        92,
        95,
        98,
        99,
        102,
        104,
        109,
        115,
        117,
        126,
        129,
        130,
        156,
        164,
        173,
        174,
        175,
        180,
        182,
        185,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        231,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 39,
      gender: '♀',
      stats: {
        hp: 418,
        attack: 173,
        defense: 125,
        spclAtk: 173,
        spclDef: 133,
        speed: 123
      },
      friendship: 128,
      learnableMoves: [
        1,
        3,
        5,
        7,
        8,
        9,
        25,
        29,
        34,
        36,
        38,
        47,
        50,
        53,
        55,
        58,
        59,
        61,
        66,
        68,
        69,
        70,
        76,
        85,
        86,
        87,
        92,
        94,
        99,
        100,
        102,
        104,
        111,
        115,
        117,
        126,
        130,
        138,
        148,
        149,
        156,
        161,
        164,
        171,
        173,
        174,
        182,
        185,
        186,
        189,
        192,
        195,
        196,
        197,
        203,
        204,
        205,
        207,
        213,
        214,
        216,
        217,
        218,
        223,
        237,
        240,
        241,
        244,
        247
      ]
    },
    {
      level: 100,
      species: 40,
      gender: '♀',
      stats: {
        hp: 447,
        attack: 204,
        defense: 152,
        spclAtk: 212,
        spclDef: 162,
        speed: 154
      },
      friendship: 128,
      learnableMoves: [
        1,
        3,
        5,
        7,
        8,
        9,
        25,
        29,
        34,
        36,
        38,
        47,
        50,
        53,
        55,
        58,
        59,
        61,
        63,
        66,
        68,
        69,
        70,
        76,
        85,
        86,
        87,
        92,
        94,
        99,
        100,
        102,
        104,
        111,
        115,
        117,
        126,
        130,
        138,
        148,
        149,
        156,
        161,
        164,
        171,
        173,
        174,
        182,
        185,
        186,
        189,
        192,
        195,
        196,
        197,
        203,
        204,
        205,
        207,
        213,
        214,
        216,
        217,
        218,
        223,
        237,
        240,
        241,
        244,
        247
      ]
    },
    {
      level: 100,
      species: 41,
      gender: '♂',
      stats: {
        hp: 274,
        attack: 179,
        defense: 159,
        spclAtk: 153,
        spclDef: 173,
        speed: 201
      },
      friendship: 128,
      learnableMoves: [
        13,
        16,
        17,
        18,
        36,
        38,
        44,
        48,
        72,
        92,
        98,
        99,
        102,
        104,
        109,
        114,
        117,
        129,
        141,
        156,
        164,
        168,
        173,
        174,
        182,
        185,
        197,
        202,
        203,
        207,
        211,
        212,
        213,
        214,
        216,
        218,
        228,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 42,
      gender: '♀',
      stats: {
        hp: 309,
        attack: 216,
        defense: 196,
        spclAtk: 184,
        spclDef: 204,
        speed: 234
      },
      friendship: 128,
      learnableMoves: [
        13,
        16,
        17,
        18,
        36,
        38,
        44,
        48,
        63,
        72,
        92,
        98,
        99,
        102,
        103,
        104,
        109,
        114,
        117,
        129,
        141,
        156,
        164,
        168,
        173,
        174,
        182,
        185,
        197,
        202,
        203,
        207,
        211,
        212,
        213,
        214,
        216,
        218,
        228,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 43,
      gender: '♂',
      stats: {
        hp: 271,
        attack: 176,
        defense: 188,
        spclAtk: 226,
        spclDef: 206,
        speed: 138
      },
      friendship: 128,
      learnableMoves: [
        14,
        15,
        36,
        38,
        51,
        71,
        72,
        75,
        76,
        77,
        78,
        79,
        80,
        92,
        99,
        102,
        104,
        115,
        117,
        148,
        156,
        164,
        173,
        174,
        175,
        182,
        188,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        230,
        235,
        236,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 44,
      gender: '♂',
      stats: {
        hp: 294,
        attack: 201,
        defense: 209,
        spclAtk: 239,
        spclDef: 219,
        speed: 149
      },
      friendship: 128,
      learnableMoves: [
        14,
        15,
        36,
        38,
        51,
        71,
        72,
        75,
        76,
        77,
        78,
        79,
        80,
        92,
        99,
        102,
        104,
        115,
        117,
        148,
        156,
        164,
        173,
        174,
        175,
        182,
        188,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        230,
        235,
        236,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 45,
      gender: '♀',
      stats: {
        hp: 309,
        attack: 216,
        defense: 226,
        spclAtk: 254,
        spclDef: 234,
        speed: 154
      },
      friendship: 128,
      learnableMoves: [
        14,
        15,
        34,
        36,
        38,
        51,
        63,
        71,
        72,
        75,
        76,
        77,
        78,
        79,
        80,
        92,
        99,
        102,
        104,
        115,
        117,
        148,
        156,
        164,
        173,
        174,
        175,
        182,
        188,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        230,
        235,
        236,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 46,
      gender: '♂',
      stats: {
        hp: 258,
        attack: 223,
        defense: 195,
        spclAtk: 173,
        spclDef: 193,
        speed: 133
      },
      friendship: 128,
      learnableMoves: [
        10,
        14,
        15,
        34,
        36,
        38,
        60,
        68,
        72,
        74,
        76,
        77,
        78,
        91,
        92,
        99,
        102,
        103,
        104,
        113,
        115,
        117,
        130,
        141,
        147,
        148,
        156,
        163,
        164,
        168,
        173,
        174,
        175,
        182,
        188,
        202,
        203,
        206,
        207,
        210,
        213,
        214,
        216,
        218,
        228,
        230,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 47,
      gender: '♀',
      stats: {
        hp: 287,
        attack: 254,
        defense: 222,
        spclAtk: 182,
        spclDef: 222,
        speed: 124
      },
      friendship: 128,
      learnableMoves: [
        10,
        14,
        15,
        34,
        36,
        38,
        60,
        63,
        68,
        72,
        74,
        76,
        77,
        78,
        91,
        92,
        99,
        102,
        103,
        104,
        113,
        115,
        117,
        130,
        141,
        147,
        148,
        156,
        163,
        164,
        168,
        173,
        174,
        175,
        182,
        188,
        202,
        203,
        206,
        207,
        210,
        213,
        214,
        216,
        218,
        228,
        230,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 48,
      gender: '♂',
      stats: {
        hp: 301,
        attack: 186,
        defense: 178,
        spclAtk: 156,
        spclDef: 186,
        speed: 168
      },
      friendship: 128,
      learnableMoves: [
        33,
        36,
        38,
        48,
        50,
        60,
        72,
        76,
        77,
        78,
        79,
        92,
        93,
        94,
        99,
        102,
        103,
        104,
        115,
        117,
        129,
        141,
        148,
        149,
        156,
        164,
        168,
        173,
        174,
        182,
        188,
        193,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        226,
        230,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 49,
      gender: '♀',
      stats: {
        hp: 303,
        attack: 190,
        defense: 180,
        spclAtk: 238,
        spclDef: 208,
        speed: 238
      },
      friendship: 128,
      learnableMoves: [
        13,
        16,
        18,
        33,
        36,
        38,
        48,
        50,
        60,
        63,
        72,
        76,
        77,
        78,
        79,
        92,
        93,
        94,
        99,
        100,
        102,
        103,
        104,
        115,
        117,
        129,
        141,
        148,
        149,
        156,
        164,
        168,
        173,
        174,
        182,
        188,
        193,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        226,
        230,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 50,
      gender: '♂',
      stats: {
        hp: 208,
        attack: 193,
        defense: 135,
        spclAtk: 153,
        spclDef: 173,
        speed: 273
      },
      friendship: 128,
      learnableMoves: [
        10,
        15,
        28,
        34,
        36,
        38,
        45,
        89,
        90,
        91,
        92,
        99,
        102,
        103,
        104,
        117,
        156,
        157,
        163,
        164,
        168,
        173,
        174,
        182,
        185,
        188,
        189,
        203,
        207,
        213,
        214,
        216,
        218,
        222,
        228,
        237,
        241,
        246,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 51,
      gender: '♀',
      stats: {
        hp: 237,
        attack: 224,
        defense: 162,
        spclAtk: 162,
        spclDef: 202,
        speed: 304
      },
      friendship: 128,
      learnableMoves: [
        10,
        15,
        28,
        34,
        36,
        38,
        45,
        63,
        89,
        90,
        91,
        92,
        99,
        102,
        103,
        104,
        117,
        156,
        157,
        161,
        163,
        164,
        168,
        173,
        174,
        182,
        185,
        188,
        189,
        203,
        207,
        213,
        214,
        216,
        218,
        222,
        228,
        237,
        241,
        246,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 52,
      gender: '♂',
      stats: {
        hp: 268,
        attack: 173,
        defense: 155,
        spclAtk: 163,
        spclDef: 163,
        speed: 263
      },
      friendship: 128,
      learnableMoves: [
        6,
        10,
        29,
        34,
        36,
        38,
        44,
        45,
        55,
        61,
        85,
        87,
        92,
        95,
        99,
        102,
        103,
        104,
        111,
        117,
        129,
        130,
        133,
        138,
        154,
        156,
        163,
        164,
        168,
        171,
        173,
        174,
        180,
        182,
        185,
        189,
        192,
        196,
        197,
        203,
        204,
        207,
        213,
        214,
        216,
        218,
        231,
        237,
        241,
        244,
        247
      ]
    },
    {
      level: 100,
      species: 53,
      gender: '♀',
      stats: {
        hp: 297,
        attack: 204,
        defense: 182,
        spclAtk: 192,
        spclDef: 192,
        speed: 294
      },
      friendship: 80,
      learnableMoves: [
        6,
        10,
        29,
        34,
        36,
        38,
        44,
        45,
        46,
        55,
        61,
        63,
        85,
        87,
        92,
        95,
        99,
        102,
        103,
        104,
        111,
        117,
        129,
        130,
        133,
        138,
        154,
        156,
        163,
        164,
        168,
        171,
        173,
        174,
        180,
        182,
        185,
        189,
        192,
        196,
        197,
        203,
        204,
        207,
        213,
        214,
        216,
        218,
        231,
        237,
        241,
        244,
        247
      ]
    },
    {
      level: 100,
      species: 54,
      gender: '♂',
      stats: {
        hp: 281,
        attack: 180,
        defense: 174,
        spclAtk: 206,
        spclDef: 176,
        speed: 188
      },
      friendship: 128,
      learnableMoves: [
        5,
        6,
        8,
        10,
        25,
        29,
        34,
        36,
        38,
        39,
        50,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        66,
        68,
        69,
        70,
        91,
        92,
        93,
        94,
        95,
        99,
        102,
        103,
        104,
        113,
        117,
        127,
        129,
        130,
        133,
        148,
        154,
        156,
        164,
        173,
        174,
        182,
        189,
        193,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        231,
        237,
        238,
        240,
        244,
        248,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 55,
      gender: '♀',
      stats: {
        hp: 313,
        attack: 212,
        defense: 204,
        spclAtk: 238,
        spclDef: 208,
        speed: 216
      },
      friendship: 128,
      learnableMoves: [
        5,
        6,
        8,
        10,
        25,
        29,
        34,
        36,
        38,
        39,
        50,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        63,
        66,
        68,
        69,
        70,
        91,
        92,
        93,
        94,
        95,
        99,
        102,
        103,
        104,
        113,
        117,
        127,
        129,
        130,
        133,
        148,
        154,
        156,
        164,
        173,
        174,
        182,
        189,
        193,
        196,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        223,
        231,
        237,
        238,
        240,
        244,
        248,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 56,
      gender: '♂',
      stats: {
        hp: 261,
        attack: 236,
        defense: 148,
        spclAtk: 146,
        spclDef: 166,
        speed: 218
      },
      friendship: 128,
      learnableMoves: [
        2,
        5,
        6,
        7,
        8,
        9,
        10,
        25,
        29,
        34,
        36,
        37,
        38,
        43,
        66,
        67,
        68,
        69,
        70,
        85,
        87,
        91,
        92,
        96,
        99,
        102,
        103,
        104,
        111,
        116,
        117,
        118,
        129,
        130,
        154,
        156,
        157,
        164,
        168,
        173,
        174,
        179,
        182,
        189,
        193,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        231,
        237,
        238,
        241,
        244,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 57,
      gender: '♀',
      stats: {
        hp: 289,
        attack: 266,
        defense: 176,
        spclAtk: 174,
        spclDef: 194,
        speed: 244
      },
      friendship: 128,
      learnableMoves: [
        2,
        5,
        6,
        7,
        8,
        9,
        10,
        25,
        29,
        34,
        36,
        37,
        38,
        43,
        63,
        66,
        67,
        68,
        69,
        70,
        85,
        87,
        91,
        92,
        96,
        99,
        102,
        103,
        104,
        111,
        116,
        117,
        118,
        129,
        130,
        154,
        156,
        157,
        164,
        168,
        173,
        174,
        179,
        182,
        189,
        193,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        231,
        237,
        238,
        241,
        244,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 58,
      gender: '♂',
      stats: {
        hp: 284,
        attack: 211,
        defense: 159,
        spclAtk: 209,
        spclDef: 169,
        speed: 189
      },
      friendship: 128,
      learnableMoves: [
        29,
        34,
        36,
        37,
        38,
        43,
        44,
        46,
        52,
        53,
        82,
        83,
        91,
        92,
        97,
        99,
        102,
        104,
        115,
        117,
        126,
        129,
        130,
        156,
        164,
        172,
        173,
        174,
        182,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        225,
        231,
        237,
        241,
        242,
        249
      ]
    },
    {
      level: 100,
      species: 59,
      gender: '♀',
      stats: {
        hp: 325,
        attack: 260,
        defense: 200,
        spclAtk: 240,
        spclDef: 200,
        speed: 230
      },
      friendship: 128,
      learnableMoves: [
        29,
        34,
        36,
        37,
        38,
        43,
        44,
        46,
        52,
        53,
        63,
        82,
        83,
        91,
        92,
        97,
        99,
        100,
        102,
        104,
        115,
        117,
        126,
        129,
        130,
        156,
        164,
        172,
        173,
        174,
        182,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        225,
        231,
        237,
        241,
        242,
        245,
        249
      ]
    },
    {
      level: 100,
      species: 60,
      gender: '♂',
      stats: {
        hp: 261,
        attack: 176,
        defense: 158,
        spclAtk: 156,
        spclDef: 156,
        speed: 258
      },
      friendship: 128,
      learnableMoves: [
        3,
        29,
        34,
        36,
        38,
        54,
        55,
        56,
        57,
        58,
        59,
        61,
        92,
        94,
        95,
        99,
        102,
        104,
        111,
        114,
        117,
        127,
        130,
        133,
        145,
        149,
        150,
        156,
        164,
        168,
        170,
        173,
        174,
        182,
        187,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        237,
        240,
        250
      ]
    },
    {
      level: 100,
      species: 61,
      gender: '♂',
      stats: {
        hp: 304,
        attack: 201,
        defense: 199,
        spclAtk: 169,
        spclDef: 169,
        speed: 249
      },
      friendship: 128,
      learnableMoves: [
        3,
        5,
        8,
        25,
        29,
        34,
        36,
        38,
        54,
        55,
        56,
        57,
        58,
        59,
        61,
        66,
        68,
        69,
        70,
        89,
        90,
        92,
        94,
        95,
        99,
        102,
        104,
        111,
        114,
        117,
        118,
        127,
        130,
        133,
        145,
        149,
        150,
        156,
        164,
        168,
        170,
        173,
        174,
        182,
        187,
        189,
        196,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        237,
        240,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 62,
      gender: '♀',
      stats: {
        hp: 333,
        attack: 218,
        defense: 238,
        spclAtk: 188,
        spclDef: 228,
        speed: 186
      },
      friendship: 128,
      learnableMoves: [
        3,
        5,
        8,
        25,
        29,
        34,
        36,
        38,
        54,
        55,
        56,
        57,
        58,
        59,
        61,
        63,
        66,
        68,
        69,
        70,
        89,
        90,
        92,
        94,
        95,
        99,
        102,
        104,
        111,
        114,
        117,
        118,
        127,
        130,
        133,
        145,
        149,
        150,
        156,
        164,
        168,
        170,
        173,
        174,
        182,
        187,
        189,
        196,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        237,
        240,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 63,
      gender: '♂',
      stats: {
        hp: 231,
        attack: 116,
        defense: 108,
        spclAtk: 286,
        spclDef: 186,
        speed: 258
      },
      friendship: 128,
      learnableMoves: [
        5,
        7,
        8,
        9,
        25,
        29,
        34,
        36,
        38,
        66,
        68,
        69,
        86,
        92,
        94,
        99,
        100,
        102,
        104,
        112,
        113,
        115,
        117,
        118,
        130,
        138,
        148,
        149,
        156,
        161,
        164,
        168,
        171,
        173,
        174,
        182,
        192,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        227,
        237,
        240,
        241,
        244,
        247
      ]
    },
    {
      level: 100,
      species: 64,
      gender: '♂',
      stats: {
        hp: 247,
        attack: 134,
        defense: 122,
        spclAtk: 302,
        spclDef: 202,
        speed: 274
      },
      friendship: 128,
      learnableMoves: [
        5,
        7,
        8,
        9,
        25,
        29,
        34,
        36,
        38,
        50,
        60,
        66,
        68,
        69,
        86,
        91,
        92,
        93,
        94,
        99,
        100,
        102,
        104,
        105,
        112,
        113,
        115,
        117,
        118,
        130,
        134,
        138,
        148,
        149,
        156,
        161,
        164,
        168,
        171,
        173,
        174,
        182,
        192,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        227,
        237,
        240,
        241,
        244,
        247,
        248
      ]
    },
    {
      level: 100,
      species: 65,
      gender: '♂',
      stats: {
        hp: 269,
        attack: 156,
        defense: 146,
        spclAtk: 324,
        spclDef: 224,
        speed: 294
      },
      friendship: 128,
      learnableMoves: [
        5,
        7,
        8,
        9,
        25,
        29,
        34,
        36,
        38,
        50,
        60,
        63,
        66,
        68,
        69,
        86,
        91,
        92,
        93,
        94,
        99,
        100,
        102,
        104,
        105,
        112,
        113,
        115,
        117,
        118,
        130,
        134,
        138,
        148,
        149,
        156,
        161,
        164,
        168,
        171,
        173,
        174,
        182,
        192,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        227,
        237,
        240,
        241,
        244,
        247,
        248
      ]
    },
    {
      level: 100,
      species: 66,
      gender: '♂',
      stats: {
        hp: 321,
        attack: 236,
        defense: 178,
        spclAtk: 146,
        spclDef: 146,
        speed: 148
      },
      friendship: 128,
      learnableMoves: [
        2,
        5,
        7,
        8,
        9,
        25,
        27,
        29,
        34,
        36,
        38,
        43,
        53,
        66,
        67,
        68,
        69,
        70,
        89,
        90,
        91,
        92,
        96,
        99,
        102,
        104,
        113,
        116,
        117,
        118,
        126,
        130,
        156,
        157,
        164,
        168,
        173,
        174,
        182,
        184,
        189,
        193,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        227,
        233,
        237,
        238,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 67,
      gender: '♂',
      stats: {
        hp: 327,
        attack: 264,
        defense: 202,
        spclAtk: 162,
        spclDef: 182,
        speed: 154
      },
      friendship: 128,
      learnableMoves: [
        2,
        5,
        7,
        8,
        9,
        25,
        27,
        29,
        34,
        36,
        38,
        43,
        53,
        66,
        67,
        68,
        69,
        70,
        89,
        90,
        91,
        92,
        96,
        99,
        102,
        104,
        113,
        116,
        117,
        118,
        126,
        130,
        156,
        157,
        164,
        168,
        173,
        174,
        182,
        184,
        189,
        193,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        227,
        233,
        237,
        238,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 68,
      gender: '♀',
      stats: {
        hp: 337,
        attack: 312,
        defense: 212,
        spclAtk: 182,
        spclDef: 222,
        speed: 160
      },
      friendship: 100,
      learnableMoves: [
        2,
        5,
        7,
        8,
        9,
        25,
        27,
        29,
        34,
        36,
        38,
        43,
        53,
        63,
        66,
        67,
        68,
        69,
        70,
        89,
        90,
        91,
        92,
        96,
        99,
        102,
        104,
        113,
        116,
        117,
        118,
        126,
        130,
        156,
        157,
        164,
        168,
        173,
        174,
        182,
        184,
        189,
        193,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        227,
        233,
        237,
        238,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 69,
      gender: '♂',
      stats: {
        hp: 281,
        attack: 226,
        defense: 148,
        spclAtk: 216,
        spclDef: 136,
        speed: 158
      },
      friendship: 128,
      learnableMoves: [
        14,
        15,
        21,
        22,
        35,
        36,
        38,
        51,
        72,
        74,
        75,
        76,
        77,
        78,
        79,
        92,
        99,
        102,
        104,
        115,
        117,
        141,
        148,
        156,
        164,
        173,
        174,
        182,
        188,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        227,
        230,
        235,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 70,
      gender: '♂',
      stats: {
        hp: 304,
        attack: 251,
        defense: 169,
        spclAtk: 239,
        spclDef: 159,
        speed: 179
      },
      friendship: 128,
      learnableMoves: [
        14,
        15,
        21,
        22,
        35,
        36,
        38,
        51,
        72,
        74,
        75,
        76,
        77,
        78,
        79,
        92,
        99,
        102,
        104,
        115,
        117,
        141,
        148,
        156,
        164,
        173,
        174,
        182,
        188,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        227,
        230,
        235,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 71,
      gender: '♀',
      stats: {
        hp: 319,
        attack: 266,
        defense: 186,
        spclAtk: 254,
        spclDef: 174,
        speed: 194
      },
      friendship: 128,
      learnableMoves: [
        14,
        15,
        21,
        22,
        34,
        35,
        36,
        38,
        51,
        63,
        72,
        74,
        75,
        76,
        77,
        78,
        79,
        92,
        99,
        102,
        104,
        115,
        117,
        141,
        148,
        156,
        164,
        173,
        174,
        182,
        188,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        227,
        230,
        235,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 72,
      gender: '♂',
      stats: {
        hp: 261,
        attack: 156,
        defense: 148,
        spclAtk: 176,
        spclDef: 276,
        speed: 218
      },
      friendship: 128,
      learnableMoves: [
        14,
        15,
        35,
        36,
        38,
        40,
        48,
        51,
        55,
        56,
        57,
        58,
        59,
        61,
        62,
        72,
        92,
        99,
        102,
        103,
        104,
        112,
        114,
        115,
        117,
        130,
        132,
        156,
        164,
        173,
        174,
        182,
        188,
        196,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        229,
        237,
        240,
        243,
        250
      ]
    },
    {
      level: 100,
      species: 73,
      gender: '♀',
      stats: {
        hp: 313,
        attack: 188,
        defense: 178,
        spclAtk: 208,
        spclDef: 288,
        speed: 246
      },
      friendship: 128,
      learnableMoves: [
        14,
        15,
        35,
        36,
        38,
        40,
        48,
        51,
        55,
        56,
        57,
        58,
        59,
        61,
        62,
        63,
        72,
        92,
        99,
        102,
        103,
        104,
        112,
        114,
        115,
        117,
        130,
        132,
        156,
        164,
        173,
        174,
        182,
        188,
        196,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        229,
        237,
        240,
        243,
        250
      ]
    },
    {
      level: 100,
      species: 74,
      gender: '♂',
      stats: {
        hp: 261,
        attack: 236,
        defense: 278,
        spclAtk: 136,
        spclDef: 136,
        speed: 118
      },
      friendship: 128,
      learnableMoves: [
        5,
        7,
        29,
        33,
        34,
        36,
        38,
        53,
        66,
        68,
        69,
        70,
        88,
        89,
        90,
        91,
        92,
        99,
        102,
        104,
        106,
        111,
        117,
        118,
        120,
        126,
        153,
        156,
        157,
        164,
        173,
        174,
        182,
        189,
        201,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        222,
        223,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 75,
      gender: '♂',
      stats: {
        hp: 284,
        attack: 261,
        defense: 299,
        spclAtk: 159,
        spclDef: 159,
        speed: 139
      },
      friendship: 128,
      learnableMoves: [
        5,
        7,
        29,
        33,
        34,
        36,
        38,
        53,
        66,
        68,
        69,
        70,
        88,
        89,
        90,
        91,
        92,
        99,
        102,
        104,
        106,
        111,
        117,
        118,
        120,
        126,
        153,
        156,
        157,
        164,
        173,
        174,
        182,
        189,
        201,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        222,
        223,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 76,
      gender: '♀',
      stats: {
        hp: 319,
        attack: 276,
        defense: 316,
        spclAtk: 164,
        spclDef: 184,
        speed: 144
      },
      friendship: 128,
      learnableMoves: [
        5,
        7,
        25,
        29,
        33,
        34,
        36,
        38,
        46,
        53,
        63,
        66,
        68,
        69,
        70,
        88,
        89,
        90,
        91,
        92,
        99,
        102,
        104,
        106,
        111,
        117,
        118,
        120,
        126,
        153,
        156,
        157,
        164,
        173,
        174,
        182,
        189,
        201,
        203,
        205,
        207,
        210,
        213,
        214,
        216,
        218,
        222,
        223,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 77,
      gender: '♀',
      stats: {
        hp: 267,
        attack: 234,
        defense: 172,
        spclAtk: 192,
        spclDef: 192,
        speed: 244
      },
      friendship: 128,
      learnableMoves: [
        23,
        24,
        29,
        32,
        33,
        34,
        36,
        37,
        38,
        39,
        45,
        52,
        53,
        83,
        92,
        95,
        97,
        98,
        99,
        102,
        104,
        115,
        117,
        126,
        129,
        130,
        156,
        164,
        172,
        173,
        174,
        182,
        203,
        204,
        207,
        213,
        214,
        216,
        218,
        231,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 78,
      gender: '♀',
      stats: {
        hp: 285,
        attack: 252,
        defense: 192,
        spclAtk: 210,
        spclDef: 210,
        speed: 260
      },
      friendship: 128,
      learnableMoves: [
        6,
        23,
        24,
        29,
        31,
        32,
        33,
        34,
        36,
        37,
        38,
        39,
        45,
        52,
        53,
        63,
        83,
        92,
        95,
        97,
        98,
        99,
        102,
        104,
        115,
        117,
        126,
        129,
        130,
        156,
        164,
        172,
        173,
        174,
        182,
        203,
        204,
        207,
        213,
        214,
        216,
        218,
        231,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 79,
      gender: '♂',
      stats: {
        hp: 361,
        attack: 206,
        defense: 208,
        spclAtk: 156,
        spclDef: 156,
        speed: 108
      },
      friendship: 128,
      learnableMoves: [
        6,
        23,
        29,
        33,
        34,
        36,
        38,
        45,
        50,
        53,
        55,
        57,
        58,
        59,
        61,
        70,
        86,
        89,
        90,
        91,
        92,
        93,
        94,
        99,
        100,
        102,
        104,
        115,
        117,
        126,
        129,
        130,
        133,
        138,
        148,
        149,
        156,
        161,
        164,
        171,
        173,
        174,
        182,
        187,
        189,
        192,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        231,
        237,
        240,
        241,
        244,
        247,
        248
      ]
    },
    {
      level: 100,
      species: 80,
      gender: '♀',
      stats: {
        hp: 353,
        attack: 210,
        defense: 278,
        spclAtk: 258,
        spclDef: 218,
        speed: 120
      },
      friendship: 128,
      learnableMoves: [
        5,
        6,
        8,
        23,
        25,
        29,
        33,
        34,
        36,
        38,
        45,
        50,
        53,
        55,
        57,
        58,
        59,
        61,
        63,
        66,
        68,
        69,
        70,
        86,
        89,
        90,
        91,
        92,
        93,
        94,
        99,
        100,
        102,
        104,
        110,
        115,
        117,
        126,
        129,
        130,
        133,
        138,
        148,
        149,
        156,
        161,
        164,
        171,
        173,
        174,
        182,
        187,
        189,
        192,
        196,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        219,
        223,
        231,
        237,
        240,
        241,
        244,
        247,
        248,
        249
      ]
    },
    {
      level: 100,
      species: 81,
      gender: '',
      stats: {
        hp: 231,
        attack: 146,
        defense: 218,
        spclAtk: 266,
        spclDef: 186,
        speed: 168
      },
      friendship: 40,
      learnableMoves: [
        33,
        36,
        38,
        48,
        49,
        84,
        85,
        86,
        87,
        92,
        99,
        100,
        102,
        103,
        104,
        115,
        117,
        129,
        148,
        156,
        164,
        173,
        174,
        182,
        192,
        199,
        203,
        205,
        207,
        214,
        216,
        218,
        237,
        240
      ]
    },
    {
      level: 100,
      species: 82,
      gender: '',
      stats: {
        hp: 259,
        attack: 176,
        defense: 246,
        spclAtk: 294,
        spclDef: 194,
        speed: 194
      },
      friendship: 128,
      learnableMoves: [
        33,
        36,
        38,
        48,
        49,
        63,
        84,
        85,
        86,
        87,
        92,
        99,
        100,
        102,
        103,
        104,
        115,
        117,
        129,
        148,
        156,
        161,
        164,
        173,
        174,
        182,
        192,
        199,
        203,
        205,
        207,
        214,
        216,
        218,
        237,
        240
      ]
    },
    {
      level: 100,
      species: 83,
      gender: '♂',
      stats: {
        hp: 278,
        attack: 201,
        defense: 179,
        spclAtk: 185,
        spclDef: 193,
        speed: 189
      },
      friendship: 128,
      learnableMoves: [
        13,
        14,
        15,
        16,
        18,
        19,
        28,
        29,
        31,
        34,
        36,
        38,
        43,
        64,
        92,
        97,
        98,
        99,
        102,
        104,
        115,
        117,
        119,
        129,
        130,
        156,
        163,
        164,
        168,
        173,
        174,
        175,
        182,
        189,
        193,
        197,
        203,
        206,
        207,
        211,
        213,
        214,
        216,
        218,
        226,
        231,
        237,
        241,
        244
      ]
    },
    {
      level: 100,
      species: 84,
      gender: '♂',
      stats: {
        hp: 251,
        attack: 246,
        defense: 168,
        spclAtk: 146,
        spclDef: 146,
        speed: 228
      },
      friendship: 128,
      learnableMoves: [
        18,
        19,
        31,
        34,
        36,
        38,
        45,
        48,
        64,
        65,
        92,
        97,
        98,
        99,
        102,
        104,
        114,
        115,
        117,
        129,
        130,
        143,
        156,
        161,
        164,
        168,
        173,
        174,
        175,
        182,
        185,
        189,
        203,
        207,
        211,
        213,
        214,
        216,
        218,
        228,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 85,
      gender: '♀',
      stats: {
        hp: 279,
        attack: 276,
        defense: 196,
        spclAtk: 174,
        spclDef: 174,
        speed: 254
      },
      friendship: 128,
      learnableMoves: [
        18,
        19,
        31,
        34,
        36,
        38,
        45,
        48,
        63,
        64,
        65,
        92,
        97,
        98,
        99,
        102,
        104,
        114,
        115,
        117,
        129,
        130,
        143,
        156,
        161,
        164,
        168,
        173,
        174,
        175,
        182,
        185,
        189,
        203,
        207,
        211,
        213,
        214,
        216,
        218,
        228,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 86,
      gender: '♂',
      stats: {
        hp: 311,
        attack: 166,
        defense: 188,
        spclAtk: 166,
        spclDef: 216,
        speed: 168
      },
      friendship: 128,
      learnableMoves: [
        6,
        21,
        29,
        32,
        34,
        36,
        38,
        45,
        50,
        55,
        57,
        58,
        59,
        61,
        62,
        64,
        70,
        92,
        99,
        102,
        104,
        117,
        122,
        127,
        130,
        156,
        164,
        173,
        174,
        182,
        195,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        227,
        237,
        240,
        250
      ]
    },
    {
      level: 100,
      species: 87,
      gender: '♀',
      stats: {
        hp: 339,
        attack: 196,
        defense: 216,
        spclAtk: 194,
        spclDef: 244,
        speed: 194
      },
      friendship: 128,
      learnableMoves: [
        6,
        21,
        29,
        32,
        34,
        36,
        38,
        45,
        50,
        55,
        57,
        58,
        59,
        61,
        62,
        63,
        64,
        70,
        92,
        99,
        102,
        104,
        117,
        122,
        127,
        130,
        156,
        164,
        173,
        174,
        182,
        195,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        227,
        237,
        240,
        250
      ]
    },
    {
      level: 100,
      species: 88,
      gender: '♂',
      stats: {
        hp: 341,
        attack: 236,
        defense: 178,
        spclAtk: 156,
        spclDef: 176,
        speed: 128
      },
      friendship: 60,
      learnableMoves: [
        1,
        7,
        8,
        9,
        34,
        50,
        53,
        72,
        85,
        87,
        92,
        99,
        102,
        103,
        104,
        106,
        107,
        114,
        117,
        120,
        122,
        124,
        126,
        139,
        151,
        153,
        156,
        164,
        168,
        173,
        174,
        182,
        188,
        189,
        192,
        202,
        203,
        207,
        212,
        213,
        214,
        216,
        218,
        223,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 89,
      gender: '♀',
      stats: {
        hp: 365,
        attack: 262,
        defense: 202,
        spclAtk: 180,
        spclDef: 250,
        speed: 150
      },
      friendship: 140,
      learnableMoves: [
        1,
        7,
        8,
        9,
        34,
        50,
        53,
        63,
        72,
        85,
        87,
        92,
        99,
        102,
        103,
        104,
        106,
        107,
        114,
        117,
        120,
        122,
        124,
        126,
        139,
        151,
        153,
        156,
        164,
        168,
        173,
        174,
        182,
        188,
        189,
        192,
        202,
        203,
        207,
        212,
        213,
        214,
        216,
        218,
        223,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 90,
      gender: '♂',
      stats: {
        hp: 241,
        attack: 206,
        defense: 278,
        spclAtk: 166,
        spclDef: 126,
        speed: 158
      },
      friendship: 128,
      learnableMoves: [
        33,
        36,
        38,
        43,
        48,
        55,
        57,
        58,
        59,
        61,
        62,
        92,
        99,
        100,
        102,
        103,
        104,
        110,
        112,
        115,
        117,
        120,
        128,
        129,
        153,
        156,
        161,
        164,
        173,
        174,
        182,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        229,
        237,
        240,
        250
      ]
    },
    {
      level: 100,
      species: 91,
      gender: '♀',
      stats: {
        hp: 253,
        attack: 238,
        defense: 408,
        spclAtk: 218,
        spclDef: 138,
        speed: 186
      },
      friendship: 128,
      learnableMoves: [
        33,
        36,
        38,
        43,
        48,
        55,
        57,
        58,
        59,
        61,
        62,
        63,
        92,
        99,
        100,
        102,
        103,
        104,
        110,
        112,
        115,
        117,
        120,
        128,
        129,
        131,
        153,
        156,
        161,
        164,
        173,
        174,
        182,
        191,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        229,
        237,
        240,
        250
      ]
    },
    {
      level: 100,
      species: 92,
      gender: '♂',
      stats: {
        hp: 241,
        attack: 146,
        defense: 138,
        spclAtk: 276,
        spclDef: 146,
        speed: 238
      },
      friendship: 128,
      learnableMoves: [
        72,
        85,
        87,
        92,
        94,
        95,
        99,
        101,
        102,
        104,
        109,
        114,
        117,
        120,
        122,
        138,
        149,
        153,
        156,
        164,
        168,
        171,
        173,
        174,
        180,
        182,
        192,
        194,
        195,
        202,
        203,
        207,
        212,
        213,
        214,
        216,
        218,
        237,
        240,
        241,
        244,
        247
      ]
    },
    {
      level: 100,
      species: 93,
      gender: '♀',
      stats: {
        hp: 257,
        attack: 164,
        defense: 152,
        spclAtk: 292,
        spclDef: 172,
        speed: 254
      },
      friendship: 128,
      learnableMoves: [
        72,
        85,
        87,
        92,
        94,
        95,
        99,
        101,
        102,
        104,
        109,
        114,
        117,
        120,
        122,
        138,
        149,
        153,
        156,
        164,
        168,
        171,
        173,
        174,
        180,
        182,
        192,
        194,
        195,
        202,
        203,
        207,
        212,
        213,
        214,
        216,
        218,
        237,
        240,
        241,
        244,
        247
      ]
    },
    {
      level: 100,
      species: 94,
      gender: '♀',
      stats: {
        hp: 275,
        attack: 182,
        defense: 172,
        spclAtk: 310,
        spclDef: 200,
        speed: 270
      },
      friendship: 128,
      learnableMoves: [
        5,
        7,
        8,
        9,
        25,
        29,
        34,
        36,
        38,
        63,
        66,
        68,
        69,
        70,
        72,
        85,
        87,
        92,
        94,
        95,
        99,
        101,
        102,
        104,
        109,
        114,
        117,
        118,
        120,
        122,
        130,
        138,
        149,
        153,
        156,
        164,
        168,
        171,
        173,
        174,
        180,
        182,
        192,
        194,
        195,
        202,
        203,
        207,
        212,
        213,
        214,
        216,
        218,
        223,
        237,
        240,
        241,
        244,
        247,
        249
      ]
    },
    {
      level: 100,
      species: 95,
      gender: '♂',
      stats: {
        hp: 244,
        attack: 161,
        defense: 389,
        spclAtk: 129,
        spclDef: 159,
        speed: 209
      },
      friendship: 128,
      learnableMoves: [
        20,
        21,
        29,
        33,
        34,
        36,
        38,
        46,
        70,
        88,
        89,
        90,
        91,
        92,
        99,
        102,
        103,
        104,
        106,
        117,
        120,
        130,
        153,
        156,
        157,
        164,
        173,
        174,
        175,
        182,
        189,
        201,
        203,
        207,
        213,
        214,
        216,
        218,
        231,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 96,
      gender: '♂',
      stats: {
        hp: 301,
        attack: 172,
        defense: 168,
        spclAtk: 162,
        spclDef: 256,
        speed: 162
      },
      friendship: 128,
      learnableMoves: [
        1,
        5,
        7,
        8,
        9,
        25,
        29,
        34,
        36,
        38,
        50,
        66,
        68,
        69,
        86,
        92,
        93,
        94,
        95,
        96,
        99,
        100,
        102,
        104,
        112,
        113,
        115,
        117,
        118,
        130,
        138,
        139,
        148,
        149,
        156,
        161,
        164,
        171,
        173,
        174,
        182,
        192,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        237,
        240,
        241,
        244,
        247,
        248
      ]
    },
    {
      level: 100,
      species: 97,
      gender: '♀',
      stats: {
        hp: 329,
        attack: 202,
        defense: 196,
        spclAtk: 200,
        spclDef: 284,
        speed: 188
      },
      friendship: 128,
      learnableMoves: [
        1,
        5,
        7,
        8,
        9,
        25,
        29,
        34,
        36,
        38,
        50,
        63,
        66,
        68,
        69,
        86,
        92,
        93,
        94,
        95,
        96,
        99,
        100,
        102,
        104,
        112,
        113,
        115,
        117,
        118,
        130,
        138,
        139,
        148,
        149,
        156,
        161,
        164,
        171,
        173,
        174,
        182,
        192,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        237,
        240,
        241,
        244,
        247,
        248
      ]
    },
    {
      level: 100,
      species: 98,
      gender: '♂',
      stats: {
        hp: 241,
        attack: 286,
        defense: 258,
        spclAtk: 126,
        spclDef: 126,
        speed: 178
      },
      friendship: 128,
      learnableMoves: [
        11,
        12,
        14,
        15,
        21,
        23,
        34,
        36,
        38,
        43,
        55,
        57,
        58,
        59,
        61,
        70,
        91,
        92,
        99,
        102,
        104,
        106,
        114,
        117,
        133,
        145,
        152,
        156,
        164,
        168,
        173,
        174,
        175,
        182,
        189,
        196,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        237,
        240,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 99,
      gender: '♀',
      stats: {
        hp: 269,
        attack: 316,
        defense: 286,
        spclAtk: 154,
        spclDef: 154,
        speed: 204
      },
      friendship: 128,
      learnableMoves: [
        11,
        12,
        14,
        15,
        21,
        23,
        34,
        36,
        38,
        43,
        55,
        57,
        58,
        59,
        61,
        63,
        70,
        91,
        92,
        99,
        102,
        104,
        106,
        114,
        117,
        133,
        145,
        152,
        156,
        164,
        168,
        173,
        174,
        175,
        182,
        189,
        196,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        237,
        240,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 100,
      gender: '',
      stats: {
        hp: 261,
        attack: 136,
        defense: 178,
        spclAtk: 186,
        spclDef: 186,
        speed: 278
      },
      friendship: 128,
      learnableMoves: [
        29,
        33,
        36,
        49,
        85,
        86,
        87,
        92,
        99,
        100,
        102,
        103,
        104,
        113,
        115,
        117,
        120,
        129,
        148,
        153,
        156,
        164,
        173,
        174,
        182,
        192,
        203,
        205,
        207,
        214,
        216,
        218,
        237,
        240,
        243
      ]
    },
    {
      level: 100,
      species: 101,
      gender: '',
      stats: {
        hp: 279,
        attack: 156,
        defense: 196,
        spclAtk: 214,
        spclDef: 214,
        speed: 334
      },
      friendship: 128,
      learnableMoves: [
        29,
        33,
        36,
        49,
        63,
        85,
        86,
        87,
        92,
        99,
        100,
        102,
        103,
        104,
        113,
        115,
        117,
        120,
        129,
        130,
        148,
        153,
        156,
        164,
        173,
        174,
        182,
        192,
        203,
        205,
        207,
        214,
        216,
        218,
        237,
        240,
        243
      ]
    },
    {
      level: 100,
      species: 102,
      gender: '♂',
      stats: {
        hp: 301,
        attack: 156,
        defense: 238,
        spclAtk: 196,
        spclDef: 166,
        speed: 158
      },
      friendship: 128,
      learnableMoves: [
        36,
        38,
        70,
        72,
        73,
        76,
        77,
        78,
        79,
        92,
        93,
        94,
        95,
        99,
        100,
        102,
        104,
        115,
        117,
        120,
        121,
        138,
        140,
        148,
        149,
        153,
        156,
        164,
        168,
        171,
        173,
        174,
        182,
        188,
        202,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        235,
        236,
        237,
        241,
        244,
        246
      ]
    },
    {
      level: 100,
      species: 103,
      gender: '♀',
      stats: {
        hp: 343,
        attack: 238,
        defense: 218,
        spclAtk: 298,
        spclDef: 178,
        speed: 156
      },
      friendship: 128,
      learnableMoves: [
        23,
        29,
        36,
        38,
        63,
        70,
        72,
        73,
        76,
        77,
        78,
        79,
        92,
        93,
        94,
        95,
        99,
        100,
        102,
        104,
        115,
        117,
        120,
        121,
        138,
        140,
        148,
        149,
        153,
        156,
        164,
        168,
        171,
        173,
        174,
        182,
        188,
        202,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        235,
        236,
        237,
        241,
        244,
        246
      ]
    },
    {
      level: 100,
      species: 104,
      gender: '♂',
      stats: {
        hp: 281,
        attack: 176,
        defense: 268,
        spclAtk: 156,
        spclDef: 176,
        speed: 148
      },
      friendship: 128,
      learnableMoves: [
        5,
        7,
        9,
        14,
        25,
        29,
        34,
        36,
        37,
        38,
        39,
        43,
        45,
        53,
        55,
        58,
        59,
        61,
        66,
        68,
        69,
        70,
        89,
        90,
        91,
        92,
        99,
        102,
        103,
        104,
        116,
        117,
        125,
        126,
        130,
        155,
        156,
        157,
        164,
        168,
        173,
        174,
        182,
        187,
        189,
        195,
        196,
        197,
        198,
        201,
        203,
        206,
        207,
        213,
        214,
        216,
        218,
        223,
        231,
        237,
        241,
        246,
        249
      ]
    },
    {
      level: 100,
      species: 105,
      gender: '♀',
      stats: {
        hp: 287,
        attack: 224,
        defense: 282,
        spclAtk: 162,
        spclDef: 222,
        speed: 154
      },
      friendship: 128,
      learnableMoves: [
        5,
        7,
        9,
        14,
        25,
        29,
        34,
        36,
        37,
        38,
        39,
        43,
        45,
        53,
        55,
        58,
        59,
        61,
        63,
        66,
        68,
        69,
        70,
        89,
        90,
        91,
        92,
        99,
        102,
        103,
        104,
        116,
        117,
        125,
        126,
        130,
        155,
        156,
        157,
        164,
        168,
        173,
        174,
        182,
        187,
        189,
        195,
        196,
        197,
        198,
        201,
        203,
        206,
        207,
        213,
        214,
        216,
        218,
        223,
        231,
        237,
        241,
        246,
        249
      ]
    },
    {
      level: 100,
      species: 106,
      gender: '♂',
      stats: {
        hp: 263,
        attack: 300,
        defense: 164,
        spclAtk: 128,
        spclDef: 278,
        speed: 234
      },
      friendship: 128,
      learnableMoves: [
        5,
        24,
        25,
        26,
        27,
        29,
        33,
        34,
        36,
        38,
        66,
        68,
        69,
        70,
        92,
        96,
        99,
        102,
        104,
        116,
        117,
        118,
        129,
        130,
        136,
        156,
        164,
        168,
        170,
        173,
        174,
        179,
        182,
        183,
        189,
        193,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        229,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 107,
      gender: '♂',
      stats: {
        hp: 263,
        attack: 270,
        defense: 216,
        spclAtk: 128,
        spclDef: 278,
        speed: 212
      },
      friendship: 128,
      learnableMoves: [
        4,
        5,
        7,
        8,
        9,
        25,
        29,
        33,
        34,
        36,
        38,
        66,
        68,
        69,
        70,
        92,
        97,
        99,
        102,
        104,
        117,
        118,
        129,
        130,
        136,
        156,
        164,
        168,
        170,
        173,
        174,
        182,
        183,
        189,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        228,
        229,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 108,
      gender: '♂',
      stats: {
        hp: 354,
        attack: 181,
        defense: 219,
        spclAtk: 189,
        spclDef: 219,
        speed: 129
      },
      friendship: 128,
      learnableMoves: [
        5,
        7,
        8,
        9,
        14,
        15,
        21,
        23,
        25,
        29,
        34,
        35,
        36,
        38,
        48,
        50,
        53,
        55,
        57,
        58,
        59,
        61,
        63,
        66,
        68,
        69,
        70,
        85,
        87,
        89,
        90,
        92,
        99,
        102,
        103,
        104,
        111,
        117,
        122,
        126,
        130,
        138,
        156,
        164,
        168,
        171,
        173,
        174,
        182,
        187,
        189,
        196,
        201,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        222,
        223,
        231,
        237,
        240,
        241,
        244,
        247,
        249
      ]
    },
    {
      level: 100,
      species: 109,
      gender: '♂',
      stats: {
        hp: 261,
        attack: 206,
        defense: 268,
        spclAtk: 196,
        spclDef: 166,
        speed: 148
      },
      friendship: 128,
      learnableMoves: [
        33,
        53,
        60,
        85,
        87,
        92,
        99,
        102,
        103,
        104,
        108,
        114,
        117,
        120,
        123,
        124,
        126,
        139,
        149,
        153,
        156,
        164,
        168,
        173,
        174,
        182,
        188,
        192,
        194,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        220,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 110,
      gender: '♀',
      stats: {
        hp: 289,
        attack: 236,
        defense: 296,
        spclAtk: 224,
        spclDef: 194,
        speed: 174
      },
      friendship: 128,
      learnableMoves: [
        33,
        53,
        60,
        63,
        85,
        87,
        92,
        99,
        102,
        103,
        104,
        108,
        114,
        117,
        120,
        123,
        124,
        126,
        139,
        149,
        153,
        156,
        164,
        168,
        173,
        174,
        182,
        188,
        192,
        194,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        220,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 111,
      gender: '♂',
      stats: {
        hp: 341,
        attack: 246,
        defense: 268,
        spclAtk: 136,
        spclDef: 136,
        speed: 128
      },
      friendship: 128,
      learnableMoves: [
        23,
        29,
        30,
        31,
        32,
        34,
        36,
        37,
        38,
        39,
        43,
        46,
        53,
        58,
        59,
        68,
        70,
        85,
        87,
        89,
        90,
        91,
        92,
        99,
        102,
        104,
        117,
        126,
        130,
        156,
        157,
        164,
        173,
        174,
        179,
        182,
        184,
        189,
        192,
        196,
        201,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        222,
        228,
        231,
        237,
        241,
        242,
        249
      ]
    },
    {
      level: 100,
      species: 112,
      gender: '♀',
      stats: {
        hp: 369,
        attack: 316,
        defense: 296,
        spclAtk: 144,
        spclDef: 144,
        speed: 134
      },
      friendship: 128,
      learnableMoves: [
        5,
        6,
        7,
        9,
        23,
        25,
        29,
        30,
        31,
        32,
        34,
        36,
        37,
        38,
        39,
        43,
        46,
        53,
        55,
        57,
        58,
        59,
        61,
        63,
        66,
        68,
        69,
        70,
        85,
        87,
        89,
        90,
        91,
        92,
        99,
        102,
        104,
        117,
        126,
        130,
        156,
        157,
        164,
        173,
        174,
        179,
        182,
        184,
        189,
        192,
        196,
        201,
        203,
        205,
        207,
        210,
        213,
        214,
        216,
        218,
        222,
        223,
        228,
        231,
        237,
        241,
        242,
        249
      ]
    },
    {
      level: 100,
      species: 113,
      gender: '♀',
      stats: {
        hp: 659,
        attack: 66,
        defense: 66,
        spclAtk: 124,
        spclDef: 264,
        speed: 154
      },
      friendship: 128,
      learnableMoves: [
        1,
        3,
        5,
        25,
        29,
        34,
        36,
        38,
        39,
        45,
        47,
        53,
        55,
        58,
        59,
        61,
        63,
        66,
        68,
        69,
        70,
        76,
        85,
        86,
        87,
        92,
        94,
        99,
        100,
        102,
        104,
        107,
        111,
        113,
        115,
        117,
        118,
        121,
        126,
        130,
        135,
        138,
        148,
        149,
        156,
        161,
        164,
        173,
        174,
        182,
        189,
        192,
        196,
        201,
        203,
        205,
        207,
        213,
        214,
        215,
        216,
        217,
        218,
        223,
        231,
        237,
        240,
        241,
        244,
        247,
        249
      ]
    },
    {
      level: 100,
      species: 114,
      gender: '♀',
      stats: {
        hp: 297,
        attack: 174,
        defense: 292,
        spclAtk: 262,
        spclDef: 142,
        speed: 184
      },
      friendship: 128,
      learnableMoves: [
        14,
        15,
        20,
        21,
        22,
        29,
        34,
        36,
        38,
        63,
        71,
        72,
        74,
        76,
        77,
        78,
        79,
        92,
        93,
        99,
        102,
        104,
        115,
        117,
        130,
        132,
        133,
        148,
        156,
        164,
        168,
        173,
        174,
        175,
        182,
        188,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        230,
        237,
        241,
        244
      ]
    },
    {
      level: 100,
      species: 115,
      gender: '♀',
      stats: {
        hp: 369,
        attack: 246,
        defense: 216,
        spclAtk: 134,
        spclDef: 214,
        speed: 234
      },
      friendship: 128,
      learnableMoves: [
        4,
        5,
        7,
        8,
        9,
        23,
        25,
        29,
        34,
        36,
        38,
        39,
        43,
        44,
        46,
        50,
        53,
        55,
        57,
        58,
        59,
        61,
        63,
        66,
        68,
        69,
        70,
        85,
        87,
        89,
        90,
        92,
        99,
        102,
        104,
        116,
        117,
        126,
        130,
        146,
        156,
        157,
        164,
        173,
        174,
        179,
        182,
        189,
        192,
        193,
        196,
        201,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        219,
        223,
        231,
        237,
        240,
        241,
        247,
        249
      ]
    },
    {
      level: 100,
      species: 116,
      gender: '♂',
      stats: {
        hp: 248,
        attack: 163,
        defense: 225,
        spclAtk: 223,
        spclDef: 133,
        speed: 203
      },
      friendship: 128,
      learnableMoves: [
        29,
        36,
        38,
        43,
        50,
        55,
        56,
        57,
        58,
        59,
        61,
        62,
        82,
        92,
        97,
        99,
        102,
        104,
        108,
        117,
        127,
        129,
        130,
        145,
        150,
        156,
        164,
        173,
        174,
        175,
        182,
        190,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        225,
        237,
        239,
        240,
        250
      ]
    },
    {
      level: 100,
      species: 117,
      gender: '♀',
      stats: {
        hp: 277,
        attack: 194,
        defense: 252,
        spclAtk: 252,
        spclDef: 152,
        speed: 234
      },
      friendship: 128,
      learnableMoves: [
        29,
        36,
        38,
        43,
        50,
        55,
        56,
        57,
        58,
        59,
        61,
        62,
        63,
        82,
        92,
        97,
        99,
        102,
        104,
        108,
        117,
        127,
        129,
        130,
        145,
        150,
        156,
        164,
        173,
        174,
        175,
        182,
        190,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        225,
        237,
        239,
        240,
        250
      ]
    },
    {
      level: 100,
      species: 118,
      gender: '♂',
      stats: {
        hp: 271,
        attack: 210,
        defense: 198,
        spclAtk: 146,
        spclDef: 176,
        speed: 204
      },
      friendship: 128,
      learnableMoves: [
        30,
        31,
        32,
        36,
        38,
        39,
        48,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        64,
        92,
        97,
        99,
        102,
        104,
        114,
        117,
        127,
        129,
        130,
        156,
        164,
        173,
        174,
        175,
        182,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        237,
        240
      ]
    },
    {
      level: 100,
      species: 119,
      gender: '♀',
      stats: {
        hp: 323,
        attack: 244,
        defense: 188,
        spclAtk: 188,
        spclDef: 218,
        speed: 196
      },
      friendship: 128,
      learnableMoves: [
        30,
        31,
        32,
        36,
        38,
        39,
        48,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        63,
        64,
        92,
        97,
        99,
        102,
        104,
        114,
        117,
        127,
        129,
        130,
        156,
        164,
        173,
        174,
        175,
        182,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        237,
        240
      ]
    },
    {
      level: 100,
      species: 120,
      gender: '',
      stats: {
        hp: 241,
        attack: 166,
        defense: 188,
        spclAtk: 216,
        spclDef: 186,
        speed: 248
      },
      friendship: 128,
      learnableMoves: [
        33,
        36,
        38,
        55,
        56,
        57,
        58,
        59,
        61,
        85,
        86,
        87,
        92,
        94,
        99,
        100,
        102,
        104,
        105,
        106,
        107,
        113,
        115,
        117,
        127,
        129,
        130,
        148,
        149,
        156,
        161,
        164,
        173,
        174,
        182,
        192,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        229,
        237,
        240,
        244,
        250
      ]
    },
    {
      level: 100,
      species: 121,
      gender: '',
      stats: {
        hp: 273,
        attack: 198,
        defense: 218,
        spclAtk: 248,
        spclDef: 218,
        speed: 276
      },
      friendship: 128,
      learnableMoves: [
        33,
        36,
        38,
        55,
        56,
        57,
        58,
        59,
        61,
        63,
        85,
        86,
        87,
        92,
        94,
        99,
        100,
        102,
        104,
        105,
        106,
        107,
        109,
        113,
        115,
        117,
        127,
        129,
        130,
        138,
        148,
        149,
        156,
        161,
        164,
        171,
        173,
        174,
        182,
        192,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        229,
        237,
        240,
        244,
        250
      ]
    },
    {
      level: 100,
      species: 122,
      gender: '♀',
      stats: {
        hp: 239,
        attack: 146,
        defense: 186,
        spclAtk: 254,
        spclDef: 294,
        speed: 234
      },
      friendship: 128,
      learnableMoves: [
        3,
        5,
        7,
        8,
        9,
        25,
        29,
        34,
        36,
        38,
        60,
        63,
        66,
        68,
        69,
        76,
        85,
        86,
        87,
        92,
        93,
        94,
        95,
        96,
        99,
        100,
        102,
        104,
        112,
        113,
        115,
        117,
        118,
        130,
        138,
        148,
        149,
        156,
        164,
        168,
        171,
        173,
        174,
        182,
        189,
        192,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        223,
        226,
        227,
        237,
        241,
        244,
        247,
        248
      ]
    },
    {
      level: 100,
      species: 123,
      gender: '♀',
      stats: {
        hp: 295,
        attack: 272,
        defense: 212,
        spclAtk: 160,
        spclDef: 210,
        speed: 260
      },
      friendship: 128,
      learnableMoves: [
        13,
        14,
        15,
        17,
        29,
        36,
        38,
        43,
        63,
        68,
        92,
        97,
        98,
        99,
        102,
        104,
        113,
        116,
        117,
        129,
        130,
        156,
        163,
        164,
        168,
        173,
        174,
        179,
        182,
        197,
        203,
        206,
        207,
        210,
        211,
        213,
        214,
        216,
        218,
        219,
        226,
        228,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 124,
      gender: '♀',
      stats: {
        hp: 289,
        attack: 156,
        defense: 126,
        spclAtk: 284,
        spclDef: 244,
        speed: 244
      },
      friendship: 128,
      learnableMoves: [
        1,
        3,
        5,
        8,
        25,
        29,
        34,
        36,
        37,
        38,
        47,
        55,
        58,
        59,
        61,
        63,
        66,
        68,
        69,
        92,
        93,
        94,
        96,
        99,
        100,
        102,
        104,
        115,
        117,
        118,
        122,
        130,
        138,
        142,
        149,
        156,
        164,
        168,
        171,
        173,
        174,
        181,
        182,
        186,
        189,
        195,
        196,
        203,
        207,
        212,
        213,
        214,
        216,
        218,
        223,
        230,
        237,
        240,
        244,
        247
      ]
    },
    {
      level: 100,
      species: 125,
      gender: '♂',
      stats: {
        hp: 289,
        attack: 222,
        defense: 170,
        spclAtk: 244,
        spclDef: 224,
        speed: 264
      },
      friendship: 128,
      learnableMoves: [
        2,
        5,
        7,
        8,
        9,
        25,
        27,
        29,
        34,
        36,
        38,
        43,
        63,
        66,
        68,
        69,
        70,
        84,
        85,
        86,
        87,
        92,
        94,
        96,
        98,
        99,
        100,
        102,
        103,
        104,
        112,
        113,
        115,
        117,
        118,
        129,
        130,
        148,
        149,
        156,
        164,
        168,
        173,
        174,
        182,
        189,
        192,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        231,
        237,
        238,
        240,
        249
      ]
    },
    {
      level: 100,
      species: 126,
      gender: '♂',
      stats: {
        hp: 289,
        attack: 246,
        defense: 170,
        spclAtk: 254,
        spclDef: 224,
        speed: 240
      },
      friendship: 128,
      learnableMoves: [
        2,
        5,
        7,
        9,
        25,
        29,
        34,
        36,
        38,
        43,
        52,
        53,
        63,
        66,
        68,
        69,
        70,
        92,
        94,
        99,
        100,
        102,
        103,
        104,
        108,
        109,
        112,
        117,
        118,
        123,
        126,
        130,
        149,
        156,
        164,
        168,
        173,
        174,
        182,
        189,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        231,
        237,
        238,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 127,
      gender: '♀',
      stats: {
        hp: 285,
        attack: 302,
        defense: 252,
        spclAtk: 160,
        spclDef: 190,
        speed: 220
      },
      friendship: 128,
      learnableMoves: [
        11,
        12,
        14,
        15,
        20,
        29,
        31,
        34,
        36,
        38,
        63,
        66,
        69,
        70,
        92,
        99,
        102,
        104,
        106,
        116,
        117,
        156,
        163,
        164,
        168,
        173,
        174,
        175,
        182,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 128,
      gender: '♂',
      stats: {
        hp: 309,
        attack: 256,
        defense: 246,
        spclAtk: 134,
        spclDef: 194,
        speed: 274
      },
      friendship: 128,
      learnableMoves: [
        23,
        29,
        30,
        32,
        33,
        34,
        36,
        37,
        38,
        39,
        43,
        53,
        57,
        58,
        59,
        63,
        70,
        85,
        87,
        89,
        90,
        92,
        99,
        102,
        104,
        117,
        126,
        130,
        156,
        164,
        173,
        174,
        182,
        184,
        192,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        228,
        231,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 129,
      gender: '♂',
      stats: {
        hp: 234,
        attack: 109,
        defense: 199,
        spclAtk: 123,
        spclDef: 133,
        speed: 251
      },
      friendship: 128,
      learnableMoves: [
        33,
        82,
        150,
        175
      ]
    },
    {
      level: 100,
      species: 130,
      gender: '♀',
      stats: {
        hp: 343,
        attack: 298,
        defense: 206,
        spclAtk: 168,
        spclDef: 248,
        speed: 208
      },
      friendship: 128,
      learnableMoves: [
        29,
        33,
        34,
        36,
        37,
        38,
        43,
        44,
        46,
        53,
        55,
        56,
        57,
        58,
        59,
        61,
        63,
        70,
        82,
        85,
        87,
        92,
        99,
        102,
        104,
        115,
        117,
        126,
        127,
        130,
        150,
        156,
        164,
        173,
        174,
        175,
        182,
        192,
        196,
        201,
        203,
        207,
        213,
        214,
        216,
        218,
        225,
        237,
        239,
        240,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 131,
      gender: '♀',
      stats: {
        hp: 413,
        attack: 218,
        defense: 208,
        spclAtk: 218,
        spclDef: 238,
        speed: 166
      },
      friendship: 128,
      learnableMoves: [
        29,
        32,
        34,
        36,
        38,
        45,
        47,
        54,
        55,
        56,
        57,
        58,
        59,
        61,
        62,
        63,
        70,
        76,
        82,
        85,
        87,
        92,
        94,
        99,
        102,
        104,
        109,
        115,
        117,
        130,
        138,
        149,
        156,
        164,
        171,
        173,
        174,
        182,
        192,
        193,
        195,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        225,
        231,
        237,
        240,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 132,
      gender: '',
      stats: {
        hp: 277,
        attack: 172,
        defense: 174,
        spclAtk: 172,
        spclDef: 172,
        speed: 174
      },
      friendship: 128,
      learnableMoves: [
        144
      ]
    },
    {
      level: 100,
      species: 133,
      gender: '♂',
      stats: {
        hp: 291,
        attack: 186,
        defense: 178,
        spclAtk: 166,
        spclDef: 206,
        speed: 188
      },
      friendship: 128,
      learnableMoves: [
        28,
        29,
        33,
        34,
        36,
        38,
        39,
        44,
        45,
        92,
        98,
        99,
        102,
        104,
        115,
        116,
        117,
        129,
        130,
        156,
        164,
        173,
        174,
        175,
        182,
        189,
        197,
        203,
        204,
        207,
        213,
        214,
        216,
        218,
        226,
        231,
        237,
        240,
        241,
        247
      ]
    },
    {
      level: 100,
      species: 134,
      gender: '♂',
      stats: {
        hp: 413,
        attack: 178,
        defense: 168,
        spclAtk: 268,
        spclDef: 238,
        speed: 176
      },
      friendship: 128,
      learnableMoves: [
        28,
        29,
        33,
        34,
        36,
        38,
        39,
        44,
        45,
        46,
        54,
        55,
        56,
        57,
        58,
        59,
        61,
        62,
        63,
        92,
        98,
        99,
        102,
        104,
        114,
        115,
        116,
        117,
        127,
        129,
        130,
        151,
        156,
        164,
        173,
        174,
        175,
        182,
        189,
        196,
        197,
        203,
        204,
        207,
        213,
        214,
        216,
        218,
        226,
        231,
        237,
        240,
        241,
        247,
        250
      ]
    },
    {
      level: 100,
      species: 135,
      gender: '♂',
      stats: {
        hp: 283,
        attack: 178,
        defense: 168,
        spclAtk: 268,
        spclDef: 238,
        speed: 306
      },
      friendship: 128,
      learnableMoves: [
        24,
        28,
        29,
        33,
        34,
        36,
        38,
        39,
        42,
        44,
        45,
        46,
        63,
        84,
        85,
        86,
        87,
        92,
        97,
        98,
        99,
        102,
        104,
        115,
        116,
        117,
        129,
        130,
        148,
        156,
        164,
        173,
        174,
        175,
        182,
        189,
        192,
        197,
        203,
        204,
        207,
        213,
        214,
        216,
        218,
        226,
        231,
        237,
        240,
        241,
        247
      ]
    },
    {
      level: 100,
      species: 136,
      gender: '♂',
      stats: {
        hp: 283,
        attack: 308,
        defense: 168,
        spclAtk: 238,
        spclDef: 268,
        speed: 176
      },
      friendship: 128,
      learnableMoves: [
        28,
        29,
        33,
        34,
        36,
        38,
        39,
        43,
        44,
        45,
        46,
        52,
        53,
        63,
        83,
        92,
        98,
        99,
        102,
        104,
        115,
        116,
        117,
        123,
        126,
        129,
        130,
        156,
        164,
        173,
        174,
        175,
        182,
        189,
        192,
        197,
        203,
        204,
        207,
        213,
        214,
        216,
        218,
        226,
        231,
        237,
        240,
        241,
        247
      ]
    },
    {
      level: 100,
      species: 137,
      gender: '',
      stats: {
        hp: 304,
        attack: 191,
        defense: 209,
        spclAtk: 239,
        spclDef: 219,
        speed: 149
      },
      friendship: 128,
      learnableMoves: [
        33,
        36,
        38,
        58,
        59,
        60,
        63,
        85,
        86,
        87,
        92,
        94,
        97,
        99,
        100,
        102,
        104,
        105,
        115,
        117,
        129,
        130,
        138,
        148,
        149,
        156,
        159,
        160,
        161,
        164,
        168,
        171,
        173,
        174,
        176,
        182,
        192,
        196,
        199,
        203,
        207,
        214,
        216,
        218,
        231,
        237,
        240,
        241,
        244
      ]
    },
    {
      level: 100,
      species: 138,
      gender: '♂',
      stats: {
        hp: 244,
        attack: 151,
        defense: 269,
        spclAtk: 249,
        spclDef: 179,
        speed: 139
      },
      friendship: 128,
      learnableMoves: [
        21,
        29,
        30,
        34,
        36,
        38,
        43,
        44,
        48,
        55,
        56,
        57,
        58,
        59,
        61,
        62,
        92,
        99,
        102,
        104,
        110,
        114,
        115,
        117,
        131,
        132,
        156,
        164,
        168,
        173,
        174,
        182,
        196,
        201,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        237,
        240,
        246,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 139,
      gender: '♂',
      stats: {
        hp: 299,
        attack: 176,
        defense: 306,
        spclAtk: 284,
        spclDef: 194,
        speed: 164
      },
      friendship: 128,
      learnableMoves: [
        21,
        29,
        30,
        32,
        34,
        36,
        38,
        43,
        44,
        48,
        55,
        56,
        57,
        58,
        59,
        61,
        62,
        63,
        66,
        69,
        92,
        99,
        102,
        104,
        110,
        114,
        115,
        117,
        130,
        131,
        132,
        156,
        164,
        168,
        173,
        174,
        182,
        196,
        201,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        237,
        240,
        246,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 140,
      gender: '♂',
      stats: {
        hp: 234,
        attack: 231,
        defense: 249,
        spclAtk: 179,
        spclDef: 159,
        speed: 179
      },
      friendship: 180,
      learnableMoves: [
        10,
        28,
        34,
        36,
        38,
        43,
        55,
        56,
        57,
        58,
        59,
        61,
        62,
        71,
        72,
        91,
        92,
        99,
        102,
        104,
        106,
        115,
        117,
        156,
        163,
        164,
        168,
        173,
        174,
        175,
        182,
        196,
        201,
        202,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        229,
        237,
        240,
        246,
        249
      ]
    },
    {
      level: 100,
      species: 141,
      gender: '♂',
      stats: {
        hp: 279,
        attack: 286,
        defense: 266,
        spclAtk: 184,
        spclDef: 194,
        speed: 214
      },
      friendship: 128,
      learnableMoves: [
        10,
        13,
        14,
        15,
        25,
        28,
        29,
        34,
        36,
        38,
        43,
        55,
        56,
        57,
        58,
        59,
        61,
        62,
        63,
        66,
        69,
        71,
        72,
        91,
        92,
        99,
        102,
        104,
        106,
        115,
        117,
        130,
        156,
        163,
        164,
        168,
        173,
        174,
        175,
        182,
        196,
        201,
        202,
        203,
        205,
        207,
        210,
        213,
        214,
        216,
        218,
        229,
        237,
        240,
        246,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 142,
      gender: '♂',
      stats: {
        hp: 309,
        attack: 254,
        defense: 174,
        spclAtk: 164,
        spclDef: 194,
        speed: 302
      },
      friendship: 128,
      learnableMoves: [
        13,
        17,
        18,
        19,
        29,
        36,
        38,
        44,
        46,
        48,
        53,
        63,
        82,
        89,
        92,
        97,
        99,
        102,
        104,
        115,
        117,
        126,
        129,
        143,
        156,
        164,
        173,
        174,
        182,
        184,
        193,
        197,
        201,
        203,
        207,
        211,
        213,
        214,
        216,
        218,
        225,
        228,
        231,
        237,
        240,
        246,
        249
      ]
    },
    {
      level: 100,
      species: 143,
      gender: '♂',
      stats: {
        hp: 473,
        attack: 268,
        defense: 178,
        spclAtk: 178,
        spclDef: 268,
        speed: 106
      },
      friendship: 120,
      learnableMoves: [
        5,
        6,
        7,
        8,
        9,
        25,
        29,
        33,
        34,
        36,
        38,
        53,
        55,
        57,
        58,
        59,
        61,
        63,
        66,
        68,
        69,
        70,
        76,
        85,
        87,
        89,
        90,
        92,
        94,
        99,
        102,
        104,
        106,
        111,
        115,
        117,
        118,
        120,
        122,
        126,
        130,
        133,
        149,
        156,
        157,
        164,
        173,
        174,
        182,
        187,
        189,
        192,
        196,
        201,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        223,
        237,
        240,
        241,
        244,
        247,
        249
      ]
    },
    {
      level: 100,
      species: 144,
      gender: '',
      stats: {
        hp: 320,
        attack: 205,
        defense: 235,
        spclAtk: 225,
        spclDef: 285,
        speed: 205
      },
      friendship: 128,
      learnableMoves: [
        13,
        16,
        18,
        19,
        36,
        38,
        46,
        54,
        55,
        58,
        59,
        61,
        63,
        64,
        92,
        97,
        99,
        102,
        104,
        115,
        117,
        129,
        143,
        156,
        164,
        170,
        173,
        174,
        181,
        182,
        189,
        196,
        197,
        201,
        203,
        207,
        211,
        214,
        216,
        218,
        237,
        240,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 145,
      gender: '',
      stats: {
        hp: 320,
        attack: 215,
        defense: 205,
        spclAtk: 285,
        spclDef: 215,
        speed: 235
      },
      friendship: 128,
      learnableMoves: [
        13,
        18,
        19,
        36,
        38,
        46,
        63,
        64,
        65,
        84,
        85,
        86,
        87,
        92,
        97,
        99,
        102,
        104,
        113,
        115,
        117,
        129,
        143,
        148,
        156,
        164,
        173,
        174,
        182,
        189,
        192,
        197,
        201,
        203,
        207,
        211,
        214,
        216,
        218,
        237,
        240,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 146,
      gender: '',
      stats: {
        hp: 320,
        attack: 235,
        defense: 215,
        spclAtk: 285,
        spclDef: 205,
        speed: 215
      },
      friendship: 128,
      learnableMoves: [
        13,
        17,
        18,
        19,
        36,
        38,
        43,
        46,
        52,
        53,
        63,
        64,
        83,
        92,
        97,
        99,
        102,
        104,
        115,
        117,
        126,
        129,
        143,
        156,
        164,
        173,
        174,
        182,
        189,
        197,
        201,
        203,
        207,
        211,
        214,
        216,
        218,
        219,
        237,
        240,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 147,
      gender: '♂',
      stats: {
        hp: 263,
        attack: 204,
        defense: 168,
        spclAtk: 176,
        spclDef: 176,
        speed: 178
      },
      friendship: 128,
      learnableMoves: [
        21,
        29,
        34,
        35,
        36,
        38,
        43,
        48,
        53,
        54,
        55,
        57,
        58,
        59,
        61,
        63,
        82,
        85,
        86,
        87,
        92,
        97,
        99,
        102,
        104,
        113,
        114,
        115,
        117,
        126,
        127,
        129,
        130,
        156,
        164,
        173,
        174,
        182,
        192,
        196,
        197,
        200,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        225,
        231,
        237,
        239,
        240,
        245
      ]
    },
    {
      level: 100,
      species: 148,
      gender: '♀',
      stats: {
        hp: 289,
        attack: 232,
        defense: 192,
        spclAtk: 202,
        spclDef: 202,
        speed: 204
      },
      friendship: 128,
      learnableMoves: [
        21,
        29,
        32,
        34,
        35,
        36,
        38,
        43,
        48,
        53,
        54,
        55,
        57,
        58,
        59,
        61,
        63,
        82,
        85,
        86,
        87,
        92,
        97,
        99,
        102,
        104,
        113,
        114,
        115,
        117,
        126,
        127,
        129,
        130,
        156,
        164,
        173,
        174,
        182,
        192,
        196,
        197,
        200,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        225,
        231,
        237,
        239,
        240,
        245
      ]
    },
    {
      level: 100,
      species: 149,
      gender: '♀',
      stats: {
        hp: 325,
        attack: 306,
        defense: 228,
        spclAtk: 238,
        spclDef: 238,
        speed: 198
      },
      friendship: 128,
      learnableMoves: [
        7,
        8,
        9,
        13,
        17,
        19,
        21,
        29,
        32,
        34,
        35,
        36,
        38,
        43,
        48,
        53,
        54,
        55,
        57,
        58,
        59,
        61,
        63,
        70,
        82,
        85,
        86,
        87,
        92,
        97,
        99,
        102,
        104,
        113,
        114,
        115,
        117,
        126,
        127,
        129,
        130,
        156,
        164,
        173,
        174,
        182,
        189,
        192,
        196,
        197,
        200,
        201,
        203,
        207,
        210,
        211,
        213,
        214,
        216,
        218,
        219,
        223,
        225,
        231,
        237,
        239,
        240,
        245,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 152,
      gender: '♂',
      stats: {
        hp: 271,
        attack: 174,
        defense: 208,
        spclAtk: 174,
        spclDef: 206,
        speed: 168
      },
      friendship: 128,
      learnableMoves: [
        14,
        15,
        22,
        29,
        33,
        34,
        45,
        68,
        73,
        75,
        76,
        77,
        92,
        104,
        113,
        115,
        148,
        156,
        173,
        174,
        175,
        182,
        189,
        197,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        230,
        231,
        235,
        237,
        241,
        246
      ]
    },
    {
      level: 100,
      species: 153,
      gender: '♂',
      stats: {
        hp: 287,
        attack: 188,
        defense: 222,
        spclAtk: 188,
        spclDef: 222,
        speed: 184
      },
      friendship: 128,
      learnableMoves: [
        14,
        15,
        22,
        29,
        33,
        34,
        45,
        68,
        70,
        73,
        75,
        76,
        77,
        92,
        104,
        113,
        115,
        148,
        156,
        173,
        174,
        175,
        182,
        189,
        197,
        202,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        219,
        230,
        231,
        235,
        237,
        241,
        246,
        249
      ]
    },
    {
      level: 100,
      species: 154,
      gender: '♂',
      stats: {
        hp: 313,
        attack: 212,
        defense: 248,
        spclAtk: 214,
        spclDef: 248,
        speed: 206
      },
      friendship: 160,
      learnableMoves: [
        14,
        15,
        22,
        29,
        33,
        34,
        45,
        63,
        68,
        70,
        73,
        75,
        76,
        77,
        89,
        92,
        104,
        113,
        115,
        148,
        156,
        173,
        174,
        175,
        182,
        189,
        197,
        202,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        219,
        230,
        231,
        235,
        237,
        241,
        246,
        249
      ]
    },
    {
      level: 100,
      species: 155,
      gender: '♂',
      stats: {
        hp: 259,
        attack: 180,
        defense: 164,
        spclAtk: 196,
        spclDef: 176,
        speed: 208
      },
      friendship: 128,
      learnableMoves: [
        15,
        29,
        33,
        37,
        43,
        52,
        53,
        66,
        91,
        92,
        98,
        104,
        108,
        111,
        126,
        129,
        154,
        156,
        172,
        173,
        174,
        179,
        182,
        189,
        193,
        197,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        231,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 156,
      gender: '♂',
      stats: {
        hp: 283,
        attack: 192,
        defense: 178,
        spclAtk: 222,
        spclDef: 192,
        speed: 224
      },
      friendship: 128,
      learnableMoves: [
        15,
        29,
        33,
        37,
        43,
        46,
        52,
        53,
        66,
        70,
        91,
        92,
        98,
        104,
        108,
        111,
        126,
        129,
        154,
        156,
        172,
        173,
        174,
        179,
        182,
        189,
        193,
        197,
        203,
        205,
        207,
        210,
        213,
        214,
        216,
        218,
        231,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 157,
      gender: '♂',
      stats: {
        hp: 309,
        attack: 216,
        defense: 204,
        spclAtk: 266,
        spclDef: 218,
        speed: 246
      },
      friendship: 128,
      learnableMoves: [
        7,
        9,
        15,
        29,
        33,
        37,
        43,
        46,
        52,
        53,
        63,
        66,
        70,
        89,
        91,
        92,
        98,
        104,
        108,
        111,
        126,
        129,
        154,
        156,
        172,
        173,
        174,
        179,
        182,
        189,
        193,
        197,
        203,
        205,
        207,
        210,
        213,
        214,
        216,
        218,
        223,
        231,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 158,
      gender: '♂',
      stats: {
        hp: 281,
        attack: 206,
        defense: 206,
        spclAtk: 164,
        spclDef: 172,
        speed: 164
      },
      friendship: 128,
      learnableMoves: [
        8,
        10,
        13,
        15,
        29,
        37,
        43,
        44,
        55,
        56,
        57,
        58,
        59,
        91,
        92,
        99,
        103,
        104,
        156,
        157,
        163,
        173,
        174,
        182,
        184,
        189,
        196,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        231,
        237,
        240,
        242,
        246,
        250
      ]
    },
    {
      level: 100,
      species: 159,
      gender: '♂',
      stats: {
        hp: 297,
        attack: 224,
        defense: 222,
        spclAtk: 180,
        spclDef: 188,
        speed: 180
      },
      friendship: 128,
      learnableMoves: [
        8,
        10,
        13,
        15,
        29,
        37,
        43,
        44,
        46,
        55,
        56,
        57,
        58,
        59,
        70,
        91,
        92,
        99,
        103,
        104,
        156,
        157,
        163,
        173,
        174,
        182,
        184,
        189,
        196,
        197,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        223,
        231,
        237,
        240,
        242,
        246,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 160,
      gender: '♂',
      stats: {
        hp: 323,
        attack: 258,
        defense: 248,
        spclAtk: 206,
        spclDef: 214,
        speed: 202
      },
      friendship: 128,
      learnableMoves: [
        8,
        10,
        13,
        15,
        29,
        37,
        43,
        44,
        46,
        55,
        56,
        57,
        58,
        59,
        63,
        70,
        89,
        91,
        92,
        99,
        103,
        104,
        156,
        157,
        163,
        173,
        174,
        182,
        184,
        189,
        196,
        197,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        223,
        231,
        237,
        240,
        242,
        246,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 161,
      gender: '♂',
      stats: {
        hp: 264,
        attack: 181,
        defense: 157,
        spclAtk: 163,
        spclDef: 183,
        speed: 131
      },
      friendship: 128,
      learnableMoves: [
        7,
        8,
        9,
        15,
        21,
        29,
        33,
        38,
        57,
        91,
        92,
        98,
        104,
        111,
        116,
        129,
        133,
        154,
        156,
        163,
        168,
        173,
        174,
        179,
        182,
        189,
        197,
        203,
        205,
        207,
        210,
        213,
        214,
        216,
        218,
        223,
        228,
        231,
        237,
        241,
        247
      ]
    },
    {
      level: 100,
      species: 162,
      gender: '♀',
      stats: {
        hp: 337,
        attack: 216,
        defense: 190,
        spclAtk: 152,
        spclDef: 172,
        speed: 244
      },
      friendship: 128,
      learnableMoves: [
        7,
        8,
        9,
        10,
        15,
        21,
        29,
        33,
        38,
        57,
        63,
        70,
        91,
        92,
        98,
        104,
        111,
        116,
        129,
        133,
        154,
        156,
        163,
        168,
        173,
        174,
        179,
        182,
        189,
        197,
        203,
        205,
        207,
        210,
        213,
        214,
        216,
        218,
        223,
        228,
        231,
        237,
        241,
        247
      ]
    },
    {
      level: 100,
      species: 163,
      gender: '♂',
      stats: {
        hp: 308,
        attack: 143,
        defense: 145,
        spclAtk: 155,
        spclDef: 195,
        speed: 183
      },
      friendship: 128,
      learnableMoves: [
        17,
        18,
        19,
        33,
        36,
        45,
        48,
        64,
        92,
        93,
        95,
        104,
        115,
        119,
        129,
        138,
        143,
        148,
        156,
        168,
        171,
        173,
        174,
        182,
        185,
        189,
        193,
        197,
        203,
        207,
        211,
        213,
        214,
        216,
        218,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 164,
      gender: '♀',
      stats: {
        hp: 367,
        attack: 164,
        defense: 162,
        spclAtk: 214,
        spclDef: 254,
        speed: 204
      },
      friendship: 128,
      learnableMoves: [
        17,
        18,
        19,
        33,
        36,
        45,
        48,
        63,
        64,
        92,
        93,
        95,
        104,
        115,
        119,
        129,
        138,
        143,
        148,
        156,
        168,
        171,
        173,
        174,
        182,
        185,
        189,
        193,
        197,
        203,
        207,
        211,
        213,
        214,
        216,
        218,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 165,
      gender: '♂',
      stats: {
        hp: 268,
        attack: 123,
        defense: 145,
        spclAtk: 163,
        spclDef: 243,
        speed: 193
      },
      friendship: 128,
      learnableMoves: [
        4,
        8,
        9,
        29,
        33,
        38,
        48,
        60,
        76,
        91,
        92,
        97,
        104,
        113,
        115,
        117,
        129,
        148,
        156,
        168,
        173,
        174,
        182,
        202,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        219,
        223,
        226,
        230,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 166,
      gender: '♂',
      stats: {
        hp: 284,
        attack: 141,
        defense: 169,
        spclAtk: 179,
        spclDef: 289,
        speed: 239
      },
      friendship: 128,
      learnableMoves: [
        4,
        8,
        9,
        29,
        33,
        38,
        48,
        60,
        63,
        76,
        91,
        92,
        97,
        104,
        113,
        115,
        117,
        129,
        148,
        156,
        168,
        173,
        174,
        182,
        202,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        219,
        223,
        226,
        230,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 167,
      gender: '♂',
      stats: {
        hp: 274,
        attack: 209,
        defense: 169,
        spclAtk: 173,
        spclDef: 173,
        speed: 151
      },
      friendship: 128,
      learnableMoves: [
        40,
        49,
        50,
        60,
        76,
        81,
        91,
        92,
        94,
        97,
        101,
        103,
        104,
        132,
        141,
        148,
        154,
        156,
        168,
        169,
        173,
        174,
        182,
        184,
        188,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        226,
        228,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 168,
      gender: '♂',
      stats: {
        hp: 314,
        attack: 251,
        defense: 209,
        spclAtk: 189,
        spclDef: 189,
        speed: 149
      },
      friendship: 128,
      learnableMoves: [
        40,
        49,
        50,
        60,
        63,
        76,
        81,
        91,
        92,
        94,
        97,
        101,
        103,
        104,
        132,
        141,
        148,
        154,
        156,
        168,
        169,
        173,
        174,
        182,
        184,
        188,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        226,
        228,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 169,
      gender: '♀',
      stats: {
        hp: 323,
        attack: 228,
        defense: 208,
        spclAtk: 188,
        spclDef: 208,
        speed: 306
      },
      friendship: 128,
      learnableMoves: [
        13,
        16,
        17,
        18,
        19,
        36,
        38,
        44,
        48,
        63,
        72,
        92,
        98,
        99,
        102,
        103,
        104,
        109,
        114,
        117,
        129,
        141,
        156,
        164,
        168,
        173,
        174,
        182,
        185,
        197,
        202,
        203,
        207,
        211,
        212,
        213,
        214,
        216,
        218,
        228,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 170,
      gender: '♂',
      stats: {
        hp: 331,
        attack: 152,
        defense: 154,
        spclAtk: 188,
        spclDef: 188,
        speed: 212
      },
      friendship: 128,
      learnableMoves: [
        36,
        48,
        55,
        56,
        57,
        58,
        85,
        86,
        87,
        92,
        103,
        104,
        109,
        127,
        145,
        148,
        156,
        173,
        174,
        175,
        182,
        192,
        203,
        207,
        209,
        213,
        214,
        216,
        218,
        237,
        240,
        250
      ]
    },
    {
      level: 100,
      species: 171,
      gender: '♀',
      stats: {
        hp: 409,
        attack: 172,
        defense: 172,
        spclAtk: 206,
        spclDef: 206,
        speed: 188
      },
      friendship: 128,
      learnableMoves: [
        36,
        48,
        55,
        56,
        57,
        58,
        63,
        85,
        86,
        87,
        92,
        103,
        104,
        109,
        127,
        145,
        148,
        156,
        173,
        174,
        175,
        182,
        192,
        203,
        207,
        209,
        213,
        214,
        216,
        218,
        237,
        240,
        250
      ]
    },
    {
      level: 100,
      species: 172,
      gender: '♂',
      stats: {
        hp: 234,
        attack: 169,
        defense: 119,
        spclAtk: 163,
        spclDef: 163,
        speed: 211
      },
      friendship: 128,
      learnableMoves: [
        3,
        29,
        39,
        84,
        85,
        86,
        87,
        92,
        104,
        111,
        117,
        129,
        148,
        156,
        173,
        174,
        179,
        182,
        186,
        189,
        192,
        197,
        203,
        204,
        205,
        207,
        213,
        214,
        216,
        217,
        218,
        227,
        231,
        237,
        240
      ]
    },
    {
      level: 100,
      species: 173,
      gender: '♂',
      stats: {
        hp: 294,
        attack: 139,
        defense: 145,
        spclAtk: 183,
        spclDef: 203,
        speed: 121
      },
      friendship: 128,
      learnableMoves: [
        1,
        29,
        47,
        53,
        76,
        92,
        94,
        102,
        104,
        111,
        118,
        126,
        133,
        138,
        148,
        150,
        156,
        171,
        173,
        174,
        182,
        186,
        187,
        189,
        192,
        196,
        197,
        203,
        204,
        205,
        207,
        213,
        214,
        216,
        217,
        218,
        227,
        231,
        237,
        240,
        241,
        244,
        247
      ]
    },
    {
      level: 100,
      species: 174,
      gender: '♂',
      stats: {
        hp: 374,
        attack: 149,
        defense: 119,
        spclAtk: 173,
        spclDef: 133,
        speed: 121
      },
      friendship: 128,
      learnableMoves: [
        1,
        29,
        47,
        53,
        76,
        92,
        94,
        104,
        111,
        126,
        138,
        148,
        156,
        171,
        173,
        174,
        182,
        185,
        186,
        189,
        192,
        195,
        196,
        197,
        203,
        204,
        205,
        207,
        213,
        214,
        216,
        217,
        218,
        237,
        240,
        241,
        244,
        247
      ]
    },
    {
      level: 100,
      species: 175,
      gender: '♂',
      stats: {
        hp: 264,
        attack: 129,
        defense: 219,
        spclAtk: 173,
        spclDef: 223,
        speed: 131
      },
      friendship: 128,
      learnableMoves: [
        29,
        38,
        45,
        53,
        64,
        76,
        92,
        94,
        104,
        111,
        118,
        119,
        126,
        129,
        138,
        148,
        156,
        173,
        174,
        182,
        186,
        189,
        192,
        193,
        197,
        203,
        204,
        205,
        207,
        213,
        214,
        216,
        217,
        218,
        219,
        227,
        237,
        240,
        241,
        244,
        247,
        248,
        249
      ]
    },
    {
      level: 100,
      species: 176,
      gender: '♂',
      stats: {
        hp: 277,
        attack: 144,
        defense: 232,
        spclAtk: 222,
        spclDef: 272,
        speed: 144
      },
      friendship: 128,
      learnableMoves: [
        19,
        29,
        38,
        45,
        53,
        63,
        64,
        76,
        92,
        94,
        104,
        111,
        118,
        119,
        126,
        129,
        138,
        148,
        156,
        173,
        174,
        182,
        186,
        189,
        192,
        193,
        197,
        203,
        204,
        205,
        207,
        211,
        213,
        214,
        216,
        217,
        218,
        219,
        227,
        237,
        240,
        241,
        244,
        247,
        248,
        249
      ]
    },
    {
      level: 100,
      species: 177,
      gender: '♂',
      stats: {
        hp: 261,
        attack: 176,
        defense: 168,
        spclAtk: 216,
        spclDef: 166,
        speed: 218
      },
      friendship: 128,
      learnableMoves: [
        43,
        64,
        65,
        76,
        92,
        94,
        98,
        100,
        101,
        104,
        109,
        114,
        129,
        138,
        148,
        156,
        168,
        171,
        173,
        174,
        182,
        185,
        197,
        202,
        203,
        207,
        211,
        213,
        214,
        216,
        218,
        237,
        241,
        244,
        248
      ]
    },
    {
      level: 100,
      species: 178,
      gender: '♀',
      stats: {
        hp: 289,
        attack: 206,
        defense: 196,
        spclAtk: 244,
        spclDef: 194,
        speed: 244
      },
      friendship: 128,
      learnableMoves: [
        19,
        43,
        63,
        64,
        65,
        76,
        92,
        94,
        98,
        100,
        101,
        104,
        109,
        114,
        129,
        138,
        148,
        156,
        168,
        171,
        173,
        174,
        182,
        185,
        197,
        202,
        203,
        207,
        211,
        213,
        214,
        216,
        218,
        237,
        241,
        244,
        248
      ]
    },
    {
      level: 100,
      species: 179,
      gender: '♂',
      stats: {
        hp: 298,
        attack: 163,
        defense: 165,
        spclAtk: 213,
        spclDef: 173,
        speed: 153
      },
      friendship: 128,
      learnableMoves: [
        29,
        33,
        34,
        36,
        45,
        84,
        85,
        86,
        87,
        92,
        103,
        104,
        111,
        113,
        115,
        129,
        148,
        156,
        173,
        174,
        178,
        182,
        192,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        231,
        237,
        240
      ]
    },
    {
      level: 100,
      species: 180,
      gender: '♂',
      stats: {
        hp: 314,
        attack: 181,
        defense: 179,
        spclAtk: 229,
        spclDef: 189,
        speed: 159
      },
      friendship: 128,
      learnableMoves: [
        7,
        9,
        29,
        33,
        34,
        36,
        45,
        70,
        84,
        85,
        86,
        87,
        92,
        103,
        104,
        111,
        113,
        115,
        129,
        148,
        156,
        173,
        174,
        178,
        182,
        192,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        223,
        231,
        237,
        240,
        249
      ]
    },
    {
      level: 100,
      species: 181,
      gender: '♀',
      stats: {
        hp: 335,
        attack: 202,
        defense: 202,
        spclAtk: 280,
        spclDef: 230,
        speed: 160
      },
      friendship: 128,
      learnableMoves: [
        7,
        9,
        29,
        33,
        34,
        36,
        45,
        63,
        70,
        84,
        85,
        86,
        87,
        92,
        103,
        104,
        111,
        113,
        115,
        129,
        148,
        156,
        173,
        174,
        178,
        182,
        192,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        223,
        231,
        237,
        240,
        249
      ]
    },
    {
      level: 100,
      species: 182,
      gender: '♀',
      stats: {
        hp: 309,
        attack: 216,
        defense: 226,
        spclAtk: 234,
        spclDef: 254,
        speed: 154
      },
      friendship: 128,
      learnableMoves: [
        14,
        15,
        36,
        38,
        51,
        63,
        71,
        72,
        75,
        76,
        77,
        78,
        79,
        80,
        92,
        99,
        102,
        104,
        115,
        117,
        148,
        156,
        164,
        173,
        174,
        175,
        182,
        188,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        230,
        235,
        236,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 183,
      gender: '♂',
      stats: {
        hp: 334,
        attack: 129,
        defense: 189,
        spclAtk: 133,
        spclDef: 193,
        speed: 171
      },
      friendship: 128,
      learnableMoves: [
        8,
        29,
        33,
        38,
        39,
        48,
        55,
        57,
        58,
        59,
        61,
        92,
        104,
        111,
        113,
        127,
        129,
        133,
        156,
        173,
        174,
        182,
        187,
        189,
        193,
        195,
        196,
        203,
        205,
        207,
        213,
        214,
        216,
        217,
        218,
        223,
        231,
        237,
        240,
        248,
        250
      ]
    },
    {
      level: 100,
      species: 184,
      gender: '♀',
      stats: {
        hp: 367,
        attack: 164,
        defense: 222,
        spclAtk: 162,
        spclDef: 222,
        speed: 164
      },
      friendship: 128,
      learnableMoves: [
        8,
        29,
        33,
        38,
        39,
        48,
        55,
        57,
        58,
        59,
        61,
        63,
        70,
        92,
        104,
        111,
        113,
        127,
        129,
        133,
        156,
        173,
        174,
        182,
        187,
        189,
        193,
        195,
        196,
        203,
        205,
        207,
        213,
        214,
        216,
        217,
        218,
        223,
        231,
        237,
        240,
        248,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 185,
      gender: '♀',
      stats: {
        hp: 307,
        attack: 264,
        defense: 292,
        spclAtk: 122,
        spclDef: 192,
        speed: 124
      },
      friendship: 128,
      learnableMoves: [
        7,
        8,
        9,
        21,
        29,
        67,
        70,
        88,
        89,
        91,
        92,
        102,
        104,
        111,
        120,
        156,
        157,
        168,
        173,
        174,
        175,
        182,
        185,
        189,
        201,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        223,
        237,
        241,
        244,
        249
      ]
    },
    {
      level: 100,
      species: 186,
      gender: '♀',
      stats: {
        hp: 335,
        attack: 202,
        defense: 202,
        spclAtk: 230,
        spclDef: 250,
        speed: 190
      },
      friendship: 128,
      learnableMoves: [
        3,
        5,
        8,
        25,
        29,
        34,
        36,
        38,
        54,
        55,
        56,
        57,
        58,
        59,
        61,
        63,
        66,
        68,
        69,
        70,
        89,
        90,
        92,
        94,
        95,
        99,
        102,
        104,
        111,
        114,
        117,
        118,
        127,
        130,
        133,
        145,
        149,
        150,
        156,
        164,
        168,
        170,
        173,
        174,
        182,
        187,
        189,
        195,
        196,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        237,
        240,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 187,
      gender: '♂',
      stats: {
        hp: 264,
        attack: 159,
        defense: 169,
        spclAtk: 163,
        spclDef: 203,
        speed: 191
      },
      friendship: 128,
      learnableMoves: [
        6,
        29,
        33,
        38,
        39,
        45,
        72,
        73,
        76,
        77,
        78,
        79,
        92,
        93,
        104,
        111,
        115,
        133,
        148,
        150,
        156,
        173,
        174,
        178,
        182,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        227,
        230,
        235,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 188,
      gender: '♂',
      stats: {
        hp: 291,
        attack: 166,
        defense: 178,
        spclAtk: 166,
        spclDef: 206,
        speed: 238
      },
      friendship: 128,
      learnableMoves: [
        6,
        29,
        33,
        38,
        39,
        45,
        72,
        73,
        76,
        77,
        78,
        79,
        92,
        93,
        104,
        111,
        115,
        133,
        148,
        150,
        156,
        173,
        174,
        178,
        182,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        227,
        230,
        235,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 189,
      gender: '♀',
      stats: {
        hp: 313,
        attack: 170,
        defense: 198,
        spclAtk: 168,
        spclDef: 228,
        speed: 280
      },
      friendship: 128,
      learnableMoves: [
        6,
        29,
        33,
        38,
        39,
        45,
        63,
        72,
        73,
        76,
        77,
        78,
        79,
        92,
        93,
        104,
        111,
        115,
        133,
        148,
        150,
        156,
        173,
        174,
        178,
        182,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        227,
        230,
        235,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 190,
      gender: '♂',
      stats: {
        hp: 284,
        attack: 211,
        defense: 179,
        spclAtk: 149,
        spclDef: 179,
        speed: 239
      },
      friendship: 128,
      learnableMoves: [
        3,
        7,
        8,
        9,
        10,
        15,
        21,
        28,
        29,
        39,
        68,
        70,
        85,
        87,
        92,
        97,
        103,
        104,
        111,
        129,
        138,
        154,
        156,
        168,
        171,
        173,
        174,
        180,
        182,
        189,
        192,
        197,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        223,
        226,
        228,
        231,
        237,
        241,
        247,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 191,
      gender: '♂',
      stats: {
        hp: 254,
        attack: 149,
        defense: 149,
        spclAtk: 153,
        spclDef: 153,
        speed: 151
      },
      friendship: 128,
      learnableMoves: [
        15,
        71,
        72,
        74,
        76,
        92,
        104,
        148,
        156,
        173,
        174,
        182,
        188,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        230,
        235,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 192,
      gender: '♀',
      stats: {
        hp: 317,
        attack: 214,
        defense: 172,
        spclAtk: 272,
        spclDef: 232,
        speed: 124
      },
      friendship: 128,
      learnableMoves: [
        1,
        15,
        63,
        71,
        72,
        74,
        75,
        76,
        80,
        92,
        104,
        148,
        156,
        173,
        174,
        182,
        188,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        230,
        235,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 193,
      gender: '♂',
      stats: {
        hp: 304,
        attack: 201,
        defense: 159,
        spclAtk: 219,
        spclDef: 159,
        speed: 259
      },
      friendship: 128,
      learnableMoves: [
        17,
        18,
        29,
        33,
        48,
        49,
        76,
        92,
        98,
        103,
        104,
        129,
        141,
        148,
        156,
        168,
        173,
        174,
        179,
        182,
        193,
        197,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 194,
      gender: '♂',
      stats: {
        hp: 304,
        attack: 179,
        defense: 179,
        spclAtk: 143,
        spclDef: 143,
        speed: 121
      },
      friendship: 128,
      learnableMoves: [
        8,
        21,
        29,
        34,
        39,
        54,
        55,
        57,
        58,
        89,
        91,
        92,
        104,
        111,
        114,
        133,
        148,
        156,
        173,
        174,
        182,
        188,
        189,
        201,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        219,
        223,
        231,
        237,
        240,
        246,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 195,
      gender: '♀',
      stats: {
        hp: 357,
        attack: 234,
        defense: 232,
        spclAtk: 192,
        spclDef: 192,
        speed: 134
      },
      friendship: 128,
      learnableMoves: [
        8,
        21,
        29,
        34,
        39,
        54,
        55,
        57,
        58,
        63,
        70,
        89,
        91,
        92,
        104,
        111,
        114,
        133,
        148,
        156,
        173,
        174,
        182,
        188,
        189,
        201,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        219,
        223,
        231,
        237,
        240,
        246,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 196,
      gender: '♂',
      stats: {
        hp: 283,
        attack: 178,
        defense: 168,
        spclAtk: 308,
        spclDef: 238,
        speed: 266
      },
      friendship: 128,
      learnableMoves: [
        15,
        28,
        29,
        33,
        34,
        36,
        38,
        39,
        44,
        45,
        60,
        63,
        92,
        93,
        94,
        98,
        99,
        102,
        104,
        115,
        116,
        117,
        129,
        130,
        138,
        148,
        156,
        164,
        171,
        173,
        174,
        175,
        182,
        189,
        192,
        197,
        203,
        204,
        207,
        213,
        214,
        216,
        218,
        226,
        231,
        234,
        237,
        240,
        241,
        244,
        247
      ]
    },
    {
      level: 100,
      species: 197,
      gender: '♂',
      stats: {
        hp: 343,
        attack: 178,
        defense: 268,
        spclAtk: 168,
        spclDef: 308,
        speed: 176
      },
      friendship: 128,
      learnableMoves: [
        15,
        28,
        29,
        33,
        34,
        36,
        38,
        39,
        44,
        45,
        63,
        92,
        94,
        98,
        99,
        102,
        103,
        104,
        109,
        115,
        116,
        117,
        129,
        130,
        138,
        148,
        156,
        164,
        171,
        173,
        174,
        175,
        182,
        185,
        189,
        192,
        197,
        203,
        204,
        207,
        212,
        213,
        214,
        216,
        218,
        226,
        228,
        231,
        236,
        237,
        240,
        241,
        244,
        247
      ]
    },
    {
      level: 100,
      species: 198,
      gender: '♀',
      stats: {
        hp: 287,
        attack: 234,
        defense: 146,
        spclAtk: 232,
        spclDef: 146,
        speed: 246
      },
      friendship: 128,
      learnableMoves: [
        17,
        18,
        19,
        64,
        65,
        92,
        98,
        101,
        104,
        114,
        119,
        129,
        138,
        143,
        156,
        168,
        171,
        173,
        174,
        182,
        185,
        189,
        196,
        197,
        203,
        207,
        211,
        212,
        213,
        214,
        216,
        218,
        228,
        237,
        241,
        244,
        247
      ]
    },
    {
      level: 100,
      species: 199,
      gender: '♀',
      stats: {
        hp: 349,
        attack: 206,
        defense: 216,
        spclAtk: 254,
        spclDef: 274,
        speed: 114
      },
      friendship: 128,
      learnableMoves: [
        6,
        8,
        23,
        29,
        33,
        34,
        36,
        38,
        45,
        50,
        53,
        55,
        57,
        58,
        59,
        61,
        63,
        70,
        86,
        89,
        90,
        91,
        92,
        93,
        94,
        99,
        100,
        102,
        104,
        115,
        117,
        126,
        129,
        130,
        133,
        138,
        148,
        149,
        156,
        161,
        164,
        171,
        173,
        174,
        182,
        187,
        189,
        192,
        196,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        219,
        223,
        231,
        237,
        240,
        241,
        244,
        247,
        248,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 200,
      gender: '♀',
      stats: {
        hp: 287,
        attack: 184,
        defense: 182,
        spclAtk: 232,
        spclDef: 232,
        speed: 234
      },
      friendship: 128,
      learnableMoves: [
        29,
        45,
        60,
        85,
        87,
        92,
        94,
        103,
        104,
        109,
        111,
        129,
        138,
        148,
        149,
        156,
        168,
        171,
        173,
        174,
        180,
        182,
        192,
        194,
        195,
        203,
        207,
        212,
        213,
        214,
        216,
        218,
        220,
        237,
        240,
        241,
        244,
        247
      ]
    },
    {
      level: 100,
      species: 201,
      gender: '',
      stats: {
        hp: 275,
        attack: 230,
        defense: 180,
        spclAtk: 230,
        spclDef: 182,
        speed: 180
      },
      friendship: 128,
      learnableMoves: [
        237
      ]
    },
    {
      level: 100,
      species: 202,
      gender: '♀',
      stats: {
        hp: 547,
        attack: 130,
        defense: 178,
        spclAtk: 128,
        spclDef: 178,
        speed: 130
      },
      friendship: 128,
      learnableMoves: [
        68,
        194,
        219,
        243
      ]
    },
    {
      level: 100,
      species: 203,
      gender: '♀',
      stats: {
        hp: 299,
        attack: 216,
        defense: 186,
        spclAtk: 234,
        spclDef: 184,
        speed: 224
      },
      friendship: 128,
      learnableMoves: [
        23,
        29,
        33,
        36,
        45,
        60,
        70,
        85,
        87,
        89,
        92,
        93,
        94,
        97,
        104,
        129,
        133,
        138,
        156,
        168,
        171,
        173,
        174,
        182,
        189,
        192,
        193,
        203,
        207,
        213,
        214,
        216,
        218,
        226,
        231,
        237,
        241,
        242,
        244,
        247,
        248,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 204,
      gender: '♂',
      stats: {
        hp: 288,
        attack: 213,
        defense: 265,
        spclAtk: 153,
        spclDef: 153,
        speed: 113
      },
      friendship: 128,
      learnableMoves: [
        29,
        33,
        36,
        38,
        42,
        70,
        76,
        92,
        104,
        111,
        115,
        117,
        120,
        129,
        153,
        156,
        173,
        174,
        175,
        182,
        191,
        202,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        229,
        230,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 205,
      gender: '♀',
      stats: {
        hp: 309,
        attack: 236,
        defense: 336,
        spclAtk: 174,
        spclDef: 174,
        speed: 134
      },
      friendship: 128,
      learnableMoves: [
        29,
        33,
        36,
        38,
        42,
        63,
        70,
        76,
        92,
        104,
        111,
        115,
        117,
        120,
        129,
        153,
        156,
        173,
        174,
        175,
        182,
        191,
        201,
        202,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        229,
        230,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 206,
      gender: '♀',
      stats: {
        hp: 367,
        attack: 204,
        defense: 202,
        spclAtk: 192,
        spclDef: 192,
        speed: 154
      },
      friendship: 128,
      learnableMoves: [
        29,
        36,
        44,
        53,
        70,
        76,
        85,
        87,
        91,
        92,
        99,
        103,
        104,
        111,
        117,
        137,
        138,
        156,
        157,
        168,
        171,
        173,
        174,
        180,
        182,
        189,
        192,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        228,
        231,
        237,
        240,
        241,
        244,
        246,
        249
      ]
    },
    {
      level: 100,
      species: 207,
      gender: '♀',
      stats: {
        hp: 297,
        attack: 214,
        defense: 272,
        spclAtk: 132,
        spclDef: 192,
        speed: 234
      },
      friendship: 128,
      learnableMoves: [
        12,
        13,
        15,
        17,
        28,
        29,
        40,
        68,
        70,
        89,
        92,
        98,
        103,
        104,
        106,
        129,
        156,
        163,
        168,
        173,
        174,
        182,
        185,
        188,
        197,
        201,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        231,
        232,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 208,
      gender: '♀',
      stats: {
        hp: 303,
        attack: 218,
        defense: 448,
        spclAtk: 158,
        spclDef: 178,
        speed: 106
      },
      friendship: 128,
      learnableMoves: [
        15,
        20,
        21,
        29,
        33,
        34,
        36,
        38,
        46,
        63,
        70,
        88,
        89,
        90,
        91,
        92,
        99,
        102,
        103,
        104,
        106,
        111,
        117,
        120,
        130,
        153,
        156,
        157,
        164,
        173,
        174,
        175,
        182,
        189,
        201,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        225,
        231,
        237,
        241,
        242,
        249
      ]
    },
    {
      level: 100,
      species: 209,
      gender: '♀',
      stats: {
        hp: 308,
        attack: 243,
        defense: 185,
        spclAtk: 163,
        spclDef: 163,
        speed: 143
      },
      friendship: 128,
      learnableMoves: [
        7,
        8,
        9,
        29,
        33,
        36,
        39,
        43,
        44,
        46,
        70,
        85,
        87,
        92,
        99,
        104,
        111,
        115,
        118,
        122,
        156,
        168,
        173,
        174,
        182,
        184,
        185,
        188,
        189,
        192,
        197,
        203,
        204,
        207,
        213,
        214,
        215,
        216,
        217,
        218,
        223,
        237,
        240,
        241,
        242,
        247,
        249
      ]
    },
    {
      level: 100,
      species: 210,
      gender: '♀',
      stats: {
        hp: 343,
        attack: 300,
        defense: 208,
        spclAtk: 178,
        spclDef: 178,
        speed: 150
      },
      friendship: 128,
      learnableMoves: [
        7,
        8,
        9,
        29,
        33,
        36,
        39,
        43,
        44,
        46,
        63,
        70,
        85,
        87,
        92,
        99,
        104,
        111,
        115,
        118,
        122,
        156,
        168,
        173,
        174,
        182,
        184,
        185,
        188,
        189,
        192,
        197,
        203,
        204,
        207,
        213,
        214,
        215,
        216,
        217,
        218,
        223,
        237,
        240,
        241,
        242,
        247,
        249
      ]
    },
    {
      level: 100,
      species: 211,
      gender: '♀',
      stats: {
        hp: 297,
        attack: 254,
        defense: 212,
        spclAtk: 172,
        spclDef: 172,
        speed: 234
      },
      friendship: 128,
      learnableMoves: [
        29,
        33,
        36,
        40,
        42,
        48,
        55,
        56,
        57,
        58,
        59,
        61,
        92,
        104,
        106,
        107,
        111,
        114,
        127,
        129,
        156,
        173,
        174,
        175,
        182,
        188,
        191,
        196,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        237,
        240,
        250
      ]
    },
    {
      level: 100,
      species: 212,
      gender: '♀',
      stats: {
        hp: 295,
        attack: 312,
        defense: 252,
        spclAtk: 160,
        spclDef: 210,
        speed: 180
      },
      friendship: 128,
      learnableMoves: [
        13,
        14,
        15,
        17,
        29,
        36,
        38,
        43,
        63,
        68,
        70,
        92,
        97,
        98,
        99,
        102,
        104,
        113,
        116,
        117,
        129,
        130,
        156,
        163,
        164,
        168,
        173,
        174,
        179,
        182,
        197,
        201,
        203,
        206,
        207,
        210,
        211,
        213,
        214,
        216,
        218,
        219,
        226,
        228,
        232,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 213,
      gender: '♀',
      stats: {
        hp: 207,
        attack: 84,
        defense: 522,
        spclAtk: 82,
        spclDef: 522,
        speed: 74
      },
      friendship: 128,
      learnableMoves: [
        29,
        35,
        70,
        89,
        91,
        92,
        104,
        110,
        111,
        117,
        132,
        148,
        156,
        173,
        174,
        182,
        188,
        189,
        201,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        219,
        227,
        230,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 214,
      gender: '♀',
      stats: {
        hp: 313,
        attack: 298,
        defense: 198,
        spclAtk: 128,
        spclDef: 238,
        speed: 216
      },
      friendship: 128,
      learnableMoves: [
        15,
        29,
        30,
        31,
        33,
        36,
        43,
        68,
        70,
        89,
        92,
        104,
        106,
        117,
        156,
        168,
        173,
        174,
        175,
        179,
        182,
        197,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        224,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 215,
      gender: '♀',
      stats: {
        hp: 277,
        attack: 254,
        defense: 172,
        spclAtk: 132,
        spclDef: 212,
        speed: 294
      },
      friendship: 128,
      learnableMoves: [
        8,
        10,
        15,
        29,
        43,
        44,
        57,
        58,
        59,
        68,
        70,
        91,
        92,
        97,
        98,
        103,
        104,
        111,
        115,
        129,
        138,
        154,
        156,
        163,
        168,
        171,
        173,
        174,
        180,
        182,
        185,
        189,
        193,
        196,
        197,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        223,
        231,
        232,
        237,
        240,
        244,
        247,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 216,
      gender: '♂',
      stats: {
        hp: 301,
        attack: 236,
        defense: 178,
        spclAtk: 176,
        spclDef: 176,
        speed: 158
      },
      friendship: 128,
      learnableMoves: [
        7,
        8,
        9,
        10,
        15,
        29,
        36,
        37,
        43,
        46,
        68,
        69,
        70,
        89,
        91,
        92,
        104,
        111,
        116,
        122,
        129,
        154,
        156,
        163,
        168,
        173,
        174,
        182,
        185,
        189,
        192,
        203,
        205,
        207,
        210,
        213,
        214,
        216,
        218,
        223,
        232,
        237,
        241,
        242,
        249
      ]
    },
    {
      level: 100,
      species: 217,
      gender: '♀',
      stats: {
        hp: 335,
        attack: 312,
        defense: 202,
        spclAtk: 200,
        spclDef: 200,
        speed: 160
      },
      friendship: 128,
      learnableMoves: [
        7,
        8,
        9,
        10,
        15,
        29,
        36,
        37,
        43,
        46,
        63,
        68,
        69,
        70,
        89,
        91,
        92,
        104,
        111,
        116,
        122,
        129,
        154,
        156,
        163,
        168,
        173,
        174,
        182,
        185,
        189,
        192,
        203,
        205,
        207,
        210,
        213,
        214,
        216,
        218,
        223,
        232,
        237,
        241,
        242,
        249
      ]
    },
    {
      level: 100,
      species: 218,
      gender: '♂',
      stats: {
        hp: 274,
        attack: 169,
        defense: 169,
        spclAtk: 233,
        spclDef: 173,
        speed: 131
      },
      friendship: 128,
      learnableMoves: [
        34,
        52,
        53,
        88,
        92,
        104,
        106,
        111,
        123,
        126,
        133,
        151,
        156,
        157,
        173,
        174,
        182,
        189,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 219,
      gender: '♀',
      stats: {
        hp: 267,
        attack: 164,
        defense: 302,
        spclAtk: 222,
        spclDef: 222,
        speed: 124
      },
      friendship: 128,
      learnableMoves: [
        34,
        52,
        53,
        63,
        70,
        88,
        89,
        92,
        104,
        106,
        111,
        123,
        126,
        133,
        151,
        156,
        157,
        173,
        174,
        182,
        189,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 220,
      gender: '♂',
      stats: {
        hp: 294,
        attack: 189,
        defense: 169,
        spclAtk: 153,
        spclDef: 153,
        speed: 191
      },
      friendship: 128,
      learnableMoves: [
        29,
        33,
        34,
        36,
        44,
        46,
        54,
        58,
        59,
        70,
        89,
        92,
        104,
        111,
        133,
        156,
        157,
        173,
        174,
        181,
        182,
        189,
        196,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        237,
        240,
        246,
        249
      ]
    },
    {
      level: 100,
      species: 221,
      gender: '♀',
      stats: {
        hp: 363,
        attack: 260,
        defense: 218,
        spclAtk: 178,
        spclDef: 178,
        speed: 160
      },
      friendship: 128,
      learnableMoves: [
        29,
        30,
        31,
        33,
        34,
        36,
        44,
        46,
        54,
        58,
        59,
        63,
        70,
        89,
        92,
        104,
        111,
        133,
        156,
        157,
        173,
        174,
        181,
        182,
        189,
        196,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        237,
        240,
        246,
        249
      ]
    },
    {
      level: 100,
      species: 222,
      gender: '♀',
      stats: {
        hp: 284,
        attack: 181,
        defense: 239,
        spclAtk: 199,
        spclDef: 239,
        speed: 139
      },
      friendship: 128,
      learnableMoves: [
        29,
        33,
        54,
        57,
        58,
        61,
        70,
        89,
        92,
        94,
        103,
        104,
        105,
        106,
        111,
        131,
        133,
        145,
        156,
        157,
        173,
        174,
        182,
        189,
        201,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        219,
        237,
        240,
        241,
        243,
        246,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 223,
      gender: '♂',
      stats: {
        hp: 258,
        attack: 213,
        defense: 155,
        spclAtk: 213,
        spclDef: 153,
        speed: 213
      },
      friendship: 128,
      learnableMoves: [
        48,
        53,
        55,
        57,
        58,
        60,
        61,
        62,
        63,
        92,
        103,
        104,
        111,
        114,
        116,
        129,
        156,
        168,
        173,
        174,
        182,
        189,
        190,
        199,
        203,
        207,
        213,
        214,
        216,
        218,
        237,
        240,
        250
      ]
    },
    {
      level: 100,
      species: 224,
      gender: '♀',
      stats: {
        hp: 309,
        attack: 266,
        defense: 206,
        spclAtk: 264,
        spclDef: 204,
        speed: 144
      },
      friendship: 128,
      learnableMoves: [
        48,
        53,
        55,
        57,
        58,
        60,
        61,
        62,
        63,
        92,
        103,
        104,
        111,
        114,
        116,
        129,
        132,
        156,
        168,
        173,
        174,
        182,
        189,
        190,
        199,
        203,
        207,
        213,
        214,
        216,
        218,
        237,
        240,
        250
      ]
    },
    {
      level: 100,
      species: 225,
      gender: '♂',
      stats: {
        hp: 271,
        attack: 186,
        defense: 168,
        spclAtk: 206,
        spclDef: 166,
        speed: 228
      },
      friendship: 128,
      learnableMoves: [
        19,
        29,
        58,
        59,
        62,
        92,
        98,
        104,
        129,
        150,
        156,
        168,
        173,
        174,
        182,
        189,
        196,
        197,
        203,
        207,
        213,
        214,
        216,
        217,
        218,
        229,
        237,
        240,
        248
      ]
    },
    {
      level: 100,
      species: 226,
      gender: '♀',
      stats: {
        hp: 289,
        attack: 136,
        defense: 196,
        spclAtk: 214,
        spclDef: 334,
        speed: 194
      },
      friendship: 128,
      learnableMoves: [
        17,
        21,
        29,
        33,
        36,
        48,
        56,
        57,
        58,
        59,
        61,
        92,
        97,
        104,
        109,
        114,
        127,
        129,
        145,
        156,
        173,
        174,
        182,
        189,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        237,
        239,
        240,
        250
      ]
    },
    {
      level: 100,
      species: 227,
      gender: '♀',
      stats: {
        hp: 289,
        attack: 216,
        defense: 336,
        spclAtk: 134,
        spclDef: 194,
        speed: 194
      },
      friendship: 128,
      learnableMoves: [
        15,
        18,
        19,
        28,
        31,
        43,
        64,
        65,
        92,
        97,
        104,
        129,
        143,
        156,
        168,
        173,
        174,
        182,
        189,
        197,
        201,
        203,
        207,
        211,
        213,
        214,
        216,
        218,
        228,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 228,
      gender: '♂',
      stats: {
        hp: 271,
        attack: 196,
        defense: 138,
        spclAtk: 236,
        spclDef: 176,
        speed: 208
      },
      friendship: 128,
      learnableMoves: [
        29,
        43,
        44,
        46,
        52,
        53,
        68,
        76,
        83,
        92,
        99,
        104,
        123,
        126,
        129,
        138,
        156,
        168,
        171,
        173,
        174,
        179,
        180,
        182,
        185,
        188,
        189,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        228,
        231,
        237,
        241,
        242,
        247,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 229,
      gender: '♀',
      stats: {
        hp: 305,
        attack: 232,
        defense: 152,
        spclAtk: 270,
        spclDef: 210,
        speed: 240
      },
      friendship: 128,
      learnableMoves: [
        29,
        43,
        44,
        46,
        52,
        53,
        63,
        68,
        70,
        76,
        83,
        92,
        99,
        104,
        123,
        126,
        129,
        138,
        156,
        168,
        171,
        173,
        174,
        179,
        180,
        182,
        185,
        188,
        189,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        228,
        231,
        237,
        241,
        242,
        247,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 230,
      gender: '♀',
      stats: {
        hp: 303,
        attack: 238,
        defense: 238,
        spclAtk: 238,
        spclDef: 238,
        speed: 216
      },
      friendship: 140,
      learnableMoves: [
        29,
        36,
        38,
        43,
        50,
        55,
        56,
        57,
        58,
        59,
        61,
        62,
        63,
        82,
        92,
        97,
        99,
        102,
        104,
        108,
        117,
        127,
        129,
        130,
        145,
        150,
        156,
        164,
        173,
        174,
        175,
        182,
        190,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        225,
        237,
        239,
        240,
        250
      ]
    },
    {
      level: 100,
      species: 231,
      gender: '♂',
      stats: {
        hp: 361,
        attack: 196,
        defense: 198,
        spclAtk: 156,
        spclDef: 156,
        speed: 158
      },
      friendship: 128,
      learnableMoves: [
        29,
        33,
        34,
        36,
        38,
        45,
        46,
        55,
        70,
        89,
        92,
        104,
        111,
        116,
        156,
        173,
        174,
        175,
        182,
        189,
        201,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        237,
        241,
        246,
        249
      ]
    },
    {
      level: 100,
      species: 232,
      gender: '♀',
      stats: {
        hp: 335,
        attack: 292,
        defense: 292,
        spclAtk: 170,
        spclDef: 170,
        speed: 150
      },
      friendship: 128,
      learnableMoves: [
        29,
        30,
        31,
        33,
        34,
        36,
        38,
        45,
        46,
        55,
        63,
        70,
        89,
        92,
        104,
        111,
        116,
        156,
        173,
        174,
        175,
        182,
        189,
        201,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        229,
        237,
        241,
        246,
        249
      ]
    },
    {
      level: 100,
      species: 233,
      gender: '',
      stats: {
        hp: 323,
        attack: 208,
        defense: 228,
        spclAtk: 258,
        spclDef: 238,
        speed: 166
      },
      friendship: 150,
      learnableMoves: [
        33,
        36,
        38,
        58,
        59,
        60,
        63,
        85,
        86,
        87,
        92,
        94,
        97,
        99,
        100,
        102,
        104,
        105,
        111,
        115,
        117,
        129,
        130,
        138,
        148,
        149,
        156,
        159,
        160,
        161,
        164,
        168,
        171,
        173,
        174,
        176,
        182,
        192,
        196,
        199,
        203,
        207,
        214,
        216,
        218,
        231,
        237,
        240,
        241,
        244
      ]
    },
    {
      level: 100,
      species: 234,
      gender: '♀',
      stats: {
        hp: 305,
        attack: 246,
        defense: 180,
        spclAtk: 224,
        spclDef: 184,
        speed: 224
      },
      friendship: 128,
      learnableMoves: [
        23,
        28,
        29,
        33,
        36,
        43,
        44,
        46,
        50,
        89,
        92,
        94,
        95,
        104,
        109,
        113,
        115,
        129,
        138,
        148,
        156,
        168,
        171,
        173,
        174,
        180,
        182,
        189,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        237,
        240,
        241,
        244
      ]
    },
    {
      level: 100,
      species: 235,
      gender: '♂',
      stats: {
        hp: 304,
        attack: 129,
        defense: 159,
        spclAtk: 133,
        spclDef: 183,
        speed: 241
      },
      friendship: 128,
      learnableMoves: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99,
        100,
        101,
        103,
        104,
        105,
        106,
        107,
        108,
        109,
        110,
        111,
        112,
        113,
        114,
        115,
        116,
        117,
        120,
        121,
        122,
        123,
        124,
        125,
        126,
        127,
        128,
        129,
        130,
        131,
        132,
        133,
        134,
        135,
        136,
        137,
        138,
        139,
        140,
        141,
        142,
        143,
        145,
        146,
        147,
        148,
        149,
        150,
        151,
        152,
        153,
        154,
        155,
        156,
        157,
        158,
        159,
        160,
        161,
        162,
        163,
        164,
        166,
        167,
        168,
        169,
        170,
        171,
        172,
        173,
        174,
        175,
        176,
        177,
        178,
        179,
        180,
        181,
        182,
        183,
        184,
        185,
        186,
        187,
        188,
        189,
        190,
        191,
        192,
        193,
        194,
        195,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        209,
        210,
        211,
        212,
        213,
        215,
        216,
        217,
        218,
        219,
        220,
        221,
        222,
        223,
        224,
        225,
        227,
        228,
        229,
        230,
        231,
        232,
        233,
        234,
        235,
        236,
        237,
        238,
        239,
        240,
        241,
        242,
        243,
        244,
        245,
        246,
        247,
        248,
        249,
        250,
        251
      ]
    },
    {
      level: 100,
      species: 236,
      gender: '♂',
      stats: {
        hp: 264,
        attack: 159,
        defense: 159,
        spclAtk: 163,
        spclDef: 163,
        speed: 161
      },
      friendship: 128,
      learnableMoves: [
        29,
        33,
        70,
        92,
        104,
        129,
        136,
        156,
        168,
        170,
        173,
        174,
        182,
        183,
        189,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        229,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 237,
      gender: '♂',
      stats: {
        hp: 283,
        attack: 270,
        defense: 268,
        spclAtk: 148,
        spclDef: 298,
        speed: 220
      },
      friendship: 128,
      learnableMoves: [
        27,
        29,
        33,
        68,
        70,
        91,
        92,
        97,
        98,
        104,
        116,
        129,
        136,
        156,
        167,
        168,
        170,
        173,
        174,
        182,
        183,
        189,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        228,
        229,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 238,
      gender: '♀',
      stats: {
        hp: 271,
        attack: 136,
        defense: 108,
        spclAtk: 246,
        spclDef: 206,
        speed: 208
      },
      friendship: 128,
      learnableMoves: [
        1,
        8,
        47,
        58,
        59,
        92,
        93,
        94,
        96,
        104,
        122,
        138,
        156,
        168,
        171,
        173,
        174,
        181,
        182,
        186,
        189,
        195,
        196,
        203,
        207,
        212,
        213,
        214,
        216,
        218,
        223,
        230,
        237,
        240,
        244,
        247
      ]
    },
    {
      level: 100,
      species: 239,
      gender: '♂',
      stats: {
        hp: 264,
        attack: 197,
        defense: 143,
        spclAtk: 199,
        spclDef: 179,
        speed: 259
      },
      friendship: 128,
      learnableMoves: [
        2,
        7,
        8,
        9,
        27,
        29,
        43,
        85,
        87,
        92,
        94,
        96,
        98,
        103,
        104,
        112,
        113,
        129,
        148,
        156,
        168,
        173,
        174,
        182,
        189,
        192,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        237,
        238,
        240
      ]
    },
    {
      level: 100,
      species: 240,
      gender: '♂',
      stats: {
        hp: 264,
        attack: 221,
        defense: 143,
        spclAtk: 209,
        spclDef: 179,
        speed: 235
      },
      friendship: 128,
      learnableMoves: [
        2,
        5,
        7,
        9,
        29,
        43,
        52,
        53,
        92,
        94,
        103,
        104,
        108,
        109,
        112,
        123,
        126,
        156,
        168,
        173,
        174,
        182,
        189,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        231,
        237,
        238,
        241
      ]
    },
    {
      level: 100,
      species: 241,
      gender: '♀',
      stats: {
        hp: 349,
        attack: 216,
        defense: 266,
        spclAtk: 134,
        spclDef: 194,
        speed: 254
      },
      friendship: 128,
      learnableMoves: [
        7,
        8,
        9,
        23,
        29,
        33,
        34,
        45,
        57,
        58,
        59,
        63,
        69,
        70,
        85,
        87,
        89,
        92,
        104,
        111,
        117,
        156,
        173,
        174,
        179,
        182,
        189,
        192,
        196,
        201,
        203,
        205,
        207,
        208,
        213,
        214,
        215,
        216,
        217,
        218,
        223,
        230,
        231,
        237,
        240,
        241,
        244,
        247,
        249
      ]
    },
    {
      level: 100,
      species: 242,
      gender: '♀',
      stats: {
        hp: 663,
        attack: 68,
        defense: 68,
        spclAtk: 198,
        spclDef: 318,
        speed: 156
      },
      friendship: 128,
      learnableMoves: [
        1,
        3,
        5,
        25,
        29,
        34,
        36,
        38,
        39,
        45,
        47,
        53,
        55,
        58,
        59,
        61,
        63,
        66,
        68,
        69,
        70,
        76,
        85,
        86,
        87,
        92,
        94,
        99,
        100,
        102,
        104,
        107,
        111,
        113,
        115,
        117,
        118,
        121,
        126,
        130,
        135,
        138,
        148,
        149,
        156,
        161,
        164,
        173,
        174,
        182,
        189,
        192,
        196,
        201,
        203,
        205,
        207,
        213,
        214,
        215,
        216,
        217,
        218,
        223,
        231,
        237,
        240,
        241,
        244,
        247,
        249
      ]
    },
    {
      level: 100,
      species: 243,
      gender: '',
      stats: {
        hp: 323,
        attack: 208,
        defense: 188,
        spclAtk: 268,
        spclDef: 238,
        speed: 268
      },
      friendship: 128,
      learnableMoves: [
        15,
        29,
        43,
        44,
        46,
        63,
        70,
        84,
        85,
        87,
        91,
        92,
        98,
        104,
        115,
        129,
        148,
        156,
        173,
        174,
        182,
        189,
        192,
        197,
        201,
        203,
        207,
        209,
        214,
        216,
        218,
        231,
        237,
        240,
        241,
        242,
        244,
        249
      ]
    },
    {
      level: 100,
      species: 244,
      gender: '',
      stats: {
        hp: 370,
        attack: 265,
        defense: 205,
        spclAtk: 215,
        spclDef: 185,
        speed: 235
      },
      friendship: 128,
      learnableMoves: [
        15,
        23,
        29,
        43,
        44,
        46,
        52,
        53,
        63,
        70,
        76,
        83,
        91,
        92,
        104,
        126,
        129,
        148,
        156,
        173,
        174,
        182,
        189,
        197,
        201,
        203,
        207,
        214,
        216,
        218,
        231,
        237,
        240,
        241,
        244,
        249
      ]
    },
    {
      level: 100,
      species: 245,
      gender: '',
      stats: {
        hp: 343,
        attack: 188,
        defense: 268,
        spclAtk: 218,
        spclDef: 268,
        speed: 208
      },
      friendship: 128,
      learnableMoves: [
        15,
        16,
        29,
        43,
        44,
        46,
        54,
        55,
        56,
        57,
        58,
        59,
        61,
        62,
        63,
        91,
        92,
        104,
        127,
        129,
        156,
        173,
        174,
        182,
        189,
        196,
        197,
        201,
        203,
        207,
        214,
        216,
        218,
        231,
        237,
        240,
        241,
        243,
        244,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 246,
      gender: '♂',
      stats: {
        hp: 288,
        attack: 211,
        defense: 185,
        spclAtk: 173,
        spclDef: 183,
        speed: 165
      },
      friendship: 128,
      learnableMoves: [
        23,
        29,
        37,
        43,
        44,
        63,
        89,
        91,
        92,
        103,
        104,
        116,
        156,
        157,
        173,
        174,
        182,
        184,
        189,
        197,
        200,
        201,
        203,
        207,
        213,
        214,
        216,
        218,
        228,
        237,
        240,
        241,
        242,
        246
      ]
    },
    {
      level: 100,
      species: 247,
      gender: '♀',
      stats: {
        hp: 307,
        attack: 232,
        defense: 202,
        spclAtk: 192,
        spclDef: 202,
        speed: 166
      },
      friendship: 128,
      learnableMoves: [
        23,
        29,
        37,
        43,
        44,
        63,
        89,
        91,
        92,
        103,
        104,
        116,
        156,
        157,
        173,
        174,
        182,
        184,
        189,
        197,
        200,
        201,
        203,
        207,
        213,
        214,
        216,
        218,
        228,
        237,
        240,
        241,
        242,
        246
      ]
    },
    {
      level: 100,
      species: 248,
      gender: '♀',
      stats: {
        hp: 343,
        attack: 306,
        defense: 258,
        spclAtk: 228,
        spclDef: 238,
        speed: 160
      },
      friendship: 128,
      learnableMoves: [
        7,
        15,
        23,
        29,
        37,
        43,
        44,
        46,
        53,
        57,
        58,
        63,
        70,
        85,
        89,
        91,
        92,
        103,
        104,
        116,
        126,
        156,
        157,
        171,
        173,
        174,
        182,
        184,
        189,
        197,
        200,
        201,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        223,
        225,
        228,
        231,
        237,
        240,
        241,
        242,
        246,
        249
      ]
    }
  ],
  primeR2: [
    {
      level: 100,
      species: 1,
      gender: '♂',
      stats: {
        hp: 271,
        attack: 174,
        defense: 176,
        spclAtk: 206,
        spclDef: 206,
        speed: 168
      },
      friendship: 128,
      learnableMoves: [
        13,
        14,
        15,
        22,
        29,
        33,
        34,
        36,
        38,
        45,
        72,
        73,
        74,
        75,
        76,
        77,
        79,
        80,
        92,
        99,
        102,
        104,
        111,
        113,
        115,
        117,
        130,
        148,
        156,
        164,
        173,
        174,
        182,
        189,
        202,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        219,
        230,
        235,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 2,
      gender: '♂',
      stats: {
        hp: 287,
        attack: 188,
        defense: 188,
        spclAtk: 222,
        spclDef: 222,
        speed: 184
      },
      friendship: 128,
      learnableMoves: [
        13,
        14,
        15,
        22,
        29,
        33,
        34,
        36,
        38,
        45,
        72,
        73,
        74,
        75,
        76,
        77,
        79,
        80,
        92,
        99,
        102,
        104,
        111,
        113,
        115,
        117,
        130,
        148,
        156,
        164,
        173,
        174,
        182,
        189,
        202,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        219,
        230,
        235,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 3,
      gender: '♂',
      stats: {
        hp: 313,
        attack: 212,
        defense: 214,
        spclAtk: 248,
        spclDef: 248,
        speed: 206
      },
      friendship: 128,
      learnableMoves: [
        13,
        14,
        15,
        22,
        29,
        33,
        34,
        36,
        38,
        45,
        46,
        63,
        72,
        73,
        74,
        75,
        76,
        77,
        79,
        80,
        92,
        99,
        102,
        104,
        111,
        113,
        115,
        117,
        130,
        148,
        156,
        164,
        173,
        174,
        182,
        189,
        202,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        219,
        230,
        235,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 4,
      gender: '♂',
      stats: {
        hp: 259,
        attack: 180,
        defense: 164,
        spclAtk: 196,
        spclDef: 176,
        speed: 208
      },
      friendship: 128,
      learnableMoves: [
        5,
        7,
        10,
        14,
        15,
        25,
        29,
        34,
        36,
        38,
        43,
        44,
        45,
        52,
        53,
        66,
        68,
        69,
        70,
        82,
        83,
        91,
        92,
        99,
        102,
        104,
        108,
        111,
        115,
        117,
        126,
        129,
        130,
        156,
        157,
        163,
        164,
        173,
        174,
        182,
        184,
        187,
        189,
        200,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        223,
        225,
        231,
        237,
        241,
        246,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 5,
      gender: '♂',
      stats: {
        hp: 283,
        attack: 192,
        defense: 178,
        spclAtk: 222,
        spclDef: 192,
        speed: 224
      },
      friendship: 128,
      learnableMoves: [
        5,
        7,
        10,
        14,
        15,
        25,
        29,
        34,
        36,
        38,
        43,
        44,
        45,
        52,
        53,
        66,
        68,
        69,
        70,
        82,
        83,
        91,
        92,
        99,
        102,
        104,
        108,
        111,
        115,
        117,
        126,
        129,
        130,
        156,
        157,
        163,
        164,
        173,
        174,
        182,
        184,
        187,
        189,
        200,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        223,
        225,
        231,
        237,
        241,
        246,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 6,
      gender: '♂',
      stats: {
        hp: 309,
        attack: 216,
        defense: 204,
        spclAtk: 266,
        spclDef: 218,
        speed: 246
      },
      friendship: 128,
      learnableMoves: [
        5,
        7,
        10,
        14,
        15,
        17,
        19,
        25,
        29,
        34,
        36,
        38,
        43,
        44,
        45,
        46,
        52,
        53,
        63,
        66,
        68,
        69,
        70,
        82,
        83,
        89,
        90,
        91,
        92,
        99,
        102,
        104,
        108,
        111,
        115,
        117,
        126,
        129,
        130,
        156,
        157,
        163,
        164,
        173,
        174,
        182,
        184,
        187,
        189,
        200,
        201,
        203,
        207,
        210,
        211,
        213,
        214,
        216,
        218,
        223,
        225,
        231,
        237,
        241,
        246,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 7,
      gender: '♂',
      stats: {
        hp: 269,
        attack: 172,
        defense: 208,
        spclAtk: 176,
        spclDef: 204,
        speed: 164
      },
      friendship: 128,
      learnableMoves: [
        5,
        8,
        25,
        29,
        33,
        34,
        36,
        38,
        39,
        44,
        54,
        55,
        56,
        57,
        58,
        59,
        61,
        66,
        68,
        69,
        70,
        91,
        92,
        93,
        99,
        102,
        104,
        110,
        111,
        114,
        115,
        117,
        127,
        130,
        145,
        156,
        164,
        173,
        174,
        175,
        182,
        189,
        193,
        196,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        223,
        229,
        231,
        237,
        240,
        243,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 8,
      gender: '♂',
      stats: {
        hp: 285,
        attack: 190,
        defense: 222,
        spclAtk: 192,
        spclDef: 222,
        speed: 180
      },
      friendship: 128,
      learnableMoves: [
        5,
        8,
        25,
        29,
        33,
        34,
        36,
        38,
        39,
        44,
        54,
        55,
        56,
        57,
        58,
        59,
        61,
        66,
        68,
        69,
        70,
        91,
        92,
        93,
        99,
        102,
        104,
        110,
        111,
        114,
        115,
        117,
        127,
        130,
        145,
        156,
        164,
        173,
        174,
        175,
        182,
        189,
        193,
        196,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        223,
        229,
        231,
        237,
        240,
        243,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 9,
      gender: '♂',
      stats: {
        hp: 311,
        attack: 214,
        defense: 248,
        spclAtk: 218,
        spclDef: 258,
        speed: 202
      },
      friendship: 128,
      learnableMoves: [
        5,
        8,
        25,
        29,
        33,
        34,
        36,
        38,
        39,
        44,
        46,
        54,
        55,
        56,
        57,
        58,
        59,
        61,
        63,
        66,
        68,
        69,
        70,
        89,
        90,
        91,
        92,
        93,
        99,
        102,
        104,
        110,
        111,
        114,
        115,
        117,
        127,
        130,
        145,
        156,
        164,
        173,
        174,
        175,
        182,
        189,
        193,
        196,
        203,
        205,
        207,
        213,
        214,
        216,
        218,
        223,
        229,
        231,
        237,
        240,
        243,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 10,
      gender: '♂',
      stats: {
        hp: 284,
        attack: 149,
        defense: 159,
        spclAtk: 133,
        spclDef: 133,
        speed: 181
      },
      friendship: 128,
      learnableMoves: [
        33,
        81
      ]
    },
    {
      level: 100,
      species: 11,
      gender: '♂',
      stats: {
        hp: 294,
        attack: 129,
        defense: 199,
        spclAtk: 143,
        spclDef: 143,
        speed: 151
      },
      friendship: 128,
      learnableMoves: [
        33,
        81,
        106
      ]
    },
    {
      level: 100,
      species: 12,
      gender: '♂',
      stats: {
        hp: 294,
        attack: 161,
        defense: 169,
        spclAtk: 229,
        spclDef: 229,
        speed: 209
      },
      friendship: 128,
      learnableMoves: [
        13,
        16,
        18,
        33,
        36,
        38,
        48,
        60,
        63,
        72,
        76,
        77,
        78,
        79,
        81,
        92,
        93,
        94,
        99,
        100,
        102,
        104,
        106,
        115,
        117,
        129,
        148,
        149,
        156,
        164,
        171,
        173,
        174,
        182,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        230,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 13,
      gender: '♂',
      stats: {
        hp: 274,
        attack: 159,
        defense: 149,
        spclAtk: 133,
        spclDef: 133,
        speed: 191
      },
      friendship: 128,
      learnableMoves: [
        40,
        81
      ]
    },
    {
      level: 100,
      species: 14,
      gender: '♂',
      stats: {
        hp: 284,
        attack: 139,
        defense: 189,
        spclAtk: 143,
        spclDef: 143,
        speed: 161
      },
      friendship: 128,
      learnableMoves: [
        40,
        81,
        106
      ]
    },
    {
      level: 100,
      species: 15,
      gender: '♂',
      stats: {
        hp: 304,
        attack: 231,
        defense: 149,
        spclAtk: 159,
        spclDef: 229,
        speed: 219
      },
      friendship: 128,
      learnableMoves: [
        14,
        15,
        31,
        36,
        38,
        40,
        41,
        42,
        63,
        72,
        81,
        92,
        97,
        99,
        102,
        104,
        106,
        115,
        116,
        117,
        129,
        130,
        156,
        164,
        173,
        174,
        182,
        188,
        202,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        228,
        230,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 16,
      gender: '♂',
      stats: {
        hp: 268,
        attack: 173,
        defense: 165,
        spclAtk: 153,
        spclDef: 153,
        speed: 195
      },
      friendship: 210,
      learnableMoves: [
        13,
        16,
        17,
        18,
        19,
        28,
        33,
        36,
        38,
        92,
        97,
        98,
        99,
        102,
        104,
        115,
        117,
        119,
        129,
        143,
        156,
        164,
        168,
        173,
        174,
        182,
        185,
        189,
        193,
        197,
        203,
        207,
        211,
        213,
        214,
        216,
        218,
        228,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 17,
      gender: '♂',
      stats: {
        hp: 307,
        attack: 196,
        defense: 188,
        spclAtk: 176,
        spclDef: 176,
        speed: 220
      },
      friendship: 72,
      learnableMoves: [
        13,
        16,
        17,
        18,
        19,
        28,
        33,
        36,
        38,
        92,
        97,
        98,
        99,
        102,
        104,
        115,
        117,
        119,
        129,
        143,
        156,
        164,
        168,
        173,
        174,
        182,
        185,
        189,
        193,
        197,
        203,
        207,
        211,
        213,
        214,
        216,
        218,
        228,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 18,
      gender: '♀',
      stats: {
        hp: 325,
        attack: 216,
        defense: 206,
        spclAtk: 194,
        spclDef: 194,
        speed: 236
      },
      friendship: 110,
      learnableMoves: [
        13,
        16,
        17,
        18,
        19,
        28,
        33,
        36,
        38,
        63,
        92,
        97,
        98,
        99,
        102,
        104,
        115,
        117,
        119,
        129,
        143,
        156,
        164,
        168,
        173,
        174,
        182,
        185,
        189,
        193,
        197,
        203,
        207,
        211,
        213,
        214,
        216,
        218,
        228,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 19,
      gender: '♂',
      stats: {
        hp: 248,
        attack: 195,
        defense: 155,
        spclAtk: 133,
        spclDef: 153,
        speed: 227
      },
      friendship: 128,
      learnableMoves: [
        29,
        33,
        34,
        36,
        38,
        39,
        44,
        55,
        59,
        61,
        68,
        85,
        87,
        91,
        92,
        98,
        99,
        102,
        103,
        104,
        111,
        116,
        117,
        129,
        130,
        154,
        156,
        158,
        162,
        164,
        168,
        172,
        173,
        174,
        179,
        182,
        189,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        228,
        231,
        237,
        241,
        247,
        249
      ]
    },
    {
      level: 100,
      species: 20,
      gender: '♀',
      stats: {
        hp: 277,
        attack: 226,
        defense: 182,
        spclAtk: 162,
        spclDef: 202,
        speed: 258
      },
      friendship: 128,
      learnableMoves: [
        15,
        29,
        33,
        34,
        36,
        38,
        39,
        44,
        46,
        55,
        58,
        59,
        61,
        63,
        68,
        70,
        85,
        87,
        91,
        92,
        98,
        99,
        102,
        103,
        104,
        111,
        116,
        117,
        129,
        130,
        154,
        156,
        158,
        162,
        164,
        168,
        172,
        173,
        174,
        179,
        182,
        184,
        189,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        228,
        231,
        237,
        241,
        247,
        249
      ]
    },
    {
      level: 100,
      species: 21,
      gender: '♂',
      stats: {
        hp: 268,
        attack: 203,
        defense: 145,
        spclAtk: 145,
        spclDef: 145,
        speed: 223
      },
      friendship: 40,
      learnableMoves: [
        13,
        18,
        19,
        31,
        36,
        38,
        43,
        45,
        64,
        65,
        92,
        97,
        98,
        99,
        102,
        104,
        117,
        119,
        129,
        143,
        156,
        161,
        164,
        168,
        173,
        174,
        182,
        184,
        185,
        189,
        197,
        203,
        206,
        207,
        211,
        213,
        214,
        216,
        218,
        228,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 22,
      gender: '♀',
      stats: {
        hp: 297,
        attack: 244,
        defense: 192,
        spclAtk: 184,
        spclDef: 184,
        speed: 264
      },
      friendship: 128,
      learnableMoves: [
        6,
        13,
        18,
        19,
        31,
        36,
        38,
        43,
        45,
        63,
        64,
        65,
        92,
        97,
        98,
        99,
        102,
        104,
        117,
        119,
        129,
        143,
        156,
        161,
        164,
        168,
        173,
        174,
        182,
        184,
        185,
        189,
        197,
        203,
        206,
        207,
        211,
        213,
        214,
        216,
        218,
        228,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 23,
      gender: '♂',
      stats: {
        hp: 258,
        attack: 203,
        defense: 173,
        spclAtk: 163,
        spclDef: 191,
        speed: 193
      },
      friendship: 128,
      learnableMoves: [
        21,
        29,
        34,
        35,
        36,
        38,
        40,
        43,
        44,
        51,
        70,
        72,
        89,
        90,
        91,
        92,
        99,
        102,
        103,
        104,
        114,
        117,
        130,
        137,
        156,
        157,
        164,
        168,
        173,
        174,
        180,
        182,
        188,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        228,
        237,
        241,
        242,
        251
      ]
    },
    {
      level: 100,
      species: 24,
      gender: '♀',
      stats: {
        hp: 287,
        attack: 234,
        defense: 200,
        spclAtk: 192,
        spclDef: 220,
        speed: 224
      },
      friendship: 128,
      learnableMoves: [
        21,
        29,
        34,
        35,
        36,
        38,
        40,
        43,
        44,
        51,
        63,
        70,
        72,
        89,
        90,
        91,
        92,
        99,
        102,
        103,
        104,
        114,
        117,
        130,
        137,
        156,
        157,
        164,
        168,
        173,
        174,
        180,
        182,
        188,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        228,
        237,
        241,
        242,
        251
      ]
    },
    {
      level: 100,
      species: 25,
      gender: '♂',
      stats: {
        hp: 251,
        attack: 186,
        defense: 138,
        spclAtk: 176,
        spclDef: 156,
        speed: 258
      },
      friendship: 128,
      learnableMoves: [
        3,
        5,
        6,
        9,
        19,
        21,
        25,
        29,
        34,
        36,
        38,
        39,
        45,
        57,
        66,
        69,
        70,
        84,
        85,
        86,
        87,
        92,
        97,
        98,
        99,
        102,
        104,
        111,
        113,
        115,
        117,
        129,
        130,
        148,
        156,
        164,
        173,
        174,
        179,
        182,
        186,
        189,
        192,
        197,
        203,
        204,
        205,
        207,
        213,
        214,
        216,
        217,
        218,
        223,
        227,
        231,
        237,
        240
      ]
    },
    {
      level: 100,
      species: 26,
      gender: '♀',
      stats: {
        hp: 279,
        attack: 236,
        defense: 166,
        spclAtk: 234,
        spclDef: 214,
        speed: 254
      },
      friendship: 128,
      learnableMoves: [
        3,
        5,
        6,
        9,
        19,
        21,
        25,
        29,
        34,
        36,
        38,
        39,
        45,
        57,
        63,
        66,
        69,
        70,
        84,
        85,
        86,
        87,
        92,
        97,
        98,
        99,
        102,
        104,
        111,
        113,
        115,
        117,
        129,
        130,
        148,
        156,
        164,
        168,
        173,
        174,
        179,
        182,
        186,
        189,
        192,
        197,
        203,
        204,
        205,
        207,
        213,
        214,
        216,
        217,
        218,
        223,
        227,
        231,
        237,
        240
      ]
    },
    {
      level: 100,
      species: 27,
      gender: '♂',
      stats: {
        hp: 281,
        attack: 226,
        defense: 248,
        spclAtk: 116,
        spclDef: 136,
        speed: 158
      },
      friendship: 128,
      learnableMoves: [
        10,
        14,
        15,
        28,
        29,
        34,
        36,
        38,
        40,
        66,
        68,
        69,
        70,
        89,
        90,
        91,
        92,
        99,
        102,
        104,
        111,
        117,
        129,
        130,
        154,
        156,
        157,
        163,
        164,
        168,
        173,
        174,
        175,
        182,
        189,
        197,
        201,
        203,
        205,
        207,
        210,
        213,
        214,
        216,
        218,
        219,
        223,
        229,
        231,
        232,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 28,
      gender: '♀',
      stats: {
        hp: 309,
        attack: 256,
        defense: 276,
        spclAtk: 144,
        spclDef: 164,
        speed: 184
      },
      friendship: 128,
      learnableMoves: [
        10,
        14,
        15,
        28,
        29,
        34,
        36,
        38,
        40,
        63,
        66,
        68,
        69,
        70,
        89,
        90,
        91,
        92,
        99,
        102,
        104,
        111,
        117,
        129,
        130,
        154,
        156,
        157,
        163,
        164,
        168,
        173,
        174,
        175,
        182,
        189,
        197,
        201,
        203,
        205,
        207,
        210,
        213,
        214,
        216,
        218,
        219,
        223,
        229,
        231,
        232,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 29,
      gender: '♀',
      stats: {
        hp: 298,
        attack: 177,
        defense: 189,
        spclAtk: 163,
        spclDef: 163,
        speed: 165
      },
      friendship: 128,
      learnableMoves: [
        10,
        24,
        29,
        33,
        34,
        36,
        38,
        39,
        40,
        44,
        45,
        48,
        50,
        59,
        68,
        85,
        87,
        92,
        99,
        102,
        104,
        111,
        115,
        116,
        117,
        130,
        154,
        156,
        164,
        168,
        173,
        174,
        182,
        189,
        197,
        203,
        204,
        207,
        213,
        214,
        216,
        218,
        231,
        237,
        240,
        241,
        251
      ]
    },
    {
      level: 100,
      species: 30,
      gender: '♀',
      stats: {
        hp: 314,
        attack: 195,
        defense: 203,
        spclAtk: 179,
        spclDef: 179,
        speed: 181
      },
      friendship: 128,
      learnableMoves: [
        10,
        24,
        29,
        32,
        33,
        34,
        36,
        38,
        39,
        40,
        44,
        45,
        48,
        50,
        55,
        58,
        59,
        61,
        68,
        70,
        85,
        87,
        92,
        99,
        102,
        104,
        111,
        115,
        116,
        117,
        130,
        154,
        156,
        164,
        168,
        173,
        174,
        182,
        189,
        197,
        203,
        204,
        207,
        213,
        214,
        216,
        218,
        231,
        237,
        240,
        241,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 31,
      gender: '♀',
      stats: {
        hp: 339,
        attack: 220,
        defense: 230,
        spclAtk: 204,
        spclDef: 224,
        speed: 206
      },
      friendship: 128,
      learnableMoves: [
        5,
        6,
        7,
        8,
        9,
        10,
        24,
        25,
        29,
        32,
        33,
        34,
        36,
        38,
        39,
        40,
        44,
        45,
        46,
        48,
        50,
        53,
        55,
        57,
        58,
        59,
        61,
        63,
        66,
        68,
        69,
        70,
        85,
        87,
        89,
        90,
        92,
        99,
        102,
        104,
        111,
        115,
        116,
        117,
        126,
        130,
        154,
        156,
        157,
        164,
        168,
        173,
        174,
        182,
        189,
        196,
        197,
        201,
        203,
        204,
        207,
        210,
        213,
        214,
        216,
        218,
        223,
        231,
        237,
        240,
        241,
        247,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 32,
      gender: '♂',
      stats: {
        hp: 280,
        attack: 197,
        defense: 165,
        spclAtk: 163,
        spclDef: 163,
        speed: 183
      },
      friendship: 128,
      learnableMoves: [
        24,
        29,
        30,
        31,
        32,
        33,
        34,
        36,
        38,
        40,
        43,
        48,
        50,
        59,
        68,
        85,
        87,
        92,
        93,
        99,
        102,
        104,
        111,
        115,
        116,
        117,
        130,
        133,
        156,
        164,
        168,
        173,
        174,
        182,
        189,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        231,
        237,
        240,
        241,
        251
      ]
    },
    {
      level: 100,
      species: 33,
      gender: '♂',
      stats: {
        hp: 296,
        attack: 215,
        defense: 183,
        spclAtk: 179,
        spclDef: 179,
        speed: 199
      },
      friendship: 128,
      learnableMoves: [
        24,
        29,
        30,
        31,
        32,
        33,
        34,
        36,
        38,
        40,
        43,
        48,
        50,
        55,
        58,
        59,
        61,
        68,
        70,
        85,
        87,
        92,
        93,
        99,
        102,
        104,
        111,
        115,
        116,
        117,
        130,
        133,
        156,
        164,
        168,
        173,
        174,
        182,
        189,
        197,
        203,
        207,
        213,
        214,
        216,
        218,
        231,
        237,
        240,
        241,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 34,
      gender: '♂',
      stats: {
        hp: 321,
        attack: 240,
        defense: 210,
        spclAtk: 224,
        spclDef: 204,
        speed: 224
      },
      friendship: 128,
      learnableMoves: [
        5,
        6,
        7,
        8,
        9,
        24,
        25,
        29,
        30,
        31,
        32,
        33,
        34,
        36,
        37,
        38,
        40,
        43,
        46,
        48,
        50,
        53,
        55,
        57,
        58,
        59,
        61,
        63,
        66,
        68,
        69,
        70,
        85,
        87,
        89,
        90,
        92,
        93,
        99,
        102,
        104,
        111,
        115,
        116,
        117,
        126,
        130,
        133,
        156,
        157,
        164,
        168,
        173,
        174,
        182,
        189,
        196,
        197,
        201,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        223,
        231,
        237,
        240,
        241,
        247,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 35,
      gender: '♀',
      stats: {
        hp: 321,
        attack: 166,
        defense: 174,
        spclAtk: 196,
        spclDef: 206,
        speed: 148
      },
      friendship: 128,
      learnableMoves: [
        1,
        3,
        5,
        7,
        8,
        9,
        25,
        29,
        34,
        36,
        38,
        45,
        47,
        53,
        55,
        58,
        59,
        61,
        66,
        68,
        69,
        70,
        76,
        85,
        86,
        87,
        92,
        94,
        99,
        100,
        102,
        104,
        107,
        111,
        113,
        115,
        117,
        118,
        126,
        130,
        133,
        138,
        148,
        149,
        150,
        156,
        161,
        164,
        171,
        173,
        174,
        182,
        186,
        187,
        189,
        192,
        196,
        197,
        203,
        204,
        205,
        207,
        213,
        214,
        216,
        217,
        218,
        223,
        227,
        231,
        236,
        237,
        240,
        241,
        244,
        247
      ]
    },
    {
      level: 100,
      species: 36,
      gender: '♀',
      stats: {
        hp: 349,
        attack: 196,
        defense: 202,
        spclAtk: 224,
        spclDef: 234,
        speed: 174
      },
      friendship: 128,
      learnableMoves: [
        1,
        3,
        5,
        7,
        8,
        9,
        25,
        29,
        34,
        36,
        38,
        45,
        47,
        53,
        55,
        58,
        59,
        61,
        63,
        66,
        68,
        69,
        70,
        76,
        85,
        86,
        87,
        92,
        94,
        99,
        100,
        102,
        104,
        107,
        111,
        113,
        115,
        117,
        118,
        126,
        130,
        133,
        138,
        148,
        149,
        150,
        156,
        161,
        164,
        171,
        173,
        174,
        182,
        186,
        187,
        189,
        192,
        196,
        197,
        203,
        204,
        205,
        207,
        213,
        214,
        216,
        217,
        218,
        223,
        227,
        231,
        236,
        237,
        240,
        241,
        244,
        247
      ]
    },
    {
      level: 100,
      species: 37,
      gender: '♀',
      stats: {
        hp: 264,
        attack: 165,
        defense: 165,
        spclAtk: 183,
        spclDef: 213,
        speed: 213
      },
      friendship: 128,
      learnableMoves: [
        29,
        34,
        36,
        38,
        39,
        46,
        50,
        52,
        53,
        83,
        91,
        92,
        95,
        98,
        99,
        102,
        104,
        109,
        115,
        117,
        126,
        129,
        130,
        156,
        164,
        173,
        174,
        175,
        180,
        182,
        185,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        231,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 38,
      gender: '♀',
      stats: {
        hp: 299,
        attack: 200,
        defense: 198,
        spclAtk: 210,
        spclDef: 248,
        speed: 246
      },
      friendship: 128,
      learnableMoves: [
        29,
        34,
        36,
        38,
        39,
        46,
        50,
        52,
        53,
        63,
        83,
        91,
        92,
        95,
        98,
        99,
        102,
        104,
        109,
        115,
        117,
        126,
        129,
        130,
        156,
        164,
        173,
        174,
        175,
        180,
        182,
        185,
        203,
        207,
        213,
        214,
        216,
        218,
        219,
        231,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 39,
      gender: '♀',
      stats: {
        hp: 418,
        attack: 173,
        defense: 125,
        spclAtk: 173,
        spclDef: 133,
        speed: 123
      },
      friendship: 128,
      learnableMoves: [
        1,
        3,
        5,
        7,
        8,
        9,
        25,
        29,
        34,
        36,
        38,
        47,
        50,
        53,
        55,
        58,
        59,
        61,
        66,
        68,
        69,
        70,
        76,
        85,
        86,
        87,
        92,
        94,
        99,
        100,
        102,
        104,
        111,
        115,
        117,
        126,
        130,
        138,
        148,
        149,
        156,
        161,
        164,
        171,
        173,
        174,
        182,
        185,
        186,
        189,
        192,
        195,
        196,
        197,
        203,
        204,
        205,
        207,
        213,
        214,
        216,
        217,
        218,
        223,
        237,
        240,
        241,
        244,
        247
      ]
    },
    {
      level: 100,
      species: 40,
      gender: '♀',
      stats: {
        hp: 447,
        attack: 204,
        defense: 152,
        spclAtk: 212,
        spclDef: 162,
        speed: 154
      },
      friendship: 128,
      learnableMoves: [
        1,
        3,
        5,
        7,
        8,
        9,
        25,
        29,
        34,
        36,
        38,
        47,
        50,
        53,
        55,
        58,
        59,
        61,
        63,
        66,
        68,
        69,
        70,
        76,
        85,
        86,
        87,
        92,
        94,
        99,
        100,
        102,
        104,
        111,
        115,
        117,
        126,
        130,
        138,
        148,
        149,
        156,
        161,
        164,
        171,
        173,
        174,
        182,
        185,
        186,
        189,
        192,
        195,
        196,
        197,
        203,
        204,
        205,
        207,
        213,
        214,
        216,
        217,
        218,
        223,
        237,
        240,
        241,
        244,
        247
      ]
    },
    {
      level: 100,
      species: 41,
      gender: '♂',
      stats: {
        hp: 274,
        attack: 179,
        defense: 159,
        spclAtk: 153,
        spclDef: 173,
        speed: 201
      },
      friendship: 128,
      learnableMoves: [
        13,
        16,
        17,
        18,
        36,
        38,
        44,
        48,
        72,
        92,
        98,
        99,
        102,
        104,
        109,
        114,
        117,
        129,
        141,
        156,
        164,
        168,
        173,
        174,
        182,
        185,
        197,
        202,
        203,
        207,
        211,
        212,
        213,
        214,
        216,
        218,
        228,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 42,
      gender: '♀',
      stats: {
        hp: 309,
        attack: 216,
        defense: 196,
        spclAtk: 184,
        spclDef: 204,
        speed: 234
      },
      friendship: 128,
      learnableMoves: [
        13,
        16,
        17,
        18,
        36,
        38,
        44,
        48,
        63,
        72,
        92,
        98,
        99,
        102,
        103,
        104,
        109,
        114,
        117,
        129,
        141,
        156,
        164,
        168,
        173,
        174,
        182,
        185,
        197,
        202,
        203,
        207,
        211,
        212,
        213,
        214,
        216,
        218,
        228,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 43,
      gender: '♂',
      stats: {
        hp: 271,
        attack: 176,
        defense: 188,
        spclAtk: 226,
        spclDef: 206,
        speed: 138
      },
      friendship: 128,
      learnableMoves: [
        14,
        15,
        36,
        38,
        51,
        71,
        72,
        75,
        76,
        77,
        78,
        79,
        80,
        92,
        99,
        102,
        104,
        115,
        117,
        148,
        156,
        164,
        173,
        174,
        175,
        182,
        188,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        230,
        235,
        236,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 44,
      gender: '♂',
      stats: {
        hp: 294,
        attack: 201,
        defense: 209,
        spclAtk: 239,
        spclDef: 219,
        speed: 149
      },
      friendship: 128,
      learnableMoves: [
        14,
        15,
        36,
        38,
        51,
        71,
        72,
        75,
        76,
        77,
        78,
        79,
        80,
        92,
        99,
        102,
        104,
        115,
        117,
        148,
        156,
        164,
        173,
        174,
        175,
        182,
        188,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        230,
        235,
        236,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 45,
      gender: '♀',
      stats: {
        hp: 309,
        attack: 216,
        defense: 226,
        spclAtk: 254,
        spclDef: 234,
        speed: 154
      },
      friendship: 128,
      learnableMoves: [
        14,
        15,
        34,
        36,
        38,
        51,
        63,
        71,
        72,
        75,
        76,
        77,
        78,
        79,
        80,
        92,
        99,
        102,
        104,
        115,
        117,
        148,
        156,
        164,
        173,
        174,
        175,
        182,
        188,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        230,
        235,
        236,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 46,
      gender: '♂',
      stats: {
        hp: 258,
        attack: 223,
        defense: 195,
        spclAtk: 173,
        spclDef: 193,
        speed: 133
      },
      friendship: 128,
      learnableMoves: [
        10,
        14,
        15,
        34,
        36,
        38,
        60,
        68,
        72,
        74,
        76,
        77,
        78,
        91,
        92,
        99,
        102,
        103,
        104,
        113,
        115,
        117,
        130,
        141,
        147,
        148,
        156,
        163,
        164,
        168,
        173,
        174,
        175,
        182,
        188,
        202,
        203,
        206,
        207,
        210,
        213,
        214,
        216,
        218,
        228,
        230,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 47,
      gender: '♀',
      stats: {
        hp: 287,
        attack: 254,
        defense: 222,
        spclAtk: 182,
        spclDef: 222,
        speed: 124
      },
      friendship: 128,
      learnableMoves: [
        10,
        14,
        15,
        34,
        36,
        38,
        60,
        63,
        68,
        72,
        74,
        76,
        77,
        78,
        91,
        92,
        99,
        102,
        103,
        104,
        113,
        115,
        117,
        130,
        141,
        147,
        148,
        156,
        163,
        164,
        168,
        173,
        174,
        175,
        182,
        188,
        202,
        203,
        206,
        207,
        210,
        213,
        214,
        216,
        218,
        228,
        230,
        237,
        241,
        249
      ]
    },
    {
      level: 100,
      species: 48,
      gender: '♂',
      stats: {
        hp: 301,
        attack: 186,
        defense: 178,
        spclAtk: 156,
        spclDef: 186,
        speed: 168
      },
      friendship: 128,
      learnableMoves: [
        33,
        36,
        38,
        48,
        50,
        60,
        72,
        76,
        77,
        78,
        79,
        92,
        93,
        94,
        99,
        102,
        103,
        104,
        115,
        117,
        129,
        141,
        148,
        149,
        156,
        164,
        168,
        173,
        174,
        182,
        188,
        193,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        226,
        230,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 49,
      gender: '♀',
      stats: {
        hp: 303,
        attack: 190,
        defense: 180,
        spclAtk: 238,
        spclDef: 208,
        speed: 238
      },
      friendship: 128,
      learnableMoves: [
        13,
        16,
        18,
        33,
        36,
        38,
        48,
        50,
        60,
        63,
        72,
        76,
        77,
        78,
        79,
        92,
        93,
        94,
        99,
        100,
        102,
        103,
        104,
        115,
        117,
        129,
        141,
        148,
        149,
        156,
        164,
        168,
        173,
        174,
        182,
        188,
        193,
        202,
        203,
        207,
        213,
        214,
        216,
        218,
        226,
        230,
        237,
        241
      ]
    },
    {
      level: 100,
      species: 50,
      gender: '♂',
      stats: {
        hp: 208,
        attack: 193,
        defense: 135,
        spclAtk: 153,
        spclDef: 173,
        speed: 273
      },
      friendship: 128,
      learnableMoves: [
        10,
        15,
        28,
        34,
        36,
        38,
        45,
        89,
        90,
        91,
        92,
        99,
        102,
        103,
        104,
        117,
        156,
        157,
        163,
        164,
        168,
        173,
        174,
        182,
        185,
        188,
        189,
        203,
        207,
        213,
        214,
        216,
        218,
        222,
        228,
        237,
        241,
        246,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 51,
      gender: '♀',
      stats: {
        hp: 237,
        attack: 224,
        defense: 162,
        spclAtk: 162,
        spclDef: 202,
        speed: 304
      },
      friendship: 128,
      learnableMoves: [
        10,
        15,
        28,
        34,
        36,
        38,
        45,
        63,
        89,
        90,
        91,
        92,
        99,
        102,
        103,
        104,
        117,
        156,
        157,
        161,
        163,
        164,
        168,
        173,
        174,
        182,
        185,
        188,
        189,
        203,
        207,
        213,
        214,
        216,
        218,
        222,
        228,
        237,
        241,
        246,
        249,
        251
      ]
    },
    {
      level: 100,
      species: 52,
      gender: '♂',
      stats: {
        hp: 268,
        attack: 173,
        defense: 155,
        spclAtk: 163,
        spclDef: 163,
        speed: 263
      },
      friendship: 128,
      learnableMoves: [
        6,
        10,
        29,
        34,
        36,
        38,
        44,
        45,
        55,
        61,
        85,
        87,
        92,
        95,
        99,
        102,
        103,
        104,
        111,
        117,
        129,
        130,
        133,
        138,
        154,
        156,
        163,
        164,
        168,
        171,
        173,
        174,
        180,
        182,
        185,
        189,
        192,
        196,
        197,
        203,
        204,
        207,
        213,
        214,
        216,
        218,
        231,
        237,
        241,
        244,
        247
      ]
    },
    {
      level: 100,
      species: 53,
      gender: '♀',
      stats: {
        hp: 297,
        attack: 204,
        defense: 182,
        spclAtk: 192,
        spclDef: 192,
        speed: 294
      },
      friendship: 80,
      learnableMoves: [
        6,
        10,
        29,
        34,
        36,
        38,
        44,
        45,
        46,
        55,
        61,
        63,
        85,
        87,
        92,
        95,
        99,
        102,
        103,
        104,
        111,
        117,
        129,
        130,
        133,
        138,
        154,
        156,
        163,
        164,
        168,
        171,
        173,
        174,
        180,
        182,
        185,
        189,
        192,
        196,
        197,
        203,
        204,
        207,
        213,
        214,
        216,
        218,
        231,
        237,
        241,
        244,
        247
      ]
    },
    {
      level: 100,
      species: 54,
      gender: '♂',
      stats: {
        hp: 281,
        attack: 180,
        defense: 174,
        spclAtk: 206,
        spclDef: 176,
        speed: 188
      },
      friendship: 128,
      learnableMoves: [
        5,
        6,
        8,
        10,
        25,
        29,
        34,
        36,
        38,
        39,
        50,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        66,
        68,
        69,
        70,
        91,
        92,
        93,
        94,
        95,
        99,
        102,
        103,
        104,
        113,
        117,
        127,
        129,
        130,
        133,
        148,
        154,
        156,
        164,
        173,
        174,
        182,
        189,
        193,
        196,
        203,
        207,
        213,
        214,
        216,
        218,
        223,
        231,
        237,
        238,
        240,
        244,
        248,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 55,
      gender: '♀',
      stats: {
        hp: 313,
        attack: 212,
        defense: 204,
        spclAtk: 238,
        spclDef: 208,
        speed: 216
      },
      friendship: 128,
      learnableMoves: [
        5,
        6,
        8,
        10,
        25,
        29,
        34,
        36,
        38,
        39,
        50,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        63,
        66,
        68,
        69,
        70,
        91,
        92,
        93,
        94,
        95,
        99,
        102,
        103,
        104,
        113,
        117,
        127,
        129,
        130,
        133,
        148,
        154,
        156,
        164,
        173,
        174,
        182,
        189,
        193,
        196,
        203,
        207,
        210,
        213,
        214,
        216,
        218,
        223,
        231,
        237,
        238,
        240,
        244,
        248,
        249,
        250
      ]
    },
    {
      level: 100,
      species: 56,
      gender: '♂',
      stats: {
        hp: 261,
        attack: 236,
        defense: 148,
        spclAtk: 146,
        spclDef: 166,
        speed: 218
      },
      friendship: 128,
      learnableMoves: [
        2,
        5,
        6,
        7,
        8,
        9,
        10,
        25,
        29,
        34,
        36,
        37,
        38,
        43,
        66,
        67,
        68,
        69,
        70,
        85,
        87,
        91,
        92,
        96,
        99,
        102,
        103,
        104,
        111,
        116,
        117,
        118,
        129,
        130,
        154,
        156,
  ]