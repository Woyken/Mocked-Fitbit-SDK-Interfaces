declare module "user-settings" {
    var preferences: Preferences;
    var exercise: ExerciseSettings;
    var device: DeviceSettings;
    var locale: DeviceLocaleSettings;
    var units: UnitsSettings;
}

/**
 * User preferences for the current user.
 */
interface Preferences {
    /**
     * Indicates whether clocks and time values should use a 12h (AM/PM) or 24h format
     */
    readonly clockDisplay: "12h" | "24h";
    /**
     * Indicates what day should be considered the first day of the week.
     *
     * The value is a day index that has the same meaning as the day index returned by the JavaScript function *Date.prototype.getDay()*:
     *
     * 0 for Sunday, 1 for Monday.
     */
    readonly firstDayOfWeek: 0 | 1;
}

/**
 * Settings related to exercises.
 */
interface ExerciseSettings {
    /**
     * Swimming pool length, in meters.
     */
    readonly poolLength: number;
}

/**
 * Device settings represents device-level settings that are controlled by the user, typically through the device's settings screen/application.
 */
interface DeviceSettings {
    /**
     * Indicates whether the device is in airplane mode, or not.
     */
    readonly airplaneModeEnabled: boolean;
    /**
     * Indicates whether device vibration is enabled, or not.
     */
    readonly vibrationEnabled: boolean;
}

/**
 * Locale settings are settings that relate to a user's preferred language.
 */
interface DeviceLocaleSettings {
    /**
     * BCP 47 language tag.
     */
    readonly language: string;
}

/**
 * User settings for units.
 *
 * Unit settings indicate the preferred units to use when displaying values that have an associated unit.
 *
 * These unit preferences may be units or families of units. The appropriate unit from a family should be chosen based on the magnitude of the value and its context. For example, short distances with a "metric" unit may be displayed as "m" or "km" depending on the context.
 * - The unit family "us" means the United States Customary System (USCS or USC)
 * - The unit family "metric" means the International System of Units (SI)
 */
interface UnitsSettings {
    /**
     * Unit family to use for body weight (or, more accurately, body mass).
     * - *"metric"*: typically kilograms
     * - *"us"*: typically pounds
     * - *"stone"*: stones
     */
    readonly bodyWeight: "metric" | "us" | "stone";
    /**
     * Unit family to use for distances.
     * - *"metric"*: typically meters or kilometers
     * - *"us"*: typically feet or miles
     */
    readonly distance: "metric" | "us";
    /**
     * Unit family to use for a person's height.
     * - *"metric"*: meters or centimeters
     * - *"us"*: feet and inches
     */
    readonly height: "metric" | "us";
    /**
     * Unit family to use for speeds.
     * - *"metric"*: typically kilometers per hour
     * - *"us"*: typically miles per hour
     */
    readonly speed: "metric" | "us";
    /**
     * Unit family to use for temperatures.
     * - *"C"*: Celsius scale
     * - *"F"*: Fahrenheit scale
     */
    readonly temperature: "C" | "F";
    /**
     * Unit family to use for volumes (volume of liquid for example).
     * - *"metric"*: typically liters
     * - *"us"*: typically fluid ounces
     */
    readonly volume: "metric" | "us";
    /**
     * Unit family to use for a weight (or, more accurately, a mass) other than body weight.
     * - *"metric"*: typically kilograms
     * - *"us"*: typically pounds
     */
    readonly weight: "metric" | "us";
}


