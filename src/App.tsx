import * as React from "react";
import "./App.css";

import Dashboard from "./components/Dashboard";

import gameReducer from "./Reducers/GameReducer";

import { testCharacter } from "./Characters/IronswornCharacter";
import GamesList from "./components/GameList/GamesList";
import { GamesContext, GamesDispatchContext } from "./Contexts/GamesContext";
import { FormsContext } from "./Contexts/FormContexts";
import { Games } from "./Types/GameTypes";

function App() {
  const [games, gamesDispatch] = React.useReducer(gameReducer, {
    selectedGame: "",
    gamesMap: new Map([[testCharacter.id, testCharacter]]),
  } as Games);

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
    <GamesContext.Provider value={games as Games}>
      <GamesDispatchContext.Provider value={gamesDispatch}>
        <FormsContext.Provider value={generateFormContext()}>
          {display()}
        </FormsContext.Provider>
      </GamesDispatchContext.Provider>
    </GamesContext.Provider>
  );
}

export default App;
