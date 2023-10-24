import * as React from "react";
import "./App.css";

import Header from "./Views/Header";
import GameList from "./Views/GameList/GameList";
import AddGames from "./Views/AddGames";
import Dashboard from "./Views/Dashboard";
import useGameEngineStore from "./Store";

function App() {
  const gameEngine = useGameEngineStore()
  
  const content = () => {
    if (gameEngine.isGameSelected()) {
      return (
        <Dashboard />
      );
    } else {
      return (
        <>
          <GameList />
          <AddGames />
        </>
      );
    }
  };

  const render = () => {
    return (
      <div className="App">
        <Header />
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{content()}</div>
      </div>
    );
  };

  return render();
}

export default App;
