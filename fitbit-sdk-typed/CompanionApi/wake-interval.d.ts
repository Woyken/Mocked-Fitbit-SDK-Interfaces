interface CompanionWakeIntervalExtension {
    /**
     * Triggered if the wakeInterval elapses while the companion is still running.
     */
    onwakeinterval?: ((this: Companion, event: Event) => any);
    /**
     * The interval, specified in milliseconds, after which the runtime will try to wake up/(re)launch the companion, or *undefined* (default) if the companion should not be woken up automatically.
     *
     * This value is a mere guidance to the runtime, not a guarantee to be woken up.
     *
     * Setting it to *0* or *null* has the same effect as setting it to *undefined* - however this property will never be set to those values by the system.
     *
     * A range error will occur if this property is set to a value that is negative, infinite, or below *5* minutes (300,000 milliseconds), in which case the property value won't be changed.
     */
    wakeInterval?: number;
}
