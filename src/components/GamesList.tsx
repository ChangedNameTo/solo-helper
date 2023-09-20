import * as React from "react";

import { Fragment, useState, useContext } from "react";

import Header from "./Header";
import { GamesContext, GamesDispatchContext } from "../Contexts/GamesContext";
import GameButton from "./GameButton";
import CharacterForm from "./CharacterForm";

export default function GamesList() {
  const games = useContext(GamesContext);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = (): void => {
    setIsOpen(false);
  };

  const openModal = (): void => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="flex flex-col h-screen grow">
        <Header />
        <div className="flex-1 pt-2">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
                Games
              </h1>
              <div>
                <button
                  className="bg-indigo-700 text-white rounded-md text-lg font-semibold px-2 py-1 transition duration-300 hover:bg-indigo-600"
                  onClick={openModal}
                >
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

      <CharacterForm isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}
