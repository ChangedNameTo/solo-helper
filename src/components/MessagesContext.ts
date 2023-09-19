import { createContext } from 'react'
import {Message, Messages} from '../Types/MessageTypes'

export const DraftMessageContext = createContext(null);
export const MessagesContext = createContext({} as Messages);
export const MessagesDispatchContext = createContext(null);