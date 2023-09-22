import { GamesAction } from "./GameTypes";

export interface VowsAction extends GamesAction{
  type: "updated_vow";
  vowID: string;
  payload: Partial<Vow>;
}

export enum VowTier {
  Troublesome = "Troublesome",
  Dangerous = "Dangerous",
  Formidable = "Formidable",
  Extreme = "Extreme",
  Epic = "Epic",
}

export interface Vow {
  id: string;
  name: string;
  description: string;
  tier: VowTier;
  min: number;
  max: number;
  current: number;
}