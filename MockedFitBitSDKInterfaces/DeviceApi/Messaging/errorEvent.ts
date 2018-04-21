export interface ErrorEvent {
    readonly BUFFER_FULL: ErrorCode;
    readonly code: ErrorCode;
    readonly message: string;
}