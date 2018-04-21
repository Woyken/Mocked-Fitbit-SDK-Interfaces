import { ContainerElement } from "./containerElement";
import { TileListItemOperationOptions } from "./tileListItemOperationOptions";

export interface VirtualTileListItem extends ContainerElement {
    align(options: TileListItemOperationOptions): void;
    hide(options?: TileListItemOperationOptions | undefined): void;
    show(options?: TileListItemOperationOptions | undefined): void;
}