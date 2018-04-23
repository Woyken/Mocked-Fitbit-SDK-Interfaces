interface TickEvent {
    date: Date;
}

interface Clock extends EventTarget {
    granularity: "off" | "seconds" | "minutes" | "hours";
    ontick: ((this: Clock, event: TickEvent) => any) | undefined;

    addEventListener(type: "tick", listener: (this: Clock, event: TickEvent) => any): void;
}

declare module "clock" {
    var clock: Clock;
}