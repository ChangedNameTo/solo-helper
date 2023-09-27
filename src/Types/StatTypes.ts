import { CharactersAction } from "./CharacterTypes";

export interface StatsAction extends CharactersAction {
  stat: Stat;
  value: number;
}

export interface Stat {
  name: string;
  initials: string;
  value: number;
  description: string;
}
