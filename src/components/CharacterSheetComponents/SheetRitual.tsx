import * as React from "react";
import { Switch } from "@headlessui/react";

import { classNames } from "../../assets/Helpers";
import {
  GamesContext,
  GamesDispatchContext,
} from "../../Contexts/GamesContext";
import { CharactersAction } from "../../Types/CharacterTypes";
import { Ritual } from "../../Types/AssetTypes";

export default function SheetRitual(props) {
  const gameDispatchContext = React.useContext(GamesDispatchContext);
  const gamesContext = React.useContext(GamesContext);

  const handleUpdateAbilities = (abilityDescription) => {
    gameDispatchContext({
      type: "updated_ritual",
      gameID: gamesContext.selectedGame,
      payload: {
        ...props.ritual,
        abilities: props.ritual.abilities.map((ability) => {
          if (ability.description !== abilityDescription) {
            return ability;
          } else {
            return {
              ...ability,
              active: !ability.active,
            };
          }
        }),
      } as Ritual,
    } as CharactersAction);
  };

  const handleAddRitual = () => {
    gameDispatchContext({
      type: "added_ritual",
      gameID: gamesContext.selectedGame,
      payload: { ...props.ritual, active: true },
    } as CharactersAction);
  };

  const handleRemoveRitual = () => {
    gameDispatchContext({
      type: "deleted_ritual",
      gameID: gamesContext.selectedGame,
      active: false,
      payload: props.ritual,
    } as CharactersAction);
  };

  const actionButton = () => {
    if (!props.ritual.active) {
      return (
        <button
          className="bg-indigo-600 text-white font-semibold px-2 my-1 rounded hover:bg-indigo-500"
          onClick={() => handleAddRitual()}
        >
          Add
        </button>
      );
    } else {
      return (
        <button
          className="bg-indigo-600 text-white font-semibold px-2 my-1 rounded hover:bg-indigo-500"
          onClick={() => handleRemoveRitual()}
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
            {props.ritual.type}
          </h3>
          {actionButton()}
        </div>
        <span className="text-sm text-gray-500">
          {props.ritual.description}
        </span>
      </div>
        <div className="divide-y">
          {props.ritual.abilities.map((ability) => (
            <Switch.Group
              key={ability.description}
              as="div"
              className="flex items-center py-2 px-2"
            >
              <Switch
                onChange={() => handleUpdateAbilities(ability.description)}
                checked={ability.active}
                disabled={ability.starting}
                className={classNames(
                  ability.active ? "bg-indigo-600" : "bg-gray-200",
                  "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-indigo-600/50"
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
