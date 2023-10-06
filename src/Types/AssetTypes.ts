import { CharactersAction } from "./CharacterTypes";

export interface CompanionsAction extends CharactersAction {
  payload: Partial<Companion>;
}

export interface PathsAction extends CharactersAction {
  payload: Partial<Path>;
}

export interface TalentsAction extends CharactersAction {
  payload: Partial<Talent>;
}

export interface RitualsAction extends CharactersAction {
  payload: Partial<Ritual>;
}

export interface Asset {
  name: string;
  class: string;
  description: string;
  active: boolean;
}

export interface Ability {
  name: string;
  type: string;
  description: string;
  active: boolean;
}

export interface Companion extends Asset {
  abilities: Array<Ability>;
  health: {
    min: number;
    max: number;
    current: number;
    reset: number;
  };
}

export interface Path {
  abilities: Array<Ability>;
}

export interface Talent {
  abilities: Array<Ability>;
  requirement: string;
}

export interface Ritual {
  abilities: Array<Ability>;
}
