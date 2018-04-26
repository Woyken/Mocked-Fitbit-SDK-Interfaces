interface Sensor {
    readonly isactivated: boolean;
    onactivate: ((this: Sensor, event: Event) => any) | undefined;
    onerror: ((this: Sensor, event: SensorErrorEvent) => any) | undefined;
    onreading: ((this: Sensor, event: Event) => any) | undefined;
    addEventListener(type: "activate" | "reading", listener: (this: Sensor, event: Event) => any): void;
    start(): void;
    stop(): void;
}

interface SensorErrorEvent {
    readonly error: Error;
}

interface SensorOptions {
    readonly frequency?: number | undefined;
}

interface SensorReading {
    readonly timestamp: number | null;
}