import { Game } from "./Game";

export class GameEngine {
  gamesMap: Map<string, Game>;
  selectedGame: string | undefined;

  constructor({ gamesMap = new Map() }: Partial<GameEngine> = {}) {
    this.gamesMap = gamesMap;
  }

  saveGame(games: GameEngine): any {
    window.localStorage.setItem("games", JSON.stringify(games, this.replacer));
  }

  replacer(key: any, value: any): any {
    if (value instanceof Map) {
      return {
        dataType: "Map",
        value: Array.from(value.entries()), // or with spread: value: [...value]
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

  seedGames(): GameEngine {
    // const savedGames = window.localStorage.getItem("games");
    const savedGames = false;

    // Is this the first load? If so, seed the map. If not, load.
    if (savedGames) {
      const games = JSON.parse(savedGames, this.reviver);
      this.selectedGame = games.selectedGame;

      Array.from(games["gamesMap"].values()).forEach((game) => {
        const newGame = new Game(game.name);
        this.gamesMap = this.gamesMap.set(newGame.id, newGame);
      });
    }

    return this;
  }

  getGame(): Game | undefined {
    if (!this.selectedGame) return undefined;

    return this.gamesMap.get(this.selectedGame);
  }

  getGamesMap(): Map<string, Game> {
    return this.gamesMap;
  }

  getGamesArray() {
    return Array.from(this.gamesMap.values());
  }
}
