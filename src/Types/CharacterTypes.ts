import { GamesAction } from "./GameTypes";
import { Vow } from "./VowTypes";
import { Stat } from "./StatTypes";
import { Bond } from "./BondTypes";
import { Companion, Path, Ritual, Talent } from "./AssetTypes";

export interface CharactersAction extends GamesAction{
  type: string;
  payload: Partial<IronswornCharacter>;
}

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
  gauges: Array<Gauge>;
  stats: Array<Stat>;
  vows: Map<string, Vow>;
  bonds: Map<string, Bond>;
  conditions: Array<Condition>;
  banes: Array<Bane>;
  burdens: Array<Burden>;
  companions: Array<Companion>;
  paths: Array<Path>;
  talents: Array<Talent>;
  rituals: Array<Ritual>;
  equipment: Array<Equipment>;
  date: number;
}
