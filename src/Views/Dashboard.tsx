import * as React from "react";
import SystemList from "./SystemList/SystemList";
import CharacterSheet from "./CharacterSheet";
import useGameEngineStore from "../Store";

export default function Dashboard() {
  const gameEngine = useGameEngineStore();
  const gameSystem = gameEngine.getCurrentSystemName();

  const requirments = gameEngine.getCurrentSystemRequirements();

  let unmetRequirements: any[] = [];
  requirments.forEach((req) => {
    if (!gameEngine.meetsRequirement(req)) {
      unmetRequirements.push(req);
    }
  });

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

    const centerCardList = (
      text: string,
      testid: string,
      list: any[],
      subtext?: string
    ) => {
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
                <span className="text-sm text-indigo-800">{subtext}</span>
                <ul role="list" className="list-disc space-y-1 pl-5">
                  {list.map((item) => (
                    <li
                      key={item}
                      className="mt-2 text-sm text-indigo-700"
                      data-testid={item.id}
                    >
                      {item.type} - {item.description}
                    </li>
                  ))}
                </ul>
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
        {unmetRequirements.length > 0 &&
          centerCardList(
            "Unmet Requirements",
            "unmet-requirements-warning",
            unmetRequirements,
            "You must meet all requirements before you can begin playing."
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
