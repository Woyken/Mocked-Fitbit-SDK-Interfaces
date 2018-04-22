import { Permissions } from "../../CommonApi/Permissions/permissions";


export interface Appbit {
    readonly applicationId: string;
    readonly buildId: string;
    onunload: ((this: Appbit, event: Event) => any) | undefined;
    readonly permissions: Permissions;

    addEventListener(type: "unload", listener: (this: Appbit, event: Event) => any): void;
    exit(): void;
}