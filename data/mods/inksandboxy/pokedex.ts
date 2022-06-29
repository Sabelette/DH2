export const Pokedex: {[speciesid: string]: ModdedSpeciesData} = {
	
	//-------------------------------------------
	//EDITED POKEMON + NEW MEGAS
	//-------------------------------------------
	moltresgalar: {
		num: 146,
		name: "Moltres-Galar",
		baseSpecies: "Moltres",
		forme: "Galar",
		types: ["Dark", "Flying"],
		gender: "N",
		//90/85/90/100/125/90
		baseStats: {hp: 90, atk: 100, def: 90, spa: 85, spd: 125, spe: 90},
		abilities: {0: "Berserk"},
		heightm: 2,
		weightkg: 66,
		color: "Red",
		eggGroups: ["Undiscovered"],
	},
	
	regieleki: {
		num: 894,
		name: "Regieleki",
		types: ["Electric"],
		gender: "N",
		baseStats: {hp: 80, atk: 80, def: 70, spa: 80, spd: 70, spe: 200},
		abilities: {0: "Reinitialize", 1: "Transistor", H: "Plus"},
		heightm: 1.2,
		weightkg: 145,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
	},
	regidrago: {
		num: 895,
		name: "Regidrago",
		types: ["Dragon"],
		gender: "N",
		baseStats: {hp: 200, atk: 70, def: 80, spa: 70, spd: 80, spe: 80},
		abilities: {0: "Dragon's Maw", 1: "Dragon Overflow", H: "Minus"},
		heightm: 2.1,
		weightkg: 200,
		color: "Green",
		eggGroups: ["Undiscovered"],
	},
	
	glastrier: {
		num: 896,
		name: "Glastrier",
		types: ["Ice"],
		gender: "N",
		baseStats: {hp: 100, atk: 125, def: 130, spa: 85, spd: 110, spe: 30},
		abilities: {0: "Chilling Neigh", S: "Battle Bond"},
		heightm: 2.2,
		weightkg: 800,
		color: "White",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Glastrier-Heart"],
		// non-activated Battle Bond is forme 1, but PS does not currently distinguish it
		formeOrder: ["Glastrier", "Glastrier", "Glastrier-Heart"],
	},
	glastrierheart: {
		num: 658,
		name: "Glastrier-Heart",
		baseSpecies: "Glastrier",
		forme: "Heart",
		types: ["Ice", "Psychic"],
		baseStats: {hp: 100, atk: 155, def: 160, spa: 95, spd: 130, spe: 40},
		abilities: {0: "Battle Bond"},
		heightm: 2.2,
		weightkg: 800,
		color: "White",
		eggGroups: ["Undiscovered"],
		requiredAbility: "Battle Bond",
		battleOnly: "Glastrier",
	}, 
	spectrier: {
		num: 897,
		name: "Spectrier",
		types: ["Ghost"],
		gender: "N",
		baseStats: {hp: 100, atk: 85, def: 50, spa: 130, spd: 90, spe: 125},
		abilities: {0: "Grim Neigh", S: "Battle Bond"},
		heightm: 2,
		weightkg: 44.5,
		color: "Black",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Spectrier-Soul"],
		// non-activated Battle Bond is forme 1, but PS does not currently distinguish it
		formeOrder: ["Spectrier", "Spectrier", "Spectrier-Soul"],
	},
	spectriersoul: {
		num: 658,
		name: "Spectrier-Soul",
		baseSpecies: "Spectrier",
		forme: "Soul",
		types: ["Ghost", "Psychic"],
		baseStats: {hp: 100, atk: 95, def: 70, spa: 160, spd: 110, spe: 145},
		abilities: {0: "Battle Bond"},
		heightm: 2,
		weightkg: 44.5,
		color: "Black",
		eggGroups: ["Undiscovered"],
		requiredAbility: "Battle Bond",
		battleOnly: "Spectrier",
	}, 
	froslass: {
		inherit: true,
		otherFormes: ["Froslass-Mega"],
		formeOrder: ["Froslass", "Froslass-Mega"],
	},
	froslassmega: {
		num: 478,
		name: "Froslass-Mega",
		baseSpecies: "Froslass",
		forme: "Mega",
		types: ["Ice", "Ghost"],
		baseStats: {hp: 70, atk: 100, def: 70, spa: 110, spd: 110, spe: 120},
		abilities: {0: "Dry Ice"},
		heightm: 1.3,
		weightkg: 26.6,
		color: "White",
		requiredItem: "Froslassite", 
	},
	
	decidueye: {
		inherit: true,
		abilities: {0: "Overgrow", 1: "Concealment", H: "Long Reach"},
		otherFormes: ["Decidueye-Mega"],
		formeOrder: ["Decidueye", "Decidueye-Mega"],
	},
	decidueyemega: {
		num: 724,
		name: "Decidueye-Mega",
		baseSpecies: "Decidueye",
		forme: "Mega",
		types: ["Grass", "Ghost"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 78, atk: 127, def: 95, spa: 120, spd: 120, spe: 90},
		abilities: {0: "Illusion"},
		heightm: 1.6,
		weightkg: 36.6,
		color: "Brown",
		requiredItem: "Deciduite",
	},
	grapploct: {
		num: 853,
		name: "Grapploct",
		types: ["Fighting"],
		baseStats: {hp: 118, atk: 80, def: 90, spa: 70, spd: 80, spe: 42},
		abilities: {0: "Limber", 1: "Regenerator", H: "Technician"},
		heightm: 1.6,
		weightkg: 39,
		color: "Blue",
		prevo: "Clobbopus",
		evoType: "levelMove",
		evoMove: "Taunt",
		eggGroups: ["Water 1", "Human-Like"],
	},
	
	frosmoth: {
		num: 873,
		name: "Frosmoth",
		types: ["Ice", "Bug"],
		baseStats: {hp: 60, atk: 55, def: 90, spa: 105, spd: 90, spe: 75},
		abilities: {0: "Shield Dust", 1: "Fur Coat", H: "Ice Scales"},
		heightm: 1.3,
		weightkg: 42,
		color: "White",
		prevo: "Snom",
		evoType: "levelFriendship",
		evoCondition: "at night",
		eggGroups: ["Bug"],
	},
	dugtrio: {
		inherit: true,
		otherFormes: ["Dugtrio-Alola", "Dugtrio-Mega"],
		formeOrder: ["Dugtrio", "Dugtrio-Alola", "Dugtrio-Mega"],
	},
	dugtriomega: {
		num: 51,
		name: "Dugtrio",
		types: ["Ground", "Bug"],
		baseStats: {hp: 35, atk: 150, def: 90, spa: 50, spd: 70, spe: 130},
		abilities: {0: "Sap Sipper"},
		heightm: 0.7,
		weightkg: 33.3,
		color: "Brown",
		requiredItem: "Dugtrionite",
	},
	
	//-------------------------------------------
	//NEW POKEMON
	//-------------------------------------------
	snowshoo: {
		num: 99.1,
		name: "Snowshoo",
		types: ["Normal", "Ice"],
		baseStats: {hp: 60, atk: 65, def: 102, spa: 53, spd: 85, spe: 30},
		abilities: {0: "Gluttony", 1: "Cheek Pouch", H: "Flurry Down"},
		heightm: 0.4,
		weightkg: 5.5,
		color: "White",
		evos: ["Harefrost"],
		eggGroups: ["Field"],
	},
	harefrost: {
		num: 99.2,
		name: "Harefrost",
		types: ["Normal", "Ice"],
		baseStats: {hp: 80, atk: 95, def: 117, spa: 85, spd: 90, spe: 45},
		abilities: {0: "Slush Rush", 1: "Cheek Pouch", H: "Flurry Down"},
		heightm: 1,
		weightkg: 42.4,
		color: "White",
		prevo: ["Snowshoo"],
		eggGroups: ["Field"],
	}, 
	neuroboxin: {
		num: 99.3,
		name: "Neuroboxin",
		types: ["Poison", "Fighting"],
		baseStats: {hp: 114, atk: 72, def: 96, spa: 85, spd: 81, spe: 109},
		abilities: {0: "Infiltrator", 1: "Sticky Hold", H: "Trace"},
		heightm: 1.6,
		weightkg: 39,
		color: "Purple",
	},
	shadeo: {
		num: 99.4,
		name: "Shadeo",
		gender: "N",
		types: ["Ghost"],
		baseStats: {hp: 70, atk: 105, def: 60, spa: 70, spd: 70, spe: 105},
		abilities: {0: "Prankster"},
		heightm: 0.5,
		weightkg: 17,
		color: "Gray",
	}, 
	pocketwatch: {
		num: 99.5,
		name: "UB Pocketwatch",
		gender: "N",
		types: ["Psychic", "Fighting"],
		baseStats: {hp: 71, atk: 127, def: 127, spa: 23, spd: 23, spe: 199},
		abilities: {0: "Beast Boost"},
		heightm: 1,
		weightkg: 34.5,
		color: "Brown",
	},
	finneon: {
		inherit: true,
		otherFormes: ["Finneon-Alola"],
		formeOrder: ["Finneon", "Finneon-Alola"],
	},
	finneonalola: {
		num: 456,
		name: "Finneon-Alola",
		baseSpecies: "Finneon",
		forme: "Alola",
		types: ["Water", "Fairy"],
		baseStats: {hp: 49, atk: 49, def: 56, spa: 49, spd: 61, spe: 66},
		abilities: {0: "Swift Swim", 1: "Storm Drain", H: "Pastel Veil"},
		heightm: 0.4,
		weightkg: 7,
		color: "Blue",
		evos: ["Lumineon-Alola"],
		eggGroups: ["Water 2", "Fairy"],
	},
	lumineon: {
		inherit: true,
		otherFormes: ["Lumineon-Alola"],
		formeOrder: ["Lumineon", "Lumineon-Alola"],
	},
	lumineonalola: {
		num: 457,
		name: "Lumineon-Alola",
		baseSpecies: "Lumineon",
		forme: "Alola",
		types: ["Water", "Fairy"],
		baseStats: {hp: 69, atk: 69, def: 76, spa: 69, spd: 86, spe: 91},
		abilities: {0: "Swift Swim", 1: "Storm Drain", H: "Pastel Veil"},
		heightm: 1.2,
		weightkg: 24,
		color: "Blue",
		prevo: "Finneon-Alola",
		evoLevel: 31,
		eggGroups: ["Water 2", "Fairy"],
	},
	teravole: {
		num: 99.6,
		name: "Teravole", 
		types: ["Electric"],
		baseStats: {hp: 79, atk: 42, def: 94, spa: 89, spd: 124, spe: 67},
		abilities: {0: "Regenerator", 1: "Static", H: "Triage"},
		heightm: 0.5,
		weightkg: 7.9,
		color: "Yellow",
		eggGroups: ["Field", "Fairy"],
	},
	emblob: {
		num: 99.7,
		name: "Emblob", 
		gender: "N",
		types: ["Fire"],
		baseStats: {hp: 55, atk: 75, def: 100, spa: 75, spd: 100, spe: 70},
		abilities: {0: "Innards Out"},
		heightm: 0.3,
		weightkg: 4,
		color: "Red",
		eggGroups: ["Mineral"],
	},
	bunslinger: {
		num: 99.8,
		name: "Bunslinger",
		types: ["Normal", "Grass"],
		baseStats: {hp: 70, atk: 115, def: 86, spa: 66, spd: 66, spe: 84},
		abilities: {0: "Skill Link", 1: "Technician", H: "Quick Draw"},
		heightm: 1.2,
		weightkg: 33.3,
		color: "Brown",
		eggGroups: ["Field", "Human-Like"],
	},
	stalagmight: {
		num: 99.9,
		name: "Stalagmight",
		types: ["Rock"],
		baseStats: {hp: 45, atk: 81, def: 118, spa: 35, spd: 47, spe: 118},
		abilities: {0: "Sturdy", 1: "Contrary", H: "Limber"},
		heightm: 1.2,
		weightkg: 56,
		color: "Brown",
		eggGroups: ["Mineral"],
	},
	stalactice: {
		num: 100.1,
		name: "Stalactice",
		types: ["Ice"],
		baseStats: {hp: 65, atk: 91, def: 78, spa: 45, spd: 118, spe: 47},
		abilities: {0: "Sturdy", 1: "Contrary", H: "Water Veil"},
		heightm: 1.2,
		weightkg: 36.3,
		color: "White",
		eggGroups: ["Mineral"],
	},
	magmalodon: {
		num: 100.2,
		name: "Magmalodon",
		gender: "N",
		types: ["Fire", "Dragon"],
		//category: "Magma Mantle",
		baseStats: {hp: 85, atk: 67, def: 111, spa: 82, spd: 111, spe: 94},
		abilities: {0: "Clear Body", H: "Immunity"},
		heightm: 1.6,
		weightkg: 139,
		color: "Red",
		eggGroups: ["Undiscovered"],
	},
	blizzeraph: {
		num: 100.3,
		name: "Blizzeraph",
		gender: "N",
		types: ["Ice", "Flying"],
		//category: "Snow Angel",
		baseStats: {hp: 80, atk: 81, def: 103, spa: 87, spd: 86, spe: 113},
		abilities: {0: "Competitive", H: "Magic Guard"},
		heightm: 1.7,
		weightkg: 55.4,
		color: "Blue",
		eggGroups: ["Undiscovered"],
	},
	primchilla: {
		num: 100.4,
		name: "Primchilla",
		types: ["Normal"],
		//category: "Fashionista",
		baseStats: {hp: 85, atk: 105, def: 70, spa: 85, spd: 70, spe: 115},
		abilities: {0: "Frisk"},
		heightm: 0.4,
		weightkg: 7.5,
		color: "White",
		eggGroups: ["Field"],
		otherFormes: ["Primchilla-Specs", "Primchilla-Band", "Primchilla-Scarf"],
		formeOrder: ["Primchilla", "Primchilla-Specs", "Primchilla-Band", "Primchilla-Scarf"],
	},
	primchillaspecs: {
		num: 100.4,
		name: "Primchilla-Specs",
		baseSpecies: "Primchilla",
		forme: "Specs",
		types: ["Normal"],
		baseStats: {hp: 85, atk: 95, def: 60, spa: 125, spd: 60, spe: 105},
		abilities: {0: "Compound Eyes"},
		heightm: 0.4,
		weightkg: 7.5,
		color: "White",
		eggGroups: ["Field"],
		battleOnly: "Primchilla",
	},
	primchillaband: {
		num: 100.4,
		name: "Primchilla-Band",
		baseSpecies: "Primchilla",
		forme: "Band",
		types: ["Normal"],
		baseStats: {hp: 85, atk: 135, def: 75, spa: 75, spd: 75, spe: 85},
		abilities: {0: "Regenerator"},
		heightm: 0.4,
		weightkg: 7.5,
		color: "White",
		eggGroups: ["Field"],
		battleOnly: "Primchilla",
	},
	primchillascarf: {
		num: 100.4,
		name: "Primchilla-Scarf",
		baseSpecies: "Primchilla",
		forme: "Scarf",
		types: ["Normal"],
		baseStats: {hp: 85, atk: 110, def: 60, spa: 110, spd: 60, spe: 105},
		abilities: {0: "Fur Coat"},
		heightm: 0.4,
		weightkg: 7.5,
		color: "White",
		eggGroups: ["Field"],
		battleOnly: "Primchilla",
	},
	chemacaw: {
		num: 100.5,
		name: "Chemacaw",
		types: ["Poison", "Fire"],
		baseStats: {hp: 55, atk: 115, def: 35, spa: 127, spd: 101, spe: 117},
		abilities: {0: "Poison Touch", 1: "Aftermath", H: "Infiltrator"},
		heightm: 1.2,
		weightkg: 35,
		color: "Black",
		eggGroups: ["Undiscovered"],
	},
}