import React from "react";
import useGameEngineStore from "../Store";

export default function CharacterSheet() {
  const gameEngine = useGameEngineStore();

  return (
    <div
      data-testid="character-sheet"
    >
      {gameEngine.getCurrentSystemName() || "No system selected"}
    </div>
  )
}