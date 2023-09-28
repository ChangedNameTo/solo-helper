import { CharactersAction } from "./CharacterTypes";

export interface BondsAction extends CharactersAction {
  bondID: string;
  payload:Partial<Bond>
}

export interface Bond {
  id: string;
  name: string;
  description: string;
}