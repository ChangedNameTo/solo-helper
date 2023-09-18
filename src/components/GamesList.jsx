import { useContext } from "react";
import Header from "./Header";
import { GamesContext, GamesDispatchContext } from "./GamesContext";
import GameButton from "./GameButton";

export default function GamesList() {
  const games = useContext(GamesContext);
  const dispatch = useContext(GamesDispatchContext);

  return (
    <div className="flex flex-col h-screen grow">
      <Header />
      <div className="flex-1 mt-2">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
              Games
            </h1>
            <div>
              <button className="bg-indigo-700 text-white rounded-md text-lg font-semibold px-2 py-1 transition duration-300 hover:bg-indigo-600">
                Start New Game
              </button>
            </div>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap4">
            {games.games.map((game, idx) => (
              <GameButton game={game} idx={idx} key={game.name} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
