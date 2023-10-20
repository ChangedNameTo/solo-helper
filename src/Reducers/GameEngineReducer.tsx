import { Game } from "../Classes/Game";
import { GameEngine } from "../Classes/GameEngine";
import gameReducer from "./GameReducer";

export interface GameEngineAction {
  type: string;
  payload?: any;
}

export default function gameEngineReducer(
  gameEngine: GameEngine,
  action: GameEngineAction
): GameEngine {
  switch (action.type) {
    case "add_game": {
      const newGame = new Game({});

      const newMap = new Map(gameEngine.getGamesMap());
      newMap.set(newGame.getID(), newGame);

      return new GameEngine({ ...gameEngine, gamesMap: newMap });
    }
    case "delete_game": {
      const newMap = new Map(gameEngine.getGamesMap());
      newMap.delete(action.payload);

      return new GameEngine({
        ...gameEngine,
        gamesMap: newMap,
      });
    }
    case "select_game": {
      if (gameEngine.getGamesMap().has(action.payload)) {
        const data = { ...gameEngine, selectedGame: action.payload };

        return new GameEngine(data);
      }
      throw new Error("Game not found");
    }
    case "deselect_game": {
      return new GameEngine({ ...gameEngine, selectedGame: undefined });
    }
    case "select_system": {
      const currentGame = gameEngine.getSelectedGame();

      if (currentGame) {
        const system = gameEngine.getSystemByName(action.payload);
        const newGame = gameReducer(currentGame, {
          ...action,
          payload: system,
        });

        const newMap = new Map(gameEngine.getGamesMap());
        newMap.set(newGame.getID(), newGame);

        return new GameEngine({
          ...gameEngine,
          gamesMap: newMap,
        });
      }
      throw new Error("No game selected");
    }
    // All of the methods for updating a character go here
    default: {
      console.warn(`Unknown action: ${action.type}`);
      return gameEngine;
    }
  }
}
