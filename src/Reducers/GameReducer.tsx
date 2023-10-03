import { blankCharacter } from "../Characters/DefaultCharacter"
import { CharactersAction } from "../Types/CharacterTypes";
import { GamesAction } from "../Types/GameTypes"
import characterReducer from "./CharacterReducer";

export default function gameReducer(games, action: GamesAction) {
  const updatedGameObject = (updatedCharacter) => {
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
      const character = games.gamesMap.get(action.gameID)

      if (!character) {
        console.error('Missing character')
        return games
      }

      const updatedCharacter = characterReducer(character, action as CharactersAction)

      return updatedGameObject(updatedCharacter)
    }
    case "added_character": {
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