import * as React from "react";
import "./App.css";

import Header from "./Views/Header";
import GameList from "./Views/GameList/GameList";
import { GameEngineContext } from "./Contexts/GameEngineContext";
import AddGames from "./Views/AddGames";
import gameReducer from "./Reducers/GameReducer";
import { GameEngine } from "./Classes/GameEngine";

function App() {
  const [gameEngine, gamesDispatch] = React.useReducer(
    gameReducer,
    new GameEngine()
  );

  React.useEffect(() => {
    // gameEngine.saveGame(gameEngine);
  }, [gameEngine]);

  const render = () => {
    return (
      <GameEngineContext.Provider value={[gameEngine, gamesDispatch]}>
        <div className="App">
          <Header />
          <div
          className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <GameList />
            <AddGames />
          </div>
        </div>
      </GameEngineContext.Provider>
    );
  };

  return render();
}

export default App;
