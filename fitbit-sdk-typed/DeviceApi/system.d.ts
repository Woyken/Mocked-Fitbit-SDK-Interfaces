interface Memory {
    /**
     * Memory usage details for JavaScript memory.
     */
    readonly js: MemoryUsage;
    /**
     * Memory pressure monitor.
     */
    readonly monitor: MemoryPressureMonitor;
    /**
     * Memory usage details for Native memory (graphics, operating system libraries, etc.)
     */
    readonly native: MemoryUsage;
}

/**
 * Monitor for memory pressure events.
 */
interface MemoryPressureMonitor extends EventTarget {
    /**
     * Event listener for changes in memory pressure conditions.
     */
    onmemorypressurechange: ((this: MemoryPressureMonitor, event: Event) => any) | undefined;
    /**
     * Memory pressure condition.
     *
     * "normal" means that the application's memory usage is normal.
     *
     * "high" means that the memory usage is high, and the application should try to release some memory as soon as possible.
     *
     * "critical" means that the application is close to running out of memory and risks being killed if some memory is not released immediately.
     */
    readonly pressure: "normal" | "high" | "critical";
}

interface MemoryUsage {
    /**
     * Maximum memory used since the application was launched, in bytes.
     */
    readonly peak: number;
    /**
     * Total memory available in bytes.
     */
    readonly total: number;
    /**
     * Current memory in use, in bytes.
     */
    readonly used: number;
}

declare module "system" {
    var memory: Memory;
}
