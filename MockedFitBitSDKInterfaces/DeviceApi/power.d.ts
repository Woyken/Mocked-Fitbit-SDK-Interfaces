interface Battery extends EventTarget {
    // EventTarget implementation
    addEventListener(type: "change", listener: (this: Charger, event: Event) => any): void;
    // EventTarget implementation End

    chargeLevel: number;
    charging: boolean;
    onchange: ((this: Charger, event: Event) => any) | undefined;
    timeUntilFull: number;
}

interface Charger extends EventTarget {
    // EventTarget implementation
    addEventListener(type: "change", listener: (this: Charger, event: Event) => any): void;
    // EventTarget implementation End

    connected: boolean;
    onchange: ((this: Charger, event: Event) => any) | undefined;
    powerIsGood: boolean | undefined;
}

declare module "power" {
    var charger: Charger;
    var battery: Battery;
}