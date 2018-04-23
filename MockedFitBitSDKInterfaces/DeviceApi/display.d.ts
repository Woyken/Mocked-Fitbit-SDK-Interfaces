interface Display {
    autoOff: boolean;
    brightnessOverride: number | undefined;
    on: boolean;
    onchange: ((this: Display, event: Event) => any) | undefined;

    addEventListener(type: "change", listener: (this: Display, event: Event) => any): void;
    poke(): void;
}

declare module "display" {
    var display: Display;
}

