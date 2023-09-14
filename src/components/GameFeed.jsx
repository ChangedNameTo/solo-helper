import { useEffect, useState } from "react";
import CommandInputBox from "./CommandInputBox";

import MessageListItem from "./MessageListItem";

// Set up the relative date formatter
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

export default function GameFeed() {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("messages");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const newMessage = (messageText) => {
    const draftMessage = {
      id: messages.length + 1,
      type: "text",
      payload: messageText,
      date: Date.now(),
    };
    setMessages([...messages, draftMessage]);
  };

  return (
    <div className="divide-y divide-gray-200 flex-col h-full">
      <ul role="list" className="space-y-6 overflow-auto">
        {messages.map((activityItem, activityItemIdx) => (
          <MessageListItem 
            props={activityItem}
            index={activityItemIdx}
            length={messages.length}
          />
        ))}
      </ul>
      <div className="absolute bottom-0">
        {/* New comment form */}
        <div className="flex gap-x-3">
          <CommandInputBox onClick={(i) => newMessage(i)} />
        </div>
      </div>
    </div>
  );
}
