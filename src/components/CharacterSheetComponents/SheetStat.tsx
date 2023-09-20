import * as React from "react";
import { classNames } from "../../assets/Helpers";
import {
  DraftMessageContext,
  MessagesDispatchContext,
} from "../../Contexts/MessagesContext";

export default function SheetStat(props) {
  const { draftText, setDraftText } = React.useContext(DraftMessageContext);

  const dispatch = React.useContext(MessagesDispatchContext);

  const dispatchStatMoveRoll = () => {
    const statMoveRollMessage = {
      type: "added",
      text: `/moveroll 1d6+${props.stat.value} ${props.stat.initials}`,
      date: Date.now(),
    };

    dispatch(statMoveRollMessage);
  };

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
    <li className="col-span-1 flex border-gray-200 border-t border-b">
      <button
        className={classNames(
          buttonBorderStyle(),
          "bg-indigo-600 hover:bg-indigo-500 flex w-16 flex-shrink-0 items-center justify-center text-xl font-bold text-white"
        )}
        onClick={() => dispatchStatMoveRoll()}
      >
        {props.stat.value}
      </button>
      <div
        className={classNames(
          divBorderStyle(),
          "flex flex-1 items-center justify-between truncate bg-white"
        )}
      >
        <div className="px-4 py-1 text-sm">
          <a
            href={props.stat.href}
            className="font-bold text-gray-900 hover:text-gray-600"
          >
            {props.stat.name}
            <div className="pl-2 inline text-gray-400 font-semibold">
              ({props.stat.initials})
            </div>
          </a>
          <p className="whitespace-normal text-gray-500 flex-shrink">
            {props.stat.description}
          </p>
        </div>
      </div>
    </li>
  );
}
