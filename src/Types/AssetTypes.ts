import { CharactersAction } from "./CharacterTypes";

export type AssetActionTypes =
  | AssetsAction
  | CompanionsAction
  | PathsAction
  | TalentsAction
  | RitualsAction;

export interface AssetsAction extends CharactersAction {
  gameID: string;
}

export interface CompanionsAction {
  payload: Partial<Companion>;
}

export interface PathsAction {
  payload: Partial<Path>;
}

export interface TalentsAction {
  payload: Partial<Talent>;
}

export interface RitualsAction {
  payload: Partial<Ritual>;
}

export interface Asset {
  name: string;
  type: string;
  class: string;
  description: string;
  active: boolean;
  level: number;
  abilities: Array<Ability>;
}

export interface RenderedAsset extends Asset {
  gaugeWidth?: string;
  handleUpdateAssetPayload: (abilityDescription: string) => AssetsAction;
  handleAddAssetPayload: () => AssetsAction;
  handleRemoveAssetPayload: () => AssetsAction;
}

export interface Ability {
  name: string;
  description: string;
  active: boolean;
  starting?: boolean;
}

export interface Companion extends Asset {
  class: "Companion";
  health: {
    min: number;
    max: number;
    current: number;
    reset: number;
  };
}

export interface Path extends Asset {
  class: "Path";
}

export interface Talent extends Asset {
  class: "Talent";
  requirement: string;
}

export interface Ritual extends Asset {
  class: "Ritual";
}
