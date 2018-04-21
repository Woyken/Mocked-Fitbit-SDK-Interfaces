import { GraphicsElement } from "./graphicsElement";

export interface CircleElement extends GraphicsElement {
    cx: number;
    cy: number;
    r: number;
}