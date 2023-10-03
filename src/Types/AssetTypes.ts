import { CharactersAction } from "./CharacterTypes";

export interface CompanionsAction extends CharactersAction {
  payload:Partial<Companion>
}

export interface PathsAction extends CharactersAction {
  payload:Partial<Path>
}

export interface TalentsAction extends CharactersAction {
  payload:Partial<Talent>
}

export interface Companion {
  active: boolean;
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
  active: boolean;
}

export interface Path {
  type: string;
  active: boolean;
  abilities: Array<Ability>;
}

export interface Talent {
  type: string;
  active: boolean;
  abilities: Array<Ability>;
  requirement: string;
}

export interface Ritual {
  name: string;
  active: boolean;
  abilities: Array<Ability>;
}
