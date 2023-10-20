import * as React from "react";
import { Game } from "../../Classes/Game";
import { GameEngineContext } from "../../Contexts/GameEngineContext";

export default function GameListItem({ game }: { game: Game }) {
  const [gameEngine, gamesDispatch] = React.useContext(GameEngineContext);

  const deleteGame = () => {
    gamesDispatch({
      type: "delete_game",
      payload: game.getID(),
    });
  };

  const selectGame = () => {
    gamesDispatch({
      type: "select_game",
      payload: game.getID(),
    });
  }

  return (
    <tr data-testid="games-list-item">
      <td>{game.getID()}</td>
      <td>{game.getName()}</td>
      <td>{game.getSystemName()}</td>
      <td>
        <button
          className="button"
          data-testid="select-game-button"
          onClick={() => selectGame()}
        >
          Select
        </button>
        <button
          className="button"
          data-testid="delete-game-button"
          onClick={() => deleteGame()}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
