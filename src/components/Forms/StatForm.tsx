import { XCircleIcon } from "@heroicons/react/20/solid";
import * as React from "react";
import StatFormTableRow from "./StatFormTableRow";
import { Game } from "../../Classes/Game";

interface StatFormProps {
  game: Game;
}

export default function StatForm({ game }: StatFormProps) {
  const disabledColumns = () => {
    return {
      1: game.getNumberOfStatsWithValue(1) >= 2,
      2: game.getNumberOfStatsWithValue(2) >= 2,
      3: game.getNumberOfStatsWithValue(3) >= 1,
    };
  };

  const statsNeedingValues = () => game.getNumberOfStatsWithValue(0);

  const statAlertPane = () => {
    return (
      <div className="rounded-md bg-indigo-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <XCircleIcon
              className="h-5 w-5 text-indigo-400"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-semibold text-indigo-800">
              {statsNeedingValues()}{" "}
              {statsNeedingValues() > 1
                ? "stats need values"
                : "stat needs a value"}
            </h3>
            <div className="mt-2 text-sm text-indigo-700">
              <ul role="list" className="list-disc space-y-1 pl-5">
                {game.getZeroValueStats()
                  .map((stat) => stat.name)
                  .map((stat) => {
                    return <li key={stat}>{stat}</li>;
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Stats
          </h1>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            There are five stats. Each is given a value from 1 to 3. When you
            make a move and roll dice, you usually add one of your stats to your
            action die. The move will tell you which stat to add, or give you a
            choice.
          </p>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            To assign stats, pick a bonus across each stat in any order. You can
            give 1 stat a +3 bonus, 2 stats a +2 bonus, and 2 stats a +1 bonus.
          </p>
        </div>
      </div>
      <div className="flow-root">
        <div className="inline-block min-w-full py-2 align-middle">
          {statsNeedingValues() > 0 ? statAlertPane() : ""}
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  +1
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  +2
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  +3
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {game.getStatsArray().map((stat) => (
                <StatFormTableRow
                  key={stat.initials}
                  stat={stat}
                  disabled={disabledColumns()}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
