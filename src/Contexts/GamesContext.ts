import { Dispatch, createContext } from "react";
import { GamesAction } from "../Types/GameTypes";
import { IronswornCharacter } from "../Types/CharacterTypes";
import { GameEngine } from "../Classes/GameEngine";

export const CurrentGameContext = createContext({} as IronswornCharacter)
export const GamesContext = createContext<GameEngine>(new GameEngine());
export const GamesDispatchContext = createContext({} as Dispatch<GamesAction>);
