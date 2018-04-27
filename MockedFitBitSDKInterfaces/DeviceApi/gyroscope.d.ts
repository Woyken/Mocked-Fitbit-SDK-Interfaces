interface GyroscopeReading extends SensorReading {
    readonly x: number | null;
    readonly y: number | null;
    readonly z: number | null;
}

interface Gyroscope extends Sensor, GyroscopeReading {
    // readonly readings: GyroscopeReading | undefined;
}

interface GyroscopeConstructor {
    /**
     * constructor for Gyroscope.
     * @param options Optional SensorOptions to create sensor with. Ex. { frequency: 5 }.
     */
    new(options?: SensorOptions): Gyroscope;
}

declare module "gyroscope" {
    const Gyroscope: GyroscopeConstructor;
}