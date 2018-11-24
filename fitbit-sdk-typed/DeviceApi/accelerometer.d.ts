interface AccelerometerReading extends SensorReading {
    /**
     * Acceleration along the x axis in m/s^2
     */
    readonly x: number | null;
    /**
     * Acceleration along the y axis in m/s^2
     */
    readonly y: number | null;
    /**
     * Acceleration along the z axis in m/s^2
     */
    readonly z: number | null;
}

interface BatchedAccelerometerReading extends BatchedSensorReading {
    /**
     * An array of acceleration along the x axis in m/s^2
     */
    readonly x: Float32Array;
    /**
     * An array of acceleration along the y axis in m/s^2
     */
    readonly y: Float32Array;
    /**
     * An array of acceleration along the z axis in m/s^2
     */
    readonly z: Float32Array;
}

interface Accelerometer extends Sensor, AccelerometerReading {
    readonly readings: BatchedAccelerometerReading | undefined;
    new(options?: SensorOptions): Accelerometer;
}


declare module "accelerometer" {
    const Accelerometer: Accelerometer;
}
