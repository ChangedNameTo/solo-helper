import * as React from "react";
import SheetStat from "./SheetStat";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import SheetGauge from "./SheetGauge";

export default function StatsSection({ character }) {
  const [open, setOpen] = React.useState(false);
  
  const textDecoration = (gaugeValue) => {
    if (gaugeValue > 0) {
      return `+${gaugeValue}`;
    } else if (gaugeValue < 0) {
      return `-${gaugeValue}`;
    } else {
      return `${gaugeValue}`;
    }
  };

  return (
    <>
      <div
        className="place-items-center flex flex-row border-b border-gray-200 bg-white px-4 py-2"
        onClick={() => setOpen(!open)}
      >
        <h2 className="flex-1 text-lg font-semibold leading-6 text-gray-900">
          Gauges
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
          {character.gauges.map((gauge, idx, arr) => (
            <SheetGauge gauge={gauge} key={gauge.name} idx={idx} arr={arr} />
          ))}
        </ul>
      ) : (
        <div>
          <span className="flex flex-row rounded-md shadow-sm">
            {character.gauges.map((gauge) => (
              <button
                type="button"
                className="flex-grow items-center
                bg-indigo-600 text-white px-3 py-2 text-sm font-semibold ring-1
                ring-inset ring-gray-300 hover:bg-indigo-500 focus:z-10"
              >
                <div className="font-bold text-xl">{textDecoration(gauge.current)}</div>
                <div className="font-semibold">{gauge.name}</div>
              </button>
            ))}
          </span>
        </div>
      )}
    </>
  );
}
