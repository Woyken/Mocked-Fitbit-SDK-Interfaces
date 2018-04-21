import { MemoryPressureMonitor } from "./memoryPressureMonitor";
import { MemoryUsage } from "./memoryUsage";

export class Memory {
    readonly js: MemoryUsage;
    readonly monitor: MemoryPressureMonitor;
    readonly native: MemoryUsage;
}