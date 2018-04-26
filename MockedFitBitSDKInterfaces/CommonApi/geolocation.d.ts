interface PositionOptions {
    enableHighAccuracy?: boolean | undefined;
    maximumAge?: number | undefined;
    timeout?: number | undefined;
}

interface PositionError {
    //readonly PERMISSION_DENIED: PositionErrorCode.PERMISSION_DENIED;
    readonly PERMISSION_DENIED: number;
    //readonly POSITION_UNAVAILABLE: PositionErrorCode.POSITION_UNAVAILABLE;
    readonly POSITION_UNAVAILABLE: number;
    //readonly TIMEOUT: PositionErrorCode.POSITION_UNAVAILABLE;
    readonly TIMEOUT: number;
    //readonly code: PositionErrorCode;
    readonly code: number;
    readonly message: string;
}

type PositionErrorCallback = (error: PositionError) => void;

interface Coordinates {
    readonly accuracy: number;
    readonly altitude: number | null;
    readonly altitudeAccuracy: number | null;
    readonly heading: number | null;
    readonly latitude: number;
    readonly longitude: number;
    readonly speed: number | null;
}

interface Position {
    readonly coords: Coordinates;
    readonly timestamp: number;
}

type PositionCallback = (position: Position) => void;

interface Geolocation {
    clearWatch(watchId: number): void;
    getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback | undefined, options?: PositionOptions | undefined): void;
    watchPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback | undefined, options?: PositionOptions | undefined): number;
}

declare module "geolocation" {
    var geolocation: Geolocation;
}