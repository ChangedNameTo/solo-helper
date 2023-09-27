import { Vow, VowsAction } from "../Types/VowTypes"

export default function vowsReducer(vows: Map<string, Vow>, action: VowsAction) {
  switch (action.type) {
    case "updated_vow": {
      const { vowID, payload } = action as VowsAction

      const vow = vows.get(vowID)

      // If no vow exists, nothing to update
      if (!vow) {
        return vows
      }

      return vows.set(vowID, payload) 
    }
    default: {
      return vows
    }
  }
}