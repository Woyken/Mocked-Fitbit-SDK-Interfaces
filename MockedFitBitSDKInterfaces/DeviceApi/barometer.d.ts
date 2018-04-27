interface BarometerReading {
    readonly pressure: number | null;
}

interface Barometer extends Sensor, BarometerReading {
    // readonly readings: BarometerReading | undefined;
}

interface BarometerConstructor {
    new(): Barometer;
}

declare module "barometer" {
    const Barometer: BarometerConstructor;
}