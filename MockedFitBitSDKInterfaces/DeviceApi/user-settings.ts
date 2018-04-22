import { DeviceSettings } from "./UserSettings/deviceSettings";
import { ExerciseSettings } from "./UserSettings/exerciseSettings";
import { LocaleSettings } from "./UserSettings/localeSettings";
import { Preferences } from "./UserSettings/preferences";
import { UnitsSettings } from "./UserSettings/unitsSettings";

declare var preferences: Preferences;
export { preferences };

declare var exercise: ExerciseSettings;
export { exercise };

declare var device: DeviceSettings;
export { device };

declare var locale: LocaleSettings;
export { locale };

declare var units: UnitsSettings;
export { units };