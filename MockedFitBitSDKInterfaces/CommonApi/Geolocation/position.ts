import { Coordinates } from "./coordinates";

export interface Position {
    readonly coords: Coordinates;
    readonly timestamp: number;
}