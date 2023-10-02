import * as React from "react";
import SheetVow from "./SheetVow";
import { Vow } from "../../../Types/VowTypes";

export default function SheetVows({ vows }) {
  const generateList = () => {
    if (vows.size) {
      return (
        <ul role="list" className="flex flex-col">
          {Array.from(vows.values()).map((vow: Vow) => (
            <SheetVow vow={vow} key={vow.id} />
          ))}
        </ul>
      );
    } else {
      return (
        <div className="flex flex-col text-center text-sm">
          No current Vows
        </div>
      );

    }
  };

  return (
    <div className="overflow-hidden bg-white rounded-md shadow-sm m-2 border-gray-200 border">
      <div className="border-b border-gray-200 bg-white px-4 py-2">
        <h2 className="text-lg font-semibold leading-6 text-gray-900">Vows</h2>
      </div>
      {generateList()}
    </div>
  );
}
