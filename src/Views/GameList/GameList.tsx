import React, { useContext } from "react";
import { GameEngineContext } from "../../Contexts/GameEngineContext";
import { Game } from "../../Classes/Game";
import GameListItem from "./GameListItem";

export default function GameList() {
  const [gameEngine, gamesDispatch] = useContext(GameEngineContext);

  const testid = "game-list";

  const renderGameList = () => {
    if (gameEngine.getGamesArray().length === 0) {
      return <li data-testid={testid}>No games added yet</li>;
    } else {
      return (
        <li data-testid={testid}>
          {gameEngine.getGamesArray().map((game: Game) => {
            return <GameListItem game={game} />;
          })}
        </li>
      );
    }
  };

  return (
    <div>
      <h1>Game List</h1>
      {renderGameList()}
    </div>
  );
}
