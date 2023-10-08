import { Companion, Path, Ritual, Talent } from "./AssetTypes";
import { Bond } from "./BondTypes";
import { IronswornCharacter } from "./CharacterTypes";
import { Stat } from "./StatTypes";
import { Vow } from "./VowTypes";

type SheetSectionIterable = Vow | Stat | Bond | Companion | Path | Ritual | Talent;

interface SheetSectionLabels {
    name: string;
    key: string;
}

interface SheetSectionProps {
  section: SheetSectionLabels
  character: IronswornCharacter;
}