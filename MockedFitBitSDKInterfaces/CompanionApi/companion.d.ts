interface CompanionWakeIntervalExtension {
    onwakeinterval: ((this: Companion, event: Event) => any) | undefined;
    wakeInterval: number | undefined;
}

interface SignificantLocationChangeEvent {
    position: Position;
}

interface CompanionLocationChangeExtension {
    monitorSignificantLocationChanges: boolean;
    onsignificantlocationchange: ((this: Companion, event: SignificantLocationChangeEvent) => any) | undefined;
}

interface LaunchReasons {
    readonly locationChanged: { position: Position; } | undefined;
    readonly peerAppLaunched: boolean | undefined;
    readonly settingsChanged: boolean | undefined;
    readonly wokenUp: boolean | undefined;
}

interface CompanionLifeCycleExtension {
    readonly launchReasons: LaunchReasons;
    onunload: ((this: Companion, event: Event) => any) | undefined;

    yield(): void;
}

interface Companion extends EventTarget, CompanionLifeCycleExtension, CompanionLocationChangeExtension, CompanionWakeIntervalExtension {
    readonly applicationId: string;
    readonly buildId: string;
    readonly host: string;
    readonly permissions: Permissions;
}

declare module "companion" {
    var me: Companion;
}