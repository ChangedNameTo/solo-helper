import { createContext } from "react";
import { GameEngine } from "../Classes/GameEngine";
import { GamesAction } from "../Classes/Game";

export const GameEngineContext = createContext<[GameEngine, React.Dispatch<GamesAction>]>([new GameEngine(), () => {}]);