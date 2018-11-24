interface TickEvent extends Event {
    date: Date;
}

interface Clock extends EventTarget {
    granularity: "off" | "seconds" | "minutes" | "hours";
    ontick?: ((this: Clock, event: TickEvent) => any);

    addEventListener(type: "tick", listener: (this: Clock, event: TickEvent) => any): void;
}

declare module "clock" {
    var clock: Clock;
    export default clock;
}
