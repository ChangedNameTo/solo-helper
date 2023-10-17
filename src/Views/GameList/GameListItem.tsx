import * as React from "react";
import { Game } from "../../Classes/Game";

export default function GameListItem({ game }: { game: Game }) {
  return (
    <ul>{game.getName()}</ul>
  )
}
