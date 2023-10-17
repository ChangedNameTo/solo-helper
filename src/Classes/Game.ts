import _ from "lodash";
export class Game {
  id: string;
  name: string;

  constructor(name: string) {
    this.id = _.uniqueId("game_");
    this.name = name;
  }

  getID(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }
}
