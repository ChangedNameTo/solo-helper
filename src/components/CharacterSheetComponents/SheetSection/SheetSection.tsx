import { ChevronRightIcon } from "@heroicons/react/20/solid";
import * as React from "react";
import SheetSectionExpanded from "./SheetSectionExpanded";
import SheetAssetList from "../SheetAssets/SheetAssetList";
import RetractedButtonSection from "./RetractedButtonSection";

import {
  SheetSectionIterable,
  SheetSectionIterableArr,
  SheetSectionLabels,
  SheetSectionProps,
} from "../../../Types/SheetSectionTypes";
import ToggleListItem from "../ToggleListItem";

function SheetExpandedSectionFactory(section: SheetSectionLabels) {
  switch (section.key) {
    case "stats":
    case "gauges":
    case "vows":
    case "bonds":
      return (section: SheetSectionLabels) => SheetSectionExpanded(section);
    case "conditions":
      return (section: SheetSectionLabels, iterable: SheetSectionIterable) =>
        ToggleListItem(section, iterable);
    case "companions":
      return (section: SheetSectionLabels) => SheetAssetList(section);
    default:
      throw new Error("Invalid Section Type");
  }
}

function SheetRetractedSectionFactory(section: SheetSectionLabels) {
  switch (section.key) {
    case "stats":
    case "gauges":
    case "vows":
    case "bonds":
      return (section: SheetSectionLabels, iterable: SheetSectionIterable) =>
        RetractedButtonSection(section, iterable);
    case "companions":
      return (section: SheetSectionLabels, iterable: SheetSectionIterable) =>
        RetractedButtonSection(section, iterable);
    case "conditions":
      return (section: SheetSectionLabels, iterable: SheetSectionIterable) =>
        RetractedButtonSection(section, iterable);
    default:
      throw new Error("Invalid Section Type");
  }
}

// TODO: Add logic to create a plus button
export default function SheetSection({
  section,
  character,
}: SheetSectionProps) {
  const [open, setOpen] = React.useState(false);
  const iterableArray = Array.from(
    character[section.key].values()
  ) as SheetSectionIterableArr;
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
        <ul role="list" className="flex flex-col divide-y">
          {/* Expanded Container */}
          {iterableArray.map((iterable) => (
            <ExpandedListItem
              section={section}
              iterable={iterable}
              key={iterable.name}
            />
          ))}
        </ul>
      ) : (
        <div>
          {/* Collapsed Container */}
          <span className="flex flex-row rounded-md shadow-sm">
            {iterableArray.map((iterable) => (
              <RetractedListItem
                section={section}
                iterable={iterable}
                key={iterable.name}
              />
            ))}
          </span>
        </div>
      )}
    </>
  );
}
