import * as React from "react";
import { Transition, Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "../../assets/Helpers";
import { CheckIcon } from "@heroicons/react/24/solid";
import { Bond, BondsAction } from "../../Types/BondTypes";
import {
  GamesContext,
  GamesDispatchContext,
} from "../../Contexts/GamesContext";
import { FormsContext } from "../../Contexts/FormContexts";

export default function BondForm(props) {
  // Import our contexts
  const formsContext = React.useContext(FormsContext);
  const gamesContext = React.useContext(GamesContext);
  const gameDispatchContext = React.useContext(GamesDispatchContext);

  const game = gamesContext.gamesMap.get(gamesContext.selectedGame);
  const bond = game?.bonds.get(props.id);

  if (!bond) {
    formsContext.closeModal(props.id);
    return;
  }

  const [name, setName] = React.useState(bond.name);
  const [description, setDescription] = React.useState(bond.description);

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    gameDispatchContext({
      type: "updated_bond",
      gameID: gamesContext.selectedGame,
      bondID: bond.id,
      payload: formData(),
    } as BondsAction);

    formsContext.closeModal(bond.id);
  };

  const formData = () => {
    const formData: Bond = {
      id: bond.id,
      name: name,
      description: description,
    };

    return formData;
  };

  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-6">
          <p className="mt-1 text-sm leading-6 text-gray-600">
            When you Swear an Iron Bond, you give it a rank and record it on your
            character sheet.
          </p>
          <fieldset className="my-2">
            <div className="my-3">
              <label
                htmlFor="bond-text"
                className="block text-sm font-bold leading-6 text-gray-900"
              >
                Bond Name
              </label>
              <input
                type="text"
                name="bond-text"
                id="bond-text"
                autoComplete="bond-text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={formData().name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="my-3">
              <label
                htmlFor="bond-text"
                className="block text-sm font-bold leading-6 text-gray-900"
              >
                Bond Description
              </label>
              <textarea
                name="bond-text"
                id="bond-text"
                autoComplete="bond-text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={formData().description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </fieldset>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
          onClick={() => formsContext.closeModal(props.id)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={(e) => handleSubmit(e)}
        >
          Save
        </button>
      </div>
    </form>
  );
}
