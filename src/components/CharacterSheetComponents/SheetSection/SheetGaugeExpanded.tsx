import * as React from "react";
import { classNames } from "../../../assets/Helpers";
import {
  MessagesDispatchContext,
} from "../../../Contexts/MessagesContext";

export default function SheetGaugeExpanded(props, idx, arr) {
  const dispatch = React.useContext(MessagesDispatchContext);

  const dispatchGaugeMoveRoll = () => {
    const gaugeMoveRollMessage = {
      type: "added",
      text: `/moveroll 1d6+${props.gauge.value} ${props.gauge.initials}`,
      date: Date.now(),
    };

    dispatch(gaugeMoveRollMessage);
  };

  return (
    <li className="col-span-1 flex border-gray-200 border-t border-b">
      <button
        className={classNames(
          "bg-indigo-600 hover:bg-indigo-500 flex w-16 flex-shrink-0 items-center justify-center text-xl font-bold text-white last:rounded-bl-md"
        )}
        onClick={() => dispatchGaugeMoveRoll()}
      >
        {props.value}
      </button>
      <div
        className={classNames(
          "flex flex-1 items-center justify-between truncate bg-white last:rounded-br-md"
        )}
      >
        <div className="px-4 py-1 text-sm">
          <a
            href={props.href}
            className="font-bold text-gray-900 hover:text-gray-600"
          >
            {props.name}
            <div className="pl-2 inline text-gray-400 font-semibold">
              ({props.initials})
            </div>
          </a>
          <p className="whitespace-normal text-gray-500 flex-shrink">
            {props.description}
          </p>
        </div>
      </div>
    </li>
  );
}
