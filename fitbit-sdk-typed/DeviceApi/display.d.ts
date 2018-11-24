interface Display {
    /**
     * Whether the display should turn off automatically after a certain time.
     */
    autoOff: boolean;
    /**
     * Forced brightness of the display as a fraction of the maximum brightness. This value is ignored when the display is not on. When the value is *undefined*, the brightness is not overridden (it is set and managed by the system).
     *
     * The range is between 0.0 (backlight off) and 1.0 (maximum brightness). Values outside the range [0.0-1.0] are clamped.
     */
    brightnessOverride?: number;
    /**
     * Whether the display is on or off.
     *
     * The value *true* means that the display is on, and *false* that the display is off. This property is read/write, so it can be used to query the state of the display and/or change its state.
     */
    on: boolean;
    /**
     * Event handler for the change event.
     */
    onchange?: ((this: Display, event: Event) => any);
    /**
     * Add an event handler for the change event.
     * This event is emitted whenever the display is turned on or off.
     *
     * NOTE: setting the value of the [on] property to true or false does not trigger change event. Only on/off transitions caused by other parts of the system (such as the autoOff timer) trigger this event.
     */
    addEventListener(type: "change", listener: (this: Display, event: Event) => any): void;
    /**
     * Turn the display on and restart the autoOff timer, if enabled.
     *
     * Calling this function will ensure that the display remains on for at least the duration of the auto-off timeout. If **autoOff** is set to *false*, this function simply turns the display on.
     */
    poke(): void;
}

declare module "display" {
    var display: Display;
}

