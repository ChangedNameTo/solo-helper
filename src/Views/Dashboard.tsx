import * as React from "react";
import SystemList from "./SystemList/SystemList";
import CharacterSheet from "./CharacterSheet";
import useGameEngineStore from "../Store";

export default function Dashboard() {
  const gameEngine = useGameEngineStore();
  const gameSystem = gameEngine.getCurrentSystemName()

  const noSystemWarning =
    "Your game does not have a system. This is the very first thing you must select.";

  const leftColumn = () => {
    if (gameSystem === undefined) {
      return (
        <div className="bg-gray-100 h-full space-y-2">
          <SystemList />
        </div>
      );
    } else {
      return <CharacterSheet />;
    }
  };

  const rightColumn = () => {
    return "Game Selected";
  };

  const centerColumn = () => {
    const centerCard = (text: string, testid: string, subtext?: string) => {
      return (
        <div
          className="pt-2 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          data-testid={testid}
        >
          <div className="rounded-md bg-indigo-300 p-4">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-semibold text-indigo-800 text-center">
                  {text}
                </h3>
                <div className="mt-2 text-sm text-indigo-700">{subtext}</div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    return (
      <div className="bg-gray-100 h-full space-y-2">
        {centerCard(
          "Before you get started, there are still several things you must do",
          "get-started-warning"
        )}
        {gameSystem === undefined &&
          centerCard(
            "No System Detected",
            "no-system-warning",
            "This is the very first thing you must do."
          )}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen grow">
      {/* 3 column wrapper */}
      <div className="flex flex-row grow">
        <div className="w-1/3 border-grey-900 border">{leftColumn()}</div>
        <div className="w-1/3 border-grey-900 border">{centerColumn()}</div>
        <div className="w-1/3 border-grey-900 border">{rightColumn()}</div>
      </div>
    </div>
  );
}
