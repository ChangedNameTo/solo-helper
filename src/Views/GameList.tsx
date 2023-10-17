import React, { useContext } from "react";
import { GameEngineContext } from "../Contexts/GameEngineContext";
import { Game } from "../Classes/Game";

export default function GameList() {
  const [gameEngine, gamesDispatch] = useContext(GameEngineContext);
  console.log(gameEngine.getGamesArray());
  return (
    <div>
      <h1>Game List</h1>
      <li data-testid="game-list">
        {gameEngine.getGamesArray().map((game: Game) => {
          return <div key={game.getID()}>{game.getName()}</div>;
        })}
      </li>
    </div>
  );
}
