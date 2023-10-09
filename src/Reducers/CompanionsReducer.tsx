import { Companion, CompanionsAction } from "../Types/AssetTypes";
import { IronswornCharacter } from "../Types/CharacterTypes";

export default function companionsReducer(
  companions: IronswornCharacter["companions"],
  action: CompanionsAction
) {
  const payload = action.payload as Companion;

  switch (action.type) {
    case "added_companion":
    case "updated_companion": {
      return companions.set(payload.type, payload);
    }
    case "deleted_companion": {
      companions.delete(payload.type);
      return companions;
    }
    default: {
      console.warn(`Unknown action: ${action.type}`);
      return companions;
    }
  }
}
