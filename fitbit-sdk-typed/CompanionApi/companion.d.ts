declare module "companion" {
    var me: Companion;
}

/**
 * The Companion interface provides information about the running companion application, access to permissions, environment informations and oAuth access tokens.
 */
interface Companion extends EventTarget, CompanionLifeCycleExtension, CompanionLocationChangeExtension, CompanionWakeIntervalExtension {
    /**
     * Application identifier under which the current application is running.
     */
    readonly applicationId: string;
    /**
     * Application build identifier under which the current application is running.
     */
    readonly buildId: string;
    /**
     * Information about the environment in which the companion runs.
     */
    readonly host: string;
    /**
     * Permissions that have been granted or denied to the application.
     */
    readonly permissions: Permissions;
}
