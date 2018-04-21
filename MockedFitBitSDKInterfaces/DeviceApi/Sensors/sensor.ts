import { Event } from "../Events/event";
import { SensorErrorEvent } from "./sensorErrorEvent";

export interface Sensor {
    readonly activated: boolean;
    onactivate: ((this: Sensor, event: Event) => any) | undefined;
    onerror: ((this: Sensor, event: SensorErrorEvent) => any) | undefined;
    onreading: ((this: Sensor, event: Event) => any) | undefined;
    addEventListener(type: "activate" | "reading", listener: (this: Sensor, event: Event) => any): void;
    start(): void;
    stop(): void;
}