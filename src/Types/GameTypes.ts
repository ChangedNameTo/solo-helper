export interface GameAction {
  type: string;
  gameID: string;
}

export interface Games {
  games: Array<Game>;
}

export interface Game {
  gameID: string;
  name: string;
}
