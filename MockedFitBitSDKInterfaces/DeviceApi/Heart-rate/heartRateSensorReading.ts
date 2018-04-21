import { SensorReading } from "../Sensors/sensorReading";

export interface HeartRateSensorReading extends SensorReading {
    readonly heartRate: number | null;
}