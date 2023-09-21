import * as React from "react";
import "./App.css";

import Dashboard from "./components/Dashboard";

import gameReducer from "./Reducers/GameReducer";

import { testCharacter } from "./Characters/IronswornCharacter";
import GamesList from "./components/GameList/GamesList";
import { GamesContext, GamesDispatchContext } from "./Contexts/GamesContext";
import { VowFormContext, VowsFormContext, CharacterFormContext } from "./Contexts/FormContexts";
import { Games } from "./Types/GameTypes";

function App() {
  const [games , dispatch] = React.useReducer(gameReducer, {
    selectedGame: "",
    gamesMap: new Map([
      [testCharacter.id,testCharacter]
    ]),
  } as Games);

  const display = () => {
    if (games.selectedGame) {
      return <Dashboard />;
    } else {
      return <GamesList />;
    }
  };

  // TODO: Migrate this into the FormContext folder
  const generateFormContext = () => {
    const [openForms, setOpenForms] = React.useState({});

    const isOpen = (objectID: string): boolean => {
      return openForms[objectID] || false
    }

    const openModal = (objectID: string): void => {
      setOpenForms((prevOpenForms) => ({
        ...prevOpenForms,
        [objectID]:true
      }))
    };
    
    const closeModal = (objectID: string): void => {
      setOpenForms((prevOpenForms) => ({
        ...prevOpenForms,
        [objectID]:false
      }))
    };

    return {
      openForms: openForms,
      isOpen:isOpen,
      setOpenForms: setOpenForms,
      closeModal: closeModal,
      openModal: openModal
    }
  }

  return (
    <GamesContext.Provider value={games}>
      <GamesDispatchContext.Provider value={dispatch}>
        <CharacterFormContext.Provider value={generateFormContext()}>
          <VowsFormContext.Provider value={generateFormContext()}>
            <VowFormContext.Provider value={generateFormContext()}>
              {display()}
            </VowFormContext.Provider>
          </VowsFormContext.Provider>
        </CharacterFormContext.Provider>
      </GamesDispatchContext.Provider>
    </GamesContext.Provider>
  );
}

export default App;
