import { Ritual, RitualsAction } from "../Types/AssetTypes";
import { IronswornCharacter } from "../Types/CharacterTypes";

export default function ritualsReducer(rituals: IronswornCharacter["rituals"], action: RitualsAction):IronswornCharacter["rituals"] {
  switch (action.type) {
    case "added_ritual": 
    case "updated_ritual": {
      return rituals.set(action.payload.type, action.payload)
    }
    case "deleted_ritual": {
      rituals.delete(action.payload.type)
      return rituals
    }
    default: {
      return rituals
    }
  }
}