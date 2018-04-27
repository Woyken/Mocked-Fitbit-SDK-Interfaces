interface OrientationSensorReading extends SensorReading {
    readonly quaternion: number[] | null;
}

interface OrientationSensor extends Sensor, OrientationSensorReading {
    // readonly readings: OrientationSensorReading | undefined;
}

interface OrientationSensorConstructor {
    new(options?: SensorOptions): OrientationSensor;
}

declare module "orientation" {
    const OrientationSensor: OrientationSensorConstructor;
}