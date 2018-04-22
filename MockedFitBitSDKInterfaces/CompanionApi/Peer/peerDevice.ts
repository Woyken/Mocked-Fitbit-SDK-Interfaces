import { BasicDeviceInfo } from "../../CommonApi/DeviceInfo/basicDeviceInfo";

export interface PeerDevice extends BasicDeviceInfo {
    readonly batteryLevel: "empty" | "low" | "medium" | "high" | "unknown";
}