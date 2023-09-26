import * as React from "react";
import { UsersIcon, QuestionMarkCircleIcon, GlobeAltIcon } from "@heroicons/react/20/solid";
import {
  GamesContext,
  GamesDispatchContext,
} from "../../Contexts/GamesContext";
import { FormsContext } from "../../Contexts/FormContexts";
import StatFormTableRow from "./StatFormTableRow";
import { Stat } from "../../Types/CharacterTypes";
import StatForm from "./StatForm";
import VowForm from "./VowForm";

export default function CharacterForm(props) {
  const formsContext = React.useContext(FormsContext);
  const gamesContext = React.useContext(GamesContext);
  const gameDispatchContext = React.useContext(GamesDispatchContext);

  const game = gamesContext.gamesMap.get(props.id);

  if (!game) {
    formsContext.closeModal(props.id);
    return;
  }

  const [name, setName] = React.useState(game.name);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
    };
  };

  return (
    <form>
      {/* Basics */}
      <div className="border-b border-gray-900/10 pb-2">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          The Basics
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
          {/* Name */}
          <div className="col-span-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Character Name
            </label>
            <div className="mt-2 flex rounded-md shadow-sm">
              <div className="relative flex flex-grow items-stretch focus-within:z-10">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <UsersIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="name"
                  name="name"
                  id="name"
                  className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Nismera Elro"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <QuestionMarkCircleIcon
                  className="-ml-0.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Random
              </button>
            </div>
          </div>

          {/*World Name  */}
          <div className="col-span-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              World Name
            </label>
            <div className="mt-2 flex rounded-md shadow-sm">
              <div className="relative flex flex-grow items-stretch focus-within:z-10">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <GlobeAltIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="name"
                  name="name"
                  id="name"
                  className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Nismera Elro"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <QuestionMarkCircleIcon
                  className="-ml-0.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Random
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="col-span-full">
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Description
            </label>
            <div className="mt-2">
              <textarea
                id="description"
                name="description"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Write a few sentences describing your character.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="border-b border-gray-900/10 my-2">
        {<StatForm game={game} />}
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
