import * as React from "react"
import SheetStat from "./SheetStat";
import { FormsContext } from "../../Contexts/FormContexts";
import { PencilIcon } from "@heroicons/react/20/solid";

export default function StatsSection({ character }) {
  const formsContext = React.useContext(FormsContext)

  return (
    <>
      <div className="border-b border-gray-200 bg-white px-4 py-2">
        <h2 className="text-lg font-semibold leading-6 text-gray-900">Stats</h2>
      </div>
      <ul role="list" className="flex flex-col">
        {character.stats.map((stat, idx, arr) => (
          <SheetStat stat={stat} idx={idx} key={stat.name} arr={arr} />
        ))}
      </ul>
    </>
  );
}
