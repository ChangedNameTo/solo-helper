import { IronswornCharacter } from "./CharacterTypes";

export interface GamesAction {
  type: string;
  gameID: string;
}

export interface Games {
  gamesMap: Map<string, IronswornCharacter>;
  selectedGame: string;
  currentGame():IronswornCharacter
}

export interface Game {
  gameID: string;
  name: string;
}
