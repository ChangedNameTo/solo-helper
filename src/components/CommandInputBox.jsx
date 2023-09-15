import React, { useContext } from "react";
import { DraftMessageContext } from "./MessagesContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CommandInputBox(props) {
  const {draftText, setDraftText} = useContext(DraftMessageContext)

  const isCommand = () => draftText[0] === "/";

  const submitCommand = (e) => {
    e.preventDefault();
    props.onClick(draftText);
    setDraftText("");
  };

  return (
    <form className="m-2 flex-auto bg-white" onSubmit={(e) => submitCommand(e)}>
      <div className="relative mt-2 flex items-center">
        <div
          className={classNames(
            isCommand() ? "bg-indigo-600 text-white" : "bg-white text-indigo-600",
            "border-indigo-600 border-2 my-2 mx-2 rounded pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-lg"
          )}
        >
          /
        </div>
        <input
          type="text"
          name="entry"
          id="entry"
          className="block w-full rounded-none rounded-l-md border-0 py-2.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text:sm sm:leading-6 bg-gray-100"
          placeholder="What happens next?"
          onChange={(e) => setDraftText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") submitCommand(e);
          }}
          value={draftText}
        />
        <button
          type="submit"
          className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Enter
        </button>
      </div>
    </form>
  );
}
