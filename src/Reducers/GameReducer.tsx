import { blankCharacter } from "../Characters/DefaultCharacter"
import { GamesAction } from "../Types/GameTypes"
import { StatsAction } from "../Types/StatTypes";
import { VowsAction } from "../Types/VowTypes";
import characterReducer from "./CharacterReducer";

export default function gameReducer(games, action:GamesAction) {
  switch (action.type) {
    // All of the methods for updating a character go here
    case "updated_character":
    case "updated_vow":
    case "updated_stat": {
      // Make sure the game exists
      const character = games.gamesMap.get(action.gameID)

      if (!character) {
        return games
      }

      const updatedCharacter = characterReducer(character, action)


      const newGamesMap = new Map([
        ...games.gamesMap,
        [action.gameID, updatedCharacter]
      ])

      const newGamesObject = {
        ...games,
        gamesMap:newGamesMap
      }
      return newGamesObject
    }
    case "added": {
      const newCharacter = blankCharacter
      newCharacter.id = action.gameID

      const newGamesMap = new Map([
        ...games.gamesMap,
        [newCharacter.id, newCharacter]
      ])
   
      const newGames = {
        ...games,
        gamesMap:newGamesMap
      }
      
      return newGames
    }
    case "deleted": {

    }
    case "selected": {
      return {
        ...games,
        selectedGame: action.gameID
      }
    }
    default: {
      throw Error("Unknown action: " + action.type)
    }
  }
}