import { blankCharacter } from "../Characters/DefaultCharacter"
import { GamesAction } from "../Types/GameTypes"

export default function gameReducer(games, action:GamesAction) {
  switch (action.type) {
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