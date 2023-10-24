import { GameSystem } from "../Store";
import BaseCharacter from "./Character";

export default interface Game {
  id: string;
  name: string;
  system: GameSystem | undefined
  character: BaseCharacter;
}