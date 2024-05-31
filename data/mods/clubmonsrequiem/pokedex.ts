export const Pokedex: { [k: string]: ModdedSpeciesData } = {
	absol: {
		inherit: true,
		abilities: {0: "Magic Bounce", 1: "Super Luck", H: "Justified"},
	},
	accelgor: {
		inherit: true,
		baseStats: {hp: 90, atk: 70, def: 50, spa: 100, spd: 60, spe: 145},
	},
	clawitzer: {
		inherit: true,
		baseStats: {hp: 71, atk: 73, def: 88, spa: 120, spd: 89, spe: 80},
	},
	cryogonal: {
		inherit: true,
		evos: ["Pollugonal"],
	},
	pollugonal: {
		name: "Pollugonal",
		copyData: "Cryogonal",

		types: ["Ice", "Poison"],
		baseStats: {hp: 90, atk: 50, def: 50, spa: 95, spd: 140, spe: 105},
		movepoolAdditions: ["sludgebomb", "spikes", "toxicspikes"],

		prevo: "Cryogonal",
		evoType: "other",
		evoCondition: "A newly-discovered evolution",
		creator: "Magmajudis",
	},
	escavalier: {
		inherit: true,
		baseStats: {hp: 90, atk: 135, def: 105, spa: 60, spd: 105, spe: 20},
	},
	froslass: {
		num: 478,
		name: "Froslass",
		types: ["Ice", "Ghost"],
		baseStats: {hp: 70, atk: 80, def: 70, spa: 80, spd: 70, spe: 110},
		abilities: {0: "Snow Cloak", H: "Cursed Body"},
		heightm: 1.3,
		weightkg: 26.6,
		color: "White",
		prevo: "Snorunt",
		evoType: "useItem",
		evoItem: "Dawn Stone",
		eggGroups: ["Fairy", "Mineral"],
	},
	goomy: {
		num: 704,
		name: "Goomy",
		types: ["Dragon"],
		baseStats: {hp: 45, atk: 50, def: 35, spa: 55, spd: 75, spe: 40},
		abilities: {0: "Sap Sipper", 1: "Hydration", H: "Gooey"},
		heightm: 0.3,
		weightkg: 2.8,
		color: "Purple",
		evos: ["Sliggoo", "Sliggoo-Hisui"],
		eggGroups: ["Dragon"],
	},
	sliggoo: {
		num: 705,
		name: "Sliggoo",
		types: ["Dragon"],
		baseStats: {hp: 68, atk: 75, def: 53, spa: 83, spd: 113, spe: 60},
		abilities: {0: "Sap Sipper", 1: "Hydration", H: "Gooey"},
		heightm: 0.8,
		weightkg: 17.5,
		color: "Purple",
		prevo: "Goomy",
		evoLevel: 40,
		evos: ["Goodra"],
		eggGroups: ["Dragon"],
		otherFormes: ["Sliggoo-Hisui"],
		formeOrder: ["Sliggoo", "Sliggoo-Hisui"],
	},
	sliggoohisui: {
		num: 705,
		name: "Sliggoo-Hisui",
		baseSpecies: "Sliggoo",
		forme: "Hisui",
		types: ["Steel", "Dragon"],
		baseStats: {hp: 58, atk: 75, def: 83, spa: 83, spd: 113, spe: 40},
		abilities: {0: "Sap Sipper", 1: "Shell Armor", H: "Gooey"},
		heightm: 0.7,
		weightkg: 68.5,
		color: "Purple",
		prevo: "Goomy",
		evoLevel: 40,
		evos: ["Goodra-Hisui"],
		eggGroups: ["Dragon"],
	},
	sudowoodo: {
		inherit: true,
		abilities: {0: "Sturdy", 1: "Rock Head", H: "Fauxliage"},
	},
	goodra: {
		num: 706,
		name: "Goodra",
		types: ["Dragon"],
		baseStats: {hp: 90, atk: 100, def: 70, spa: 110, spd: 150, spe: 80},
		abilities: {0: "Sap Sipper", 1: "Hydration", H: "Gooey"},
		heightm: 2,
		weightkg: 150.5,
		color: "Purple",
		prevo: "Sliggoo",
		evoLevel: 50,
		eggGroups: ["Dragon"],
		otherFormes: ["Goodra-Hisui"],
		formeOrder: ["Goodra", "Goodra-Hisui"],
	},
	goodrahisui: {
		num: 706,
		name: "Goodra-Hisui",
		baseSpecies: "Goodra",
		forme: "Hisui",
		types: ["Steel", "Dragon"],
		baseStats: {hp: 80, atk: 100, def: 100, spa: 110, spd: 150, spe: 60},
		abilities: {0: "Sap Sipper", 1: "Shell Armor", H: "Gooey"},
		heightm: 1.7,
		weightkg: 334.1,
		color: "Purple",
		prevo: "Sliggoo-Hisui",
		evoLevel: 50,
		eggGroups: ["Dragon"],
	},
	gothitelleallira: {
		num: 9002,
		name: "Gothitelle-Allira",
		types: ["Psychic", "Dark"],
		baseStats: {hp: 70, atk: 50, def: 110, spa: 105, spd: 100, spe: 55},
		abilities: {0: "Competitive", 1: "Withering Gaze", H: "Rocky Payload"},
		heightm: 1.7,
		weightkg: 50,
		color: "Green",
		eggGroups: ["Human-Like"],
		creator: "Jumpheart",
	},
	stormulex: {
		num: 9003,
		name: "Stormulex",
		types: ["Electric", "Rock"],
		baseStats: {hp: 91, atk: 119, def: 96, spa: 40, spd: 84, spe: 60},
		abilities: {0: "Volt Absorb", 1: "Natural Cure", H: "Triage"},
		heightm: 1.7, //idk yet
		weightkg: 50, //idk yet
		creator: "BlueRay",
	},
	ironconvector: {
		name: "Iron Convector",
		types: ["Bug", "Ice"],
		baseStats: {hp: 88, atk: 116, def: 48, spa: 130, spd: 106, spe: 82},
		abilities: {0: "Quark Drive", H: "Rewind"},
		heightm: 1.5,
		weightkg: 55,
		creator: "ausma",
	},
	sandyshocks: {
		inherit: true,
		abilities: {0: "Protosynthesis", H: "Rewind"},
	},
	brutebonnet: {
		inherit: true,
		abilities: {0: "Protosynthesis", H: "Rewind"},
	},
	wugtrio: {
		inherit: true,
		abilities: {0: "Gooey", 1: "Stakeout", H: "Sand Veil"},
		movepoolAdditions: ["wavecrash", "rushingtide"],
	},
	celebi: { 
		inherit: true,
		abilities: {0: "Natural Cure", S: "Rewind"},
	},
	noivern: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Infiltrator", H: "Rewind"},
	},
	spidops: {
		inherit: true,
		baseStats: {hp: 65, atk: 79, def: 92, spa: 52, spd: 86, spe: 80},
	},
	dodriocyarian: {
		name: "Dodrio-Cyarian",
		baseSpecies: "Dodrio",
		forme: "Cyarian",
		copyData: "Dodrio",
		types: ["Rock", "Ghost"],
		baseStats: {hp: 95, atk: 70, def: 80, spa: 97, spd: 80, spe: 113},
		abilities: {0: "Rock Beak", 1: "Cursed Body", H: "Solid Rock"},
		movepoolAdditions: ["shadowclaw", "shadowsneak", "phantomforce", "rockslide", "stoneedge", "grudge", "spite", "rocktomb", "stealthrock"],
		movepoolDeletions: ["drillrun", "knockoff", "pursuit"],

		prevo: "Doduo",
		evoType: "other",
		evoCondition: "A newly-discovered evolution",
		creator: "Colossi Productions",
	},
	golduck: {
		inherit: true,
		baseStats: {hp: 80, atk: 82, def: 78, spa: 95, spd: 80, spe: 120},
	},
	bombirdier: {
		inherit: true,
		abilities: {0: "Territorial", 1: "Keen Eye", H: "Rocky Payload"},
		movepoolAdditions: ["rockwrecker"},
	},
	o
	rotom: {
		inherit: true,
		baseStats: {hp: 50, atk: 65, def: 87, spa: 105, spd: 87, spe: 126},
	},
	eevee: {
		inherit: true,
		evos: ["Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon", "Aleon"],
	},
	aleon: {
		name: "Aleon",
		copyData: "Eevee",

		baseStats: {hp: 103, atk: 79, def: 53, spa: 89, spd: 67, spe: 134},
		abilities: {0: "Adaptability", H: "Normalize", S: "Beast Boost"},
		movepoolAdditions: [
			"blizzard", "chargebeam", "discharge", "expandingforce", "futuresight", "gigaimpact", "haze", "hyperbeam", "icebeam", "icywind", "magiccoat",
			"naturepower", "psychic", "psyshock", "reflect", "reflecttype", "risingvoltage", "scald", "shockwave", "signalbeam", "skillswap", "snarl", "solarbeam",
			"suckerpunch", "surf", "terrainpulse", "thunder", "thunderbolt", "thunderwave", "trick", "voltswitch", "waterpulse", "wonderroom", "zapcannon",
		],

		prevo: "Eevee",
		evoType: "levelExtra",
		evoCondition: "in Ultra Space",
		creator: "inkbug",
	},
	poliwrath: {
		inherit: true,
		abilities: {0: "Water Absorb", 1: "Water Compaction", H: "Swift Swim"},
	},
	lapras: {
		inherit: true,
		abilities: {0: "Lightning Rod", 1: "Shell Armor", H: "Hydration"},
	},
	snover: {
		inherit: true,
		evos: ["Abomasnow", "Skiversnow"],
	},
	skiversnow: {
		name: "Skiversnow",
		copyData: "Abomasnow",

		baseStats: {hp: 90, atk: 92, def: 55, spa: 92, spd: 65, spe: 100},
		abilities: {0: "Snow Warning", H: "Pressure"},

		copyMoves: "Snover", // although its data is based on Abomasnow, it doesn't have all of Abomasnow's moves
		movepoolAdditions: [
			"brickbreak", "bulldoze", "earthpower", "focuspunch", "gigaimpact", "hyperbeam", "leafstorm", "outrage", "rapidspin", "rockclimb", "rockslide",
			"rocktomb", "uturn",
		],

		prevo: "Snover",
		evoType: "levelExtra",
		evoCondition: "on steep cliffs",
		creator: "ausma",
	},
	leavanny: {
		inherit: true,
		baseStats: {hp: 75, atk: 103, def: 80, spa: 70, spd: 80, spe: 92},
		abilities: {0: "Swarm", 1: "Chlorophyll", H: "Technician"},
	},
	noibat: {
		inherit: true,
		evos: ["Noivern", "Noivern-Variant"],
	},
	noivernvariant: {
		name: "Noivern-Variant",
		baseSpecies: "Noivern",
		forme: "Variant",
		copyData: "Noivern",

		types: ["Fighting", "Dragon"],
		baseStats: {hp: 95, atk: 70, def: 80, spa: 97, spd: 80, spe: 113},
		abilities: {0: "Levitate"},
		movepoolAdditions: ["aurasphere", "bulldoze", "rocktomb", "vacuumwave"],
		movepoolDeletions: ["boomburst", "dragondance"],

		prevo: "Noibat",
		evoType: "other",
		evoCondition: "A newly-discovered evolution",
		creator: "Hematite",
	},
	solosisneural: {
		name: "Solosis-Neural",
		baseSpecies: "Solosis",
		forme: "Neural",
		copyData: "Solosis",

		types: ["Fighting"],
		baseStats: {hp: 45, atk: 105, def: 30, spa: 30, spd: 50, spe: 30},
		abilities: {0: "Overcoat", 1: "Electric Surge", H: "Regenerator"},
		movepoolAdditions: ["axonrush", "bulkup", "earthquake", "fakeout"],
		movepoolDeletions: ["calmmind", "lightscreen", "magiccoat", "psychic", "psyshock", "storedpower"],

		evos: ["Duosion-Neural"],
		creator: "ausma",
	},
	duosionneural: {
		name: "Duosion-Neural",
		baseSpecies: "Duosion",
		forme: "Neural",
		copyData: "Duosion",

		types: ["Fighting"],
		baseStats: {hp: 65, atk: 125, def: 40, spa: 40, spd: 60, spe: 40},
		abilities: {0: "Overcoat", 1: "Electric Surge", H: "Regenerator"},
		movepoolAdditions: ["axonrush", "bulkup", "earthquake", "fakeout"],
		movepoolDeletions: ["calmmind", "lightscreen", "magiccoat", "psychic", "psyshock", "storedpower"],

		evos: ["Reuniclus-Neural"],
		prevo: "Solosis-Neural",
		evoLevel: 32,
		creator: "ausma",
	},
	reuniclusneural: {
		name: "Reuniclus-Neural",
		baseSpecies: "Reuniclus",
		forme: "Neural",
		copyData: "Reuniclus",

		types: ["Fighting"],
		baseStats: {hp: 110, atk: 125, def: 65, spa: 65, spd: 85, spe: 40},
		abilities: {0: "Overcoat", 1: "Electric Surge", H: "Regenerator"},
		movepoolAdditions: ["axonrush", "bulkup", "earthquake", "fakeout"],
		movepoolDeletions: ["calmmind", "lightscreen", "magiccoat", "psychic", "psyshock", "storedpower"],

		prevo: "Duosion-Neural",
		evoLevel: 41,
		creator: "ausma",
	},
	ogerpon: {
		inherit: true,
		otherFormes: ["Ogerpon-Wellspring", "Ogerpon-Hearthflame", "Ogerpon-Cornerstone", "Ogerpon-Costar", "Ogerpon-Teal-Tera", "Ogerpon-Wellspring-Tera", "Ogerpon-Hearthflame-Tera", "Ogerpon-Cornerstone-Tera"],
		formeOrder: ["Ogerpon", "Ogerpon-Wellspring", "Ogerpon-Hearthflame", "Ogerpon-Cornerstone", "Ogerpon-Costar", "Ogerpon-Teal-Tera", "Ogerpon-Wellspring-Tera", "Ogerpon-Hearthflame-Tera", "Ogerpon-Cornerstone-Tera"],
		// will be unused, but here for costar form
	},
	ogerponcostar: {
		num: 1017,
		name: "Ogerpon-Costar",
		baseSpecies: "Ogerpon",
		forme: "Costar",
		types: ["Grass", "Electric"],
		gender: "F",
		baseStats: {hp: 80, atk: 120, def: 84, spa: 60, spd: 96, spe: 110},
		abilities: {0: "Motor Drive"},
		heightm: 0.9,
		weightkg: 23.8,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		requiredItem: "Costar Mask",
	},
};
