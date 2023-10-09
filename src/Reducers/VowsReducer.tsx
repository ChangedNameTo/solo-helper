import { IronswornCharacter } from "../Types/CharacterTypes";
import { Vow, VowsAction } from "../Types/VowTypes";

export default function vowsReducer(
  vows: IronswornCharacter["vows"],
  action: VowsAction
) {
  const { vowID, payload } = action as VowsAction;

  switch (action.type) {
    case "updated_vow": {
      const vow = vows.get(vowID);

      // If no vow exists, nothing to update
      if (!vow) {
        return vows;
      }

      return vows.set(vowID, payload);
    }
    case "added_vow": {
      return vows.set(vowID, payload);
    }
    default: {
      return vows;
    }
  }
}
