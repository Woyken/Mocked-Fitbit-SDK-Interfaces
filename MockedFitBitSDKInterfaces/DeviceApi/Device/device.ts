import { BasicDeviceInfo } from "../../CommonApi/DeviceInfo/basicDeviceInfo";

export interface Device extends BasicDeviceInfo {
    firmwareVersion: string;
}