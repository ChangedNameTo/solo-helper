import * as React from "react";
import { Switch } from "@headlessui/react";

import { classNames } from "../../assets/Helpers";
import {
  GamesContext,
  GamesDispatchContext,
} from "../../Contexts/GamesContext";
import { CharactersAction } from "../../Types/CharacterTypes";
import { Talent } from "../../Types/AssetTypes";

export default function SheetTalent(props) {
  const gameDispatchContext = React.useContext(GamesDispatchContext);
  const gamesContext = React.useContext(GamesContext);

  const handleUpdateAbilities = (abilityDescription) => {
    gameDispatchContext({
      type: "updated_talent",
      gameID: gamesContext.selectedGame,
      payload: {
        ...props.talent,
        abilities: props.talent.abilities.map((ability) => {
          if (ability.description !== abilityDescription) {
            return ability;
          } else {
            return {
              ...ability,
              active: !ability.active,
            };
          }
        }),
      } as Talent,
    } as CharactersAction);
  };

  const handleAddTalent = () => {
    gameDispatchContext({
      type: "added_talent",
      gameID: gamesContext.selectedGame,
      payload: { ...props.talent, active: true },
    } as CharactersAction);
  };

  const handleRemoveTalent = () => {
    gameDispatchContext({
      type: "deleted_talent",
      gameID: gamesContext.selectedGame,
      active: false,
      payload: props.talent,
    } as CharactersAction);
  };

  const actionButton = () => {
    if (!props.talent.active) {
      return (
        <button
          className="bg-indigo-600 text-white font-semibold px-2 my-1 rounded hover:bg-indigo-500"
          onClick={() => handleAddTalent()}
        >
          Add
        </button>
      );
    } else {
      return (
        <button
          className="bg-indigo-600 text-white font-semibold px-2 my-1 rounded hover:bg-indigo-500"
          onClick={() => handleRemoveTalent()}
        >
          Remove
        </button>
      );
    }
  };

  return (
    <>
      <li className="m-2 rounded-md border-2 border-indigo-600">
      <div className="rounded-md border-b border-gray-200 bg-white px-4 py-2">
        <div className="flex flex-row">
          <h3 className="flex-1 text-base font-semibold leading-6 text-gray-900">
            {props.talent.type}
          </h3>
          {actionButton()}
        </div>
        <span className="text-sm text-gray-500">
          {props.talent.description}
        </span>
      </div>
        <div className="divide-y">
          {props.talent.abilities.map((ability) => (
            <Switch.Group
              key={ability.description}
              as="div"
              className="flex items-center py-2 px-2"
            >
              <Switch
                onChange={() => handleUpdateAbilities(ability.description)}
                checked={ability.active}
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
      </li>
    </>
  );
}
