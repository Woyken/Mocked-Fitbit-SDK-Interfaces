import { BasicDeviceInfo } from "../../CommonApi/DeviceInfo/basicDeviceInfo";

export class Device implements BasicDeviceInfo {
    // BasicDeviceInfo implementation
    lastSyncTime: Date;
    modelId: string;
    modelName: string;
    screen: { readonly width: number; readonly height: number; };
    type: string;
    // BasicDeviceInfo implementation End

    firmwareVersion: string;
}