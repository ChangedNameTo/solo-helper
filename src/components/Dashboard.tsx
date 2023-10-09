import * as React from "react";

import GameFeed from "./GameFeed/GameFeed";
import ExaminerColumn from "./ExaminerColumn/ExaminerColumn";
import Header from "./Header";

import messagesReducer from "../Reducers/MessagesReducer";
import {
  DraftMessageContext,
  MessagesContext,
  MessagesDispatchContext,
} from "../Contexts/MessagesContext";
import CharacterSheet from "./CharacterSheetComponents/CharacterSheet";
import { GamesContext, GamesDispatchContext } from "../Contexts/GamesContext";
import { XCircleIcon } from "@heroicons/react/20/solid";
import { generateUUID } from "../assets/Helpers";
import { FormsContext } from "../Contexts/FormContexts";
import { VowTier, VowsAction } from "../Types/VowTypes";
import { BondsAction } from "../Types/BondTypes";

export default function Dashboard() {
  const [messages, dispatch] = React.useReducer(messagesReducer, []);
  const [draftText, setDraftText] = React.useState("");

  const gamesContext = React.useContext(GamesContext);
  const currentCharacter = gamesContext.gamesMap.get(gamesContext.selectedGame);

  const gamesDispatch = React.useContext(GamesDispatchContext);
  const formsContext = React.useContext(FormsContext);

  if (!currentCharacter) {
    return;
  }

  const hasVows = () => currentCharacter?.vows.size > 0;
  const hasBonds = () => currentCharacter?.bonds.size > 0;
  const hasStatBonuses = () =>
    Array.from(currentCharacter.stats.values()).filter((stat) => stat.value === 0).length === 0;

  const hasAssets = () =>
    currentCharacter.companions.size +
      currentCharacter.paths.size +
      currentCharacter.rituals.size +
      currentCharacter.talents.size >
    0;

  const hasEquipment = () => currentCharacter.equipment.length > 0;

  const isReadyForPlay = () => {
    return hasVows() && hasBonds() && hasStatBonuses() && hasAssets();
  };

  const createNewVow = () => {
    const newID = generateUUID();

    gamesDispatch({
      type: "added_vow",
      gameID: currentCharacter.id,
      vowID: newID,
      payload: {
        id: newID,
        name: "Vow Name",
        description: "Who sent you on this quest? What is your objective?",
        tier: VowTier.Extreme,
        min: 0,
        max: 40,
        current: 0,
      },
    });

    formsContext.openModal(newID);
  };

  const createNewBond = () => {
    const newID = generateUUID();

    gamesDispatch({
      type: "added_bond",
      gameID: currentCharacter.id,
      bondID: newID,
      payload: {
        id: newID,
        name: "New Bond Name",
        description:
          "What places do you return to? When your journey is too much to bear, to whom do you turn?",
      },
    });

    formsContext.openModal(newID);
  };

  const centerColumn = () => {
    if (isReadyForPlay()) {
      return <GameFeed />;
    } else {
      return (
        <div className="bg-gray-100 h-full">
          <div className="my-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-md bg-indigo-300 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <XCircleIcon
                    className="h-5 w-5 text-indigo-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-semibold text-indigo-800">
                    Before you get started, there are still several things you
                    must do:
                  </h3>
                  <div className="mt-2 text-sm text-indigo-700">
                    <ul role="list" className="list-disc space-y-1 pl-5">
                      {!hasVows() ? (
                        <li>
                          Your character does not have any Vows.{" "}
                          <a
                            href="#"
                            className="underline hover:text-indigo-600"
                            onClick={() => createNewVow()}
                          >
                            Create one by clicking here
                          </a>
                        </li>
                      ) : (
                        ""
                      )}
                      {!hasBonds() ? (
                        <li>
                          Your character does not have any Bonds.{" "}
                          <a
                            href="#"
                            className="underline hover:text-indigo-600"
                            onClick={() => createNewBond()}
                          >
                            Create at least one by clicking here.
                          </a>{" "}
                          Start with no more than three bonds.
                        </li>
                      ) : (
                        ""
                      )}
                      {!hasStatBonuses() ? (
                        <li>
                          Your character does not have any Stat Bonuses.{" "}
                          <a
                            href="#"
                            className="underline hover:text-indigo-600"
                            onClick={() => formsContext.openModal(currentCharacter.id)}
                          >
                            Set them by clicking here, or by clicking the Pencil
                            Icon.
                          </a>{" "}
                        </li>
                      ) : (
                        ""
                      )}
                      {!hasAssets() ? (
                        <li>
                          Your character does not have any assets.{" "}
                          <a
                            href="#"
                            className="underline hover:text-indigo-600"
                            onClick={() => formsContext.openModal("ASSETS")}
                          >
                            Click here to open the asset selection menu.
                          </a>{" "}
                        </li>
                      ) : (
                        ""
                      )}
                      {!hasEquipment() ? (
                        <li>
                          Your character does not have any equipment. This will
                          not prevent them from starting the game, but you can{" "}
                          <a
                            href="#"
                            className="underline hover:text-indigo-600"
                          >
                            add equipment by clicking here.
                          </a>{" "}
                        </li>
                      ) : (
                        ""
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <MessagesContext.Provider value={messages}>
      <MessagesDispatchContext.Provider value={dispatch}>
        <DraftMessageContext.Provider value={{ draftText, setDraftText }}>
          <div className="flex flex-col h-screen grow">
            <Header />

            {/* 3 column wrapper */}
            <div className="flex flex-row grow">
              <div className="w-1/3 border-grey-900 border">
                <CharacterSheet />
              </div>
              <div className="w-1/3 border-grey-900 border">
                {centerColumn()}
              </div>
              <div className="w-1/3 border-grey-900 border">
                <ExaminerColumn />
              </div>
            </div>
          </div>
        </DraftMessageContext.Provider>
      </MessagesDispatchContext.Provider>
    </MessagesContext.Provider>
  );
}
