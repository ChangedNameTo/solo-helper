import * as React from "react";

import CommandList from "./CommandList";
import NamedObjects from "./NamedObjects";

export default function ExaminerColumn() {
  return (
    <div className="flex flex-col">
      <CommandList />
      <NamedObjects />
    </div>
  );
}
