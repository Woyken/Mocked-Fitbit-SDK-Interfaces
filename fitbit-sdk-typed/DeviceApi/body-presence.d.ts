interface BodyPresenceSensor extends Sensor {
    readonly present: boolean;
    new(): Barometer;
}
