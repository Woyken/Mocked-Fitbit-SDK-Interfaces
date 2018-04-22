import { Sensor } from "../Sensors/sensor";
import { SensorErrorEvent } from "../Sensors/sensorErrorEvent";
import { SensorOptions } from "../Sensors/sensorOptions";
import { HeartRateSensorReading } from "./heartRateSensorReading";

export class HeartRateSensor implements Sensor, HeartRateSensorReading {
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

    // AccelerometerReading implementation
    readonly timestamp: number | null;
    readonly heartRate: number | null;
    // AccelerometerReading implementation End

    constructor(options?: SensorOptions) {
    }

    private readonly readings: HeartRateSensor | undefined;
}