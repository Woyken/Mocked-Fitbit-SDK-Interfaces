interface MessageEvent {
    readonly data: any;
}

type ErrorCode = number;

interface ErrorEvent {
    readonly BUFFER_FULL: ErrorCode;
    readonly code: ErrorCode;
    readonly message: string;
}

interface MessagingEventMap {
    bufferedamountdecrease: Event;
    close: CloseEvent;
    error: ErrorEvent;
    message: MessageEvent;
    open: Event;
}

declare enum CloseCode {
    CONNECTION_LOST = 0,
    PEER_INITIATED = 1,
    SOCKET_ERROR = 2,
}

interface CloseEvent {
    readonly CONNECTION_LOST: CloseCode.CONNECTION_LOST;
    readonly PEER_INITIATED: CloseCode.PEER_INITIATED;
    readonly SOCKET_ERROR: CloseCode.SOCKET_ERROR;
    readonly code: CloseCode;
    readonly reason: string;
    readonly wasClean: boolean;
}

declare enum ReadyState {
    CLOSED = "CLOSED",
    OPEN = "OPEN",
}

interface MessageSocket extends EventTarget {
    addEventListener(type: any, listener: (this: MessageSocket, event: MessagingEventMap) => any): void;

    readonly CLOSED: ReadyState.CLOSED;
    //readonly MAX_MESSAGE_SIZE: MessageConstants;
    readonly MAX_MESSAGE_SIZE: number;
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

declare module "messaging" {
    var peerSocket: MessageSocket;
}