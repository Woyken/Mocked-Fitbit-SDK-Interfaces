import { ContainerElement } from "./containerElement";
import { VirtualTileListDelegate } from "./virtualTileListDelegate";
import { VirtualTileListItemUpdateOptions } from "./virtualTileListItemUpdateOptions";

export interface VirtualTileList extends ContainerElement {
    delegate: VirtualTileListDelegate;
    readonly firstVisibleTile: number;
    readonly lastVisibleTile: number;
    length: number;

    redraw(): void;
    updateTile(position: number, options?: VirtualTileListItemUpdateOptions | undefined): void;
}