/**
 * Information related to the peer device.
 */
declare interface BasicDeviceInfo {
    /**
     * Time at which the device was last sync'ed.
     */
    readonly lastSyncTime: Date;
    /**
     * Device model identifier. Developer-facing device model ID.
     *
     * NOTE: the model identifier is always the same for a given device, even when the model name may change.
     */
    readonly modelId: string;
    /**
     * Device model name. User-facing device model name as displayed in the Fitbit mobile application.
     *
     * NOTE: the model name may change over time for a given device as it may be different before and after a device is released commercially. Once a device is released commercially, the model name remains the same.
     */
    readonly modelName: string;
    /**
     * Device screen information.
     */
    readonly screen: { readonly width: number; readonly height: number; };
    /**
     * Device type. Standard device types include *WATCH* for smart watches and *TRACKER* for trackers.
     */
    readonly type: string;
}
