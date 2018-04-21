import {  } from "../../sensors/sensorReading";

export interface AccelerometerReading extends SensorReading {
    readonly x: number | null;
    readonly y: number | null;
    readonly z: number | null;
}