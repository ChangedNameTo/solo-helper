import { Path, PathsAction } from "../Types/AssetTypes";
import { IronswornCharacter } from "../Types/CharacterTypes";

export default function pathsReducer(
  paths: IronswornCharacter["paths"],
  action: PathsAction
) {
  switch (action.type) {
    case "added_path":
    case "updated_path": {
      return paths.set(action.payload.type, action.payload);
    }
    case "deleted_path": {
      paths.delete(action.payload.type);
      return paths;
    }
    default: {
      return paths;
    }
  }
}
