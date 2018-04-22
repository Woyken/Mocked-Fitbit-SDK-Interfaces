import { VibrationPatternName } from "./vibrationPatternName";

export interface Vibration {
    start(pattern: VibrationPatternName): boolean;
    stop(): void;
}