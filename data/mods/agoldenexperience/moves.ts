export const Moves: {[k: string]: ModdedMoveData} = {
	tentacatch: {
		num: 20,
		accuracy: 85,
		basePower: 60,
		category: "Physical",
		name: "Tentacatch",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: {
			chance: 100,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Poison",
		contestType: "Tough",
	},
	schuss: {
		num: 136,
		accuracy: 90,
		basePower: 130,
		category: "Physical",
		shortDesc: "User takes 1/3 of damages inflicted.",
		name: "Schuss",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1},
		recoil: [33, 100],
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Cool",
	},
	goodfishing: {
		num: -1168,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Good Fishing",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, source, target, move) {
			const item = target.getItem();
			if (!this.singleEvent('TakeItem', item, target.itemData, target, target, move, item)) return;
			if (item.id) {
				return this.chainModify(1.5);
			}
		},
		onAfterHit(target, source) {
			if (source.hp) {
				const item = target.takeItem();
				if (item) {
					this.add('-enditem', target, item.name, '[from] move: Good Fishing', '[of] ' + source);
					this.heal(source.maxhp / 10, source);
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		contestType: "Tough",
	},
	stellarpunch: {
		num: 713,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		shortDesc: "Ignores the target's ability.",
		name: "Stellar Punch",
		pp: 10,
		priority: 0,
		flags: {punch: 1, contact: 1, protect: 1, mirror: 1},
		ignoreAbility: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	toxicthread: {
		num: 672,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Toxic Thread",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'tox',
		boosts: {
			spe: -1,
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		zMove: {boost: {spe: 1}},
		contestType: "Tough",
	},
	detectmagic: {
		num: 573,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Detect Magic",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Dark') return 1;
		},
		target: "normal",
		type: "Psychic",
		contestType: "Beautiful",
	},
	dispelmagic: {
		num: 499,
		accuracy: true,
		basePower: 70,
		category: "Special",
		name: "Dispel Magic",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit(target) {
			target.clearBoosts();
			this.add('-clearboost', target);
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		shortDesc: "The target is cleared from all its stat changes.",
	},
	purifyingstream: {
		num: 499,
		accuracy: true,
		basePower: 90,
		category: "Special",
		name: "Purifying Stream",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit(target) {
			target.clearBoosts();
			this.add('-clearboost', target);
		},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
	},
	railwaysmash: {
		num: 344,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Railway Smash",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [33, 100],
		target: "normal",
		type: "Steel",
	},
	galvanismash: {
		num: 457,
		accuracy: 80,
		basePower: 150,
		category: "Physical",
		name: "Galvani-Smash",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [1, 2],
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Tough",
	},
	nectack: {
		num: 228,
		accuracy: 100,
		basePower: 60,
		basePowerCallback(pokemon, target, move) {
			// You can't get here unless the pursuit succeeds
			if (target.beingCalledBack) {
				this.debug('Nectack damage boost');
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Physical",
		name: "Nectack",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, bite: 1},
		beforeTurnCallback(pokemon) {
			for (const side of this.sides) {
				if (side === pokemon.side) continue;
				side.addSideCondition('nectack', pokemon);
				const data = side.getSideConditionData('nectack');
				if (!data.sources) {
					data.sources = [];
				}
				data.sources.push(pokemon);
			}
		},
		onModifyMove(move, source, target) {
			if (target?.beingCalledBack) move.accuracy = true;
		},
		onTryHit(target, pokemon) {
			target.side.removeSideCondition('nectack');
		},
		condition: {
			duration: 1,
			onBeforeSwitchOut(pokemon) {
				this.debug('Nectack start');
				let alreadyAdded = false;
				pokemon.removeVolatile('destinybond');
				for (const source of this.effectData.sources) {
					if (!this.queue.cancelMove(source) || !source.hp) continue;
					if (!alreadyAdded) {
						this.add('-activate', pokemon, 'move: Nectack');
						alreadyAdded = true;
					}
					// Run through each action in queue to check if the Pursuit user is supposed to Mega Evolve this turn.
					// If it is, then Mega Evolve before moving.
					if (source.canMegaEvo || source.canUltraBurst) {
						for (const [actionIndex, action] of this.queue.entries()) {
							if (action.pokemon === source && action.choice === 'megaEvo') {
								this.runMegaEvo(source);
								this.queue.list.splice(actionIndex, 1);
								break;
							}
						}
					}
					this.runMove('nectack', source, this.getTargetLoc(pokemon, source));
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Clever",
	},
	overcharge: {
		num: 682,
		accuracy: 100,
		basePower: 130,
		category: "Special",
		name: "Overcharge",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		onTryMove(pokemon, target, move) {
			if (pokemon.hasType('Electric')) return;
			this.add('-fail', pokemon, 'move: Overcharge');
			this.attrLastMove('[still]');
			return null;
		},
		self: {
			onHit(pokemon) {
				pokemon.setType(pokemon.getTypes(true).map(type => type === "Electric" ? "???" : type));
				this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[from] move: Overcharge');
			},
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Clever",
	},
	goldenexperience: {
		num: 409,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Golden Experience",
		shortDesc: "Heal 50% of damages dealt.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Tough",
	},
	dimensionalbleeding: {
		num: 722,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Dimensional Bleeding",
		shortDesc: "Physical if Atk > SpA.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
		secondary: null,
		target: "normal",
		type: "Dark",
	},
    frostbite: {
		num: -1001,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		desc: "The Pokémon at the user's position steals some of the target's maximum HP at the end of each turn. Damage begins at 1/16, rounded down, and increases each turn like Toxic. If Big Root is held by the recipient, the HP recovered is 1.3x normal, rounded half down. If the target uses Baton Pass, the replacement will continue being leeched. If the target switches out, the effect ends.",
		shortDesc: "Target's HP is restored to user every turn. Damage increases like Toxic.",
		name: "Frostbite",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'frostbite',
		condition: {
			onStart(target) {
			  this.effectData.stage = 0;
				this.add('-start', target, 'move: Frostbite');
			},
			onResidualOrder: 8,
			onResidual(pokemon) {
	  		if (this.effectData.stage < 15) {
		  		this.effectData.stage++;
		  	}
				const target = this.effectData.source.side.active[pokemon.volatiles['frostbite'].sourcePosition];
				if (!target || target.fainted || target.hp <= 0) {
					this.debug('Nothing to leech into');
					return;
				}
				const damage = this.damage(this.clampIntRange(pokemon.baseMaxhp / 16, 1) * this.effectData.stage, pokemon, target,); //'[silent]'); //looking at that soon
				if (damage) {
					this.heal(damage, target, pokemon);
				}
			},
		},
		onPrepareHit: function(target, source) {	
			this.attrLastMove('[still]');
			this.add('-anim', source, "Icy Wind", target);
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
	},
	flamingsphere: {
		num: -1040,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		shortDesc: "Usually goes first.",
		name: "Flaming Sphere",
		pp: 20,
		priority: 1,
		flags: {ballistic: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Tough",
		/*onPrepareHit: function(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Air Slash", target);
		},		*/
	},
	fireball: {
		num: 257,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Fire Ball",
		pp: 10,
		priority: 0,
		flags: {ballistic: 1, protect: 1, mirror: 1},
		onHit() {
			this.field.clearTerrain();
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fire",
		contestType: "Beautiful",
	},
	highwater: {
		num: -659,
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "User restores 1/2 its max HP; cures status if Rain Dance is active.",
		name: "High Water",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			let factor = 0.5;
			if (this.field.isWeather('raindance') || this.field.isWeather('primordialsea')) {
				const success = !!this.heal(this.modify(pokemon.maxhp, 0.25));
				return pokemon.cureStatus() || success;
			}
			return !!this.heal(this.modify(pokemon.maxhp, factor));
		},
		secondary: null,
		target: "self",
		type: "Water",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	condensate: {
		num: -1797,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Condensate",
		shortDesc: "Power x2 if on Misty Terrain.",
		pp: 24,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, source) {
			if (this.field.isTerrain('mistyterrain') && source.isGrounded()) {
				this.debug('terrain buff');
				return this.chainModify(2);
			}
		},
		onModifyMove(move, source, target) {
			if (this.field.isTerrain('mistyterrain') && source.isGrounded()) {
				move.target = 'allAdjacentFoes';
			}
		},
		secondary: null,
		target: "normal",
		type: "Ice",
	},
	chillblain: {
		num: -1086,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		name: "Chillblain",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'frz',
		ignoreImmunity: false,
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Cool",
	},
	monkeypunch: {
		num: 409,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Monkey Punch",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Grass' || type === 'Bug') return 1;
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
	},
    indomitablespirit: {
		num: -1038,
		accuracy: 95,
		basePower: 75,
		category: "Special",
		shortDesc: "Power doubles if last move failed or was resisted.",
		name: "Indomitable Spirit",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		basePowerCallback(pokemon, target, move) {
			if (pokemon.moveLastTurnResult === false) return move.basePower * 2; // if the last move failed
			if (pokemon.volatiles['indomitablespirit'].boost === 'lastMoveResisted') return move.basePower * 2; // if the last move was resisted
			return move.basePower;
		},
		onPrepareHit: function(target, source) {	
			this.attrLastMove('[still]');
			this.add('-anim', source, "Vacuum Wave", target);
		},
		condition: { // this is *not* meant to be set as part of the move; partially defined in scripts.ts!
			onModifyDamage(damage, source, target, move) {
				if (target.getMoveHitData(move).typeMod < 0) {
					this.effectData.boost = 'thisMoveResisted';
					this.debug('set Indomitable Spirit boost');
				}
			},
			onBeforeMove(pokemon) {
				if (this.effectData.boost === 'thisMoveResisted') {
					this.effectData.boost = 'lastMoveResisted';
				} else {
					this.effectData.boost = null;
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
	},
	cosmicpunch: {
		num: -1473,
		accuracy: 100,
		basePower: 80,
		shortDesc: "Damages target based on SpD, not Def.",
		category: "Physical",
		defensiveCategory: "Special",
		name: "Cosmic Punch",
		pp: 10,
		priority: 0,
		flags: {punch: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
	},
	dissolution: {
		num: -687,
		accuracy: 70,
		basePower: 100,
		category: "Special",
		name: "Dissolution",
		pp: 16,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit(target) {
			if (target.getAbility().isPermanent) return;
			if (target.newlySwitched || this.queue.willMove(target)) return;
			target.addVolatile('gastroacid');
		},
		onAfterSubDamage(damage, target) {
			if (target.getAbility().isPermanent) return;
			if (target.newlySwitched || this.queue.willMove(target)) return;
			target.addVolatile('gastroacid');
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Poison",
	},
	landslide: {
		num: 529,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Landslide",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit(target, source, move) {
			let success = false;
			if (!target.volatiles['substitute'] || move.infiltrates) success = !!this.boost({spe: -1});
			const removeTarget = [
				'reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge',
			];
			const removeAll = [
				'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge',
			];
			for (const targetCondition of removeTarget) {
				if (target.side.removeSideCondition(targetCondition)) {
					if (!removeAll.includes(targetCondition)) continue;
					this.add('-sideend', target.side, this.dex.getEffect(targetCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}
			for (const sideCondition of removeAll) {
				if (source.side.removeSideCondition(sideCondition)) {
					this.add('-sideend', source.side, this.dex.getEffect(sideCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}
			return success;
		},
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Tough",
	},
	epicenter: {
		num: -1248,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Epicenter",
		pp: 10,
		priority: 0,
		flags: {},
		ignoreImmunity: true,
		isFutureMove: true,
		onTry(source, target) {
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			Object.assign(target.side.slotConditions[target.position]['futuremove'], {
				duration: 3,
				move: 'epicenter',
				source: source,
				moveData: {
					id: 'epicenter',
					name: "epicenter",
					accuracy: 100,
					basePower: 120,
					category: "Physical",
					priority: 0,
					flags: {},
					ignoreImmunity: false,
					effectType: 'Move',
					isFutureMove: true,
					type: 'Ground',
				},
			});
			this.add('-start', source, 'move: Epicenter');
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Tough",
	},
	downdraft: {
		num: 403,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Downdraft",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onAfterHit(this, target, source, move) {
			if (!(target.isGrounded())){
				this.boost({spe: -1}, target, target, null, true);
			}
		},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
	},
	golemstrike: {
		num: 444,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Golem Strike",
		pp: 16,
		shortDesc: "10% chance to lower target's Def",
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Rock",
		contestType: "Tough",
	},
    contrariety: {
        num: -1050,
        accuracy: true,
        basePower: 0,
        category: "Status",
        name: "Contrariety",
        pp: 15,
        priority: 0,
        flags: {},
		onHitField() {
            let success = false;
            for (const pokemon of this.getAllActive()) {
                if (pokemon.ability === 'truant' || pokemon.ability === 'contrary' || pokemon.getAbility().isPermanent) continue;
                const oldAbility = pokemon.setAbility('contrary');
                if (oldAbility) this.add('-ability', pokemon, 'Contrary', '[from] move: Contrary');
                success = true;
            }
            return success;
        },
        secondary: null,
		onPrepareHit: function(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Torment", target, source);
		},
        target: "all",
        type: "Dark",
        zMove: {boost: {def: 1}},
    },
	hypnotichorror: {
		num: 276,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Hypnotic Horror",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				spa: -1,
				spd: -1,
			},
		},
		secondary: null,
		target: "normal",
		shortDesc: "Lowers the user's SpA and SpD by one afterward.",
		type: "Dark",
		contestType: "Tough",
	},
	mercuryshot: {
		num: 503,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Mercury Shot",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		thawsTarget: true,
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Steel",
		contestType: "Tough",
	},
	chakraterrain: {
		num: 604,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Chakra Terrain",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'chakraterrain',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				if (move.flags['pulse'] && attacker.isGrounded() && !attacker.isSemiInvulnerable()) {
					this.debug('chakra terrain boost');
					return this.chainModify([0x14CD, 0x1000]);
				}
			},
			onStart(battle, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Chakra Terrain', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Chakra Terrain');
				}
			},
			onAnyAccuracy(accuracy, target, source, move) {
				if (move.type === 'Fighting' && (source === this.effectData.target || target === this.effectData.target) && (target.isGrounded() && !target.isSemiInvulnerable() || source.isGrounded() && !source.isSemiInvulnerable())) {
					return true;
				}
				return accuracy;
			},
			onResidualOrder: 21,
			onResidualSubOrder: 2,
			onEnd() {
				this.add('-fieldend', 'move: Chakra Terrain');
			},
		},
		secondary: null,
		target: "all",
		type: "Fighting",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	sonicboom: {
		inherit: true,
		damage: null,
		basePower: 40,
		category: "Special",
		desc: "Priority +1, Sound move.",
		shortDesc: "Usually goes first. Sound Move.",
		name: "Sonic Boom",
		priority: 1,
		isNonstandard: null,
		flags: {sound: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	rockwrecker: {
		num: 439,
		accuracy: 90,
		basePower: 140,
		category: "Physical",
		name: "Rock Wrecker",
		shortDesc: "Lowers the user's Atk by 2 afterward.",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		self: {
			boosts: {
				atk: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
	},
	triplekick: {
		num: 167,
		accuracy: 90,
		basePower: 20,
		basePowerCallback(pokemon, target, move) {
			return 20 * move.hit;
		},
		category: "Physical",
		name: "Triple Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 3,
		multiaccuracy: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMove: {basePower: 120},
		maxMove: {basePower: 80},
		contestType: "Cool",
	},
	playrough: {
		num: 583,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Play Rough",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Fairy",
		contestType: "Cute",
	},
	powdersnow: {
		num: 181,
		accuracy: 100,
		basePower: 20,
		category: "Special",
		name: "Powder Snow",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			status: 'frz',
		},
		target: "allAdjacentFoes",
		type: "Ice",
		contestType: "Beautiful",
	},
	nightdaze: {
		num: 539,
		accuracy: 95,
		basePower: 95,
		category: "Special",
		name: "Night Daze",
		shortDesc: "20% chance to lower target's Atk.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Dark",
		contestType: "Cool",
	},
	batonpass: { //copied from Hoenn Gaiden
		inherit: true,
		self: {
			onHit(source) {
				if (source.positiveBoosts()) {
					source.clearBoosts();
					this.add('-clearpositiveboost', source);
				}
			}
		}

	},
	lowsweep: {
		num: 490,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Low Sweep",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Fighting",
		contestType: "Clever",
	},
	powergem: {
		num: 408,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Power Gem",
		shortDesc: "10% chance to raise user's Def by one.",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					def: 1,
				},
			},
		},
		target: "normal",
		type: "Rock",
		contestType: "Beautiful",
	},
	darkvoid: {
		num: 464,
		accuracy: 80,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Dark Void",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'slp',
		onTryMove(pokemon, target, move) {
			if (pokemon.species.name === 'Darkrai' || move.hasBounced) {
				return;
			}
			this.add('-fail', pokemon, 'move: Dark Void');
			this.hint("Only a Pokemon whose form is Darkrai can use this move.");
			return null;
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dark",
		contestType: "Clever",
	},
	freezeshock: {
		num: 553,
		accuracy: 90,
		basePower: 140,
		category: "Physical",
		name: "Freeze Shock",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				atk: -2,
			},
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	iceburn: {
		num: 554,
		accuracy: 90,
		basePower: 140,
		category: "Special",
		name: "Ice Burn",
		pp: 5,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	multiattack: {
		num: 718,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Multi-Attack",
		shortDesc: "Changes type to match user's first type.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			let type = pokemon.types[0];
			if (type === "Bird") type = "???";
			move.type = type;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 185},
		maxMove: {basePower: 95},
		contestType: "Tough",
	},
	prismaticlaser: {
		num: 711,
		accuracy: 100,
		basePower: 130,
		category: "Special",
		name: "Prismatic Laser",
		pp: 10,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			this.boost({spa: 1}, attacker, attacker, move);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
	},
	photongeyser: {
		num: 722,
		accuracy: 100,
		basePower: 100,
		basePowerCallback(pokemon, target, move) {
			if (pokemon.species.name === 'Necrozma-Ultra' && pokemon.hasAbility('neuroforce')) {
				return move.basePower + 20;
			}
			return move.basePower;
		},
		category: "Special",
		name: "Photon Geyser",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
		ignoreAbility: true,
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
	},
	eternabeam: {
		num: 795,
		accuracy: 100,
		basePower: 150,
		category: "Special",
		name: "Eternabeam",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		mindBlownRecoil: true,
		onAfterMove(pokemon, target, move) {
			if (move.mindBlownRecoil && !move.multihit) {
				this.damage(Math.round(pokemon.maxhp / 2), pokemon, pokemon, this.dex.getEffect('Eternabeam'), true);
			}
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
	},
	wickedblow: {
		num: 817,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Wicked Blow",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, punch: 1, mirror: 1},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Dark",
	},
	bouncybubble: {
		num: 733,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		shortDesc: "Heals 50% of damages dealt.",
		name: "Bouncy Bubble",
		pp: 20,
		priority: 0,
		flags: {protect: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Clever",
	},
	buzzybuzz: {
		num: 734,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		shortDesc: "10% to paralyze target.",
		name: "Buzzy Buzz",
		pp: 10,
		priority: 0,
		flags: {protect: 1},
		secondary: {
			chance: 10,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Clever",
	},
	sizzlyslide: {
		num: 735,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		shortDesc: "30% chance to burn target.",
		name: "Sizzly Slide",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, defrost: 1},
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Clever",
	},
	glitzyglow: {
		num: 736,
		accuracy: 90,
		basePower: 70,
		category: "Special",
		shortDesc: "-1 SpA/SpD to target.",
		name: "Glitzy Glow",
		pp: 24,
		priority: 0,
		flags: {protect: 1},
		boosts: {
			spa: -1,
			spd: -1,
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	baddybad: {
		num: 737,
		accuracy: 90,
		basePower: 70,
		category: "Special",
		shortDesc: "-1 Atk/Def to target.",
		name: "Baddy Bad",
		pp: 24,
		priority: 0,
		flags: {protect: 1},
		boosts: {
			atk: -1,
			def: -1,
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	sappyseed: {
		num: 738,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		shortDesc: "Inflicts Leech Seed to the opponent.",
		name: "Sappy Seed",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1},
		onHit(target, source) {
			if (target.hasType('Grass')) return null;
			target.addVolatile('leechseed', source);
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Clever",
	},
	freezyfrost: {
		num: 739,
		accuracy: 90,
		basePower: 100,
		category: "Special",
		shortDesc: "Sets Haze.",
		name: "Freezy Frost",
		pp: 10,
		priority: 0,
		flags: {protect: 1},
		onHit() {
			this.add('-clearallboost');
			for (const pokemon of this.getAllActive()) {
				pokemon.clearBoosts();
			}
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Clever",
	},
	sparklyswirl: {
		num: 740,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		shortDesc: "Sets Lucky Chant.",
		name: "Sparkly Swirl",
		pp: 5,
		priority: 0,
		flags: {protect: 1},
		condition: {
			duration: 5,
			onStart(side) {
				this.add('-sidestart', side, 'move: Lucky Chant'); // "The Lucky Chant shielded [side.name]'s team from critical hits!"
			},
			onCriticalHit: false,
			onResidualOrder: 21,
			onResidualSubOrder: 5,
			onEnd(side) {
				this.add('-sideend', side, 'move: Lucky Chant'); // "[side.name]'s team's Lucky Chant wore off!"
			},
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Clever",
	},
	ragingfury: {
		num: 200,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Raging Fury",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'lockedmove',
		},
		onAfterMove(pokemon) {
			if (pokemon.volatiles['lockedmove'] && pokemon.volatiles['lockedmove'].duration === 1) {
				pokemon.removeVolatile('lockedmove');
			}
		},
		secondary: null,
		target: "randomNormal",
		type: "Fire",
		contestType: "Cool",
	},
	infernalparade: {
		num: 506,
		accuracy: 100,
		basePower: 60,
		basePowerCallback(pokemon, target, move) {
			if (target.status === 'brn' || target.hasAbility('comatose')) return move.basePower * 2;
			return move.basePower;
		},
		category: "Special",
		name: "Infernal Parade",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Ghost",
		zMove: {basePower: 160},
		contestType: "Clever",
	},
	ceaselessedge: {
		num: 463,
		accuracy: 90,
		basePower: 80,
		category: "Physical",
		name: "Ceaseless Edge",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Tough",
	},
	victorydance: {
		num: 483,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Victory Dance",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, dance: 1},
		boosts: {
			atk: 1,
			def: 1,
			spe: 1,
		},
		secondary: null,
		target: "self",
		type: "Fighting",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	bittermalice: {
		num: 506,
		accuracy: 100,
		basePower: 60,
		basePowerCallback(pokemon, target, move) {
			if (target.status === 'frz' || target.hasAbility('comatose')) return move.basePower * 2;
			return move.basePower;
		},
		category: "Special",
		name: "Bitter Malice",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'frz',
		},
		target: "normal",
		type: "Ghost",
		zMove: {basePower: 160},
		contestType: "Clever",
	},
	esperwing: {
		num: -1094,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Esper Wing",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	psyshieldbash: {
		num: 776,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Psyshield Bash",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		useSourceDefensiveAsOffensive: true,
		secondary: null,
		target: "normal",
		type: "Psychic",
	},
	headlongrush: {
		num: 370,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Headlong Rush",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			boosts: {
				def: -1,
				spd: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Tough",
	},
	hiddenpower: {
		num: 237,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Hidden Power",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			move.type = pokemon.hpType || 'Dark';
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Clever",
	},
	hiddenpowerbug: {
		num: 237,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		realMove: "Hidden Power",
		name: "Hidden Power Bug",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Clever",
	},
	hiddenpowerdark: {
		num: 237,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		realMove: "Hidden Power",
		name: "Hidden Power Dark",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	hiddenpowerdragon: {
		num: 237,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		realMove: "Hidden Power",
		name: "Hidden Power Dragon",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Clever",
	},
	hiddenpowerelectric: {
		num: 237,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		realMove: "Hidden Power",
		name: "Hidden Power Electric",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Clever",
	},
	hiddenpowerfighting: {
		num: 237,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		realMove: "Hidden Power",
		name: "Hidden Power Fighting",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Clever",
	},
	hiddenpowerfire: {
		num: 237,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		realMove: "Hidden Power",
		name: "Hidden Power Fire",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Clever",
	},
	hiddenpowerflying: {
		num: 237,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		realMove: "Hidden Power",
		name: "Hidden Power Flying",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Flying",
		contestType: "Clever",
	},
	hiddenpowerghost: {
		num: 237,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		realMove: "Hidden Power",
		name: "Hidden Power Ghost",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
	},
	hiddenpowergrass: {
		num: 237,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		realMove: "Hidden Power",
		name: "Hidden Power Grass",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Clever",
	},
	hiddenpowerground: {
		num: 237,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		realMove: "Hidden Power",
		name: "Hidden Power Ground",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Clever",
	},
	hiddenpowerice: {
		num: 237,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		realMove: "Hidden Power",
		name: "Hidden Power Ice",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Clever",
	},
	hiddenpowerpoison: {
		num: 237,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		realMove: "Hidden Power",
		name: "Hidden Power Poison",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Clever",
	},
	hiddenpowerpsychic: {
		num: 237,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		realMove: "Hidden Power",
		name: "Hidden Power Psychic",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	hiddenpowerrock: {
		num: 237,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		realMove: "Hidden Power",
		name: "Hidden Power Rock",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Clever",
	},
	hiddenpowersteel: {
		num: 237,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		realMove: "Hidden Power",
		name: "Hidden Power Steel",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Clever",
	},
	hiddenpowerwater: {
		num: 237,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		realMove: "Hidden Power",
		name: "Hidden Power Water",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Clever",
	},
	lightningassault: {
		num: -486,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			let ratio = Math.floor(pokemon.getStat('spe') / target.getStat('spe'));
			if (!isFinite(ratio)) ratio = 0;
			const bp = [40, 60, 80, 120, 150][Math.min(ratio, 4)];
			this.debug(`${bp} bp`);
			return bp;
		},
		category: "Physical",
		name: "Lightning Assault",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Flying",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Cool",
	},
	weneedawall: {
		num: 800,
		accuracy: 90,
		basePower: 120,
		category: "Physical",
		name: "We Need A Wall",
		pp: 10,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			this.boost({atk: 1}, attacker, attacker, move);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Rock",
	},
}