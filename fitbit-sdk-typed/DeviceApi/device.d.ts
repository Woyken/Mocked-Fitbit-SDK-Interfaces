interface Device extends BasicDeviceInfo {
    /**
     * Version of the device firmware. Usually represented as X.Y.Z where X, Y and Z are integers.
     */
    firmwareVersion: string;
}

declare module "device" {
    var me: Device;
}
