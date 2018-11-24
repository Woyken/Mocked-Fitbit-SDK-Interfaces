declare module "user-profile" {
    var user: UserProfile;
}

/**
 * Properties for values that are not available (because they are unknown or the application does not have the permission to access them) have the value *undefined*.
 */
interface UserProfile {
    /**
     * User's age in years.
     */
    readonly age?: number;
    /**
     * User's basal metabolic rate in kcal/day.
     */
    readonly bmr?: number;
    /**
     * User's gender.
     */
    readonly gender?: "male" | "female";
    /**
     * User's height in meters.
     */
    readonly height?: number;
    /**
     * User's resting heart rate in bpm (beats per minute).
     */
    readonly restingHeartRate?: number;
    /**
     * User's stride
     */
    readonly stride: {
        readonly walk?: number;
        readonly run?: number;
    };
    /**
     * User's weight in kilograms.
     */
    readonly weight?: number;

    /**
     * Get the heart rate zone for a given heart rate.
     *
     * When the user has not configured a custom zone, the possible values are, in order of increasing heart rate:
     * - *"out-of-range"* when the heart rate is below the "Fat Burn" zone.
     * - *"fat-burn"* when the heart rate is in the "Fat Burn" zone.
     * - *"cardio"* when the heart rate is in the "Cardio" zone.
     * - *"peak"* when the heart rate is above the "Cardio" zone.
     *
     * When the user has configured a custom zone, the possible values are, in order of increasing heart rate:
     * - *"below-custom"* when the heart rate is below the custom zone.
     * - *"custom"* when the heart rate is in the custom zone.
     * - *"above-custom"* when the heart rate is above the custom zone.
     * @param heartRate
     */
    heartRateZone(heartRate: number): "out-of-range" | "fat-burn" | "cardio" | "peak" | "below-custom" | "custom" | "above-custom";
}
