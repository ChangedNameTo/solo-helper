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
import { GamesContext } from "../Contexts/GamesContext";
import { XCircleIcon } from "@heroicons/react/20/solid";

export default function Dashboard() {
  const [messages, dispatch] = React.useReducer(messagesReducer, []);
  const [draftText, setDraftText] = React.useState("");

  const gamesContext = React.useContext(GamesContext);
  const currentCharacter = gamesContext.gamesMap.get(gamesContext.selectedGame);

  if (!currentCharacter) {
    return;
  }

  const hasVows = () => currentCharacter?.vows.size > 0;
  const hasBonds = () => currentCharacter?.bonds.bonds.length > 0;
  const hasStatBonuses = () =>
    currentCharacter.stats.filter((stat) => stat.value === 0).length === 0;
  const hasAssets = () =>
    (currentCharacter.companions.length +
    currentCharacter.paths.length +
    currentCharacter.rituals.length +
    currentCharacter.talents.length) > 0;
  
  const hasEquipment = () => currentCharacter.equipment.length > 0

  const isReadyForPlay = () => {
    return hasVows() && hasBonds() && hasStatBonuses() && hasAssets();
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
                          Your character does not have any Vows. Create one by
                          clicking here
                        </li>
                      ) : (
                        ""
                      )}
                      {!hasBonds() ? (
                        <li>
                          Your character does not have any Bonds. Create 2 here
                        </li>
                      ) : (
                        ""
                      )}
                      {!hasStatBonuses() ? (
                        <li>Your character does not have any Stat Bonuses. Set them using the pencil icon, or by clicking here</li>
                      ) : (
                        ""
                      )}
                      {!hasAssets() ? (
                        <li>Your character does not have any assets. Click here to open the asset selection menu.</li>
                      ) : (
                        ""
                      )}
                      {!hasEquipment() ? (
                        <li>Your character does not have any equipment. This will not prevent them from starting the game, but you can add equipment here</li>
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
