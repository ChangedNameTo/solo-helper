import * as React from "react";
import "./App.css";

import Dashboard from "./components/Dashboard";
import GamesList from "./components/GameList/GamesList";
import { GamesContext, GamesDispatchContext } from "./Contexts/GamesContext";
import { FormsContext } from "./Contexts/FormContexts";
import { GameEngine } from "./Classes/GameEngine";

function App() {
  const gameEngine = new GameEngine()

  const [games, gamesDispatch] = gameEngine.getAppValues()

  React.useEffect(() => {
    gameEngine.saveGame(games)
  }, [games]);

  const display = () => {
    if (games.selectedGame) {
      return <Dashboard />;
    } else {
      return <GamesList />;
    }
  };

  const generateFormContext = () => {
    const [openForms, setOpenForms] = React.useState(new Map());

    const isOpen = (objectID: string): boolean => {
      return openForms[objectID] || false;
    };

    const openModal = (objectID: string): void => {
      setOpenForms((prevOpenForms) => ({
        ...prevOpenForms,
        [objectID]: true,
      }));
    };

    const closeModal = (objectID: string): void => {
      setOpenForms((prevOpenForms) => ({
        ...prevOpenForms,
        [objectID]: false,
      }));
    };

    return {
      openForms: openForms,
      isOpen: isOpen,
      setOpenForms: setOpenForms,
      closeModal: closeModal,
      openModal: openModal,
    };
  };

  // TODO: Migrate this into the FormContext folder

  return (
    <GamesContext.Provider value={games}>
      <GamesDispatchContext.Provider value={gamesDispatch}>
        <FormsContext.Provider value={generateFormContext()}>
          {display()}
        </FormsContext.Provider>
      </GamesDispatchContext.Provider>
    </GamesContext.Provider>
  );
}

export default App;
