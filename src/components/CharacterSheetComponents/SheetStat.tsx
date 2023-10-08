import { initial } from "lodash";
import * as React from "react";

export default function SheetStat(stat) {
  const dispatchStatMoveRoll = {
    type: "added",
    text: `/moveroll 1d6+${stat.value} ${stat.initials}`,
    date: Date.now(),
  };

  const textDecoration = (statValue) => {
    if (statValue < 0) {
      return "-";
    } else {
      return " ";
    }
  };

  return {
    name: stat.name,
    initials: stat.initials,
    buttonAction: dispatchStatMoveRoll,
    value: textDecoration(stat.value) + stat.value,
  };
}
