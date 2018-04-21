import { Event } from "./event";
import { EventListener } from "./eventListener";

export interface EventTarget {
    addEventListener(type: string, listener: EventListener): void;
    dispatchEvent(event: Event): boolean;
    removeEventListener(type: string, listener: EventListener): void;
}