import { Dispatch, createContext } from "react";
import { Games, GamesAction } from "../Types/GameTypes";

export const GamesContext = createContext({} as Games);
export const GamesDispatchContext = createContext({} as Dispatch<GamesAction>);
