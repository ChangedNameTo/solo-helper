import * as React from "react";
import "./App.css";

import Header from "./Views/Header";
import GameList from "./Views/GameList/GameList";
import { GameEngineContext } from "./Contexts/GameEngineContext";
import AddGames from "./Views/AddGames";
import gameReducer from "./Reducers/GameEngineReducer";
import { GameEngine } from "./Classes/GameEngine";
import Dashboard from "./Views/Dashboard";

function initialRender(gameEngine: GameEngine) {
  console.log('hi')
  gameEngine.seedGames()
  gameEngine.seedSystems()
  return gameEngine;
}

function App() {
  const [gameEngine, gamesDispatch] = React.useReducer(
    gameReducer,
    new GameEngine({}),
    initialRender
  );
  
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
      <GameEngineContext.Provider value={[gameEngine, gamesDispatch]}>
        <div className="App">
          <Header />
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{content()}</div>
        </div>
      </GameEngineContext.Provider>
    );
  };

  return render();
}

export default App;
