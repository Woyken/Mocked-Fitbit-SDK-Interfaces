interface HeartRateSensor extends Sensor, HeartRateSensorReading {
    readonly readings?: BatchedHeartRateSensorReading;
    new(options?: SensorOptions): HeartRateSensor;
}

interface BatchedHeartRateSensorReading extends BatchedSensorReading {
    readonly heartRate: Float32Array;
}

/**
 * Real-time measurement from the Heart Rate Monitor (HRM) sensor.
 */
interface HeartRateSensorReading extends SensorReading {
    /**
     * Heart rate in bpm (beats per minute)
     */
    readonly heartRate: number | null;
}



declare module "heart-rate" {
    const HeartRateSensor: HeartRateSensor;
}
