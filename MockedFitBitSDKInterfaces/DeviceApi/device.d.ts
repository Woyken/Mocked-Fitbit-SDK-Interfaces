interface Device extends BasicDeviceInfo {
    firmwareVersion: string;
}

declare module "device" {
    var me: Device;
}