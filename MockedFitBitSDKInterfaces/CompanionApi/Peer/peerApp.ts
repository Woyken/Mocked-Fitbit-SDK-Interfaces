import { EventTarget } from "../../deviceApi/Events/eventTarget";

export interface PeerApp extends EventTarget {
    addEventListener(type: "readystatechange", listener: (this: PeerApp, event: Event) => any): void;

    onreadystatechange: ((this: PeerApp, event: Event) => any) | undefined;
    readonly readyState: "unknown" | "started" | "stopped";
}

