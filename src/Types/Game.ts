import GameSystem from "./GameSystem";

export default interface Game {
  id: string;
  name: string;
  system: GameSystem | undefined
}