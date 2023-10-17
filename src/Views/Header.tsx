import * as React from "react";
import { TrashIcon } from "@heroicons/react/20/solid";
import { GameEngineContext } from "../Contexts/GameEngineContext";

export default function Header() {
  const [gameEngine, gamesDispatch] = React.useContext(GameEngineContext);

  const deselectGame = () => {
    gamesDispatch({
      type: "deselect_game"
    });
  };

  return (
    <div className="shrink-0 bg-gray-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button onClick={() => deselectGame()} data-testid="deselect-game-button">
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
