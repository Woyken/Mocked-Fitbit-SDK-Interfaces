interface CompanionLocationChangeExtension {
    /**
     * Flag that indicates whether the application would like to be woken up upon significant location changes or not.
     *
     * An application should set it to *true* to be woken up, or *false* to ignore significant location changes.
     *
     * When an application is woken up by a significant location change, the **launchReasons** **locationChanged** property will be set to the GPS **Position** that triggered the waking up.
     */
    monitorSignificantLocationChanges: boolean;
    /**
     * Event handler invoked when a significant location change occurs while the application is running and has indicated that it wants to monitor significant location changes.
     */
    onsignificantlocationchange: ((this: Companion, event: SignificantLocationChangeEvent) => any) | undefined;
}

interface SignificantLocationChangeEvent {
    position: Position;
}
