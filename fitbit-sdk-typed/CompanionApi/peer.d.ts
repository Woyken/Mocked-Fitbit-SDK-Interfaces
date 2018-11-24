declare module "peer" {
    var device: PeerDevice;
    var app: PeerApp;
}

/**
 * Information and events related to the application running on the peer device.
 */
interface PeerApp extends EventTarget {
    addEventListener(type: "readystatechange", listener: (this: PeerApp, event: Event) => any): void;

    /**
     * Event handler for *readystatechange* events from this object.
     *
     * The *readystatechange* event is emitted when the peer application state changes. The new state can be obtained via the **readyState** property.
     */
    onreadystatechange: ((this: PeerApp, event: Event) => any) | undefined;
    /**
     * Current state of the peer application.
     * - *"started"* means that the peer application is running,
     * - *"stopped"* means that the peer application is not running,
     * - *"unknown"* means that the state of the peer application is unknown.
     *
     * State transitions can be observed by handling the readystatechange event.
     */
    readonly readyState: "unknown" | "started" | "stopped";
}

/**
 * Information related to the peer device.
 */
interface PeerDevice extends BasicDeviceInfo {
    /**
     * Device battery level.
     */
    readonly batteryLevel: "empty" | "low" | "medium" | "high" | "unknown";
}

