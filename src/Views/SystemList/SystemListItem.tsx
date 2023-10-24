import React from "react";
import GameSystem from "../../Types/GameSystem";

export default function SystemListItem({ system }: { system: GameSystem }) {
  return (
    <div className="flex items-center">
      <input
        id={system.name}
        name="notification-method"
        type="radio"
        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
        data-testid={system.name + "-radio"}
        value={system.id}
      />
      <label
        htmlFor={system.name}
        className="ml-3 block text-sm font-medium leading-6 text-gray-900"
      >
        {system.name}
      </label>
    </div>
  );
}
