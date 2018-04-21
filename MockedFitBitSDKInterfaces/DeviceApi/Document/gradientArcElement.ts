import { ArcElement } from "./arcElement";
import { Gradient } from "./gradient";

export interface GradientArcElement extends ArcElement {
    readonly gradient: Gradient;
}