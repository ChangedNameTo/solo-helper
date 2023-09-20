import * as React from "react";
import "./App.css";

import Dashboard from "./components/Dashboard";

import gameReducer from "./Reducers/GameReducer";

import { testCharacter } from "./Characters/IronswornCharacter";
import GamesList from "./components/GamesList";
import { GamesContext, GamesDispatchContext } from "./Contexts/GamesContext";

function App() {
  const [games, dispatch] = React.useReducer(gameReducer, {
    selectedGame: null,
    games: [testCharacter],
  });

  if (games.selectedGame) {
    return (
      <GamesContext.Provider value={games}>
        <GamesDispatchContext.Provider value={dispatch}>
          <Dashboard />;
        </GamesDispatchContext.Provider>
      </GamesContext.Provider>
    );
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
