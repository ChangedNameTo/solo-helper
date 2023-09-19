import * as React from "react"

import { Switch } from "@headlessui/react";

import { classNames } from "../../assets/Helpers";

export default function SheetBurden(props) {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <li>
      <Switch.Group as="div" className="flex items-center py-2 px-2">
        <Switch
          checked={props.burden.active}
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
          <span className="font-semibold text-gray-900">{props.burden.name}</span>{" "}
          <span className="text-gray-500">{props.burden.description}</span>
        </Switch.Label>
      </Switch.Group>
    </li>
  );
}
