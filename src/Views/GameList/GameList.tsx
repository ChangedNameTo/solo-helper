import React, { useContext } from "react";
import { GameEngineContext } from "../../Contexts/GameEngineContext";
import { Game } from "../../Classes/Game";
import GameListItem from "./GameListItem";

export default function GameList() {
  const [gameEngine, gamesDispatch] = useContext(GameEngineContext);

  const testid = "game-list";

  const renderGameList = () => {
    if (gameEngine.getGamesArray().length === 0) {
      return (
        <tr data-testid="no-games-list-item">
          <td colSpan={3}>No games added yet</td>
        </tr>
      );
    } else {
      return gameEngine.getGamesArray().map((game: Game) => {
        return <GameListItem game={game} key={game.getID()} />;
      });
    }
  };

  return (
    <div>
      <div>
        <div>
          <h1>Games</h1>
          <p>A list of all of the games on your current engine.</p>
        </div>
      </div>
      <div>
        <table className="table-auto">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">System</th>
              <th scope="col">
                <span>Actions</span>
              </th>
            </tr>
          </thead>
          <tbody data-testid={testid}>{renderGameList()}</tbody>
        </table>
      </div>
    </div>
  );
}
