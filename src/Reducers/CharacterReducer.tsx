import { CompanionsAction, PathsAction } from "../Types/AssetTypes";
import { BondsAction } from "../Types/BondTypes";
import { CharactersAction } from "../Types/CharacterTypes";
import { StatsAction } from "../Types/StatTypes";
import { VowsAction } from "../Types/VowTypes";
import bondsReducer from "./BondsReducer";
import companionsReducer from "./CompanionsReducer";
import pathsReducer from "./PathsReducer";
import statsReducer from "./StatsReducer";
import vowsReducer from "./VowsReducer";

export default function characterReducer(character, action: CharactersAction) {
  switch (action.type) {
    case "updated_character": {
      const { payload } = action;

      return {
        ...character,
        name: payload.name,
        worldName: payload.worldName,
        description: payload.description,
      };
    }
      
    case "added_companion":
    case "updated_companion":
    case "deleted_companion": {
      return {...character, companions:companionsReducer(character.companions, action as CompanionsAction)}
    }
     
    case "added_path":
    case "updated_path":
    case "deleted_path": {
      return {...character, paths:pathsReducer(character.paths, action as PathsAction)}
    }
      
    case "added_bond":
    case "updated_bond":
    case "deleted_bond": {
      return {...character, bonds:bondsReducer(character.bonds, action as BondsAction)}
    }

    case "updated_stat": {
      return { ...character, stats: statsReducer(character.stats, action as StatsAction) };
    }

    case "updated_vow":
    case "added_vow":
    case "deleted_vow": {
      return { ...character, vows: vowsReducer(character.vows, action as VowsAction) };
    }

    default: {
      return character;
    }
  }
}
