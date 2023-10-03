import { CompanionsAction, PathsAction, RitualsAction, TalentsAction } from "../Types/AssetTypes";
import { BondsAction } from "../Types/BondTypes";
import { CharactersAction } from "../Types/CharacterTypes";
import { StatsAction } from "../Types/StatTypes";
import { VowsAction } from "../Types/VowTypes";
import bondsReducer from "./BondsReducer";
import companionsReducer from "./CompanionsReducer";
import pathsReducer from "./PathsReducer";
import ritualsReducer from "./RitualsReducer";
import statsReducer from "./StatsReducer";
import talentsReducer from "./TalentsReducer";
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
    
    case "added_talent":
    case "updated_talent":
    case "deleted_talent": {
      return {...character, talents:talentsReducer(character.talents, action as TalentsAction)}
    }
    
    case "added_ritual":
    case "updated_ritual":
    case "deleted_ritual": {
      return {...character, rituals:ritualsReducer(character.rituals, action as RitualsAction)}
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
      console.warn(`Unknown action: ${action.type}`)
      return character;
    }
  }
}
