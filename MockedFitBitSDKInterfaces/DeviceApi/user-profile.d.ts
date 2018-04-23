interface UserProfile {
    readonly age: number | undefined;
    readonly bmr: number | undefined;
    readonly gender: "male" | "female" | undefined;
    readonly height: number | undefined;
    readonly restingHeartRate: number | undefined;
    readonly stride: { readonly walk: number | undefined; readonly run: number | undefined; };
    readonly weight: number | undefined;

    heartRateZone(heartRate: number): "out-of-range" | "fat-burn" | "cardio" | "peak" | "below-custom" | "custom" | "above-custom";
}

declare module "user-profile" {
    var user: UserProfile;
}