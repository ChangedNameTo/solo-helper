import { Companion, Path, Ritual, Talent } from "./AssetTypes";
import { Bond } from "./BondTypes";
import { Gauge, IronswornCharacter } from "./CharacterTypes";
import { Stat } from "./StatTypes";
import { Vow } from "./VowTypes";

export type SheetSectionIterable = Vow | Stat | Bond | Companion | Path | Ritual | Talent | Gauge;
export type SheetSectionIterableArr = Array<SheetSectionIterable>;

export interface SheetSectionLabels {
    name: string;
    key: string;
}

export interface SheetSectionProps {
  section: SheetSectionLabels
  character: IronswornCharacter;
}

export interface SheetSubSectionProps {
  section: SheetSectionLabels
  iterable: SheetSectionIterable;
}