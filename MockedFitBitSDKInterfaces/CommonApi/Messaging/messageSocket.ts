import { EventTarget } from "../../deviceApi/Events/eventTarget";
import { EventMap } from "./eventMap";

export interface MessageSocket extends EventTarget {
    addEventListener(type: K, listener: (this: MessageSocket, event: EventMap[K]) => any): void;

    readonly CLOSED: ReadyState.CLOSED;
    readonly MAX_MESSAGE_SIZE: MessageConstants;
    readonly OPEN: ReadyState.OPEN;
    bufferedAmount: number;
    onbufferedamountdecrease: ((this: MessageSocket, event: Event) => any) | undefined;
    onclose: ((this: MessageSocket, event: CloseEvent) => any) | undefined;
    onerror: ((this: MessageSocket, event: ErrorEvent) => any) | undefined;
    onmessage: ((this: MessageSocket, event: MessageEvent) => any) | undefined;
    onopen: ((this: MessageSocket, event: Event) => any) | undefined;
    readonly readyState: ReadyState;

    send(data: any): void;
}