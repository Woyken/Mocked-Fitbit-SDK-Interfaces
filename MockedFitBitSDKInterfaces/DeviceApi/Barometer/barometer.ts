import { Event } from "../Events/event";
import { Sensor } from "../sensors/sensor";
import { SensorErrorEvent } from "../sensors/sensorErrorEvent";
import { BarometerReading } from "./barometerReading";

export class Barometer implements Sensor, BarometerReading {
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

    // BarometerReading implementation
    readonly pressure: number | null;
    // BarometerReading implementation End

    private readonly readings: BarometerReading | undefined;
}