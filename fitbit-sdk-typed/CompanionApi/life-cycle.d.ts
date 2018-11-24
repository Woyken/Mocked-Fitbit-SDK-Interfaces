interface CompanionLifeCycleExtension {
    /**
     * Reasons why the application is currently running.
     */
    readonly launchReasons: LaunchReasons;
    /**
     * Adds an event listener for when the app is going to be unloaded which can happen any time.
     *
     * The app will unload after all event listeners have been executed.
     *
     * NOTE: Blocking the execution for too long will result in sudden termination of the application. Behavior of asynchronous API calls from the listener is undefined.
     */
    onunload: ((this: Companion, event: Event) => any) | undefined;

    /**
     * Applications can indicate that they would like to be unloaded. This gives other apps the chance to run instead.
     *
     * However, the runtime might decide to keep the application running.
     */
    yield(): void;
}

/**
 * Contains the reasons why the application was launched. Multiple reasons, at least one might be set.
 */
interface LaunchReasons {
    /**
     * Set and contains the latest **Position** update received from the GPS module.
     */
    readonly locationChanged?: { position: Position; };
    /**
     * Set to *true* if the peer app was launched on the device.
     */
    readonly peerAppLaunched?: boolean;
    /**
     * Set to *true* if the companion was woken up because of changes to the **settingsStorage**.
     */
    readonly settingsChanged?: boolean;
    /**
     * Set to *true* if the companion was woken up by a periodic timer
     */
    readonly wokenUp?: boolean;
}
