import { blankCharacter } from "../Characters/DefaultCharacter"
import { GamesAction } from "../Types/GameTypes"
import { VowsAction } from "../Types/VowTypes";

export default function gameReducer(games, action:GamesAction) {
  switch (action.type) {
    case "updated_vow": {
      console.log('hi')
      const { vowID, payload } = action as VowsAction;

      // Make sure the game exists
      const game = games.gamesMap.get(action.gameID)

      if (!game) {
        return games
      }

      // Make sure the vow exists
      const vow = game.vows.get(vowID)

      if (!vow) {
        return games
      }

      const newVowsMap = new Map(game.vows)
      newVowsMap.set(vowID, payload)

      const updatedGame = {
        ...game,
        vows:newVowsMap
      }

      const newGamesMap = new Map([
        ...games.gamesMap,
        [action.gameID, updatedGame]
      ])

      const newGamesObject = {
        ...games,
        gamesMap: newGamesMap
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