import * as React from "react";
import Game from "../../Types/Game";
import useGameEngineStore from "../../Store";

export default function GameListItem({ game }: { game: Game }) {
  const selectGame = useGameEngineStore((state) => state.selectGame);
  const deleteGame = useGameEngineStore((state) => state.deleteGame);

  return (
    <tr data-testid="games-list-item">
      <td>{game.id}</td>
      <td>{game.name}</td>
      <td>{game.system?.name}</td>
      <td>{""}</td>
      <td>
        <button
          className="button"
          data-testid="select-game-button"
          onClick={() => selectGame(game.id)}
        >
          Select
        </button>
        <button
          className="button"
          data-testid="delete-game-button"
          onClick={() => deleteGame(game.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
