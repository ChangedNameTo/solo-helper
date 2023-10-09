import { Talent, TalentsAction } from "../Types/AssetTypes";
import { IronswornCharacter } from "../Types/CharacterTypes";

export default function talentsReducer(
  talents: IronswornCharacter["talents"],
  action: TalentsAction
) {
  switch (action.type) {
    case "added_talent": 
    case "updated_talent": {
      return talents.set(action.payload.type, action.payload)
    }
    case "deleted_talent": {
      talents.delete(action.payload.type);
      return talents;
    }
    default: {
      return talents;
    }
  }
}
