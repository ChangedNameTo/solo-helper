import { Vow } from "./VowTypes";

export interface CharactersAction {
  type:string
}

export interface Gauge {
  name: string;
  description: string;
  min: number;
  max: number;
  current: number;
  reset: number;
}

export interface Stat {
  name: string;
  initials: string;
  value: number;
  description: string;
}

export interface Bond {
  name: string;
  description: string;
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

export interface Companion {
  type: string;
  name: string;
  description: string;
  abilities: Array<Ability>;
  health: {
    min: number;
    max: number;
    current: number;
    reset: number;
  };
}

export interface Ability {
  name: string;
  description: string;
  starting: boolean;
  active: boolean;
}

export interface Path {
  name: string;
  active: boolean;
  abilities: Array<Ability>;
}

export interface Talent {
  name: string;
  active: boolean;
  abilities: Array<Ability>;
  requirement: string;
}

export interface Ritual {
  name: string;
  active: boolean;
  abilities: Array<Ability>;
}

export interface Equipment {
  name: string;
  description: string;
}

export interface IronswornCharacter {
  name: string;
  id: string;
  worldName: string;
  experience: {
    min: number;
    spent: number;
    current: number;
    max: number;
  };
  gauges: Array<Gauge>;
  stats: Array<Stat>;
  vows: Map<string, Vow>;
  bonds: {
    bonds: Array<Bond>;
    max: number;
  };
  conditions: Array<Condition>;
  banes: Array<Bane>;
  burdens: Array<Burden>;
  companions: Array<Companion>;
  paths: Array<Path>;
  talents: Array<Talent>;
  rituals: Array<Ritual>;
  equipment: Array<Equipment>;
  date:number
}
