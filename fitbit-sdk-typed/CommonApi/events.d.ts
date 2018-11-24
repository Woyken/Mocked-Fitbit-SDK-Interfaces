interface Event {
    /**
     * Set to true when the default handling was prevented
     */
    readonly defaultPrevented: boolean;
    /**
     * Target of the event
     */
    readonly target?: EventTarget;
    /**
     * Type of the event
     */
    readonly type: string;

    /**
     * Prevent the default handling of this event
     */
    preventDefault(): void;
    /**
     * Stop the propagation of the event immediately
     */
    stopImmediatePropagation(): void;
    /**
     * Stop the propagation of the event
     */
    stopPropagation(): void;
}

interface EventInit {
}

/**
 * The EventListener interface is the primary method for handling events.
 */
interface EventListener {
}

/**
 * EventTarget is an interface implemented by objects that can receive events and may have listeners for them.
 */
interface EventTarget {
    /**
     * This method adds the specified listener object to the list of event listeners (for the specified event type) on the EventTarget on which it's called.
     * @param type
     * @param listener
     */
    addEventListener(type: string, listener: EventListener): void;
    /**
     * Dispatches an Event at the specified EventTarget, invoking the affected **EventListener** in the appropriate order.
     * @param event
     */
    dispatchEvent(event: Event): boolean;
    /**
     * This method removes from the EventTarget an event listener previously registered with **addEventListener**.
     * @param type
     * @param listener
     */
    removeEventListener(type: string, listener: EventListener): void;
}
