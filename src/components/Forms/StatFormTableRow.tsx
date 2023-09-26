import * as React from "react";
import { classNames } from "../../assets/Helpers";
import {
  GamesContext,
  GamesDispatchContext,
} from "../../Contexts/GamesContext";
import { StatsAction } from "../../Types/CharacterTypes";

export default function StatFormTableRow({ stat, disabled }) {
  const checkboxes = (stat, column) => {
    const gamesContext = React.useContext(GamesContext);
    const gameDispatchContext = React.useContext(GamesDispatchContext);

    const updateStat = (e, column) => {
      // Check if the stat is currently checked. If yes, we set the new value to 0
      const newStatValue = e.target.checked ? column : 0;

      gameDispatchContext({
        type: "updated_stat",
        gameID: gamesContext.selectedGame,
        stat: stat,
        value: newStatValue,
      } as StatsAction);
    };

    return (
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <input
          type="checkbox"
          className={classNames(
            "h-4 w-4 rounded border-grey-300 text-indigo-600 focus:ring-indigo-600 disabled:opacity-30"
          )}
          checked={stat.value === column}
          disabled={(stat.value !== column && stat.value !== 0) || (disabled[column] && stat.value !== column)}
          onChange={(e) => updateStat(e, column)}
        />
      </td>
    );
  };

  return (
    <tr key={stat.name}>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
        {stat.name} ({stat.initials})
      </td>
      <td className="px-3 py-4 text-sm text-gray-500">{stat.description}</td>
      {checkboxes(stat, 1)}
      {checkboxes(stat, 2)}
      {checkboxes(stat, 3)}
    </tr>
  );
}
