import { Dispatch, createContext } from "react"
import { VowsAction } from "../Types/VowTypes";

export const VowsDispatchContext = createContext({} as Dispatch<VowsAction>);