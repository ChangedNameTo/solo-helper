import {
  AssetActionTypes,
  RenderedAsset,
} from "../../../Types/AssetTypes";

export default function SheetRitual({ ritual }) {
  const handleUpdateRitualPayload = (abilityDescription) => {
    return {
      type: "updated_ritual",
      payload: {
        ...ritual,
        abilities: ritual.abilities.map((ability) => {
          if (ability.description !== abilityDescription) {
            return ability;
          } else {
            return {
              ...ability,
              active: !ability.active,
            };
          }
        }),
      },
    } as Partial<AssetActionTypes>;
  };

  const handleAddRitualPayload = () => {
    return {
      type: "added_ritual",
      payload: { ...ritual, active: true },
    } as Partial<AssetActionTypes>;
  };

  const handleRemoveRitualPayload = () => {
    return {
      type: "deleted_ritual",
      payload: { ...ritual, active: false },
    } as Partial<AssetActionTypes>;
  };

  return {
    name: ritual.name,
    class: ritual.class,
    active: ritual.active,
    level: ritual.level,
    type: ritual.type,
    description: ritual.description,
    abilities: ritual.abilities,
    health: ritual.health,
    handleUpdateAssetPayload: (abilityDescription) =>
      handleUpdateRitualPayload(abilityDescription),
    handleAddAssetPayload: handleAddRitualPayload,
    handleRemoveAssetPayload: handleRemoveRitualPayload,
  } as RenderedAsset;
}
