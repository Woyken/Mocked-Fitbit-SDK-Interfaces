import { EventTarget } from "../Events/eventTarget";

export class Charger implements EventTarget {
    // EventTarget implementation
    addEventListener(type: "change", listener: (this: Charger, event: Event) => any): void {
    }
    dispatchEvent(event: Event): boolean {
        throw new Error("Method not implemented.");
    }
    removeEventListener(type: string, listener: EventListener): void {
        throw new Error("Method not implemented.");
    }
    // EventTarget implementation End

    connected: boolean;
    onchange: ((this: Charger, event: Event) => any) | undefined;
    powerIsGood: boolean | undefined;
}