import { Game } from "../Classes/Game";

export interface GameAction {
  type: string;
  payload?: any;
}

export default function gameReducer(game: Game, action: GameAction): Game {
  switch (action.type) {
    case "select_system": {
      const newGame = new Game({
        ...game,
        system: action.payload,
      });
      return newGame;
    }
    default: {
      console.warn(`Unknown action: ${action.type}`);
      return game;
    }
  }
}
