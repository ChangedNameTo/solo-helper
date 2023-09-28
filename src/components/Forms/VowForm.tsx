import * as React from "react";
import { Transition, Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "../../assets/Helpers";
import { CheckIcon } from "@heroicons/react/24/solid";
import { Vow, VowTier, VowsAction } from "../../Types/VowTypes";
import {
  GamesContext,
  GamesDispatchContext,
} from "../../Contexts/GamesContext";
import { FormsContext } from "../../Contexts/FormContexts";

export default function VowForm(props) {
  // Import our contexts
  const formsContext = React.useContext(FormsContext);
  const gamesContext = React.useContext(GamesContext);
  const gameDispatchContext = React.useContext(GamesDispatchContext);

  const game = gamesContext.gamesMap.get(gamesContext.selectedGame);
  const vow = game?.vows.get(props.id);

  if (!vow) {
    formsContext.closeModal(props.id);
    return;
  }

  const [name, setName] = React.useState(vow.name);
  const [description, setDescription] = React.useState(vow.description);
  const [tier, setTier] = React.useState(vow.tier);

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    gameDispatchContext({
      type: "updated_vow",
      gameID: gamesContext.selectedGame,
      vowID: vow.id,
      payload: formData(),
    } as VowsAction);

    formsContext.closeModal(vow.id);
  };

  const formData = () => {
    const formData: Vow = {
      id: vow.id,
      name: name,
      description: description,
      tier: tier,
      min: vow.min,
      max: vow.max,
      current: vow.current,
    };

    return formData;
  };

  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-6">
          <p className="mt-1 text-sm leading-6 text-gray-600">
            When you Swear an Iron Vow, you give it a rank and record it on your
            character sheet.
          </p>
          <fieldset className="my-2">
            <Listbox value={tier} onChange={setTier}>
              {({ open }) => (
                <>
                  <div className="my-3">
                    <label
                      htmlFor="vow-text"
                      className="block text-sm font-bold leading-6 text-gray-900"
                    >
                      Vow Text
                    </label>
                    <input
                      type="text"
                      name="vow-text"
                      id="vow-text"
                      autoComplete="vow-text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData().name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="my-3">
                    <Listbox.Label className="block text-sm font-bold leading-6 text-gray-900">
                      Tier
                    </Listbox.Label>
                    <Listbox.Button className="text-left pl-3 relative block w-full rounded-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-sm">
                      <span className="block truncate">{tier}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={React.Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="z-10 max-h-60 auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border-0">
                        {Object.values(VowTier).map((vowTier) => (
                          <Listbox.Option
                            key={vowTier}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "bg-indigo-600 text-white"
                                  : "text-gray-900",
                                "relative cursor-default select-none py-2 pl-3 pr-9"
                              )
                            }
                            value={vowTier}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={classNames(
                                    selected ? "font-semibold" : "font-normal",
                                    "block truncate"
                                  )}
                                >
                                  {vowTier}
                                </span>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-indigo-600",
                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                    )}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
            <div className="my-3">
              <label
                htmlFor="vow-text"
                className="block text-sm font-bold leading-6 text-gray-900"
              >
                Vow Description
              </label>
              <textarea
                name="vow-text"
                id="vow-text"
                autoComplete="vow-text"
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
