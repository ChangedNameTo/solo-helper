import { Dispatch, createContext } from "react";
import { Messages, MessagesAction } from "../Types/MessageTypes";

export const DraftMessageContext = createContext({});
export const MessagesContext = createContext({} as Messages);
export const MessagesDispatchContext = createContext(
  {} as Dispatch<MessagesAction>
);
