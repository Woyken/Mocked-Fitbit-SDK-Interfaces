/**
 * Functions of the device's vibration motor.
 */
interface Vibration {
    /**
     * Start a vibration pattern by name.
     * @param pattern
     */
    start(pattern: VibrationPatternName): boolean;
    /**
     * Stop a playing vibration pattern.
     *
     * If the vibration motor is currently playing a pattern, it will stop. It the vibration motor is not playing anything, this has no effect.
     */
    stop(): void;
}

type VibrationPatternName = "ring" | "bump" | "nudge" | "nudge-max" | "ping" | "confirmation" | "confirmation-max";

declare module "haptics" {
    var vibration: Vibration;
}
