import { Game } from "./Game";

export class GameEngine {
  gamesMap: Map<string, Game>;
  selectedGame: string | undefined;

  constructor({
    gamesMap = new Map(),
    selectedGame = undefined,
  }, initialLoad = false) {
    this.gamesMap = gamesMap;
    this.selectedGame = selectedGame;

    if (initialLoad) {
      this.seedGames();
    }
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

  seedGames(): void {
    const savedGames = window.localStorage.getItem("games");
    // const savedGames = false;

    // Is this the first load? If so, seed the map. If not, load.
    if (savedGames) {
      const games = JSON.parse(savedGames, this.reviver);
      this.selectedGame = games.selectedGame;

      Array.from(games["gamesMap"].values()).forEach((game) => {
        const newGame = new Game(game.name);
        this.gamesMap = this.gamesMap.set(newGame.id, newGame);
      });
    }
  }

  getGamesArray() : Game[] {
    return Array.from(this.gamesMap.values());
  }

  isGameSelected(): boolean {
    return this.selectedGame !== undefined;
  }
}
