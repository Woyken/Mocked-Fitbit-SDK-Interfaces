import { GraphicsElement } from "./graphicsElement";
import { Transform } from "./transform";

export interface GroupElement extends GraphicsElement {
    groupTransform: Transform | undefined;
}