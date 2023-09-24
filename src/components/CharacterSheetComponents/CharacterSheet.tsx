import * as React from "react";
import { PencilIcon } from "@heroicons/react/20/solid";

import SheetGauge from "./SheetGauge";
import SheetStat from "./SheetStat";
import SheetVow from "./SheetVow";
import SheetBond from "./SheetBond";
import SheetCondition from "./SheetCondition";
import SheetBane from "./SheetBane";
import SheetBurden from "./SheetBurden";
import SheetCompanion from "./SheetCompanion";
import SheetAsset from "./SheetAsset";
import SheetExperienceBar from "./SheetExperienceBar";
import CharacterForm from "../Forms/CharacterForm";
import { GamesContext } from "../../Contexts/GamesContext";
import FormModal from "../Forms/FormModal";
import { FormsContext } from "../../Contexts/FormContexts";

export default function CharacterSheet() {
  const formsContext = React.useContext(FormsContext);
  const characterSheetRef = React.useRef({} as HTMLDivElement);
  const gamesContext = React.useContext(GamesContext);

  const currentCharacter = gamesContext.gamesMap.get(gamesContext.selectedGame);

  // Calculate the maximum height based on the viewport size
  const calculateMaxHeight = () => {
    const viewportHeight = window.innerHeight;
    const headerHeight = 68; // Adjust this value based on your header size
    return viewportHeight - headerHeight;
  };

  React.useEffect(() => {
    // Update the maximum height when the viewport is resized
    const handleResize = () => {
      const maxHeight = calculateMaxHeight();
      characterSheetRef.current.style.maxHeight = `${maxHeight}px`;
    };

    window.addEventListener("resize", handleResize);

    // Initial calculation and set
    const initialMaxHeight = calculateMaxHeight();
    characterSheetRef.current.style.maxHeight = `${initialMaxHeight}px`;

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!currentCharacter) {
    return;
  }

  return (
    <>
      <div className="overflow-scroll bg-gray-100" ref={characterSheetRef}>
        {/* Name */}
        <div className="my-2 mx-2 flex flex-row shadow-sm rounded-md bg-white">
          <div className="flex-grow pl-2 text-xl font-semibold text-center">
            {currentCharacter.name}
          </div>
          <button
            className="place-content-end flex-shrink bg-indigo-600 hover:bg-indigo-500 rounded-lg px-2 py-1 my-1 mx-2"
            onClick={() => formsContext.openModal(currentCharacter.id)}
          >
            <PencilIcon className="h-5 w-5 text-white" aria-hidden="true" />
          </button>
        </div>

        <div className="my-2 mx-2 flex flex-col shadow-sm rounded-md bg-white">
          <div className="text-l font-semibold text-center">Experience</div>
          <SheetExperienceBar experience={currentCharacter.experience} />
        </div>

        {/* Stats */}
        <div className="overflow-hidden bg-white rounded-md shadow-sm m-2 border-gray-200 border">
          <div className="border-b border-gray-200 bg-white px-4 py-2">
            <h2 className="text-lg font-semibold leading-6 text-gray-900">
              Stats
            </h2>
          </div>
          <ul role="list" className="flex flex-col">
            {currentCharacter.stats.map((stat, idx, arr) => (
              <SheetStat stat={stat} idx={idx} key={stat.name} arr={arr} />
            ))}
          </ul>
        </div>

        {/* Gauges */}
        <div className="text-l font-semibold text-center">Gauges</div>
        <ul role="list" className="mx-2 flex flex-col gap-2">
          {currentCharacter.gauges.map((gauge, idx) => (
            <SheetGauge gauge={gauge} key={gauge.name} />
          ))}
        </ul>

        {/* Vows */}
        <div className="overflow-hidden bg-white rounded-md shadow-sm m-2 border-gray-200 border">
          <div className="border-b border-gray-200 bg-white px-4 py-2">
            <h2 className="text-lg font-semibold leading-6 text-gray-900">
              Vows
            </h2>
          </div>
          <ul role="list" className="flex flex-col">
            {Array.from(currentCharacter.vows.values()).map((vow) => (
              <SheetVow vow={vow} key={vow.id} />
            ))}
          </ul>
        </div>

        {/* Bonds */}
        <div className="text-l font-semibold text-center">Bonds</div>
        <ul role="list" className="mx-2 flex flex-col gap-2">
          {currentCharacter.bonds.bonds.map((bond) => (
            <SheetBond bond={bond} key={bond.name} />
          ))}
        </ul>

        {/* Debilities */}
        <div className="text-l font-semibold text-center">Debilities</div>

        {/* Conditions */}
        <div className="overflow-hidden bg-white rounded-md shadow-sm mx-2">
          <div className="border-b border-gray-200 bg-white px-4 py-2">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Conditions
            </h3>
          </div>
          <ul role="list" className="divide-y divide-gray-200">
            {currentCharacter.conditions.map((condition) => (
              <SheetCondition condition={condition} key={condition.name} />
            ))}
          </ul>
        </div>

        {/* Banes */}
        <div className="overflow-hidden bg-white rounded-md shadow-sm mx-2 my-2">
          <div className="border-b border-gray-200 bg-white px-4 py-2">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Banes
            </h3>
          </div>
          <ul role="list" className="divide-y divide-gray-200">
            {currentCharacter.banes.map((bane) => (
              <SheetBane bane={bane} key={bane.name} />
            ))}
          </ul>
        </div>

        {/* Burdens */}
        <div className="overflow-hidden bg-white rounded-md shadow-sm mx-2 my-2">
          <div className="border-b border-gray-200 bg-white px-4 py-2">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Burdens
            </h3>
          </div>
          <ul role="list" className="divide-y divide-gray-200">
            {currentCharacter.burdens.map((burden) => (
              <SheetBurden burden={burden} key={burden.name} />
            ))}
          </ul>
        </div>

        {/* Assets */}
        <div className="text-l font-semibold text-center">Assets</div>

        {/* Companions */}
        <div className="overflow-hidden bg-white rounded-md shadow-sm mx-2 my-2">
          <div className="border-b border-gray-200 bg-white px-4 py-2">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Companions
            </h3>
          </div>
          <ul role="list" className="divide-y divide-gray-200">
            {currentCharacter.companions.map((companion) => (
              <SheetCompanion companion={companion} key={companion.name} />
            ))}
          </ul>
        </div>

        {/* Paths */}
        <div className="overflow-hidden bg-white rounded-md shadow-sm mx-2 my-2">
          <div className="border-b border-gray-200 bg-white px-4 py-2">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Paths
            </h3>
          </div>
          <ul role="list" className="divide-y divide-gray-200">
            {currentCharacter.paths.map((path) => (
              <SheetAsset asset={path} key={path.name} />
            ))}
          </ul>
        </div>

        {/* Talents */}
        <div className="overflow-hidden bg-white rounded-md shadow-sm mx-2 my-2">
          <div className="border-b border-gray-200 bg-white px-4 py-2">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Talents
            </h3>
          </div>
          <ul role="list" className="divide-y divide-gray-200">
            {currentCharacter.talents.map((talent) => (
              <SheetAsset asset={talent} key={talent.name} />
            ))}
          </ul>
        </div>

        {/* Rituals */}
        <div className="overflow-hidden bg-white rounded-md shadow-sm mx-2 my-2">
          <div className="border-b border-gray-200 bg-white px-4 py-2">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Rituals
            </h3>
          </div>
          <ul role="list" className="divide-y divide-gray-200">
            {currentCharacter.rituals.map((ritual) => (
              <SheetAsset asset={ritual} key={ritual.name} />
            ))}
          </ul>
        </div>
      </div>
      <FormModal
        id={currentCharacter.id}
        children={<CharacterForm id={currentCharacter.id} />}
      />
    </>
  );
}
