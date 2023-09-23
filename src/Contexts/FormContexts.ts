import * as React from "react";

interface FormContext {
  openForms: Map<string, boolean>;
  isOpen: (objectID: string) => boolean;
  setOpenForms: (arg0: boolean) => void;
  closeModal: (objectID: string) => void;
  openModal: (objectID: string) => void;
}

export const FormsContext = React.createContext({} as FormContext);

export const generateFormContext = () => {
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
