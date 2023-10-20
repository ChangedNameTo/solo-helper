import _ from "lodash";
import game_names from "../assets/game_names.json";
import { GameSystem } from "./GameSystem";

interface GameData {
  id?: string;
  name?: string;
  system?: GameSystem;
}

export class Game {
  id: string;
  name: string;
  system: GameSystem | undefined;

  constructor(data: GameData) {
    this.id = data.id || _.uniqueId("game_");
    this.name = data.name || this.getRandomName();
    this.system = data.system;
  }

  getID(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getSystem(): GameSystem | undefined {
    return this.system;
  }

  getSystemName(): string {
    return this.system?.getName() || "No system selected";
  }

  private getRandomName(): string {
    const randomIndex = Math.floor(Math.random() * game_names.length);
    return game_names[randomIndex];
  }
}
