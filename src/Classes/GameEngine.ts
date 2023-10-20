import { Ironsworn } from "../Systems/Ironsworn";
import { Pathbound } from "../Systems/Pathbound";
import { Radiant } from "../Systems/Radiant";
import { Game } from "./Game";
import { GameSystem } from "./GameSystem";

interface GameEngineData {
  gamesMap?: Map<string, Game>;
  gameSystems?: Map<string, GameSystem>;
  selectedGame?: string;
}

export class GameEngine {
  private gamesMap: Map<string, Game>;
  private gameSystems: Map<string, GameSystem>;
  private selectedGame?: string;

  constructor(data: GameEngineData, initialLoad = false) {
    this.gamesMap = data.gamesMap || new Map<string, Game>();
    this.selectedGame = data.selectedGame;
    this.gameSystems = data.gameSystems || new Map<string, GameSystem>();

    if (initialLoad) {
      this.seedGames();
    }

    this.seedSystems();
  }

  saveGame(games: GameEngine): any {
    window.localStorage.setItem("games", JSON.stringify(games, this.replacer));
  }

  replacer(key: any, value: any): any {
    if (value instanceof Map) {
      return {
        dataType: "Map",
        value: Array.from(value.entries()),
      };
    } else {
      return value;
    }
  }

  reviver(key: string, value: any): any {
    if (typeof value === "object" && value !== null) {
      if (value.dataType === "Map") {
        return new Map(value.value);
      }
    }
    return value;
  }

  seedGames(): void {
    const savedGames = window.localStorage.getItem("games");
    if (savedGames) {
      const games = JSON.parse(savedGames, this.reviver);
      this.selectedGame = games.selectedGame;

      Array.from(games["gamesMap"].values()).forEach((game) => {
        const castGame = game as Game;

        const newGame = new Game({ name: castGame.name });
        this.gamesMap = this.gamesMap.set(newGame.id, newGame);
      });
    }
  }

  seedSystems(): void {
    const ironsworn = new Ironsworn();
    const radiant = new Radiant();
    const pathbound = new Pathbound();

    this.gameSystems.set(ironsworn.getName(), ironsworn);
    this.gameSystems.set(radiant.getName(), radiant);
    this.gameSystems.set(pathbound.getName(), pathbound);
  }

  getGamesMap(): Map<string, Game> {
    return this.gamesMap;
  }

  getGamesArray(): Game[] {
    return Array.from(this.gamesMap.values());
  }

  isGameSelected(): boolean {
    return this.selectedGame !== undefined;
  }

  getSystemsArray(): GameSystem[] {
    return Array.from(this.gameSystems.values());
  }

  getSystemByName(name: string): GameSystem | undefined {
    return this.gameSystems.get(name);
  }

  getSelectedGame(): Game | undefined {
    if (this.selectedGame) {
      return this.gamesMap.get(this.selectedGame);
    }
  }
}
