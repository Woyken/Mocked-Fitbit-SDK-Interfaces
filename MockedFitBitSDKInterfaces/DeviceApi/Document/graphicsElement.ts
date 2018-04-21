import { DOMRect } from "./domRect";

export interface GraphicsElement extends Element {
    getBBox(): DOMRect;
}