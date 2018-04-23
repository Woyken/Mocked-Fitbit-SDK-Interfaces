type VibrationPatternName = "ring" | "bump" | "nudge" | "nudge-max" | "ping" | "confirmation" | "confirmation-max";

interface Vibration {
    start(pattern: VibrationPatternName): boolean;
    stop(): void;
}

declare module "haptics" {
    var vibration: Vibration;
}