import { SensorReading } from "../Sensors/sensorReading";

export interface OrientationSensorReading extends SensorReading {
    readonly quaternion: number[] | null;
}