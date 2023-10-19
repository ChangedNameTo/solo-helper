import _ from "lodash";
import game_names from "../assets/game_names.json";
import { GameSystem } from "./GameSystem";

export class Game {
  id: string;
  name: string;
  system: GameSystem | undefined;

  constructor(name?: string) {
    this.id = _.uniqueId("game_");
    this.name = name || this.getRandomName();
  }

  getID(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getSystemName(): string {
    return this.system?.getName() || "No system selected";
  }

  private getRandomName(): string {
    const randomIndex = Math.floor(Math.random() * game_names.length);
    return game_names[randomIndex];
  }
}
