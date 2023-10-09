import * as React from "react";
import { testCharacter } from "../Characters/IronswornCharacter";
import gameReducer from "../Reducers/GameReducer";
import { IronswornCharacter } from "../Types/CharacterTypes";
import { Game } from "./Game";
import { GamesAction } from "../Types/GameTypes";

export class GameEngine {
  gamesMap: Map<string, Game>;
  selectedGame: string;

  constructor({
    gamesMap = new Map(),
    selectedGame = "",
  }: Partial<GameEngine> = {}) {
    this.gamesMap = gamesMap;
    this.selectedGame = selectedGame;
  }

  getAppValues(): [GameEngine, React.Dispatch<GamesAction>] {
    return React.useReducer(gameReducer, this.seedGames());
  }

  loadSaveGames(): any {}

  saveGame(games: GameEngine): any {
    window.localStorage.setItem("games", JSON.stringify(games, this.replacer));
  }

  replacer(key, value): any {
    if (value instanceof Map) {
      return {
        dataType: "Map",
        value: Array.from(value.entries()), // or with spread: value: [...value]
      };
    } else {
      return value;
    }
  }

  reviver(key, value): any {
    if (typeof value === "object" && value !== null) {
      if (value.dataType === "Map") {
        return new Map(value.value);
      }
    }
    return value;
  }

  seedGames(): GameEngine {
    const savedGames = window.localStorage.getItem("games");
    // const savedGames = false;

    // Is this the first load? If so, seed the map. If not, load.
    if (savedGames) {
      const games = JSON.parse(savedGames, this.reviver);
      this.selectedGame = games.selectedGame

      Array.from(games["gamesMap"].values()).forEach((game) => { 
        const newGame = new Game(game);
        this.gamesMap = this.gamesMap.set(newGame.id, newGame);
      });
    } else {
      const newCharacter = new Game();
      newCharacter.loadTestCharacter();
      this.gamesMap = this.gamesMap.set(newCharacter.id, newCharacter);
    }

    return this;
  }

  getGame(): Game | undefined {
    const game = this.gamesMap.get(this.selectedGame);
    return game;
  }
}
