import * as React from "react";
import SheetGauge from "../SheetGauge";
import SheetStat from "../SheetStat";
import SheetVow from "../SheetVow";
import SheetBond from "../SheetBond";
import SheetCondition from "../SheetCondition";

function RetractedButtonFactory(section, iterable) {
  switch (section.key) {
    case "gauges":
      return SheetGauge(iterable);
    case "stats":
      return SheetStat(iterable);
    case "vows":
      return SheetVow(iterable);
    case "bonds":
      return SheetBond(iterable);
    case "conditions":
      return SheetCondition(iterable);
    default:
      throw new Error("Invalid Section Type");
  }
}

export default function RetractedButtonSection({ section, iterable }) {
  const sectionValues = RetractedButtonFactory(section, iterable);
  return (
    <button
      type="button"
      className="flex-grow items-center
                bg-indigo-600 text-white px-3 py-2 text-sm font-semibold ring-1
                ring-inset ring-gray-300 hover:bg-indigo-500 focus:z-10"
      key={iterable.initials}
    >
      <div className="font-bold text-xl">{sectionValues.value}</div>
      <div className="font-semibold">{sectionValues.name}</div>
    </button>
  );
}

