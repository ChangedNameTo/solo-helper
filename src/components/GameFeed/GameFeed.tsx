import * as React from "react";

import { useEffect, useRef, useContext } from "react";
import MessageInputBox from "./MessageInputBox";

import MessageListItem from "../MessageListItemTypes/MessageListItem";

// Set up the slash command parser
import {
  MessagesContext,
  MessagesDispatchContext,
} from "../../Contexts/MessagesContext";
import { classNames } from "../../assets/Helpers";

export default function GameFeed() {
  const messages = useContext(MessagesContext);
  const dispatch = useContext(MessagesDispatchContext);

  const messageListRef = useRef({} as HTMLUListElement);
  const commandInputBoxRef: React.MutableRefObject<HTMLDivElement> = useRef(
    {} as HTMLDivElement
  );

  // Calculate the maximum height based on the viewport size
  const calculateMaxHeight = () => {
    if (!commandInputBoxRef.current) {
      return;
    }

    const viewportHeight = window.innerHeight;
    const headerHeight = 64; // Adjust this value based on your header size
    const footerHeight = 60; // Adjust this value based on your header size
    return viewportHeight - headerHeight - footerHeight;
  };

  useEffect(() => {
    // Update the maximum height when the viewport is resized
    const handleResize = () => {
      const maxHeight = calculateMaxHeight();
      messageListRef.current.style.maxHeight = `${maxHeight}px`;
    };

    window.addEventListener("resize", handleResize);
    // Initial calculation and set
    const initialMaxHeight = calculateMaxHeight();
    messageListRef.current.style.maxHeight = `${initialMaxHeight}px`;

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Scroll to the bottom of the message list when new messages are added.
  useEffect(() => {
    messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* List of current messages */}
      <ul
        role="list"
        className={classNames("p-2 flex-grow space-y-2 overflow-scroll")}
        ref={messageListRef}
        style={{ maxHeight: `${calculateMaxHeight()}` }}
      >
        {messages.map((message, idx, arr) => (
          <MessageListItem
            message={message}
            index={idx}
            length={arr.length}
            key={message.id}
          />
        ))}
      </ul>

      {/* New Messages */}
      <div className="bg-indigo-500 min-h-0" ref={commandInputBoxRef}>
        <MessageInputBox
          onClick={(i) =>
            dispatch({
              type: "added",
              text: i,
              date: Date.now(),
            })
          }
        />
      </div>
    </div>
  );
}
