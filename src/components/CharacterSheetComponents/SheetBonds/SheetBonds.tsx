import * as React from "react";
import SheetBond from "./SheetBond";
import { Bond } from "../../../Types/BondTypes";

export default function SheetBonds({ bonds }) {
  const generateList = () => {
    if (bonds.size) {
      return (
        <ul role="list" className="flex flex-col">
          {Array.from(bonds.values()).map((bond: Bond) => (
            <SheetBond bond={bond} key={bond.id} />
          ))}
        </ul>
      );
    } else {
      return (
        <div className="flex flex-col text-center text-sm">
          No current Bonds
        </div>
      );

    }
  };

  return (
    <div className="overflow-hidden bg-white rounded-md shadow-sm m-2 border-gray-200 border">
      <div className="border-b border-gray-200 bg-white px-4 py-2">
        <h2 className="text-lg font-semibold leading-6 text-gray-900">Bonds</h2>
      </div>
      {generateList()}
    </div>
  );

}