import { Stat, StatsAction } from "../Types/StatTypes"

export default function statsReducer(stats:Array<Stat>, action: StatsAction) {
  switch (action.type) {
    case "updated_stat": {
      // Type cast and extract values
      const { stat, value } = action as StatsAction

      // Look for our stat
      const foundStatIndex = stats.findIndex((arrStats) => arrStats.initials === stat.initials)
      const foundStat = stats[foundStatIndex]

      // Update the object
      const newStat = {
        ...foundStat,
        value:value
      }

      // Update the state
      return stats.with(foundStatIndex, newStat)
    }
    default: {
      return stats
      }
  }
}