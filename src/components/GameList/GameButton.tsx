import * as React from "react";

import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import { GamesDispatchContext } from "../../Contexts/GamesContext";

export default function GameButton(props) {
  const dispatch = React.useContext(GamesDispatchContext);

  const dispatchGameSelect = () => {
    const gameSelect = {
      type: "selected",
      gameID: props.game.id,
    };

    dispatch(gameSelect);
  };

  return (
    <li className="">
      <button
        className="rounded-lg bg-indigo-600 shadow-sm ring-1 ring-indigo-900/5 px-2 py-1"
        onClick={() => dispatchGameSelect()}
      >
        <dl className="flex flex-col">
          <dt className="text-xl font-bold text-white">{props.game.name}</dt>
          <dd className="text-base font-semibold text-white">
            {props.game.worldName}
          </dd>
          <div className="flex w-full">
            <dt className="flex-none">
              <span className="sr-only">Last Played On</span>
              <CalendarDaysIcon
                className="h-6 w-5 text-white"
                aria-hidden="true"
              />
            </dt>
            <dd className="text-white font-semibold">
              <time dateTime="2023-01-31 font-normal">{props.game.date}</time>
            </dd>
          </div>
        </dl>
      </button>
    </li>
  );
}
