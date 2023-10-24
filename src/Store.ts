import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { persist, StorageValue } from "zustand/middleware";
import { produce } from "immer";

import systems from "./assets/systems.json";
import Game from "./Types/Game";
import Character from "./Types/Character";

type GameEngineState = {
  games: Map<string, Game>;
  selectedGame: string | undefined;
  gameSystems: Map<string, GameSystem>;

  getGameById: (id: string) => Game | undefined;
  isGameSelected: () => boolean;
  getSelectedGame: () => Game | undefined;
  getGamesArray: () => Game[];
  getCurrentSystemName: () => string | undefined;
  selectGame: (gameID: string) => void;
  deselectGame: () => void;
  addGame: () => void;
  deleteGame: (gameID: string) => void;
  getSystemsArray: () => GameSystem[];
  selectSystem: (systemID: string) => void;
  getCurrentSystemRequirements: () => Requirement[];
  getSystemRequirements: (systemID: string) => Requirement[];
  isCharacterValid: (gameID: string) => boolean;
  meetsRequirement: (requirement: Requirement) => boolean;
  getCharacter: (gameID: string) => Character | undefined;
  getCurrentCharacter: () => Character | undefined;
  clearAll: () => void;
};

const initialGameEngineState = () => {
  const gameSystems = new Map<string, GameSystem>();

  systems.forEach((system: SystemData) => {
    gameSystems.set(system.id, system);
  });

  return {
    games: new Map<string, Game>(),
    selectedGame: undefined,
    gameSystems: gameSystems,
  };
};

const useGameEngineStore = create<GameEngineState>()(
  persist(
    (set, get) => ({
      ...initialGameEngineState(),
      getGameById: (id: string) => get().games.get(id),
      isGameSelected: () => get().selectedGame !== undefined,
      getSelectedGame: () => {
        if (!get().selectedGame) return undefined;
        return get().games.get(get().selectedGame!);
      },
      getGamesArray: () => Array.from(get().games.values()),
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
              id: uuidv4(),
              name: "New Game",
              system: undefined,
              character: {
                name: "",
                description: "",
              },
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
            const system = state.gameSystems.get(systemID);
            game.system = system;
          })
        );
      },

      getCurrentSystemRequirements: () => {
        return get().getSelectedGame()?.system?.requirements || [];
      },

      getSystemRequirements(systemID: string) {
        return get().gameSystems.get(systemID)?.requirements || [];
      },

      isCharacterValid(gameID: string) {
        const game = get().games.get(gameID);
        if (!game) return false;
        const system = get().gameSystems.get(game.system?.id || "");
        if (!system) return false;

        const requirements = system.requirements;
        const character = game.character;

        return false;
      },

      meetsRequirement(requirement: Requirement) {
        const game = get().getSelectedGame();

        switch (requirement.type) {
          case "Name": {
            return game?.character?.name !== "";
          }
          default: {
            throw new Error(`Unknown requirement type: ${requirement.type}`);
          }
        }
      },

      getCurrentCharacter() {
        const game = get().getSelectedGame();
        return game?.character;
      },

      getCharacter(gameID) {
        const game = get().games.get(gameID);
        return game?.character;
      },
      clearAll: () => set(initialGameEngineState),
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

interface Requirement {
  id: string;
  type: string;
  description: string;
}

interface SystemData {
  id: string;
  name: string;
  description: string;
  requirements: Requirement[];
}

export interface GameSystem {
  id: string;
  name: string;
  description: string;
  requirements: Requirement[];
}

export default useGameEngineStore;
