export default function gameReducer(games, action) {
  switch (action.type) {
    case "added": {

    }
    case "deleted": {

    }
    case "selected": {
      console.log(action.gameID)
      return {
        ...games,
        selectedGame: games.games[action.gameID]
      }
    }
    default: {
      throw Error("Unknown action: " + action.type)
    }
  }
}