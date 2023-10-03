import { Talent, TalentsAction } from "../Types/AssetTypes";

export default function talentsReducer(talents: Array<Talent>, action: TalentsAction) {
  switch (action.type) {
    case "added_talent": {
      return [...talents, action.payload]
    }
    case "deleted_talent": {
      return talents.filter((talent) => talent.type !== action.payload.type)
    }
    case "updated_talent": {
      const returnVal = talents.map((talent) => {
        if (talent.type === action.payload.type) {
          return action.payload
        }
        return talent
      })
      return returnVal
    }
    default: {
      return talents
    }
  }
}