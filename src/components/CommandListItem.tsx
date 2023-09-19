import * as React from "react"

import { DraftMessageContext } from "./MessagesContext"

export default function CommandListItem(props) {
  const {draftText, setDraftText} = React.useContext(DraftMessageContext)

  return (
    <li>
      <button
        type="submit"
        className="rounded bg-indigo-600 px-1 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
        "
        onClick={() => setDraftText(props.commandText.commandText)}
      >
        {props.commandText.commandText}
      </button>
    </li>
  )
}