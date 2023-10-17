import { Game } from "../Classes/Game";
import { GameEngine } from "../Classes/GameEngine";

export interface GameAction {
  type: string;
  payload?: any;
}

export default function gameReducer(
  gameEngine: GameEngine,
  action: GameAction
): GameEngine {
  switch (action.type) {
    case "add_game": {
      const newGame = new Game("Placeholder");

      const newMap = new Map(gameEngine.gamesMap);
      newMap.set(newGame.getID(), newGame);

      return new GameEngine({ gamesMap: newMap });
    }
    case "delete_game": {
      const newMap = new Map(gameEngine.gamesMap);
      newMap.delete(action.payload);

      return new GameEngine({ gamesMap: newMap });
    }
    case "select_game": {
      if (gameEngine.gamesMap.has(action.payload)) {
        console.log("hi");
        console.log(action.payload);
        return new GameEngine({ ...gameEngine, selectedGame: action.payload });
      }
      throw new Error("Game not found");
    }
    case "deselect_game": {
      return new GameEngine({ ...gameEngine, selectedGame: undefined });
    }
    // All of the methods for updating a character go here
    default: {
      console.warn(`Unknown action: ${action.type}`);
      return gameEngine;
    }
  }
}
