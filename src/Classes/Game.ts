import _, { get } from "lodash";
import game_names from "../assets/game_names.json";

export class Game {
  id: string;
  name: string;

  constructor(name: string) {
    this.id = _.uniqueId("game_");
    this.name = this.getRandomName();
  }

  getID(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  private getRandomName(): string {
    const randomIndex = Math.floor(Math.random() * game_names.length);
    return game_names[randomIndex];
  }
}
