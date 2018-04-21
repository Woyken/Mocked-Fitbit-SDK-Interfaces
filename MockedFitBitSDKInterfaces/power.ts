import { Battery } from "./DeviceApi/Power/battery";
import { Charger } from "./DeviceApi/Power/charger";

let charger = new Charger();
export { charger };

let battery = new Battery();
export { battery };