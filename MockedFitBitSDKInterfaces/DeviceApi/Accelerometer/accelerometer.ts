import { Event } from "../../eventsAPI/event";
import { Sensor } from "../sensors/sensor";
import { SensorErrorEvent } from "../sensors/sensorErrorEvent";
import { SensorOptions } from "../sensors/sensorOptions";
import { AccelerometerReading } from "./accelerometerReading";

export class Accelerometer implements Sensor, AccelerometerReading {
    // Sensor implementation
    activated: boolean;
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
    get timestamp(): number {
        return 0;
    }
    get x(): number {
        return this.readings.x;
    }
    get y(): number {
        return this.readings.y;
    }
    get z(): number {
        return this.readings.z;
    }
    // AccelerometerReading implementation End

    constructor (options?: SensorOptions) {
    }

    private readonly readings: AccelerometerReading | undefined;
}
