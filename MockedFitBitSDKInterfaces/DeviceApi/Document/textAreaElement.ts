import { TextElement } from "./textElement";

export interface TextAreaElement extends TextElement {
    baseline: number;
    displayAlign: "top" | "center" | "bottom";
    lineIncrement: number;
    rows: number;
}