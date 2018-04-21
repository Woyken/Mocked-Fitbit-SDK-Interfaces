import { GraphicsElement } from "./graphicsElement";

export interface TextElement extends GraphicsElement {
    letterSpacing: number;
    textAnchor: "start" | "middle" | "end";
    textContent: string;
    textOverflow: "clip" | "ellipsis";
    readonly textOverflowing: boolean;
    writingMode: "lr" | "rl";
}