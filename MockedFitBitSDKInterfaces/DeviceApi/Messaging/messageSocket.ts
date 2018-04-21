import { EventTarget } from "../Events/eventTarget";
import { EventMap } from "../Document/eventMap";

export class MessageSocket implements EventTarget {
    // EventTarget implementation
    addEventListener(type: K, listener: (this: MessageSocket, event: EventMap[K]) => any): void{
    }
    dispatchEvent(event: Event): boolean {
        throw new Error("Method not implemented.");
    }
    removeEventListener(type: string, listener: EventListener): void {
        throw new Error("Method not implemented.");
    }
    // EventTarget implementation End

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

    send(data: any): void {
    }
}