/**
 * A Battery object represents the properties and events of a device's battery.
 */
interface Battery extends EventTarget {
    /**
     * Current battery charge level, as a percentage of maximum charge.
     *
     * Between 0 and 100 inclusive.
     */
    chargeLevel: number;
    /**
     * Flag indicating whether the battery is currently charging or not.
     */
    charging: boolean;
    /**
     * Event handler for the change event.
     */
    onchange?: ((this: Charger, event: Event) => any);
    /**
     * Estimation of the time until the battery is full, in minutes.
     *
     * This is just an estimation, as the actual charging time depends on many factors that may change over time.
     *
     * If the battery is full, this value is *0*. If the battery is not charging, this value is *Infinity*
     */
    timeUntilFull: number;
}

/**
 * A Charger object represents the properties and events associated with a power charger that may be connected to the device.
 */
interface Charger extends EventTarget {
    /**
     * Indicates whether a charger is connected, or not.
     */
    connected: boolean;
    /**
     * Event handler for the change event.
     */
    onchange?: ((this: Charger, event: Event) => any);
    /**
     * Indicates whether the power received from the charger is good or not.
     *
     * If no charger is connected, or the power quality cannot be determined, the value is *undefined*.
     */
    powerIsGood?: boolean;
}

declare module "power" {
    var charger: Charger;
    var battery: Battery;
}
