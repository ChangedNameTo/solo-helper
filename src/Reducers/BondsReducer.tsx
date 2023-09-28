import { Bond, BondsAction } from "../Types/BondTypes";

export default function bondsReducer(
  bonds: Map<string, Bond>,
  action: BondsAction
) {
  const { bondID, payload } = action as BondsAction;

  switch (action.type) {
    case "updated_bond": {
      const bond = bonds.get(bondID);

      // If no bond exists, nothing to update
      if (!bond) {
        return bonds;
      }

      return bonds.set(bondID, payload);
    }
    case "added_bond": {
      return bonds.set(bondID, payload);
    }
    default: {
      return bonds;
    }
  }
}
