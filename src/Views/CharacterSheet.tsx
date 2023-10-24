import React from "react";
import useGameEngineStore from "../Store";

export default function CharacterSheet() {
  const gameEngine = useGameEngineStore();
  const character = gameEngine.getCurrentCharacter();

  if (!character) throw new Error("No character selected");

  return (
    <div data-testid="character-sheet">
      <div>
        <h3>Game Sheet</h3>
        <div>
          System: {gameEngine.getCurrentSystemName() || "No system selected"}
        </div>
      </div>
      <div>
        <h3>Character Sheet</h3>
        <div>
          Name:<span data-testid="character-sheet-name">{character.name}</span>{" "}
        </div>
        <div>
          Description:<span data-testid="character-sheet-description">{character.description}</span>{" "}
        </div>
      </div>
    </div>
  );
}
