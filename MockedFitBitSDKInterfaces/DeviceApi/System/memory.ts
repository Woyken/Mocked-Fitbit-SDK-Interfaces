import { MemoryPressureMonitor } from "./memoryPressureMonitor";
import { MemoryUsage } from "./memoryUsage";

export interface Memory {
    readonly js: MemoryUsage;
    readonly monitor: MemoryPressureMonitor;
    readonly native: MemoryUsage;
}