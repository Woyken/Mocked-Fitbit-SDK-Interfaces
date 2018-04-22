export interface LaunchReasons {
    readonly locationChanged: { position: Position; } | undefined;
    readonly peerAppLaunched: boolean | undefined;
    readonly settingsChanged: boolean | undefined;
    readonly wokenUp: boolean | undefined;
}