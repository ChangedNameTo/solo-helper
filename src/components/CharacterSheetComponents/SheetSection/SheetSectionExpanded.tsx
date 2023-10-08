import * as React from "react";
import { classNames } from "../../../assets/Helpers";
import { MessagesDispatchContext } from "../../../Contexts/MessagesContext";
import SheetGauge from "../SheetGauge";
import SheetStat from "../SheetStat";
import SheetVow from "../SheetVow";
import { PencilIcon } from "@heroicons/react/20/solid";
import { FormsContext } from "../../../Contexts/FormContexts";
import FormModal from "../../Forms/FormModal";
import SheetBond from "../SheetBond";
import SheetCondition from "../SheetCondition";

function SheetSectionExpandedFactory(
  section: {
    name: string;
    key: string;
  },
  iterable: any
) {
  switch (section.key) {
    case "stats": {
      return SheetStat(iterable);
    }
    case "gauges": {
      return SheetGauge(iterable);
    }
    case "vows": {
      return SheetVow(iterable);
    }
    case "bonds": {
      return SheetBond(iterable);
    }
    case "conditions": 
    case "banes": 
    case "burdens": {
      return SheetCondition(iterable);
    }
    case "default": {
      throw new Error("Invalid Section Type");
    }
  }
}

export default function SheetSectionExpanded({ section, iterable }) {
  const dispatch = React.useContext(MessagesDispatchContext);
  const sectionValues = SheetSectionExpandedFactory(section, iterable);
  const formsContext = React.useContext(FormsContext);

  const dispatchButtonAction = () => {
    dispatch(sectionValues.buttonAction);
  };

  return (
    <>
      <li className="col-span-1 flex border-gray-200 border-t border-b">
        {/* TODO: Add logic to unhover when no dispatch action */}
        {sectionValues.value && (
          <button
            className={classNames(
              "bg-indigo-600 hover:bg-indigo-500 flex w-16 flex-shrink-0 items-center justify-center text-xl font-bold text-white last:rounded-bl-md"
            )}
            onClick={() => dispatchButtonAction()}
          >
            {sectionValues.value}
          </button>
        )}
        <div
          className={classNames(
            "flex flex-1 items-center justify-between truncate bg-white last:rounded-br-md"
          )}
        >
          <div className="px-4 py-1 text-sm w-full">
            <a
              href={iterable.href}
              className="font-bold text-gray-900 hover:text-gray-600"
            >
              {iterable.name}
              {iterable.initials && (
                <div className="pl-2 inline text-gray-400 font-semibold">
                  ({iterable.initials})
                </div>
              )}
            </a>
            <button
              className="place-content-end flex-shrink bg-indigo-600 hober:bg-indigo-500 rounded-lg px-2 py-1 my-1 mx-2"
              onClick={() => formsContext.openModal(iterable.id)}
            >
              <PencilIcon className="h-5 w-5 text-white" aria-hidden="true" />
            </button>
            {sectionValues.gaugeWidth && (
              <div className="relative mt-1 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="absolute z-10 bg-blue-600 h-2.5 rounded-full"
                  style={{ width: sectionValues.gaugeWidth }}
                ></div>
              </div>
            )}
            <p className="whitespace-normal text-gray-500">
              {iterable.description}
            </p>
          </div>
        </div>
      </li>
      <FormModal
        id={iterable.id}
        title={`Edit ${sectionValues.singular}`}
        children={sectionValues.formChild}
      />
    </>
  );
}
