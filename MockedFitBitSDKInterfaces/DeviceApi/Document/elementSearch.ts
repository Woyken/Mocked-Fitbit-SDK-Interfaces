import { Element } from "./element";

export interface ElementSearch {
    getElementById(id: string): Element | null; // getElementById(id: string): T | null;
    getElementsByClassName(className: string): Element[];
    getElementsByTypeName(typeName: string): Element[];

}