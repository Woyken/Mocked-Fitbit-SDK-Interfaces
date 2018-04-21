export interface PositionError {
    readonly PERMISSION_DENIED: PositionErrorCode.PERMISSION_DENIED;
    readonly POSITION_UNAVAILABLE: PositionErrorCode.POSITION_UNAVAILABLE;
    readonly TIMEOUT: PositionErrorCode.POSITION_UNAVAILABLE;
    readonly code: PositionErrorCode;
    readonly message: string;
}