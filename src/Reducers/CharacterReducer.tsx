import { Game } from "../Classes/Game";
import { GamesAction } from "../Types/GameTypes";
import { VowsAction } from "../Types/VowTypes";
import bondsReducer from "./BondsReducer";
import companionsReducer from "./CompanionsReducer";
import pathsReducer from "./PathsReducer";
import ritualsReducer from "./RitualsReducer";
import statsReducer from "./StatsReducer";
import talentsReducer from "./TalentsReducer";
import vowsReducer from "./VowsReducer";

export default function characterReducer(
  character: Game,
  action: GamesAction
): Game {
  switch (action.type) {
    case "updated_character": {
      const { payload } = action;

      return new Game({
        ...character,
        name: payload.name,
        worldName: payload.worldName,
        description: payload.description,
      });
    }

    case "added_companion":
    case "updated_companion":
    case "deleted_companion": {
      return new Game({
        ...character,
        companions: companionsReducer(character.companions, action),
      });
    }

    case "added_path":
    case "updated_path":
    case "deleted_path": {
      return new Game({
        ...character,
        paths: pathsReducer(character.paths, action),
      });
    }

    case "added_talent":
    case "updated_talent":
    case "deleted_talent": {
      return new Game({
        ...character,
        talents: talentsReducer(character.talents, action),
      });
    }

    case "added_ritual":
    case "updated_ritual":
    case "deleted_ritual": {
      return new Game({
        ...character,
        rituals: ritualsReducer(character.rituals, action),
      });
    }

    case "added_bond":
    case "updated_bond":
    case "deleted_bond": {
      return new Game({
        ...character,
        bonds: bondsReducer(character.bonds, action),
      });
    }

    case "updated_stat": {
      return new Game({
        ...character,
        stats: statsReducer(character.stats, action),
      });
    }

    case "updated_vow":
    case "added_vow":
    case "deleted_vow": {
      return new Game({
        ...character,
        vows: vowsReducer(character.vows, action as VowsAction),
      });
    }

    default: {
      console.warn(`Unknown action: ${action.type}`);
      return character;
    }
  }
}
