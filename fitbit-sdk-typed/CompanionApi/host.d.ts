/**
 * Information about the environment in which the companion runs
 */
interface Host {
    readonly app: { readonly name: string; readonly version: string; };
    readonly os: { readonly name: "Android" | "iOS" | "Windows"; readonly version: string; };
}

declare module "host" {
    var host: Host;
}
