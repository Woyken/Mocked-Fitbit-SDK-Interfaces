import { EventTarget } from "../Events/eventTarget";
import { TickEvent } from "./tickEvent";

export class Clock implements EventTarget {
    // EventTarget implementation
    dispatchEvent(event: Event): boolean {
        throw new Error("Method not implemented.");
    }
    removeEventListener(type: string, listener: EventListener): void {
    }
    // EventTarget implementation End

    granularity: "off" | "seconds" | "minutes" | "hours";
    ontick: ((this: Clock, event: TickEvent) => any) | undefined;

    addEventListener(type: "tick", listener: (this: Clock, event: TickEvent) => any) {
    }
}