import { blankCharacter } from "../Characters/DefaultCharacter";
import { Game } from "../Classes/Game";
import { GameEngine } from "../Classes/GameEngine";
import { GamesAction } from "../Types/GameTypes";
import characterReducer from "./CharacterReducer";

export default function gameReducer(
  games: GameEngine,
  action: GamesAction
): GameEngine {
  switch (action.type) {
    // All of the methods for updating a character go here
    case "updated_character":

    case "added_vow":
    case "updated_vow":

    case "added_bond":
    case "updated_bond":

    case "added_companion":
    case "updated_companion":
    case "deleted_companion":

    case "added_path":
    case "updated_path":
    case "deleted_path":

    case "added_talent":
    case "updated_talent":
    case "deleted_talent":

    case "added_ritual":
    case "updated_ritual":
    case "deleted_ritual":

    case "updated_stat": {
      // Make sure the game exists
      const character = games.gamesMap.get(action.gameID);

      if (!character) {
        console.error("Missing character");
        return games;
      }

      const updatedCharacter = characterReducer(character, action );
     
      return new GameEngine({
        gamesMap: games.gamesMap.set(action.gameID, updatedCharacter),
        selectedGame: games.selectedGame,
      })
    }
    case "added_character": {
      const newCharacter = blankCharacter;
      newCharacter.id = action.gameID;

      const newGamesMap = new Map([
        ...games.gamesMap,
        [newCharacter.id, newCharacter as Game],
      ]);

      return new GameEngine({
        gamesMap: newGamesMap,
        selectedGame: games.selectedGame,
      });
    }
    case "deleted": {
    }
    case "selected": {
      return new GameEngine({
        gamesMap: games.gamesMap,
        selectedGame: action.gameID,
      });
    }
    default: {
      console.warn(`Unknown action: ${action.type}`);
      return games;
    }
  }
}
