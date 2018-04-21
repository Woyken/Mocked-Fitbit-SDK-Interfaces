import { Sensor } from "../sensors/sensor";
import { SensorErrorEvent } from "../sensors/sensorErrorEvent";
import { OrientationSensorReading } from "./orientationSensorReading";
import { SensorOptions } from "../sensors/sensorOptions";

export class OrientationSensor implements Sensor, OrientationSensorReading {
    // Sensor implementation
    activated: boolean;
    onactivate: (this: Sensor, event: Event) => any;
    onerror: (this: Sensor, event: SensorErrorEvent) => any;
    onreading: (this: Sensor, event: Event) => any;
    addEventListener(type: "activate" | "reading", listener: (this: Sensor, event: Event) => ): void {
        throw new Error("Method not implemented.");
    }
    start(): void {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }
    // Sensor implementation End

    // OrientationSensorReading implementation
    get quaternion(): number[] {
        return this.readings.quaternion;
    }
    get timestamp(): number {
        return this.readings.timestamp;
    }
    // OrientationSensorReading implementation End

    constructor (options?: SensorOptions) {
    }

    private readonly readings: OrientationSensorReading | undefined;
}