import { useState } from "react";
import { Switch } from "@headlessui/react";

import { classNames } from "../../assets/Helpers";

export default function SheetCompanion(props) {
  const [enabled, setEnabled] = useState(false);
  
  const gaugeWidth = () =>
    (props.companion.health.current / (props.companion.health.max - props.companion.health.min)) * 100 + "%";

  return (
    <li className="m-2 rounded-md border-2 border-indigo-600">
      <div className="rounded-md border-b border-gray-200 bg-white px-4 py-2">
        <h3 className="text-base font-semibold leading-6 text-gray-900">{props.companion.name}</h3>
        <div className="mt-1 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: gaugeWidth() }}
          ></div>
        </div>
      </div>
      <div className="divide-y">
      {props.companion.abilities.map((ability) => (
        <Switch.Group key={ability.name} as="div" className="flex items-center py-2 px-2">
          <Switch
            checked={ability.active}
            onChange={setEnabled}
            className={classNames(
              enabled ? "bg-indigo-600" : "bg-gray-200",
              "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            )}
          >
            <span
              aria-hidden="true"
              className={classNames(
                enabled ? "translate-x-5" : "translate-x-0",
                "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
              )}
            />
          </Switch>
          <Switch.Label as="span" className="ml-3 text-sm">
            <span className="font-semibold text-gray-900">{ability.name}</span>{" "}
            <span className="text-gray-500">{ability.description}</span>
          </Switch.Label>
        </Switch.Group>
      ))}

      </div>
    </li>
  );
}
