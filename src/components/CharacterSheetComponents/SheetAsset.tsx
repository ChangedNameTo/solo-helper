import * as React from "react";
import { Asset } from "../../Types/AssetTypes";
import SheetCompanion from "./SheetCompanion";
import { Switch } from "@headlessui/react";
import { classNames } from "../../assets/Helpers";
import { GamesContext, GamesDispatchContext } from "../../Contexts/GamesContext";

function SheetAssetFactory(asset) {
  switch (asset.class) {
    case "Companion":
      return SheetCompanion({ companion: asset });
    case "Path":
      return <SheetPath {...asset} />;
    case "Talent":
      return <SheetTalent {...asset} />;
    case "Ritual":
      return <SheetRitual {...asset} />;
    default:
      throw new Error("Invalid Asset Type");
  }
}

export default function SheetAsset({ passedAsset }: { passedAsset: Asset }) {
  // Fetch our asset and all of the relevant attributes
  const asset = SheetAssetFactory(passedAsset);
  console.log(asset);
  const gamesContext = React.useContext(GamesContext);

  const handleAddAsset = () => {
    gameDispatchContext({ ...asset.handleAddAssetPayload(), gameID:gamesContext.selectedGame });
  }
  
  const handleRemoveAsset = () => {
    gameDispatchContext(asset.handleRemoveAssetPayload());
  }

  const handleUpdateAsset = (abilityDescription) => {
    gameDispatchContext(asset.handleUpdateAssetPayload(abilityDescription));
  }
  
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
            <Switch.Group
              key={ability.name}
              as="div"
              className="flex items-center py-2 px-2"
            >
              <Switch
                checked={ability.active}
                onChange={() => asset.handleUpdateAsset(ability.description)}
                className={classNames(
                  ability.active ? "bg-indigo-600" : "bg-gray-200",
                  "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                )}
              >
                <span
                  aria-hidden="true"
                  className={classNames(
                    ability.active ? "translate-x-5" : "translate-x-0",
                    "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
              <Switch.Label as="span" className="ml-3 text-sm">
                <span className="font-semibold text-gray-900">
                  {ability.name}
                </span>{" "}
                <span className="text-gray-500">{ability.description}</span>
              </Switch.Label>
            </Switch.Group>
          ))}
        </div>
      )}
    </li>
  );
}
