import { DeviceSettings } from "./DeviceApi/UserSettings/deviceSettings";
import { ExerciseSettings } from "./DeviceApi/UserSettings/exerciseSettings";
import { LocaleSettings } from "./DeviceApi/UserSettings/localeSettings";
import { Preferences } from "./DeviceApi/UserSettings/preferences";
import { UnitsSettings } from "./DeviceApi/UserSettings/unitsSettings";

let preferences = new Preferences();
export { preferences };

let exercise = new ExerciseSettings();
export { exercise };

let device = new DeviceSettings();
export { device };

let locale = new LocaleSettings();
export { locale };

let units = new UnitsSettings();
export { units };