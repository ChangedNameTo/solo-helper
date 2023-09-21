import { Dispatch, createContext } from "react";
import { Messages, MessagesAction } from "../Types/MessageTypes";

interface DraftMessageContext {
  draftText: string;
  setDraftText:(string)=> void
}

export const DraftMessageContext = createContext({} as DraftMessageContext);
export const MessagesContext = createContext({} as Messages);
export const MessagesDispatchContext = createContext(
  {} as Dispatch<MessagesAction>
);
