import { GraphicsElement } from "./graphicsElement";

export interface ArcElement extends GraphicsElement {
    arcWidth: number;
    startAngle: number;
    sweepAngle: number;
}