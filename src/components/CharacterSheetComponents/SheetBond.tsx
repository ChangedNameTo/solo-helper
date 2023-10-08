import * as React from "react";
import { Bond } from "../../Types/BondTypes";
import BondForm from "../Forms/BondForm";

export interface SheetBondProps {
  bond:Bond
}

export default function SheetBond(bond) {
  return {
    name: bond.name,
    formChild:<BondForm id={bond.id} />,
    singular:"Bond",
  };
}
