import { createContext } from "react";
import { GameEngine } from "../Classes/GameEngine";
import React from "react";
import { GameAction } from "../Reducers/GameEngineReducer";

export const GameEngineContext = createContext<
  [GameEngine, React.Dispatch<GameAction>]
>([{} as GameEngine, () => {}]);
