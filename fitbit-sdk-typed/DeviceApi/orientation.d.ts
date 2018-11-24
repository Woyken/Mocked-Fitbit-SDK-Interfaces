interface OrientationSensor extends Sensor, OrientationSensorReading {
    readonly readings?: BatchedOrientationSensorReading;

    new(options?: SensorOptions): OrientationSensor;
}

interface BatchedOrientationSensorReading {
    /**
     * An array containing the batched i factor values
     */
    readonly i: Float32Array;
    /**
     * An array containing the batched j factor values
     */
    readonly j: Float32Array;
    /**
     * An array containing the batched k factor values
     */
    readonly k: Float32Array;
    /**
     * An array containing the batched scalar values
     */
    readonly scalar: Float32Array;
}

interface OrientationSensorReading extends SensorReading {
    /**
     * A four-element array containing the components of the unit quaternion (a.k.a versor) representing the device's orientation.
     *
     * The first element of the array is the scalar part of the quaternion, and the last 3 elements form the i, j and k factors of the vector part. So if q is a quaternion reading, the quaternion can be written mathematically as:
     *
     * ```q[0] + q[1]i + q[2]j + q[3]k```
     */
    readonly quaternion: number[] | null;
}

declare module "orientation" {
    const OrientationSensor: OrientationSensor;
}
