import * as React from "react";
import { assetJSON } from "../../assets/Helpers";
import _ from "lodash";
import { GamesContext } from "../../Contexts/GamesContext";
import { FormsContext } from "../../Contexts/FormContexts";
import SheetCompanion from "../CharacterSheetComponents/SheetCompanion";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import SheetPath from "../CharacterSheetComponents/SheetPath";
import SheetTalent from "../CharacterSheetComponents/SheetTalent";
import SheetRitual from "../CharacterSheetComponents/SheetRitual";

export default function AssetsForm(props) {
  // Import our contexts
  const formsContext = React.useContext(FormsContext);
  const gamesContext = React.useContext(GamesContext);

  const game = gamesContext.gamesMap.get(gamesContext.selectedGame);

  if (!game) {
    formsContext.closeModal("ASSETS");
    return;
  }

  let currentCompanions = game.companions.map((companion) => companion.type);
  let currentPaths = game.paths.map((path) => path.type);
  let currentTalents = game.talents.map((talent) => talent.type);
  let currentRituals = game.rituals.map((ritual) => ritual.type);

  React.useEffect(() => {
    currentCompanions = game.companions.map((companion) => companion.type);
  }, [game.companions]);

  React.useEffect(() => {
    currentPaths = game.paths.map((path) => path.type);
  }, [game.paths]);
  
  React.useEffect(() => {
    currentTalents = game.talents.map((talent) => talent.type);
  }, [game.talents]);

  React.useEffect(() => {
    currentRituals = game.rituals.map((ritual) => ritual.type);
  },[game.rituals]);

  const companions = _.filter(assetJSON, (asset) => {
    return asset["Asset Type"] === "Companion";
  })
    .map((asset) => {
      return {
        name: "Placeholder",
        type: asset["Name"],
        description: asset["Description"],
        active: false,
        abilities: asset["Abilities"].map((ability) => {
          return {
            name: ability["Name"],
            description: ability["Text"],
            active: ability["Enabled"] || false,
            starting: ability["Enabled"] || false,
          };
        }),
        health: {
          min: 0,
          max: asset["Asset Track"]["Max"],
          current: asset["Asset Track"]["Max"],
          reset: 1,
        },
      };
    })
    .filter((asset) => currentCompanions.indexOf(asset.type) < 0);

  const paths = _.filter(assetJSON, (asset) => {
    return asset["Asset Type"] === "Path";
  })
    .map((asset) => {
      return {
        type: asset["Name"],
        active: false,
        abilities: asset["Abilities"].map((ability) => {
          return {
            name: ability["Name"],
            description: ability["Text"],
            active: ability["Enabled"] || false,
            starting: ability["Enabled"] || false,
          };
        }),
      };
    })
    .filter((asset) => currentPaths.indexOf(asset.type) < 0);

  const talents = _.filter(assetJSON, (asset) => {
    return asset["Asset Type"] === "Combat Talent";
  })
    .map((asset) => {
      return {
        type: asset["Name"],
        description: asset["Description"],
        active: false,
        abilities: asset["Abilities"].map((ability) => {
          return {
            name: ability["Name"],
            description: ability["Text"],
            active: ability["Enabled"] || false,
            starting: ability["Enabled"] || false,
          };
        }),
      };
    })
    .filter((asset) => currentCompanions.indexOf(asset.type) < 0);
  
  
  const rituals = _.filter(assetJSON, (asset) => {
    return asset["Asset Type"] === "Ritual";
  })
    .map((asset) => {
      return {
        type: asset["Name"],
        description: asset["Description"],
        active: false,
        abilities: asset["Abilities"].map((ability) => {
          return {
            name: ability["Name"],
            description: ability["Text"],
            active: ability["Enabled"] || false,
            starting: ability["Enabled"] || false,
          };
        }),
      };
    })
    .filter((asset) => currentCompanions.indexOf(asset.type) < 0);

  return (
    <>
      <div className="border-b border-gray-900/10">
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Select up to 3 Assets to start with. They will appear in the lefthand
          column.
        </p>
      </div>

      <div className="grid grid-cols-1 border-b border-gray-900/10 pb-12 md:grid-cols-3">
        <div className="border-r border-gray-900/10">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Selected Assets
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Assets you have selected will appear here
          </p>
          <ul>
            {game.companions.map((companion) => {
              return (
                <SheetCompanion key={companion.type} companion={companion} />
              );
            })}
            {game.paths.map((path) => {
              return <SheetPath key={path.type} path={path} />;
            })}
            {game.talents.map((talent) => {
              return <SheetTalent key={talent.type} talent={talent} />;
            })}
            {game.rituals.map((ritual) => {
              return <SheetRitual key={ritual.type} ritual={ritual} />;
            })}
          </ul>
        </div>

        <div className="col-span-2">
          {/* Paths */}
          <Disclosure>
            {({ open }) => (
              <div className="m-2 p-2 border-indigo-500 border-2 rounded-lg">
                <Disclosure.Button className="relative flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-2 text-left text-sm font-medium hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                  <h2 className="text-base font-semibold leading-7 text-indigo-900 text-left">
                    Paths
                  </h2>
                  <p className="mx-1 text-sm leading-6 text-indigo-600">
                    The crafts we spent a lifetime mastering
                  </p>
                  <div className="h-full">
                    <ChevronRightIcon
                      className={`${
                        open ? "rotate-90 transform" : " "
                      } h-5 w-5 text-indigo-500`}
                    />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="grid grid-cols-1 gap-2 lg:grid-cols-2 col-span-2">
                  <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2 col-span-2">
                    {paths
                      .filter(
                        (path) => currentCompanions.indexOf(path.type) !== 0
                      )
                      .map((path) => {
                        return <SheetPath key={path.type} path={path} />;
                      })}
                  </ul>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>

          {/* Companions */}
          <Disclosure>
            {({ open }) => (
              <div className="m-2 p-2 border-indigo-500 border-2 rounded-lg">
                <Disclosure.Button className="relative flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-2 text-left text-sm font-medium hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                  <h2 className="text-base font-semibold leading-7 text-indigo-900 text-left">
                    Companions
                  </h2>
                  <p className="mx-1 text-sm leading-6 text-indigo-600">
                    The furry, feathered, and scaled friends that join us on our
                    journeys
                  </p>
                  <div className="h-full">
                    <ChevronRightIcon
                      className={`${
                        open ? "rotate-90 transform" : " "
                      } h-5 w-5 text-indigo-500`}
                    />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="grid grid-cols-1 gap-2 lg:grid-cols-2 col-span-2">
                  <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2 col-span-2">
                    {companions
                      .filter(
                        (companion) =>
                          currentCompanions.indexOf(companion.type) !== 0
                      )
                      .map((companion) => {
                        return (
                          <SheetCompanion
                            key={companion.type}
                            companion={companion}
                          />
                        );
                      })}
                  </ul>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>

          {/* Talents */}
          <Disclosure>
            {({ open }) => (
              <div className="m-2 p-2 border-indigo-500 border-2 rounded-lg">
                <Disclosure.Button className="relative flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-2 text-left text-sm font-medium hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                  <h2 className="text-base font-semibold leading-7 text-indigo-900 text-left">
                    Talents
                  </h2>
                  <p className="mx-1 text-sm leading-6 text-indigo-600">
                    The skills we learned to survive in combat
                  </p>
                  <div className="h-full">
                    <ChevronRightIcon
                      className={`${
                        open ? "rotate-90 transform" : " "
                      } h-5 w-5 text-indigo-500`}
                    />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="grid grid-cols-1 gap-2 lg:grid-cols-2 col-span-2">
                  <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2 col-span-2">
                    {talents
                      .filter(
                        (talent) => currentTalents.indexOf(talent.type) !== 0
                      )
                      .map((talent) => {
                        return (
                          <SheetTalent key={talent.type} talent={talent} />
                        );
                      })}
                  </ul>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
          
          {/* Rituals */}
          <Disclosure>
            {({ open }) => (
              <div className="m-2 p-2 border-indigo-500 border-2 rounded-lg">
                <Disclosure.Button className="relative flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-2 text-left text-sm font-medium hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                  <h2 className="text-base font-semibold leading-7 text-indigo-900 text-left">
                    Rituals
                  </h2>
                  <p className="mx-1 text-sm leading-6 text-indigo-600">
                    The arcana we call upon to bend the world to our will
                  </p>
                  <div className="h-full">
                    <ChevronRightIcon
                      className={`${
                        open ? "rotate-90 transform" : " "
                      } h-5 w-5 text-indigo-500`}
                    />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="grid grid-cols-1 gap-2 lg:grid-cols-2 col-span-2">
                  <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2 col-span-2">
                    {rituals
                      .filter(
                        (ritual) => currentRituals.indexOf(ritual.type) !== 0
                      )
                      .map((ritual) => {
                        return (
                          <SheetRitual key={ritual.type} ritual={ritual} />
                        );
                      })}
                  </ul>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
          onClick={() => formsContext.closeModal("ASSETS")}
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
    </>
  );
}
