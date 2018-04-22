import { EventTarget } from "../Events/eventTarget";
import { TickEvent } from "./tickEvent";

export interface Clock extends EventTarget {
    granularity: "off" | "seconds" | "minutes" | "hours";
    ontick: ((this: Clock, event: TickEvent) => any) | undefined;

    addEventListener(type: "tick", listener: (this: Clock, event: TickEvent) => any): void;
}