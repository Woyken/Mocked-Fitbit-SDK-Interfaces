interface MemoryUsage {
    readonly peak: number;
    readonly total: number;
    readonly used: number;
}

interface MemoryPressureMonitor extends EventTarget {
    onmemorypressurechange: ((this: MemoryPressureMonitor, event: Event) => any) | undefined;
    readonly pressure: "normal" | "high" | "critical";
    addEventListener(type: "memorypressurechange", listener: (this: MemoryPressureMonitor, event: Event) => any): void;
}

interface Memory {
    readonly js: MemoryUsage;
    readonly monitor: MemoryPressureMonitor;
    readonly native: MemoryUsage;
}

declare module "system" {
    var memory: Memory;
}