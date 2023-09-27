import { CharactersAction } from "../Types/CharacterTypes";
import { StatsAction } from "../Types/StatTypes";
import { VowsAction } from "../Types/VowTypes";
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
