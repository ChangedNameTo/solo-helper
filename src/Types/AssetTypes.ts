import { GamesAction } from "./GameTypes";

export type AssetActionTypes =
  | AssetsAction
  | CompanionsAction
  | PathsAction
  | TalentsAction
  | RitualsAction;

export interface AssetsAction extends GamesAction {
  gameID: string;
}

export interface CompanionsAction extends AssetsAction {
  payload: Companion
}

export interface PathsAction extends AssetsAction{
  payload: Path;
}

export interface TalentsAction extends AssetsAction{
  payload: Talent;
}

export interface RitualsAction extends AssetsAction{
  payload: Ritual;
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
  class: "Combat Talent";
  requirement: string;
}

export interface Ritual extends Asset {
  class: "Ritual";
}
