import React from "react";
import { GameEngineContext } from "../Contexts/GameEngineContext";

export default function CharacterSheet() {
  const [gameEngine, gamesDispatch] = React.useContext(GameEngineContext);
  const game = gameEngine.getSelectedGame();
  const gameSystem = game?.getSystem();

  return (
    <div>
      {gameSystem.getName()}
    </div>
  )
}