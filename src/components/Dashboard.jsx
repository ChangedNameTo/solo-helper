import GameFeed from "./GameFeed";
import ExaminerColumn from "./ExaminerColumn";
import Header from "./Header";
import { useReducer } from "react";

import messagesReducer from "../Reducers/MessagesReducer";
import { MessagesContext, MessagesDispatchContext } from "./MessagesContext";

export default function Dashboard() {
  const [messages, dispatch] = useReducer(
    messagesReducer,
    []
  )

  return (
    <MessagesContext.Provider value={messages}>
      <MessagesDispatchContext.Provider value={dispatch}>
        <div className="flex flex-col h-screen grow">
          <Header />

          {/* 3 column wrapper */}
          <div className="flex flex-row grow">
            <div className="basis-1/3 border-grey-900 border">
              <button
                type="submit"
                className="rounded bg-indigo-600 px-2 py-1 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => localStorage.clear()}
              >
                Clear LocalStorage
              </button>
            </div>
            <div className="basis-1/3 border-grey-900 border">
              <GameFeed />
            </div>
            <div className="basis-1/3 border-grey-900 border">
              <ExaminerColumn />
            </div>
          </div>
        </div>
      </MessagesDispatchContext.Provider>
    </MessagesContext.Provider>
  );
}
