import * as React from "react";
import { GamesDispatchContext } from "./GamesContext";

export default function Header() {
  const dispatch = React.useContext(GamesDispatchContext);
  
  const dispatchGameSelect = () => {
    const gameSelect = {
      type: "selected",
      gameID:"",
    };

    dispatch(gameSelect) 
  };

  return (
    <div className="shrink-0 bg-gray-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => dispatchGameSelect()}
        >
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
        </button>
      </div>
    </div>
  );
}
