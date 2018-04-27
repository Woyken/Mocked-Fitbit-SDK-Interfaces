interface AccelerometerReading extends SensorReading {
    readonly x: number | null;
    readonly y: number | null;
    readonly z: number | null;
}

interface Accelerometer extends Sensor, AccelerometerReading {
    // readonly readings: AccelerometerReading | undefined;
}

interface AccelerometerConstructor {
    new(options?: SensorOptions): Accelerometer;
}

declare module "accelerometer" {
    const Accelerometer: AccelerometerConstructor;
}