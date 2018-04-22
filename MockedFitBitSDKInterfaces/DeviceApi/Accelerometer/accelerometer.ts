import { Event } from "../Events/event";
import { Sensor } from "../sensors/sensor";
import { SensorErrorEvent } from "../sensors/sensorErrorEvent";
import { SensorOptions } from "../sensors/sensorOptions";
import { AccelerometerReading } from "./accelerometerReading";

export class Accelerometer implements Sensor, AccelerometerReading {
    // Sensor implementation
    readonly activated: boolean;
    onactivate: (this: Sensor, event: Event) => any;
    onerror: (this: Sensor, event: SensorErrorEvent) => any;
    onreading: (this: Sensor, event: Event) => any;
    addEventListener(): void {
    }
    start(): void {
    }
    stop(): void {
    }
    // Sensor implementation End

    // AccelerometerReading implementation
    readonly timestamp: number | null;
    readonly x: number | null;
    readonly y: number | null;
    readonly z: number | null;
    // AccelerometerReading implementation End

    constructor (options?: SensorOptions) {
    }

    private readonly readings: AccelerometerReading | undefined;
}
