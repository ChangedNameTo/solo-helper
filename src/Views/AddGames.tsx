import React from "react";
import useGameEngineStore from "../Store";

export default function AddGames() {
  const addGame = useGameEngineStore((state) => state.addGame);

  return (
    <button className="button" data-testid="add-game-button"
      onClick={addGame}
    >
      Add Game
    </button>
  );
}
