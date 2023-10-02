import * as React from "react";

import { classNames } from "../../assets/Helpers";

export default function SheetGauge(props) {
  const textDecoration = (gaugeValue) => {
    if (gaugeValue > 0) {
      return "+";
    } else if (gaugeValue < 0) {
      return "-";
    } else {
      return " ";
    }
  };

  const gaugeWidth = () =>
    (props.gauge.current / (props.gauge.max - props.gauge.min)) * 100 + "%";

  const buttonBorderStyle = () => {
    switch (props.idx) {
      case props.arr.length - 1:
        return "rounded-bl-md";
      default:
        return "";
    }
  };

  const divBorderStyle = () => {
    switch (props.idx) {
      case props.arr.length - 1:
        return "rounded-br-md";
      default:
        return "";
    }
  };

  return (
    <li
      key={props.gauge.name}
      className="col-span-1 flex border-gray-199 border-b"
    >
      <button
        className={classNames(
          buttonBorderStyle(),
          "bg-indigo-600 flex w-16 flex-shrink-0 items-center justify-center text-xl font-bold text-white"
        )}
      >
        {textDecoration(props.gauge.current)} {props.gauge.current}
      </button>
      <div
        className={classNames(
          divBorderStyle(),
          "flex flex-1 items-center justify-between truncate bg-white"
        )}
      >
        <div className="px-4 py-1 text-sm w-full">
          <a href={""} className="font-bold text-gray-900 hover:text-gray-600">
            {props.gauge.name}
          </a>
          <div className="mt-1 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: gaugeWidth() }}
            ></div>
          </div>
          <p className="whitespace-normal text-gray-500 flex-shrink">
            {props.gauge.description}
          </p>
        </div>
      </div>
    </li>
  );
}
