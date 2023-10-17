import { GameEngine } from "../Classes/GameEngine";

export default function gameReducer(
  games: GameEngine,
  action 
): GameEngine {
  switch (action.type) {
    // All of the methods for updating a character go here
    default: {
      console.warn(`Unknown action: ${action.type}`);
      return games;
    }
  }
}
