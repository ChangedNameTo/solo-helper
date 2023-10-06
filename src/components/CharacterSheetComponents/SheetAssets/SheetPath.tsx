import {
  AssetActionTypes,
  RenderedAsset,
} from "../../../Types/AssetTypes";

export default function SheetPath({ path }) {
  const handleUpdatePathPayload = (abilityDescription) => {
    return {
      type: "updated_path",
      payload: {
        ...path,
        abilities: path.abilities.map((ability) => {
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

  const handleAddPathPayload = () => {
    return {
      type: "added_path",
      payload: { ...path, active: true },
    } as Partial<AssetActionTypes>;
  };

  const handleRemovePathPayload = () => {
    return {
      type: "deleted_path",
      payload: { ...path, active: false },
    } as Partial<AssetActionTypes>;
  };

  return {
    name: path.name,
    class: path.class,
    active: path.active,
    level: path.level,
    type: path.type,
    description: path.description,
    abilities: path.abilities,
    health: path.health,
    handleUpdateAssetPayload: (abilityDescription) =>
      handleUpdatePathPayload(abilityDescription),
    handleAddAssetPayload: handleAddPathPayload,
    handleRemoveAssetPayload: handleRemovePathPayload,
  } as RenderedAsset;
}
