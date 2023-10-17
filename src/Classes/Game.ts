import _ from "lodash";
export interface GamesAction {
  type: string;
  gameID: string;
  payload: any;
}

export class Game {
  id: string;

  constructor() {
    this.id = _.uniqueId("game_");
  }

  getID(): string {
    return this.id;
  }
}
