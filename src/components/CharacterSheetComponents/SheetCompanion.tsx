import * as React from "react";
import { Switch } from "@headlessui/react";

import { classNames } from "../../assets/Helpers";
import {
  GamesContext,
  GamesDispatchContext,
} from "../../Contexts/GamesContext";
import { CompanionsAction } from "../../Types/AssetTypes";

export default function SheetCompanion({ companion }) {
  const gaugeWidth = () =>
    (companion.health.current / (companion.health.max - companion.health.min)) *
      100 +
    "%";

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
    } as Partial<CompanionsAction>;
  };

  const handleAddCompanionPayload = () => {
    return {
      type: "added_companion",
      payload: { ...companion, active: true },
    } as Partial<CompanionsAction>;
  };

  const handleRemoveCompanionPayload = () => {
    return {
      type: "deleted_companion",
      payload: {...companion, active: false}
    } as Partial<CompanionsAction>;
  };

  return {
    active: companion.active,
    type: companion.type,
    description: companion.description,
    abilities: companion.abilities,
    health: companion.health,
    gaugeWidth: gaugeWidth(),
    handleUpdateAssetPayload: (abilityDescription) =>
      handleUpdateCompanionPayload(abilityDescription),
    handleAddAssetPayload: handleAddCompanionPayload,
    handleRemoveAssetPayload: handleRemoveCompanionPayload,
  };
}
