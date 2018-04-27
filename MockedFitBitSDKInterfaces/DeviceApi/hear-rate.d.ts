interface HeartRateSensorReading extends SensorReading {
    readonly heartRate: number | null;
}

interface HeartRateSensor extends Sensor, HeartRateSensorReading {
    // readonly readings: HeartRateSensor | undefined;
}

interface HeartRateConstructor {
    new(options?: SensorOptions): HeartRateSensor;
}

declare module "heart-rate" {
    const HeartRateSensor: HeartRateConstructor;
}