import { Sensor } from "../sensors/sensor";
import { SensorErrorEvent } from "../sensors/sensorErrorEvent";
import { SensorOptions } from "../sensors/sensorOptions";
import { GyroscopeReading } from "./gyroscopeReading";

export class Gyroscope implements Sensor, GyroscopeReading {
    // Sensor implementation
    activated: boolean;
    onactivate: (this: Sensor, event: Event) => any;
    onerror: (this: Sensor, event: SensorErrorEvent) => any;
    onreading: (this: Sensor, event: Event) => any;
    addEventListener(type: "activate" | "reading", listener: (this: Sensor, event: Event) => any): void {
    }
    start(): void {
    }
    stop(): void {
    }
    // Sensor implementation End

    // GyroscopeReading implementation End
    get x(): number {
        return this.readings.x;
    }
    get y(): number {
        return this.readings.y;
    }
    get z(): number {
        return this.readings.z;
    }
    // GyroscopeReading implementation End

    constructor (options?: SensorOptions) {
    }

    private readonly readings: GyroscopeReading | undefined;
}