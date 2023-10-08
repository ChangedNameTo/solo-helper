import * as React from "react";

import { Vow, VowTier } from "../../Types/VowTypes";
import BondForm from "../Forms/BondForm";
import VowForm from "../Forms/VowForm";

export default function SheetVow(vow:Vow) {
  const tierColor = () => {
    switch (vow.tier) {
      case VowTier.Troublesome:
        return "green";
      case VowTier.Dangerous:
        return "yellow";
      case VowTier.Formidable:
        return "orange";
      case VowTier.Extreme:
        return "red";
      case VowTier.Epic:
        return "black";
    }
  };

  const currentVowProgress = () =>
    (vow.current / (vow.max - vow.min)) * 100 + "%";

  return {
    name:vow.name,
    singular: "Vow",
    formChild:<VowForm id={vow.id} />,
    gaugeWidth: currentVowProgress(),
  }
}
