
interface Gyroscope extends Sensor, GyroscopeReading {
    readonly readings?: BatchedGyroscopeReading;
    /**
     * constructor for Gyroscope.
     * @param options Optional SensorOptions to create sensor with. Ex. { frequency: 5 }.
     */
    new(options?: SensorOptions): Gyroscope;
}

interface GyroscopeReading extends SensorReading {
    /**
     * Angular velocity around the x axis in rad/s
     */
    readonly x: number | null;
    /**
     * Angular velocity around the y axis in rad/s
     */
    readonly y: number | null;
    /**
     * Angular velocity around the z axis in rad/s
     */
    readonly z: number | null;
}

interface BatchedGyroscopeReading extends BatchedSensorReading {
    /**
     * An array of angular velocity around the x axis in rad/s
     */
    readonly x: Float32Array;
    /**
     * An array of angular velocity around the y axis in rad/s
     */
    readonly y: Float32Array;
    /**
     * An array of angular velocity around the z axis in rad/s
     */
    readonly z: Float32Array;
}



declare module "gyroscope" {
    const Gyroscope: Gyroscope;
}
