import { useReducer } from "react";
import "./App.css";

import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

import gameReducer from "./Reducers/GameReducer";

import { IronswornCharacter } from "./components/IronswornCharacter";
import GamesList from "./components/GamesList";
import { GamesContext, GamesDispatchContext } from "./components/GamesContext";

function App() {
  const [games, dispatch] = useReducer(gameReducer, {
    selectedGame: null,
    games: [IronswornCharacter],
  });

  if (games.selectedGame) {
    return <Dashboard />;
  } else {
    return (
      <GamesContext.Provider value={games}>
        <GamesDispatchContext.Provider value={dispatch}>
          <GamesList />;
        </GamesDispatchContext.Provider>
      </GamesContext.Provider>
    );
  }
}

export default App;
