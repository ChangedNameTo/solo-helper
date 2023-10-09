import { Game } from "../Classes/Game";
import { Stat, StatsAction } from "../Types/StatTypes";

export default function statsReducer(
  stats: Game["stats"],
  action: StatsAction
): Game["stats"] {
  switch (action.type) {
    case "updated_stat": {
      return stats.set(action.payload.name, {...action.payload, value: action.value});
    }
    default: {
      return stats;
    }
  }
}
