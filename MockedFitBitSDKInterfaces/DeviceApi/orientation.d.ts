interface OrientationSensorReading extends SensorReading {
    readonly quaternion: number[] | null;
}

declare module "orientation" {
    class OrientationSensor implements Sensor, OrientationSensorReading {
        // Sensor implementation
        activated: boolean;
        onactivate: (this: Sensor, event: Event) => any;
        onerror: (this: Sensor, event: SensorErrorEvent) => any;
        onreading: (this: Sensor, event: Event) => any;
        addEventListener(type: "activate" | "reading", listener: (this: Sensor, event: Event) => any): void;
        start(): void;
        stop(): void;
        // Sensor implementation End
    
        // OrientationSensorReading implementation
        readonly quaternion: number[] | null;
        readonly timestamp: number | null;
        // OrientationSensorReading implementation End
    
        constructor (options?: SensorOptions);
        //private readonly readings: OrientationSensorReading | undefined;
    }
}