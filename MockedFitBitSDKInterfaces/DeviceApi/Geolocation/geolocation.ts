import { PositionCallback } from "./positionCallback";

export class Geolocation {
    clearWatch(watchId: number): void {
    }
    getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback | undefined, options?: PositionOptions | undefined): void {
    }
    watchPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback | undefined, options?: PositionOptions | undefined): number {
        throw new Error("Method not implemented.");
    }
}