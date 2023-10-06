import {
  AssetActionTypes,
  RenderedAsset,
} from "../../../Types/AssetTypes";

export default function SheetCompanion({ companion }) {
  const gaugeWidth =
    (companion.health.current / (companion.health.max - companion.health.min)) *
    100+"%";

  const handleUpdateCompanionPayload = (abilityDescription) => {
    return {
      type: "updated_companion",
      payload: {
        ...companion,
        abilities: companion.abilities.map((ability) => {
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

  const handleAddCompanionPayload = () => {
    return {
      type: "added_companion",
      payload: { ...companion, active: true },
    } as Partial<AssetActionTypes>;
  };

  const handleRemoveCompanionPayload = () => {
    return {
      type: "deleted_companion",
      payload: { ...companion, active: false },
    } as Partial<AssetActionTypes>;
  };

  return {
    name: companion.name,
    class: companion.class,
    active: companion.active,
    level: companion.level,
    type: companion.type,
    description: companion.description,
    abilities: companion.abilities,
    health: companion.health,
    gaugeWidth: gaugeWidth,
    handleUpdateAssetPayload: (abilityDescription) =>
      handleUpdateCompanionPayload(abilityDescription),
    handleAddAssetPayload: handleAddCompanionPayload,
    handleRemoveAssetPayload: handleRemoveCompanionPayload,
  } as RenderedAsset;
}
