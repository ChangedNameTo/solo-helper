import React from "react";
import useGameEngineStore from "../Store";

export default function CharacterSheet() {
  const gameEngine = useGameEngineStore();

  return (
    <div>
      {gameEngine.getCurrentSystemName() || "No system selected"}
    </div>
  )
}