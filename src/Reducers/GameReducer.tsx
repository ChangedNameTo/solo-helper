import { Game } from "../Classes/Game";
import { GameEngine } from "../Classes/GameEngine";

export interface GameAction {
  type: string;
}

export default function gameReducer(
  games: GameEngine,
  action: GameAction
): GameEngine {
  switch (action.type) {
    case "add_game": {
      const newGame = new Game("Placeholder");

      const newMap = new Map(games.gamesMap);
      newMap.set(newGame.getID(), newGame);

      return new GameEngine({ gamesMap: newMap});
    }
    // All of the methods for updating a character go here
    default: {
      console.warn(`Unknown action: ${action.type}`);
      return games;
    }
  }
}
