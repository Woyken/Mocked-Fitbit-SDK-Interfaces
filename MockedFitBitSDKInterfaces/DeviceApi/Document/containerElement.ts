import { GraphicsElement } from "./graphicsElement";

export interface ContainerElement extends GraphicsElement {
    overflow: "inherit" | "visible" | "hidden";
}