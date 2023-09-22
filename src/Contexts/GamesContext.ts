import { Dispatch, createContext } from "react";
import { Games, GamesAction } from "../Types/GameTypes";
import { IronswornCharacter } from "../Types/CharacterTypes";

export const CurrentGameContext = createContext({} as IronswornCharacter)
export const GamesContext = createContext({} as Games);
export const GamesDispatchContext = createContext({} as Dispatch<GamesAction>);
