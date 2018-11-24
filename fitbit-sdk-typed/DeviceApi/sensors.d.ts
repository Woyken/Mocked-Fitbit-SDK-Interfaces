interface Sensor extends EventTarget {
    /**
     * Documented as **activated**, actual value is stored here.
     *
     * Flag that indicates if the sensor is activated or not. When a sensor is created, the sensor is not activated, thus the initial value of this property equals *false*.
     */
    readonly isactivated: boolean;
    /**
     * Event handler that is called when the sensor is activated.
     */
    onactivate?: ((this: Sensor, event: Event) => any);
    /**
     * Event handler that is called when an error occurs. When an error occurs, the sensor is automatically stopped, and the **activated** property equals *false*.
     */
    onerror?: ((this: Sensor, event: SensorErrorEvent) => any);
    /**
     * Event handler that is called whenever a new reading is available.
     */
    onreading?: ((this: Sensor, event: Event) => any);
    addEventListener(type: "activate" | "reading", listener: (this: Sensor, event: Event) => any): void;
    /**
     * Start the sensor. This will cause the sensor to start and become activated.
     */
    start(): void;
    /**
     * Stop the sensor. This will cause the sensor to stop and become deactivated. The onreading event handler will no longer be called when the sensor is deactivated.
     */
    stop(): void;
}

interface SensorErrorEvent {
    /**
     * Set to *true* when the default handling was prevented
     */
    readonly error: Error;
    /**
     * Target of the event
     */
    readonly target?: EventTarget;
    /**
     * Type of the event
     */
    readonly type: string;
}

interface SensorOptions {
    /**
     * Desired batch size.
     * Requesting a batch size is an indication to the sensor that readings should be reported by batches of batch count.
     *
     * NOTE: when operating in batch mode, the frequency still represents the sensor's sampling frequency, not the batch reporting frequency.
     */
    readonly batch?: number;
    /**
     * Desired sampling frequency in Hz
     *
     * The actual sampling frequency of the sensor may be different from the desired frequency, depending on various constraints from the driver and/or hardware capabilities.
     *
     * NOTE: the **timestamp** property of sensor readings may be used to determine the actual sampling frequency in effect when the sensor is running.
     */
    readonly frequency?: number;
}

interface SensorReading {
    readonly timestamp: number | null;
}

interface BatchedSensorReading {
    readonly timestamp: Float32Array;
}
