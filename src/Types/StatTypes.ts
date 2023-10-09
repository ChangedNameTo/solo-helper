import { GamesAction } from "./GameTypes";

export interface StatsAction extends GamesAction {
  value: number;
}

export interface Stat {
  name: string;
  initials: string;
  value: number;
  description: string;
}
