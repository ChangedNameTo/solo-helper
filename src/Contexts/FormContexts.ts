import { createContext } from "react";

interface FormContext {
  openForms: Map<string, boolean>;
  isOpen: (objectID: string) => boolean;
  setOpenForms: (arg0: boolean) => void;
  closeModal: (objectID: string) => void;
  openModal: (objectID: string) => void;
}

interface VowFormContext extends FormContext {}
interface VowsFormContext extends FormContext {}
interface CharacterFormContext extends FormContext {}

export const VowFormContext = createContext({} as VowFormContext);
export const VowsFormContext = createContext({} as VowsFormContext);
export const CharacterFormContext = createContext({} as CharacterFormContext);
