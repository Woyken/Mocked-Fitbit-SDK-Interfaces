import { PositionCallback } from "./positionCallback";

export interface Geolocation {
    clearWatch(watchId: number): void;
    getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback | undefined, options?: PositionOptions | undefined): void;
    watchPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback | undefined, options?: PositionOptions | undefined): number;
}