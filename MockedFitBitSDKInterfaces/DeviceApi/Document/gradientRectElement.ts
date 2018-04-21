import { Gradient } from "./gradient";
import { RectElement } from "./rectElement";

export interface GradientRectElement extends RectElement {
    gradient: Gradient;
}