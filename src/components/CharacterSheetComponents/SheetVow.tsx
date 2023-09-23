import * as React from "react";

import { classNames } from "../../assets/Helpers";
import ProgressRing from "./ProgressRing";
import { VowTier } from "../../Types/VowTypes";

import { PencilIcon } from "@heroicons/react/20/solid";

import VowForm from "../Forms/VowForm";
import FormModal from "../Forms/FormModal";
import { FormsContext } from "../../Contexts/FormContexts";

export default function SheetVow(props) {
  const formsContext = React.useContext(FormsContext);

  const tierColor = () => {
    switch (props.vow.tier) {
      case VowTier.Troublesome:
        return "green";
      case "dangerous":
        return "yellow";
      case "formidable":
        return "orange";
      case "extreme":
        return "red";
      case VowTier.Epic:
        return "black";
    }
  };

  const tierColorString = () => {
    const color = tierColor();
    return `bg-${color}-400 text-${color}-700 ring-${color}-600/20`;
  };

  const currentVowProgress = () =>
    (props.vow.current / (props.vow.max - props.vow.min)) * 100;

  return (
    <>
      <li className="col-span-1 flex border-gray-200 border-t border-b">
        <div className="bg-indigo-600 hover:bg-indigo-500 flex min-w-16 flex-shrink-0 items-center justify-center text-xl font-bold text-white">
          <ProgressRing progress={currentVowProgress()} />
        </div>
        <div className="flex flex-1 items-center justify-between truncate border border-gray-200 bg-white">
          <div className="px-4 py-1 text-sm w-full">
            <a
              href={props.vow.href}
              className="font-bold text-gray-900 hover:text-gray-600"
            >
              {props.vow.name}
            </a>
            <div
              className={classNames(
                tierColorString(),
                "inline-flex flex-shrink-0 items-center rounded-full ml-3 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
              )}
            >
              {props.vow.tier}
            </div>
            <button
              className="place-content-end flex-shrink bg-indigo-600 hover:bg-indigo-500 rounded-lg px-2 py-1 my-1 mx-2"
              onClick={() => formsContext.openModal(props.vow.id)}
            >
              <PencilIcon className="h-5 w-5 text-white" aria-hidden="true" />
            </button>
            <p className="whitespace-normal text-gray-500 flex-shrink">
              {props.vow.description}
            </p>
          </div>
        </div>
      </li>
      <FormModal id={props.vow.id} children={<VowForm id={props.vow.id} />} />
    </>
  );
}
