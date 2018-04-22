import { EventTarget } from "../Events/eventTarget";
import { Charger } from "./charger";

export interface Battery extends EventTarget {
    // EventTarget implementation
    addEventListener(type: "change", listener: (this: Charger, event: Event) => any): void;
    // EventTarget implementation End

    chargeLevel: number;
    charging: boolean;
    onchange: ((this: Charger, event: Event) => any) | undefined;
    timeUntilFull: number;
}