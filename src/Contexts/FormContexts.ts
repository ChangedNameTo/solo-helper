import * as React from "react";

interface FormContext {
  openForms: Map<string, boolean>;
  isOpen: (objectID: string) => boolean;
  setOpenForms: React.Dispatch<React.SetStateAction<Map<string, boolean>>>;
  closeModal: (objectID: string) => void;
  openModal: (objectID: string) => void;
}

export const FormsContext = React.createContext({} as FormContext);
