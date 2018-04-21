import { VirtualTileListItem } from "./virtualTileListItem";
import { VirtualTileListItemInfo } from "./virtualTileListItemInfo";

export interface VirtualTileListDelegate {
    configureTile(tile: VirtualTileListItem, tileInfo: VirtualTileListItemInfo): void;
    getTileInfo(position: number): VirtualTileListItemInfo;

}