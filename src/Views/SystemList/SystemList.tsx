import React from "react";
import { GameEngineContext } from "../../Contexts/GameEngineContext";
import SystemListItem from "./SystemListItem";

export default function SystemList() {
  const [gameEngine, gamesDispatch] = React.useContext(GameEngineContext);
  const systemSelectRef = React.useRef<HTMLInputElement>(null);

  const systems = gameEngine.getSystemsArray();
  
  const selectSystem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // Get the value of the selected radio button
    e.preventDefault();
    const selectedSystem = (
      e.currentTarget.form?.querySelector(
        'input[name="notification-method"]:checked'
      ) as HTMLInputElement
    )?.value;

    gamesDispatch({ type: "select_system", payload: selectedSystem });
  };

  return (
    <div>
      <label
        className="text-base font-semibold text-gray-900"
        data-testid="system-selection-list-label"
      >
        System Selection
      </label>
      <p className="text-sm text-gray-500">
        Which system would you like to use? Once selected, this option cannot
        be changed.
      </p>
      <form className="mt-4">
        <legend className="sr-only">Notification method</legend>
        <div
          className="space-y-4"
          data-testid="system-selection-list"
          ref={systemSelectRef}
        >
          {systems.map((system) => {
            return <SystemListItem system={system} key={system.getName()} />;
          })}
        </div>
        <button
          className="button"
          data-testid="save-system-selection-button"
          onClick={(e) => selectSystem(e)}
        >
          Save System Selection
        </button>
      </form>
    </div>
  );
}