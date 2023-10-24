import * as React from "react";
import { TrashIcon } from "@heroicons/react/20/solid";
import useGameEngineStore from "../Store";

export default function Header() {
  const deselectGame = useGameEngineStore((state) => state.deselectGame)

  return (
    <div className="shrink-0 bg-gray-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button onClick={deselectGame} data-testid="deselect-game-button">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </button>
        <button onClick={() => {}}>
          <TrashIcon className="h-8 w-auto text-indigo-500" />
        </button>
      </div>
    </div>
  );
}
