interface PeerApp extends EventTarget {
    addEventListener(type: "readystatechange", listener: (this: PeerApp, event: Event) => any): void;

    onreadystatechange: ((this: PeerApp, event: Event) => any) | undefined;
    readonly readyState: "unknown" | "started" | "stopped";
}

interface PeerDevice extends BasicDeviceInfo {
    readonly batteryLevel: "empty" | "low" | "medium" | "high" | "unknown";
}

declare module "peer" {
    var app: PeerApp;
    var device: PeerDevice;
}