import { CharactersAction } from "./CharacterTypes";

export interface CompanionsAction extends CharactersAction {
  payload:Partial<Companion>
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
