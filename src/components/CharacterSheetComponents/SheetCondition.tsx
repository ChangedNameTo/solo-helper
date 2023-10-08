import * as React from "react"

import { Condition } from "../../Types/CharacterTypes";

export default function SheetCondition(condition: Condition) {
  return {
    name: condition.name,
    active: condition.active,
  }
}
