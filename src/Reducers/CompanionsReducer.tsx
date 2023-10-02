import { Companion, CompanionsAction } from "../Types/AssetTypes";

export default function companionsReducer(companions: Array<Companion>, action: CompanionsAction) {
  switch (action.type) {
    case "added_companion": {
      return [...companions, action.payload]
    }
    case "deleted_companion": {
      return companions.filter((companion) => companion.type !== action.payload.type)
    }
    default: {
      return companions
    }
  }
}