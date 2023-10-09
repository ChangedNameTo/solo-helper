import { GamesAction } from "./GameTypes";
import { Vow } from "./VowTypes";
import { Stat } from "./StatTypes";
import { Bond } from "./BondTypes";
import { Companion, Path, Ritual, Talent } from "./AssetTypes";

export interface Gauge {
  name: string;
  description: string;
  min: number;
  max: number;
  current: number;
  reset: number;
}


export interface Condition {
  name: string;
  active: boolean;
  description: string;
}

export interface Bane extends Condition {
  manifesting: string;
}

export interface Burden extends Condition {
  manifesting: string;
  relatedVow: Vow | undefined;
}

export interface Equipment {
  name: string;
  description: string;
}

export interface IronswornCharacter {
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
}
