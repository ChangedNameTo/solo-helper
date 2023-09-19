import * as React from "react";

import { Fragment, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";

import Header from "./Header";
import { GamesContext, GamesDispatchContext } from "./GamesContext";
import GameButton from "./GameButton";
import NewCharacterForm from "./NewCharacterForm"

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
        <div className="flex-1 mt-2">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
                Games
              </h1>
              <div>
                <button className="bg-indigo-700 text-white rounded-md text-lg font-semibold px-2 py-1 transition duration-300 hover:bg-indigo-600" onClick={openModal}>
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

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-900"
                  >
                    New Character Creation
                  </Dialog.Title>
                  <NewCharacterForm />
                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
