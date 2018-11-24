interface Appbit extends EventTarget {
    /**
     * Whether the app should time out after a period of inactivity. The default is *true* after an application is launched.
     *
     * The value *true* means that the application will be killed after 2 minutes of inactivity, and *false* means that the application will not be killed due to inactivity, and may run indefinitely.
     *
     * NOTE: the duration of the timeout is managed by the system and is not configurable using this API.
     */
    appTimeoutEnabled: boolean
    /**
     * Application identifier under which the current application is running.
     */
    readonly applicationId: string;
    /**
     * Application build identifier under which the current application is running.
     */
    readonly buildId: string;
    /**
     * Event listener for the unload event. The app will unload after all event listeners have been executed.
     *
     * Blocking the execution for too long will result in sudden termination of the application. Behavior of asynchronous API calls from the listener is undefined.
     */
    onunload?: ((this: Appbit, event: Event) => any) | undefined;
    /**
     * Permissions that have been granted or denied to the application.
     */
    readonly permissions: Permissions;
    /**
     * Request to exit the application. This is an asynchronous request to exit.
     *
     * The application will be unloaded after the current event loop iteration finishes. The *unload* event will be emitted before the application is unloaded.
     */
    exit(): void;
}

declare module "appbit" {
    var me: Appbit;
}
