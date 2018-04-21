import { GraphicsElement } from "./graphicsElement";
import { TileListItem } from "./tileListItem";
import { TileListItemOperationOptions } from "./tileListItemOperationOptions";

export interface TileList extends GraphicsElement {
    readonly length: number;

    getTile(position: number): TileListItem;
    insertTile(item: TileListItem, position: number, options?: TileListItemOperationOptions | undefined): void;
    obtainTile(type: string): TileListItem | null;
    redraw(): void;
}