import { EventTarget } from "../Events/eventTarget";
import { Charger } from "./charger";

export class Battery implements EventTarget {
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

    chargeLevel: number;
    charging: boolean;
    onchange: ((this: Charger, event: Event) => any) | undefined;
    timeUntilFull: number;
}