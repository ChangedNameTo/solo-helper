import * as React from "react";
import {
  Ability,
  Asset,
  AssetsAction,
  RenderedAsset,
} from "../../../Types/AssetTypes";
import { Switch } from "@headlessui/react";
import { classNames } from "../../../assets/Helpers";
import {
  GamesContext,
  GamesDispatchContext,
} from "../../../Contexts/GamesContext";

import SheetCompanion from "./SheetCompanion";
import SheetPath from "./SheetPath";
import SheetRitual from "./SheetRitual";
import SheetTalent from "./SheetTalent";
import ToggleListItem from "../ToggleListItem";

function SheetAssetFactory(asset: Asset) {
  switch (asset.class) {
    case "Companion":
      return SheetCompanion({ companion: asset });
    case "Path":
      return SheetPath({ path: asset });
    case "Talent":
      return SheetTalent({ talent: asset });
    case "Ritual":
      return SheetRitual({ ritual: asset });
    default:
      throw new Error("Invalid Asset Type");
  }
}

export default function SheetAsset({ passedAsset }: { passedAsset: Asset }) {
  const asset = SheetAssetFactory(passedAsset) as RenderedAsset;

  const gamesContext = React.useContext(GamesContext);
  const gameDispatchContext = React.useContext(GamesDispatchContext);

  const handleAddAsset = () => {
    gameDispatchContext({
      ...asset.handleAddAssetPayload(),
      gameID: gamesContext.selectedGame,
    } as AssetsAction);
  };

  const handleRemoveAsset = () => {
    gameDispatchContext({
      ...asset.handleRemoveAssetPayload(),
      gameID: gamesContext.selectedGame,
    } as AssetsAction);
  };

  const handleUpdateAsset = (abilityDescription: Ability["description"]) => {
    gameDispatchContext({
      ...asset.handleUpdateAssetPayload(abilityDescription),
      gameID: gamesContext.selectedGame,
    } as AssetsAction);
  };

  const actionButton = () => {
    if (!asset.active) {
      return (
        <button
          className="bg-indigo-600 text-white font-semibold px-2 my-1 rounded hover:bg-indigo-500"
          onClick={() => handleAddAsset()}
        >
          Add
        </button>
      );
    } else {
      return (
        <button
          className="bg-indigo-600 text-white font-semibold px-2 my-1 rounded hover:bg-indigo-500"
          onClick={() => handleRemoveAsset()}
        >
          Remove
        </button>
      );
    }
  };

  return (
    <li className="m-2 rounded-md border-2 border-indigo-600">
      <div className="rounded-md border-b border-gray-200 bg-white px-4 py-2">
        <div className="flex flex-row">
          <h3 className="flex-1 text-base font-semibold leading-6 text-gray-900">
            {asset.type}
          </h3>
          {asset?.level}
          {actionButton()}
        </div>
        {asset.gaugeWidth && (
          <div className="mt-1 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: asset.gaugeWidth }}
            ></div>
          </div>
        )}
        <span className="text-sm text-gray-500">{asset.description}</span>
      </div>
      {asset?.abilities?.length > 0 && (
        <div className="divide-y">
          {asset.abilities.map((ability) => (
            <ToggleListItem
              iterable={ability}
              handleUpdateAsset={handleUpdateAsset}
            />
          ))}
        </div>
      )}
    </li>
  );
}
