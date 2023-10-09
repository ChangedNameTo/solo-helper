import * as React from "react";
import SheetAsset from "./SheetAsset";
import { Game } from "../../../Classes/Game";

interface SheetAssetListProps { 
  game: Game;
}

export default function SheetAssetList({ game }:SheetAssetListProps ) {
  return (
    <ul>
      {game.getAssets().map((asset) => {
        return <SheetAsset key={asset.type} passedAsset={asset} />;
      })}
    </ul>
  );
}
