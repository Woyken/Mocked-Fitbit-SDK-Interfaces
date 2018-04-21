import { EventTarget } from "../Events/eventTarget";

export interface MemoryPressureMonitor extends EventTarget {
    onmemorypressurechange: ((this: MemoryPressureMonitor, event: Event) => any) | undefined;
    readonly pressure: "normal" | "high" | "critical";
    addEventListener(type: "memorypressurechange", listener: (this: MemoryPressureMonitor, event: Event) => any): void;
}