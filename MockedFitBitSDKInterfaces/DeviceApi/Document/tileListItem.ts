import { ContainerElement } from "./containerElement";
import { TileListItemOperationOptions } from "./tileListItemOperationOptions";

export interface TileListItem extends ContainerElement {
    align(options: TileListItemOperationOptions): void;
    hide(options?: TileListItemOperationOptions | undefined): void;
    remove(options?: TileListItemOperationOptions | undefined): void;
    show(options?: TileListItemOperationOptions | undefined): void;
}