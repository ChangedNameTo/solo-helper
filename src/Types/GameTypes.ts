import { IronswornCharacter } from "./CharacterTypes";

export interface GamesAction {
  type: string;
  gameID: string;
  payload: any;
}

export interface Game {
  gameID: string;
  system: string;
  name: string;
}
