import * as React from "react";
import { PencilIcon } from "@heroicons/react/20/solid";

import SheetExperienceBar from "./SheetExperienceBar";
import CharacterForm from "../Forms/CharacterForm";
import { GamesContext } from "../../Contexts/GamesContext";
import FormModal from "../Forms/FormModal";
import { FormsContext } from "../../Contexts/FormContexts";
import AssetsForm from "../Forms/AssetsForm";
import SheetAssetList from "./SheetAssets/SheetAssetList";
import SheetSection from "./SheetSection/SheetSection";

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
      <div className="overflow-scroll bg-gray-300" ref={characterSheetRef}>
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
          <SheetSection
            section={{ name: "Stats", key: "stats" }}
            character={currentCharacter}
          />
        </div>

        {/* Gauges */}
        <div className="overflow-hidden bg-white rounded-md shadow-sm m-2 border-gray-200 border">
          <SheetSection
            section={{ name: "Gauges", key: "gauges" }}
            character={currentCharacter}
          />
        </div>

        {/* Vows */}
        <div className="overflow-hidden bg-white rounded-md shadow-sm m-2 border-gray-200 border">
          <SheetSection
            section={{ name: "Vows", key: "vows" }}
            character={currentCharacter}
          />
        </div>

        {/* Bonds */}
        {/* TODO: Add the bond gauge */}
        <div className="overflow-hidden bg-white rounded-md shadow-sm m-2 border-gray-200 border">
          <SheetSection
            section={{ name: "Bonds", key: "bonds" }}
            character={currentCharacter}
          />
        </div>

        {/* Assets */}
        <div className="overflow-hidden bg-white rounded-md shadow-sm mx-2 my-2">
          <div className="flex flex-row border-b border-gray-200 bg-white px-4 py-2">
            <h3 className="flex-1 text-base font-semibold leading-6 text-gray-900">
              Assets
            </h3>
            <button
              className="place-content-end flex-shrink bg-indigo-600 hover:bg-indigo-500 rounded-lg px-2 py-1 my-1 mx-2"
              onClick={() => formsContext.openModal("ASSETS")}
            >
              <PencilIcon className="h-5 w-5 text-white" aria-hidden="true" />
            </button>
          </div>
          <SheetAssetList game={currentCharacter} />
        </div>

        {/* Conditions */}
        <div className="overflow-hidden bg-white rounded-md shadow-sm m-2 border-gray-200 border">
          <SheetSection
            section={{ name: "Conditions", key: "conditions" }}
            character={currentCharacter}
          />
        </div>

        {/* Banes */}
        {/* <div className="overflow-hidden bg-white rounded-md shadow-sm mx-2 my-2">
          <div className="border-b border-gray-200 bg-white px-4 py-2">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Banes
            </h3>
          </div>
          <ul role="list" className="divide-y divide-gray-200">
            {Array.from(currentCharacter.banes.values()).map((bane) => (
              <SheetBane bane={bane} key={bane.name} />
            ))}
          </ul>
        </div> */}

        {/* Burdens */}
        {/* <div className="overflow-hidden bg-white rounded-md shadow-sm mx-2 my-2">
          <div className="border-b border-gray-200 bg-white px-4 py-2">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Burdens
            </h3>
          </div>
          <ul role="list" className="divide-y divide-gray-200">
            {Array.from(currentCharacter.burdens.values()).map((burden) => (
              <SheetBurden burden={burden} key={burden.name} />
            ))}
          </ul>
        </div> */}
      </div>

      <FormModal
        id={currentCharacter.id}
        children={<CharacterForm id={currentCharacter.id} />}
      />
      <FormModal
        id={"ASSETS"}
        title="Edit Assets"
        children={<AssetsForm id={currentCharacter.id} />}
      />
    </>
  );
}
