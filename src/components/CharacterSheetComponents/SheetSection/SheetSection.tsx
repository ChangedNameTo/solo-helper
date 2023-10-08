import { ChevronRightIcon } from "@heroicons/react/20/solid";
import * as React from "react";
import SheetSectionExpanded from "./SheetSectionExpanded";
import SheetAssetList from "../SheetAssets/SheetAssetList";
import { IronswornCharacter } from "../../../Types/CharacterTypes";
import RetractedButtonSection from "./RetractedButtonSection";

// Create a typescript interface that pulls in the Bond, Asset, Vow, Gauage, and Stat types
import { Vow } from "../../../Types/VowTypes";
import { Stat } from "../../../Types/StatTypes";
import { Bond } from "../../../Types/BondTypes";
import { Companion, Path, Ritual, Talent } from "../../../Types/AssetTypes";


function SheetExpandedSectionFactory(section: { name?: string; key: any; }) {
  switch (section.key) {
    case "stats":
    case "gauges":
    case "vows":
    case "bonds":
    case "conditions":
      return (section) => SheetSectionExpanded(section);
    case "companions":
      return (section) => SheetAssetList(section);
    default:
      throw new Error("Invalid Section Type");
  }
}

function SheetRetractedSectionFactory(section:SheetSectionLabels ) {
  switch (section.key) {
    case "stats":
    case "gauges":
    case "vows":
    case "bonds":
      return (section:SheetSectionLabels, iterable:SheetSectionIterable) => RetractedButtonSection(section, iterable);
    case "companions":
      return (section:SheetSectionLabels, iterable:SheetSectionIterable) => RetractedButtonSection(section, iterable);
    case "conditions":
      return (section:SheetSectionLabels, iterable:SheetSectionIterable) => RetractedButtonSection(section, iterable);
    default:
      throw new Error("Invalid Section Type");
  }
}


// TODO: Add logic to create a plus button
export default function SheetSection({ section, character }: SheetSectionProps) {
  const [open, setOpen] = React.useState(false);
  const iterableArray = Array.from(character[section.key].values());
  const ExpandedListItem = SheetExpandedSectionFactory(section);
  const RetractedListItem = SheetRetractedSectionFactory(section);

  return (
    <>
      <div
        className="place-items-center flex flex-row border-b border-gray-200 bg-white px-4 py-2"
        onClick={() => setOpen(!open)}
      >
        <h2 className="flex-1 text-lg font-semibold leading-6 text-gray-900">
          {section.name}
        </h2>
        <div className="place-content-end flex-shrink bg-indigo-600 hover:bg-indigo-500 rounded-lg px-2 py-1 ">
          <ChevronRightIcon
            className={`${
              open ? "rotate-90 transform" : " "
            } h-5 w-5 text-white`}
          />
        </div>
      </div>
      {open ? (
        <ul role="list" className="flex flex-col">
          {/* Expanded Container */}
          {iterableArray.map((iterable) => (
            <ExpandedListItem section={section} iterable={iterable} />
          ))}
        </ul>
      ) : (
        <div>
          {/* Collapsed Container */}
          <span className="flex flex-row rounded-md shadow-sm">
            {iterableArray.map((iterable) => (
              <RetractedListItem section={section} iterable={iterable} />
            ))}
          </span>
        </div>
      )}
    </>
  );
}
