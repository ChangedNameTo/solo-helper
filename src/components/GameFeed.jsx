import { useEffect, useState, useRef } from "react";
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

  const messageListRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

    // Calculate the maximum height based on the viewport size
  const calculateMaxHeight = () => {
    const viewportHeight = window.innerHeight;
    const headerHeight = 64; // Adjust this value based on your header size
    const footerHeight = 156; // Adjust this value based on your header size
    return viewportHeight - headerHeight - footerHeight; 
  };

  useEffect(() => {
    // Update the maximum height when the viewport is resized
    const handleResize = () => {
      const maxHeight = calculateMaxHeight();
      messageListRef.current.style.maxHeight = `${maxHeight}px`;
    };

    window.addEventListener('resize', handleResize);
    // Initial calculation and set
    const initialMaxHeight = calculateMaxHeight();
    messageListRef.current.style.maxHeight = `${initialMaxHeight}px`;

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Scroll to the bottom of the message list when new messages are added.
  useEffect(() => {
    messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
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
    <div className="flex flex-col h-full">
        <ul role="list" className="flex-grow space-y-6 overflow-scroll" ref={messageListRef}>
          {messages.map((activityItem, activityItemIdx) => (
            <MessageListItem 
              props={activityItem}
              index={activityItemIdx}
              length={messages.length}
            />
          ))}
        </ul>
      {/* New comment form */}
      <div className="gap-x-3 bg-indigo-500 min-h-0 flex-shrink-0">
        <CommandInputBox onClick={(i) => newMessage(i)}/>
      </div>
    </div>
  );
}
