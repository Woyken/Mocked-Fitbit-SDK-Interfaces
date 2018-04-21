import {  } from "./eventTarget";

export interface Event {
    readonly defaultPrevented: boolean;
    readonly target: EventTarget | undefined;
    readonly type: string;

    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
}