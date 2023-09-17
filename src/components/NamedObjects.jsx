import { useContext } from "react";
import { MessagesContext } from "./MessagesContext";

import { timeAgo } from "../assets/Helpers";

export default function NamedObjects() {
  const messages = useContext(MessagesContext);
  const lastMessage = messages[messages.length - 1];

  const dlItem = (label, value) => {
    return (
      <div className="px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">{label}</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {value}
        </dd>
      </div>
    );
  };

  return (
    <div className="px-1">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Last Message Inspector
        </h3>
      </div>
      <div className="mt-1 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          {lastMessage ? (
            <>
              {dlItem("Message ID", lastMessage.id)}
              {dlItem("Message Type", lastMessage.type)}
              {dlItem("Message Text", lastMessage.text)}
              {lastMessage.type === "command"
                ? dlItem("Slash Command", lastMessage.command)
                : ""}
              {lastMessage.type === "command"
                ? dlItem("Dice Notation", lastMessage.fields.notation)
                : ""}
              {lastMessage.type === "command"
                ? dlItem("Roll Result", lastMessage.fields.rollResult)
                : ""}
              {dlItem("Sent On", timeAgo.format(lastMessage.date))}
            </>
          ) : (
            <>{dlItem("No Current Messages", "Send a Message")}</>
          )}
        </dl>
      </div>
    </div>
  );
}
