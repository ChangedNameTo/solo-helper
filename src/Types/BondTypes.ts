import { GamesAction } from "./GameTypes";

export interface BondsAction extends GamesAction {
  payload:Partial<Bond>
}

export interface Bond {
  id: string;
  name: string;
  description: string;
}