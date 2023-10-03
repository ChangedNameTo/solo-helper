import { Path, PathsAction } from "../Types/AssetTypes";

export default function pathsReducer(paths: Array<Path>, action: PathsAction) {
  switch (action.type) {
    case "added_path": {
      return [...paths, action.payload]
    }
    case "deleted_path": {
      return paths.filter((path) => path.type !== action.payload.type)
    }
    case "updated_path": {
      const returnVal = paths.map((path) => {
        if (path.type === action.payload.type) {
          return action.payload
        }
        return path
      })
      return returnVal
    }
    default: {
      return paths
    }
  }
}