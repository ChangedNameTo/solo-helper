import React, { useContext } from "react";
import { GameEngineContext } from "../Contexts/GameEngineContext";

export default function GameList() {
  const { games } = useContext(GameEngineContext);
  console.log(games.getGamesMap());
  return (
    <div className="GameList">
      <h1>Game List</h1>
    </div>
  );
}