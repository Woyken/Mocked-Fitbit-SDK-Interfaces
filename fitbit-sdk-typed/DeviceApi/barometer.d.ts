interface BarometerReading extends SensorReading {
    /**
     * Atmospheric pressure, in Pascal units (Pa).
     */
    readonly pressure: number | null;
}

interface BatchedBarometerReading extends BatchedSensorReading {
    /**
     * An array of atmospheric pressure, in Pascal units (Pa).
     */
    readonly pressure: Float32Array;
}

interface Barometer extends Sensor, BarometerReading {
    readonly readings?: BatchedBarometerReading;
    new(): Barometer;
}

declare module "barometer" {
    const Barometer: Barometer;
}
