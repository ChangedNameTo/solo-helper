import * as React from "react";
import SheetAsset from "./SheetAsset";
import { IronswornCharacter } from "../../../Types/CharacterTypes";

interface SheetAssetListProps { 
  game: IronswornCharacter;
}

export default function SheetAssetList({ game }:SheetAssetListProps ) {
  return (
    <ul>
      {Array.from(game.companions.values()).map((companion) => {
        return <SheetAsset key={companion.type} passedAsset={companion} />;
      })}
      {Array.from(game.paths.values()).map((path) => {
        return <SheetAsset key={path.type} passedAsset={path} />;
      })}
      {Array.from(game.talents.values()).map((talent) => {
        return <SheetAsset key={talent.type} passedAsset={talent} />;
      })}
      {Array.from(game.rituals.values()).map((ritual) => {
        return <SheetAsset key={ritual.type} passedAsset={ritual} />;
      })}
    </ul>
  );
}
