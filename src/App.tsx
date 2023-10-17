import * as React from "react";
import "./App.css";

import { GameEngine } from "./Classes/GameEngine";
import Header from "./Views/Header";
import GameList from "./Views/GameList";
import { GameEngineContext } from "./Contexts/GameEngineContext";
import AddGames from "./Views/AddGames";

function App() {
  const gameEngine = new GameEngine();

  const [games, gamesDispatch] = gameEngine.getAppValues();

  React.useEffect(() => {
    gameEngine.saveGame(games);
  }, [games]);

  const render = () => {
    return (
      <GameEngineContext.Provider value={{ games, gamesDispatch }}>
        <div className="App">
          <Header />
          <GameList />
          <AddGames/>
        </div>
      </GameEngineContext.Provider>
    );
  };

  return render();
}

export default App;
