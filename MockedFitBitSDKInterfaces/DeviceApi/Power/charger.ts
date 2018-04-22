import { EventTarget } from "../Events/eventTarget";

export interface Charger extends EventTarget {
    addEventListener(type: "change", listener: (this: Charger, event: Event) => any): void;

    connected: boolean;
    onchange: ((this: Charger, event: Event) => any) | undefined;
    powerIsGood: boolean | undefined;
}