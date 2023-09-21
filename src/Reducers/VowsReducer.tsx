import { VowsAction } from "../Types/VowTypes"

export default function VowsReducer(vows, action: VowsAction) {
  switch (action.type) {
    case "added": {
      if (!action.text.length) {
        return vows
      }

      const newVow = {
      }

      return [...vows, newVow]
    }
    default: {
      throw Error("Unknown action: " + action.type)
    }
  }
}