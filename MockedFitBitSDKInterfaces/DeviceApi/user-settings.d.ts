interface DeviceSettings {
    readonly airplaneModeEnabled: boolean;
    readonly vibrationEnabled: boolean;
}

interface ExerciseSettings {
    readonly poolLength: number;
}

interface DeviceLocaleSettings {
    readonly language: string;
}

interface Preferences {
    readonly clockDisplay: "12h" | "24h";
    readonly firstDayOfWeek: 0 | 1;
}

interface UnitsSettings {
    readonly bodyWeight: "metric" | "us" | "stone";
    readonly distance: "metric" | "us";
    readonly height: "metric" | "us";
    readonly speed: "metric" | "us";
    readonly temperature: "C" | "F";
    readonly volume: "metric" | "us";
    readonly weight: "metric" | "us";
}

declare module "user-settings" {
    var preferences: Preferences;
    var exercise: ExerciseSettings;
    var device: DeviceSettings;
    var locale: DeviceLocaleSettings;
    var units: UnitsSettings;
}
