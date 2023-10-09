import { testCharacter } from "../Characters/IronswornCharacter";
import { Companion, Path, Talent, Ritual } from "../Types/AssetTypes";
import _ from "lodash";
import { Bond } from "../Types/BondTypes";
import {
  Gauge,
  Condition,
  Bane,
  Burden,
  Equipment,
} from "../Types/CharacterTypes";
import { Stat } from "../Types/StatTypes";
import { Vow } from "../Types/VowTypes";

export class Game {
  id: string;
  name: string;
  worldName: string;
  description: string;
  experience: {
    min: number;
    spent: number;
    current: number;
    max: number;
  };
  gauges: Map<string, Gauge>;
  stats: Map<string, Stat>;
  vows: Map<string, Vow>;
  bonds: Map<string, Bond>;
  conditions: Map<string, Condition>;
  banes: Map<string, Bane>;
  burdens: Map<string, Burden>;
  companions: Map<string, Companion>;
  paths: Map<string, Path>;
  talents: Map<string, Talent>;
  rituals: Map<string, Ritual>;
  equipment: Map<string, Equipment>;
  date: number;

  constructor({
    id = "",
    name = "",
    worldName = "",
    description = "",
    experience = {
      min: 0,
      spent: 0,
      current: 0,
      max: 0,
    },
    gauges = new Map(),
    stats = new Map(),
    vows = new Map(),
    bonds = new Map(),
    conditions = new Map(),
    banes = new Map(),
    burdens = new Map(),
    companions = new Map(),
    paths = new Map(),
    talents = new Map(),
    rituals = new Map(),
    equipment = new Map(),
    date = 0,
  }: Partial<Game> = {}) {
    this.id = id;
    this.name = name;
    this.worldName = worldName;
    this.description = description;
    this.experience = experience;
    this.gauges = gauges;
    this.stats = stats;
    this.vows = vows;
    this.bonds = bonds;
    this.conditions = conditions;
    this.banes = banes;
    this.burdens = burdens;
    this.companions = companions;
    this.paths = paths;
    this.talents = talents;
    this.rituals = rituals;
    this.equipment = equipment;
    this.date = date;
  }

  loadTestCharacter() {
    this.id = testCharacter.id;
    this.name = testCharacter.name;
    this.worldName = testCharacter.worldName;
    this.description = testCharacter.description;
    this.experience = testCharacter.experience;
    this.gauges = testCharacter.gauges;
    this.stats = testCharacter.stats;
    this.vows = testCharacter.vows;
    this.bonds = testCharacter.bonds;
    this.conditions = testCharacter.conditions;
    this.banes = testCharacter.banes;
    this.burdens = testCharacter.burdens;
    this.companions = testCharacter.companions;
    this.paths = testCharacter.paths;
    this.talents = testCharacter.talents;
    this.rituals = testCharacter.rituals;
    this.equipment = testCharacter.equipment;
    this.date = testCharacter.date;
  }

  getVows(): Vow[] {
    return Array.from(this.vows.values());
  }

  getBonds(): Bond[] {
    return Array.from(this.bonds.values());
  }

  getPaths(): Path[] {
    return Array.from(this.paths.values());
  }

  getCompanions(): Companion[] {
    return Array.from(this.companions.values());
  }

  getTalents(): Talent[] {
    return Array.from(this.talents.values());
  }

  getRituals(): Ritual[] {
    return Array.from(this.rituals.values());
  }

  getNumberOfStatsWithValue(value:number):number {
    let count = 0;
    this.stats.forEach((stat) => {
      if (stat.value === value) {
        count++;
      }
    });
    return count;
  }

  getZeroValueStats(): Stat[] {
    const stats = Array.from(this.stats.values());
    return stats.filter((stat) => stat.value === 0);
  }

  getStatsArray(): Stat[] {
    return Array.from(this.stats.values());
  }
}
