interface AccelerometerReading extends SensorReading {
    readonly x: number | null;
    readonly y: number | null;
    readonly z: number | null;
}

declare module "accelerometer" {
    class Accelerometer implements Sensor, AccelerometerReading {
        // Sensor implementation
        readonly activated: boolean;
        onactivate: ((this: Sensor, event: Event) => any) | undefined;
        onerror: ((this: Sensor, event: SensorErrorEvent) => any) | undefined;
        onreading: ((this: Sensor, event: Event) => any) | undefined;
        addEventListener(type: "activate" | "reading", listener: (this: Sensor, event: Event) => any): void;
        start(): void;
        stop(): void;
        // Sensor implementation End

        // AccelerometerReading implementation
        readonly timestamp: number | null;
        readonly x: number | null;
        readonly y: number | null;
        readonly z: number | null;
        // AccelerometerReading implementation End

        constructor (options?: SensorOptions);
    
        // readonly readings: AccelerometerReading | undefined;
    }
}