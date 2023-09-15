import GameFeed from "./GameFeed";
import ExaminerColumn from "./ExaminerColumn";
import Header from "./Header";
import { useState, useReducer } from "react";

import messagesReducer from "../Reducers/MessagesReducer";
import { DraftMessageContext, MessagesContext, MessagesDispatchContext } from "./MessagesContext";
import CharacterSheet from "./CharacterSheet";

export default function Dashboard() {
  const [messages, dispatch] = useReducer(
    messagesReducer,
    []
  )

  const [draftText, setDraftText] = useState("");

  return (
    <MessagesContext.Provider value={messages}>
      <MessagesDispatchContext.Provider value={dispatch}>
        <DraftMessageContext.Provider value={{draftText, setDraftText}}>
          <div className="flex flex-col h-screen grow">
            <Header />

            {/* 3 column wrapper */}
            <div className="flex flex-row grow">
              <div className="w-1/3 border-grey-900 border">
                <CharacterSheet />
              </div>
              <div className="w-1/3 border-grey-900 border">
                <GameFeed />
              </div>
              <div className="w-1/3 border-grey-900 border">
                <ExaminerColumn />
              </div>
            </div>
          </div>
        </DraftMessageContext.Provider>
      </MessagesDispatchContext.Provider>
    </MessagesContext.Provider>
  );
}
