interface CloseEvent extends Event {
    readonly CONNECTION_LOST: CloseCode.CONNECTION_LOST;
    readonly PEER_INITIATED: CloseCode.PEER_INITIATED;
    readonly SOCKET_ERROR: CloseCode.SOCKET_ERROR;
    readonly code: CloseCode;
    readonly reason: string;
    /**
     * Represents whether the connection was cleanly closed or not.
     */
    readonly wasClean: boolean;
}

interface ErrorEvent extends Event {
    readonly BUFFER_FULL: ErrorCode;
    readonly code: ErrorCode;
    readonly message: string;
}

interface MessageEvent extends Event {
    readonly data: any;
}

type ErrorCode = number;

interface MessageSocket extends EventTarget {
    addEventListener(type: any, listener: (this: MessageSocket, event: MessagingEventMap) => any): void;

    readonly CLOSED: ReadyState.CLOSED;
    /**
     * Maximum message size in bytes.
     *
     * readonly MAX_MESSAGE_SIZE: MessageConstants;
     */
    readonly MAX_MESSAGE_SIZE: number;
    readonly OPEN: ReadyState.OPEN;
    /**
     * The number of bytes of application data that have been queued using *send()* but that has not yet transmitted to the tracker.
     */
    bufferedAmount: number;
    /**
     * Will be invoked when a "bufferedamountdecrease" event is dispatched
     */
    onbufferedamountdecrease: ((this: MessageSocket, event: Event) => any) | undefined;
    /**
     * Will be invoked when a "close" event is dispatched
     */
    onclose: ((this: MessageSocket, event: CloseEvent) => any) | undefined;
    /**
     * Will be invoked when an "error" event is dispatched
     */
    onerror: ((this: MessageSocket, event: ErrorEvent) => any) | undefined;
    /**
     * Will be invoked when a "message" event is dispatched
     */
    onmessage: ((this: MessageSocket, event: MessageEvent) => any) | undefined;
    /**
     * Will be invoked when an "open" event is dispatched
     */
    onopen: ((this: MessageSocket, event: Event) => any) | undefined;
    /**
     * The current state of the connection; this is one of the *ReadyState* constants.
     */
    readonly readyState: ReadyState;

    /**
     * Transmit data to the peer using the connection.
     *
     * The communication channel has a maximum message size of **MAX_MESSAGE_SIZE** bytes. If larger messages are needed, it is the responsibility of the endpoints to take care of this at the application layer, possibly using a library to deal with block-wise fragmentation and re-assembly. Internally, the messages may be transmitted through different mechanisms depending on their size, but that is transparent to the endpoints at the API level.
     *
     * The properties of the communication channel are:
     *
     * - A message is sent in the context of a message session.
     *
     * - A message session exists while the endpoints are running, connected and can receive messages.
     *
     * - Messages are delivered and received in the order they are sent.
     *
     * - There is no message loss while the endpoints are connected. This means that there are no gaps. A message is either successfully transmitted, in order, or it failed to be delivered because the channel has been closed (endpoints disconnected). After a failure, the channel is closed and no messages can be exchanged until a new channel is opened. It is possible, however, that the last messages sent before disconnection will never be delivered.
     *
     * - Messages are asynchronous: a (small) number of messages may be queued, to allow the communication channel to be used at its maximum capacity.
     * @param data Data to be sent. Any object that can be serialized to CBOR may be passed. See CBOR **encode**. Throws an *InvalidStateError* error if **readyState** is not **OPEN**. Throws an error if the data cannot be encoded to CBOR or if the CBOR encoding of the data is larger than **MAX_MESSAGE_SIZE** bytes.
     */
    send(data: any): void;
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

declare enum ReadyState {
    CLOSED = "CLOSED",
    OPEN = "OPEN",
}



declare module "messaging" {
    var peerSocket: MessageSocket;
}
