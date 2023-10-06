import * as React from "react";
import SheetAsset from "./SheetAssets/SheetAsset";

export default function SheetAssetList({ game }) {
  return (
    <ul>
      {game.companions.map((companion) => {
        return <SheetAsset key={companion.type} passedAsset={companion} />;
      })}
      {game.paths.map((path) => {
        return <SheetAsset key={path.type} passedAsset={path} />;
      })}
      {game.talents.map((talent) => {
        return <SheetAsset key={talent.type} passedAsset={talent} />;
      })}
      {game.rituals.map((ritual) => {
        return <SheetAsset key={ritual.type} passedAsset={ritual} />;
      })}
    </ul>
  );
}
