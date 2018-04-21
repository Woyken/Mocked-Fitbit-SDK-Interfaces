import { GraphicsElement } from "./graphicsElement";

export interface LineElement extends GraphicsElement {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
}