import * as React from "react";
import FormModal from "../Forms/FormModal";
import BondForm from "../Forms/BondForm";
import { PencilIcon } from "@heroicons/react/20/solid";
import { FormsContext } from "../../Contexts/FormContexts";
// TODO: Add the bond gauge
export default function SheetBond(props) {
  const formsContext = React.useContext(FormsContext);
  
  return (
    <>
      <li className="col-span-1 flex rounded-md shadow-sm">
        <div className="flex flex-1 items-center justify-between truncate rounded-md border border-gray-200 bg-white">
          <div className="px-4 py-1 text-sm w-full">
            <a
              href={props.bond.name}
              className="font-bold text-gray-900 hover:text-gray-600"
            >
              {props.bond.name}
            </a>
            <button
              className="place-content-end flex-shrink bg-indigo-600 hover:bg-indigo-500 rounded-lg px-2 py-1 my-1 mx-2"
              onClick={() => formsContext.openModal(props.bond.id)}
            >
              <PencilIcon className="h-5 w-5 text-white" aria-hidden="true" />
            </button>
            <p className="whitespace-normal text-gray-500 flex-shrink">
              {props.bond.description}
            </p>
          </div>
        </div>
      </li>
      <FormModal
        id={props.bond.id}
        title={"Edit Bond"}
        children={<BondForm id={props.bond.id} />}
      />
    </>
  );
}
