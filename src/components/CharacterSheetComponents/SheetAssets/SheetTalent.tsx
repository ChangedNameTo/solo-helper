import {
  AssetActionTypes,
  RenderedAsset,
} from "../../../Types/AssetTypes";

export default function SheetTalent({ talent }) {
  const handleUpdateTalentPayload = (abilityDescription) => {
    return {
      type: "updated_talent",
      payload: {
        ...talent,
        abilities: talent.abilities.map((ability) => {
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

  const handleAddTalentPayload = () => {
    return {
      type: "added_talent",
      payload: { ...talent, active: true },
    } as Partial<AssetActionTypes>;
  };

  const handleRemoveTalentPayload = () => {
    return {
      type: "deleted_talent",
      payload: { ...talent, active: false },
    } as Partial<AssetActionTypes>;
  };

  return {
    name: talent.name,
    class: talent.class,
    active: talent.active,
    level: talent.level,
    type: talent.type,
    description: talent.description,
    abilities: talent.abilities,
    health: talent.health,
    handleUpdateAssetPayload: (abilityDescription) =>
      handleUpdateTalentPayload(abilityDescription),
    handleAddAssetPayload: handleAddTalentPayload,
    handleRemoveAssetPayload: handleRemoveTalentPayload,
  } as RenderedAsset;
}
