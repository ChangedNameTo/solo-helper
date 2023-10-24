import _ from "lodash";
import { v4 as uuidv4 } from 'uuid';
import { create } from "zustand";
import { persist, StorageValue } from "zustand/middleware";
import { produce } from "immer";

import systems from "./assets/systems.json";
import Game from "./Types/Game";
import GameSystem from "./Types/GameSystem";

type GameEngineState = {
  games: Map<string, Game>;
  selectedGame: string | undefined;
  gameSystems: Map<string, GameSystem>;
  getGameById: (id: string) => Game | undefined;
  isGameSelected: () => boolean;
  getSelectedGame: () => Game | undefined;
  getGamesArray: () => Game[];
  getGameID: (game: Game) => string | undefined;
  getCurrentSystemName: () => string | undefined;
  selectGame: (gameID: string) => void;
  deselectGame: () => void;
  addGame: () => void;
  deleteGame: (gameID: string) => void;
  getSystemsArray: () => GameSystem[];
  selectSystem: (systemID: string) => void;
};

const useGameEngineStore = create<GameEngineState>()(
  persist(
    (set, get) => ({
      games: new Map<string, Game>(),
      selectedGame: undefined,
      gameSystems: new Map<string, GameSystem>(),

      getGameById: (id: string) => get().games.get(id),
      isGameSelected: () => get().selectedGame !== undefined,
      getSelectedGame: () => {
        if (!get().selectedGame) return undefined;
        console.log(get().games);
        return get().games.get(get().selectedGame!);
      },
      getGamesArray: () => Array.from(get().games.values()),
      getGameID: (game: Game) => {
        return get().games.get(game.id)?.id;
      },
      getCurrentSystemName: () => {
        const selectedGame = get().getSelectedGame();

        if (!selectedGame) return undefined;
        const systemID = selectedGame?.system?.id;
        return systemID ? get().gameSystems.get(systemID)?.name : undefined;
      },

      selectGame: (gameID: string) => set({ selectedGame: gameID }),
      deselectGame: () => set({ selectedGame: undefined }),

      addGame: () =>
        set((state) =>
          produce(state, (draft) => {
            const game = {
              id:uuidv4(),
              name: "New Game",
              system: undefined,
            };

            draft.games.set(game.id, game);
          })
        ),

      deleteGame: (gameID: string) =>
        set((state) =>
          produce(state, (draft) => {
            draft.games.delete(gameID);
          })
        ),

      getSystemsArray: () => Array.from(get().gameSystems.values()),
      selectSystem: (systemID) => {
        set((state) =>
          produce(state, (draft) => {
            const selectedGame = get().getSelectedGame();
            if (!selectedGame) return;
            const game = draft.games.get(selectedGame.id);
            if (!game) return;
            console.log(state.gameSystems);
            console.log(systemID);
            const system = state.gameSystems.get(systemID)
            console.log(system);
            game.system = system;
          })
        );
      },
    }),
    {
      name: "game-engine-storage", // name of the item in the storage (must be unique)
      storage: {
        getItem: (name) => {
          const str = localStorage.getItem(name);
          if (!str) return null;
          const { state } = JSON.parse(str);
          return {
            state: {
              ...state,
              games: new Map(state.games),
              gameSystems: new Map(state.gameSystems),
              selectedGame: state.selectedGame,
            },
          };
        },
        setItem: (name, newValue: StorageValue<GameEngineState>) => {
          const str = JSON.stringify({
            state: {
              ...newValue.state,
              games: Array.from(newValue.state.games.entries()),
              gameSystems: Array.from(newValue.state.gameSystems.entries()),
              selectedGame: newValue.state.selectedGame,
            },
          });
          localStorage.setItem(name, str);
        },
        removeItem: (name) => localStorage.removeItem(name),
      }, // (optional) by default, 'localStorage' is used
    }
  )
);

interface SystemData {
  id: string;
  name: string;
  description: string;
}

useGameEngineStore.setState((state) => {
  const gameSystems = new Map<string, GameSystem>();
  
  systems.forEach((system:SystemData) => {
    gameSystems.set(system.id, system);
  });
  return { ...state, gameSystems };
})

export default useGameEngineStore;
