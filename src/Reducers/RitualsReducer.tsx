import { Ritual, RitualsAction } from "../Types/AssetTypes";

export default function ritualsReducer(rituals: Array<Ritual>, action: RitualsAction) {
  switch (action.type) {
    case "added_ritual": {
      return [...rituals, action.payload]
    }
    case "deleted_ritual": {
      return rituals.filter((ritual) => ritual.type !== action.payload.type)
    }
    case "updated_ritual": {
      const returnVal = rituals.map((ritual) => {
        if (ritual.type === action.payload.type) {
          return action.payload
        }
        return ritual
      })
      return returnVal
    }
    default: {
      return rituals
    }
  }
}