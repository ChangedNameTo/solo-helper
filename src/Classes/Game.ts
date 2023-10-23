import game_names from "../assets/game_names.json";
import _ from "lodash";
import {v4 as uuidv4} from "uuid";
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
    // this.id = data.id || uuidv4()
    this.id = data.id || this.getUniqueID()
    console.log("Game ID: " + this.id);

    this.name = data.name || this.getRandomName();
    this.system = data.system;
  }

  getUniqueID(): string {
    console.log('Getting unique ID')
    let id = _.uniqueId("game_");
    return id
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
