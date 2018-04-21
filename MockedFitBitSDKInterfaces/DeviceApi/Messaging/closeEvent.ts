export interface CloseEvent {
    readonly CONNECTION_LOST: CloseCode.CONNECTION_LOST;
    readonly PEER_INITIATED: CloseCode.PEER_INITIATED;
    readonly SOCKET_ERROR: CloseCode.SOCKET_ERROR;
    readonly code: CloseCode;
    readonly reason: string;
    readonly wasClean: boolean;
}