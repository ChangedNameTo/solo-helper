import { useEffect, useState, useRef, useContext } from "react";
import CommandInputBox from "./CommandInputBox";

import MessageListItem from "./MessageListItem";

// Set up the relative date formatter
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

// Set up the slash command parser
import { MessagesContext, MessagesDispatchContext } from "./MessagesContext";

export default function GameFeed() {
  const messages = useContext(MessagesContext)
  const dispatch = useContext(MessagesDispatchContext)

  const messageListRef = useRef(null);

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

  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* List of current messages */}
      <ul role="list" className="m-2 flex-grow space-y-2 overflow-scroll" ref={messageListRef}>
        {messages.map((activityItem, activityItemIdx) => (
          <MessageListItem 
            message={activityItem}
            index={activityItemIdx}
            length={messages.length}
          />
        ))}
      </ul>
      
      {/* New Messages */}
      <div className="bg-indigo-500 min-h-0">
        <CommandInputBox onClick={(i) => dispatch(
          {
            type: 'added',
            id: messages.length + 1,
            text: i,
            date: Date.now()
          }
        )} />
      </div>
    </div>
  );
}
